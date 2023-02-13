const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "recipe",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      resume: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      healthScore: {
        type: DataTypes.INTEGER,
      },

      img: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      steps: {
        type: DataTypes.TEXT,
      },

      createdInDb: {
        type: DataTypes.BOOLEAN,
      },
    },
    { timestamps: false }
  );
};
