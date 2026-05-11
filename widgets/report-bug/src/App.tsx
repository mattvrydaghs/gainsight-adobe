import { useState, useEffect, useMemo } from "react";
import type { WidgetSDK, WidgetProps } from "./types";
import { CategoryGrid } from "./components/CategoryList";
import { categories as allCategories } from "./generated/categories";

declare global {
  interface Window {
    inSidedData?: {
      language?: string;
    };
  }
  var categorySectionMap: Record<string, Record<string, string[]>>;
}

export function App({ sdk }: { sdk: WidgetSDK }) {
  const [props, setProps] = useState<WidgetProps>(sdk.getProps());
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [sortBy, setSortBy] = useState<"name" | "topicsCount" | "name_reverse">("topicsCount");

  // Get language code from window and filter categories
  const filteredCategories = useMemo(() => {
    const language = window.inSidedData?.language || "en";
    const languageCode = language.substring(0, 2);
    console.log("Detected language code:", languageCode);
    
    // Get the section map for this language, default to "en" if not found
    const sectionMap = categorySectionMap?.[languageCode] || categorySectionMap?.["en"] || {};
    
    // Collect all unique category names from all sections (ignore duplicates)
    const validCategories = new Set<string>();
    Object.values(sectionMap).forEach((categories: string[]) => {
      categories.forEach(cat => validCategories.add(cat));
    });
    
    console.log("Valid categories for language:", Array.from(validCategories));
    
    // Filter categories to only those found in the valid categories set for this language
    return allCategories.filter(category => 
      validCategories.has(category.name)
    );
  }, []);

  useEffect(() => sdk.on("propsChanged", setProps), [sdk]);

  return (
    <section className="react-widget-section">
      <h3 className="react-widget-title">{props.title}</h3>
      {props.description && (
        <p className="react-widget-description">{props.description}</p>
      )}
      
      <div className="widget-controls">
        <div className="sort-selector">
          <label htmlFor="sort-dropdown">Sort by:</label>
          <select
            id="sort-dropdown"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "name" | "topicsCount" | "name_reverse")}
          >
            <option value="topicsCount">Ideas Count</option>
            <option value="name">Alphabetical (A-Z)</option>
            <option value="name_reverse">Alphabetical (Z-A)</option>
          </select>
        </div>
      </div>

      <div className="categories-container">
          <CategoryGrid
            categories={filteredCategories}
            showThumbnails
            sortBy={sortBy}
            emptyMessage="No categories with ideas enabled found"
          />
      </div>

      {selectedCategory && (
        <div className="selected-category-info">
          <p>Selected Category ID: <strong>{selectedCategory}</strong></p>
        </div>
      )}
    </section>
  );
}
