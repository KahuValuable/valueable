// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
    // Provide the path to your Next.js app
    dir: './',
});

// Add any custom config to be passed to Jest
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    // Optional: Allow Jest to test .js files in the pages directory
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    // Optional: Setup resolver for Next.js
    moduleNameMapper: {
        // Handle module aliases (if you're using these in your Next.js project)
        '^@/components/(.*)$': '<rootDir>/components/$1',
        '^@/pages/(.*)$': '<rootDir>/pages/$1',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    },
};

