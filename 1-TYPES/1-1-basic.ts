{
 /**
  * JavaScript
  * Primitive: number, string, boolean, bigint, Symbol, null, undefined
  * Object: function, array.......
  * */

 // TypeScript
 // number
 const num:number = -6;
 
 // string
 const str:string = 'hello';

 // boolean
 const boal:boolean = true;

 // undefined
 let name : undefined; // 💩 이렇게 쓰이지 않는다.
 let age: number | undefined; // optional 타입일때 이런 식으로 선언을 많이 해준다.
 age = undefined;
 age = 1;
 function find(): number | undefined { // 무언가 있을때 없을때 undefined
     return undefined;
 }

 // null
 let person: null; // 💩
 let person2: string | null; // 보편적으로는 undefined를 쓴다. 값이 있거나 없을때는 문맥상 NULL이 맞긴하다.

 // unknown 💩
 // 너무 추상적이고 답답하다. 웬만하면 쓰지 않는 것이 좋다. 
 // 글쎄 난 이게 뭔지 모르겠어 라고 말하는 것
 // 어떤 종류의 데이터가 담길지 알 수가 없는 타입이 되버린다.
 let notSure: unknown = 0;
 notSure = 'he';
 notSure = true;

 // any 💩
 // 이것도 똥이다. 절대 절대 가능하면 쓰지 말자.
 // unknown과 다르게 이건 당당하게 어떤것이든 난 담을 수 있어 라고 말하는 것
 // 어떤 값이든 담을 수 있게 된다.
 let anything: any = 0;
 anything = 'hello';
 
 // void 
 // 아무것도 없는 , 텅텅 빈
 // 함수에서 아무것도 return 하지 않으면 void라는 타입이 되는것
 // void는 생략이 가능해서 회사 가이드에 맞춰서 하는것이 중요하다.
 // 어떤 것을 return 하지 않을떄 쓴다.
 function print(): void {
     console.log('hello');
     return;
 }
 let unusable: void = undefined; // 💩

 // never
 // return 하지 않는 함수 , 호출하면 어플리케이션이 죽거나 영원히 중지 되어 있는상태가 된다.
 // return 하지 않기 때문에 에러를 던지던지, while문을 돌면서 계속 끝나지 않게 코드를 작성해야한다.
 // 어플리케이션에서 예상하지못한, 핸들링 할 수 없는 그런 에러가 발생했을 때
 function throwError(message: string): never {
     // message -> server (log) 에러메세지를 서버로그로 보내고
     throw new Error(message); // 에러를 던지게 되서 어플리케이션이 죽게한다.
     // 이렇게 에러를 던지거나 또는 return 하지 않는 예시는 
     // while 문을 true로 지정해서 계속 빙글 빙글 도는 상태를 예시로 둘 수 있다.
     while(true) { // 지금 이게 희미하게 vscode에서 보이는 이유는 위에 코드에서 에러를 던져줬기때문에 여기까지 도달하지 못하는것이다.

    
    }
 let neverEnding: never; // 💩 이렇게 쓰면 안된다.
 }

 // object 💩
 // 어떤 타입의 데이터를 담을 수가 있다. (광범위하고 추상적인 어떤것이든 넣을 수 있다.)
 let obj: object; // 💩 오브젝트도 좀더 명확하게 명시해서 쓰는게 좋기때문에 사용을 권장하진 않는다.
 function acceptSomeObject(obj: object) {}
 acceptSomeObject({name: 'ellie'});
 acceptSomeObject({animal: 'dog'});
}