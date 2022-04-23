// 왼쪽아니면 오른쪽, 이거아니면 저거 라는 심심풀이 인터페이스로 예시를 만들었다.
// 어떤 타입이든 유연하게 받으려면 generic을 활용해보자!
// 활용성이 높은 클래스를 만드는 방법이다 제네릭 좋다..
// either: a or b
interface Either<L, R> {
  left: () => L; // 호출하면 L을 호출
  right: () => R; // 호출하면 R을 호출
}

// <>을 사용해서 generic을 만들자.(길게 안쓰고 대문자 하나로만 쓴다고한다.)
class SimpleEither<L, R> implements Either<L, R> {
  // 내부적으로만 쓰기때문에 private
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}
// 사용하는방법
const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); // 4
either.right(); //5
// 숫자도 넣을 수 있고 문자도 넣을 수 있고 이건 다 generic 덕분이지!
const best = new SimpleEither({ name: "Wook" }, "hello");
