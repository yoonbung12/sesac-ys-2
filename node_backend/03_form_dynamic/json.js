const data = {name: "bonggu", gender: "male"};

const jsonData = JSON.stringify(data);
console.log("json:", jsonData);
// json역질렬화
console.log("js object: ", JSON.parse(jsonData));