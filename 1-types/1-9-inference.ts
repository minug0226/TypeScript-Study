/**
 * 타입 추론
 * Type Inference
 */
// 타입을 선언하진 않았지만 문자열을 선언했기때문에 알아서 타입을 추론하여 text는 string이구나를 판단한다.
// 따라서 문자열이 아닌 다른 타입을 값으로 넣어주면 에러가 나온다.
let text = "hello";
// 함수에서도 역시 쓸 수 있다. 에러는 뜨지 않지만 타입을 적었으면 좋겠다고 TypeScript에선 계속 권유해준다.
// 지정해주질 않으면 any 타입을 가지게 되는데 any는 좋지않은 타입이다.
// default parameter를 주면 또 알아서 추론한다.
function print(message = "hello") {
  console.log(message);
}
print("hello");

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);

// 꼬박꼬박 타입을 명시를 할 필요는 없다는 것이다.
// 하지만 절대절대 좋지 않은거라고 생각해야한다. 보통 프로젝트에서 간단하게 함수를 작성하는 일이 없기때문에 왠만하면 타입을 명시해주자 제발!!
