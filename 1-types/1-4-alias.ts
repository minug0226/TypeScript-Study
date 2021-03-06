{
  // typescript์ ๊ฝ ๐บ
  /**
   * Type Aliases
   */
  // ์ํ๋ ํ์์ ์๋กญ๊ฒ ์ ์ ํ  ์ ์๋ค๋ ๊ฒ!
  // ์์ํ์
  type Text = string;
  const name: Text = "wook";
  const address: Text = "korea";
  type Num = number;
  // ์ค๋ธ์ ํธ ํ์์ผ๋ก๋ ์ ์ ํ  ์ ์๋ค.
  // name, age๋ฅผ ๋ฐ์ดํฐ๋ก ๊ฐ์ง student Type์ด๋ค.
  type student = { name: string; age: number };
  const student: student = {
    animal: "dog", // error
    name: "minwook",
    age: 25,
  };

  /**
   * String Literal Types
   */
  // ํ์์ ๋ฌธ์์ด๋ก ์ง์ ํ  ์ ์๋ค.
  // ์ด๋ ๊ฒ ์ง์ ํ๊ฒ ๋๋ฉด ๋ฌด์กฐ๊ฑด ์ง์ ํด๋์ ๋ฌธ์์ด๋ง์ ๊ฐ์ผ๋ก ์ค์ผํ๋ค.
  type Name = "name";
  let minwookName: Name;
  minwookName = "d"; // error
  minwookName = "name";
  type JSON = "json";
  const json: JSON = "json";

  // ์ด๋ฌ๋ฉด true๋ง ํ ๋นํ  ์ ์๋ค.
  type Boal = true;
  const isCat: Boal = true;
}
