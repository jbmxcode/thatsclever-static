module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run test',
            numberOfRuns: 1,
            url: [
                'http://localhost:8080/',
                'http://localhost:8080/shop.html',
                'http://localhost:8080/blog',
            ],
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};
