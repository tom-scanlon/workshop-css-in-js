# Part 1 - Removing CSS Files
## Getting Started

1. Run `yarn install`
2. Open up `pages/index.js` and `styles/Home.module.css` in your editor
3. Run `yarn dev` and open `http://localhost:3000`

## Challenge

Your challenge is to delete `Home.module.scss` _without breaking any of the styles_.

The first step in using CSS-in-JS is to _actually move your styles into JS_. We'll start with the simplest implementation possible - using inline styles.

For example, we might do the following to migrate the CSS for the image to an inline style:

```javascript
<img 
  src='https://ichef.bbci.co.uk/images/ic/raw/p0bx2qpy.png'
  style={{
    width: "50%",
    marginBottom: "32px"
  }}
/>
```

Try moving all of the styles over into `pages/index.js`.

## Questions to Ponder

1. What do you think the limitations of inline styling might be?
2. How might you share styles?
