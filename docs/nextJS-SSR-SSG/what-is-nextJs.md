Documentation [https://nextjs.org/docs]

Nextjs is a framework that uses React as a ui and ships with styling, a server and the ability to call apis to get data from a database. It also ships with front-end routing that allows you to render each page as a pre-rendered URL on the front end.

SSR (server-side-rendering)- gives you fast contentful page and great for SEO pages - a file-system routing - front end routes recognised by file path.

With other libraries (like React) which is just a component library that deals with the design layer primarily, you need to figure out routing (you can use different 3rd party libraries - React Router being the most frequently used), styling libraries (a matter of preference, React ships with no styling) authentication requires further programming time (a variety of authentication options can be used depending on the use case and stack).

In short, the app is not production ready - many of these libraries are not frameworks so you need to build and serve the app before you deploy it. Bundles are not optimised, compiled or transpiled out of the box.
