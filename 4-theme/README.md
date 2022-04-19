# Part 4 - Theming
## Getting Started

1. Run `yarn install`
2. Open up `pages/index.js` and `styles/theme.js` in your editor
3. Run `yarn dev` and open `http://localhost:3000`

## Background

In the previous two exercises, we looked at some ways to make use of `emotion` to handle styling for us. Now that we're familiar with the idea behind how to apply styles using CSS-in-JS, we can start to leverage the power of CSS-in-JS.

Our CSS is _quite verbose_, so let's see if we can fix that.

We can take advantage of "theming", a feature provided by popular CSS-in-JS libraries to share CSS values throughout a react application. Within the `emotion` library, theming involves creating a plain old javascript object that contains commonly-used values within your CSS, and then sharing that value via context. We can access that object through a number of ways; in this exercise we'll be using the `useTheme()` hook provided by `@emotion/react`.

## Challenge

I've already gotten started to help you get up to speed quickly with theming. I have set up the theme file and the `<ThemeProvider />` within this app's `_app.js`.

Therefore, your challenge is to:

1. Refactor the current implementation to refer to values from the theme object where you think it's appropiate to do so.
2. Play around with encapsulating common CSS patterns using the theme object.

I've already used the theme to apply the button colours; use that as a reference to extend the theme:

```javascript
// Use emotion's jsx function instead of React's - we need this to make use of the 'css' prop.
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";


export default function Home() {
  const theme = useTheme(); // The theme is shared throughout your react app via context.

  return (
    <button
      css={{
        width: "300px",
        height: "48px",
        border: "none",
        background: theme.colors.live.core, // We reference values directly from the theme object
        color: "white",
        fontSize: "18px",
        fontWeight: "700",
        transition: "300ms",
        marginBottom: "8px",
        "&:hover, &:focus": {
          transform: "scale(1.05)",
          background: theme.colors.live.dark,
          cursor: "pointer",
        }
      }}
    >
      Listen Live
    </button>
  )
}
```

Documentation about the `<ThemeProvider />` can be found here: https://emotion.sh/docs/theming#api

Documentation on the `useTheme()` hook can be found here: https://emotion.sh/docs/theming#usetheme-hook

## Questions to Ponder

1. How would you share styles using this approach?
2. Do you think this method would help establish consistency within a larger codebase?
3. What are the limitations of this approach?
4. How would you enforce conventions using this approach?
5. Do you prefer this to writing CSS/SCSS?
