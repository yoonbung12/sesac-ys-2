const {User} = require("../model/index");

exports.index = (req, res) => {
    res.render("index");
};

// signup
// 회원가입 파트(2개 있다)
exports.signup =(req, res) => {
    res.render("signup");
};
exports.post_signup =  (req, res) => { // 내가 한거 쓸려면 async사용할것
    // 보내야할 데이터 (내가한 부분)
//     const data ={
//         userid: req.body.userid,
//         name: req.body.name,
//         pw: req.body.pw,
//     }

//     const createUser = await User.create(data);
//     console.log(createUser);
//     res.send(createUser);
// }
        // 리더님 해설
        User.create(req.body).then((result) => {
            console.log('User create:', result)
            res.send({ result: true })
        })
        .catch((err) => {
            console.log("User create: ", err);
            res.send({result: false});
        })
}

// 로그인 파트(로그인 페이지 + 데이터 넘기기)
exports.signin = (req, res) => {
    res.render("signin");
}
exports.post_signin = async (req, res) => {
    // 리더님 해설
    User.findOne({
                // 컬럼  : 사용자가 입력한값.
        where: { userid: req.body.userid, pw: req.body.pw },
      }).then((result) => {
        console.log('User findOne:', result)
        if (result) res.send({ result: true, id: result.id })
        else res.send({ result: false })
      })

    // 1)찾아야 할값들 (내가 풀이한것)
    // User.findOne({
    //     where: {
    //         userid: req.body.userid,
    //         pw: req.body.pw
    //     },
    // }).then((result) => { 이 부분 에서 막혔었네..
    //     if(result  === req.body.userid && result )
    // })
}

// profileEdit 부분
exports.profile = ( req, res) => {
    User.findOne({
        where: {id: req.body.id},
    }).then((result) => {
        console.log("User findOne:" , result);

        // 만약 조회되지 않는다면 result에 null이 담김.
        // 따라서 if문으로 result에 값이 있을 경우에 profile을 렌더하도록 함.
        // if (result) res.render('profile', { data: result })
        // else res.redirect('/user/signin')
        
        if(result) {
            res.render("profile", {data: result});
        } else {
            res.redirect("signin");
        }
    })
}  

exports.profile_edit = (req, res) => {
                // 프론트 의 값 이랑 같게 할려고 req.body 넣음.
    User.update(req.body,{
        where: {id: req.params.id},
    }).then((result) => {
        console.log("update Porfile: ", result);
        // res.send({ result: true});
        // 만약 수정시 바뀐 데이터 가 없으면 실패로 하고 성공하면 성공 한것으로 바꿀것
        if(result[0] == 0){
            res.send({ result: false}); 
        } else {
            res.send({ result: true});
        }
    })
}

exports.profile_delete =(req, res) => {
    User.destroy({
        where: { id: req.params.id},
    }).then((result) => {
        console.log("destroy user: ", result);
        // 삭제 여부에 따라 result에 1 또는 0이 담긴다.
        if(result) {
            res.send({ result: true});
        } else {
            res.send({ result: false});
        }
    })
}
