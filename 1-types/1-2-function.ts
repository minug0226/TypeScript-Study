{
  // JavaScript ๐ฉ
  // 1. ํจ์๊ฐ ์งง์ ๊ฒฝ์ฐ ์ด๋ค ๊ฐ์ ์ ๋ฌํด์ค์ผ ํ๋์ง ์ ์ ์์ง๋ง
  // 2. ํจ์๊ฐ ๊ธด ๊ฒฝ์ฐ์๋ ์ด๋ค ๊ฐ์ ์ ๋ฌํด์ผํ ์ง ๋ชจ๋ฅผ๋๊ฐ ์๋ค.
  // 3. num1, num2์ ํ์์ string์ผ๋ก ์ค๋ ํจ์๊ฐ ์คํ์ด ๋๋๋ฐ ๊ทธ ๋ฌธ์์ด ๋ ๊ฐ๋ฅผ ์ด์ด์ฃผ๋๊ฒ ์ํ๋ ๋์์ด ์๋๋ค.

  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeSciprt โจ
  // 1. ์ด๋ ๊ฒ ๋๋ฉด num1 ๊ณผ num2 ์๋ numberํ์์ผ๋ก๋ง ๋ฃ์ ์ ์๊ฒ ๋๋ค.
  // 2. ๊ทธ๋ฆฌ๊ณ  ์ซ์๋ฅผ ๋ฆฌํดํ๋๊ฒ
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript ๐ฉ
  // 1. ์ด๋ฒ์๋ ๋ฌด์ธ๊ฐ๋ฅผ fectch๋ฅผ ํด์ ์ด๋ค ์ฝ๋๊ฐ ๋ฐ์ํ๋ค๊ฐ promise๋ฅผ ๋ฆฌํดํ๋ ํจ์์ด๋ค.
  // 2. ์ด์  ์ฌ๊ธฐ์ ๊ต์ฅํ ๋ง์ ํจ์๋ค์ด ์๋ค๋ฉด ์ด ํจ์๊ฐ ๋๋์ฒด ์ด๋ค๊ฑธ ๋ฆฌํดํ๋๊ฑฐ์ง ํ๊ณ  ์คํฌ๋กค๋ง์ ํด์ ๋ฐ์ ๋ถ๋ถ๊น์ง ๋ค ํ์ธ์ ํด ๋ด์ผํ๋ค.
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  // TypeSciprt โจ
  // 1. id๋ ํจ์์์ ๋ด๋ถ ๊ตฌํ ์ฌํญ์ด ์๊ธฐ ๋๋ฌธ์ ์๋ฌด ํ์์ด๋ ์ค ์๊ฐ ์๋ค.(๊ทธ๋ ์ง๋ง ๋ณดํต id๋ string์ผ๋ก ๋ง์ด ์ด๋ค)
  // 2. ๋ฑ ๋ณด์๋ง์ ์คํฌ๋กค๋ง์ด ํ์๊ฐ ์๋ค. -> ์ tsFetchNum์ ์ซ์๋ฅผ fetchํ๋ ํจ์๊ตฌ๋, ์ธ์๋ก๋ string์ id๋ฅผ ๋ฐ์์ promise๋ฅผ ๋ฆฌํดํ๋๋ฐ ๊ทธ promise๋ ์ซ์์ ๋ฐ์ดํฐ๋ฅผ ๋ฆฌํดํ๊ฒ ๊ตฌ๋.
  function tsFetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  // JavaScript โจ => TypeScript
  // Optional parameter
  // ๋๊ฐ์ง ์ธ์์ ์ต์์ ์ค ์๊ฐ ์๋ค.
  // 1. ?๋ฅผ ๋ถ์ฌ์ฃผ๋ฉด ๊ทธ ์ธ์๋ ์ ๋ฌ ๋ฐ์ ์๋ ์๊ณ  ์ ๋ฌ ๋ฐ์ง ์์ ์๋ ์๋ค๊ณ  ๋ช์ํ๊ฒ ๋๋ค. โจ ์ด๊ฑธ ์ฐ์.
  // 2. | undefined ์ฌ์ฉํ๊ธฐ  ex) lastName: string | undefined ๋ก๋ ์ต์์ ์ค ์๊ฐ ์๋ค. ๐ฉ
  // 2๋ฒ์ ๋ฐฉ๋ฒ์ผ๋ก ํ  ๊ฒฝ์ฐ ๊ทธ๋ ๊ฒ ์ง์ ํด๋์ ์ธ์๋ ๋ฌด์กฐ๊ฑด undefined๋ผ๊ณ  ์จ์ค์ผ ์ฌ์ฉ์ด ๊ฐ๋ฅํ๋ค.
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "jobs");
  printName("Ellie"); // ๋ง์ฝ Optional parameter ์ค์ ์ ํ์ง์์ผ๋ฉด ๋ถํ์ ํ๊ฒ ๋๋ค.
  printName("Anna", undefined); // Optional parameter 2๋ฒ์งธ ๋ฐฉ๋ฒ

  // Default parameter
  // ๊ธฐ๋ณธ์ค์ ๋ ๊ฐ์ ์ถ๋ ฅํ๊ฒ ํ๋ค.
  // Optional parameter๊ณผ์ ์ฐจ์ด์ ์ด ๋ถ๋ชํ๋ค. Optional์ ๊ฐ์ด ์ ๋ฌ๋ฐ์ง ์์ผ๋ฉด undefined๋ฅผ ์ถ๋ ฅํ๋ ๋ฐ๋ฉด ์๋ฌด๊ฒ๋ ์ ๋ฌํ์ง ์์๋ ์๋์ ์ผ๋ก Defaultํ๊ฒ ์ถ๋ ฅํ๋ค
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();
  // Rest parameter

  // ๋ฐ์์ค๋ ๋ชจ๋  ์ซ์ ๋ฐ์ดํฐ๋ค์ ๋ฐฐ์ด ํํ๋ก ๋ฐํ
  function addNumbers(...numbers: number[]): number {
    // numbers ๋ฐฐ์ด์ reduce๋ฅผ ์ด์ฉํด์ ๊ณ์ ๋ ํด ๋๊ฐ๊ฒ ํ๊ธฐ
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
