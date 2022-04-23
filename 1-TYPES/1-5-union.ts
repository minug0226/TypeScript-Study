{
  /**
   *  Union Types: OR
   */
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail ⏱
  // 성공했다면 성공한 State를 실패했다면 실패한 State를 리턴

  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  // 하나의 LoginState에 통합해주기 (UnionType 사용하는 법)
  type LoginState = SuccessState | FailState;

  // SuccessState | FailState 를 직접적으로 작성하기보다는 아래와 같이 주는게 좋다.
  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
