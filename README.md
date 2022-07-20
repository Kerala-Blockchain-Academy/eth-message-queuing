# Sample Hardhat Project

To run the project first run a node using `npx hardhat node`

Then copy the first account address and replace the variable accountAddress on App.js (Lin No. 13).

The deploy contract into blockchain using the command `npx hardhat run scripts/deploy.js`

Then run the application using `npm start`

To check the api, open terminal/cmd using the following command: `curl -d "hash=abcd" -X POST http://127.0.0.1:3000`