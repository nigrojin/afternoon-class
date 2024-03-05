// 한 줄의 주석

/* 
여러 줄의
주석
*/


/*
	기본 사용 방법

	1 콘솔에 데이터 출력하기
	2 변수 사용 방법
*/


// 데이터 출력 방법

// console.log("foo");
// foo, bar, baz



// 변수 사용 방법

// var: 변수 선언 예약어
// var foo = "bar";

// console.log(foo);


// var foo; // 변수 선언

// foo = "baz" // 나중에 정의 가능

// console.log(foo);
// // baz


// var foo = "bar";

// foo = "baz" // 재정의 가능

// console.log(foo); 
// baz



/*
	데이터 타입

	1 문자열 (String)
	2 Number
	3 Boolean
	4 undefined
	5 null
*/


/*
	문자열 (String)
	연속된 문자. 따옴표 안에 값을 작성한다
*/


// var foo = "bar"; // 쌍따옴표, 홑따옴표 둘다 가능

// console.log(foo)
// bar


// 문자열 안에서 홑따옴표를 쓰고싶다

// console.log("I'm not a gay"); 
// console.log('I\'m not a gay');



/*
	Number

	값의 종류

	1 정수
	2 분수
	3 NaN
	4 양의 무한대
	5 음의 무한대
*/


// 정수
// var year = 2024;

// console.log(year);
// // 2024


//  분수
// var pi = 3.14

// console.log(pi);
// // 3.14


// NaN (Not a Number)

// var nan = 2 - "foo";

// console.log(nan);
// // NaN


// 양의 무한대

// Number 타입이 저장할 수 있는 가장 큰수
// console.log(Number.MAX_VALUE); // 내장된 변수
// 1.7e+308


// var inifity = Number.MAX_VALUE * 1.1;

// console.log(inifity);
// Infinity


// 음의 무한대

// Number타입이 저장할 수 있는 가장 작은수
// console.log(-Number.MAX_VALUE);
// -1.7e308


// var negative_infinity = -Number.MAX_VALUE * 1.1;

// console.log(negative_infinity);
// -Infinity


/*
	Boolean
	참 또는 거짓(true or false)값을 갖는 데이터 타입
*/


// var bool = true;

// console.log(bool);
// true


// 예
// console.log(1 > 0);
// // true



/*
	undefined

	정의되지 않은 변수가 가지는 데이터 타입
	값 또한 undefined이다
*/

// var foo;

// console.log(foo);
// undefined


/*
	null

	데이터 타입은 아니다. "없음"을 나타내는 값
*/

// var foo = null;

// console.log(foo);
// null


/*
	Q. 데이터 타입

	아래 고양이에 대한 정보를 변수로 바꾸어 보세요
	(괄호 안은 데이터 타입)

	1 이름: 치즈 (문자열)
	2 나이: 2살 (Number)
	3 귀여움 여부: 귀여움 (Boolean)
	4 집: 길고양이라서 집이 없음 (null)
*/


// var name = "치즈";
// var age = 2;
// var isCute = true;
// var home = null;


/*
	문자열 (String)

	1 각 문자에 접근하는 방법
	2 문자의 갯수 구하기
	3 문자열 연결
	4 문자열과 백틱
	5 문자열 메서드
*/


// 각 문자에 접근하는 방법

// var foo = "bar";

// // 대괄호 안의 숫자 - 인덱스(Index, 색인) 
// console.log(foo[0]) // 0부터 시작
// // b
// console.log(foo[1])
// // a
// console.log(foo[2])
// // r


// 문자의 갯수 구하기

// var foo = "bar";

// console.log(foo.length);
// // 3


// 문자열 연결하기

// var s = "hello" + " world";

// console.log(s);
// hello world


// 문자열과 숫자를 더하면?
// var s = "hello " + 2024;

// console.log(s);
// 문자열 "hello 2024"


/*
	문자열과 백틱(backtik)

	1 여러줄의 텍스트 입력하기
	2 문자열 안에서 변수 사용하기
*/


// 여러줄의 텍스트 입력 

// 백틱(`) - 숫자 1 바로 왼쪽
// var s = `I'm not a gay,
// you are gay`;

// console.log(s);
// I'm not a gay,
// you are gay


// 문자열 안에서 변수 사용하기

// var name = "치즈";

// console.log(`고양이의 이름은 ${name}입니다.`);


/*
	문자열 메서드
	문자열에 특정한 작업을 수행한다

	1 toUpperCase
	2 indexOf
	3 substring
	4 trim
*/


// toUpperCase()

// var foo = "bar";

// console.log(foo.toUpperCase());
// // BAR

// var foo = "BAR";

// console.log(foo.toLowerCase());
// bar


/*
	indexOf(검색문자, 포지션)

	문자열 인자의 인덱스를 리턴한다
	포지션은 옵션. 포지션의 기본값은 0이다
*/

// var s = "hello world";

// console.log(s.indexOf("e"));
// 1
// console.log(s.indexOf("l"));
// 2 (가장 처음에 있는 l의 인덱스)

// world의 l의 인덱스를 알고싶다
// console.log(s.indexOf("l", 5));
// 9 - 포지션 뒤에서 검색한다

// console.log(s.indexOf("world"));
// 6 - 첫번째 문자의 인덱스를 리턴한다

// console.log(s.indexOf("k"));
// -1 - 존재하지 않는 문자인 경우


/*
	substring(시작 인덱스, 끝 인덱스)

	문자열에서 특정 부분을 추출한다
	끝 인덱스는 옵션
*/


// var s = "hello world";

// console.log(s.substring(0, 4));
// hell

// console.log(s.substring(0));
// hello world


/*
	trim()

	문자열의 앞과 뒤의 공백을 제거한다
	데이터 정제 작업등에서 사용된다
*/


// var foo = "  bar  ";

// console.log(foo);
// //  bar  
// console.log(foo.trim());
// // bar


/*
	Q. 문자열 메서드

	변수에서 Q부터 끝까지 추출해보세요
*/

// var alphabet =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// var startIndex = alphabet.indexOf("Q");

// console.log(alphabet.substring(startIndex));
// Q...Z