const {AccountController} = require('./controllers');
const {accountService} = require('./services');
const {authMiddleware} = require('../components/auth');

const errorHandler = require('../components/error-handlers');

const accountController = new AccountController({
  errorHandler,
  accountService,
});

module.exports = async (app) => {
  app.get('/monit/health', (req, res) => res.send('OK'));
  app.post('/account/auth', accountController.auth.bind(accountController));
  app.post('/account/createAccount', authMiddleware, accountController.createAccount.bind(accountController));
};
