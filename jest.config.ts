import type { Config } from 'jest';

const config: Config = {
	verbose: true,
	rootDir: './src',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/tests/config/setup-tests.ts'],
	extensionsToTreatAsEsm: ['.ts', '.tsx'],
	moduleDirectories: ['node_modules', 'src'],
	transform: {
		'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
			'jest-transform-stub',
		'^.+\\.tsx?$': ['ts-jest', { rootDir: '.' }],
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
	},
	coverageDirectory: 'coverage',
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: 90,
		},
	},
};

export default config;
