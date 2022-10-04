
# graphQL-Express

API endpoints can be checked by setting up and express server and using a combination of the  graphQL and graphQL-express libraries.

This sets up  a server-side JavaScript environment and you can make network calls and check how these calls are working in real-time. You can also Postman which is also an environment to test network calls. This is a handy local alternative enabling you to check endpoints quickly and more efficiently.

The advantages are - the debugging and error messages are bespoke to graphQL and are very useful during the testing/ debugging process.

Once you have set up your server you can go to the port and in the url `http://localhost:4000/graphql` a server is set up which allows you to query the data and check how the graphQL schemas will query the data.

Step 1: 
Test the data with hard coded data - you can use lodash methods to make this process more efficient
Step 2:
Move the data out into a mocks folder as these also help in seeding your db once you set it up
Step 3:
Set up your dB of choice and check backend-data flow in the graphql-express server
Step 4:
Add the ids to the hard-coded mocks so that you can easily test the data in the graphql-express server

Test all your changes to the endpoints in the graphql server on local host.

For examples look at the `server/data/mocks` folder where the hard coded data has been archived.