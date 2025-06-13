import { MiniGame } from '../types';

export const miniGames: MiniGame[] = [
  {
    id: 'inflation-explorer',
    title: 'Inflation Explorer',
    description: 'Guess how prices have changed over time due to inflation',
    icon: 'TrendingUp',
    color: 'from-red-400 to-orange-500'
  },
  {
    id: 'spend-or-save',
    title: 'Spend or Save',
    description: 'Make smart financial decisions in real-life scenarios',
    icon: 'Scale',
    color: 'from-green-400 to-emerald-500'
  },
  {
    id: 'rapid-fire',
    title: 'Rapid Fire',
    description: 'Quick-fire financial questions to test your knowledge',
    icon: 'Zap',
    color: 'from-yellow-400 to-amber-500'
  },
  {
    id: 'budget-builder',
    title: 'Budget Builder',
    description: 'Allocate your monthly income across different categories using the 50/30/20 rule',
    icon: 'Calculator',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'receipt-rumble',
    title: 'Receipt Rumble',
    description: 'Spot wasteful spending and find cheaper alternatives in shopping receipts',
    icon: 'Receipt',
    color: 'from-purple-400 to-violet-500'
  },
  {
    id: 'bank-tycoon',
    title: 'Bank Tycoon',
    description: 'Manage your bank account, set goals, and avoid penalties while earning interest',
    icon: 'Building2',
    color: 'from-emerald-400 to-green-500'
  },
  {
    id: 'credit-score-quest',
    title: 'Credit Score Quest',
    description: 'Build your credit score from 600 to excellent through smart financial decisions',
    icon: 'Award',
    color: 'from-pink-400 to-rose-500'
  }
];

export const inflationData = [
  {
    item: 'Movie ticket',
    currentPrice: 12,
    pastPrice: 3,
    year: 1980,
    explanation: 'Movie tickets have increased significantly due to inflation and enhanced theater experiences.'
  },
  {
    item: 'Gallon of gas',
    currentPrice: 3.5,
    pastPrice: 1.25,
    year: 1990,
    explanation: 'Gas prices fluctuate due to inflation, supply/demand, and global economic factors.'
  },
  {
    item: 'College tuition (annual)',
    currentPrice: 35000,
    pastPrice: 8000,
    year: 1985,
    explanation: 'College costs have risen much faster than general inflation, making education financing crucial.'
  },
  {
    item: 'Average home price',
    currentPrice: 350000,
    pastPrice: 120000,
    year: 1995,
    explanation: 'Housing prices have increased due to inflation, population growth, and changing market dynamics.'
  },
  {
    item: 'Loaf of bread',
    currentPrice: 2.5,
    pastPrice: 0.89,
    year: 1985,
    explanation: 'Food prices have steadily increased with inflation, though they remain relatively affordable.'
  },
  {
    item: 'New car (average)',
    currentPrice: 35000,
    pastPrice: 16000,
    year: 1995,
    explanation: 'Car prices have increased due to inflation and improved technology and safety features.'
  },
  {
    item: 'Postage stamp',
    currentPrice: 0.66,
    pastPrice: 0.25,
    year: 1988,
    explanation: 'Postal rates have increased with inflation and changing mail volumes.'
  },
  {
    item: 'McDonald\'s Big Mac',
    currentPrice: 5.5,
    pastPrice: 2.19,
    year: 1990,
    explanation: 'Fast food prices reflect inflation in food costs, labor, and real estate.'
  }
];

export const spendOrSaveScenarios = [
  {
    scenario: 'You just got a $500 bonus at work. You\'ve been wanting new AirPods for $200.',
    options: [
      { text: 'Buy the AirPods immediately', isCorrect: false, feedback: 'Consider your financial goals first!' },
      { text: 'Save the entire bonus', isCorrect: true, feedback: 'Great choice! Building your savings is wise.' },
      { text: 'Buy AirPods and save the rest', isCorrect: true, feedback: 'Balanced approach - reward yourself but save too!' },
      { text: 'Spend it all on entertainment', isCorrect: false, feedback: 'This won\'t help your financial future.' }
    ]
  },
  {
    scenario: 'Your friend invites you to an expensive dinner that costs $80. You have $200 in your fun money budget.',
    options: [
      { text: 'Go and enjoy without thinking', isCorrect: false, feedback: 'Always consider your budget first!' },
      { text: 'Decline to save money', isCorrect: true, feedback: 'Smart to prioritize your financial goals!' },
      { text: 'Suggest a cheaper alternative', isCorrect: true, feedback: 'Perfect! You can socialize within your budget.' },
      { text: 'Go but skip meals for the rest of the week', isCorrect: false, feedback: 'Never compromise your basic needs!' }
    ]
  },
  {
    scenario: 'You see a 50% off sale on a jacket you\'ve been wanting. It\'s $150 (originally $300).',
    options: [
      { text: 'Buy it immediately - it\'s a great deal!', isCorrect: false, feedback: 'A discount doesn\'t make it necessary!' },
      { text: 'Wait 24 hours to think about it', isCorrect: true, feedback: 'Smart! Waiting helps avoid impulse purchases.' },
      { text: 'Check if you really need it and can afford it', isCorrect: true, feedback: 'Excellent! Always evaluate need vs. want.' },
      { text: 'Buy two since they\'re on sale', isCorrect: false, feedback: 'This defeats the purpose of saving money!' }
    ]
  },
  {
    scenario: 'Your car needs $800 in repairs, but you only have $500 in your emergency fund.',
    options: [
      { text: 'Put it on a credit card', isCorrect: false, feedback: 'This creates debt and interest charges.' },
      { text: 'Get a second opinion and explore payment plans', isCorrect: true, feedback: 'Smart! Always explore options before borrowing.' },
      { text: 'Ignore the problem and hope it goes away', isCorrect: false, feedback: 'This could lead to bigger, more expensive problems!' },
      { text: 'Borrow from family if possible', isCorrect: true, feedback: 'Family loans can be better than credit card debt.' }
    ]
  },
  {
    scenario: 'You get a tax refund of $1,200. You have $2,000 in credit card debt at 18% interest.',
    options: [
      { text: 'Use it all for a vacation', isCorrect: false, feedback: 'High-interest debt should be your priority!' },
      { text: 'Pay down the credit card debt', isCorrect: true, feedback: 'Excellent! Paying off high-interest debt is like earning 18%!' },
      { text: 'Put half toward debt, half in savings', isCorrect: true, feedback: 'Good balance, though debt payoff might be better.' },
      { text: 'Invest it all in stocks', isCorrect: false, feedback: 'Pay off high-interest debt before investing!' }
    ]
  },
  {
    scenario: 'Your smartphone works fine, but a new model just came out with better features for $1,000.',
    options: [
      { text: 'Upgrade immediately', isCorrect: false, feedback: 'If your phone works, this is likely unnecessary spending.' },
      { text: 'Wait until your current phone breaks', isCorrect: true, feedback: 'Smart! Use items until they need replacing.' },
      { text: 'Trade in your old phone to reduce the cost', isCorrect: true, feedback: 'If you must upgrade, this reduces the financial impact.' },
      { text: 'Finance it with monthly payments', isCorrect: false, feedback: 'Financing consumer goods creates unnecessary debt.' }
    ]
  },
  {
    scenario: 'You want to start a side business that requires $2,000 in startup costs. You have $3,000 saved.',
    options: [
      { text: 'Use all your savings for the business', isCorrect: false, feedback: 'Keep some emergency funds for unexpected expenses!' },
      { text: 'Research thoroughly and start small', isCorrect: true, feedback: 'Great approach! Minimize risk while pursuing opportunities.' },
      { text: 'Forget about it - too risky', isCorrect: false, feedback: 'Calculated risks can lead to financial growth!' },
      { text: 'Borrow money to keep your savings intact', isCorrect: true, feedback: 'This preserves your emergency fund while pursuing opportunity.' }
    ]
  },
  {
    scenario: 'Your rent is increasing by $200/month. Your current housing costs are 25% of income.',
    options: [
      { text: 'Just pay the increase', isCorrect: false, feedback: 'This might push housing costs too high!' },
      { text: 'Look for a cheaper place', isCorrect: true, feedback: 'Smart! Keep housing costs reasonable.' },
      { text: 'Negotiate with your landlord', isCorrect: true, feedback: 'Good strategy! You might be able to reduce the increase.' },
      { text: 'Get a roommate to split costs', isCorrect: true, feedback: 'Creative solution to manage housing expenses!' }
    ]
  }
];

export const rapidFireQuestions = [
  {
    question: 'What does APR stand for?',
    options: ['Annual Percentage Rate', 'Average Price Range', 'Account Payment Ratio', 'Annual Profit Return'],
    correct: 0
  },
  {
    question: 'Which builds credit history?',
    options: ['Debit card use', 'Cash payments', 'Credit card payments', 'Bank transfers'],
    correct: 2
  },
  {
    question: 'Best time to start investing?',
    options: ['When you\'re 30', 'When you have $10,000', 'As early as possible', 'After buying a house'],
    correct: 2
  },
  {
    question: 'What\'s a good debt-to-income ratio?',
    options: ['Below 36%', 'Below 50%', 'Below 75%', 'It doesn\'t matter'],
    correct: 0
  },
  {
    question: 'Emergency fund should cover how many months?',
    options: ['1 month', '3-6 months', '12 months', '2 years'],
    correct: 1
  },
  {
    question: 'What is compound interest?',
    options: ['Simple interest', 'Interest on interest', 'Bank fees', 'Loan payments'],
    correct: 1
  },
  {
    question: 'Ideal credit utilization ratio?',
    options: ['Below 10%', 'Below 30%', 'Below 50%', 'Below 90%'],
    correct: 1
  },
  {
    question: 'What is diversification?',
    options: ['Buying one stock', 'Spreading investments', 'Saving money', 'Paying debt'],
    correct: 1
  },
  {
    question: 'FDIC insures deposits up to?',
    options: ['$100,000', '$250,000', '$500,000', '$1,000,000'],
    correct: 1
  },
  {
    question: 'What is the 50/30/20 rule?',
    options: ['Age formula', 'Investment strategy', 'Budgeting guideline', 'Credit score range'],
    correct: 2
  },
  {
    question: 'What affects credit score most?',
    options: ['Income level', 'Payment history', 'Age', 'Job title'],
    correct: 1
  },
  {
    question: 'What is dollar-cost averaging?',
    options: ['Buying low, selling high', 'Regular investing', 'Currency exchange', 'Price comparison'],
    correct: 1
  },
  {
    question: 'What is a 401(k)?',
    options: ['Bank account', 'Retirement plan', 'Credit card', 'Insurance policy'],
    correct: 1
  },
  {
    question: 'What is inflation?',
    options: ['Prices going down', 'Prices staying same', 'Prices going up', 'Stock market crash'],
    correct: 2
  },
  {
    question: 'What is a mutual fund?',
    options: ['Single stock', 'Pooled investments', 'Bank loan', 'Insurance product'],
    correct: 1
  }
];

// Budget Builder Game Data
export const budgetCategories = [
  { id: 'housing', name: 'Housing (Rent/Mortgage)', type: 'need', recommended: 25, icon: 'Home' },
  { id: 'food', name: 'Food & Groceries', type: 'need', recommended: 15, icon: 'ShoppingCart' },
  { id: 'transportation', name: 'Transportation', type: 'need', recommended: 10, icon: 'Car' },
  { id: 'utilities', name: 'Utilities & Phone', type: 'need', recommended: 8, icon: 'Zap' },
  { id: 'insurance', name: 'Insurance', type: 'need', recommended: 5, icon: 'Shield' },
  { id: 'entertainment', name: 'Entertainment', type: 'want', recommended: 10, icon: 'Gamepad2' },
  { id: 'dining', name: 'Dining Out', type: 'want', recommended: 8, icon: 'UtensilsCrossed' },
  { id: 'shopping', name: 'Shopping & Clothes', type: 'want', recommended: 7, icon: 'ShoppingBag' },
  { id: 'hobbies', name: 'Hobbies & Subscriptions', type: 'want', recommended: 5, icon: 'Music' },
  { id: 'savings', name: 'Emergency Savings', type: 'savings', recommended: 10, icon: 'PiggyBank' },
  { id: 'retirement', name: 'Retirement/401k', type: 'savings', recommended: 10, icon: 'TrendingUp' }
];

// Receipt Rumble Game Data
export const receiptData = [
  {
    id: 1,
    store: 'QuickMart',
    items: [
      { name: 'Brand Name Cereal', price: 6.99, category: 'food', wasteful: true, alternative: 'Store Brand Cereal ($3.49)' },
      { name: 'Energy Drink (4-pack)', price: 12.99, category: 'beverage', wasteful: true, alternative: 'Water or Coffee ($2.00)' },
      { name: 'Organic Bananas', price: 3.49, category: 'food', wasteful: false, alternative: null },
      { name: 'Designer Water Bottle', price: 24.99, category: 'lifestyle', wasteful: true, alternative: 'Regular Water Bottle ($8.99)' },
      { name: 'Bread', price: 2.99, category: 'food', wasteful: false, alternative: null },
      { name: 'Impulse Candy Bar', price: 2.49, category: 'snack', wasteful: true, alternative: 'Skip it (Save $2.49)' }
    ],
    total: 53.94
  },
  {
    id: 2,
    store: 'TechWorld',
    items: [
      { name: 'Phone Case', price: 15.99, category: 'tech', wasteful: false, alternative: null },
      { name: 'Premium HDMI Cable', price: 49.99, category: 'tech', wasteful: true, alternative: 'Basic HDMI Cable ($8.99)' },
      { name: 'Wireless Charger', price: 35.99, category: 'tech', wasteful: false, alternative: null },
      { name: 'Extended Warranty', price: 79.99, category: 'service', wasteful: true, alternative: 'Manufacturer Warranty (Free)' }
    ],
    total: 181.96
  },
  {
    id: 3,
    store: 'FashionPlus',
    items: [
      { name: 'Designer Jeans', price: 180.00, category: 'clothing', wasteful: true, alternative: 'Regular Jeans ($45.00)' },
      { name: 'Basic T-Shirt', price: 12.99, category: 'clothing', wasteful: false, alternative: null },
      { name: 'Luxury Perfume', price: 120.00, category: 'beauty', wasteful: true, alternative: 'Drugstore Perfume ($25.00)' },
      { name: 'Socks (3-pack)', price: 8.99, category: 'clothing', wasteful: false, alternative: null },
      { name: 'Trendy Accessories', price: 45.00, category: 'accessories', wasteful: true, alternative: 'Skip impulse buy (Save $45.00)' }
    ],
    total: 366.98
  },
  {
    id: 4,
    store: 'CoffeeCorner',
    items: [
      { name: 'Daily Latte', price: 5.50, category: 'beverage', wasteful: true, alternative: 'Home Coffee ($0.50)' },
      { name: 'Pastry', price: 4.25, category: 'food', wasteful: true, alternative: 'Home Breakfast ($1.00)' },
      { name: 'Bottled Water', price: 2.50, category: 'beverage', wasteful: true, alternative: 'Tap Water (Free)' },
      { name: 'Tip', price: 2.00, category: 'service', wasteful: false, alternative: null }
    ],
    total: 14.25
  },
  {
    id: 5,
    store: 'HomeGoods',
    items: [
      { name: 'Cleaning Supplies', price: 18.99, category: 'household', wasteful: false, alternative: null },
      { name: 'Decorative Candles', price: 35.00, category: 'decor', wasteful: true, alternative: 'Basic Candles ($8.00)' },
      { name: 'Kitchen Gadget', price: 29.99, category: 'kitchen', wasteful: true, alternative: 'Use existing tools (Save $29.99)' },
      { name: 'Toilet Paper', price: 12.99, category: 'household', wasteful: false, alternative: null },
      { name: 'Impulse Magazine', price: 4.99, category: 'entertainment', wasteful: true, alternative: 'Read online (Free)' }
    ],
    total: 101.96
  }
];

// Bank Tycoon Game Data
export const bankScenarios = [
  {
    id: 1,
    title: 'Monthly Salary Deposit',
    description: 'Your salary of $3,000 has been deposited',
    action: 'deposit',
    amount: 3000,
    impact: 'positive'
  },
  {
    id: 2,
    title: 'ATM Withdrawal',
    description: 'You need $200 cash for the weekend',
    action: 'withdraw',
    amount: 200,
    impact: 'neutral'
  },
  {
    id: 3,
    title: 'Automatic Savings Transfer',
    description: 'Set up automatic transfer of $300 to savings',
    action: 'withdraw',
    amount: 300,
    impact: 'positive'
  },
  {
    id: 4,
    title: 'Overdraft Situation',
    description: 'Your account balance is $50. You try to spend $75.',
    action: 'overdraft',
    amount: 75,
    impact: 'negative',
    penalty: 35
  },
  {
    id: 5,
    title: 'Interest Earned',
    description: 'Monthly interest on your savings account',
    action: 'interest',
    amount: 25,
    impact: 'positive'
  },
  {
    id: 6,
    title: 'Emergency Car Repair',
    description: 'Unexpected car repair costs $800',
    action: 'withdraw',
    amount: 800,
    impact: 'neutral'
  },
  {
    id: 7,
    title: 'Freelance Income',
    description: 'Extra income from side work: $500',
    action: 'deposit',
    amount: 500,
    impact: 'positive'
  },
  {
    id: 8,
    title: 'Large Purchase Temptation',
    description: 'You want to buy a $1,200 laptop but only have $900',
    action: 'overdraft',
    amount: 1200,
    impact: 'negative',
    penalty: 35
  },
  {
    id: 9,
    title: 'Tax Refund',
    description: 'Government tax refund of $1,500',
    action: 'deposit',
    amount: 1500,
    impact: 'positive'
  },
  {
    id: 10,
    title: 'Investment Opportunity',
    description: 'Transfer $1,000 to investment account',
    action: 'withdraw',
    amount: 1000,
    impact: 'positive'
  }
];

// Credit Score Quest Game Data
export const creditActions = [
  {
    id: 1,
    action: 'Pay credit card bill on time',
    scoreChange: +15,
    description: 'Payment history is 35% of your credit score',
    category: 'payment'
  },
  {
    id: 2,
    action: 'Miss a credit card payment',
    scoreChange: -25,
    description: 'Late payments significantly hurt your credit score',
    category: 'payment'
  },
  {
    id: 3,
    action: 'Max out credit card',
    scoreChange: -20,
    description: 'High credit utilization (above 30%) lowers your score',
    category: 'utilization'
  },
  {
    id: 4,
    action: 'Pay down credit card balance',
    scoreChange: +10,
    description: 'Lower credit utilization improves your score',
    category: 'utilization'
  },
  {
    id: 5,
    action: 'Open a new credit card',
    scoreChange: -5,
    description: 'New accounts temporarily lower your average account age',
    category: 'accounts'
  },
  {
    id: 6,
    action: 'Keep old credit card open',
    scoreChange: +8,
    description: 'Longer credit history improves your score',
    category: 'history'
  },
  {
    id: 7,
    action: 'Apply for multiple loans',
    scoreChange: -15,
    description: 'Multiple hard inquiries in short time hurt your score',
    category: 'inquiries'
  },
  {
    id: 8,
    action: 'Pay off a loan completely',
    scoreChange: +12,
    description: 'Completing loan payments shows responsible credit management',
    category: 'payment'
  },
  {
    id: 9,
    action: 'Become an authorized user',
    scoreChange: +6,
    description: 'Being added to someone\'s good account can help your score',
    category: 'accounts'
  },
  {
    id: 10,
    action: 'Dispute an error on credit report',
    scoreChange: +18,
    description: 'Removing errors can significantly improve your score',
    category: 'payment'
  },
  {
    id: 11,
    action: 'Close your oldest credit card',
    scoreChange: -12,
    description: 'Closing old accounts reduces your credit history length',
    category: 'history'
  },
  {
    id: 12,
    action: 'Set up automatic payments',
    scoreChange: +8,
    description: 'Automatic payments help ensure you never miss a payment',
    category: 'payment'
  },
  {
    id: 13,
    action: 'Use credit card for large purchase',
    scoreChange: -8,
    description: 'Large purchases increase your credit utilization ratio',
    category: 'utilization'
  },
  {
    id: 14,
    action: 'Request credit limit increase',
    scoreChange: +5,
    description: 'Higher limits can lower your utilization ratio',
    category: 'utilization'
  },
  {
    id: 15,
    action: 'Make multiple payments per month',
    scoreChange: +7,
    description: 'Multiple payments keep your balance low throughout the month',
    category: 'utilization'
  }
];