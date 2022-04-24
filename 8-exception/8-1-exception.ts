// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!💩") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents🗒";
}

function closeFile(fileName: string) {
  //
}
function run() {
  const fileName = "not exist!💩";

  // 시도했다가 try
  // 에러가 발생한다면 catch(error)
  // 항상 성공하든 실패하든 상관없이 시행해야한다면 finally
  // catch안에서 무슨일이 일어날지 모른다. catch안에서 다른 에러가 나오거나 return이 되면 마무리가 된다. 따라서 finally를 쓰는것이 좋다.
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
