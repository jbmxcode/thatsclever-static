module.exports = {
    ci: {
      collect: {
        startServerCommand: 'npm run start',
        numberOfRuns: 3,
        url: [
          'http://localhost:8080',
        ],
      },
      assert: {
        assertions: {
          'categories:performance': ['error', {minScore: .7}],
          'categories:accessibility': ['error', {minScore: .7}],
          'categories:best-practices': ['error', {minScore: .7}],
          'categories:seo': ['error', {minScore: .7}],
        }
      },
      upload: {
        target: "temporary-public-storage",
      },
    },
  };