export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "nextuserloginawsauth9d71dcbe": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        },
        "userPoolGroups": {
            "nextdemo1GroupRole": "string"
        }
    },
    "api": {
        "nextuserloginawsauth": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "NextAuthUserAvatars": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}