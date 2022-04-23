{
  // 상속에 + 되는 개념인듯하다. (상속은 깊게는 절대 쓰지말자!) 깊은 수직관계만 피하면 된다.
  // 항상 상속이냐 컴포지션이냐에 어떤걸 쓸지 생각해보자
  // abstract 클래스에 대해서 공부했다,
  // 추상적인 클래스이다.
  // 공통적인 기능들이 있다면 그 구현들을 구현해야함
  // 장점은 조금 더 안전하게 내가 의도한대로 공통된 기능을 수행하고 달라져야 되는것만 상속하는 클래스에게 이거 꼭 구현해! 하고 강조할 수가 있다.

  // 달라져야하는 부분이 있다면 abstract로 정의해주고 자식클래스에서 작성해주면된다.
  // 내부에서만 필요한것은 private 으로 외부에서 호출할 수 있는건 public으로 만들어 줄수 있으며 protected는 abstract로 정의한것만.
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  // class 앞에 abstract -> 이건 추상적인 클래스다 라고 키워드를 붙이게 되면 이 커피머신은 이 자체로는 오브젝트를 만들수가 없다.
  // 부모 클래스로서 필요한것들의 정의 해놓는다.
  // 자식 클래스마다 달라질 수 있는 행동이 있다면 그 행동앞에 abstaact을 붙일수가 있다.
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
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
    // 자식 클래스마다 접근해야하기 때문에 protected를 써줘야한다.
    // 또 너무너무 추상적인거라서 구현은 작성하면 안된다.
    // 그래서 따로 구현해줘야하는것
    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming some milk... 🥛");
    }
    // 여기서 이제 구현해주면 된다는것.
    // 부모 클래스에서 작성하지않았던것을!
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
    new CaffeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach((machine) => {
    console.log("-------------------------");
    machine.makeCoffee(1);
  });
}
