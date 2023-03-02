You can opt for a custom server like Express to override the server provided with the Next.js package if you want.

The cons are you do not have the option of automatic static optimisation and serverless options.

The pros of using the inbuilt server are
No custom server code required
No configuring of API routes
Simplifies both front and backends and connectivity between the 2
The API code is not bundled with the front end so better optimisation 


The data flow is that a request is made on the client/ frontend
It goes to the internal server in NextJs
The request is routed to the api folder
The request query is send to the db (or mocks) via the api-folder routes
The query is parsed and sent back as a response via the api-folder routes
The response is consumed by the client/ front end

 Bruno Antunes[https://www.youtube.com/watch?v=61TngxLrP_0&list=PLYSZyzpwBEWSQsrukurP09ksi49H9Yj40&index=11]
Some methods

`getInitialProps()` is the initial props received client side - it is the front end state management

`getServerSideProps()` runs only on the server, not on the browser, the browser calls this function as an api-endpoint proxy - allows you to call a db directly

