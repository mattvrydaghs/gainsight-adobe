import React, { useMemo } from "react";
import { categories, getCategoriesSorted } from "../generated/categories";
import { roundDownTopicCount } from "../utils/formatters";
import "./CategoryList.css";

export interface CategoryListProps {
  sortBy?: "name" | "topicsCount" | "name_reverse";
  maxItems?: number;
  showThumbnails?: boolean;
  emptyMessage?: string;
  categories?: typeof categories;
  onSelect?: (categoryId: string) => void;
  selectedId?: string;
  columns?: number;
  showTopicCounts?: boolean;
}

export function CategoryCard({ category, showThumbnail, onSelect, isSelected, showTopicCounts }: { category: typeof categories[0]; showThumbnail?: boolean; onSelect?: (categoryId: string) => void; isSelected?: boolean; showTopicCounts?: boolean }) {
  return (
    <button
      key={category.id}
      className={`category-card ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect?.(category.id)}
      type="button"
    >
      {showThumbnail && category.image && (
        <div className="category-thumbnail">
          <img
            src={"https://uploads-us-west-2.insided.com/adobedme-en/attachment/" + category.image}
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

        {showTopicCounts && (
          <span className="category-topics-count">
            {roundDownTopicCount(category.topicsCount) + "+"}
            <span className="topics-label">&nbsp;
              {roundDownTopicCount(category.topicsCount) === 1 ? "topic" : "topics"}
            </span>
          </span>
        )}
      </div>
    </button>
  )
};


/**
 * CategoryGrid Component
 *
 * Alternative display - shows categories in a grid layout
 * with more prominent visual styling
 */
export function CategoryGrid({
  columns = 5,
  sortBy = "name",
  maxItems,
  showThumbnails = false,
  emptyMessage = "No categories available",
  categories: customCategories,
  onSelect,
  selectedId,
}: CategoryListProps): React.ReactElement {
  const displayedCategories = useMemo(() => {
    const categoriesToUse = customCategories || categories;
    const sorted = [...categoriesToUse];
    if (sortBy === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "topicsCount") {
      sorted.sort((a, b) => b.topicsCount - a.topicsCount);
    } else if (sortBy === "name_reverse") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    }
    return maxItems ? sorted.slice(0, maxItems) : sorted;
  }, [sortBy, maxItems, customCategories]);

  if (displayedCategories.length === 0) {
    return (
      <div className="category-list-empty">
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div
      className="categories-grid"
      style={
        {
          "grid-template-columns": `repeat(${columns}, 1fr)`,
        } as React.CSSProperties & { "grid-template-columns": string }
      }
    >
      {displayedCategories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          showThumbnail={showThumbnails}
          onSelect={onSelect}
          isSelected={selectedId === category.id}
          showTopicCounts={true}
        />
      ))}
    </div>
  );
}
