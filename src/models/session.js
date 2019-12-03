const session = (sequelize, DataTypes) => {
    const Session = sequelize.define('session', {
      title: DataTypes.STRING,
      time: DataTypes.STRING,     
      description: DataTypes.TEXT,
    });
  
    Session.associate = models => {
      Session.belongsTo(models.Speaker, { as:'Speaker', foreignKey: 'speakerId' });
    };
  
    return Session;
  };
  
  export default session;