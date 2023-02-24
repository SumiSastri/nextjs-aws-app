The pages folder is responsible for the front-end routing of the app. When a page is created in the pages directory it is automatically available as a route as it is compiled server side and served up as an HTML page.

See the folders
About
Profile
Blogs

To get nested routes
You nest the folders inside each other and to get the route
See Blogs folder and the nested files
http://localhost:3000/blogs/food-blogs

For dynamic routes the nextRouter object needs to be imported and the url params identified by id and for nested ids, the folders need to be nested as well - see recipes folder

See food blogs folder
http://localhost:3000/blogs/food-blogs/recipes/300
