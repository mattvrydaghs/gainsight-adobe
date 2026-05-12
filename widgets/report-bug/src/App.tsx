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

/**
 * Maps conversation_type to the URL path type
 */
function mapConversationTypeToUrlType(conversationType: string): string {
  switch (conversationType) {
    case "conversation":
      return "bug";
    case "idea":
      return "feature";
    case "question":
      return "question";
    default:
      return "question"; // fallback
  }
}

export function App({ sdk }: { sdk: WidgetSDK }) {
  const [props, setProps] = useState<WidgetProps>(sdk.getProps());
  const [selectedCategory, setSelectedCategory] = useState<{ id: string; name: string } | undefined>();
  const [sortBy, setSortBy] = useState<"name" | "topicsCount" | "name_reverse">("topicsCount");
  const [searchQuery, setSearchQuery] = useState<string>("");


  // Get language code from window and filter categories
  const filteredCategories = useMemo(() => {
    const language = window.inSidedData?.language || "en";
    const languageCode = language.substring(0, 2);


    // Get the section map for this language, default to "en" if not found
    const sectionMap = categorySectionMap?.[languageCode] || categorySectionMap?.["en"] || {};

    // Collect all unique category names from all sections (ignore duplicates)
    const validCategories = new Set<string>();
    Object.values(sectionMap).forEach((categories: string[]) => {
      categories.forEach(cat => validCategories.add(cat));
    });

    // Filter categories to only those found in the valid categories set for this language
    let filtered = allCategories.filter(category =>
      validCategories.has(category.name)
    );

    // Filter by conversation_type from props if specified
    if (props.conversation_type && props.conversation_type.length > 0) {
      filtered = filtered.filter(category =>
        category.conversation_type.some(type => props.conversation_type!.includes(type))
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
  }, [searchQuery, props]);

  useEffect(() => sdk.on("propsChanged", setProps), [sdk]);

  const handleContinue = () => {
    if (!selectedCategory) return;

    // Find the selected category in allCategories to get its conversation_type
    const category = allCategories.find(cat => cat.id === selectedCategory.id);
    if (!category || !category.conversation_type || category.conversation_type.length === 0) return;

    // Get the first conversation type and map it
    const conversationType = mapConversationTypeToUrlType(category.conversation_type[0]);
    
    // Build the redirect URL
    const redirectUrl = `/p/new-${conversationType}?community=${encodeURIComponent(category.name)}`;
    
    // Redirect
    window.location.href = redirectUrl;
  };

  return (
    <>
      <section className="community-selector-widget">
      {props.title && <h1 className="page-title">{props.title}</h1>}
        <div className="widget-content-wrapper">
          <div className="widget-content-header">
            <h2 className="widget-content-title">{props.custom_title}</h2>
            <p>{props.custom_description}</p>
          </div>
          <div className="widget-controls">
            <div className="searchWrapper">
              <span className="search-icon"><svg width="16" height="16" viewBox="0 0 20 20" fill="#6e6e6e"><path d="m18.53 17.47-5.083-5.084C14.417 11.186 15 9.66 15 8c0-3.86-3.14-7-7-7S1 4.14 1 8s3.14 7 7 7c1.66 0 3.185-.584 4.386-1.553l5.084 5.083c.146.147.338.22.53.22s.384-.073.53-.22c.293-.293.293-.767 0-1.06M8 13.5c-3.032 0-5.5-2.468-5.5-5.5S4.968 2.5 8 2.5s5.5 2.468 5.5 5.5-2.468 5.5-5.5 5.5"></path></svg></span>
              <input
                type="text"
                placeholder="Search communities"
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
                <option value="topicsCount">Popular</option>
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
              emptyMessage="No communities found"
              onSelect={setSelectedCategory}
              selectedId={selectedCategory?.id}
              columns={props.row_size}
              showTopicCounts={props.showTopicsCount}
            />
          </div>
          <div className="widget-footer">
            <button className="cancel" onClick={() => {
              if (history.length > 1) {
                history.back();
              } else {
                window.location.href = "/";
              }
            }}>Cancel</button>
            <button disabled={!selectedCategory} className="continue" onClick={handleContinue}>Continue</button>
          </div>

          {selectedCategory && (
            <div className="selected-category-info">
              <p>Selected Category: <strong>{selectedCategory.name}</strong> (ID: {selectedCategory.id})</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
