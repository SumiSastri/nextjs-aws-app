Create a file in root directory called mocks and add your mocks here.

In the api-folder, create folders with the name of the routes and the id routes in square brackets.

The api-folder is in the pages directory.

Use the example `hello.js` file to create your main route and import your mock data.

In the id use the javascript `find()` method to identify the id of the data and link it to the dynamic routes.

Use the example folder childrens-stories as a model.

You need to use the hooks `useState` `useEffect` from React to fetch the data as they accept relative paths. The `useStaticProps` method can only be used when you have the full URL path.