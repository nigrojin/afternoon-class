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


/*
	연산자

	1 수리연산자
	2 대입연산자
	3 비교연산자
	4 논리연산자
	5 타입연산자
*/


/*
	수리연산자

	1 4칙 연산자
	2 증가 연산자
	3 감소 연산자
	4 지수 연산자
	5 계수 연산자
*/


// 4칙 연산자 - +, -, *, /

// var add = 1 + 1; // 더하기
// var subtract = 2 - 1; // 빼기
// var multiply = 2 * 2; // 곱하기
// var divide = 1 / 2; // 나누기


// console.log("1 + 1 =", add); // 2
// console.log("2 - 1 =", subtract); // 1
// console.log("2 * 2 =", multiply) // 4
// console.log("1 / 2 =", divide); // 0.5


/*
	증가연산자
	변수 값을 1 증가시킨다

	사용방법
	변수++
*/

// var n = 1;

// n++;

// console.log(n);
// 2


/*
	감소연산자
	변수의 값을 1 감소시킨다

	사용방법
	변수--
*/


// var n = 1;

// n--; // -.-;;

// console.log(n);
// // 0


/*
	지수연산자

	기수 ** 지수
*/

// var exp = 2 ** 7; // 2의 7승

// console.log(exp);
// // 128


/*
	계수 연산자
	나눗셈의 나머지를 구한다

	나누어지는 수 % 나누는 수
*/


// var mod = 5 % 2;

// console.log(mod);
// // 1


/*
	대입 연산자

	1 변수 대입 연산자
	2 덧셈 대입 연산자
	3 빼기 대입 연산자
	4 곱하기 대입 연산자
	5 나누기 대입 연산자
	6 지수 대입 연산자
	7 계수 대입 연산자
*/


/*
	변수 대입 연산자
	변수에 값을 대입한다

	변수 = 값
*/

// var foo = "bar"; // =


/*
	더하기 대입 연산자

	두개의 피연산자를 더한 다음
	왼쪽 피연산자에 결과를 대입한다

	피연산자1 += 피연산자2
*/


// var n = 1;

// n += 1; // n = n + 1 와 같다

// console.log(n);
// // 2


/*
	비교연산자

	1 동등 연산자
	2 엄격 동등 연산자
	3 비동등 연산자
	4 엄격 비동등 연산자
	5 gt 연산자
	6 gte 연산자
	7 lt 연산자
	8 lte 연산자
*/


/*
	동등 연산자

	표현식1 == 표현식2

	두개의 표현식이 동등하면 참,
	그렇지 않으면 거짓을 리턴한다

	* 표현식 - 연산에서 사용되는 코드
*/


// console.log(1 == 2);
// // false
// console.log("foo" == "bar");
// // false
// console.log(0 == false);
// // true
// console.log(2023 == "2023"); 
// // true


/*
	엄격 동등 연산자

	표현식1 === 표현식2

	두 표현식이 엄격하게 동등하면 참,
	그렇지 않으면 거짓을 리턴한다
*/


// console.log(1 === 2); 
// // false
// console.log("foo" === "bar");
// // false
// console.log(0 === false); 
// // false
// console.log(2023 === "2023"); 
// // false


/*
	비동등 연산자

	표현식1 != 표현식2

	두 표현식이 비동등하면 참,
	그렇지 않으면 거짓을 리턴한다
*/


// console.log(1 != 2) 
// // true
// console.log("foo" != "bar");
// // true
// console.log(0 != false);
// // false
// console.log(2023 != "2023");
// // false


/*
	엄격 비동등 연산자

	표현식1 !== 표현식2

	두 표현식이 엄격하게 비동등하면 참,
	그렇지 않으면 거짓을 리턴한다
*/


// console.log(1 !== 2) 
// // true
// console.log("foo" !== "bar");
// // true
// console.log(0 !== false); 
// // true
// console.log(2023 !== "2023") 
// // true


/*
	gt (greater than) 연산자
	>

	gte (greater than or equal) 연산자
	>=

	lt (less than) 연산자
	<

	lte (less than or equal) 연산자
	<=
*/


// console.log(1 > 0);
// // true
// console.log(1 >= 0);
// // true
// console.log(1 < 0);
// // false
// console.log(1 <= 0);
// // false


/*
	논리 연산자

	1 && (AND)
	2 || (OR)    -> 엔터키 바로 위 (vertical bar)  (+ Shift 키)
	3 ! (NOT)
*/


/*
	1 && (AND)

	표현식1 && 표현식2

	두 표현식이 모두 참일 경우 참을 리턴한다
	그렇지 않으면 거짓을 리턴한다
*/


// console.log(1 > 0 && 1 < 2);
// true


/*
	2 || (OR)

	두 표현식 중 하나 또는 둘다 참인 경우 참을 리턴한다
	그렇지 않은 경우 거짓을 리턴한다
*/


// console.log(1 > 0 || 1 > 2);
// true


/*
	3 ! (NOT)

	!표현식

	표현식을 뒤집는다
*/


// console.log(!true);
// false


// Boolean 타입이 아닌 데이터 타입을 부정하는 경우 - 규칙, 약속
// console.log("숫자 부정:", !2023);
// console.log("0 부정:", !0);
// console.log("문자열 부정:", !"foo");
// console.log("빈문자열 부정:", !"");
// console.log("null 부정:", !null);


/*
	타입 연산자

	변수의 타입을 리턴한다

	typeof + 변수
*/


// var foo = "bar";

// console.log(typeof foo);
// // string



/*
	Q. 연산자

	아래의 문장을 코드로 작성해보고 결과를 출력해보세요

	1 빈문자열과 false는 동등하다
	2 null과 false는 비동등하다
	3 1은 true와 동등하고, 0은 false와 동등하다
*/


// console.log("" == false);
// // true
// console.log(null != false);
// // true
// console.log(1 == true && 0 == false);
// // true



/*
	조건문

	1 if 조건문
	2 삼항연산자 조건문
	3 switch 조건문
*/


/*
	if 조건문

	1 if 문
	2 if / else 문
	3 if / else if 문
*/


/*
	if 문

	if (조건) {
		조건이 참인 경우 실행되는 코드
	}
*/


// var year = 2024

// if (year == 2024) {
//   console.log("올해")
// }
// // 올해


/*
	if / else 문

	if (조건) {
		조건이 참인 경우 실행되는 코드
	} else {
		조건이 거짓인 경우 실행되는 코드
	}
*/


// var year = 2024;

// if (year == 2024) {
//   console.log("올해")
// } else {
//   console.log("올해가 아닙니다")
// }


/*
	if / else if 문

	if (조건1) {
		조건1이 참인 경우 실행되는 코드
	} else if (조건 2) {
		조건 2가 참인 경우 실행되는 코드
	} else { // 옵션
		모든 조건이 거짓인 경우 실행되는 코드
	}
*/


// var year = 2024;

// if (year == 2023) {
//   console.log("작년")
// } else if (year == 2024) {
//   console.log("올해")
// } else if (year == 2025)  {
//   console.log("내년")
// } else { 
//   console.log("가까운 해가 아닙니다");
// }


/*
	? (삼항연산자) 조건문

	조건 ? 값1 : 값2

	조건이 참인 경우 값1, 조건이 거짓인 경우 값2를 리턴한다
*/


// var year = 2024;
// var r = year == 2024 ? "올해" : "올해가 아닙니다";

// console.log(r);
// 올해


/*
	Q. if 조건문, 삼항연산자 조건문
	나이 변수에 따라서 사람이 성인인지 아닌지를 출력하는 조건문을
	만들어 보세요

	1 if / else 문
	2 삼항연산자 조건문
*/



// 1 if / else

// var age = 20;

// if (age >= 18) {
//   console.log("성인입니다")
// } else {
//   console.log("성인이 아닙니다")
// }

// // 삼항연산자 조건문

// var r = age >= 18 ? "성인입니다" : "성인이 아닙니다";

// console.log(r);


/*
	switch 조건문

	인자와 케이스 사이에서 엄격 동등연산을 수행한다

	1 기본 사용법
	2 default 
*/


// 기본 사용방법
// var year = 2024;

// switch (year) {
//   case 2023:
//     console.log("작년");
//     break;

//   case 2024:
//     console.log("올해");
//     break;

//   case 2025:
//     console.log("내년");
//     break;
// }


/*
	default 

	모든 케이스가 일치하지 않을 때
	default 코드가 실행된다
*/

// var year = 2020;

// switch(year) {
//   case 2023:
//     console.log("작년");
//     break;

//   case 2024:
//     console.log("올해");
//     break;

//   case 2025:
//     console.log("내년");
//     break;
  
//   default:
//     console.log("가까운 년도가 아닙니다");
// }


/*
	Q. switch 조건문

	아래 표를 활용하여 자동차의 이름을 입력하면
	가격을 출력하는 switch 문을 만들어 보세요

	자동차 표

	1 아반떼 하이브리드, 2500
	2 XM3 하이브리드, 3000
	3 KONA, 4500
	4 아이오닉6, 5000

	* 판매중인 자동차가 아닌 경우 적당한 메시지를 출력해보세요
*/


// var car = "XM3 Hybrid";

// switch (car) {
//   case "Avante Hybrid":
//     console.log(2500);
//     break;

//   case "XM3 Hybrid":
//     console.log(3000);
//     break;

//   case "KONA":
//     console.log(4500);
//     break;

//   case "IONIQ 6":
//     console.log(5000);
//     break;

//   default:
//     console.log("판매중인 차가 아닙니다");
// }


/*
	반복문
	블록의 코드를 여러번 실행한다

	1 for 문
	2 while 문
*/


/*
	for 문

	1 사용방법
	2 실제 사용 예시
	3 break
	4 continue
*/


/*
	1 사용방법

	for (표현식1; 표현식2; 표현식3) {
		반복 실행할 코드
	}

	표현식1 - 변수 초기화
	표현식2 - 반복 조건
	표현식3 - 변수 업데이트 연산
*/


// for (var n = 1; n <= 10; n++) { // 블록 (block)

// 	// 반복 변수 (n) 에 접근 가능
// 	console.log(n + "번 실행되었습니다.");
// }


// 사용 사례 - 1 부터 10까지의 합을 구하는 경우


// var sum = 0;

// for (var n = 1; n <= 10; n++) {
// 	// sum 변수에 n값을 누적시킨다

// 	sum += n; // sum = sum + n
// }

// console.log(sum);
// 55


// break - 반복문에서 빠져나온다

// for (var n = 1; n <= 10; n++)  {
// 	if (n == 5) {
// 		break;
// 	}

// 	console.log(n);
// }


// continue - 현재 블록을 건너뛴다

// for (var n = 1; n <= 10; n++) {
// 	if (n == 5) {
// 		continue;
// 	}

// 	console.log(n);
// }


/*
	Q. for 문

	1부터 10까지의 숫자중 짝수만 출력하는 for문을 작성해보세요

	3가지 방법..
*/


// for (var n = 1; n <= 10; n++) {
// 	if (n % 2 == 0) { // 짝수인지 확인
// 		console.log(n);
// 	}
// }


// for (var n = 1; n <= 10; n++) {
//   if (n % 2 == 1) { // 홀수일때 스킵
//     continue;
//   }

//   console.log(n);
// }


// for (var n = 2; n <= 10; n += 2) {
//   console.log(n);
// }


/*
	while 문

	while (반복 조건) {
		반복 실행할 코드
	}
*/


// 변수 초기화
// var n = 1;

// while (n <= 10) {
// 	console.log(n + "번 실행되었습니다.");

// 	// 변수 업데이트 연산
// 	n++;
// }


// break, continue 사용 가능
// var n = 1;

// while (true) {
//   if (n == 5) {
//     break;
//   }
  
//   console.log(n);

//   n++;
// }


/*
	Q. while 문

	1부터 10까지의 합을 구하는 while문을 작성해보세요
*/


// var n = 1;
// var sum = 0;

// while (n <= 10) {
// 	sum += n;

// 	// 순서 중요
//   n++;
// }

// console.log(sum);


/*
	함수
	호출할 때에만 실행되는 코드
	프로그래밍에서 기능의 단위로 사용된다

	1 함수 선언, 호출
	2 Hoisting
	3 매개변수와 인자
	4 return
	5 콜백
*/


// 함수의 선언과 호출


// 선언
// function f() { // 함수 정의
// 	console.log("호출되었습니다");
// }

// // 호출
// f();
// f();


// 함수표현식
// var f = function () { // 익명함수
// 	console.log("호출되었습니다");
// }

// // 호출
// f();


/*
	Hoisting (게양)

	함수의 호출 아래에 함수 선언을 작성할 수 있다
	일종의 가독성 옵션
	함수표현식에서는 사용할 수 없다
*/


// f(); // 호출 시점을 기준으로 함수가 선언된 적이 없다

// // 함수의 선언은 게양된다(올라간다)
// function f() {
// 	console.log("호출되었습니다")
// }


/*
	매개변수와 인자

	1 매개변수 (parameter)
	인자를 치환한 변수

	2 인자 (argument)
	함수에 입력되는 값
*/


// 두 개의 인자를 더한 후 값을 출력하는 함수
// function add(x, y) { // x, y - 매개변수
// 	console.log("결과:", x + y);
// }


// add(1, 2); // 1, 2 - 인자


/*
	return

	함수는 작업의 결과를 반환(return)할 수 있다
*/


// function add(x, y) {
//   return x + y;
// }


// // 함수의 반환값을 변수r에 저장한다
// var r = add(1, 2);

// console.log("결과:", r);


// return은 작업을 중단시키기 위해 사용될수 있다


// 인자의 제곱(square)을 구하는 함수
// function getSquare(n) {
//   if (typeof n != "number") { // number타입인지 검사
//     console.log("err: 잘못된 타입");
//     return;
//   }

//   console.log(n ** 2);
// }


// getSquare(5);


/*
	콜백 (callback)

	함수 인자

	1 사용방법
	2 사용 사례
*/


// 사용  방법
// function f(callback) {
//   var foo = "bar";

//   callback(foo);
// }

// function cb(data) { // 콜백
//   console.log(data);
// } 

// f(cb);


// 사용 사례 - 시계


// 콜백
// function getTime() {
// 	// 현재 시간
//   var time = new Date().toLocaleTimeString();
  
//   console.log(time);
// }

// // setInterval(콜백, ms): ms 마다 콜백을 실행한다 (1000ms = 1s)
// setInterval(getTime, 1000);



/*
	Q. 함수
	나이 입력값에 따라서 사람이 성인인지 아닌지를 출력하는
	함수를 선언해보세요.
	입력값에 문제가 있으면 적절한 메시지를 출력해보세요
*/
