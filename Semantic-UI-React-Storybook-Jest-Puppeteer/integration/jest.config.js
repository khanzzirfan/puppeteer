module.exports = {
    preset: 'jest-puppeteer',
    testMatch: ["(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?|js?)$"],
    setupTestFrameworkScriptFile: './setupTests.js'
  };