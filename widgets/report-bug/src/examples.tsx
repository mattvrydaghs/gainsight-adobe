/**
 * Usage Examples - CategoryList Component
 * 
 * This file demonstrates different ways to use the CategoryList component
 * in the report-bug widget.
 */

import React, { useState } from "react";
import {
  CategoryList,
  CategoryGrid,
  CategorySelector,
  type CategoryListProps,
  type CategorySelectorProps,
} from "./components/CategoryList";
import { getCategoriesSorted, getCategoryById } from "./generated/categories";

/**
 * EXAMPLE 1: Simple List View
 * Display all categories in a basic list, sorted by name
 */
export function Example1_SimpleList(): React.ReactElement {
  return (
    <div>
      <h2>All Categories (List View)</h2>
      <CategoryList
        sortBy="name"
        emptyMessage="No categories found with ideas enabled"
      />
    </div>
  );
}

/**
 * EXAMPLE 2: Grid View with Multiple Columns
 * Display categories in a 3-column responsive grid
 */
export function Example2_GridView(): React.ReactElement {
  return (
    <div>
      <h2>Featured Ideas Categories</h2>
      <CategoryGrid
        columns={3}
        sortBy="topicsCount"
        maxItems={6}
        emptyMessage="No categories available"
      />
    </div>
  );
}

/**
 * EXAMPLE 3: Interactive Selector
 * Let users select a category and do something with the selection
 */
export function Example3_InteractiveSelector(): React.ReactElement {
  const [selectedCategory, setSelectedCategory] = useState<string>();

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    console.log("Selected category:", categoryId);

    // Example: Could emit event to parent or trigger action
    // sdk.emit('categorySelected', { categoryId })
  };

  const selectedCategoryData = selectedCategory
    ? getCategoryById(selectedCategory)
    : null;

  return (
    <div>
      <h2>Select a Category to Report Ideas</h2>

      <CategorySelector
        onSelect={handleCategorySelect}
        selectedId={selectedCategory}
        sortBy="name"
      />

      {selectedCategoryData && (
        <div style={{ marginTop: "1.5rem", padding: "1rem", background: "#f0f9ff", borderRadius: "8px" }}>
          <h3>Selected: {selectedCategoryData.name}</h3>
          <p>
            <strong>Total Topics:</strong> {selectedCategoryData.topicsCount}
          </p>
          {selectedCategoryData.description && (
            <p>
              <strong>Description:</strong> {selectedCategoryData.description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * EXAMPLE 4: Top Categories by Activity
 * Show top 5 most active categories (by topic count)
 */
export function Example4_TopCategories(): React.ReactElement {
  const topCategories = getCategoriesSorted("topicsCount").slice(0, 5);

  return (
    <div>
      <h2>Top 5 Most Active Categories</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {topCategories.map((cat, index) => (
          <div
            key={cat.id}
            style={{
              padding: "1rem",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              background: "#ffffff",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <strong>#{index + 1}</strong> {cat.name}
              </div>
              <span style={{ fontWeight: "bold", color: "#2563eb" }}>
                {cat.topicsCount} topics
              </span>
            </div>
            {cat.description && (
              <p
                style={{
                  margin: "0.5rem 0 0 0",
                  fontSize: "0.875rem",
                  color: "#6b7280",
                }}
              >
                {cat.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * EXAMPLE 5: Category Filter with Search
 * Filter categories by name or description
 */
export function Example5_SearchableCategories(): React.ReactElement {
  const [searchTerm, setSearchTerm] = useState("");

  const allCategories = getCategoriesSorted("name");
  const filtered = allCategories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (cat.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
  );

  return (
    <div>
      <h2>Search Categories</h2>

      <input
        type="text"
        placeholder="Search by name or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "0.75rem",
          marginBottom: "1rem",
          border: "1px solid #e5e7eb",
          borderRadius: "6px",
          fontSize: "1rem",
        }}
      />

      {filtered.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {filtered.map((cat) => (
            <div
              key={cat.id}
              style={{
                padding: "0.75rem",
                background: "#f9fafb",
                borderRadius: "4px",
              }}
            >
              <strong>{cat.name}</strong>
              {cat.description && (
                <p
                  style={{
                    margin: "0.25rem 0 0 0",
                    fontSize: "0.875rem",
                    color: "#6b7280",
                  }}
                >
                  {cat.description}
                </p>
              )}
              <span style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
                {cat.topicsCount} topics
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: "#6b7280", fontStyle: "italic" }}>
          No categories match "{searchTerm}"
        </p>
      )}

      <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "#9ca3af" }}>
        Found {filtered.length} of {allCategories.length} categories
      </p>
    </div>
  );
}

/**
 * EXAMPLE 6: Category Statistics Dashboard
 * Show aggregate statistics about all categories
 */
export function Example6_StatisticsDashboard(): React.ReactElement {
  const allCategories = getCategoriesSorted("name");
  const totalTopics = allCategories.reduce((sum, cat) => sum + cat.topicsCount, 0);
  const avgTopicsPerCategory =
    allCategories.length > 0 ? (totalTopics / allCategories.length).toFixed(1) : 0;
  const maxTopics = Math.max(...allCategories.map((c) => c.topicsCount), 0);

  return (
    <div>
      <h2>Categories Overview</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <StatCard label="Total Categories" value={allCategories.length.toString()} />
        <StatCard label="Total Topics" value={totalTopics.toString()} />
        <StatCard label="Avg per Category" value={avgTopicsPerCategory.toString()} />
        <StatCard label="Most Active" value={maxTopics.toString()} />
      </div>

      <CategoryList sortBy="topicsCount" />
    </div>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: string;
}): React.ReactElement {
  return (
    <div
      style={{
        padding: "1rem",
        background: "var(--config--main-color-brand, #2563eb)",
        color: "white",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{value}</div>
      <div style={{ fontSize: "0.875rem", opacity: 0.9 }}>{label}</div>
    </div>
  );
}

/**
 * EXAMPLE 7: Dynamic Category Display Based on Props
 * Component that changes display mode based on configuration
 */
export interface DynamicCategoryDisplayProps {
  mode?: "list" | "grid" | "selector" | "cards";
  sortBy?: "name" | "topicsCount";
  maxItems?: number;
}

export function Example7_DynamicDisplay({
  mode = "grid",
  sortBy = "name",
  maxItems,
}: DynamicCategoryDisplayProps): React.ReactElement {
  switch (mode) {
    case "list":
      return (
        <CategoryList
          sortBy={sortBy}
          maxItems={maxItems}
          emptyMessage="No categories available"
        />
      );

    case "grid":
      return (
        <CategoryGrid
          columns={3}
          sortBy={sortBy}
          maxItems={maxItems}
          emptyMessage="No categories available"
        />
      );

    case "selector":
      return (
        <CategorySelector
          sortBy={sortBy}
          maxItems={maxItems}
          onSelect={(id) => console.log("Selected:", id)}
        />
      );

    case "cards":
      const categories = getCategoriesSorted(sortBy);
      const displayedCategories = maxItems
        ? categories.slice(0, maxItems)
        : categories;

      return (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {displayedCategories.map((cat) => (
            <div
              key={cat.id}
              style={{
                padding: "1.5rem",
                border: "2px solid #e5e7eb",
                borderRadius: "8px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#2563eb";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 99, 235, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e5e7eb";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                {cat.topicsCount}
              </div>
              <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>topics in</div>
              <div style={{ fontSize: "1.125rem", fontWeight: "600" }}>
                {cat.name}
              </div>
            </div>
          ))}
        </div>
      );

    default:
      return <div>Unknown display mode: {mode}</div>;
  }
}

/**
 * EXAMPLE 8: Full Widget Integration
 * Complete example showing how to use components in App.tsx
 */
export function Example8_FullWidgetIntegration(): React.ReactElement {
  const [displayMode, setDisplayMode] = useState<"list" | "grid" | "selector">("grid");
  const [selectedCategory, setSelectedCategory] = useState<string>();

  return (
    <div>
      <h1>Report Bug - Category Selection</h1>

      {/* Mode selector */}
      <div style={{ marginBottom: "1.5rem", display: "flex", gap: "0.5rem" }}>
        {(["list", "grid", "selector"] as const).map((mode) => (
          <button
            key={mode}
            onClick={() => setDisplayMode(mode)}
            style={{
              padding: "0.5rem 1rem",
              background: displayMode === mode ? "#2563eb" : "#e5e7eb",
              color: displayMode === mode ? "white" : "#1f2937",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: displayMode === mode ? "600" : "500",
            }}
          >
            {mode.charAt(0).toUpperCase() + mode.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      {displayMode === "list" && <CategoryList sortBy="name" />}
      {displayMode === "grid" && <CategoryGrid columns={3} sortBy="topicsCount" />}
      {displayMode === "selector" && (
        <CategorySelector
          onSelect={setSelectedCategory}
          selectedId={selectedCategory}
        />
      )}

      {/* Selection info */}
      {selectedCategory && (
        <div
          style={{
            marginTop: "1.5rem",
            padding: "1rem",
            background: "#f0f9ff",
            borderLeft: "4px solid #2563eb",
            borderRadius: "4px",
          }}
        >
          <strong>Selected Category:</strong> {selectedCategory}
          {(() => {
            const cat = getCategoryById(selectedCategory);
            return cat ? ` (${cat.name})` : "";
          })()}
        </div>
      )}
    </div>
  );
}

/**
 * How to use these examples:
 *
 * In App.tsx:
 * import { Example1_SimpleList } from "./examples"
 *
 * export function App() {
 *   return <Example1_SimpleList />
 * }
 *
 * Or use the DynamicDisplay component:
 *
 * <Example7_DynamicDisplay
 *   mode="grid"
 *   sortBy="topicsCount"
 *   maxItems={6}
 * />
 */
