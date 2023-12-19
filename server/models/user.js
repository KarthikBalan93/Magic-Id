const { DataTypes } = require('sequelize');
// const sequelize = require('../config/db'); // Adjust the path accordingly

// const User = sequelize.define('User', , {
//   // Additional model options can be defined here
//   timestamps: false, // Disable Sequelize's default timestamps (createdAt, updatedAt)
//   underscored: true, // Use underscores instead of camelCase for automatically added attributes
// });

// module.exports = User;


// const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    contact: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    verification_flow: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  }
  const options = {
    freezeTableName: true,
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    underscored: true,
  };
  return sequelize.define("User", attributes, options);
}
