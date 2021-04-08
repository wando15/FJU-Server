const db = require("../../database/db-connect");
const auth = require("./auth.model");
const module_model = require("./module.model");
const profile_module = require("./profile_module.model");
const profile = require("./profile.model");
const user = require("./user.model");

user.hasMany(auth, { foreignKey: 'user_id' })

profile.hasMany(user, { foreignKey: 'profile_id' });

profile_module.belongsTo(profile, { foreignKey: 'profile_id' });
profile_module.belongsTo(module_model, { foreignKey: 'module_id' });

db.sync({ alter: true });