import sequelize from "../db/connectionDB";

export const Task = sequelize.define("Task", {
  id: {
    type: sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: sequelize.DataTypes.TEXT,
  },
  completed: {
    type: sequelize.DataTypes.BOOLEAN,
    defaultValue: false,
  },
  listId: {
    type: sequelize.DataTypes.INTEGER,
    references: {
      model: "List",
      key: "id",
    },
  },
});
