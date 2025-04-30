# Claim Faucet Bot

A simple script to claim faucet tokens on the MegaEth network using a wallet's private key. This bot interacts with the contract deployed at a specific address and allows the user to claim tokens multiple times.

## Prerequisites

Before running the bot, make sure you have the following:

- Node.js v18.x or higher
- NPM or Yarn package manager
- A wallet private key (Ethereum-compatible)

## Installation

1. Clone this repository or download the script.

   ```bash
   git clone https://github.com/yourusername/claim-faucet-bot.git
   cd claim-faucet-bot

2. Install the dependencies.

npm install


3. Create a .env file in the root directory of the project and add your private key.

PRIVATE_KEY=your_wallet_private_key



Configuration

CONTRACT_ADDRESS: The address of the faucet contract where tokens will be claimed.

MINT_FUNCTION_SIGNATURE: The method signature for the faucet contract's mint function.

TOKEN_AMOUNT: The amount of tokens to claim (set to 1000 in this script).

RPC_URL: The RPC URL of the network you're connecting to (in this case, https://carrot.megaeth.com/rpc).

CHAIN_ID: The ID of the blockchain network (6342 for MegaEth).

EXPLORER_URL: URL to the blockchain explorer for the MegaEth network.


Example

PRIVATE_KEY=your_private_key_here

Running the Script

To run the faucet claim script, simply execute the following command:

node bot.js
