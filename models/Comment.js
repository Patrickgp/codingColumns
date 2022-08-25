const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

// Creating our Comment model
class Comment extends Model {}

Comment.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: false,
    },
    content: {
      type: Datatypes.TEXT,
      allowNull: false,
    },
    // This post_id will belong to the posting user
    post_id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      references: {
        model: "post",
        key: "id",
      },
    },
    // This user_id will belong to the commenting user
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
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);

module.exports = Comment;
