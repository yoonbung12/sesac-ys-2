const Sequelize = require("sequelize");


const config = require("../config/config.json")["development"];


const db = {};
const sequelize = new Sequelize(
  config.database, // db이름
  config.username, // 유저
  config.password, // pw
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Customer = require("./Customer")(sequelize, Sequelize);
db.Orders = require("./Orders")(sequelize, Sequelize);

// 여기서 관계 정립하면된다.
// 1: N 관계
db.Customer.hasMany(db.Orders, {
    // onDelete: "cascade",
    foreignKey:"custid",
    // sourceKey: "custid"

})
db.Orders.belongsTo(db.Customer, {
    onDelete: "cascade",
    foreignKey: "custid" ,
    // targetKey: "id"
})

module.exports = db;