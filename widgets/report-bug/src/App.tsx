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
  const [searchQuery, setSearchQuery] = useState<string>("");

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
    let filtered = allCategories.filter(category => 
      validCategories.has(category.name)
    );

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(category =>
        category.name.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery]);

  useEffect(() => sdk.on("propsChanged", setProps), [sdk]);

  return (
    <section className="community-selector-widget">
      <h1 className="widget-title">{props.title}</h1>
      {props.description && (
        <p className="widget-description">{props.description}</p>
      )}
      <div className="widget-content-wrapper">
        <div className="widget-content-header">
          <h2 className="widget-content-title">Select a Community</h2>
          <p>Choose the Adobe product you’d like to request a feature for. Note that feature request isn’t available in every community — if your product isn’t listed, it may not be supported here.</p>
        </div>
        <div className="widget-controls">
          <div className="searchWrapper">
            <input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
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
      </div>
    </section>
  );
}
