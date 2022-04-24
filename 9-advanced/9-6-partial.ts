{
  // partial에 대해서 학습했다.

  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  // todo 기존 아이템들을 업데이트
  // Partial 키워드를 쓰면 업데이트가 가능해진다.
  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate }; // spread 연산자로 하나하나씩 복사하기
  }
  const todo: ToDo = {
    title: "learn TypeScript",
    description: "study hard",
    label: "study",
    priority: "high",
  };
  // 이렇게 부분적으로 업데이트가 가능해진다.
  const updated = updateTodo(todo, { priority: "low" });
  console.log(updated);
}
