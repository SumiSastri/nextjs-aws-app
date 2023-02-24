Configs
next.config.js (runs modules in strict mode)
package.json and package-lock-json

.gitignore (baked in)
.eslintrc (linter config)
.next folder (build scripts - SSR dot file that is gitignored)
node modules (package dependences - also gitignored)
styles - holds `globals.css` file applicable to the whole project
public - public resources for app (icon, images, svgs) - no root html, this is key rendered server-side

pages

- root index.tsx (index.js)
- api (create apis for all)
  \_app.tsx (\_app.js) layout
