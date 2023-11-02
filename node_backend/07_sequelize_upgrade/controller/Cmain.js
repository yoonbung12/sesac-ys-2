const {Customer, Orders, Sequelize} = require("../model")
const Op = Sequelize.Op;
// exports.main = async (req, res) => {
//     // 두개다 하나씩 확인해 보기위해 해봄
//     // customer의 주문 목록 "custname" 과 함께 
//     // const cust = await Customer.findAll();
//     const order = await Orders.findAll();
//     // res.send(cust);
//     res.send(order);
// }
exports.main = async (req, res) => {
    // customer의 주문 목록 "custname" 과 함께 
    const cust = await Customer.findAll({
        attributes: ["custid", "custname", "birth"],
        // where: { custname: '강해린'},
        where: { birth: {[Op.gte]: "2000-01-01"}}, // op 사용 하기
        include: [
            {
                model: Orders,
                attributes: {exclude: ["custid"]},   
                // where: {}
            }
        ],
        raw: true
    });
    // res.send(cust);
    res.send(cust);
}