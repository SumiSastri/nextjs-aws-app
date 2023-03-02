Benefits

1. Improves performance - with React you need to wait for the hydration process to be complete and there is a wait time as hydration happens and the page is rendered. The component has to go through all the lifecycle methods before it is mounted on the DOM and dismounted from the DOM. Although this happens in microseconds, there is a delay and that delay increases depending on the browser/ internet speeds/ hardware specs/ geographic location from the servers (latency). With Next all the pages are rendered from the start, the source code available in HTML and therefore the user does not wait to see data on a page.

2. Better for SEO - so for blogs/ e-commerce all pages are indexed as the HTML is rendered on load and there is no hydration process that disguises the source code. There is no virtual DOM as all the pages are loaded as HTML and the DOM tree present for browsers to search
