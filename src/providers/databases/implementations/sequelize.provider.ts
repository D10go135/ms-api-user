import { Sequelize } from "sequelize-typescript";
import { UserEntity } from "../../../models/user/user.entity";

const sequelizeConnection = new Sequelize({
    database: 'swm_database',
    dialect: 'mysql',
    username: 'swm_user',
    password: 'senha',
    logging: false,
    pool: {
        max: 3,
        min: 1
    },
    models: [UserEntity]
});

sequelizeConnection.sync().catch((e) => {
    return;
})

export { sequelizeConnection }