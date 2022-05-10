const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: 'Tests/*_test.js',
  include: require('./config/includes.js'),
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome'
    },
    Mochawesome: {
      "uniqueScreenshotNames": "true"
  }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {
    "reporterOptions": {
      "reportDir": "output"
  }
  },
  name: 'CodeceptJS-Demo',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}