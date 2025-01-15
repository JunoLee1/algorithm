/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 1) {
        return [[1]]; // 기저 조건: 첫 번째 행
    }

    // 이전 삼각형 가져오기
    const prevTriangle = generate(numRows - 1);
    const lastRow = prevTriangle[prevTriangle.length - 1]; // 이전 마지막 행
    const newRow = [1]; // 새로운 행의 첫 번째 요소

    // 새로운 행의 중간 요소 계산
    for (let i = 1; i < lastRow.length; i++) {
        newRow.push(lastRow[i - 1] + lastRow[i]);
    }

    newRow.push(1); // 새로운 행의 마지막 요소 추가
    prevTriangle.push(newRow); // 새로운 행을 삼각형에 추가

    return prevTriangle; // 결과 반환
};

// 테스트 실행
let numRows = 5;
console.log(generate(numRows));
