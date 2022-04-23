{
  /**
   * Print Loading State
   */

  // state 라는 공통된 속성이 들어있다.
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState; // Union 타입

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network

  function printLoginState(state: ResourceLoadState) {
    switch (state.state) {
      case "loading":
        console.log("loading...");
        break;
      case "success":
        console.log(`😃 ${state.response.body}`); // 성공했다면 웃는 이모티콘이랑 body안에 내용을
        break;
      case "fail":
        console.log(`😱 ${state.reason}`); // 실패하면 절규 이모티콘이랑 reason을
        break;
      default:
        throw new Error(`unknown state: ${state}`);
    }
  }
}
