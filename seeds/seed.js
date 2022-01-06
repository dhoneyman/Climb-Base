const sequelize = require('../config/connection');
const { User, Wall, Location, Route, Rating, State } = require('../models');

const userData = require('./userData.json');
const wallData = require('./wallData.json');
const locationData = require('./locationData.json');
const routeData = require('./routeData.json');
const ratingData = require('./ratingData.json');
const stateData = require('./stateData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  const state = await State.bulkCreate(stateData);
  const location = await Location.bulkCreate(locationData);
  const wall = await Wall.bulkCreate(wallData);
  const route = await Route.bulkCreate(routeData);
  const rating = await Rating.bulkCreate(ratingData);

  

  process.exit(0);
};

seedDatabase();