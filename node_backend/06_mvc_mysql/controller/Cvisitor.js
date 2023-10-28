// 모델을 가져오는 부분
const visitor = require("../model/visitor");

exports.home = (req, res) => {
    res.render("index");
}
exports.visitor = (req, res) => {
    const data = visitor.getVisitor();
    res.render("visitor", {data: data});
}