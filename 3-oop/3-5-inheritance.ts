{
  // 상속에 대해서 구현해보았다.
  // 우유를 스팀할 수 있는 카페라떼 머신도 만들어보자!

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...🧼");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up... 🔥");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }
  // 상속을 잘 이용한 예시 (우유를 스팀해서 카페라떼 만드는 머신)
  // extends 라는 키워드를 사용해서 상속을 해야함.
  // 상속할 때는 상속하려는 class의 constructor가 public이거나 protect이어야만 한다.
  // 자식 class은 상속한 class에서 다른 동작을 하게 할 수 있다 덮어씌우기가 가능하다는 뜻 (over Write)
  // 상속을 잘 이용하면 공통적인 기능은 그대로 재사용하면서 자식클래스에서만 특화된것을 시킬 수있다. (super를 잘 이용하면 될듯)
  class CaffeLatteMachine extends CoffeeMachine {
    // 자식에서 constructor를 따로 구현하는 이런 경우는 꼭 super를 호출해야한다.
    // 한번 설정되서 안바뀐다면 readonly를 붙여줄 수 있기에 serialNumber에 붙여준다.
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans); // 생성자는 따로 함수가 아니기때문에 편하게 써도 된다. 추가적으로 어떤 데이터를 받아올때는 공통적으로 부모클래스에서 필요한 데이터를 받아와야한다.
    }
    // 자식 클래스에만 있는 함수를 만들거고 내부적에서 쓰일거기때문에 private를 써준다.
    // 밀크 스팀중이다.
    private steamMilk(): void {
      console.log("Steaming some milk... 🥛");
    }
    // 부모에서 했던 커피를 만든 그런 절차들을 다 이용하고 싶다면 super라는 키워드를 이용하자.
    // 이러면 상속한 부모에 있는 makeCoffee함수를 호출해서 기본적인 가열하고 그라인딩하는 그런것들을 한다음에
    // 우유만 붓게 해줬다
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        // 부모에서 만든 커피를 가져온것
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, "SSSS"); // 커피콩, 시리얼넘버
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber); // 라떼머신에서만 가능한 시리얼넘버~
}
