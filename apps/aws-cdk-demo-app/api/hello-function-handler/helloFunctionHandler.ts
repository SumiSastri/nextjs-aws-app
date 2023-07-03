exports.handler = async function (event: any) {
    console.log ("request:", JSON.stringify(event, undefined, 2));
    return {
        statusCode:200,
        headers: {"ContentType": "text/plain"},
        body: `Demo hello world CDK App you are on the event path ${event.path}`

    }
}