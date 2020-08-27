export const ContractABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "donator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "donationNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "LogNewDonation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "donator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "donationNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expeditureNumber",
        type: "uint256",
      },
    ],
    name: "LogNewExpendedDonation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "valueETH",
        type: "uint256",
      },
    ],
    name: "LogNewExpenditure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "donator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "donationNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "valueETH",
        type: "uint256",
      },
    ],
    name: "LogNewRefund",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "donationTracker",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "donations",
    outputs: [
      {
        internalType: "address",
        name: "donator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "valueExpendedETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "valueExpendedUSD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "valueRefundedETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "donationNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numExpenditures",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "expendedDonations",
    outputs: [
      {
        internalType: "address",
        name: "donator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "valueExpendedETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "valueExpendedUSD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expenditureNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "donationNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "platesDeployed",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "expenditures",
    outputs: [
      {
        internalType: "uint256",
        name: "valueExpendedETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "valueExpendedUSD",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "videoHash",
        type: "string",
      },
      {
        internalType: "string",
        name: "receiptHash",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numExpendedDonations",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "valueExpendedByDonations",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "platesDeployed",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestDonation",
    outputs: [
      {
        internalType: "address",
        name: "donator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxDonation",
    outputs: [
      {
        internalType: "address",
        name: "donator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextDonationToExpend",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "numDonationsByUser",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalDonationsETH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalExpendedETH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalExpendedUSD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalNumDonations",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalNumExpenditures",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalPlatesDeployed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    inputs: [],
    name: "donate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_videoHash",
        type: "string",
      },
      {
        internalType: "string",
        name: "_receiptHash",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_valueUSD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_valueETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_platesDeployed",
        type: "uint256",
      },
    ],
    name: "createExpenditure",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nextDonationToExpend",
        type: "uint256",
      },
    ],
    name: "setNextDonationToExpend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_donator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_valueExpendedETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_valueExpendedUSD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_donationNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_expeditureNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_platesDeployed",
        type: "uint256",
      },
    ],
    name: "createExpendedDonation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_donationNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_expenditureNumber",
        type: "uint256",
      },
    ],
    name: "getExpendedDonationIDForDonation",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_expenditureNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_expendedDonationNumber",
        type: "uint256",
      },
    ],
    name: "getExpendedDonationIDForExpenditure",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_donationNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_valueETHToRefund",
        type: "uint256",
      },
    ],
    name: "refundDonation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "x",
        type: "address",
      },
    ],
    name: "toAsciiString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_base",
        type: "string",
      },
      {
        internalType: "string",
        name: "_value",
        type: "string",
      },
    ],
    name: "concat",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalNumDonations",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalNumExpenditures",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalNumExpendedDonations",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_string",
        type: "string",
      },
    ],
    name: "isTextEmpty",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];
