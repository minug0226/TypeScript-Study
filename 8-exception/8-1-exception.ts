// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!๐ฉ") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents๐";
}

function closeFile(fileName: string) {
  //
}
function run() {
  const fileName = "not exist!๐ฉ";

  // ์๋ํ๋ค๊ฐ try
  // ์๋ฌ๊ฐ ๋ฐ์ํ๋ค๋ฉด catch(error)
  // ํญ์ ์ฑ๊ณตํ๋  ์คํจํ๋  ์๊ด์์ด ์ํํด์ผํ๋ค๋ฉด finally
  // catch์์์ ๋ฌด์จ์ผ์ด ์ผ์ด๋ ์ง ๋ชจ๋ฅธ๋ค. catch์์์ ๋ค๋ฅธ ์๋ฌ๊ฐ ๋์ค๊ฑฐ๋ return์ด ๋๋ฉด ๋ง๋ฌด๋ฆฌ๊ฐ ๋๋ค. ๋ฐ๋ผ์ finally๋ฅผ ์ฐ๋๊ฒ์ด ์ข๋ค.
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!!`);
    return;
  } finally {
    closeFile(fileName);
    console.log(`closed!`);
  }
}
run();
