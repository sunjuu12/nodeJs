const promise = new Promise((resolve, reject) => {
    if(true) {
        /* 처리 성공 */
        resolve("결과 데이터");
    } else {
        /* 처리 실패 */
        reject (new Error("에러"));
    }
})

.then((success, fail) => {
    /* 비동기 처리 결과*/
    /*
        success (첫번째 매개변수) : 성공(fulfilled, resolve 함수 호출 상태)시 호출
        fail    (두번째 매개변수) : 실패(rejected, reject 함수 호출 상태)시 호출
    */
})
.catch(error => {
    /* 예외(비동기 처리에서 발생한 에러와 then 메소드에서 발생한 에러)가 발생 */
})
.finally(() => {
    /* 처리 결과와 무관하게 항상 실행해야하는 코드 */
})