import {client} from './_redisConn'

export default async function redispost(request, response) {
    const [key, value] = [request.query["key"], request.query["value"]]
    if (key && value) {
        await client.set(key, value);
        response.status(200).json({
            status: 'Done',
        });
    } else {
        response.status(200).json({
            status: 'No Op Done',
        });
    }
}