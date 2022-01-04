const User = require('./User');
const Location = require('./Location');
const Ratings = require('./Ratings');
const Routes = require('./Routes');
const States = require('./States');
const Wall = require('./Wall');


// ======= ROUTES RELATIONSHIPS =======

Routes.hasOne(Location, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE'
});

Routes.belongsTo(Wall, {
  foreignKey: 'wall_id',
  onDelete: 'CASCADE'
});

Routes.hasMany(Ratings, {
  foreignKey: 'rating_id',
  onDelete: 'CASCADE'
});

Routes.hasMany(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// ======== RATINGS RELATIONSHIPS =======

Ratings.belongsTo(Routes, {
  foreignKey: 'route_id',
  onDelete: 'CASCADE'
});

Ratings.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// ========= WALL REALTIONSHIPS ==========

Wall.belongsTo(Location, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE'
});

Wall.hasMany(Routes, {
  foreignKey: 'route_id',
  onDelete: 'CASCADE'
});

// ========== STATES RELATIONSHIPS ===========

States.hasMany(Location, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE'
});

// ======== LOCATION RELATIONSHIPS ===========

Location.belongsTo(State, {
  foreignKey: 'state_id',
  onDelete: 'CASCADE'
});

Location.hasMany(Wall, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE'
});

// ========= EXPORT REALTIONSHIPS ============

module.exports = { User, Location, Ratings, Routes, States, Wall };
