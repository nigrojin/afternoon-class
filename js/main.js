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

// 선언
// function isAdult(age) {
// 	if (typeof age !== "number") { // 타입 검사
// 	  console.log("err: 잘못된 입력값");
// 	  return; 
// 	}
  
// 	if (age >= 18) {
// 	  console.log("성인입니다");
// 	} else {
// 	  console.log("성인이 아닙니다");
// 	}
// }
  
// // 호출
// isAdult(20);


/*
	Q. 함수
	1부터 입력값까지의 합을 반환하는 함수를 선언해보세요

	예) 10을 입력하면 55를 반환한다 (1 + 2 + ... + 10)
*/

// 함수 선언
// function f(m) {
//   var sum = 0;

//   for (var n = 1; n <= m; n++) {
//     sum += n;  
//   }

//   return sum;
// }

// // 반환값을 변수 r에 저장
// var r = f(10);

// console.log(r);


/*
	변수의 범위

	1 전역 변수
	2 지역 변수
*/


/*
	1 전역 변수 (global variables)

	함수 밖에서 선언된 변수
	소스코드 어디에서든지 접근 가능하다
*/


// 전역변수
// var varInGlobal = true;

// // 접근 성공
// console.log(varInGlobal);


/*
	2 지역 변수 (local variables)

	함수 안에서 선언된 변수
	선언된 함수 내에서만 접근 가능하다
*/


// function f() {
// 	// 지역 변수
// 	var varInFunction = true;
// }

// // 함수밖에서 접근 시도 - 실패
// console.log(varInFunction);


// // 호출
// f();


/*
	배열 (Array)
	한개 이상의 값을 가질 수 있는 데이터 타입

	1 구조
	2 기본 사용방법
	3 배열 메서드
	4 배열 순회
*/


// 구조

// 각각의 값 - 배열의 아이템
// var arr = [10, 20, 30];


/*
	기본 사용 방법

	1 아이템에 접근하기
	2 아이템 바꾸기
	3 아이템의 갯수 구하기
*/


// 아이템에 접근하기

// var arr = [10, 20, 30];

// // 인덱스로 접근
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);


// 아이템 업데이트

// var arr = [10, 20, 30];

// // 새로운 값을 대입한다
// arr[2] = 99;

// console.log(arr);
// // 10, 20, 99


// 아이템의 갯수 구하기

// var arr = [10, 20, 30];

// console.log(arr.length);
// // 3


/*
	Q. 기본 사용 방법

	1 탑5 자동차 제조사 리스트를 만들어 보세요
	- 볼보, BMW, 현대, 토요타, 포드

	2 토요타가 최근 성능 조작사건 (실화 기반)으로 나락으로 가게생겼습니다.
	토요타를 기아로 바꾸어 보세요
*/


// var top5 = ["볼보", "BMW", "현대", "토요타", "포드"];

// top5[3] = "기아"

// console.log(top5)


/*
	배열 메서드
	배열에 특정한 작업을 수행한다

	1 push
	2 pop
	3 concat
	4 splice
	5 sort
*/


/*
	1 push
	배열의 마지막에 새 아이템을 추가한다

	push(새아이템1, 새아이템2, ..)
*/


// var arr = [10, 20];

// arr.push(30);


// console.log(arr);
// // 10, 20, 30


/*
	2 pop

	배열의 마지막 아이템을 제거한다
*/


// var arr = [10, 20, 30];

// arr.pop();

// console.log(arr);
// // 10, 20


/*
	concat

	기존의 배열에 새 배열들을 연결(concatenation)한다
	새 배열을 반환한다

	concat(새배열1, 새배열2, ..)
*/


// var arr = [10, 20];
// var arr1 = [30, 40];

// // 연결된 배열을 변수 r에 저장
// var r = arr.concat(arr1);

// console.log(r);
// // 10, 20, 30, 40


/*
	splice
	원하는 위치에 아이템을 추가하거나 제거할 수 있다

	splice(시작인덱스, 삭제갯수, 새아이템1, 새아이템2, ..)
	시작인덱스는 필수
*/


// var arr = [10, 20, 30, 40];

// arr.splice(2, 1); // 30 삭제

// console.log(arr);
// // 10, 20, 40


// var arr = [10, 20, 30, 40];

// arr.splice(2); // 시작인덱스부터 뒤에 아이템을 모두 삭제한다

// console.log(arr);
// // 10, 20


// var arr = [10, 20, 30, 40];

// arr.splice(2, 1, 99); // 30을 삭제하고 그 자리에 99 추가

// console.log(arr);


/*
	sort

	배열의 아이템을 정렬한다
	숫자의 경우 오름차순
	문자열의 경우 알파벳순
*/


// var arr = [10, 30, 20];

// arr.sort();

// console.log(arr);
// // 10, 20, 30


/*
	Q1. 배열 메서드

	자동차 리스트에 새 차를 추가해보세요
*/

// var cars = ["스타리아", "그랜저", "아반떼"];

// var newCar = "캐스퍼";

// cars.push(newCar);

// console.log(cars);

// // 스타리아, 그랜저, 아반떼, 캐스퍼


/*
	Q2. 배열 메서드

	아시아 자동차 리스트를 만들어보세요
*/


// var koreanCars = ["현대", "기아", "KG모빌리티"];
// var japaneseCars = ["렉서스", "닛산", "스즈키"];


// var asianCars = koreanCars.concat(japaneseCars);

// console.log(asianCars);


/*
	배열 순회
	배열에 특정한 작업을 수행한다

	1 예시
*/


// 성인만 출력해야 하는 경우 (필터링)
// var ages = [12, 19, 23, 30];


// for (var i = 0; i < ages.length; i++) {
// 	// 변수 i를 인덱스로 활용
// 	if (ages[i] >= 18) {
// 		console.log(ages[i]);
// 	}
// }
// // 19, 23, 30


/*
	Q. 배열 순회

	b로 시작하는 아이템만 출력해보세요
*/


// var arr = ["foo", "bar", "baz"];


// for (var i = 0; i < arr.length; i++) {
// 	// 첫번째 인덱스 - 아이템 접근용
// 	// 두번째 인덱스 - 문자 접근용
//   if (arr[i][0] == "b") {
//     console.log(arr[i]);
//   }
// }


/*
	객체 (Object)
	데이터와 함수의 집합
	데이터를 다룰 때 기본 단위로 사용된다

	1 구조
	2 기본 사용방법
*/


/*
	구조

	1 속성
	객체가 가진 데이터
	key와 value로 구성된다

	2 메서드
	속성들 중 값이 함수인 것을
	특별히 메서드라고 부른다
*/


// // 고양이 객체
// var cat = {
// 	// 속성 - key: value
// 	name: "치즈",
// 	home: null,
// 	// 메서드
// 	sound: function () {
// 		return "야옹";
// 	}
// }

// console.log(cat);


/*
	Q. 객체의 구조
	다음을 만족하는 'korea' 객체를 선언해보세요

	- 속성
	1 수도 (String)
	서울

	2 인구 (Number)
	50,000,000

	3 언어 (String)
	한국어

	4 G7 여부 (Boolean)
	아니오

	- 메서드
	1 K-POP 플레이어
	kpop 음악을 재생한다
*/


// var korea = {
// 	capitalCity: "서울",
// 	population: 50000000,
// 	language: "한국어",
// 	isG7: false,
// 	kpop: function () {
// 		return "내 지난 날들은 눈 뜨면 잊는 꿈~";
// 	}
// }

// console.log(korea);


/*
	기본 사용방법

	1 속성에 접근하기
	2 속성 추가
	3 속성 수정
	4 속성 삭제
*/


// 속성에 접근하기

// var cat = {
// 	name: "치즈",
// 	home: null,
// 	sound: function () {
// 		return "야옹";
// 	}
// }

// 키로 접근
// console.log("name:", cat.name);

// console.log("name:", cat["name"]);

// 메서드 호출
// console.log("sound:", cat.sound());

// 없는 속성에 접근 시도 - undefined
// console.log("age:", cat.age);


// 2 속성 추가
// var cat = {
// 	name: "치즈",
// 	home: null
// }

// cat.age = 2;

// console.log(cat);


// 3 속성 수정
// var cat = {
// 	name: "치즈",
// 	home: null // 길냥이
// }


// cat.home = "삼산동"; // 입양

// console.log(cat);


// 4 속성 삭제

// var cat = {
// 	name: "치즈",
// 	home: null
// }

// delete cat.home; // 민감정보


// console.log(cat);


/*
	Q. 기본 사용방법

	아래의 리스트를 참고하여 2개의 문제를 풀어보세요 (배열 순회)

	1 판매중인(available) 맥주의 이름만 출력해보세요

	결과:
	하이네켄
	버드와이저
	기린

	2 기네스가 재입고 되었습니다. 리스트를 업데이트해보세요
*/

// var beers = [
//   { name: "Guinness", available: false },
//   { name: "Heineken", available: true },
//   { name: "Budwiser", available: true },
//   { name: "Kirin", available: true },
// ]

// 1
// for (var i = 0; i < beers.length; i++) {
// 	if (beers[i].available) { // beers[i].available == true
// 		console.log(beers[i].name);
// 	}
// }


// 2
// for (var i = 0; i < beers.length; i++) {
// 	if (beers[i].name == "Guinness") {
// 		beers[i].available = true;
// 	}
// }

// console.log(beers);


/*
	클래스 (Class)
	객체 생성용 틀
	자바스크립트에서 효율적인 객체 관리를 위해 사용된다

	1 구조
	2 인스턴스
	3 생성자
	4 함수 멤버
	5 static 멤버
	6 자바스크립트에 내장된 클래스
	7 넓은 의미에서의 객체
*/


/*
	구조
*/


// 클래스의 이름은 대문자로 시작해야 한다
// class Beer {
// 	// 클래스에 속한 데이터 - 클래스 멤버
// 	name;
// 	origin;
// 	available;
// }


/*
	인스턴스 (instance)

	클래스가 생성한 객체

	1 인스턴스 생성 방법
	2 여러개의 인스턴스
*/


// 1 생성 방법
// class Beer {
// 	name;
// 	origin;
// 	available;
// }


// // 인스턴스 생성 - Beer 클래스의 인스턴스
// var irishBeer = new Beer();

// // 인스턴스의 속성값 대입
// irishBeer.name = "Guinness"
// irishBeer.origin = "Ireland"
// irishBeer.available = false;

// console.log(irishBeer);

// // 클래스의 인스턴스인지 확인한다
// console.log(irishBeer instanceof Beer);
// // true


// 2 여러개의 인스턴스 생성
// class Beer {
//   name;
//   origin;
//   available;
// }


// var irishBeer = new Beer();

// irishBeer.name = "Guinness"
// irishBeer.origin = "Ireland"
// irishBeer.available = false;

// console.log(irishBeer);
// console.log(irishBeer instanceof Beer);


// var dutchBeer = new Beer();

// dutchBeer.name = "Heineken"
// dutchBeer.origin = "Netherlands"
// dutchBeer.available = true;


// console.log(dutchBeer);
// console.log(dutchBeer instanceof Beer);


// var americanBeer = new Beer();

// americanBeer.name = "Budwiser"
// americanBeer.origin = "USA"
// americanBeer.available = true;

// console.log(americanBeer);
// console.log(americanBeer instanceof Beer);


/*
	생성자 (constructor)

	인스턴스의 속성 설정을 처리한다
*/

// class Beer {
//   name;
//   origin;
//   available;

// 	// 함수
//   constructor (name, origin, available) {
// 		// this - 인스턴스
//     this.name = name;
//     this.origin = origin;
//     this.available = available;
//   }
// }


// var irishBeer = new Beer("Guinness", "Ireland", false);
// var dutchBeer = new Beer("Heineken", "Netherlands", true);
// var americanBeer = new Beer("Budwiser", "USA", true);


/*
	함수 멤버

	인스턴스의 메서드가 된다
*/


// class Beer {
	
// 	// ...

// 	drink() {
// 		return "시원하다!";
// 	}
// }


// var beer = new Beer();

// console.log(beer.drink());


/*
	static 멤버

	클래스와 관련된 유용한 기능을 제공한다
	클래스 자체가 호출한다
*/


// class Beer {

// 	// ..

// 	// static 변수
// 	static history = "기원전 3000년 전";

// 	// static 함수
// 	static brewing() { // 제조법 (양조법)
// 		return "밀, 홉, 효모, 물 등";
// 	}
// }


// // 호출 - 클래스 자체가 호출한다
// console.log(Beer.history);
// console.log(Beer.brewing());


// 내장된 클래스의 static 속성
// console.log(Math.PI);


// 완성된 Beer 클래스

// class Beer {
//   name;
//   origin;
//   available;
  
//   constructor (name, origin, available) {
//     this.name = name;
//     this.origin = origin;
//     this.available = available;
//   }

//   drink() {
//     return "시원하다!";
//   }

//   static history = "기원전 3000년 전";

//   static brewing() {
//     return "밀, 홉, 효모, 물 등";
//   }
// }


/*
	Q. 클래스
	아래를 만족하는 <Car> 클래스를 정의해보세요

	- 변수 멤버
	name, brand, color

	- 생성자 있음

	- 함수 멤버
	자동차 소리를 낸다

	- static 함수
	구매 연도를 입력하면 차의 나이를 말해준다
*/


// class Car {
// 	name;
// 	brand;
// 	color;

// 	constructor (name, brand, color) {
// 		this.name = name;
// 		this.brand = brand;
// 		this.color = color;
// 	}

// 	sound() {
// 		return "부릉";
// 	}

// 	static getAge(purchasedAt) {
// 		return "자동차의 나이는 " + (2024 - purchasedAt) + "입니다";
// 	}
// }


// // 인스턴스 생성
// var car = new Car("GV80", "제네시스", "블랙");

// console.log(car);

// // 자동차의 나이 구하기
// console.log(Car.getAge(2020));


/*
	에러와 예외

	1 에러
	2 예외
*/


/*
	에러 (Error)

	코드상의 결함
	에러는 반드시 고쳐져야 한다
*/


// 선언된 적이 없는 변수에 접근 시도
// console.log(foo);
// name: ReferenceError
// message: foo is not defined
// stack: 기타


/*
	예외 (Exception)

	필요한 경우 의도적으로 발생시키는 에러
	예) 인증 처리
*/


// // 올바른 비밀번호
// var password = "123";
// // 로그인 시에 입력한 비밀번호
// var input = "12";


// try { // 코드 작성
// 	if (input != password) {
// 		// throw + 예외 - 예외를 던진다
// 		throw "비밀번호가 일치하지 않습니다";
// 	}

// 	// 실행되지 않는다
// 	console.log("로그인 성공");

// } catch (error) { // 에러 처리
// 	console.log("로그인 실패:", error);
// }


/*
	동기작업과 비동기 작업

	1 동기 작업
	2 비동기 작업
*/


/*
	동기 작업

	작업이 순서대로 실행된다
	대부분의 작업은 동기작업이다
*/


// function f() {
// 	console.log("작업 1");
// }


// f();
// console.log("작업 2");


/*
	비동기 작업

	프로그램에서 블로킹(blocking)을 방지하기 위해 사용된다
	예를 들어, 서버에서 데이터를 가져오는 행위 등
*/


// 서버에 데이터를 요청하는 함수
// function getData(callback) {
// 	// 서버가 응답하는데 1초가 걸린다고 가정
//   setTimeout(function () {
//     callback(null, "야옹");
//   }, 1000);
// }

// getData(function (err, data) {
//   if (err) {
//     return console.error(err);
//   }

//   console.log("서버에서 받은 데이터:", data);
// });


// // 빠른 작업부터 우선 실행된다
// console.log("다음 작업");


/*
	JSON

	1 JSON 개념
	2 JSON.stringify
	3 JSON.parse
*/


/*
	JSON 개념

	자바스크립트 객체 표기법(JavaScript Object Notation)
	객체를 전송하거나 저장하기 위한 텍스트 포멧
*/

// JSON 포멧
// var cat_json = '{ "name": "치즈"}';

// console.log(cat_json);
// console.log(typeof cat_json);
// // string


/*
	JSON.stringify()

	객체를 JSON으로 변환한다
*/


// 객체
// var cat = { name: "치즈" };
// // JSON
// var cat_json = JSON.stringify(cat);

// console.log(cat_json);
// console.log(typeof cat_json);


/*
	JSON.parse()

	JSON을 객체로 변환한다
*/


// var cat_json = '{ "name": "치즈" }';
// var cat = JSON.parse(cat_json);


// console.log(cat);
// console.log(typeof cat);
// // object