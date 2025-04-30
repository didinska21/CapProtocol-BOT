import figlet from 'figlet';
import gradient from 'gradient-string';
import chalk from 'chalk';
import * as dotenv from 'dotenv';
import { ethers } from 'ethers';
import fs from 'fs';
import path from 'path';
import readline from 'readline';
dotenv.config();
// === Show Banner ===
function showBanner() {
  console.clear();
  const banner = figlet.textSync('C A P', { font: 'ANSI Shadow' });
  console.log(gradient.pastel.multiline(banner));
  console.log(chalk.gray.bold('owner : t.me/didinska'));
  console.log(chalk.magenta('='.repeat(50)) + '\n');
}
// === Constants ===
const CONTRACT_ADDRESS = '0xe9b6e75c243b6100ffcb1c66e8f78f96feea727f';
const MINT_FUNCTION_SIGNATURE = '0x40c10f19';
const TOKEN_AMOUNT = ethers.parseEther('1000');
const RPC_URL = 'https://carrot.megaeth.com/rpc';
const CHAIN_ID = 6342;
const EXPLORER_URL = 'https://megaexplorer.xyz';
// === Logging ===
function log(message) {
  const time = new Date().toLocaleTimeString();
  console.log(chalk.gray(`[${time}]`) + ' ' + message);
}
// === Input Prompt ===
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function askQuestion(query) {
  return new Promise(resolve => rl.question(query, answer => resolve(answer.trim())));
}
// === Core Functions ===
async function claimFaucet(wallet) {
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const signer = wallet.connect(provider);
  const nonce = await provider.getTransactionCount(wallet.address);
  const tx = {
    to: CONTRACT_ADDRESS,
    data: MINT_FUNCTION_SIGNATURE + '0'.repeat(24) + wallet.address.slice(2).toLowerCase() + TOKEN_AMOUNT.toString(16).padStart(64, '0'),
    gasLimit: 150000,
    nonce,
    chainId: CHAIN_ID
  };
  const txResponse = await signer.sendTransaction(tx);
  log(chalk.yellowBright(`>>> Sent TX: ${txResponse.hash}`));
  await txResponse.wait();
  log(chalk.greenBright(`✔ Success! Confirmed: ${EXPLORER_URL}/tx/${txResponse.hash}`));
}
function updateEnvFile(newKey) {
  const envPath = path.resolve('.env');
  fs.writeFileSync(envPath, `PRIVATE_KEY=${newKey}\n`);
  log(chalk.cyan('✔ Saved PRIVATE_KEY to .env'));
}
async function initializeWallet() {
  let key = process.env.PRIVATE_KEY;
  if (!key) {
    key = await askQuestion(chalk.cyanBright('\n>>> Enter your PRIVATE KEY: '));
    updateEnvFile(key);
  }
  try {
    const wallet = new ethers.Wallet(key);
    log(chalk.gray(`Wallet: ${wallet.address}`));
    return wallet;
  } catch (e) {
    log(chalk.redBright('✖ Invalid private key'));
    process.exit(1);
  }
}
async function runClaims() {
  const wallet = await initializeWallet();
  const countInput = await askQuestion(chalk.yellow('\n>>> Berapa kali klaim? '));
  const count = parseInt(countInput) || 1;
  console.log(chalk.magenta('\n' + '='.repeat(50)));
  for (let i = 0; i < count; i++) {
    log(chalk.blueBright(`\n▶ Claim #${i + 1}`));
    try {
      await claimFaucet(wallet);
    } catch (err) {
      log(chalk.red(`✖ Error: ${err.message}`));
      break;
    }
  }
  console.log(chalk.magenta('\n' + '='.repeat(50)));
  console.log(chalk.greenBright('\n✔ All done. Press CTRL+C to exit.\n'));
  rl.close();
}
// === Start App ===
showBanner();
runClaims();
