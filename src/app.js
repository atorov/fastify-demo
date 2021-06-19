import fastify from 'fastify'

const app = fastify({ logger: true })

app.get('/health', (_, reply) => {
    reply.send({ status: 'Ok' })
})

async function start() {
    try {
        await app.listen(process.env.PORT)
    }
    catch (error) {
        app.log.error(error)
        process.exit(1)
    }
}

start()
