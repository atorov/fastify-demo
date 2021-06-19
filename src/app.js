import fastify from 'fastify'

const app = fastify({ logger: true })

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
