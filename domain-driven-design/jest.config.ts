import type { Config } from 'jest';

const config: Config = {
    transform: {
        '^.+\\.(t|j)sx?$': '@swc/jest',
    },
    clearMocks: true,
    coverageProvider: "v8",
    modulePaths: [
        "<rootDir>/src/",
    ],
    testMatch: [
        "**/*.spec.ts",
    ],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "^@checkout/(.*)$": "<rootDir>/src/domain/checkout/$1",
        "^@customer/(.*)$": "<rootDir>/src/domain/customer/$1",
        "^@product/(.*)$": "<rootDir>/src/domain/product/$1",
        "^@shared/(.*)$": "<rootDir>/src/domain/shared/$1",
        "^@infra/(.*)$": "<rootDir>/src/infra/$1",
    },
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    collectCoverage: true
};

export default config;
