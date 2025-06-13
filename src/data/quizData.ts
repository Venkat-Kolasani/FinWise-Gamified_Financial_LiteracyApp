import { QuizLevel } from '../types';

export const quizLevels: QuizLevel[] = [
  {
    id: 'budgeting',
    title: 'Budgeting Basics',
    description: 'Learn the fundamentals of managing your money',
    icon: 'PieChart',
    color: 'from-emerald-400 to-teal-500',
    questions: [
      {
        id: 'b1',
        question: 'What is the 50/30/20 rule in budgeting?',
        options: [
          '50% needs, 30% wants, 20% savings',
          '50% savings, 30% needs, 20% wants',
          '50% wants, 30% needs, 20% savings',
          '50% investments, 30% savings, 20% spending'
        ],
        correctAnswer: 0,
        explanation: 'The 50/30/20 rule suggests allocating 50% of income to needs, 30% to wants, and 20% to savings and debt repayment.',
        topic: 'budgeting',
        level: 1
      },
      {
        id: 'b2',
        question: 'Which expense is considered a "need" rather than a "want"?',
        options: [
          'Netflix subscription',
          'Rent payment',
          'Dining out',
          'New clothes for fashion'
        ],
        correctAnswer: 1,
        explanation: 'Rent is a basic necessity for shelter, while the others are typically considered wants or discretionary spending.',
        topic: 'budgeting',
        level: 1
      },
      {
        id: 'b3',
        question: 'What should you do first when creating a budget?',
        options: [
          'Set spending limits',
          'Track your current spending',
          'Open a savings account',
          'Cut all unnecessary expenses'
        ],
        correctAnswer: 1,
        explanation: 'Before making changes, you need to understand where your money currently goes by tracking your spending patterns.',
        topic: 'budgeting',
        level: 1
      },
      {
        id: 'b4',
        question: 'What is zero-based budgeting?',
        options: [
          'Having zero money left over',
          'Starting with zero and adding expenses',
          'Assigning every dollar a purpose',
          'Spending nothing for a month'
        ],
        correctAnswer: 2,
        explanation: 'Zero-based budgeting means giving every dollar of income a specific purpose, whether for expenses, savings, or debt payment.',
        topic: 'budgeting',
        level: 1
      },
      {
        id: 'b5',
        question: 'How often should you review and adjust your budget?',
        options: [
          'Once a year',
          'Every 6 months',
          'Monthly',
          'Only when income changes'
        ],
        correctAnswer: 2,
        explanation: 'Monthly budget reviews help you stay on track, adjust for unexpected expenses, and improve your budgeting skills.',
        topic: 'budgeting',
        level: 1
      },
      {
        id: 'b6',
        question: 'What percentage of income should typically go to housing costs?',
        options: [
          'No more than 20%',
          'No more than 28%',
          'No more than 40%',
          'No more than 50%'
        ],
        correctAnswer: 1,
        explanation: 'The general rule is that housing costs should not exceed 28% of gross monthly income to maintain financial stability.',
        topic: 'budgeting',
        level: 1
      },
      {
        id: 'b7',
        question: 'What is lifestyle inflation?',
        options: [
          'When prices of goods increase',
          'When you increase spending as income rises',
          'When your budget gets more complex',
          'When you move to an expensive city'
        ],
        correctAnswer: 1,
        explanation: 'Lifestyle inflation occurs when people increase their spending proportionally (or more) as their income increases, preventing wealth building.',
        topic: 'budgeting',
        level: 1
      },
      {
        id: 'b8',
        question: 'Which budgeting method involves using cash for different spending categories?',
        options: [
          'Zero-based budgeting',
          'Envelope method',
          '50/30/20 rule',
          'Pay-yourself-first'
        ],
        correctAnswer: 1,
        explanation: 'The envelope method involves allocating cash to different spending categories in physical or virtual "envelopes" to control spending.',
        topic: 'budgeting',
        level: 1
      }
    ]
  },
  {
    id: 'saving',
    title: 'Saving & Banking',
    description: 'Build your foundation for financial security',
    icon: 'PiggyBank',
    color: 'from-blue-400 to-indigo-500',
    questions: [
      {
        id: 's1',
        question: 'What is compound interest?',
        options: [
          'Interest paid only on the principal amount',
          'Interest earned on both principal and previously earned interest',
          'A type of loan interest',
          'Interest that decreases over time'
        ],
        correctAnswer: 1,
        explanation: 'Compound interest means you earn interest not just on your original money, but also on the interest you\'ve already earned.',
        topic: 'saving',
        level: 2
      },
      {
        id: 's2',
        question: 'How much should you aim to save in an emergency fund?',
        options: [
          '1-2 months of expenses',
          '3-6 months of expenses',
          '1 year of expenses',
          'Whatever you can afford'
        ],
        correctAnswer: 1,
        explanation: 'Financial experts recommend saving 3-6 months of living expenses for emergencies to provide adequate financial security.',
        topic: 'saving',
        level: 2
      },
      {
        id: 's3',
        question: 'What type of account typically offers the highest interest rate?',
        options: [
          'Checking account',
          'Basic savings account',
          'High-yield savings account',
          'Certificate of deposit (CD)'
        ],
        correctAnswer: 3,
        explanation: 'CDs typically offer higher interest rates because you agree to leave your money untouched for a specific period.',
        topic: 'saving',
        level: 2
      },
      {
        id: 's4',
        question: 'What is the main difference between a checking and savings account?',
        options: [
          'Checking accounts earn more interest',
          'Savings accounts are for daily transactions',
          'Checking accounts are for daily use, savings for storing money',
          'There is no difference'
        ],
        correctAnswer: 2,
        explanation: 'Checking accounts are designed for frequent transactions, while savings accounts are meant for storing money and earning interest.',
        topic: 'saving',
        level: 2
      },
      {
        id: 's5',
        question: 'What does APY stand for?',
        options: [
          'Annual Percentage Yield',
          'Average Payment Year',
          'Annual Principal Yield',
          'Adjusted Percentage Year'
        ],
        correctAnswer: 0,
        explanation: 'APY (Annual Percentage Yield) shows the real rate of return on savings accounts, including compound interest effects.',
        topic: 'saving',
        level: 2
      },
      {
        id: 's6',
        question: 'What is the "pay yourself first" principle?',
        options: [
          'Pay your bills before anything else',
          'Save money before paying any expenses',
          'Pay off debt before saving',
          'Spend on yourself before others'
        ],
        correctAnswer: 1,
        explanation: 'Pay yourself first means setting aside savings before paying other expenses, treating savings as a non-negotiable expense.',
        topic: 'saving',
        level: 2
      },
      {
        id: 's7',
        question: 'What is FDIC insurance?',
        options: [
          'Insurance for your car',
          'Protection for bank deposits up to $250,000',
          'Health insurance for federal employees',
          'Investment protection'
        ],
        correctAnswer: 1,
        explanation: 'FDIC insurance protects bank deposits up to $250,000 per depositor, per bank, ensuring your money is safe even if the bank fails.',
        topic: 'saving',
        level: 2
      },
      {
        id: 's8',
        question: 'What is the rule of 72?',
        options: [
          'Save 72% of your income',
          'A way to estimate how long it takes money to double',
          'Retire at age 72',
          'Work 72 hours per week'
        ],
        correctAnswer: 1,
        explanation: 'The rule of 72 helps estimate how long it takes for money to double: divide 72 by the interest rate to get the approximate years.',
        topic: 'saving',
        level: 2
      }
    ]
  },
  {
    id: 'credit',
    title: 'Credit & Loans',
    description: 'Understand borrowing and credit scores',
    icon: 'CreditCard',
    color: 'from-purple-400 to-pink-500',
    questions: [
      {
        id: 'c1',
        question: 'What factors affect your credit score?',
        options: [
          'Only payment history',
          'Payment history, credit utilization, length of credit history',
          'Only the amount of debt you have',
          'Your income level'
        ],
        correctAnswer: 1,
        explanation: 'Credit scores consider payment history (35%), credit utilization (30%), length of credit history (15%), and other factors.',
        topic: 'credit',
        level: 3
      },
      {
        id: 'c2',
        question: 'What is a good credit utilization ratio?',
        options: [
          'Below 30%',
          'Below 50%',
          'Below 70%',
          'It doesn\'t matter'
        ],
        correctAnswer: 0,
        explanation: 'Keeping your credit utilization below 30% of your available credit limit helps maintain a good credit score.',
        topic: 'credit',
        level: 3
      },
      {
        id: 'c3',
        question: 'What happens if you only make minimum payments on credit cards?',
        options: [
          'You\'ll pay off the debt quickly',
          'You\'ll pay much more in interest over time',
          'It has no impact on your credit score',
          'The interest rate will decrease'
        ],
        correctAnswer: 1,
        explanation: 'Making only minimum payments means most goes to interest, extending payoff time and increasing total cost significantly.',
        topic: 'credit',
        level: 3
      },
      {
        id: 'c4',
        question: 'What is APR on a credit card?',
        options: [
          'Annual Percentage Rate - the yearly cost of borrowing',
          'Average Payment Required',
          'Annual Principal Reduction',
          'Automatic Payment Rate'
        ],
        correctAnswer: 0,
        explanation: 'APR (Annual Percentage Rate) represents the yearly cost of borrowing money, including interest and fees.',
        topic: 'credit',
        level: 3
      },
      {
        id: 'c5',
        question: 'What is a credit report?',
        options: [
          'A monthly bill from credit card companies',
          'A detailed record of your credit history',
          'A government tax document',
          'A bank statement'
        ],
        correctAnswer: 1,
        explanation: 'A credit report is a detailed record of your credit history, including accounts, payment history, and public records.',
        topic: 'credit',
        level: 3
      },
      {
        id: 'c6',
        question: 'How often can you check your credit report for free?',
        options: [
          'Once per month',
          'Once per year from each bureau',
          'Only when applying for credit',
          'Never for free'
        ],
        correctAnswer: 1,
        explanation: 'You can get one free credit report annually from each of the three major credit bureaus through annualcreditreport.com.',
        topic: 'credit',
        level: 3
      },
      {
        id: 'c7',
        question: 'What is a secured credit card?',
        options: [
          'A card that requires a cash deposit as collateral',
          'A card with extra security features',
          'A card only for wealthy people',
          'A card that cannot be stolen'
        ],
        correctAnswer: 0,
        explanation: 'A secured credit card requires a cash deposit that serves as collateral and typically becomes your credit limit.',
        topic: 'credit',
        level: 3
      },
      {
        id: 'c8',
        question: 'What is the difference between a hard and soft credit inquiry?',
        options: [
          'Hard inquiries are for loans, soft are for credit cards',
          'Hard inquiries affect credit score, soft inquiries don\'t',
          'Soft inquiries are more thorough',
          'There is no difference'
        ],
        correctAnswer: 1,
        explanation: 'Hard inquiries (for credit applications) can temporarily lower your credit score, while soft inquiries (like checking your own score) don\'t affect it.',
        topic: 'credit',
        level: 3
      }
    ]
  },
  {
    id: 'investing',
    title: 'Investing Basics',
    description: 'Start your journey to building wealth',
    icon: 'TrendingUp',
    color: 'from-orange-400 to-red-500',
    questions: [
      {
        id: 'i1',
        question: 'What is diversification in investing?',
        options: [
          'Putting all money in one stock',
          'Spreading investments across different assets',
          'Only investing in bonds',
          'Timing the market perfectly'
        ],
        correctAnswer: 1,
        explanation: 'Diversification means spreading your investments across different types of assets to reduce risk.',
        topic: 'investing',
        level: 4
      },
      {
        id: 'i2',
        question: 'What is the relationship between risk and potential return?',
        options: [
          'Higher risk usually means higher potential returns',
          'Risk and return are unrelated',
          'Lower risk always means higher returns',
          'Risk guarantees returns'
        ],
        correctAnswer: 0,
        explanation: 'Generally, investments with higher potential returns come with higher risk, but risk doesn\'t guarantee returns.',
        topic: 'investing',
        level: 4
      },
      {
        id: 'i3',
        question: 'What is dollar-cost averaging?',
        options: [
          'Investing a lump sum all at once',
          'Investing the same amount regularly over time',
          'Only buying when prices are low',
          'Averaging the cost of different stocks'
        ],
        correctAnswer: 1,
        explanation: 'Dollar-cost averaging involves investing a fixed amount regularly, which can help reduce the impact of market volatility.',
        topic: 'investing',
        level: 4
      },
      {
        id: 'i4',
        question: 'What is a stock?',
        options: [
          'A loan to a company',
          'Ownership share in a company',
          'A government bond',
          'A savings account'
        ],
        correctAnswer: 1,
        explanation: 'A stock represents partial ownership in a company. When you buy stock, you become a shareholder.',
        topic: 'investing',
        level: 4
      },
      {
        id: 'i5',
        question: 'What is a bond?',
        options: [
          'Ownership in a company',
          'A loan you make to a government or corporation',
          'A type of savings account',
          'A mutual fund'
        ],
        correctAnswer: 1,
        explanation: 'A bond is essentially a loan you make to a government or corporation in exchange for regular interest payments.',
        topic: 'investing',
        level: 4
      },
      {
        id: 'i6',
        question: 'What is a mutual fund?',
        options: [
          'A single stock',
          'A pool of money from many investors used to buy various securities',
          'A type of bank account',
          'A government program'
        ],
        correctAnswer: 1,
        explanation: 'A mutual fund pools money from many investors to purchase a diversified portfolio of stocks, bonds, or other securities.',
        topic: 'investing',
        level: 4
      },
      {
        id: 'i7',
        question: 'What is the S&P 500?',
        options: [
          'A single company stock',
          'An index of 500 large US companies',
          'A type of bond',
          'A savings account'
        ],
        correctAnswer: 1,
        explanation: 'The S&P 500 is a stock market index that tracks the performance of 500 large publicly traded US companies.',
        topic: 'investing',
        level: 4
      },
      {
        id: 'i8',
        question: 'What is compound growth in investing?',
        options: [
          'Growing your investment by adding more money',
          'Earning returns on both your original investment and previous returns',
          'Investing in multiple companies',
          'Buying stocks at a discount'
        ],
        correctAnswer: 1,
        explanation: 'Compound growth occurs when you earn returns not just on your original investment, but also on all the returns you\'ve previously earned.',
        topic: 'investing',
        level: 4
      },
      {
        id: 'i9',
        question: 'What is a 401(k)?',
        options: [
          'A type of savings account',
          'An employer-sponsored retirement plan',
          'A government bond',
          'A type of loan'
        ],
        correctAnswer: 1,
        explanation: 'A 401(k) is an employer-sponsored retirement savings plan that often includes employer matching contributions.',
        topic: 'investing',
        level: 4
      },
      {
        id: 'i10',
        question: 'When is the best time to start investing?',
        options: [
          'When you have $10,000 saved',
          'After you turn 30',
          'As early as possible',
          'Only after paying off all debt'
        ],
        correctAnswer: 2,
        explanation: 'Starting early gives your investments more time to grow through compound returns, even if you start with small amounts.',
        topic: 'investing',
        level: 4
      }
    ]
  }
];