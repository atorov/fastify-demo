import fastify from 'fastify'
import swagger from 'fastify-swagger'
import cdsRoutes from './routes/cds/index.js'

const app = fastify({ logger: true })

app.get('/health', (req, reply) => {
    reply.send({ status: 'Ok' })
})

app.register(swagger, {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: {
            title: 'fastify-demo',
        },
    },
})
app.register(cdsRoutes, { prefix: '/cds' })

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
