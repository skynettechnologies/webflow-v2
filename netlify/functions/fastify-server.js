// netlify/functions/fastify-server.js
const fastify = require('app/server'); // Adjust the path if necessary

module.exports.handler = async (event, context) => {
    const result = await fastify.inject({
        method: event.httpMethod,
        url: event.path,
        payload: event.body
    });

    return {
        statusCode: result.statusCode,
        headers: result.headers,
        body: result.body
    };
};
