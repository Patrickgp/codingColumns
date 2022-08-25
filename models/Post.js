const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

// Creating our Post model
class Post extends Model {}

Post.init({
  id: {
    type: Datatypes.INTEGER,
    allowNull: false,
    primaryKey: false,
  },
});
