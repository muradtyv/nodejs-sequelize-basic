const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize("nodejs","root","m.r.a.d.2001", {
    host: "localhost",
    dialect: "mysql"
});

const User = sequelize.define("User",{

    firstName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    lastName: {
        type:DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.SMALLINT,
        allowNull:true,
        defaultValue:0
    }
});

module.exports = User;