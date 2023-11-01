// 모델을 가져오는 부분
const visitor = require("../model/visitor_mysql");

exports.home = (req, res) => {
    res.render("index");
}
exports.visitor = (req, res) => {
    // const data = visitor.getVisitor();
    
    // res.render("visitor", {data: data});
    visitor.getVisitor((rows) => {
        res.render("visitor", {data: rows});
    });

}

// post / visitor =>  방명록 insert
exports.postVisitor = (req,res) =>{
    // insert할 데이터 
    console.log("req.body",req.body);
    visitor.insertVisitor(req.body, (id) => {
        console.log("controller postVisitor", id);
        res.send({
            ...req.body,
            id
        });
    });

};

// delete 부분 /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
    console.log(req.params)
    visitor.delVisitor(req.params.id, (result) =>{
        res.send({result: true});
    });

}

// PATCH /visitor/:id => 방명록 수정
exports.patchVisitor = (req, res) => {
    console.log(req.body);
  
    Visitor.patchVisitor(req.body, (result) => {
      console.log("ctrl getVisitorById: patchVisitor", result);
      res.send({ result: true });
    });
  };
