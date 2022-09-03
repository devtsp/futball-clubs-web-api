// INIT DB
const makeSequelizeDB = require('./sequelize');
const { clubRepository } = makeSequelizeDB({
	connectionString: 'sqlite::memory:',
	options: { logging: false },
});

// INIT CLUB MODULE
const initClubsModule = require('./modules/club');
const clubControllers = initClubsModule(clubRepository);

// APP
const makeExpressApp = require('./express');
const app = makeExpressApp({ clubControllers });

// SERVE APP
app.listen(8080, () => {
	console.log('>> Server is listening on port 8080');
});