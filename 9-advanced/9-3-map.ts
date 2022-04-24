{
  // map 타입에 대해서 공부했다.
  // 기존에 있는 Type들을 이용하면서 조금 다른 형태로 변환할 수 있는것을 말한다.

  type Video = {
    title: string;
    author: string;
  };
  // [1, 2].map(item => item * item); // [1, 4]

  // object에 모든 키들을 하나하나씩 돌 수 있다. in keyof
  // T타입의 모든 키중에 하나인 P
  // 한번 이렇게 정의해놓으면 재사용성이 높아진다!
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };

  // 정해진 T타입의 모든 키들을 돌면서 T에 해당하는 밸류를 쓸건데
  // readonly라고 선언하게 되면 이 타입을 쓰게 되는 애들은 이제 안에 데이터를 변경할 수 없는 읽기 전용이 된다.
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };
  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };
  animal.name = "wook";

  // 이제 추후에 변경이 안됨.
  const video: ReadOnly<Video> = {
    title: "hi",
    author: "wook",
  };

  // 이것들을 map 타입으로 간편하게 해줬다.
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };

  // Nullable
  // 기존의 Value 타입을 쓰거나 null이 가능하도록 만드는 타입
  type Nullable<T> = { [P in keyof T]: T[P] | null };

  // video로 받기
  // null이 가능하기 떄문에 null을 할당할 수 있다.
  const obj2: Nullable<Video> = {
    title: "hi",
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  // Proxify라는 타입은 빙글빙글 돌게해주면서
  // Proxy라는 타입으로 감싸게하는것
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
