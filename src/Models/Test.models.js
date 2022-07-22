import Sequelize from 'sequelize';
import sequelize from '../Database/Database';

const TestModel = sequelize.define('test',{

    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    name:{
        type: Sequelize.STRING,
        allowNull:true
    }

});

export default TestModel;