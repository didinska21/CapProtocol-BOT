
# Claim Faucet Bot

A simple script to claim faucet tokens on the MegaEth network using a wallet's private key. This bot interacts with the contract deployed at a specific address and allows the user to claim tokens multiple times.

## Prerequisites

Before running the bot, make sure you have the following:

- Node.js v18.x or higher
- NPM or Yarn package manager
- A wallet private key (Ethereum-compatible)

## Installation

Follow these steps to install and set up the script:

1. Clone this repository or download the script.

   ```bash
   git clone https://github.com/didinska21/CapProtocol-BOT.git
   cd CapProtocol-BOT
   ```

2. Install the dependencies.

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory of the project and add your private key.

   ```env
   PRIVATE_KEY=your_wallet_private_key
   ```

## Configuration

In the `.env` file or directly in the script, configure the following parameters:

- **CONTRACT_ADDRESS**: The address of the faucet contract where tokens will be claimed.
- **MINT_FUNCTION_SIGNATURE**: The method signature for the faucet contract's mint function.
- **TOKEN_AMOUNT**: The amount of tokens to claim (set to `1000` in this script).
- **RPC_URL**: The RPC URL of the network you're connecting to (in this case, `https://carrot.megaeth.com/rpc`).
- **CHAIN_ID**: The ID of the blockchain network (6342 for MegaEth).
- **EXPLORER_URL**: URL to the blockchain explorer for the MegaEth network.

### Example `.env` configuration

```env
PRIVATE_KEY=your_private_key_here
CONTRACT_ADDRESS=0xe9b6e75c243b6100ffcb1c66e8f78f96feea727f
MINT_FUNCTION_SIGNATURE=0x40c10f19
TOKEN_AMOUNT=1000
RPC_URL=https://carrot.megaeth.com/rpc
CHAIN_ID=6342
EXPLORER_URL=https://megaexplorer.xyz
```

## Running the Script

Once you've installed the dependencies and configured the `.env` file, run the script with the following command:

```bash
node bot.js
```

The script will prompt you for the following inputs:

1. **Enter your PRIVATE_KEY**: If it's not already set in your `.env` file.
2. **How many times would you like to claim?**: Enter the number of claims you wish to execute.

The bot will then execute the claims and show you a status message for each transaction, including a link to confirm it on the blockchain explorer.

## Output

The script will display the following:

- A banner with the name "C A P" and the owner's Telegram contact.
- A log for each claim transaction, including the transaction hash and confirmation status.
- A final confirmation message once all claims are completed.

## Contributing

Feel free to open issues or pull requests for improvements or bug fixes.

## License

This project is open source and available under the MIT License.

## Contact

For any questions or issues, please contact the owner at [t.me/didinska](https://t.me/didinska).
