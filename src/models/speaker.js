const speaker = (sequelize, DataTypes) => {
    const Speaker = sequelize.define('speaker', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        
        },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      bio: DataTypes.TEXT,
    });
  
    Speaker.associate = models => {
      Speaker.hasMany(models.Session, { as: 'Sessions'  });
    };
  
    return Speaker;
  };
  
  export default speaker;
  