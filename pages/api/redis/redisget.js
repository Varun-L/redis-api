import {client} from './_redisConn'

export default async function redisget(request, response) {
    const key = request.query["key"]
    if (key) {
        response.status(200).json({
            status: await client.get(key),
        });
    } else {
        response.status(200).json({
            status: 'No Key provided',
        });
    }
}