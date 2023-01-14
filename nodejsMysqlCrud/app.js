const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodejs", "root", "m.r.a.d.2001", {
    host: "localhost",
    dialect: "mysql"
});

const User = require("./models/user");

// db da table yaratmaq ucun funksiya
const onConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log("conencted...")
        User.sync({ force: false });
    } catch (error) {
    }
}

// onConnect();

// model select all
const getUsers = async () => {
    const result = await User.findAll();
    console.log(result.dataValues);
}
const finOneUser = async () => {
    const result = await User.findByPk(1);
    console.log(result.dataValues);

    // const whereResult = await User.findOne({
    //     where: {
    //         id: 1
    //     }
    // })
    // console.log(whereResult.dataValues);
}

const oneCreateUser = async () => {
    const result = await User.create({ firstName: 'Elman', lastName: 'Murselov', age: 22 });
    console.log(result);
}

const oneDeleteUser = async () => {
    const result = await User.destroy({
        where: {
            id: 2
        }
    })
    console.log(result);
}

const oneUpdateUser = async() =>{
    const result = await User.update( { age: 21}, {
        where: {
            id: 1
        }
    })
    console.log(result);
}

oneUpdateUser();
// oneDeleteUser();
// oneCreateUser();
// finOneUser();
// getUsers();