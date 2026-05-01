import React, { useMemo } from "react";
import { categories, getCategoriesSorted } from "../generated/categories";
import "./CategoryList.css";

export interface CategoryListProps {
  sortBy?: "name" | "topicsCount";
  maxItems?: number;
  showThumbnails?: boolean;
  emptyMessage?: string;
}

/**
 * CategoryList Component
 *
 * Displays a list of categories with ideas enabled.
 * This component reads from statically-generated category data
 * that was populated at build time.
 *
 * Features:
 * - Displays category title, description, and topic count
 * - Sortable by name or number of topics
 * - Optional thumbnail images
 * - Responsive grid layout
 * - Empty state handling
 */
export function CategoryList({
  sortBy = "name",
  maxItems,
  showThumbnails = false,
  emptyMessage = "No categories available",
}: CategoryListProps): React.ReactElement {
  // Sort and filter categories
  const displayedCategories = useMemo(() => {
    const sorted = getCategoriesSorted(sortBy);
    return maxItems ? sorted.slice(0, maxItems) : sorted;
  }, [sortBy, maxItems]);

  if (displayedCategories.length === 0) {
    return (
      <div className="category-list-empty">
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="category-list">
      <div className="category-list-container">
        {displayedCategories.map((category) => (
          <div key={category.id} className="category-card">
            {showThumbnails && category.image && (
              <div className="category-thumbnail">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            )}
            <div className="category-content">
              <h3 className="category-name">{category.name}</h3>
              {category.description && (
                <p className="category-description">{category.description}</p>
              )}
              <div className="category-meta">
                <span className="category-topics-count">
                  {category.topicsCount}
                  <span className="topics-label">
                    {category.topicsCount === 1 ? "topic" : "topics"}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * CategoryGrid Component
 *
 * Alternative display - shows categories in a grid layout
 * with more prominent visual styling
 */
export function CategoryGrid({
  columns = 3,
  ...props
}: CategoryListProps & { columns?: number }): React.ReactElement {
  return (
    <div
      className="category-grid"
      style={
        {
          "--grid-columns": columns,
        } as React.CSSProperties & { "--grid-columns": number }
      }
    >
      <CategoryList {...props} />
    </div>
  );
}

/**
 * CategorySelector Component
 *
 * Interactive component that allows selecting a category
 */
export interface CategorySelectorProps extends CategoryListProps {
  onSelect?: (categoryId: string) => void;
  selectedId?: string;
}

export function CategorySelector({
  onSelect,
  selectedId,
  ...props
}: CategorySelectorProps): React.ReactElement {
  const sorted = useMemo(() => {
    return getCategoriesSorted(props.sortBy || "name");
  }, [props.sortBy]);

  const displayedCategories = useMemo(() => {
    return props.maxItems ? sorted.slice(0, props.maxItems) : sorted;
  }, [sorted, props.maxItems]);

  if (displayedCategories.length === 0) {
    return (
      <div className="category-list-empty">
        <p>{props.emptyMessage || "No categories available"}</p>
      </div>
    );
  }

  return (
    <div className="category-selector">
      <div className="category-selector-list">
        {displayedCategories.map((category) => (
          <button
            key={category.id}
            className={`category-selector-item ${
              selectedId === category.id ? "selected" : ""
            }`}
            onClick={() => onSelect?.(category.id)}
            type="button"
          >
            <div className="selector-content">
              <span className="selector-name">{category.name}</span>
              <span className="selector-count">{category.topicsCount}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
