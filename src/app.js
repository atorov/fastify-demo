import fastify from 'fastify'

const PORT = 5000 // TODO:

const app = fastify({ logger: true })

async function start() {
    try {
        await app.listen(PORT)
    }
    catch (error) {
        app.log.error(error)
        process.exit(1)
    }
}

start()
