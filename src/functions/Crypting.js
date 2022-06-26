// var CryptoJS = require("crypto-js");
import CryptoJS from "crypto-js";

export const CryptingLocalData = (data) => {
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123');
    var strCipher = CryptoJS.format.OpenSSL.stringify(ciphertext);
    return strCipher;
}

export const DecreptingLocalData = (ciphertext) => {
    var cipherStr = CryptoJS.format.OpenSSL.parse(ciphertext);
    var bytes = CryptoJS.AES.decrypt(cipherStr, 'secret key 123');  
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
}

