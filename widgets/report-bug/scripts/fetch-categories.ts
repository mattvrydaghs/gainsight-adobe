/**
 * Build-time script to fetch categories with ideas enabled
 * Run this before building the widget to populate categories data
 * 
 * Authentication: OAuth2 with client credentials flow
 * Requires: COMMUNITY_API_URL, COMMUNITY_API_CLIENT_ID, COMMUNITY_API_CLIENT_SECRET
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface Category {
  id: string;
  name: string;
  description?: string;
  image?: string | null;
  topicsCount: number;
}

interface CategoriesData {
  categories: Category[];
  lastUpdated: string;
}

interface OAuth2Token {
  access_token: string;
  token_type: string;
  expires_in: number;
  expiresAt: number;
}

/**
 * Loads environment variables from .env.local file
 */
function loadEnvFile(): Record<string, string> {
  const envVars: Record<string, string> = {};
  
  // Try to find .env.local in current directory and project root
  const possiblePaths = [
    path.join(__dirname, ".env.local"),
    path.join(__dirname, "../.env.local"),
    path.join(__dirname, "../../.env.local"),
  ];

  for (const envPath of possiblePaths) {
    try {
      if (fs.existsSync(envPath)) {
        console.log(`📄 Loading environment variables from ${envPath}`);
        const content = fs.readFileSync(envPath, "utf-8");
        
        // Parse .env file format (KEY=VALUE, one per line)
        const lines = content.split("\n");
        for (const line of lines) {
          const trimmed = line.trim();
          
          // Skip empty lines and comments
          if (!trimmed || trimmed.startsWith("#")) {
            continue;
          }
          
          // Parse KEY=VALUE
          const [key, ...valueParts] = trimmed.split("=");
          const cleanKey = key.trim();
          const cleanValue = valueParts.join("=").trim();
          
          if (cleanKey) {
            // Remove quotes if present
            const unquoted = cleanValue.replace(/^["']|["']$/g, "");
            envVars[cleanKey] = unquoted;
          }
        }
        
        console.log(`✅ Loaded ${Object.keys(envVars).length} environment variables`);
        return envVars;
      }
    } catch (error) {
      console.warn(`⚠️  Could not read ${envPath}:`, error);
    }
  }

  console.warn("⚠️  No .env.local file found. Using process.env and defaults.");
  return {};
}

/**
 * Gets environment variable from .env.local or process.env
 */
function getEnvVar(key: string, envVars: Record<string, string>): string | undefined {
  return envVars[key] || process.env[key];
}

/**
 * Gets OAuth2 access token using client credentials flow
 */
async function getOAuth2Token(
  tokenUrl: string,
  clientId: string,
  clientSecret: string
): Promise<OAuth2Token> {
  console.log("🔐 Requesting OAuth2 token...");

  try {
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
        scope:"read"
      }).toString(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `OAuth2 authentication failed: ${response.status} - ${errorText}`
      );
    }

    const tokenData = await response.json();
    const token: OAuth2Token = {
      access_token: tokenData.access_token,
      token_type: tokenData.token_type || "Bearer",
      expires_in: tokenData.expires_in || 3600,
      expiresAt: Date.now() + (tokenData.expires_in || 3600) * 1000,
    };

    console.log(
      `✅ OAuth2 token obtained (expires in ${token.expires_in} seconds)`
    );
    return token;
  } catch (error) {
    console.error(tokenUrl, clientId, "****");
    console.error("❌ OAuth2 authentication failed:", error);
    throw error;
  }
}

/**
 * Fetches all categories and filters for those with ideas enabled
 * This uses the Community API to get category metadata
 * Authentication: OAuth2 with client credentials
 * 
 * OAuth2 Configuration (from API_SPEC):
 *   - Type: oauth2
 *   - Flow: clientCredentials
 *   - tokenUrl: /oauth2/token
 *   - scopes: read, write
 * 
 * API Endpoint: /category/getTree
 *   - Returns hierarchical category tree with module information
 *   - Filters: community module, supportedContentTypes includes "idea"
 */
async function fetchCategoriesWithIdeas(envVars: Record<string, string>): Promise<CategoriesData> {
  // Configuration from environment variables
  const API_BASE_URL = getEnvVar("COMMUNITY_API_URL", envVars) || "https://api.example.com/v2";
  const TOKEN_URL =
    getEnvVar("COMMUNITY_OAUTH_TOKEN_URL", envVars) || `${API_BASE_URL}/../oauth2/token`;
  const CLIENT_ID = getEnvVar("COMMUNITY_API_CLIENT_ID", envVars);
  const CLIENT_SECRET = getEnvVar("COMMUNITY_API_CLIENT_SECRET", envVars);

  // Validate required environment variables
  if (!CLIENT_ID || !CLIENT_SECRET) {
    console.warn(
      "⚠️  COMMUNITY_API_CLIENT_ID or COMMUNITY_API_CLIENT_SECRET not set."
    );
    console.warn("   Using mock data for development.");
    console.warn(
      "\n   To use real API, set environment variables in .env.local:"
    );
    console.warn("   COMMUNITY_API_URL=https://api.example.com/v2");
    console.warn("   COMMUNITY_OAUTH_TOKEN_URL=https://api.example.com/oauth2/token");
    console.warn("   COMMUNITY_API_CLIENT_ID=your-client-id");
    console.warn("   COMMUNITY_API_CLIENT_SECRET=your-client-secret");
    return generateMockData();
  }

  try {
    // Get OAuth2 token
    const token = await getOAuth2Token(TOKEN_URL, CLIENT_ID, CLIENT_SECRET);

    console.log("📡 Fetching category tree from Community API...");

    // Fetch category tree with community module filter
    // The module parameter must be an array
    const treeResponse = await fetch(`${API_BASE_URL}/category/getTree?module[]=community`, {
      headers: {
        Authorization: `${token.token_type} ${token.access_token}`,
        "Content-Type": "application/json",
      },
    });

    if (!treeResponse.ok) {
      const errorText = await treeResponse.text();
      throw new Error(
        `Failed to fetch category tree: ${treeResponse.status} - ${errorText}`
      );
    }

    const treeData = await treeResponse.json();
    const categories: Category[] = [];

    // Process category tree recursively
    const processCategories = (categories_list: any[]): void => {
      if (!categories_list || !Array.isArray(categories_list)) {
        return;
      }

      for (const cat of categories_list) {
        // Check if ideas are supported in this category
        // supportedContentTypes is an undocumented field that contains available content types
        const supportsIdeas =
          cat.supportedContentTypes &&
          Array.isArray(cat.supportedContentTypes) &&
          cat.supportedContentTypes.includes("idea");

        if (supportsIdeas) {
          categories.push({
            id: cat.id,
            name: cat.title || cat.name,
            description: cat.description,
            image: cat.thumbnailImage || cat.heroImage || cat.image?.url || cat.thumbnail,
            topicsCount: cat.topicsCount || 0,
          });
        }

        // Process nested categories
        if (cat.categories && Array.isArray(cat.categories)) {
          processCategories(cat.categories);
        }
      }
    };

    // Start processing from root categories - response structure is result.community
    if (treeData.result && treeData.result.community) {
      processCategories(treeData.result.community);
    }

    console.log(`✅ Found ${categories.length} categories with ideas enabled`);

    return {
      categories,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error("❌ Error fetching categories:", error);
    console.log("📋 Falling back to mock data...");
    return generateMockData();
  }
}
/**
 * Generates mock data for development/testing
 */
function generateMockData(): CategoriesData {
  return {
    categories: [
      {
        id: "1",
        name: "Feature Requests",
        description: "Suggest new features or improvements",
        image: null,
        topicsCount: 42,
      },
      {
        id: "2",
        name: "Bug Reports",
        description: "Report issues and problems",
        image: null,
        topicsCount: 18,
      },
      {
        id: "3",
        name: "Product Ideas",
        description: "Share your product ideas",
        image: null,
        topicsCount: 25,
      },
    ],
    lastUpdated: new Date().toISOString(),
  };
}

/**
 * Writes the categories data to a TypeScript file
 */
async function generateTypescriptFile(data: CategoriesData): Promise<void> {
  const outputPath = path.join(
    __dirname,
    "../src/generated/categories.ts"
  );

  // Create directory if it doesn't exist
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const content = `/**
 * Auto-generated file - do not edit manually
 * Generated: ${new Date().toISOString()}
 * 
 * This file contains category data fetched at build time.
 * To regenerate, run: npm run fetch-categories
 */

export interface Category {
  id: string;
  name: string;
  description?: string;
  image?: string | null;
  topicsCount: number;
}

export interface CategoriesData {
  categories: Category[];
  lastUpdated: string;
}

export const categoriesData: CategoriesData = ${JSON.stringify(data, null, 2)};

export const categories: Category[] = categoriesData.categories;

export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}

export function getCategoriesSorted(
  sortBy: "name" | "topicsCount" = "name"
): Category[] {
  const sorted = [...categories];
  if (sortBy === "name") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "topicsCount") {
    sorted.sort((a, b) => b.topicsCount - a.topicsCount);
  }
  return sorted;
}
`;

  fs.writeFileSync(outputPath, content, "utf-8");
  console.log(`✅ Generated ${outputPath}`);
}

/**
 * Main entry point
 */
async function main(): Promise<void> {
  console.log("🚀 Starting category data generation...\n");

  // Load environment variables from .env.local
  const envVars = loadEnvFile();

  const data = await fetchCategoriesWithIdeas(envVars);
  await generateTypescriptFile(data);

  console.log("\n✨ Done! Categories data has been generated.");
}

/**
 * ENVIRONMENT VARIABLES REQUIRED:
 * 
 * Create a .env.local file in the widget directory with:
 * 
 * OAuth2 Authentication (from API_SPEC):
 *   COMMUNITY_API_URL=https://api.example.com/v2
 *   COMMUNITY_OAUTH_TOKEN_URL=https://api.example.com/oauth2/token
 *   COMMUNITY_API_CLIENT_ID=your-client-id
 *   COMMUNITY_API_CLIENT_SECRET=your-client-secret
 * 
 * Example .env.local file:
 * 
 * # API Configuration
 * COMMUNITY_API_URL=https://api.example.com/v2
 * COMMUNITY_OAUTH_TOKEN_URL=https://api.example.com/oauth2/token
 * 
 * # OAuth2 Credentials
 * COMMUNITY_API_CLIENT_ID=my-client-id-12345
 * COMMUNITY_API_CLIENT_SECRET=my-client-secret-abcdef
 * 
 * 
 * API Endpoint: /category/getTree
 * - Filters by module=community
 * - Returns hierarchical category tree structure
 * - Each category has an undocumented "supportedContentTypes" array field
 * - We filter for categories where supportedContentTypes includes "idea"
 * - Extracts: id, title, description, thumbnail image, topicsCount
 * 
 * OAuth2 Flow Details (from API_SPEC):
 * - Type: oauth2
 * - Flow: clientCredentials
 * - Request body: grant_type=client_credentials&client_id=ID&client_secret=SECRET&scope=read
 * - Response: { access_token, token_type, expires_in }
 * 
 * You can also set environment variables directly:
 *   export COMMUNITY_API_CLIENT_ID=your-client-id
 *   export COMMUNITY_API_CLIENT_SECRET=your-client-secret
 *   npm run fetch-categories
 * 
 * If not configured, falls back to mock data for development.
 */


// Run if called directly
main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
