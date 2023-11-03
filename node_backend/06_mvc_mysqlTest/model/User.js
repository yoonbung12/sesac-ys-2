function User(Sequelize, DataTypes) {
    return Sequelize.define(
        // 모델(테이블) 정의, sequelize 객체의 define 메소드를 이용해서
        "user", 
        {
            // id ,userid, name, pw
            id: {
                // int not null primary key auto_increment
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            userid: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false,

            },
            pw: {
                type: DataTypes.STRING(20),
                allowNull: false,
            }, // 컬럼 정의
        },  
        {
            tableName: "user",
            freezeTableName: true,
            timestamps: false,

        }
    );
}

module.exports = User;