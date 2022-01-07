const User = require('./User');
const Location = require('./Location');
const Rating = require('./Rating');
const Route = require('./Route');
const State = require('./State');
const Wall = require('./Wall');


// ======= ROUTES RELATIONSHIPS =======

// Route.belongsTo(Location, {
//   foreignKey: 'location_id',
//   onDelete: 'CASCADE'
// });

Route.belongsTo(Wall, {
  foreignKey: 'wall_id',
  onDelete: 'CASCADE'
});

Route.hasMany(Rating, {
  foreignKey: 'route_id',
  onDelete: 'CASCADE'
});



Route.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// ========== USER RELATIONSHIPS =============

User.hasMany(Route, {
  foreignKey: 'route_id',
  onDelete: 'CASCADE'

})
// // ======== RATINGS RELATIONSHIPS ===========

Rating.belongsTo(Route, {
  foreignKey: 'route_id',
  onDelete: 'CASCADE'
});

Rating.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// // ========= WALL REALTIONSHIPS ==========

Wall.belongsTo(Location, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE'
});

Wall.hasMany(Route, {
  foreignKey: 'route_id',
  onDelete: 'CASCADE'
});

// // ========== STATES RELATIONSHIPS ===========

State.hasMany(Location, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE'
});

// // ======== LOCATION RELATIONSHIPS ===========

Location.belongsTo(State, {
  foreignKey: 'state_id',
  onDelete: 'CASCADE'
});

Location.hasMany(Wall, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE'
});

// ========= EXPORT REALTIONSHIPS ============

module.exports = { User, Location, Rating, Route, State, Wall };
