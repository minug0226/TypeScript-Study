{
  /**
   * Intersection Types: & (and 같은 개념)
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  // 여기서 person은 Student와 Worker를 합했기에 다 접근할 수가 있다.
  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }
  // 이 함수를 호출할려면 당연히 두 가지 다 모든 데이터가 들어가있는 오브젝트를 전달해야한다.
  internWork({
    name: "ellie",
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });
}
