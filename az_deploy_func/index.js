module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
let Aditya = "Aditya"
    const surname = (req.query.name || (req.body && req.body.name));
    const responseMessage = surname
        ? "Hello, " + surname + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}