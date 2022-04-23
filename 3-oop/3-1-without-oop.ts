{
  // 커피컵을 타입을 명시해줬다.
  type CoffeeCup = {
    shots: number; // 얼마만큼의 샷인지
    hasMilk: boolean; // 얼마만큼의 우유가 들어간지.
  };
  // 필요한 커피콩의 그람 펄 샷 (한 샷당 얼마나 많은 커피콩이 필요한지 중량을 기준잡아주기) g으로 했다고 생각
  // 타입추론을 이용하면 number라고 안적어도 되지만 적는게 더 정확하고 좋다.
  const BEANS_GRAMM_PER_SHOT: number = 7;

  // 얼마나 많은 커피콩이 있는지 정의
  let coffeeBeans: number = 0;
  // 얼마나 많은 샷을 만들건지 -> shots
  // CoffeeCup이란것을 리턴해준다는것을 명시
  function makeCoffee(shots: number): CoffeeCup {
    // 커피콩의 양이 우리가 필요한 커피콩의 양보다 작다면 에러를 던진다.
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("Not enough coffee beans!");
    }
    // 커피를 리턴하기 이전에 커피를 만든 만큼 커피콩의 g의 수를 줄여야함.
    // 사용한 만큼 커피콩 줄이기.
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots, // key와 value의 이름이 동일하다면 생략이 가능.
      hasMilk: false, // 우유를 넣을 수 없으므로
    };
  }
  // 커피콩 충전하기 ㅋㅋㅋ 3개정도로 충전~
  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  // 더블 샷으로 해보겠다
  const coffee = makeCoffee(2);
  // 만들어진 커피 한번 출력해보자.
  console.log(coffee);
  // 절차지향적 코드들인데 딱 봐도 알듯이 모든것들이 밖에서 뒹굴고있다. 이걸 객체지향적으로 다시 해보자.
}
