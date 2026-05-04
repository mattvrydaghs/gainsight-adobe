import { useState, useEffect } from "react";
import type { WidgetSDK, WidgetProps } from "./types";
import { CategoryList, CategoryGrid, CategorySelector } from "./components/CategoryList";

export function App({ sdk }: { sdk: WidgetSDK }) {
  const [props, setProps] = useState<WidgetProps>(sdk.getProps());
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [viewMode, setViewMode] = useState<"list" | "grid" | "selector">("grid");
  const [sortBy, setSortBy] = useState<"name" | "topicsCount">("name");

  useEffect(() => sdk.on("propsChanged", setProps), [sdk]);

  return (
    <section className="react-widget-section">
      <h3 className="react-widget-title">{props.title}</h3>
      {props.description && (
        <p className="react-widget-description">{props.description}</p>
      )}
      
      <div className="widget-controls">
        <div className="view-mode-selector">
          <button
            className={`mode-button ${viewMode === "list" ? "active" : ""}`}
            onClick={() => setViewMode("list")}
          >
            List
          </button>
          <button
            className={`mode-button ${viewMode === "grid" ? "active" : ""}`}
            onClick={() => setViewMode("grid")}
          >
            Grid
          </button>
          <button
            className={`mode-button ${viewMode === "selector" ? "active" : ""}`}
            onClick={() => setViewMode("selector")}
          >
            Select
          </button>
        </div>
        <div className="sort-selector">
          <label htmlFor="sort-dropdown">Sort by:</label>
          <select
            id="sort-dropdown"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "name" | "topicsCount")}
          >
            <option value="name">Name</option>
            <option value="topicsCount">Topics Count</option>
          </select>
        </div>
      </div>

      <div className="categories-container">
        {viewMode === "list" && (
          <CategoryList
            showThumbnails
            sortBy={sortBy}
            emptyMessage="No categories with ideas enabled found"
          />
        )}
        {viewMode === "grid" && (
          <CategoryGrid
            columns={3}
            showThumbnails
            sortBy={sortBy}
            emptyMessage="No categories with ideas enabled found"
          />
        )}
        {viewMode === "selector" && (
          <CategorySelector
            onSelect={setSelectedCategory}
            selectedId={selectedCategory}
            sortBy={sortBy}
            emptyMessage="No categories with ideas enabled found"
          />
        )}
      </div>

      {selectedCategory && (
        <div className="selected-category-info">
          <p>Selected Category ID: <strong>{selectedCategory}</strong></p>
        </div>
      )}
    </section>
  );
}
