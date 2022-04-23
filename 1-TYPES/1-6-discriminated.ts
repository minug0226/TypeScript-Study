{
  // function: login -> success, fail ⏱
  // 각각 result 라는 키를 가지고 있지만 타입에 따라서 그 값은 다르게 지정되어 있다.
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // TypeScript는 똑똑해서 state. 을 하면 result가 공통적으로 가지고 있으므로 접근이 가능하다.
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
