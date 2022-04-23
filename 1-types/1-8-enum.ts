{
  /**
   * 여러가지에 관련된 상수값들을 관리해주는 타입
   * Enum
   */
  // JavaScript 예시
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  // 꽁꽁 얼려서 수정이 절대 안되게 하는 API인 freeze를 사용해야만 한다.
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript 예시
  // TypeScript에서는 enum을 가능하면 쓰지않는 것이 좋다.
  // enum은 문제점 -> enum으로 타입이 지정된 변수에 다른 어떤 것도 할당할 수가 있다는게 문제다. (타입이 정확하게 지정되지 않는다는 뜻)
  // 그래서 Union 타입을 대신 사용하는 것이 좋다. (타입을 꼭 보장해서 코드를 작성하자!)
  // enum을 쓸 수 밖에 없는 예시가 있다. -> 대부분은 사용이 가능했지만, 다른 모바일 클라이언트에서 사용하려고 할때다! 네이티브 프로그래밍 언어에선 JSON으로 묶어서 줘야하는데 Union타입을 표현할 수 있는 방법이 없기때문에 서로 이해하는 enum을 사용한다.
  // enum은 정말 편하게 사용이 가능하다. (enum에서는 전부다 대문자가 아니라 첫문자만!)
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  enum Days {
    Monday, // 0 이걸 1부터 시작으로 하고싶다 하면 = 1을 줄 수 있다. 문자열도 줄 수 있지만 문자열을 주는 순간 자동으로 어떤걸 할당해야할지 모르니까 다 문자열을 하나하나 할당해줘야한다.
    Tuesday, // 1
    Wednesday, // 2
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10;
  console.log(day);

  let dayOfweek: DaysOfWeek = "Monday";
  dayOfweek = "Wednesday";
}
