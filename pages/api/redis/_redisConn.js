import { createClient } from 'redis';

const client = createClient({
    password: '7ODMH7W0XOaxS5MmXWw0iDBzIcMiM4Ca',
    socket: {
        host: 'redis-19926.c17.us-east-1-4.ec2.cloud.redislabs.com',
        port: 19926
    }
});

async function connect(){ await client.connect(); }
connect();

module.exports = { client }