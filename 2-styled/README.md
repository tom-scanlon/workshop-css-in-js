# Part 1 - Using `styled()`
## Getting Started

1. Run `yarn install`
2. Open up `pages/index.js` in your editor
3. Run `yarn dev` and open `http://localhost:3000`

## Background

We've successfully moved most of our styles into our javascript file, but there's a problem: _inline styles don't support psuedo selectors_, meaning we can't add hover/focus styles to our buttons.

Luckily for us, modern CSS-in-JS libraries support psuedo selectors, so we can refactor what we currently have to re-implement the hover/focus states for our buttons.

For reference, this is the CSS for the hover/focus states for both buttons:

```CSS
.liveCta:hover, .liveCta:focus {
  transform: scale(1.05);
  background: #00857f;
  cursor: pointer;
}

.aodCta:hover, .aodCta:focus {
  transform: scale(1.05);
  background: #d24712;
  cursor: pointer;
}
```

Using the [emotion](https://emotion.sh/) library, we have multiple options for improving our CSS-in-JS work so far. In this exercise, we'll look at the first of two popular ways to implement CSS-in-JS by using the `styled()` function.

## Challenge

1. Refactor the current implementation to use the `styled()` prop.
2. Re-implement the hover/focus states for the button using this approach.

Here's a code example to help you get started:

```javascript
import styled from '@emotion/styled'

// Create a component using styled()
const Image = styled.img`
  width: 50%;
  margin-bottom: 48px;
`

// Use the component
export default function Home() {
  return (
    <Image src="https://ichef.bbci.co.uk/images/ic/raw/p0bx2qpy.png" />
  )
}
```

Documentation on basic usage of `styled()` can be found here: https://emotion.sh/docs/styled#styling-elements-and-components

Documentation on nested selectors within `styled()` is here: https://emotion.sh/docs/styled#styling-elements-and-components. This approach can be used with psuedo selectors.

## Questions to Ponder

1. Do you prefer this method to writing CSS files?
2. What are the limitations to this approach?
3. Can you think of any other ways for handling styling within components?
