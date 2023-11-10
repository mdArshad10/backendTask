import sequelize from "../db/connectionDB";

export const User = sequelize.define("User", {
  id: {
    type: sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
  },
});
