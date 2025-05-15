// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
    // Provide the path to your Next.js app
    dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    // Optional: Allow Jest to test .js files in the pages directory
    testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
    // Optional: Setup resolver for Next.js
    moduleNameMapper: {
        // Handle module aliases (if you're using these in your Next.js project)
        '^@/components/(.*)$': '<rootDir>/components/$1',
        '^@/pages/(.*)$': '<rootDir>/pages/$1',
    },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config
module.exports = createJestConfig(customJestConfig);