module.exports = {
  roots: ['<rootDir>/src/'],
  setupFilesAfterEnv: [
    '<rootDir>/node_modules/document-register-element/build/document-register-element.node.js',
    '<rootDir>/test/UI5WebComponentsSetup.js',
    '<rootDir>/test/jest.setup.ts',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom-sixteen',
  modulePathIgnorePatterns: ['mocks'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(css|less)$': '<rootDir>/test/__mocks__/styleMock.js',
    '^.+\\.(js|ts|tsx)$': '<rootDir>/test/jest.transform.js',
  },
  transformIgnorePatterns: ['node_modules/(?!(@ui5|lit-html))'],
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/test/__mocks__/styleMock.js',
    '^.+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$':
      '<rootDir>/test/__mocks__/mediaFileTransformer.js',
  },
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: true,
  coverageDirectory: 'target/coverage/jest',
  coverageReporters: ['json', 'lcov', 'text', 'cobertura', 'clover'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'target',
        outputName: 'junit.xml',
      },
    ],
  ],
};
