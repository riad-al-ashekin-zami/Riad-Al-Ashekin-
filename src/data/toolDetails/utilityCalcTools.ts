import { ToolRegistryItem } from './types';

export const utilityCalcTools: ToolRegistryItem[] = [
  // 26) Percentage Calculator (/percentage-calculator/)
  {
    id: 'percentage-calculator',
    name: 'Percentage Calculator',
    slug: 'percentage-calculator',
    path: '/percentage-calculator/',
    canonicalUrl: 'https://riadalashekin.com/percentage-calculator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Calculator',
    shortDescription:
      'Calculate X% of Y, find what percentage X is of Y, and compute percentage increase or decrease live with formulas shown.',
    seoTitle: 'Percentage Calculator - Calculate Percentages, Increase & Decrease | Riad Al Ashekin',
    metaDescription:
      'Calculate percentages online: X% of Y, X is what percent of Y, and percentage increase or decrease, with the formula shown.',
    h1: 'Percentage Calculator - Calculate Percentages, Increase & Decrease',
    intro:
      'Solve the three most common percentage questions side by side with live updates and explicit step-by-step formulas shown below every row. Runs locally in your browser with one-click copying.',
    howToUse: [
      'Pick the matching card: "What is X% of Y?", "X is what percent of Y?", or "Percentage Increase or Decrease".',
      'Type your numbers into the two inputs on that row.',
      'Read the live result and the substituted formula line immediately underneath.',
      'Click Copy next to a single answer or Copy All Results at the bottom.',
    ],
    features: [
      'Three live calculators: percentage of a number, percentage share, and percentage change',
      'Shows the exact arithmetic formula with your numbers plugged in',
      'Handles decimals, negative changes, and division-by-zero safety checks',
      'Per-row Copy buttons plus Copy All Results button',
    ],
    technicalExplanation: {
      heading: 'Transparent Arithmetic Formulas',
      body: 'Every row displays the formula evaluated directly in the code so students, analysts, and business owners can double-check rounding and steps.',
    },
    faqs: [
      {
        question: 'How do I calculate a percentage of a number?',
        answer:
          'Divide the percentage by 100 and multiply by the number: Result = (X / 100) × Y. For example, 15% of 240 equals (15 / 100) × 240 = 36.',
      },
      {
        question: 'How do I calculate percentage increase or decrease?',
        answer:
          'Subtract the starting number from the new number, divide by the starting number, and multiply by 100: Change % = ((New - Old) / Old) × 100. Positive numbers indicate an increase and negative numbers indicate a decrease.',
      },
      {
        question: 'What is the difference between a percentage and percentage points?',
        answer:
          'Percentage points measure the simple arithmetic difference between two percentages (for example, going from 10% to 15% is an increase of 5 percentage points). Relative percentage change compares the jump to the starting rate (from 10% to 15% is a 50% relative increase).',
      },
      {
        question: 'What happens if the denominator is zero?',
        answer:
          'When Y is 0 in Mode 2 or the starting value is 0 in Mode 3, division by zero is undefined, so the calculator safely displays "Undefined" instead of a broken number.',
      },
    ],
    relatedToolSlugs: ['discount-calculator', 'profit-margin-calculator', 'sales-tax-calculator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Percentage Calculator',
      howToUseSteps: [
        'Locate the calculation card you need: X% of Y, X is what % of Y, or Percentage Increase/Decrease.',
        'Enter your two numbers in the input boxes; results update as you type.',
        'Inspect the formula displayed below each row to verify the exact math.',
        'Click Copy next to any answer or Copy All Results at the bottom right.',
      ],
      checksOrShowsHeading: 'What the Percentage Calculator does',
      checksOrShowsIntro:
        'The calculator evaluates three distinct percentage formulas live inside your browser:',
      checksOrShowsPoints: [
        'Mode 1 (What is X% of Y?) uses (X / 100) × Y to compute a percentage slice of any total.',
        'Mode 2 (X is what percent of Y?) uses (X / Y) × 100 and displays Undefined when Y equals 0.',
        'Mode 3 (Percentage Increase or Decrease) uses ((New - Old) / Old) × 100 and prefixes positive increases with a plus sign.',
        'Displays the live formula beneath each card along with individual Copy and Copy All buttons.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample inputs across all three cards',
      exampleInput: 'Card 1: 15% of 240 | Card 2: 45 of 180 | Card 3: From 80 to 100',
      exampleOutputLabel: 'Calculated answers and formulas',
      exampleOutput:
        '1) (15 / 100) × 240 = 36\n2) (45 / 180) × 100 = 25%\n3) ((100 - 80) / 80) × 100 = +25%',
      exampleNote:
        'All three equations match the exact JavaScript arithmetic run inside the tool.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'How do I calculate a percentage of a number?',
          answer:
            'Divide the percentage by 100 and multiply by the number: Result = (X / 100) × Y. For example, 15% of 240 equals (15 / 100) × 240 = 36.',
        },
        {
          question: 'How do I calculate percentage increase or decrease?',
          answer:
            'Subtract the starting number from the new number, divide by the starting number, and multiply by 100: Change % = ((New - Old) / Old) × 100. Positive numbers indicate an increase and negative numbers indicate a decrease.',
        },
        {
          question: 'What is the difference between a percentage and percentage points?',
          answer:
            'Percentage points measure the simple arithmetic difference between two percentages (for example, going from 10% to 15% is an increase of 5 percentage points). Relative percentage change compares the jump to the starting rate (from 10% to 15% is a 50% relative increase).',
        },
        {
          question: 'What happens if the denominator is zero?',
          answer:
            'When Y is 0 in Mode 2 or the starting value is 0 in Mode 3, division by zero is undefined, so the calculator safely displays "Undefined" instead of a broken number.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['discount-calculator', 'profit-margin-calculator', 'sales-tax-calculator'],
    },
  },

  // 27) Age Calculator (/age-calculator/)
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    slug: 'age-calculator',
    path: '/age-calculator/',
    canonicalUrl: 'https://riadalashekin.com/age-calculator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Calculator',
    shortDescription:
      'Calculate exact chronological age in years, months, and days plus total months, total weeks, total days, and days until next birthday.',
    seoTitle: 'Age Calculator - Calculate Exact Age in Years, Months & Days | Riad Al Ashekin',
    metaDescription:
      'Calculate exact age from date of birth in years, months and days online. Also shows total days, weeks and the next birthday.',
    h1: 'Age Calculator - Calculate Exact Age in Years, Months & Days',
    intro:
      'Find an exact chronological age from any date of birth to today or any custom date. Shows years, months, and days alongside total elapsed months, weeks, exact UTC days, and the countdown to the next birthday.',
    howToUse: [
      'Enter or select the Date of Birth using the first date picker.',
      'Keep Calculate Age At Date set to today or pick a past or future target date.',
      'Read the Exact Age banner (years, months, days) and the four metric cards below it.',
      'Click Copy Result to copy the complete age breakdown.',
    ],
    features: [
      'Exact calendar breakdown in years, months, and days respecting month lengths and leap years',
      'Custom Calculate Age At Date picker for past or future age calculations',
      'Totals for elapsed months, weeks, exact UTC days, and days remaining until next birthday',
      'Clear error alert if the target date is earlier than the date of birth',
    ],
    technicalExplanation: {
      heading: 'Calendar Month-Borrowing and Exact UTC Day Count',
      body: 'Calendar age compares years, months, and day-of-month values directly, borrowing exact days from the preceding month when needed, while total days divide UTC millisecond difference by 86,400,000.',
    },
    faqs: [
      {
        question: 'How are leap years handled in the Age Calculator?',
        answer:
          'Calendar arithmetic uses real UTC dates (including February 29 in leap years), so total elapsed days count every 366-day leap year accurately and month borrowing uses actual days in each month (28, 29, 30, or 31).',
      },
      {
        question: 'Can I calculate age on a past or future date?',
        answer:
          'Yes. Edit the Calculate Age At Date input to any date on or after the date of birth—for example, to verify age on an enrollment deadline, event date, or historical milestone.',
      },
      {
        question: 'Why do different month lengths affect the day count?',
        answer:
          'Because months vary from 28 to 31 days, when the target day-of-month is smaller than the birth day-of-month, the calculator borrows the exact length of the preceding calendar month (28, 29, 30, or 31 days).',
      },
      {
        question: 'What formula computes Total Days and Next Birthday?',
        answer:
          'Total Days uses Math.round((End UTC ms - Start UTC ms) / 86,400,000), Total Weeks uses Math.floor(Total Days / 7), and Next Birthday measures days to the next occurrence of the birth month and day.',
      },
    ],
    relatedToolSlugs: ['date-difference-calculator', 'countdown-timer', 'unix-timestamp-converter'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Age Calculator',
      howToUseSteps: [
        'Select your Date of Birth in the left date input using YYYY-MM-DD format or the browser date picker.',
        'Leave Calculate Age At Date set to today’s date, or select any custom past or future date in the right input.',
        'Read the purple Exact Age banner showing years, months, and days, along with the four metric cards underneath.',
        'Verify the active Formula Box at the bottom and click Copy Result to copy the complete age breakdown.',
      ],
      checksOrShowsHeading: 'What the Age Calculator does',
      checksOrShowsIntro:
        'Running exact UTC calendar arithmetic directly inside your browser, the Age Calculator reports five metrics and validates date order:',
      checksOrShowsPoints: [
        'Computes chronological years, months, and days by comparing UTC calendar fields directly and borrowing the exact length of the preceding month (28, 29, 30, or 31 days) whenever target day is smaller than birth day.',
        'Computes Total Months as (Years × 12) + Months for an easy cumulative month count.',
        'Computes Total Days as Math.round((End UTC ms - Birth UTC ms) / 86,400,000) and Total Weeks as Math.floor(Total Days / 7).',
        'Calculates days remaining until the next anniversary of your birth month and day, and warns clearly if Calculate Age At Date precedes Date of Birth.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample dates',
      exampleInput: 'Date of Birth: 2000-03-15 | Calculate Age At Date: 2026-06-20',
      exampleOutputLabel: 'Calculated age metrics',
      exampleOutput:
        'Exact Age: 26y 3m 5d\nTotal Months: 315 | Total Weeks: 1,370 | Total Days: 9,593\nNext Birthday: 268 days',
      exampleNote:
        'All numbers update live using calendar month borrowing and elapsed UTC millisecond division (86,400,000 ms per day), with one-click Copy Result.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'How are leap years handled in the Age Calculator?',
          answer:
            'Calendar arithmetic uses real UTC dates (including February 29 in leap years), so total elapsed days count every 366-day leap year accurately and month borrowing uses actual days in each month (28, 29, 30, or 31).',
        },
        {
          question: 'Can I calculate age on a past or future date?',
          answer:
            'Yes. Edit the Calculate Age At Date input to any date on or after the date of birth—for example, to verify age on an enrollment deadline, event date, or historical milestone.',
        },
        {
          question: 'Why do different month lengths affect the day count?',
          answer:
            'Because months vary from 28 to 31 days, when the target day-of-month is smaller than the birth day-of-month, the calculator borrows the exact length of the preceding calendar month (28, 29, 30, or 31 days).',
        },
        {
          question: 'What formula computes Total Days and Next Birthday?',
          answer:
            'Total Days uses Math.round((End UTC ms - Start UTC ms) / 86,400,000), Total Weeks uses Math.floor(Total Days / 7), and Next Birthday measures days to the next occurrence of the birth month and day.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['date-difference-calculator', 'countdown-timer', 'unix-timestamp-converter'],
    },
  },

  // 28) Date Difference Calculator (/date-difference-calculator/)
  {
    id: 'date-difference-calculator',
    name: 'Date Difference Calculator',
    slug: 'date-difference-calculator',
    path: '/date-difference-calculator/',
    canonicalUrl: 'https://riadalashekin.com/date-difference-calculator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Calculator',
    shortDescription:
      'Count days, weeks, calendar years/months/days, and Monday–Friday business days between two dates, plus add or subtract days from any date.',
    seoTitle: 'Date Difference Calculator - Days Between Two Dates | Riad Al Ashekin',
    metaDescription:
      'Calculate the number of days, weeks, months and years between two dates online. Option to include the end date and count business days.',
    h1: 'Date Difference Calculator - Days Between Two Dates',
    intro:
      'Measure the exact duration between two calendar dates in days, weeks, years/months/days, and Monday–Friday business days. Toggle whether to include the end date, or add and subtract days from any starting date.',
    howToUse: [
      'Choose a Start Date and End Date using the two top date pickers.',
      'Check Include end date (+1 day) if your count should include both boundary dates (for instance, inclusive project sprints).',
      'Read Total Days, Weeks + Days, Years/Months/Days, and Business Days (M–F), and click Copy Summary if needed.',
      'Use the Add or Subtract Days section below to shift any base date forward or backward by a chosen number of days.',
    ],
    features: [
      'Calculates Total Days = (End UTC Date - Start UTC Date) / 86,400,000 + (Include End Date ? 1 : 0)',
      'Breaks duration down into Weeks + Remainder Days and calendar Years / Months / Days',
      'Counts Monday–Friday weekdays in the interval',
      'Built-in Add or Subtract Days calculator with instant date output and Copy button',
    ],
    technicalExplanation: {
      heading: 'Consistent UTC Date Intervals Without DST Shifts',
      body: 'Computing intervals at midnight UTC avoids 23-hour or 25-hour daylight saving transition days from skewing whole-day counts.',
    },
    faqs: [
      {
        question: 'Does the Date Difference Calculator count the end date?',
        answer:
          'By default, no—it counts elapsed days from Start Date up to End Date (for example, Jan 1 to Jan 2 is 1 day). Check Include end date (+1 day) if you want an inclusive count that includes both dates.',
      },
      {
        question: 'How are business days counted?',
        answer:
          'The calculator steps through every day in your interval and counts Monday through Friday (weekdays) while skipping Saturdays and Sundays. It does not subtract national or local public holidays.',
      },
      {
        question: 'How can I add or subtract days from a specific date?',
        answer:
          'Use the Add or Subtract Days panel below the metrics: choose a Base Date, pick + Add or - Subtract, enter the number of days, and the resulting YYYY-MM-DD date appears right beside it.',
      },
      {
        question: 'What happens if I put an End Date earlier than the Start Date?',
        answer:
          'The calculator automatically orders the earlier and later dates before measuring the interval so you always see a positive duration.',
      },
    ],
    relatedToolSlugs: ['age-calculator', 'countdown-timer', 'time-zone-converter'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Date Difference Calculator',
      howToUseSteps: [
        'Select your Start Date and End Date in the top date pickers (reversed dates swap automatically so durations remain positive).',
        'Check Include end date (+1 day) if you want an inclusive count covering both the start day and end day.',
        'Read Total Days, Weeks + Days, Calendar Years/Months/Days, and Business Days (M–F), then click Copy Summary if needed.',
        'Scroll to the Add or Subtract Days card below to add or subtract any whole number of days from a base date and copy the shifted YYYY-MM-DD result.',
      ],
      checksOrShowsHeading: 'What the Date Difference Calculator does',
      checksOrShowsIntro:
        'Using midnight UTC date arithmetic inside your browser so daylight saving shifts never skew day counts, the tool runs two calculations:',
      checksOrShowsPoints: [
        'Computes Total Days = Math.round((End UTC ms - Start UTC ms) / 86,400,000) + (Include End Date ? 1 : 0), and formats whole weeks plus remaining days.',
        'Computes elapsed calendar Years, Months, and Days between the ordered start and end dates.',
        'Counts Business Days by stepping through the interval and counting Monday through Friday weekdays without assuming or subtracting public holidays.',
        'Provides an Add or Subtract Days shifter (+ Add or - Subtract) plus a Copy button and an explicit Formula Box underneath.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample dates (Include end date: off)',
      exampleInput: 'Start Date: 2026-01-01 | End Date: 2026-01-15',
      exampleOutputLabel: 'Calculated interval results',
      exampleOutput:
        'Total Days: 14 | Weeks + Days: 2w 0d | Calendar: 0y 0m 14d | Business Days (M–F): 10',
      exampleNote:
        'Checking Include end date (+1 day) increases Total Days to 15 and Business Days (M–F) to 11 because Thursday January 15 is counted as part of the span.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'Does the Date Difference Calculator count the end date?',
          answer:
            'By default, no—it counts elapsed days from Start Date up to End Date (for example, Jan 1 to Jan 2 is 1 day). Check Include end date (+1 day) if you want an inclusive count that includes both dates.',
        },
        {
          question: 'How are business days counted?',
          answer:
            'The calculator steps through every day in your interval and counts Monday through Friday (weekdays) while skipping Saturdays and Sundays. It does not subtract national or local public holidays.',
        },
        {
          question: 'How can I add or subtract days from a specific date?',
          answer:
            'Use the Add or Subtract Days panel below the metrics: choose a Base Date, pick + Add or - Subtract, enter the number of days, and the resulting YYYY-MM-DD date appears right beside it.',
        },
        {
          question: 'What happens if I put an End Date earlier than the Start Date?',
          answer:
            'The calculator automatically orders the earlier and later dates before measuring the interval so you always see a positive duration.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['age-calculator', 'countdown-timer', 'time-zone-converter'],
    },
  },

  // 29) Loan EMI Calculator (/emi-calculator/)
  {
    id: 'emi-calculator',
    name: 'Loan EMI Calculator',
    slug: 'emi-calculator',
    path: '/emi-calculator/',
    canonicalUrl: 'https://riadalashekin.com/emi-calculator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Finance Math',
    shortDescription:
      'Compute monthly loan EMI, total interest, total payment, and a full month-by-month reducing-balance amortization table in your browser.',
    seoTitle: 'Loan EMI Calculator - Monthly Payment & Interest Calculator | Riad Al Ashekin',
    metaDescription:
      'Calculate your monthly loan EMI, total interest and total payment online. Includes a full month-by-month amortization schedule.',
    h1: 'Loan EMI Calculator - Monthly Payment & Interest Calculator',
    intro:
      'Work out your exact fixed monthly installment, lifetime interest cost, total repayment, and full month-by-month principal-vs-interest amortization schedule using standard reducing-balance math—currency-neutral and 100% client-side.',
    howToUse: [
      'Enter the Loan Amount (P) in any currency.',
      'Enter the Annual Interest Rate (%) and Loan Tenure in either Months or Years.',
      'Review Monthly EMI, Total Interest, and Total Payment cards immediately below.',
      'Scroll through the month-by-month amortization schedule to inspect principal, interest, and remaining balance each month, or click Copy Summary.',
    ],
    features: [
      'Standard reducing-balance formula: EMI = [P × r × (1 + r)^n] / [(1 + r)^n - 1], with zero-rate fallback EMI = P / n',
      'Currency-neutral calculations supporting Months or Years tenure selection',
      'Month-by-month amortization table displaying payment, principal portion, interest portion, and ending balance',
      'Clear error alert for non-positive principal/tenure or negative rates',
    ],
    technicalExplanation: {
      heading: 'Reducing-Balance Amortization Schedule',
      body: 'Each monthly payment applies interest only to the remaining unpaid principal balance from the prior month, steadily shifting more of your fixed EMI toward principal payoff.',
    },
    faqs: [
      {
        question: 'What does EMI mean?',
        answer:
          'EMI stands for Equated Monthly Installment—a fixed monthly payment amount that pays off both loan principal and interest over a set number of months.',
      },
      {
        question: 'What formula does the Loan EMI Calculator use?',
        answer:
          'It uses the standard reducing-balance formula EMI = [P × r × (1 + r)^n] / [(1 + r)^n - 1], where P is loan amount, r is Annual Interest Rate / (12 × 100), and n is total months. When r is 0%, EMI equals P / n.',
      },
      {
        question: 'Does the EMI result include lender fees, taxes, or insurance?',
        answer:
          'No. The calculation models pure loan principal and nominal annual interest rate only. Origination fees, processing charges, taxes, or insurance premiums added by a lender are not included.',
      },
      {
        question: 'Why does the interest portion drop every month in the table?',
        answer:
          'Because monthly interest is computed on the remaining principal balance (Remaining Balance × r). As principal shrinks each month, less of the next EMI goes toward interest and more reduces the balance.',
      },
    ],
    relatedToolSlugs: ['compound-interest-calculator', 'percentage-calculator', 'break-even-calculator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Loan EMI Calculator',
      howToUseSteps: [
        'Enter your Loan Amount without currency symbols into the first input box.',
        'Type the Annual Interest Rate (%) and enter Loan Tenure while picking Months or Years from the unit selector.',
        'Check the Monthly EMI, Total Interest, and Total Payment summary cards immediately below the inputs.',
        'Scroll through the Amortization Schedule table to inspect monthly principal and interest splits, verify the Formula Box, or click Copy Summary.',
      ],
      checksOrShowsHeading: 'What the Loan EMI Calculator does',
      checksOrShowsIntro:
        'This currency-neutral calculator models standard reducing-balance installment loans completely inside your browser:',
      checksOrShowsPoints: [
        'Uses EMI = [P × r × (1 + r)^n] / [(1 + r)^n - 1], where P is Loan Amount, r = Annual Rate / (12 × 100), and n = total monthly payments (falling back cleanly to EMI = P / n when rate is 0%).',
        'Computes Total Payment = EMI × n and Total Interest = Total Payment - P across the full tenure.',
        'Generates a scrollable month-by-month amortization schedule showing each Month, Payment, Principal Paid, Interest Paid, and Remaining Balance clamped down to 0.',
        'Validates that Loan Amount and Tenure are positive and Interest Rate is non-negative before displaying results or Copy Summary.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample loan parameters',
      exampleInput: 'Loan Amount (P): 10,000 | Annual Rate: 12% (r = 0.01/month) | Tenure: 12 Months',
      exampleOutputLabel: 'Calculated EMI totals',
      exampleOutput:
        'Monthly EMI: 888.49\nTotal Interest: 661.85\nTotal Payment: 10,661.85',
      exampleNote:
        'Evaluating EMI = [10,000 × 0.01 × (1.01)^12] / [(1.01)^12 - 1] returns 888.49 per month; Month 1 applies 100.00 to interest and 788.49 toward reducing principal.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What does EMI mean?',
          answer:
            'EMI stands for Equated Monthly Installment—a fixed monthly payment amount that pays off both loan principal and interest over a set number of months.',
        },
        {
          question: 'What formula does the Loan EMI Calculator use?',
          answer:
            'It uses the standard reducing-balance formula EMI = [P × r × (1 + r)^n] / [(1 + r)^n - 1], where P is loan amount, r is Annual Interest Rate / (12 × 100), and n is total months. When r is 0%, EMI equals P / n.',
        },
        {
          question: 'Does the EMI result include lender fees, taxes, or insurance?',
          answer:
            'No. The calculation models pure loan principal and nominal annual interest rate only. Origination fees, processing charges, taxes, or insurance premiums added by a lender are not included.',
        },
        {
          question: 'Why does the interest portion drop every month in the table?',
          answer:
            'Because monthly interest is computed on the remaining principal balance (Remaining Balance × r). As principal shrinks each month, less of the next EMI goes toward interest and more reduces the balance.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['compound-interest-calculator', 'percentage-calculator', 'break-even-calculator'],
    },
  },

  // 30) Compound Interest Calculator (/compound-interest-calculator/)
  {
    id: 'compound-interest-calculator',
    name: 'Compound Interest Calculator',
    slug: 'compound-interest-calculator',
    path: '/compound-interest-calculator/',
    canonicalUrl: 'https://riadalashekin.com/compound-interest-calculator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Finance Math',
    shortDescription:
      'Project future value, cumulative interest, and year-by-year growth with yearly, quarterly, monthly, or daily compounding and monthly additions.',
    seoTitle: 'Compound Interest Calculator - Calculate Investment Growth Over Time | Riad Al Ashekin',
    metaDescription:
      'Calculate compound interest online with optional monthly contributions. See the future value, total interest and a year-by-year table.',
    h1: 'Compound Interest Calculator - Calculate Investment Growth Over Time',
    intro:
      'Simulate long-term balance growth with custom starting principal, optional monthly additions, annual rate, and yearly, quarterly, monthly, or daily compounding—complete with a year-by-year ledger.',
    howToUse: [
      'Enter Starting Principal (P) and Monthly Contribution (enter 0 if testing a lump sum only).',
      'Set Annual Rate (%), Years (1–100), and Compounding frequency (Yearly, Quarterly, Monthly, or Daily).',
      'Read Future Value, Total Contributions, and Total Interest cards immediately below.',
      'Scroll the Year-by-Year table or click Copy Summary to save your figures.',
    ],
    features: [
      'Supports Yearly (1x), Quarterly (4x), Monthly (12x), and Daily (365x) compounding frequencies',
      'Optional recurring monthly contributions simulated across each year',
      'Year-by-year table showing Total Contributed, Cumulative Interest, and Ending Balance',
      'Shows the exact base formula A = P × (1 + r / n)^(n × t) directly on the page',
    ],
    technicalExplanation: {
      heading: 'How Compounding Period and Monthly Additions Interact',
      body: 'Interest compounds onto both original principal and earlier accumulated interest, while optional monthly additions add fresh principal each month over the chosen horizon.',
    },
    faqs: [
      {
        question: 'What is the difference between compound interest and simple interest?',
        answer:
          'Simple interest calculates returns only on the original starting principal each period. Compound interest calculates returns on the starting principal plus all interest previously earned, causing growth to accelerate over time.',
      },
      {
        question: 'How does compounding frequency change the result?',
        answer:
          'Compounding more often (for example, Monthly 12x or Daily 365x vs. Yearly 1x) adds earned interest back into the balance sooner, resulting in slightly higher cumulative interest at the same annual nominal rate.',
      },
      {
        question: 'What formula does this Compound Interest Calculator use?',
        answer:
          'For lump sums it follows A = P × (1 + r / n)^(n × t), where r = Annual Rate / 100, n = compounding periods per year (1, 4, 12, or 365), and t = years; when Monthly Contributions > 0, each month adds the deposit and compounds per selected frequency n.',
      },
      {
        question: 'Does the calculator guarantee investment returns or account for taxes?',
        answer:
          'No. It is strictly a mathematical projection based on the constant rate you enter and does not account for taxes, fees, inflation, or variable market returns.',
      },
    ],
    relatedToolSlugs: ['emi-calculator', 'percentage-calculator', 'profit-margin-calculator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Compound Interest Calculator',
      howToUseSteps: [
        'Enter your Starting Principal and any Monthly Contribution (use 0 for no recurring deposits).',
        'Type the Annual Rate (%) and duration in Years (between 1 and 100).',
        'Pick Compounding frequency: Yearly (1x), Quarterly (4x), Monthly (12x), or Daily (365x).',
        'Review Future Value, Total Contributions, Total Interest, and the Year-by-Year table below.',
      ],
      checksOrShowsHeading: 'What the Compound Interest Calculator does',
      checksOrShowsIntro:
        'The calculator runs deterministic period-by-period compounding math locally inside your browser:',
      checksOrShowsPoints: [
        'Follows A = P × (1 + r / n)^(n × t) for base principal compounding where r = Annual Rate / 100, n = 1, 4, 12, or 365, and t = years.',
        'Adds Monthly Contribution before compounding each period (monthly uses 1 + r/12; daily uses (1 + r/365)^(365/12) per month; quarterly compounds every 3rd month by 1 + r/4; yearly compounds every 12th month by 1 + r).',
        'Outputs Future Value, Total Contributions, and Total Interest alongside a full year-by-year table.',
        'Validates non-negative inputs and years between 1 and 100 clearly.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample lump-sum growth calculation',
      exampleInput: 'Starting Principal: 10,000 | Monthly Contribution: 0 | Annual Rate: 6% | Years: 5 | Compounding: Monthly (12x)',
      exampleOutputLabel: 'Projected output',
      exampleOutput:
        'Future Value: 13,488.50\nTotal Contributions: 10,000.00\nTotal Interest: 3,488.50',
      exampleNote:
        'Matches the exact formula A = 10,000 × (1 + 0.06 / 12)^(12 × 5) = 13,488.50.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What is the difference between compound interest and simple interest?',
          answer:
            'Simple interest calculates returns only on the original starting principal each period. Compound interest calculates returns on the starting principal plus all interest previously earned, causing growth to accelerate over time.',
        },
        {
          question: 'How does compounding frequency change the result?',
          answer:
            'Compounding more often (for example, Monthly 12x or Daily 365x vs. Yearly 1x) adds earned interest back into the balance sooner, resulting in slightly higher cumulative interest at the same annual nominal rate.',
        },
        {
          question: 'What formula does this Compound Interest Calculator use?',
          answer:
            'For lump sums it follows A = P × (1 + r / n)^(n × t), where r = Annual Rate / 100, n = compounding periods per year (1, 4, 12, or 365), and t = years; when Monthly Contributions > 0, each month adds the deposit and compounds per selected frequency n.',
        },
        {
          question: 'Does the calculator guarantee investment returns or account for taxes?',
          answer:
            'No. It is strictly a mathematical projection based on the constant rate you enter and does not account for taxes, fees, inflation, or variable market returns.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['emi-calculator', 'percentage-calculator', 'profit-margin-calculator'],
    },
  },

  // 31) Profit Margin Calculator (/profit-margin-calculator/)
  {
    id: 'profit-margin-calculator',
    name: 'Profit Margin Calculator',
    slug: 'profit-margin-calculator',
    path: '/profit-margin-calculator/',
    canonicalUrl: 'https://riadalashekin.com/profit-margin-calculator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Business Math',
    shortDescription:
      'Compute gross profit, margin %, markup %, and target selling price from cost, price, margin, or markup with formulas shown.',
    seoTitle: 'Profit Margin Calculator - Gross Margin, Markup & Selling Price | Riad Al Ashekin',
    metaDescription:
      'Calculate profit margin, markup and selling price online. Enter cost and price, or cost and target margin, and see the profit instantly.',
    h1: 'Profit Margin Calculator - Gross Margin, Markup & Selling Price',
    intro:
      'Calculate gross profit, profit margin percentage, and markup percentage from cost and selling price—or solve for the right selling price from your target gross margin or markup goal with exact formulas visible.',
    howToUse: [
      'Pick one of three modes: Cost + Selling Price, Cost + Target Margin %, or Cost + Target Markup %.',
      'Enter Cost of Goods plus Selling Price, Target Margin %, or Target Markup %.',
      'Check Selling Price, Gross Profit, Gross Margin %, and Markup % updated live.',
      'Verify the active Formula Box below or click Copy Result.',
    ],
    features: [
      'Three pricing modes: Cost + Price, Cost + Target Margin %, and Cost + Target Markup %',
      'Live outputs for Selling Price, Gross Profit, Gross Margin %, and Markup %',
      'Exact active formula displayed dynamically per mode',
      'Input guards preventing negative costs and impossible margins >= 100%',
    ],
    technicalExplanation: {
      heading: 'Margin vs. Markup Pricing Math',
      body: 'Confusing margin (profit divided by price) with markup (profit divided by cost) causes consistent underpricing. Calculating both figures side by side prevents pricing errors.',
    },
    faqs: [
      {
        question: 'What is the difference between gross margin and markup?',
        answer:
          'Gross margin measures profit as a percentage of Selling Price: (Profit / Price) × 100. Markup measures profit as a percentage of Cost: (Profit / Cost) × 100. For a $60 item sold at $100, profit is $40, margin is 40%, and markup is 66.67%.',
      },
      {
        question: 'How do I price an item to hit a target profit margin?',
        answer:
          'Choose Cost + Target Margin % mode, which evaluates Selling Price = Cost / (1 - Margin / 100). For instance, to make a 40% margin on a $60 cost, sell at 60 / (1 - 0.40) = $100.',
      },
      {
        question: 'What formulas does this calculator run?',
        answer:
          'Mode 1 computes Profit = Price - Cost, Margin % = (Profit / Price) × 100, and Markup % = (Profit / Cost) × 100. Mode 2 computes Price = Cost / (1 - Margin / 100). Mode 3 computes Price = Cost × (1 + Markup / 100).',
      },
      {
        question: 'Why does Target Gross Margin stop below 100%?',
        answer:
          'When cost is positive, dividing Cost by (1 - 100/100) divides by zero; a gross margin of 100% or higher on positive cost is mathematically impossible.',
      },
    ],
    relatedToolSlugs: ['break-even-calculator', 'discount-calculator', 'percentage-calculator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Profit Margin Calculator',
      howToUseSteps: [
        'Select Cost + Selling Price, Cost + Target Margin %, or Cost + Target Markup % at the top.',
        'Type your Cost of Goods and second value (Selling Price, Margin %, or Markup %).',
        'Review Selling Price, Gross Profit, Gross Margin %, and Markup % in the four summary cards.',
        'Verify the active Formula Box at the bottom or click Copy Result.',
      ],
      checksOrShowsHeading: 'What the Profit Margin Calculator does',
      checksOrShowsIntro:
        'All pricing calculations run locally inside your browser using three exact algebraic modes:',
      checksOrShowsPoints: [
        'Cost + Selling Price: Profit = Price - Cost, Gross Margin % = (Profit / Price) × 100, Markup % = (Profit / Cost) × 100.',
        'Cost + Target Margin %: Selling Price = Cost / (1 - Margin / 100), enforcing Margin < 100%.',
        'Cost + Target Markup %: Selling Price = Cost × (1 + Markup / 100), plus resulting Profit and Gross Margin %.',
        'Displays the exact formula for whichever mode you select alongside a one-click Copy Result button.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample pricing calculation (Cost + Selling Price mode)',
      exampleInput: 'Cost of Goods: 60 | Selling Price: 100',
      exampleOutputLabel: 'Calculated profit metrics',
      exampleOutput:
        'Selling Price: 100.00 | Gross Profit: 40.00 | Gross Margin: 40% | Markup: 66.67%',
      exampleNote:
        'Because Profit (40) is divided by Price (100) for margin and divided by Cost (60) for markup, markup is always higher than margin when cost is positive.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What is the difference between gross margin and markup?',
          answer:
            'Gross margin measures profit as a percentage of Selling Price: (Profit / Price) × 100. Markup measures profit as a percentage of Cost: (Profit / Cost) × 100. For a $60 item sold at $100, profit is $40, margin is 40%, and markup is 66.67%.',
        },
        {
          question: 'How do I price an item to hit a target profit margin?',
          answer:
            'Choose Cost + Target Margin % mode, which evaluates Selling Price = Cost / (1 - Margin / 100). For instance, to make a 40% margin on a $60 cost, sell at 60 / (1 - 0.40) = $100.',
        },
        {
          question: 'What formulas does this calculator run?',
          answer:
            'Mode 1 computes Profit = Price - Cost, Margin % = (Profit / Price) × 100, and Markup % = (Profit / Cost) × 100. Mode 2 computes Price = Cost / (1 - Margin / 100). Mode 3 computes Price = Cost × (1 + Markup / 100).',
        },
        {
          question: 'Why does Target Gross Margin stop below 100%?',
          answer:
            'When cost is positive, dividing Cost by (1 - 100/100) divides by zero; a gross margin of 100% or higher on positive cost is mathematically impossible.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['break-even-calculator', 'discount-calculator', 'percentage-calculator'],
    },
  },

  // 32) Discount Calculator (/discount-calculator/)
  {
    id: 'discount-calculator',
    name: 'Discount Calculator',
    slug: 'discount-calculator',
    path: '/discount-calculator/',
    canonicalUrl: 'https://riadalashekin.com/discount-calculator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Shopping Math',
    shortDescription:
      'Compute final sale price and total savings from percentage or fixed discounts, optional stacked second discount, and pre- or post-discount sales tax.',
    seoTitle: 'Discount Calculator - Sale Price & Savings Calculator | Riad Al Ashekin',
    metaDescription:
      'Calculate the sale price and how much you save with a percentage or fixed discount online. Supports a second discount and sales tax.',
    h1: 'Discount Calculator - Sale Price & Savings Calculator',
    intro:
      'Check exact sale prices and total savings when shopping or planning promotions. Supports percentage or fixed first discounts, an extra stacked percentage off, and optional sales tax applied before or after discounts.',
    howToUse: [
      'Enter the Original Price.',
      'Type the First Discount and pick "%" (percentage) or "Fixed" (flat amount off).',
      'Optionally add an Extra Stacked Discount (%) and Sales Tax (%).',
      'Select whether tax applies After discount or On original price, then check Final Price, You Save, and Tax Added.',
    ],
    features: [
      'Supports percentage (%) and fixed flat-amount initial discounts',
      'Optional extra stacked discount applied sequentially to the discounted subtotal',
      'Configurable Sales Tax (%) with After discount vs On original price toggle',
      'Shows Final Price, Total Savings (You Save), Tax Added, and exact formula',
    ],
    technicalExplanation: {
      heading: 'Sequential Stacked Discounts vs. Additive Sums',
      body: 'Applying 20% off followed by an extra 10% off discounts the already-reduced subtotal rather than the original sticker price, resulting in 28% combined savings.',
    },
    faqs: [
      {
        question: 'How do I calculate a single percentage discount?',
        answer:
          'Multiply the original price by (1 - Discount % / 100), or subtract Original Price × (Discount % / 100) from the original price. For example, 20% off 100 equals 100 × 0.80 = 80.',
      },
      {
        question: 'Are two stacked discounts (like 20% + 10%) the same as adding them to 30%?',
        answer:
          'No. The second discount applies to the already-reduced price rather than the original price. On $100, 20% off leaves $80, and an extra 10% off $80 leaves $72—a total savings of 28%, not 30%.',
      },
      {
        question: 'Is sales tax applied before or after the discount?',
        answer:
          'Rules vary by store coupon type and local law, so the calculator provides radio buttons letting you choose Apply sales tax: After discount (Sale Price × Tax%) or On original price (Original Price × Tax%).',
      },
      {
        question: 'Can a discount reduce the sale price below zero?',
        answer:
          'No. Fixed or stacked discounts are clamped at 0 so the discounted subtotal never goes negative.',
      },
    ],
    relatedToolSlugs: ['percentage-calculator', 'sales-tax-calculator', 'profit-margin-calculator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Discount Calculator',
      howToUseSteps: [
        'Enter the item Original Price in the first numeric input box.',
        'Type the First Discount amount and select either % (percentage off) or Fixed (flat currency amount off).',
        'Optionally enter an Extra Stacked Discount (%) and a Sales Tax (%)—or leave either at 0 when not applicable.',
        'Choose After discount or On original price using the Apply sales tax radio buttons, then inspect Final Price, You Save, Tax Added, and the Formula Box before clicking Copy Result.',
      ],
      checksOrShowsHeading: 'What the Discount Calculator does',
      checksOrShowsIntro:
        'The calculator evaluates sequential markdowns and sales tax formulas immediately inside your browser without storing values:',
      checksOrShowsPoints: [
        'Applies the first markdown as PriceAfter1 = max(0, Price × (1 - Disc% / 100)) in percentage mode or max(0, Price - Fixed) in fixed-amount mode.',
        'Applies any Extra Stacked Discount sequentially onto PriceAfter1: SalePrice = max(0, PriceAfter1 × (1 - Extra% / 100)), then calculates You Save = Price - SalePrice.',
        'Computes Tax Added as SalePrice × (Tax% / 100) when After discount is selected or OriginalPrice × (Tax% / 100) when On original price is selected, then sets Final Price = SalePrice + Tax Added.',
        'Clamps discounted totals at 0 so values never turn negative and shows the exact live equations inside the Formula Box.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample stacked discount (Tax: 0%)',
      exampleInput: 'Original Price: 100 | First Discount: 20% | Extra Stacked Discount: 10% | Tax: 0%',
      exampleOutputLabel: 'Calculated sale price and savings',
      exampleOutput: 'Final Price: 72.00 | You Save: 28.00 | Tax Added: 0.00',
      exampleNote:
        'The first 20% discount drops 100 to 80, and the second 10% stacked discount subtracts 8 from 80 rather than from 100, resulting in 72.00 final price and 28.00 saved.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'How do I calculate a single percentage discount?',
          answer:
            'Multiply the original price by (1 - Discount % / 100), or subtract Original Price × (Discount % / 100) from the original price. For example, 20% off 100 equals 100 × 0.80 = 80.',
        },
        {
          question: 'Are two stacked discounts (like 20% + 10%) the same as adding them to 30%?',
          answer:
            'No. The second discount applies to the already-reduced price rather than the original price. On $100, 20% off leaves $80, and an extra 10% off $80 leaves $72—a total savings of 28%, not 30%.',
        },
        {
          question: 'Is sales tax applied before or after the discount?',
          answer:
            'Rules vary by store coupon type and local law, so the calculator provides radio buttons letting you choose Apply sales tax: After discount (Sale Price × Tax%) or On original price (Original Price × Tax%).',
        },
        {
          question: 'Can a discount reduce the sale price below zero?',
          answer:
            'No. Fixed or stacked discounts are clamped at 0 so the discounted subtotal never goes negative.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['percentage-calculator', 'sales-tax-calculator', 'profit-margin-calculator'],
    },
  },

  // 33) Sales Tax & VAT Calculator (/sales-tax-calculator/)
  {
    id: 'sales-tax-calculator',
    name: 'Sales Tax & VAT Calculator',
    slug: 'sales-tax-calculator',
    path: '/sales-tax-calculator/',
    canonicalUrl: 'https://riadalashekin.com/sales-tax-calculator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Tax Math',
    shortDescription:
      'Add any custom sales tax or VAT percentage to a net price, or reverse-calculate pre-tax net and tax amounts from a gross total.',
    seoTitle: 'Sales Tax & VAT Calculator - Add or Remove Tax from a Price | Riad Al Ashekin',
    metaDescription:
      'Add sales tax or VAT to a price, or remove it from a tax-inclusive price, online. Enter any tax rate and see net, tax and gross amounts.',
    h1: 'Sales Tax & VAT Calculator - Add or Remove Tax from a Price',
    intro:
      'Calculate pre-tax net, tax amount, and tax-inclusive gross totals in either direction using any tax percentage you enter. No preset country rates—just exact, transparent math in your browser.',
    howToUse: [
      'Choose Add Tax / VAT (Net to Gross) or Remove Tax / VAT (Gross to Net).',
      'Enter the Net Amount or Gross Amount in the first field.',
      'Enter your local or invoice Tax Rate (%).',
      'Read Net Price, Tax Amount, and Gross Total along with the active formula and Copy Result button.',
    ],
    features: [
      'Two-way tax addition (Net to Gross) and tax extraction (Gross to Net)',
      'Works with any custom tax or VAT percentage entered by the user',
      'Displays Net Price, Tax Amount, Gross Total, and the exact formula used in code',
      'Guards against negative prices or rates and offers one-click copying',
    ],
    technicalExplanation: {
      heading: 'Reverse-Calculating Tax-Inclusive Gross Prices',
      body: 'Because VAT or tax is added on top of the net base, extracting tax from a gross price requires dividing by (1 + Rate / 100) rather than multiplying the gross price directly.',
    },
    faqs: [
      {
        question: 'What formula removes VAT or sales tax from a gross price?',
        answer:
          'Divide the gross price by (1 + Tax Rate / 100) to find the Net Price, then subtract Net from Gross to get the Tax Amount: Net = Gross / (1 + Rate / 100) and Tax = Gross - Net.',
      },
      {
        question: 'What is the difference between sales tax and VAT?',
        answer:
          'Both are consumption taxes calculated as a percentage of a sale, typically displayed differently on shelf tags: US sales tax is usually added onto a net price at checkout, while VAT is often included inside the listed gross retail price.',
      },
      {
        question: 'Why is removing 20% VAT not the same as subtracting 20% from the gross total?',
        answer:
          'Because the 20% tax was added to the smaller net base (100 + 20% = 120), 20 is 20/120 = 16.67% of the gross price. Subtracting 20% from 120 would give 96 instead of the true original net price of 100.',
      },
      {
        question: 'Why are there no preset country tax rates?',
        answer:
          'Tax rates change frequently across states, cities, and product categories. Letting you enter any exact percentage guarantees the formula uses your applicable rate.',
      },
    ],
    relatedToolSlugs: ['discount-calculator', 'percentage-calculator', 'profit-margin-calculator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Sales Tax & VAT Calculator',
      howToUseSteps: [
        'Choose Add Tax / VAT (Net to Gross) or Remove Tax / VAT (Gross to Net) using the top mode toggle buttons.',
        'Enter your Net Amount or tax-inclusive Gross Amount into the first box.',
        'Type any custom Tax Rate (%) matching your state, province, VAT tier, or invoice rate.',
        'Check Net Price, Tax Amount, and Gross Total in the three result cards, verify the Formula Box, and click Copy Result if needed.',
      ],
      checksOrShowsHeading: 'What the Sales Tax & VAT Calculator does',
      checksOrShowsIntro:
        'The calculator evaluates transparent forward and reverse percentage tax math locally inside your browser without preset country assumptions:',
      checksOrShowsPoints: [
        'Add Tax / VAT mode computes Tax = Net × (Rate / 100) and Gross = Net × (1 + Rate / 100) from any pre-tax net figure.',
        'Remove Tax / VAT mode extracts Net = Gross / (1 + Rate / 100) and Tax = Gross - Net from any tax-inclusive gross total.',
        'Displays Net Price, Tax Amount, and Gross Total simultaneously alongside the exact active equation inside the Formula Box.',
        'Guards against negative prices or negative tax rates with a clear error banner and provides a one-click Copy Result button.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample reverse VAT calculation (Remove Tax mode)',
      exampleInput: 'Gross Amount: 120 | Tax Rate: 20%',
      exampleOutputLabel: 'Extracted net and tax amounts',
      exampleOutput: 'Net Price: 100.00 | Tax Amount: 20.00 | Gross Total: 120.00',
      exampleNote:
        'Dividing Gross (120) by (1 + 20 / 100) yields Net = 100.00 exactly, and subtracting Net from Gross isolates the 20.00 Tax Amount rather than mistakenly deducting 20% of 120.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What formula removes VAT or sales tax from a gross price?',
          answer:
            'Divide the gross price by (1 + Tax Rate / 100) to find the Net Price, then subtract Net from Gross to get the Tax Amount: Net = Gross / (1 + Rate / 100) and Tax = Gross - Net.',
        },
        {
          question: 'What is the difference between sales tax and VAT?',
          answer:
            'Both are consumption taxes calculated as a percentage of a sale, typically displayed differently on shelf tags: US sales tax is usually added onto a net price at checkout, while VAT is often included inside the listed gross retail price.',
        },
        {
          question: 'Why is removing 20% VAT not the same as subtracting 20% from the gross total?',
          answer:
            'Because the 20% tax was added to the smaller net base (100 + 20% = 120), 20 is 20/120 = 16.67% of the gross price. Subtracting 20% from 120 would give 96 instead of the true original net price of 100.',
        },
        {
          question: 'Why are there no preset country tax rates?',
          answer:
            'Tax rates change frequently across states, cities, and product categories. Letting you enter any exact percentage guarantees the formula uses your applicable rate.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['discount-calculator', 'percentage-calculator', 'profit-margin-calculator'],
    },
  },

  // 34) Break-Even Calculator (/break-even-calculator/)
  {
    id: 'break-even-calculator',
    name: 'Break-Even Calculator',
    slug: 'break-even-calculator',
    path: '/break-even-calculator/',
    canonicalUrl: 'https://riadalashekin.com/break-even-calculator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Business Math',
    shortDescription:
      'Find break-even units, break-even sales revenue, contribution margin per unit, target-profit units, and a revenue vs. total cost chart.',
    seoTitle: 'Break-Even Calculator - Find Your Break-Even Point in Units & Sales | Riad Al Ashekin',
    metaDescription:
      'Calculate your break-even point in units and revenue online. Enter fixed costs, price per unit and variable cost per unit.',
    h1: 'Break-Even Calculator - Find Your Break-Even Point in Units & Sales',
    intro:
      'Determine how many units you need to sell to cover fixed and variable costs, see total break-even sales revenue, plan for a target profit goal, and visualize the crossover point on an SVG cost-versus-revenue chart.',
    howToUse: [
      'Enter your Total Fixed Costs (rent, software, salaries) in the first input.',
      'Enter Price per Unit and Variable Cost per Unit.',
      'Optionally adjust Target Profit to see how many extra units reach your profit goal.',
      'Check Break-Even Units, Break-Even Sales, Contribution / Unit, Units for Target Profit, and the Revenue vs. Total Cost chart.',
    ],
    features: [
      'Computes Contribution Margin per unit = Price per Unit - Variable Cost per Unit',
      'Rounds whole physical Break-Even Units with Math.ceil(Fixed Costs / Contribution Margin)',
      'Computes Units needed for Target Profit = Math.ceil((Fixed Costs + Target Profit) / Contribution Margin)',
      'Interactive SVG chart comparing Revenue line and Total Cost line across 0 to 2x break-even volume',
    ],
    technicalExplanation: {
      heading: 'Fixed Costs, Variable Costs, and Contribution Margin',
      body: 'Every unit sold covers its own variable cost first; the remaining contribution margin pays down fixed overhead until revenue equals total cost at the break-even crossing point.',
    },
    faqs: [
      {
        question: 'What does the break-even point mean?',
        answer:
          'The break-even point is the exact sales volume where total revenue equals total fixed plus variable costs—meaning profit is zero and losses turn into net gains beyond that unit.',
      },
      {
        question: 'What formula does the Break-Even Calculator use?',
        answer:
          'Contribution Margin = Price per Unit - Variable Cost per Unit. Break-Even Units = Math.ceil(Fixed Costs / Contribution Margin), Break-Even Sales = (Fixed Costs / Contribution Margin) × Price per Unit, and Target Profit Units = Math.ceil((Fixed Costs + Target Profit) / Contribution Margin).',
      },
      {
        question: 'What is contribution margin?',
        answer:
          'Contribution margin per unit is Selling Price minus Variable Cost per unit. It shows how much money each sold unit contributes toward paying fixed overhead before profit starts accumulating.',
      },
      {
        question: 'What if Price per Unit is less than or equal to Variable Cost per Unit?',
        answer:
          'If variable cost equals or exceeds unit price, contribution margin is zero or negative and fixed costs can never be paid off, so the calculator displays an error warning.',
      },
    ],
    relatedToolSlugs: ['profit-margin-calculator', 'roas-calculator', 'emi-calculator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Break-Even Calculator',
      howToUseSteps: [
        'Type your Total Fixed Costs for the period (such as rent, software subscriptions, or fixed overhead) into the first input.',
        'Enter your selling Price per Unit and your Variable Cost per Unit.',
        'Optionally enter a Target Profit amount (or 0 to solve strictly for break-even).',
        'Review Break-Even Units, Break-Even Sales, Contribution / Unit, Units for Target Profit, the interactive Revenue vs. Total Cost chart, and click Copy Result.',
      ],
      checksOrShowsHeading: 'What the Break-Even Calculator does',
      checksOrShowsIntro:
        'Using cost-volume-profit equations inside your browser, the calculator computes exact unit thresholds and draws a live SVG crossover chart:',
      checksOrShowsPoints: [
        'Computes Contribution Margin per unit = Price per Unit - Variable Cost per Unit and warns immediately if variable cost equals or exceeds unit price.',
        'Rounds physical Break-Even Units upward via Math.ceil(Fixed Costs / Contribution Margin) while calculating exact Break-Even Sales = (Fixed Costs / Contribution Margin) × Price per Unit.',
        'Computes Units for Target Profit = Math.ceil((Fixed Costs + Target Profit) / Contribution Margin) for profit planning.',
        'Draws an SVG Revenue vs. Total Cost chart from zero up to twice the break-even unit volume, marking the break-even point alongside Copy Result and the Formula Box.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample unit economics',
      exampleInput: 'Fixed Costs: 5,000 | Price/Unit: 50 | Variable Cost/Unit: 20 | Target Profit: 3,000',
      exampleOutputLabel: 'Calculated break-even metrics',
      exampleOutput:
        'Break-Even Units: 167 | Break-Even Sales: 8,333.33 | Contribution/Unit: 30.00 | Units for Target Profit: 267',
      exampleNote:
        'Exact unit volume is 5,000 / 30 = 166.67, rounded up with Math.ceil to 167 whole units; hitting 3,000 target profit requires (5,000 + 3,000) / 30 = 266.67, rounded up to 267 units.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What does the break-even point mean?',
          answer:
            'The break-even point is the exact sales volume where total revenue equals total fixed plus variable costs—meaning profit is zero and losses turn into net gains beyond that unit.',
        },
        {
          question: 'What formula does the Break-Even Calculator use?',
          answer:
            'Contribution Margin = Price per Unit - Variable Cost per Unit. Break-Even Units = Math.ceil(Fixed Costs / Contribution Margin), Break-Even Sales = (Fixed Costs / Contribution Margin) × Price per Unit, and Target Profit Units = Math.ceil((Fixed Costs + Target Profit) / Contribution Margin).',
        },
        {
          question: 'What is contribution margin?',
          answer:
            'Contribution margin per unit is Selling Price minus Variable Cost per unit. It shows how much money each sold unit contributes toward paying fixed overhead before profit starts accumulating.',
        },
        {
          question: 'What if Price per Unit is less than or equal to Variable Cost per Unit?',
          answer:
            'If variable cost equals or exceeds unit price, contribution margin is zero or negative and fixed costs can never be paid off, so the calculator displays an error warning.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['profit-margin-calculator', 'roas-calculator', 'emi-calculator'],
    },
  },

  // 35) CPM Calculator (/cpm-calculator/)
  {
    id: 'cpm-calculator',
    name: 'CPM Calculator',
    slug: 'cpm-calculator',
    path: '/cpm-calculator/',
    canonicalUrl: 'https://riadalashekin.com/cpm-calculator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Ad Math',
    shortDescription:
      'Solve for CPM (Cost per 1,000 impressions), Total Ad Cost, or Total Impressions given any two inputs with the exact formula displayed.',
    seoTitle: 'CPM Calculator - Cost per 1,000 Impressions | Riad Al Ashekin',
    metaDescription:
      'Calculate CPM, total ad cost or impressions online. Enter any two values to find the third, with the CPM formula shown.',
    h1: 'CPM Calculator - Cost per 1,000 Impressions',
    intro:
      'Enter any two advertising campaign metrics to calculate the missing third figure: solve for CPM from spend and impressions, forecast budget from target CPM and reach, or estimate impressions from budget and CPM.',
    howToUse: [
      'Click Solve for CPM, Solve for Total Cost, or Solve for Impressions at the top.',
      'Enter the remaining two known numbers in the input boxes.',
      'Check the dark result card showing your calculated figure and verify the Formula Box below.',
      'Click Copy to save the result to your clipboard.',
    ],
    features: [
      'Three-way solver: Solve for CPM, Total Ad Cost, or Total Impressions',
      'Currency-neutral arithmetic showing the exact formula used',
      'Input checks blocking negative values or division by zero impressions/CPM',
      'One-click Copy button on the result card',
    ],
    technicalExplanation: {
      heading: 'Standard Cost-Per-Mille Advertising Formula',
      body: 'Because digital and display ads buy views in batches of one thousand, dividing spend by impressions multiplied by 1,000 standardizes ad campaign cost comparisons across channels.',
    },
    faqs: [
      {
        question: 'What does CPM mean in advertising?',
        answer:
          'CPM stands for Cost Per Mille (Cost Per 1,000 Impressions), measuring how much an advertiser pays for every 1,000 times an advertisement is displayed.',
      },
      {
        question: 'What formula does the CPM Calculator use?',
        answer:
          'It solves three equivalent equations: CPM = (Total Cost / Impressions) × 1,000, Total Cost = (CPM × Impressions) / 1,000, and Impressions = (Total Cost / CPM) × 1,000.',
      },
      {
        question: 'What is the difference between CPM and CPC?',
        answer:
          'CPM bills based on how many times an ad is shown (per 1,000 impressions), while CPC (Cost Per Click) bills or measures cost per actual user click on the ad.',
      },
      {
        question: 'Can I use this CPM calculator with any currency?',
        answer:
          'Yes. The inputs are currency-neutral numbers, so your calculated CPM or Total Cost uses whatever currency unit you entered.',
      },
    ],
    relatedToolSlugs: ['cpc-calculator', 'roas-calculator', 'conversion-rate-calculator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the CPM Calculator',
      howToUseSteps: [
        'Select one of the three solver buttons at the top: Solve for CPM, Solve for Total Cost, or Solve for Impressions.',
        'Enter the two known campaign figures into the active numeric input boxes in whatever currency unit your media plan uses.',
        'Read the calculated figure immediately inside the dark summary banner below the inputs.',
        'Verify the full arithmetic rules in the Formula Box at the bottom, and click Copy to save the answer to your clipboard.',
      ],
      checksOrShowsHeading: 'What the CPM Calculator does',
      checksOrShowsIntro:
        'The calculator switches seamlessly across all three algebraic forms of the Cost Per Mille identity locally inside your browser:',
      checksOrShowsPoints: [
        'Solve for CPM calculates (Total Ad Cost / Total Impressions) × 1,000 and requires Impressions to be greater than zero so the ratio stays defined.',
        'Solve for Total Cost calculates (Target CPM × Total Impressions) / 1,000 so you can estimate budget required for a planned impression target.',
        'Solve for Impressions calculates (Total Ad Cost / Target CPM) × 1,000 (requiring CPM > 0) to project total ad views from a fixed budget.',
        'Guards against negative input numbers and zero divisors with an inline error banner, while showing all three algebraic formulas clearly inside the Formula Box and supporting any currency.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample campaign values (Solve for CPM mode)',
      exampleInput: 'Total Ad Cost: 500 | Total Impressions: 100,000',
      exampleOutputLabel: 'Calculated CPM',
      exampleOutput: 'Calculated CPM: 5',
      exampleNote:
        'Dividing 500 ad spend by 100,000 impressions gives 0.005 per impression; multiplying by 1,000 converts that figure into 5 per thousand impressions (CPM) in your chosen currency unit. Switch modes above anytime to forecast budget or reach instead.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What does CPM mean in advertising?',
          answer:
            'CPM stands for Cost Per Mille (Cost Per 1,000 Impressions), measuring how much an advertiser pays for every 1,000 times an advertisement is displayed.',
        },
        {
          question: 'What formula does the CPM Calculator use?',
          answer:
            'It solves three equivalent equations: CPM = (Total Cost / Impressions) × 1,000, Total Cost = (CPM × Impressions) / 1,000, and Impressions = (Total Cost / CPM) × 1,000.',
        },
        {
          question: 'What is the difference between CPM and CPC?',
          answer:
            'CPM bills based on how many times an ad is shown (per 1,000 impressions), while CPC (Cost Per Click) bills or measures cost per actual user click on the ad.',
        },
        {
          question: 'Can I use this CPM calculator with any currency?',
          answer:
            'Yes. The inputs are currency-neutral numbers, so your calculated CPM or Total Cost uses whatever currency unit you entered.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['cpc-calculator', 'roas-calculator', 'conversion-rate-calculator'],
    },
  },

  // 36) CPC Calculator (/cpc-calculator/)
  {
    id: 'cpc-calculator',
    name: 'CPC Calculator',
    slug: 'cpc-calculator',
    path: '/cpc-calculator/',
    canonicalUrl: 'https://riadalashekin.com/cpc-calculator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Ad Math',
    shortDescription:
      'Solve for Cost per Click (CPC), Total Ad Spend, or Total Clicks from any two metrics, plus optional Click-Through Rate (CTR) from impressions.',
    seoTitle: 'CPC Calculator - Cost per Click Calculator | Riad Al Ashekin',
    metaDescription:
      'Calculate cost per click, total ad spend or clicks online. Enter any two values to get the third, plus CTR if you add impressions.',
    h1: 'CPC Calculator - Cost per Click Calculator',
    intro:
      'Compute Cost per Click, forecast total paid search spend, or calculate how many clicks a budget can buy from your target CPC—plus see Click-Through Rate (CTR) automatically whenever you add optional impressions.',
    howToUse: [
      'Select Solve for CPC, Solve for Ad Spend, or Solve for Clicks.',
      'Fill in the two known campaign figures.',
      'Optionally enter Impressions to calculate Click-Through Rate (CTR %) in the second result card.',
      'Click Copy on the primary card to save your CPC and CTR values.',
    ],
    features: [
      'Three-mode solver: CPC = Cost / Clicks, Cost = CPC × Clicks, and Clicks = Cost / CPC',
      'Optional Impressions field computing CTR (%) = (Clicks / Impressions) × 100',
      'Currency-neutral calculations with explicit Formula Box shown underneath',
      'Inline validation preventing division by zero clicks or zero CPC',
    ],
    technicalExplanation: {
      heading: 'Connecting Ad Spend, Clicks, and CTR',
      body: 'Evaluating Cost per Click together with Click-Through Rate makes it easy to separate keyword bid economics from ad copy engagement.',
    },
    faqs: [
      {
        question: 'What does CPC mean?',
        answer:
          'CPC stands for Cost Per Click, representing the average price you pay each time a visitor clicks an advertisement.',
      },
      {
        question: 'What formulas does the CPC Calculator use?',
        answer:
          'It solves CPC = Total Cost / Clicks, Total Cost = CPC × Clicks, and Clicks = Total Cost / CPC, plus CTR (%) = (Clicks / Impressions) × 100 when impressions are greater than 0.',
      },
      {
        question: 'How does CTR relate to CPC?',
        answer:
          'CTR (Click-Through Rate) measures the percentage of ad impressions that become clicks. While ad platforms run auction pricing models where relevance and higher CTR often influence ad rank, mathematically CTR = (Clicks / Impressions) × 100 and CPC = Total Cost / Clicks.',
      },
      {
        question: 'Do I have to fill in Impressions?',
        answer:
          'No. Impressions are optional—you can leave Impressions at 0 if you only want to solve for CPC, Ad Spend, or Clicks.',
      },
    ],
    relatedToolSlugs: ['cpm-calculator', 'conversion-rate-calculator', 'organic-ctr-calculator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the CPC Calculator',
      howToUseSteps: [
        'Choose what you want to calculate at the top: Solve for CPC, Solve for Ad Spend, or Solve for Clicks.',
        'Enter the two known campaign values (Total Ad Spend, Target CPC, or Total Clicks) into the corresponding fields.',
        'Optionally enter your campaign Impressions in the third field (leave at 0 if you only want CPC, Spend, or Clicks) to calculate Click-Through Rate.',
        'Read both output cards—the primary CPC/Spend/Clicks result and Click-Through Rate (CTR)—and click Copy to save both metrics.',
      ],
      checksOrShowsHeading: 'What the CPC Calculator does',
      checksOrShowsIntro:
        'The calculator computes Cost Per Click and optional Click-Through Rate strictly inside browser memory using exact division and multiplication:',
      checksOrShowsPoints: [
        'Solve for CPC calculates Total Cost / Clicks and prevents division by zero whenever Clicks is 0 or negative.',
        'Solve for Ad Spend computes CPC × Clicks to help project paid search or social budgets from an expected click volume.',
        'Solve for Clicks computes Total Cost / CPC (requiring CPC > 0) to estimate how many clicks a fixed budget can purchase.',
        'When optional Impressions is greater than 0, automatically computes CTR (%) = (Clicks / Impressions) × 100 in the second card and includes it in the Copy button text alongside the Formula Box.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample paid search figures (Solve for CPC)',
      exampleInput: 'Total Ad Spend: 400 | Clicks: 250 | Impressions: 12,500',
      exampleOutputLabel: 'Calculated CPC and CTR',
      exampleOutput: 'Cost per Click (CPC): 1.60 | Click-Through Rate (CTR): 2%',
      exampleNote:
        'Dividing 400 spend by 250 clicks gives 1.60 CPC, while dividing 250 clicks by 12,500 impressions × 100 yields a 2% CTR.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What does CPC mean?',
          answer:
            'CPC stands for Cost Per Click, representing the average price you pay each time a visitor clicks an advertisement.',
        },
        {
          question: 'What formulas does the CPC Calculator use?',
          answer:
            'It solves CPC = Total Cost / Clicks, Total Cost = CPC × Clicks, and Clicks = Total Cost / CPC, plus CTR (%) = (Clicks / Impressions) × 100 when impressions are greater than 0.',
        },
        {
          question: 'How does CTR relate to CPC?',
          answer:
            'CTR (Click-Through Rate) measures the percentage of ad impressions that become clicks. While ad platforms run auction pricing models where relevance and higher CTR often influence ad rank, mathematically CTR = (Clicks / Impressions) × 100 and CPC = Total Cost / Clicks.',
        },
        {
          question: 'Do I have to fill in Impressions?',
          answer:
            'No. Impressions are optional—you can leave Impressions at 0 if you only want to solve for CPC, Ad Spend, or Clicks.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['cpm-calculator', 'conversion-rate-calculator', 'organic-ctr-calculator'],
    },
  },

  // 37) Freelance Hourly Rate Calculator (/freelance-rate-calculator/)
  {
    id: 'freelance-rate-calculator',
    name: 'Freelance Hourly Rate Calculator',
    slug: 'freelance-rate-calculator',
    path: '/freelance-rate-calculator/',
    canonicalUrl: 'https://riadalashekin.com/freelance-rate-calculator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Pricing Math',
    shortDescription:
      'Calculate freelance hourly, 8-hour daily, and fixed project rates from your take-home income target, overhead expenses, tax estimate, billable hours, and profit buffer.',
    seoTitle: 'Freelance Hourly Rate Calculator - Work Out What to Charge per Hour | Riad Al Ashekin',
    metaDescription:
      'Work out your freelance hourly rate from your income goal, expenses, billable hours and time off. See daily and project rates too.',
    h1: 'Freelance Hourly Rate Calculator - Work Out What to Charge per Hour',
    intro:
      'Translate your annual take-home salary goal into a realistic freelance hourly rate, 8-hour day rate, and fixed-scope project quote. Factors in business expenses, estimated tax rate, time off, billable utilization, and profit buffer.',
    howToUse: [
      'Enter your Target Yearly Take-Home income goal, Yearly Expenses, and user-entered Tax Estimate (%).',
      'Set your Profit Buffer (%) alongside Working Weeks / Year (after vacation/sick time) and Billable Hours / Week.',
      'Enter a Project Hours Estimate to price a fixed-scope proposal alongside hourly and daily numbers.',
      'Review Hourly Rate, Daily Rate (8h), and Project Estimate, then click Copy Rates.',
    ],
    features: [
      'Models tax gross-up, overhead expenses, profit buffer, weeks worked, and billable hours per week',
      'Exact formula shown transparently: [((Target Income / (1 - Tax% / 100)) + Expenses) × (1 + Buffer% / 100)] / (Weeks × Billable Hours)',
      'Outputs Hourly Rate, Daily Rate (Hourly × 8), and Project Estimate (Hourly × Project Hours)',
      'Currency-neutral calculations with zero data saved or transmitted',
    ],
    technicalExplanation: {
      heading: 'Why Utilization and Overhead Drive Freelance Pricing',
      body: 'Employees earn paid time off and do not fund software, accounting, or unpaid sales time directly out of an hourly paycheck, so dividing annual salary by 2,080 hours underprices independent work.',
    },
    faqs: [
      {
        question: 'What are billable hours?',
        answer:
          'Billable hours are only the hours you actually invoice to clients. Unpaid work like writing proposals, invoicing, bookkeeping, admin, and marketing reduces a 40-hour workweek down to roughly 20–30 billable hours.',
      },
      {
        question: 'Why are freelance hourly rates higher than salaried hourly equivalents?',
        answer:
          'Freelancers cover their own business expenses, non-billable sales/admin hours, unpaid vacations or sick days, taxes, and risk buffer—so spreading annual costs across fewer billable hours raises the required hourly rate.',
      },
      {
        question: 'Does the calculator include income or self-employment taxes automatically?',
        answer:
          'No automatic regional tax tables are applied; it only uses the exact Tax Estimate (%) percentage that you type into the Tax Estimate field.',
      },
      {
        question: 'How are the Daily Rate and Project Estimate calculated?',
        answer:
          'Daily Rate multiplies the calculated Hourly Rate by 8 hours, and Project Estimate multiplies Hourly Rate by the Project Hours Estimate field.',
      },
    ],
    relatedToolSlugs: ['profit-margin-calculator', 'invoice-generator', 'break-even-calculator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Freelance Hourly Rate Calculator',
      howToUseSteps: [
        'Enter your Target Yearly Take-Home income goal, Yearly Expenses (software, hardware, insurance, office), user-entered Tax Estimate (%), and optional Profit Buffer (%).',
        'Set Working Weeks / Year (1 to 52, accounting for holidays and sick days) and realistic Billable Hours / Week (1 to 80, excluding unpaid sales and admin hours).',
        'Type a Project Hours Estimate to automatically price a fixed-scope project quote alongside hourly and daily figures.',
        'Read Hourly Rate, Daily Rate (8 Hours), and Project Estimate in the three result cards, inspect the Formula Box, and click Copy Rates.',
      ],
      checksOrShowsHeading: 'What the Freelance Hourly Rate Calculator does',
      checksOrShowsIntro:
        'All rate math executes locally in your browser tab without storing income inputs or applying hidden country tax assumptions:',
      checksOrShowsPoints: [
        'Grosses up take-home income by your chosen Tax Estimate %, adds Yearly Expenses, and applies your Profit Buffer %: Hourly Rate = [((Target Income / (1 - Tax% / 100)) + Expenses) × (1 + Buffer% / 100)] / (Working Weeks × Billable Hours/Week).',
        'Calculates Daily Rate as Hourly Rate × 8 hours and Project Estimate as Hourly Rate × Project Hours Estimate.',
        'Uses strictly the Tax Estimate percentage you enter instead of assuming automated local tax brackets.',
        'Checks that Working Weeks are between 1 and 52, Billable Hours are between 1 and 80, and Tax Estimate stays below 100% before displaying Copy Rates.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample annual planning inputs',
      exampleInput:
        'Take-Home: 60,000 | Expenses: 5,000 | Tax: 20% | Buffer: 10% | Weeks: 44 | Billable Hrs/Wk: 25 | Project Hrs: 40',
      exampleOutputLabel: 'Calculated freelance rates',
      exampleOutput:
        'Hourly Rate: 80.00/hr | Daily Rate (8h): 640.00/day | Project (40h): 3,200.00',
      exampleNote:
        'Grossing up 60,000 / 0.80 = 75,000, adding 5,000 expenses = 80,000, and multiplying by 1.10 buffer = 88,000 annual billing target across 1,100 billable hours (44 × 25) = 80.00 per hour.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What are billable hours?',
          answer:
            'Billable hours are only the hours you actually invoice to clients. Unpaid work like writing proposals, invoicing, bookkeeping, admin, and marketing reduces a 40-hour workweek down to roughly 20–30 billable hours.',
        },
        {
          question: 'Why are freelance hourly rates higher than salaried hourly equivalents?',
          answer:
            'Freelancers cover their own business expenses, non-billable sales/admin hours, unpaid vacations or sick days, taxes, and risk buffer—so spreading annual costs across fewer billable hours raises the required hourly rate.',
        },
        {
          question: 'Does the calculator include income or self-employment taxes automatically?',
          answer:
            'No automatic regional tax tables are applied; it only uses the exact Tax Estimate (%) percentage that you type into the Tax Estimate field.',
        },
        {
          question: 'How are the Daily Rate and Project Estimate calculated?',
          answer:
            'Daily Rate multiplies the calculated Hourly Rate by 8 hours, and Project Estimate multiplies Hourly Rate by the Project Hours Estimate field.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['profit-margin-calculator', 'invoice-generator', 'break-even-calculator'],
    },
  },

  // 38) Aspect Ratio Calculator (/aspect-ratio-calculator/)
  {
    id: 'aspect-ratio-calculator',
    name: 'Aspect Ratio Calculator',
    slug: 'aspect-ratio-calculator',
    path: '/aspect-ratio-calculator/',
    canonicalUrl: 'https://riadalashekin.com/aspect-ratio-calculator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Media Math',
    shortDescription:
      'Calculate simplified aspect ratios and proportionally locked pixel width or height for images and video, with common presets and visual preview box.',
    seoTitle: 'Aspect Ratio Calculator - Resize Images & Video Without Distortion | Riad Al Ashekin',
    metaDescription:
      'Calculate aspect ratios and new width or height for images and video online. Common ratios like 16:9, 4:3 and 1:1 included.',
    h1: 'Aspect Ratio Calculator - Resize Images & Video Without Distortion',
    intro:
      'Resize photos, video exports, or containers cleanly without stretching. Enter pixel dimensions to simplify the ratio via greatest common divisor, lock to presets like 16:9 or 1:1, and watch the proportional preview box resize.',
    howToUse: [
      'Click a preset button (16:9, 4:3, 1:1, 9:16, 21:9, or 3:2) or enter a custom Ratio Width and Ratio Height.',
      'Type a new Pixel Width to automatically solve for proportional Pixel Height—or edit Pixel Height to solve Pixel Width.',
      'Check the scaled shape preview box on the right and the Simplified Ratio banner below.',
      'Click Copy to copy your dimensions and ratio.',
    ],
    features: [
      'Six instant presets: 16:9 Widescreen, 4:3 Classic, 1:1 Square, 9:16 Vertical, 21:9 Ultrawide, and 3:2 Photo',
      'Bidirectional width-to-height and height-to-width locking plus custom ratio inputs',
      'Computes exact simplified ratio using Euclidean Greatest Common Divisor: (W / GCD) : (H / GCD)',
      'Proportional visual preview box and Formula Box shown underneath',
    ],
    technicalExplanation: {
      heading: 'Preserving Proportions with Euclidean GCD',
      body: 'Dividing width and height by their greatest common divisor reduces large pixel sizes like 1920 × 1080 straight down to the fundamental 16:9 ratio.',
    },
    faqs: [
      {
        question: 'What does aspect ratio mean?',
        answer:
          'Aspect ratio is the proportional relationship between width and height written as two numbers separated by a colon, such as 16:9 or 4:3, independent of total pixel resolution.',
      },
      {
        question: 'How do I resize an image or video without stretching or squishing it?',
        answer:
          'Keep the ratio constant while changing one dimension using Height = Math.round(Width × RatioHeight / RatioWidth) or Width = Math.round(Height × RatioWidth / RatioHeight). Editing either pixel box here recalculates the other side automatically.',
      },
      {
        question: 'What are the most common aspect ratios for video and web layouts?',
        answer:
          '16:9 is standard for widescreen HD and 4K displays, 9:16 is standard for vertical full-screen displays, 1:1 forms exact squares, 4:3 and 3:2 are classic photography formats, and 21:9 covers ultrawide cinema displays.',
      },
      {
        question: 'Why does changing Ratio Width keep Pixel Width fixed?',
        answer:
          'When you pick a preset or alter Ratio Width/Height, the calculator preserves your chosen horizontal Pixel Width and updates Pixel Height to match the new ratio cleanly.',
      },
    ],
    relatedToolSlugs: ['image-resizer', 'image-dimension-checker', 'image-cropper'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Aspect Ratio Calculator',
      howToUseSteps: [
        'Click one of the six preset buttons (16:9, 4:3, 1:1, 9:16, 21:9, or 3:2) or enter custom integers into Ratio Width and Ratio Height.',
        'Type a new Pixel Width to solve proportional Pixel Height automatically, or edit Pixel Height to solve proportional Pixel Width.',
        'Check the scaled rectangle preview box on the right and read the Simplified Ratio from Pixels line underneath.',
        'Verify the equations inside the Formula Box and click Copy to save the dimensions and ratio.',
      ],
      checksOrShowsHeading: 'What the Aspect Ratio Calculator does',
      checksOrShowsIntro:
        'The calculator keeps image and video proportions locked using exact integer arithmetic inside your browser:',
      checksOrShowsPoints: [
        'Solves proportional height as Math.round(Pixel Width × Ratio Height / Ratio Width) when width changes, and solves Pixel Width = Math.round(Pixel Height × Ratio Width / Ratio Height) when height changes.',
        'Reduces your current Pixel Width and Pixel Height using Euclidean Greatest Common Divisor: (W / GCD(W,H)) : (H / GCD(W,H)).',
        'Provides six quick presets (16:9 Widescreen, 4:3 Classic, 1:1 Square, 9:16 Vertical, 21:9 Ultrawide, and 3:2 Photo) alongside a proportional preview box.',
        'Rejects zero or negative inputs with a clear error banner and includes a one-click Copy button.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample resize under 16:9 preset',
      exampleInput: 'Preset: 16:9 | Pixel Width changed from 1920 to 1280',
      exampleOutputLabel: 'Calculated dimensions and simplified ratio',
      exampleOutput: 'Dimensions: 1280 × 720 px · Simplified Ratio from Pixels: 16:9',
      exampleNote:
        'Evaluating Math.round(1280 × 9 / 16) gives 720 px, and Euclidean GCD(1280, 720) = 80 reduces 1280:720 back down to 16:9 cleanly.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What does aspect ratio mean?',
          answer:
            'Aspect ratio is the proportional relationship between width and height written as two numbers separated by a colon, such as 16:9 or 4:3, independent of total pixel resolution.',
        },
        {
          question: 'How do I resize an image or video without stretching or squishing it?',
          answer:
            'Keep the ratio constant while changing one dimension using Height = Math.round(Width × RatioHeight / RatioWidth) or Width = Math.round(Height × RatioWidth / RatioHeight). Editing either pixel box here recalculates the other side automatically.',
        },
        {
          question: 'What are the most common aspect ratios for video and web layouts?',
          answer:
            '16:9 is standard for widescreen HD and 4K displays, 9:16 is standard for vertical full-screen displays, 1:1 forms exact squares, 4:3 and 3:2 are classic photography formats, and 21:9 covers ultrawide cinema displays.',
        },
        {
          question: 'Why does changing Ratio Width keep Pixel Width fixed?',
          answer:
            'When you pick a preset or alter Ratio Width/Height, the calculator preserves your chosen horizontal Pixel Width and updates Pixel Height to match the new ratio cleanly.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['image-resizer', 'image-dimension-checker', 'image-cropper'],
    },
  },

  // 39) Time Zone Converter (/time-zone-converter/)
  {
    id: 'time-zone-converter',
    name: 'Time Zone Converter',
    slug: 'time-zone-converter',
    path: '/time-zone-converter/',
    canonicalUrl: 'https://riadalashekin.com/time-zone-converter/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Time Utility',
    shortDescription:
      'Convert any date and time across multiple IANA time zones using browser Intl data with automatic Daylight Saving Time and UTC offsets.',
    seoTitle: 'Time Zone Converter - Convert Time Between Time Zones | Riad Al Ashekin',
    metaDescription:
      'Convert a date and time between any time zones online. Handles daylight saving time automatically using your browser\'s time zone data.',
    h1: 'Time Zone Converter - Convert Time Between Time Zones',
    intro:
      'Plan international calls and releases accurately across global time zones. Pick a date, time, and source zone, compare multiple target zones simultaneously with UTC offsets, swap zones, or snap to the current clock.',
    howToUse: [
      'Pick a Date & Time and select the Source Time Zone.',
      'Click Now to fill the current wall-clock time in the chosen source zone, or click the Swap button to trade Source with the first target zone.',
      'Review each target zone row showing its exact local date, time, and active UTC offset.',
      'Use the dropdown at the bottom to add more target IANA zones, remove rows, or click Copy All Zones.',
    ],
    features: [
      'Uses browser native Intl.DateTimeFormat and full IANA time zone database',
      'Automatically adjusts UTC offsets for historical and future Daylight Saving Time dates',
      'Multi-zone comparison list with Add Time Zone, Remove, Swap, and Now buttons',
      'Per-zone Copy buttons plus Copy All Zones button',
    ],
    technicalExplanation: {
      heading: 'DST-Aware Conversion via Browser Intl.DateTimeFormat',
      body: 'Hardcoded hour offsets break twice a year when regions change clocks; querying IANA tzdb via Intl.DateTimeFormat resolves exact regional DST rules automatically for the date entered.',
    },
    faqs: [
      {
        question: 'Does the Time Zone Converter handle Daylight Saving Time automatically?',
        answer:
          'Yes. It queries your browser built-in Intl.DateTimeFormat IANA time zone rules for the specific date you enter, so summer and winter offsets adjust automatically for DST transitions.',
      },
      {
        question: 'What does UTC offset mean?',
        answer:
          'A UTC offset (such as GMT-4 or GMT+6) tells you how many hours and minutes ahead of or behind Coordinated Universal Time a region is on that specific calendar date.',
      },
      {
        question: 'What is the difference between UTC and GMT?',
        answer:
          'UTC (Coordinated Universal Time) is the atomic time standard used across computing and global timestamps, while GMT (Greenwich Mean Time) is a time zone aligned with UTC+0 that stays fixed even when London observes British Summer Time (GMT+1).',
      },
      {
        question: 'Can I compare more than two time zones at once?',
        answer:
          'Yes. Use the bottom dropdown and click + Add Time Zone to add as many city or regional IANA zones as you need, and Copy All Zones copies the entire list at once.',
      },
    ],
    relatedToolSlugs: ['unix-timestamp-converter', 'date-difference-calculator', 'countdown-timer'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Time Zone Converter',
      howToUseSteps: [
        'Enter your Date & Time in the top-left picker and select your Source Time Zone.',
        'Click Now to load the current clock time in your source zone, or click Swap to flip the source zone with your top target.',
        'Read the converted times and live UTC offsets across all displayed target zones.',
        'Add or remove zones at the bottom, and click Copy next to any zone or Copy All Zones.',
      ],
      checksOrShowsHeading: 'What the Time Zone Converter does',
      checksOrShowsIntro:
        'Using the browser Intl API directly without external API calls, the converter handles global schedules reliably:',
      checksOrShowsPoints: [
        'Resolves wall-clock times across full IANA zones (supplied by Intl.supportedValuesOf when available, or a built-in global zone list).',
        'Calculates active shortOffset labels (such as GMT-4, GMT+1, GMT+6) for the exact calendar date chosen, respecting Daylight Saving Time.',
        'Lets you add or remove multiple target time zones simultaneously and swap the source zone in one click.',
        'Provides Copy buttons on each time zone row as well as Copy All Zones.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample meeting conversion (July daylight saving date)',
      exampleInput: 'Date & Time: 2026-07-15 09:00 | Source Zone: America/New_York (GMT-4)',
      exampleOutputLabel: 'Target time zone conversions',
      exampleOutput:
        'UTC (UTC): Jul 15, 2026, 1:00 PM\nEurope/London (GMT+1): Jul 15, 2026, 2:00 PM\nAsia/Dhaka (GMT+6): Jul 15, 2026, 7:00 PM\nAsia/Tokyo (GMT+9): Jul 15, 2026, 10:00 PM',
      exampleNote:
        'During January instead of July, New York shifts to GMT-5 and London shifts to GMT+0 automatically.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'Does the Time Zone Converter handle Daylight Saving Time automatically?',
          answer:
            'Yes. It queries your browser built-in Intl.DateTimeFormat IANA time zone rules for the specific date you enter, so summer and winter offsets adjust automatically for DST transitions.',
        },
        {
          question: 'What does UTC offset mean?',
          answer:
            'A UTC offset (such as GMT-4 or GMT+6) tells you how many hours and minutes ahead of or behind Coordinated Universal Time a region is on that specific calendar date.',
        },
        {
          question: 'What is the difference between UTC and GMT?',
          answer:
            'UTC (Coordinated Universal Time) is the atomic time standard used across computing and global timestamps, while GMT (Greenwich Mean Time) is a time zone aligned with UTC+0 that stays fixed even when London observes British Summer Time (GMT+1).',
        },
        {
          question: 'Can I compare more than two time zones at once?',
          answer:
            'Yes. Use the bottom dropdown and click + Add Time Zone to add as many city or regional IANA zones as you need, and Copy All Zones copies the entire list at once.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['unix-timestamp-converter', 'date-difference-calculator', 'countdown-timer'],
    },
  },

  // 40) Countdown Timer (/countdown-timer/)
  {
    id: 'countdown-timer',
    name: 'Countdown Timer',
    slug: 'countdown-timer',
    path: '/countdown-timer/',
    canonicalUrl: 'https://riadalashekin.com/countdown-timer/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Timer Utility',
    shortDescription:
      'Run a timestamp-accurate duration timer or date countdown with fullscreen view and Web Audio alarm chimes that keep accurate time across background tabs.',
    seoTitle: 'Countdown Timer - Online Timer & Countdown to a Date | Riad Al Ashekin',
    metaDescription:
      'Set an online countdown timer in minutes or count down to any date. Full-screen mode and an alarm sound when time is up.',
    h1: 'Countdown Timer - Online Timer & Countdown to a Date',
    intro:
      'Time focus sprints, presentations, or launch dates with a giant readable display. Tracks remaining milliseconds against real system timestamps so background browser tabs never fall behind, and plays an alarm chime when the clock hits zero.',
    howToUse: [
      'Pick Duration Timer (Hours, Minutes, Seconds) or Countdown to Date at the top left.',
      'Enter your target length or pick a future Target Date & Time.',
      'Check Alarm sound at 00:00 if you want audible Web Audio beeps when finished, then click Start.',
      'Use Pause, Reset, Fullscreen, or Copy Time at any point during the countdown.',
    ],
    features: [
      'Two modes: customizable Hours/Minutes/Seconds Duration Timer and Countdown to Date/Time',
      'Timestamp-anchored calculation (endTimestamp - Date.now()) preventing browser tab throttling drift',
      'Fullscreen button via native browser requestFullscreen API',
      'Synthesized 880 Hz Web Audio triple beep alarm on completion plus Copy Time button',
    ],
    technicalExplanation: {
      heading: 'Why Timestamp Anchoring Prevents Background Drift',
      body: 'Browsers throttle setInterval timers inside inactive tabs; comparing Date.now() to the target deadline keeps remaining seconds accurate as soon as you switch back.',
    },
    faqs: [
      {
        question: 'Does the Countdown Timer keep accurate time in a background tab?',
        answer:
          'Yes. Instead of counting ticks one second at a time, the timer saves your target end timestamp and compares it against Date.now() every update, so even if your browser throttles background tabs, the clock catches up immediately.',
      },
      {
        question: 'Can I count down to a specific calendar date and time?',
        answer:
          'Yes. Switch to Countdown to Date mode, select a future date and time in the datetime picker, and press Start to display remaining days, hours, minutes, and seconds.',
      },
      {
        question: 'Does the timer work offline once the page has loaded?',
        answer:
          'Yes. All timing logic and Web Audio alarm synthesis run completely inside the loaded page without requiring an ongoing internet connection.',
      },
      {
        question: 'Why might the alarm chime stay silent in some browsers?',
        answer:
          'Browsers block audio unless triggered after a user click or when Alarm sound at 00:00 is enabled; clicking Start satisfies user-interaction requirements in modern browsers, though device volume must be unmuted.',
      },
    ],
    relatedToolSlugs: ['date-difference-calculator', 'age-calculator', 'time-zone-converter'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Countdown Timer',
      howToUseSteps: [
        'Choose Duration Timer to set Hours, Minutes, and Seconds, or switch to Countdown to Date to pick a future Target Date & Time.',
        'Leave Alarm sound at 00:00 checked if you want three audible Web Audio beeps when the countdown finishes.',
        'Click Start to anchor the deadline and launch the large live display (click Pause anytime to hold remaining milliseconds or Reset to restore your initial target).',
        'Click Fullscreen for across-the-room presentation visibility, or click Copy Time to copy the current formatted readout.',
      ],
      checksOrShowsHeading: 'What the Countdown Timer does',
      checksOrShowsIntro:
        'Built purely with client-side timestamp anchoring and browser audio synthesis, the timer keeps accurate elapsed time even when browser tabs go inactive:',
      checksOrShowsPoints: [
        'Anchors remaining milliseconds to TargetTimestamp - Date.now() instead of counting fixed setInterval ticks, preventing background-tab slowdown drift.',
        'Formats durations under 24 hours as HH:MM:SS and multi-day date countdowns cleanly as Dd HH:MM:SS in tabular monospace numerals.',
        'Highlights the timer panel green with a Time is up! confirmation banner at zero and plays three synthesized 880 Hz Web Audio sine tones when Alarm sound at 00:00 is enabled.',
        'Supports Pause/Resume, Reset, Fullscreen via browser requestFullscreen, and one-click Copy Time controls.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Default 5-minute Duration Timer',
      exampleInput: 'Mode: Duration Timer | Hours: 0 | Minutes: 5 | Seconds: 0',
      exampleOutputLabel: 'Displayed timer sequence',
      exampleOutput: 'Starts at: 00:05:00 -> Midpoint: 00:02:30 -> Complete: 00:00:00 (Time is up!)',
      exampleNote:
        'Even if you switch browser tabs for two full minutes right after pressing Start, comparing against Date.now() snaps the timer accurately back to 00:03:00 upon returning.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'Does the Countdown Timer keep accurate time in a background tab?',
          answer:
            'Yes. Instead of counting ticks one second at a time, the timer saves your target end timestamp and compares it against Date.now() every update, so even if your browser throttles background tabs, the clock catches up immediately.',
        },
        {
          question: 'Can I count down to a specific calendar date and time?',
          answer:
            'Yes. Switch to Countdown to Date mode, select a future date and time in the datetime picker, and press Start to display remaining days, hours, minutes, and seconds.',
        },
        {
          question: 'Does the timer work offline once the page has loaded?',
          answer:
            'Yes. All timing logic and Web Audio alarm synthesis run completely inside the loaded page without requiring an ongoing internet connection.',
        },
        {
          question: 'Why might the alarm chime stay silent in some browsers?',
          answer:
            'Browsers block audio unless triggered after a user click or when Alarm sound at 00:00 is enabled; clicking Start satisfies user-interaction requirements in modern browsers, though device volume must be unmuted.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['date-difference-calculator', 'age-calculator', 'time-zone-converter'],
    },
  },
];
