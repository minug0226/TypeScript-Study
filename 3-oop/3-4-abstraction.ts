{
  // 커피를 만드는 과정은 상당히 많은 step이 필요했다.
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // interface는 나랑 행동하려면 나는 이런 규약을 가지고있다, 나는 이런 행동을 할 수 있어라고 명시해놓는 계약서같은 아이다.
  // interface를 만들때 네이밍할때 앞에 I를 꼭 붙이거나 끝에 Impl라고 붙여주곤 한다. 혹은 간단하게 알아보게 해도 좋다.
  // CoffeeMaker 라는 interface는 이런 규약이 있다.
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // 조금 더 다양한 api를 넣어서 다양하게 이용하게 해주는 인터페이스 구축
  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }
  // 이 class 는 이제 CoffeeMaker와 CommercialCoffeeMaker 규격을 따라가게된다. implements CoffeeMaker, CommercialCoffeeMaker
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
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
      console.log("cleaning the machine...🧼"); // 머신 청소중
    }

    // 내부에서 동작하는 것들은 다 private를 붙이자.
    // 얼마나 많은 콩을 갈지에 대한것.
    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`); // 갈고있어라는 메세지
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT; // 이미 있는 커피콩에서 제거.(갈아버리는 행위니까)
    }

    // 커피 따뜻하게 데워주는 함수!
    private preheat(): void {
      console.log("heating up... 🔥");
    }
    // 커피 추출하는 함수
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`); //  ${shots}만큼의 커피를 내리고 있어...
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

  // 추상화는 인터페이스를 간단하게 만듦으로서 사용하는 사람이 간편하게 많은생각없이 사용하도록 도와준다.

  // 인터페이스를 잘 이용하면 이런식으로 기능을 제한한 사용자를 만들어 낼수 있다.
  // api설정을 내 맘대로 가능! 의사소통이 좋다.
  // 아마추어는 간단한것 밖에 할 줄 모른다. CoffeeMaker를 받아오기
  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  // 얘는 이제 잘하니깐 CommercialCoffeeMaker를 받아오기
  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  // 아마추어 사용자를 만들어보기
  const amateur = new AmateurUser(maker); // maker 오브젝트 전달하기
  // pro 사용자를 만들어보기
  const pro = new ProBarista(maker); // maker 오브젝트 전달하기
  amateur.makeCoffee();
  pro.makeCoffee();
}
