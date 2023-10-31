// mySql연결 파트
const mysql = require('mysql');

// createConnection: mysql연결 정보를 받아서 mysql과 연결
// db 연결한다 > host, user, pw, database
const conn =  mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'sesac_test'
});
//                  콜백함수 받아야함.
exports.getVisitor = (cb) =>{
    conn.query(`select * from visitor`, (err, rows) =>{
        // err 변수가 빈 값이 아니라면, err가 발생했다는 것..
        if(err){
            throw err;
        }

        console.log("visitor",rows);
        cb(rows);
    });
};

exports.insertVisitor = (data, cb) => {
    // insert into visitor(username, comment) values ('', '');
    const sql = `insert into visitor(username, comment) values('${data.username}', '${data.comment}')`;
    conn.query(sql, (err, result) => {
        if(err) {
            throw err;
        }

        console.log("visitor insert", result);
        cb(result.insertId);
    })
}

exports.delVisitor = (id,cb) =>{
    // 어떤 데이터가 필요한지 ex)delet할 id
    const sql = `delete from visitor where id = ${id}`;
    conn.query(sql, (err, result) =>{
        if(err) {
            throw err;
        }
        let flag = false;
        if(result.affectedRows){
            flag = true;
        }
        console.log("Visitor delete", result);
        cb(flag);
        //cb(true);
    })

}
exports.patchVisitor = (data, cb) => {
    const sql = `UPDATE visitor SET username='${data.name}', comment='${data.comment}' WHERE id=${data.id}`;
    conn.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
  
      console.log("Visitor.js: ", result);
      cb(result);
    });
  };

// exports.getVisitor = () =>{
//     return [
//         {id: 1, username: "bonggu", comment: "HIHIHI다"},
//         {id: 2, username: "gilgu", comment: "워우워어어~"},
//     ];
// };

