{
  // readonly에 대해 학습했다.
  // 읽을 수만 있는 Type을 만들기

  type ToDo = {
    title: string;
    description: string;
  };

  // 화면에 보여주기만 하는 함수
  // 가변성에 수정이 가능한 타입을 주는것은 이럴때 위험해서 불변성을 보장하는 것이 좋다.
  function display(todo: Readonly<ToDo>) {
    // todo.title = 'jaja';
  }
}
