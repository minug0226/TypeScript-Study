{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // 우선 class먼저 만들기
  // class를 만든다는것은 서로 관련이 있는 함수들을 서로 묶는 기능을 하고 청사진을 만드는 기능도 한다.
  class CoffeeMaker {
    // class 안에서는 멤버 변수를 작성할 때는 const,let을 작성하지않는다.
    // function이라는 키워드 역시 마찬가지이다!
    // 내 class안에 멤버 변수에 접근할때는 항상 this.을 붙여줘야한다.

    // static을 쓴 이유
    // BEANS_GRAMM_PER_SHOT의 경우 계속 호출이 되기에 메모리의 낭비가 이뤄질 수가 있다.
    // 이런 아이들은 static을 붙여주면 class level이 된다.

    // class level이란? -> class와 연결이 되어있기때문에 오브젝트마다 만들어지지 않는다.
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level
    // class에서 가장 중요한 constructor
    // 이 class를 가지고 인스턴스를 만들때 항상 호출되는것.
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans; // 할당된건 class의 coffeeBeans가 아닌 임의의 함수인자인 coffeeBeans를 의미
    }
    // 만약 나는 constructor를 호출하지않고 새로운 기계를 만들고싶다라고 한다면
    // 아래와 같이 작성해준다.
    // CoffeeMaker를 만들어서 리턴해주는 함수.
    // 이런 함수들은 class내부에 있는 어떤 값도 필요하지않기 때문에 static을 또 붙여주면 된다.
    // 52번째 줄로 이동해보기
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      // BEANS_GRAMM_PER_SHOT은 static level이기에 this.가 아닌 class 본인이 나와야함.
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

  const maker = new CoffeeMaker(32); // new라는것은 이 class에 인스턴스를 만든다는것이다.()안에는 생성자를 호출.
  console.log(maker);
  const maker2 = new CoffeeMaker(14);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(3); // new를 사용할 필요없다. CoffeeMaker라는 class 본연의 이름으로 호출.
}
