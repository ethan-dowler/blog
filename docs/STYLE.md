# Style Guide for Ethan's Blog

## Sass (SCSS)

### [SCUT](https://davidtheclark.github.io/scut/)

Use [SCUT](https://davidtheclark.github.io/scut/) mixins whenever possible.

### Mixins > Extends

Do NOT use extends. Prefer mixins, and try to reuse classes as much as possible. Favor extablished, reusable components over brand-new ones that require a bunch of custom styles. If you do write new styles, try to make them flexible enough to be reusable.

## Elements

### Box

Limits the width of the element to the max-width of the site. Variations include:
- Box--content: same idea, but a smaller width than the overall site

### Button

Predefined button styles.

All buttons should have a "hover state", and in general, the "hover color" should be lighter than the base color.

### Section

Each distinct section of the page should be wrapped in a `<section>` tag. The default styles for the `<section>` tag provide default padding around the edge of the page section.

### Spread

A glorified flex-box.