const Sequelize = require("sequelize");


const config = require("../config/config.json")["development"];


const db = {};
const sequelize = new Sequelize(
  config.database, // db이름
  config.username, // 유저
  config.password, // pw
  config
);
// sequelize 객체를 만든다.
// 하나의 노드에서 2개의 mysql에 연결할수 있다. (생성자 Sequelize때문에)
db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = {sequelize: sequelize, Sequelize: Sequelize}

//const Visitor = require("./Visitor")
//db.Visitor = Visitor(sequelize, Sequelize)

db.User = require("./User")(sequelize, Sequelize);
// db.Visitor에는 sequelize로 USER 테이블을 정의한 객체를 담음..

module.exports = db;