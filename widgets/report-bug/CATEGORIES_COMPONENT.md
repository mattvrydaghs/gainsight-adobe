# Report Bug Widget - Category Component

This document explains the category listing component that was added to the report-bug widget.

## Overview

The widget now includes a **CategoryList** component that displays all categories with idea content type enabled. The category data is:
- **Fetched at build time** via an API call
- **Statically generated** as a TypeScript file
- **Used directly by the React component** at runtime

This approach ensures:
- ✅ No runtime API calls needed (zero latency)
- ✅ Static data compiled into the widget
- ✅ Easy to cache and serve efficiently
- ✅ Predictable performance

## Files Added

### 1. **scripts/fetch-categories.ts**
Build-time script that:
- Connects to the Community API
- Fetches all categories
- Filters for those with ideas enabled
- Extracts title, thumbnail, and topic count
- Generates a TypeScript file with the data

### 2. **src/generated/categories.ts**
Auto-generated file containing:
- Category data as a TypeScript constant
- Helper functions to query/sort categories
- TypeScript types for type safety

### 3. **src/components/CategoryList.tsx**
React components for displaying categories:
- `CategoryList` - Default list view
- `CategoryGrid` - Grid layout
- `CategorySelector` - Interactive selector

### 4. **src/components/CategoryList.css**
Styling for all category components with:
- Responsive design
- Design token integration
- Hover effects and transitions

## Setup & Configuration

### Step 1: Set Environment Variables

Before building, set your API credentials:

```bash
export COMMUNITY_API_URL="https://api.community.example.com/v2"
export COMMUNITY_API_TOKEN="your-api-token-here"
```

### Step 2: Build the Widget

The build process now includes category fetching:

```bash
npm run build
```

This will:
1. Run `npm run fetch-categories` to fetch and generate category data
2. Build the Vite bundle

### Step 3: Manual Category Fetch (Optional)

To fetch categories without building:

```bash
npm run fetch-categories
```

## API Integration

The script uses the Community API endpoints:

### Get Categories
```
GET /v2/categories
```

### Get Topics for Category
```
GET /v2/categories/{id}/topics
```

### Example API Response
The script expects categories with this structure:
```json
{
  "categories": [
    {
      "id": "1",
      "name": "Feature Requests",
      "description": "Suggest new features",
      "image": { "url": "https://..." },
      "modules": ["ideas"],
      "contentTypes": ["idea"]
    }
  ]
}
```

## Using the Components

### Basic List View
```tsx
import { CategoryList } from "./components/CategoryList";

<CategoryList sortBy="name" />
```

### Grid View
```tsx
import { CategoryGrid } from "./components/CategoryGrid";

<CategoryGrid columns={3} sortBy="topicsCount" />
```

### Interactive Selector
```tsx
import { CategorySelector } from "./components/CategorySelector";

<CategorySelector
  onSelect={(categoryId) => console.log(categoryId)}
  selectedId={selectedId}
/>
```

## Component Props

### CategoryList/CategoryGrid
- `sortBy?: "name" | "topicsCount"` - Sort order
- `maxItems?: number` - Limit number of categories shown
- `showThumbnails?: boolean` - Display category images
- `emptyMessage?: string` - Message when no categories

### CategorySelector
Extends CategoryList props, plus:
- `onSelect?: (categoryId: string) => void` - Selection handler
- `selectedId?: string` - Currently selected ID
- `columns?: number` (Grid only) - Number of columns

## Styling

The components use design tokens for theming:
- `--config--main-color-brand` - Primary color
- `--config--main-color-text` - Text color
- `--config--main-color-background` - Background color
- `--config--main-color-border` - Border color

These are automatically injected by the platform's Shadow DOM.

## Generated Data Format

The generated `categories.ts` file includes:

```typescript
export interface Category {
  id: string;
  name: string;
  description?: string;
  image?: string | null;
  topicsCount: number;
}

export const categories: Category[]
export function getCategoryById(id: string): Category | undefined
export function getCategoriesSorted(sortBy: "name" | "topicsCount"): Category[]
```

## How It Works

1. **Build Time**
   ```
   npm run build
   ↓
   fetch-categories.ts runs
   ↓
   Calls Community API
   ↓
   Generates src/generated/categories.ts
   ↓
   Vite builds widget with static data
   ```

2. **Runtime**
   ```
   Widget loads
   ↓
   App.tsx imports CategoryList
   ↓
   CategoryList reads from categories.ts
   ↓
   Components render with static data
   ```

## Updating Categories

To refresh category data:

```bash
npm run fetch-categories
npm run build
```

Or as part of your CI/CD pipeline to update categories on each deployment.

## Error Handling

### API Unavailable
If the Community API is unreachable:
- Script logs a warning
- Falls back to mock data for development
- Build still succeeds

### Invalid Configuration
The script validates:
- Categories exist and have IDs
- Topics can be fetched for each category
- Data can be serialized to JSON

## Development vs Production

### Development
```bash
# No API configured - uses mock data
npm run build
```

### Production
```bash
# With API credentials
export COMMUNITY_API_TOKEN="prod-token"
npm run build
```

## Troubleshooting

### "Categories not updating"
- Check if `npm run fetch-categories` completed successfully
- Verify API credentials are set
- Check build logs for errors

### "Missing categories.ts"
- Run `npm run fetch-categories` manually
- The file should be generated in `src/generated/`

### "API authentication fails"
- Verify `COMMUNITY_API_TOKEN` is set
- Check token has appropriate scopes
- Verify API URL is correct

## Next Steps

1. **Configure API credentials** in your build environment
2. **Test locally** with `npm run fetch-categories`
3. **Integrate with CI/CD** to auto-fetch categories on deploy
4. **Use CategoryList component** in your widget UI
5. **Customize styling** as needed for your design

## API Reference

### fetch-categories.ts Functions

```typescript
// Fetch categories with ideas enabled
async function fetchCategoriesWithIdeas(): Promise<CategoriesData>

// Generate TypeScript file
async function generateTypescriptFile(data: CategoriesData): Promise<void>

// Generate mock data for testing
function generateMockData(): CategoriesData
```

### CategoryList Component Functions

```typescript
// Get category by ID
export function getCategoryById(id: string): Category | undefined

// Get sorted categories
export function getCategoriesSorted(sortBy: "name" | "topicsCount"): Category[]
```

## Performance Considerations

- **Zero runtime API calls** - All data is static
- **Small bundle size** - Only serialized category data
- **Fast rendering** - No loading states needed
- **Cacheable** - Static data can be cached aggressively

## Security Notes

- API tokens are **only used at build time**
- Generated data contains **no sensitive information**
- Widget never makes **direct API calls**
- All data is **publicly viewable**

---

For more information on the Gainsight platform, see [Platform Documentation](https://developer-portal.gainsight.com/docs).
