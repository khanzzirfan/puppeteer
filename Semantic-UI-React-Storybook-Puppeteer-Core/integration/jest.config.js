module.exports = {
    "rootDir": "../",
    "moduleDirectories": [
        "node_modules",
       "<rootDir>/",
       "rootDir>/__tests__"
      ],
    preset: 'jest-puppeteer',
    //testRegex: '<rootDir>/__tests__/*.test.js$',
    testRegex: '__tests__/.*\.js$',
    // "testMatch": [
    //     "<rootDir>__tests__/*.test.js"
    //   ],
    setupTestFrameworkScriptFile: '<rootDir>integration/setupTests.js'
  };