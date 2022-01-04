const sequelize = require('../config/connection');
const { User, Wall, Location, Routes, Ratings, State } = require('../models');

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

  for (const route of routeData) {
    await Route.create({
      ...route,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();