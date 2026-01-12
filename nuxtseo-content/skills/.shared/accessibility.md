# Accessibility Patterns

Content accessibility rules for screen readers and assistive technology.

## Link Text

Links must make sense out of context. Screen readers often list all links on a page.

**Common problem:** "Learn more" and "Read more" are meaningless to screen reader users who navigate by link list.

| Bad | Good |
|-----|------|
| Learn more | Learn more about sitemap configuration |
| Read more | Read the full migration guide |
| Click here | View the pricing page |
| Here | Download the PDF report |
| Link | Open GitHub repository |

**Rules:**
- Link text describes the destination, not the action
- No "click" - not all users click
- No standalone "here", "this", "link"
- Include file type for downloads: "Download report (PDF, 2MB)"

## Image Alt Text

| Image Type | Alt Text |
|------------|----------|
| Informative | Describe content: "Dashboard showing 3 error alerts" |
| Decorative | Empty alt: `alt=""` |
| Screenshot | Describe what's shown: "VS Code with TypeScript error highlighted" |
| Chart/Graph | Summarize data: "Line chart showing 40% traffic increase over 6 months" |
| Logo | Company name: "Nuxt" not "Nuxt logo" |

**Rules:**
- No "image of", "picture of", "screenshot of" - screen readers announce images
- Keep under 125 characters
- If complex, use `figcaption` or link to long description

## Heading Structure

- One H1 per page (the title)
- No skipped levels (H2 → H4)
- Headings describe section content
- Don't use headings for styling

## Tables

- Use tables for data, not layout
- Include header row with `<th>` or markdown header syntax
- Simple structure - avoid merged cells
- Caption or preceding paragraph explains table purpose

## Color and Formatting

- Don't convey meaning through color alone
- "Required fields are marked with *" not "Required fields are red"
- Ensure sufficient contrast for text
- Bold/italic for emphasis, not color
