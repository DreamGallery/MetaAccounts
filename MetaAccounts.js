import { ethers } from "ethers";
import * as fs from "fs";

let mnemonic =
  "";
let PKey = new Array();
for (let i = 0; i < 100; i++) {
  let path = "m/44'/60'/0'/0/" + i;
  let wallet = ethers.Wallet.fromMnemonic(mnemonic, path);
  const data = { address: wallet.address, privateKey: wallet.privateKey };
  PKey.push(data);
  // fs.appendFileSync("./Address.md", wallet.address+",0.09"+"\r\n" , (err) => {
  //   if (err) {
  //     throw err;
  //   }
  // });
  // create disperse format
}
const data = JSON.stringify(PKey, null, "\t");
fs.writeFile("./Key.json", data, (err) => {
  if (err) {
    throw err;
  }
  console.log("JSON data is saved.");
});
