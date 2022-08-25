const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

// Creating our Post model
class Post extends Model {}

Post.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: false,
    },
    title: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    post_url: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    user_id: {
      type: Datatypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
