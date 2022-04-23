// stack을 구현하기 이전에 어떤 api를 가지고 있을지 규격을 정해야한다.
// Array를 쓰지않고 자료구조에 대해 후입선출을 스스로 구현해보기
// 단일 연결 리스트로 구현해보자.

// Stack의 규격사항
interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  // 데이터를 정의할 때 데이터를 넣어서 감싼다는 이런걸 만든다면 불변성을 주면 좋으니 readonly를 준다.
  readonly value: string;
  readonly next?: StackNode; // 다음 stack을 가리키거나 그러지않을수도 있으니 ?을 붙여준다.
};

class StackImpl implements Stack {
  private _size: number = 0; // 동일한 이름은 _을 붙여줘서 내부에만 쓴다는 느낌을 주면 좋다.
  private head?: StackNode;

  constructor(private capacity: number) {} // 총 스택의 사이즈를 전달받기
  get size() {
    return this._size;
  }
  push(value: string) {
    if (this.size === this.capacity) {
      // 스택 용량 정한거에 꽉 찼다면!
      throw new Error("Stack is full!");
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
    // null == undefined, null !== undefined 엄격한 확인은 다르지만 엄격하지않게 보면 같다고봄.
    // 그래서 == null로 체크하는게 좋다.
    if (this.head == null) {
      // stack이 비어있으므로 확인해라!
      throw new Error("Stack is empty!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl(10);
stack.push("Wook 1");
stack.push("Bob 2");
stack.push("Steve 3");
// 0이 아닐때까지 계속 반복해보자.
while (stack.size !== 0) {
  console.log(stack.pop());
}

stack.pop();
