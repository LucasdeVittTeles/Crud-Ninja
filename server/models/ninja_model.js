const {Model, DataTypes} = require('sequelize');


class Ninja extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            idade: DataTypes.INTEGER,
            claNinja: DataTypes.STRING,
            numeroMissoes: DataTypes.INTEGER,
            ranking: DataTypes.STRING
        },{
            sequelize
        })
    }

}


    module.exports = Ninja;