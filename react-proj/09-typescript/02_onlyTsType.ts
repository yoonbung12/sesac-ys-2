// or
type gender = 'Men' | 'Women';
// const bonggu: gender = "abc" 
const bonggu: gender = "Men" 

// [상품명, 가격]
type productInfo = [string, number];
const cola: productInfo = ['cola', 2500];

// 객체에 대한 타입을 지정할 경우
interface ProductInfo2 {
    productName: string,
    price: number,

}
const cider: ProductInfo2 = {productName: "cider", price: 2500};
// const cider: ProductInfo2 = {productName: "cider", price: 2500 , sale: 10};

type ProductInfo3 = {
    productName:string;
    price: number;
    sale?: number; // ?는 있으면 number이고 없으면 undefined다.
}

const beer: ProductInfo3 = { productName: "beer", price: 2500};
console.log(beer.sale); // undefined

interface Seller {
    name: string
}

interface ProductInfo4  {
    productName:string;
    price: number;
    sale?: object;
    seller?: Seller;
}
const soju: ProductInfo4 ={
    productName: 'soju',
    price: 2000,
    seller: {name: "IU"},
}

// 옵셔널 체이닝
console.log(soju.seller?.name);
// soju.seller -> seller는 optional한 key -> undefined가 될 수 있다.
// undefined에는 aaa 함수 or 속성이 없습니다.

interface Person {
    name: string;
    age: number;
        
}

interface Student extends Person {
    studentID: string;
    eat: (aa: number) => void;
}

const person: Person ={name: 'bonggu', age: 18};
const student: Student ={name: 'bonggu', age: 18, studentID:"111-000-000", eat: () => console.log("밥을 먹는다 득근득근")};

console.log(student);


