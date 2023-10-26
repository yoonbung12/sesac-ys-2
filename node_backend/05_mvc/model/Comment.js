exports.commentInfos = () =>{
   //mySql 연결
   // select * from comment;
   
    return[
        {id: 1,
            userid: "bonggu", 
            date: "2023-10-26", 
            comment: "hello"},
        {id: 2, 
            userid: "bonggu3", 
            date: "2023-10-26" , 
            comment: "hello world"},
    ];
};