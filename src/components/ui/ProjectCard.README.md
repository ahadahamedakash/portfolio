# ProjectCard Component

A reusable, responsive project card component for displaying portfolio projects with consistent styling and behavior across the application.

## Features

- **Responsive Design**: Adapts layout for mobile, tablet, and desktop
- **16:9 Image Display**: With hover zoom effect and object-position: top
- **Featured Badge**: Conditional display for featured projects
- **Tech Tags**: Dynamic display based on screen size (3-5 tags shown)
- **Action Buttons**: Support for Live Demo, GitHub (frontend), and Backend repos
- **Scroll Animations**: Framer Motion integration with viewport detection
- **TypeScript**: Full type safety with exported interfaces

## Usage

### Basic Example

```tsx
import ProjectCard from "@/components/ui/ProjectCard";

<ProjectCard
  slug="my-project"
  title="My Awesome Project"
  description="A brief description of the project."
  image="/images/project.jpg"
  technologies={["React", "Next.js", "TypeScript"]}
  featured={true}
  liveUrl="https://example.com"
  githubUrl="https://github.com/user/repo"
  index={0}
/>
```

### With Backend Repository

```tsx
<ProjectCard
  slug="fullstack-app"
  title="Full-Stack Application"
  description="A MERN stack application."
  image="/images/mern.jpg"
  technologies={["React", "Node.js", "Express", "MongoDB"]}
  featured={false}
  liveUrl="https://app.example.com"
  githubUrl="https://github.com/user/frontend"
  githubBackendUrl="https://github.com/user/backend"
  index={1}
/>
```

### With Priority Loading

```tsx
<ProjectCard
  // ... other props
  priority={true} // Loads image with priority (use for first 2 cards)
/>
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `slug` | `string` | Yes | - | Unique identifier for the project |
| `title` | `string` | Yes | - | Project name |
| `description` | `string` | Yes | - | Project description |
| `image` | `string` | Yes | - | Path to project image (16:9 aspect ratio) |
| `technologies` | `string[]` | Yes | - | Array of tech stack names |
| `featured` | `boolean` | Yes | - | Whether to show "Featured" badge |
| `liveUrl` | `string` | No | - | Live demo URL |
| `githubUrl` | `string` | No | - | GitHub repository URL |
| `githubBackendUrl` | `string` | No | - | Backend repository URL |
| `index` | `number` | No | `0` | Position for project number display |
| `priority` | `boolean` | No | `false` | Enable image priority loading |

## Component Structure

```
ProjectCard/
├── Image Section (16:9 aspect ratio)
│   ├── Featured Badge (top-left)
│   └── Image with hover zoom
└── Details Section
    ├── Desktop/Tablet Layout (2 columns)
    │   ├── Left: Number, Title, Description, Tech Tags
    │   └── Right: Stacked Action Buttons
    └── Mobile Layout (vertical stack)
        ├── Number, Title, Description, Tech Tags
        └── Horizontal Action Buttons
```

## Tech Tag Display

The number of tech tags displayed varies by screen size:
- Small mobile (< 480px): 3 tags
- Mobile (480-768px): 3 tags
- Tablet (768-1024px): 4 tags
- Desktop (≥ 1024px): 5 tags

Additional tags show as "+N more" with copper color.

## Action Buttons

Buttons display conditionally based on provided URLs:

1. **Live Demo** (if `liveUrl` provided)
   - Primary style with gold background
   - External link icon

2. **Source Code** (if only `githubUrl` provided)
   - Secondary style with border
   - GitHub icon

3. **Frontend + Backend** (if both `githubUrl` and `githubBackendUrl` provided)
   - Two separate secondary buttons
   - "Frontend" and "Backend" labels
   - GitHub icons

## Responsive Breakpoints

- **Mobile** (< 768px): Single column, horizontal buttons
- **Tablet** (768-1024px): 2-column grid, stacked buttons
- **Desktop** (≥ 1024px): 2-column grid, stacked buttons

## Styling

The component uses CSS custom properties from the design system:
- `--color-bg-surface`: Card background
- `--color-gold`: Primary accent color
- `--color-copper`: Secondary accent for "+N more" tag
- `--font-display`: Display font (Playfair Display)
- `--font-sans`: Body font (DM Sans)
- `--font-mono`: Monospace font (JetBrains Mono)

## Accessibility

- Semantic HTML structure
- Proper ARIA labels on interactive elements
- External links have `target="_blank"` and `rel="noopener noreferrer"`
- Descriptive alt text for images (uses title)
- Keyboard navigation support

## Performance

- Images use Next.js `<Image>` with optimization
- Priority loading for first 2 cards
- Responsive image sizes
- Scroll animations use `viewport={{ once: true }}` to prevent re-renders

## Examples in Codebase

- **Home Page**: `src/components/sections/Products.tsx`
- **Projects Page**: `src/app/projects/page.tsx`

## Future Enhancements

- `variant="compact"` for tighter card layout
- Hover reveal of additional project details
- Dark/light mode variants
- Category badges
- Integration with project detail pages
