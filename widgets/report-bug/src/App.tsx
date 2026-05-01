import { useState, useEffect } from "react";
import type { WidgetSDK, WidgetProps } from "./types";
import { CategoryList, CategoryGrid, CategorySelector } from "./components/CategoryList";

export function App({ sdk }: { sdk: WidgetSDK }) {
  const [props, setProps] = useState<WidgetProps>(sdk.getProps());
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [viewMode, setViewMode] = useState<"list" | "grid" | "selector">("grid");

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
      </div>

      <div className="categories-container">
        {viewMode === "list" && (
          <CategoryList
            sortBy="topicsCount"
            emptyMessage="No categories with ideas enabled found"
          />
        )}
        {viewMode === "grid" && (
          <CategoryGrid
            columns={3}
            sortBy="name"
            emptyMessage="No categories with ideas enabled found"
          />
        )}
        {viewMode === "selector" && (
          <CategorySelector
            onSelect={setSelectedCategory}
            selectedId={selectedCategory}
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
