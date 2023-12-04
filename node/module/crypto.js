// 단방향 형태
const crypto = require('crypto');
const data = 'pw1234';

let encData = crypto.createHash('sha512')
                    .update(data)
                    .digest('base64');
console.log(encData);

encData = crypto.createHash('sha512')
                .update(data)
                .digest('hex'); // 표시하는 방식
console.log(encData);

const createSalt = () => {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(64, (err, buf) => {
            if(err) reject();
            resolve(buf.toString('base64'));
        });
    })
};

// 조건을 걸 수 있음
const createCryptoPassword = async (plainPassword) => {
    const salt = await createSalt();
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(plainPassword, salt, 9999, 64, "sha512", (err, key) => { // 9999는 반복 조건임.
            if(err) reject(err);
            resolve({password : key.toString("base64"), salt});
        })
    })
}
const cryptoPassword = async() => {
    encData = await createCryptoPassword(data);
    console.log(encData);
}

cryptoPassword();