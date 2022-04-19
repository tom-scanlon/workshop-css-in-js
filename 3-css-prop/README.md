# Part 1 - Using the `css` prop
## Getting Started

1. Run `yarn install`
2. Open up `pages/index.js` in your editor
3. Run `yarn dev` and open `http://localhost:3000`

## Background

In exercise 1, we successfully moved our CSS into our JS file. In exercise 2, we successfully migrated to using the `styled()` function to write CSS. In this exercise, we'll look at another popular way to use CSS-in-JS: the `css` prop.

Let's re-refactor our code from the first exercise, but this time we'll use the `css` prop with object styles instead of `styled()`.

## Challenge

1. Refactor the current implementation to use the `css` prop with object styles.
2. Re-implement the hover/focus states for the button using this approach.

Here's a code example to help you get started:

```javascript
// Use emotion's jsx function instead of React's - we need this to make use of the 'css' prop.
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";

// Write your CSS inline
export default function Home() {
  return (
    <img
      css={{
        width: "50%",
        marginBottom: 48, // numbers are auto-converted to pixel values by emotion
      }}
      src="https://ichef.bbci.co.uk/images/ic/raw/p0bx2qpy.png"
    />
  )
}
```

Documentation on basic usage of the `css` prop with object styles can be found here: https://emotion.sh/docs/object-styles#with-the-css-prop

Documentation on nested selectors within the `css` prop are here: https://emotion.sh/docs/object-styles#child-selectors. This approach can be used with psuedo selectors.

## Questions to Ponder

1. Do you prefer this method to writing CSS files?
2. What are the limitations to this approach?
3. How would you enforce conventions using this approach?
4. How would you re-use styles within this approach?
5. Can you think of any other ways for handling styling within components?
