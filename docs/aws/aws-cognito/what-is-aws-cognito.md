Cognito offers user access and identity pools. User pools are directories that provide sign-up and sign-in options taking care of access and identity management and user authentication - IdaaM (Id and access management). Cognito manages the EC2 instances that manage the data storage and security of users.

While there are several IdaaM service providers - offering MFA (multi-factor-authentication), session based authentication with JWT (Json Web Token) - AWS Cognito offers its own solution to registering and logging on users for both web and mobile application. Cognito is a managed service and allows third party single-sign on with google/fb/ twitter/ Linked-in as well.

Cognito takes care of authentiation, user management, synchronisation of this user management across multiple platforms.

The 2 ways are via they can be used independently or together

Cognito - User Pool
IAM - Identity Pool

- user pools (who the user is - details of the user) - user directory that provide sign-up and sign-in options for web and mobile app users
- identity pools or Federated identities (granting of permissions and access via 3rd parties) - Apple/ google/ social media - here they have an AWS Id via the 3rd party, this creates a new user id based on the federated access and when full access is required (move from guest to permanant user) it synchronises the federated user to the unique user and adds to the user pool (directory)

Advantages

- Security
- Reliablity
- Scalability
- Efficiency
- Cross-platform consistency
- Guest logins/ social media logins (sync of data from guest logins to full user)
- MFA and password policies (oblige users to take responsibility for setting secure passwords)
- Analtyics - segmentation according to customer useage (across platform)
- Uses JWT session tokens which are managed by AWS - you do not need to go through the process of dropping session cookies to authenticate users

Disadvantages

- Learning curve
- You need AWS devs
