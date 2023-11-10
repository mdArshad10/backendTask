import sequelize from "../db/connectionDB";

export const List = sequelize.define("List", {
  id: {
    type: sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: sequelize.DataTypes.INTEGER,
    references: {
      model: "User",
      key: "id",
    },
  },
});


