module.exports = function (sequelize, DataTypes) {
    const Renters = sequelize.define("Renters", {
      email: DataTypes.STRING,
      numGuest: DataTypes.INTEGER,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phone: DataTypes.STRING,
      reason: DataTypes.STRING,
      // TODO: Days of the week?
    });
  
    Player.associate = function (models) {
      Player.belongsToMany(models.Game, {
        through: "PlayerGames",
        foreignKey: "playerId",
      });
    };
  
    return Player;
  };
  