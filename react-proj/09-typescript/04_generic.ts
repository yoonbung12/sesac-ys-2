// Generic
// 기본적으로 선언할 때 type을 지정을 해주는데ㅡ,
// 사용하다 보면, 다양한 타입에 대해서 처리를 해줘야 할 수 있음.
// 호출하거나 사용할 때 타입을 넘겨서 해당 타입으로 지정할 수 있는 방법
function printXY(x: number, y:number) : void;
function printXY(x: string, y:string) : void;


function printXY(x: number | string, y: number | string) {
    console.log(x, y);

}
printXY(1, 2);
printXY("a", "b");

function printXYByGeneric<T>(x: T, y: T) {
    console.log(x, y);
}
printXYByGeneric<string>("a", "b")
printXYByGeneric<number>(1, 2);

// function numArrLength(arr: number[]): number {
//     return arr.length
// }
const numArrLength = (arr: number[]):number => arr.length;


function StrArrLength(arr: string[]): number {
    return arr.length
}
// 만약? 객체 배열, 이 외 다른 타입의 배열도 length를 구하는 함수를 만들고 싶다면 ?

function arrLength<T>(arr: T[]): number {
    return arr.length;

}
arrLength<string>(['a', 'b'])
// arrLength<string>([1, 2])

function exampleGeneric<T, U>(x: T, y: U) {
    console.log(x, y);
}
exampleGeneric<string, number>("a", 1);
// exampleGeneric<string, number>(1, 'a');
let a :string[]
let b :Array<string>

interface Phone<T> {
    company: string,
    model: string,
    option: T,
}

interface SamsungOption{
    a: string,
    b: number

}

const samsung23: Phone<SamsungOption> = {
    company: 'samsung',
    model: 's23',
    option: {
        a: 'aaaa',
        b: 123
    }
}

interface IphonOption{
    a: string,
    c: number

}

const iphone15: Phone<IphonOption> = {
    company: 'apple',
    model: 'i15',
    option: {
        a: 'aaa',
        c: 123
    }
}


// 아래에 있는거랑 비교
function srtPrintXY(x: string, y: string) {
    console.log(x, y);

}
srtPrintXY("a", "b");

// generic실습
// 1번 // 2번
// 함수 arrElement선언
// 배열과 인덱스 번호를 매개변수로 받기, Arr[index]에 대한 요소를 리턴하는 함수 만들기
// 함수의 리턴 타입 작성
function arrElement<Arr>(arr: Arr[], index: number) {
    if(arr.length < index) {
        return false;
    } 
    return arr[index];
}
console.log(arrElement<string>(["a","b"],4));


