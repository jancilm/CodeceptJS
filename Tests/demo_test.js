Feature('My First Test');

const methods = require('../Pages/methodcollection')

Scenario('test something', ({ I }) => {
  I.amOnPage('https://github.com');
  I.see('GitHub');
});