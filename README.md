# BlockFund - Decentralized Crowdfunding Platform

A blockchain-based crowdfunding application built on Ethereum that enables transparent, trustless fundraising campaigns using smart contracts.

## 📋 Overview

BlockFund is a decentralized crowdfunding platform that leverages blockchain technology to create a transparent and secure environment for fundraising. The platform allows users to create campaigns, donate to causes they believe in, and track all transactions on the Ethereum blockchain. Unlike traditional crowdfunding platforms, BlockFund eliminates intermediaries and ensures that funds are transferred directly from donors to campaign creators.

## 🎯 What It Does

### Core Functionality

1. **Campaign Creation**
   - Users can create crowdfunding campaigns with a title, description, target amount (in ETH), and deadline
   - Each campaign is stored on the blockchain with immutable records
   - Campaign creators receive donations directly to their wallet address

2. **Donation System**
   - Anyone can donate to active campaigns using cryptocurrency (ETH)
   - Donations are instantly transferred to campaign owners
   - All donation records are permanently stored on the blockchain
   - Donors can view their contribution history

3. **Campaign Management**
   - View all active campaigns on the platform
   - Filter campaigns by creator (view your own campaigns)
   - Track campaign progress (amount collected vs. target)
   - View detailed donation history for each campaign

4. **Wallet Integration**
   - Connect via MetaMask or other Web3 wallets
   - Secure authentication through wallet signatures
   - Support for multiple Ethereum networks (localhost, Holesky, Sepolia)

## 🏗️ How It Works

### Architecture

The application follows a three-tier architecture:

#### 1. **Smart Contract Layer (Blockchain)**
- **Contract**: `CrowdFunding.sol` (Solidity)
- **Functions**:
  - `createCampaign()`: Creates a new fundraising campaign
  - `donateToCampaign()`: Processes donations and transfers funds
  - `getCampaigns()`: Retrieves all campaigns
  - `getDonators()`: Gets donation history for a campaign
  
- **Data Structure**:
  ```solidity
  struct Campaign {
      address owner;           // Campaign creator's wallet
      string title;            // Campaign name
      string description;      // Campaign details
      uint256 target;          // Funding goal
      uint256 deadline;        // Campaign end date
      uint256 amountCollected; // Current funds raised
      address[] donators;      // List of donor addresses
      uint256[] donations;     // Corresponding donation amounts
  }
  ```

#### 2. **Backend/Context Layer (Web3 Integration)**
- **File**: `Context/CroudFunding.js`
- **Technology**: React Context API + Ethers.js
- **Responsibilities**:
  - Connects frontend to smart contract
  - Manages wallet connections via Web3Modal
  - Handles blockchain transactions
  - Parses and formats blockchain data for UI
  - Manages application state

#### 3. **Frontend Layer (User Interface)**
- **Framework**: Next.js 13 + React 18
- **Styling**: TailwindCSS
- **Components**:
  - `NavBar`: Navigation and wallet connection
  - `Hero`: Landing page with campaign creation
  - `Card`: Display campaign listings
  - `PupUp`: Donation modal interface
  - `Footer`: Site footer information

### Transaction Flow

1. **Creating a Campaign**:
   ```
   User fills form → Context validates data → Smart contract creates campaign 
   → Transaction confirmed → Campaign appears on platform
   ```

2. **Making a Donation**:
   ```
   User selects campaign → Enters donation amount → Confirms transaction 
   → Smart contract transfers ETH → Updates campaign records → UI refreshes
   ```

3. **Viewing Campaigns**:
   ```
   Page loads → Context fetches from blockchain → Smart contract returns data 
   → Context parses data → UI displays campaigns
   ```

## 🛠️ Technology Stack

### Blockchain
- **Solidity** ^0.8.19 - Smart contract development
- **Hardhat** ^2.13.0 - Ethereum development environment
- **Ethers.js** ^5.7.2 - Blockchain interaction library

### Frontend
- **Next.js** 13.2.4 - React framework with SSR
- **React** 18.2.0 - UI library
- **TailwindCSS** ^3.2.7 - Utility-first CSS framework
- **Headless UI** ^1.7.13 - Unstyled accessible components
- **Heroicons** ^2.0.16 - Icon library

### Web3 Integration
- **Web3Modal** ^1.9.12 - Wallet connection interface
- **MetaMask** - Primary wallet provider

## 📱 Application Use Cases

### 1. **Charitable Fundraising**
- Non-profits can raise funds transparently
- Donors can verify exactly where their money goes
- Eliminates concerns about fund mismanagement

### 2. **Startup Funding**
- Entrepreneurs can pitch ideas and raise capital
- Early supporters can contribute directly
- Transparent tracking of funding goals

### 3. **Community Projects**
- Local initiatives can crowdsource funding
- Community members can support projects they care about
- Democratic funding allocation

### 4. **Creative Projects**
- Artists, musicians, and creators can fund their work
- Fans can directly support creators
- No platform fees eating into funding

### 5. **Emergency Relief**
- Rapid fundraising for disaster relief
- Transparent distribution of aid
- Direct transfer to those in need

## 🚀 Setup & Installation

### Prerequisites
- Node.js v18.17.1 (Required)
- MetaMask browser extension
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd crowdfunding_system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Copy `.env.local` and add your configuration:
   ```env
   NETWORK_RPC_URL=<your-rpc-url>
   PRIVATE_KEY=<your-private-key>
   ```

4. **Compile smart contracts**
   ```bash
   npm run compile
   ```

5. **Deploy to local network**
   ```bash
   # Terminal 1: Start local blockchain
   npm run node
   
   # Terminal 2: Deploy contract
   npm run deploy-local
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

7. **Configure MetaMask**
   - Network Name: localhost
   - RPC URL: http://127.0.0.1:8545
   - Chain ID: 1337
   - Currency Symbol: ETH

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run compile` - Compile smart contracts
- `npm run node` - Start Hardhat local blockchain
- `npm run deploy-local` - Deploy to localhost
- `npm run deploy-holesky` - Deploy to Holesky testnet
- `npm run deploy-sepolia` - Deploy to Sepolia testnet
- `npm run clear` - Clean build artifacts

## 🌐 Supported Networks

- **Localhost** (Chain ID: 1337) - Development
- **Holesky** (Chain ID: 17000) - Ethereum testnet
- **Sepolia** (Chain ID: 11155111) - Ethereum testnet

## 🔐 Security Features

- **Decentralized**: No central authority controls funds
- **Transparent**: All transactions visible on blockchain
- **Immutable**: Campaign data cannot be altered after creation
- **Direct Transfer**: Funds go directly to campaign owners
- **Wallet Authentication**: Secure Web3 wallet integration

## ⚠️ Important Notes

1. **MetaMask Account Switching**: Clear MetaMask history when switching between accounts
2. **Test Networks**: Use testnet ETH for testing (no real value)
3. **Local Development**: Hardhat provides 20 pre-funded accounts with 10,000 ETH each
4. **Gas Fees**: All transactions require gas fees paid in ETH

## 📂 Project Structure

```
crowdfunding_system/
├── contracts/           # Solidity smart contracts
│   └── CrowdFunding.sol
├── scripts/            # Deployment scripts
│   └── deploy.js
├── Context/            # React Context & Web3 logic
│   ├── CroudFunding.js
│   └── contants.js
├── Components/         # React components
│   ├── NavBar.jsx
│   ├── Hero.jsx
│   ├── Card.jsx
│   ├── PupUp.jsx
│   └── Footer.jsx
├── pages/              # Next.js pages
│   ├── index.js
│   ├── create-campaign.js
│   ├── campaigns.js
│   └── team.js
├── styles/             # CSS styles
├── public/             # Static assets
├── hardhat.config.js   # Hardhat configuration
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies
```

## 💡 Key Advantages Over Traditional Crowdfunding

1. **No Platform Fees**: Direct peer-to-peer transactions
2. **Global Access**: Anyone with a wallet can participate
3. **Transparency**: All transactions publicly verifiable
4. **Instant Transfers**: No waiting for platform payouts
5. **Censorship Resistant**: No central authority can block campaigns
6. **Trustless**: Smart contracts enforce rules automatically

