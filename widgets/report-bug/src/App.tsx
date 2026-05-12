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

    // Filter by conversation_type from props if specified
    if (props.conversation_type) {
      filtered = filtered.filter(category =>
        category.conversation_type === props.conversation_type
      );
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(category =>
        category.name.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, props.conversation_type]);

  useEffect(() => sdk.on("propsChanged", setProps), [sdk]);

  return (
    <section className="community-selector-widget">
      <div className="widget-content-wrapper">
        <div className="widget-content-header">
          <h2 className="widget-content-title">Select a Community</h2>
          <p>Choose the Adobe product you’d like to request a feature for. Note that feature request isn’t available in every community — if your product isn’t listed, it may not be supported here. {props.row_size} items per row for {props.conversation_type}</p>
        </div>
        <div className="widget-controls">
          <div className="searchWrapper">
            <span className="search-icon"><svg width="16" height="16" viewBox="0 0 20 20" fill="#6e6e6e"><path d="m18.53 17.47-5.083-5.084C14.417 11.186 15 9.66 15 8c0-3.86-3.14-7-7-7S1 4.14 1 8s3.14 7 7 7c1.66 0 3.185-.584 4.386-1.553l5.084 5.083c.146.147.338.22.53.22s.384-.073.53-.22c.293-.293.293-.767 0-1.06M8 13.5c-3.032 0-5.5-2.468-5.5-5.5S4.968 2.5 8 2.5s5.5 2.468 5.5 5.5-2.468 5.5-5.5 5.5"></path></svg></span>
            <input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="sort-selector">
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
              onSelect={setSelectedCategory}
              selectedId={selectedCategory}
              columns={props.row_size}
            />
        </div>
        <div className="widget-footer">
          <button className="cancel" onClick={()=> {
            if (history.length > 1) {
              history.back();
            } else {
              window.location.href = "/";
            }
          }}>Cancel</button>
          <button disabled={!selectedCategory} className="continue">Continue</button>
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
