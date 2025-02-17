// // 함수 선언하기
// function 함수이름(매개변수1, 매개변수2) {
//     // 코드작성
//     return 결과값;
// }
// 함수이름(인자1,인자2);

function hello1() {
    console.log('hello, '+name+'!');
}

hello1('김가을'); // hello,김가을!


// 함수 표현식
const hello2 = function() {
    console.log('아 내일 쉰다');
};

hello2(); // 아 내일 쉰다

// 매개변수 패턴
function sum(x,y=0) {
    return x+y;
}

console.log(sum(10, 20)); // 30
console.log(sum(3));  // 3
