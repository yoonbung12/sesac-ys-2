    // 객체 구조 분해
const {Visitor} = require("../model"); //index.js 에서 가져오겠다.
 
exports.home = (req, res) => {
    res.render("index");
};

// 임시 라우터 
exports.getTest = (req, res) =>{
    // select username from visitor where id = 2 order by username ASC
    Visitor.findAll({
        attributes:["username", "id"],
        // where: {
        //   id: req.params.id,
        // },
        order: [["username", "ASC"]],
    }).then((result) => {
        console.log("findOne result: ", result);
        res.send(result);
    })
}

// GET /visitors => 기존 방명록 조회후 render("visitor"); 
exports.visitor = (req, res) => {
    // select * from visitor;  전체 조회한다.
    Visitor.findAll().then((result) =>{
        console.log("findAll result: ", result);
        console.log("0 index의 username: ", result[0].username);
        // 기대 : [{id: , username: , comment: }, {id: , username: , comment: }]
        res.render("visitor", { data: result });
    });
};

// post / visitor =>  방명록 insert 
exports.postVisitor = async (req,res) =>{
    // 보내야할 데이터
    const data = {
        username: req.body.username,
        comment: req.body.comment,
    };
    // 2가지 방법

    // Visitor.create(data)
    //     .then((result) => {
    //         console.log("create Result: ", result);
    //         res.send(result);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         res.status("500 오류 발생");
    //     })
    
    const createVisitor = await Visitor.create(data);
    // console.log(createVisitor);
    res.send( createVisitor);
};

// delete 부분 /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
    Visitor.destroy({
        where: {
            id: req.params.id,
        },
    }).then((result) => {
        console.log("destroy result: ", result);
        // 객체 구조 분해
        res.send({result: true});
    })

}

// GET /visitor/:id =>방명록 하나 조회
exports.getVisitedById = (req, res) =>{
    // select * from visitor where id=?? limit 1;
    Visitor.findOne({
        where: {
            id: req.params.id
        },
    }).then((result) => {
        console.log("findOne result: ", result);
        res.send(result);
    })
    
};

// PATCH /visitor/:id => 방명록 수정
exports.patchVisitor = (req, res) => {
    const data = {
        username: req.body.username,
        comment: req.body.comment,
    };
  // update visitor set username='??', comment='???' where id = ?;
    Visitor.update(data, {
        where: {
            id: req.body.id,
        },
    }).then((result) => {
        console.log("update result: ", result);
        res.send({result: true});
    })

  };
