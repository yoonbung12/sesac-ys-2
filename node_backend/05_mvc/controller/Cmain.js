const {commentInfos} = require("../model/Comment");

exports.main = (req,res) => {
    res.render("index");
};

exports.comments = (req, res) =>{
    const commentData = commentInfos();
    // commentData = [{id: 1,
    //     userId: "bonggu", 
    //     date: "2023-10-26", 
    //     comment: "hello"},
    // {id: 2, 
    //     userId: "bonggu3", 
    //     date: "2023-10-26" , 
    //     comment: "hello world"},]

    res.render("comments", {commentInfos: commentData});
}

