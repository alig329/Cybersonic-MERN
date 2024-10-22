module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^axios$': require.resolve('axios'),
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!axios)/'],
};
