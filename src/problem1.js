//기능 구현 목록
// - 페이지 번호를 더하는 함수 생성
// - 페이지 번호를 곱하는 함수 생성
// - 포비와 크롱의 최댓값을 구하는 함수 생성
// - 승자를 판별하는 함수 생성
// - 예외사항을 처리하는 Error 함수 생성

function problem1(pobi, crong) {
  var answer;
  const POBI = 1;
  const CRONG = 2;
  const NOBODY = 0;
  let isError = false;

  function checkError(pageArr) {
    const leftPage = pageArr[0];
    const rightPage = pageArr[1];
    if (leftPage >= rightPage) {
      isError = true;
    }
    if (leftPage % 2 === 0 || rightPage % 2 === 1) {
      isError = true;
    }
    if (rightPage - leftPage !== 1) {
      isError = true;
    }
    if (leftPage === 0 && rightPage === 1) {
      isError = true;
    }
    if (leftPage === 399 && rightPage === 400) {
      isError = true;
    }
    if (leftPage <= 0 || leftPage >= 400) {
      isError = true;
    }
    return isError;
  }

  if (checkError(pobi) === true || checkError(crong) === true) {
    return -1;
  }

  function getAddResult(pageNum) {
    pageNum = String(pageNum);
    let result = 0;
    for (let i = 0; i < pageNum.length; i++) {
      result += Number(pageNum[i]);
    }
    return result;
  }

  function getMultiplyResult(pageNum) {
    pageNum = String(pageNum);
    let result = 1;
    for (let i = 0; i < pageNum.length; i++) {
      result = result * Number(pageNum[i]);
    }
    return result;
  }

  function getPobiMaxResult(pobiPage) {
    const leftResult = getAddResult(pobiPage[0]);
    const rightResult = getMultiplyResult(pobiPage[1]);

    return Math.max(leftResult, rightResult);
  }

  function getCrongMaxResult(crongPage) {
    const leftResult = getAddResult(crongPage[0]);
    const rightResult = getMultiplyResult(crongPage[1]);

    return Math.max(leftResult, rightResult);
  }

  function getWinner() {
    const pobiResult = getPobiMaxResult(pobi);
    const crongResult = getCrongMaxResult(crong);

    if (pobiResult > crongResult) {
      answer = POBI;
    } else if (pobiResult < crongResult) {
      answer = CRONG;
    } else {
      answer = NOBODY;
    }
  }

  getWinner();

  return answer;
}

module.exports = problem1;
