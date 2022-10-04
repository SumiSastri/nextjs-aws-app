MongoDB is a JavaScript document-type non-relational DB - also known as a NoSQL db.

MongoDB has been used in this repo

Details required for a MongoDB account - email, password, org name
Save - Public key and private key
Whitelist IP - whatsmyIP (to identify your IP)

CreateDB:
Create new
Shared

Save username and password - config in a `dotenv` file
Ensure that the file is in your gitignore to protect your secrets

eg dot env config
```
NODE_ENV="development"
PORT=4000
MONGO_URI=mongodb+srv://userName:password@cluster0.slip5.mongodb.net/test
```

Add to your server with the URI and check that the connection works.

You can now create data with the graphQL-express erver