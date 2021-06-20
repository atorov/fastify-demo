function getCdsServices() {
    return [
        {
            id: 'info-card',
            hook: 'patient-view',
            title: 'Info card on patient view',
            description: 'An example of a CDS Service that returns an info card',
        },
        {
            id: 'warning-card',
            hook: 'patient-view',
            title: 'Warning card on patient view',
            description: 'An example of a CDS Service that returns a warning card',
        },
        {
            id: 'critical-card',
            hook: 'patient-view',
            title: 'Critical card on patient view',
            description: 'An example of a CDS Service that returns a critical card',
        },
    ]
}

function invokeCdsServiceById(req) {
    const { id } = req.params

    switch (id) {
        case 'info-card':
            return [
                {
                    summary: 'Info card on patient view',
                    indicator: 'info',
                    detail: '### Details\n\nThis is a simple info card\n\n',
                    source: {
                        label: 'CDS Service Demo',
                        url: 'https://example.com/source',
                    },
                },
            ]
        case 'warning-card':
            return [
                {
                    summary: 'Warning card on patient view',
                    indicator: 'warning',
                    detail: '### Details\n\nThis is a simple warning card\n\n',
                    source: {
                        label: 'CDS Service Demo',
                        url: 'https://example.com/source',
                    },
                },
            ]
        case 'critical-card':
            return [
                {
                    summary: 'Critical card on patient view',
                    indicator: 'critical',
                    detail: '### Details\n\nThis is a simple critical card\n\n',
                    source: {
                        label: 'CDS Service Demo',
                        url: 'https://example.com/source',
                    },
                },
            ]
        default: {
            const error = new Error()
            error.statusCode = 418
            error.message = 'short and stout'
            throw error
        }
    }
}

export {
    getCdsServices,
    invokeCdsServiceById,
}

export default null
