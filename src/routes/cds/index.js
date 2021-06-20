import {
    getCdsServices,
    invokeCdsServiceById,
} from '../../controllers/cds/index.js'

const getSdsServicesOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        hook: { type: 'string' },
                        title: { type: 'string' },
                        description: { type: 'string' },
                    },
                },
            },
        },
    },
    handler: getCdsServices,
}

const Card = {
    type: 'object',
    properties: {
        summary: { type: 'string' },
        indicator: { type: 'string' },
        detail: { type: 'string' },
        source: {
            type: 'object',
            properties: {
                label: { type: 'string' },
                url: { type: 'string' },
            },
        },
    },
}

const invokeCdsServiceByIdOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Card,
            },
        },
    },
    handler: invokeCdsServiceById,
}

function cdsRoutes(app, options, done) {
    app.get('/cds-services', getSdsServicesOpts)
    app.post('/cds-services/:id', invokeCdsServiceByIdOpts)

    done()
}

export default cdsRoutes
