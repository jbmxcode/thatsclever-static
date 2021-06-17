module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run start',
            numberOfRuns: 1,
            url: [
                'http://127.0.0.1:8080/'
            ]
        },
        upload: {
            target: 'temporary-public-storage',
        }
    }
}