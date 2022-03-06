const fs = require("fs");
const path = require("path");
const anchor = require("@project-serum/anchor");

const account = anchor.web3.Keypair.generate();

fs.writeFileSync(
  path.resolve(__dirname + "/keypair.json"),
  JSON.stringify(account)
);
