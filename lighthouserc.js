module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run start',
            numberOfRuns: 1,
            url: [
                'http://localhost:8080',
            ],
        },
        upload: {
            target: "temporary-public-storage",
        },
    },
};