# Quick Start: Using the Category Component

## 1. Install Dependencies

```bash
npm install
```

## 2. Set API Credentials (Optional for Development)

```bash
# For development, uses mock data by default
npm run build

# For production, set credentials first:
export COMMUNITY_API_URL="https://your-api.example.com/v2"
export COMMUNITY_API_TOKEN="your-token-here"
npm run build
```

## 3. Run Development Server

```bash
npm run dev
```

## 4. Build for Production

```bash
npm run build
```

This will:
1. Fetch real category data from your API (if credentials set)
2. Generate `src/generated/categories.ts`
3. Build the widget with static category data

## 5. View the Widget in the App

The widget displays three views:

- **List View** - Simple list of categories
- **Grid View** - Grid layout (default)
- **Select View** - Interactive category selector

Use the buttons in the widget header to switch views.

## What Happens Behind the Scenes

```
┌─────────────────────────────────────────┐
│          npm run build                  │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│   fetch-categories.ts runs              │
│   - Connects to Community API           │
│   - Fetches categories with ideas       │
│   - Filters title, thumbnail, count     │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│   generates src/generated/categories.ts │
│   - TypeScript file with category data  │
│   - Helper functions included           │
│   - Ready to use in components          │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│   Vite builds the widget                │
│   - Static data included in bundle      │
│   - No runtime API calls needed         │
│   - Ready to deploy                     │
└─────────────────────────────────────────┘
```

## Key Files

- **src/components/CategoryList.tsx** - Display components
- **src/components/CategoryList.css** - Styling
- **src/generated/categories.ts** - Auto-generated category data
- **scripts/fetch-categories.ts** - Build-time fetcher
- **src/App.tsx** - Main widget component

## Environment Variables

Set these to use a real API:

```bash
COMMUNITY_API_URL=https://api.example.com/v2
COMMUNITY_API_TOKEN=your-authentication-token
```

If not set, the script uses mock data automatically.

## Customizing the Component

### Change Sort Order
```tsx
<CategoryList sortBy="topicsCount" />  // Sort by # of topics
<CategoryList sortBy="name" />         // Sort by name (default)
```

### Show Thumbnails
```tsx
<CategoryList showThumbnails={true} />
```

### Limit Categories
```tsx
<CategoryList maxItems={5} />  // Show only top 5
```

### Grid Layout
```tsx
<CategoryGrid columns={4} />  // 4-column grid
```

### Interactive Selector
```tsx
<CategorySelector
  onSelect={(id) => console.log(id)}
  selectedId={selected}
/>
```

## Tips

1. **For development**, just run `npm run build` - it uses mock data
2. **For production**, set `COMMUNITY_API_TOKEN` before building
3. **To refresh data**, run `npm run fetch-categories` then `npm run build`
4. **Component data** is read-only and regenerated on each build
5. **No API calls** happen at runtime - it's all static data

## Troubleshooting

### "Module not found" error
- Run `npm install` to install dependencies

### "Generated file not found"
- Run `npm run fetch-categories` to generate it
- Check `src/generated/categories.ts` exists

### Categories showing mock data
- Set `COMMUNITY_API_TOKEN` environment variable
- Re-run `npm run build`

### Build failed
- Check `scripts/fetch-categories.ts` for errors
- Verify API credentials are correct
- Check network connectivity to API

## Next Steps

See **CATEGORIES_COMPONENT.md** for:
- Full API documentation
- Advanced usage patterns
- Configuration options
- CI/CD integration
- Production deployment
