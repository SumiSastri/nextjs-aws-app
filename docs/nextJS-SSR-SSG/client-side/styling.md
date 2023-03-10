- Next ships with the `globals.css` file applicable to the whole project
- Component specific css is also possible eg: `Home.module.css` import the file as styles into the component and styles becomes an object in the `className` attribute of the `jsx` element example in the home-page file `index.js` NOTE: All custom styles including paragraphs need the dot notation of `classNames` eg: `.p` for paragraph not `p`.
- Web-safe typography has been used (Times New Roman)
- Libraries can be used and installed eg: Tachyons `npm install tachyons` and added to the root file pages/_app.js