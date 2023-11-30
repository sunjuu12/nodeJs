function webServerConnect() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1', {
        headers : {
            'Cache-Control': 'no-cache'
        }
    })
    .then(response => response.json())
    //.then(data => console.log(data));
}

// 함수 내부에 await가 있을 경우 function 앞에 반드시 async 붙여줘야함.
async function getJSONData() {
    const result = await webServerConnect();
    console.log(result);
}

getJSONData();