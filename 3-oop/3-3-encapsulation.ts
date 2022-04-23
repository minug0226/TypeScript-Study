{
  // 외부에서 보이면 안되는 것들을 설정해보자.(값을 이상하게 바꿀 수가 있기 때문)
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 정보를 은닉하는 방법!
  // 1. public (외부에서 설정값들 보이게 허가)
  // 2. private (외부에서 절대 볼 수 없고 절대 접근할 수 없게 만드는 것)
  // 3. protected (나중에 상속을 할때 외부에선 접속할 순 없지만 class를 호출한 자식 class에서만 접근이 가능하게 해주는것)
  // 따로 작성하지않으면 모든것은 public으로 되어있는것.
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    // constructor를 private하게 만들어서
    // 항상 static 메소드를 이용하게 하는것이 좋다.
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    // 이렇게 static을 붙여서 무언가 오브젝트를 만들 수 있는 이런 함수를 제공한다면 누군가가 이런 생성자로 생성하는것을 금지하기위해 쓴다.
    // 항상 static 메소드를 이용하게 하는것이 좋다.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    // 이제 외부에서 직접적으로 설정해서 하는것이 아닌 나의 함수를 통해서 채우기 때문에, 적당한지 아닌지 판별하기 위한 함수
    // 이는 안정성을 높여서 코딩하는 느낌이다.
    fillCoffeeBeans(beans: number) {
      // 0보다 작은 커피콩이 들어온다면..? -값으로 설정했을때
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0"); // 커피콩의 크기는 0보다 커야된다고 알려줌
      }
      this.coffeeBeans += beans; // 그래서 커피콩 추가해주기
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32); // 이렇게해야 커피콩을 추가할 수 있는것.

  class User {
    // get을 이용해서 fullName을 정의를 내릴 수 있다
    // 어떠한 계산을 해야할때 조금 더 유용하게 쓰는 방법이다.
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    // set을 이용해서 어떠한 숫자를 받아온다. 전달받은 숫자로 internalAge 값을 할당해주기
    // internalAge는 private이기에 접근할 수 없지만 age를 통해서 접근이 되게 된다.
    // 다시 할당하게 만들 수 있다.
    // 이렇게하면 유효성 검사도 할 수있다.
    set age(num: number) {
      if (num < 0) {
      }
      this.internalAge = num;
    }
    // 생성자에 접근제어자를 설정하면 아주아주 편하게 설정가능하다.
    constructor(private firstName: string, public lastName: string) {}
  }
  const user = new User("Steve", "Jobs");
  user.age = 6;
  console.log(user.fullName); // getter와 setter는 접근할 때는 함수가 아니라 멤버변수에 접근하는 것처럼 작성해야함
}
