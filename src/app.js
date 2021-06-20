import fastify from 'fastify'
import swagger from 'fastify-swagger'
import cdsRoutes from './routes/cds/index.js'

const app = fastify({ logger: true })

app.register(swagger, {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: {
            title: 'fastify-demo',
        },
    },
})

app.get(
    '/health',
    {
        schema: {
            response: {
                200: {
                    type: 'object',
                    properties: {
                        status: { type: 'string' },
                    },
                },
            },
        },
        handler(req, reply) {
            reply.send({ status: 'Ok' })
        },
    },
)

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
