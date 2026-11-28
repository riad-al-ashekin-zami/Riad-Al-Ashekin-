import { ToolRegistryItem } from './types';

export const utilityTextTools: ToolRegistryItem[] = [
  // 1) Case Converter (/case-converter/)
  {
    id: 'case-converter',
    name: 'Case Converter',
    slug: 'case-converter',
    path: '/case-converter/',
    canonicalUrl: 'https://riadalashekin.com/case-converter/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Text Utility',
    shortDescription:
      'Convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, and kebab-case in your browser.',
    seoTitle: 'Case Converter - Change Text to Upper, Lower, Title & Sentence Case | Riad Al Ashekin',
    metaDescription:
      'Convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case and kebab-case online. Paste text and copy the result.',
    h1: 'Case Converter - Change Text to Upper, Lower, Title & Sentence Case',
    intro:
      'Switch any headline, paragraph, or variable name between seven common text cases without manual retyping. Everything runs locally in your browser with live preview, character counts, and one-click copying.',
    howToUse: [
      'Paste or type your source text into the top input box.',
      'Click any of the seven case mode buttons: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, or kebab-case.',
      'Check the converted result and updated character count in the output box below.',
      'Click Copy to copy the converted text, or Clear to reset the editor.',
    ],
    features: [
      'Seven formatting modes including UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, and kebab-case',
      'Live character count next to the result box',
      'Copy button with temporary Copied confirmation and Clear reset button',
      'Runs 100% locally inside your browser with no server upload',
    ],
    technicalExplanation: {
      heading: 'Consistent Capitalization for Content and Code',
      body: 'Editors, writers, and developers constantly switch between readable prose styles like Title Case and identifier styles like snake_case or camelCase. Running the transformation locally ensures drafts stay private and formatting stays uniform.',
    },
    faqs: [
      {
        question: 'What is the difference between Title Case and Sentence case?',
        answer:
          'Title Case capitalizes the first letter of the first and last words plus major content words while keeping short minor words lowercase. Sentence case lowercases all letters first and only capitalizes the first letter after sentence-ending punctuation.',
      },
      {
        question: 'What are camelCase and snake_case used for?',
        answer:
          'camelCase joins words with capital letters starting on the second word and is common in JavaScript and Java variable names. snake_case separates lowercase words with underscores and is widely used in Python, SQL columns, and API payloads.',
      },
      {
        question: 'Does the Case Converter change numbers or symbols?',
        answer:
          'UPPERCASE, lowercase, Title Case, and Sentence case leave digits and punctuation intact. Identifier modes such as camelCase, snake_case, and kebab-case keep letters and numbers while replacing spaces and non-alphanumeric separators.',
      },
      {
        question: 'Is my pasted text sent to any server?',
        answer:
          'No. Every conversion runs directly in your browser using JavaScript, so nothing you type or paste leaves your device.',
      },
    ],
    relatedToolSlugs: ['remove-extra-spaces', 'find-and-replace-text', 'character-counter'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Case Converter',
      howToUseSteps: [
        'Paste or type your text into the Input Text box at the top of the tool.',
        'Select one of the seven mode buttons: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, or kebab-case.',
        'Review the live output and its total character count in the Converted Result box below.',
        'Click Copy to save the converted result to your clipboard, or click Clear to start fresh with empty text.',
      ],
      checksOrShowsHeading: 'What the Case Converter does',
      checksOrShowsIntro:
        'The Case Converter updates your text immediately in your browser and supports seven distinct text transformations without uploading data anywhere:',
      checksOrShowsPoints: [
        'UPPERCASE converts every letter to capitals and lowercase turns every letter to small characters while keeping numbers and punctuation untouched.',
        'Title Case capitalizes primary words while leaving common minor words such as and, of, in, on, and the lowercase unless they begin or end the text.',
        'Sentence case lowercases the block and capitalizes the first character of each new sentence after periods, exclamation marks, or question marks.',
        'camelCase, snake_case, and kebab-case normalize words into programming and URL-friendly formats using capitals, underscores, or hyphens.',
        'Result box displays the exact character count of your converted string alongside Clear and Copy controls.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample input text',
      exampleInput: 'welcome to the technical SEO audit guide 2026',
      exampleOutputLabel: 'Returned outputs by mode',
      exampleOutput:
        'Title Case: Welcome to the Technical SEO Audit Guide 2026\nSentence case: Welcome to the technical seo audit guide 2026\ncamelCase: welcomeToTheTechnicalSeoAuditGuide2026\nsnake_case: welcome_to_the_technical_seo_audit_guide_2026\nkebab-case: welcome-to-the-technical-seo-audit-guide-2026',
      exampleNote:
        'Notice that numbers like 2026 remain unchanged across all modes, and Title Case keeps short connecting words like to and the lowercase.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What is the difference between Title Case and Sentence case?',
          answer:
            'Title Case capitalizes the first letter of the first and last words plus major content words while keeping short minor words lowercase. Sentence case lowercases all letters first and only capitalizes the first letter after sentence-ending punctuation.',
        },
        {
          question: 'What are camelCase and snake_case used for?',
          answer:
            'camelCase joins words with capital letters starting on the second word and is common in JavaScript and Java variable names. snake_case separates lowercase words with underscores and is widely used in Python, SQL columns, and API payloads.',
        },
        {
          question: 'Does the Case Converter change numbers or symbols?',
          answer:
            'UPPERCASE, lowercase, Title Case, and Sentence case leave digits and punctuation intact. Identifier modes such as camelCase, snake_case, and kebab-case keep letters and numbers while replacing spaces and non-alphanumeric separators.',
        },
        {
          question: 'Is my pasted text sent to any server?',
          answer:
            'No. Every conversion runs directly in your browser using JavaScript, so nothing you type or paste leaves your device.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['remove-extra-spaces', 'find-and-replace-text', 'character-counter'],
    },
  },

  // 2) Remove Duplicate Lines (/remove-duplicate-lines/)
  {
    id: 'remove-duplicate-lines',
    name: 'Remove Duplicate Lines',
    slug: 'remove-duplicate-lines',
    path: '/remove-duplicate-lines/',
    canonicalUrl: 'https://riadalashekin.com/remove-duplicate-lines/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'List Utility',
    shortDescription:
      'Delete repeated lines from any list with options for case sensitivity, trimming spaces, keeping first occurrence, and removing empty lines.',
    seoTitle: 'Remove Duplicate Lines - Delete Repeated Lines from Text | Riad Al Ashekin',
    metaDescription:
      'Remove duplicate lines from any list or text online. Options for case-sensitive matching, trimming spaces and removing empty lines. Copy the clean list.',
    h1: 'Remove Duplicate Lines - Delete Repeated Lines from Text',
    intro:
      'Clean up repeated URLs, email lists, keywords, or log lines in one step. Filter exact or case-insensitive duplicates directly in your browser while tracking how many lines were removed.',
    howToUse: [
      'Paste your line-by-line list into the Input List box.',
      'Choose matching options including Case-sensitive, Trim spaces, Remove empty lines, and Keep first occurrence.',
      'Review the deduplicated list and line count summary on the right.',
      'Click Copy to copy the unique lines, or Use Clean Output as Input to refine further.',
    ],
    features: [
      'Case-sensitive and case-insensitive duplicate matching',
      'Optional leading and trailing space trimming before comparison',
      'Toggle to keep first or last occurrence and skip empty lines',
      'Live counters for lines before, lines after, and duplicates removed',
    ],
    technicalExplanation: {
      heading: 'Reliable Client-Side List Deduplication',
      body: 'Duplicates often creep into keyword exports and email lists with subtle differences in whitespace or capitalization. Normalizing spaces and case during comparison keeps the cleanest entry without changing original line order.',
    },
    faqs: [
      {
        question: 'Does the tool keep the original line order?',
        answer:
          'Yes. When Keep first occurrence is enabled, each unique line stays in the exact position where it first appeared. Unchecking Keep first occurrence keeps the final appearance of each line instead.',
      },
      {
        question: 'Is duplicate matching case-sensitive?',
        answer:
          'You decide using the Case-sensitive checkbox. When off, Apple and apple are treated as duplicates; when on, they remain separate lines because their letter case differs.',
      },
      {
        question: 'How large a list can Remove Duplicate Lines handle?',
        answer:
          'Because deduplication runs locally inside your web browser rather than on a remote server, the maximum size depends on your device memory and browser performance. Lists of tens of thousands of lines usually process cleanly.',
      },
      {
        question: 'Does trimming spaces change the displayed lines?',
        answer:
          'Yes. When Trim spaces is checked, leading and trailing spaces and tabs are removed both when comparing lines for duplicates and in the final cleaned output.',
      },
    ],
    relatedToolSlugs: ['sort-lines', 'comma-separator', 'remove-line-breaks'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Remove Duplicate Lines',
      howToUseSteps: [
        'Paste your list into the Input List textarea with one item on each line.',
        'Toggle the checkboxes above the editor for Case-sensitive matching, Trim spaces, Remove empty lines, and Keep first occurrence.',
        'Check the deduplicated lines in the Clean Output panel along with the Lines Before, Lines After, and Removed counters.',
        'Click Copy to save the unique lines to your clipboard, or Clear to empty the list.',
      ],
      checksOrShowsHeading: 'What the Remove Duplicate Lines does',
      checksOrShowsIntro:
        'The tool compares every line in memory inside your browser and displays both the cleaned list and exact line statistics:',
      checksOrShowsPoints: [
        'Tracks lines before processing, lines remaining afterward, and total duplicate lines removed in real time.',
        'Case-sensitive toggle lets you treat uppercase and lowercase variations as either distinct lines or identical entries.',
        'Trim spaces removes stray spaces and tabs from the start and end of each line so visually identical entries match reliably.',
        'Remove empty lines filters out blank rows, while Keep first occurrence lets you choose between keeping the first match or only the last match.',
        'Copy and Use Clean Output as Input buttons simplify copying or chaining cleanups locally without network requests.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample input list (Trim spaces on, Case-sensitive off)',
      exampleInput: 'apple\nBanana\n  apple  \norange\nbanana\n\norange',
      exampleOutputLabel: 'Returned output and statistics',
      exampleOutput: 'apple\nBanana\norange\n\nLines Before: 7 | Lines After: 3 | Removed: 4',
      exampleNote:
        'With Case-sensitive turned off, both trimmed "apple" entries match, "banana" matches "Banana", the repeated "orange" is dropped, and the blank line is removed.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'Does the tool keep the original line order?',
          answer:
            'Yes. When Keep first occurrence is enabled, each unique line stays in the exact position where it first appeared. Unchecking Keep first occurrence keeps the final appearance of each line instead.',
        },
        {
          question: 'Is duplicate matching case-sensitive?',
          answer:
            'You decide using the Case-sensitive checkbox. When off, Apple and apple are treated as duplicates; when on, they remain separate lines because their letter case differs.',
        },
        {
          question: 'How large a list can Remove Duplicate Lines handle?',
          answer:
            'Because deduplication runs locally inside your web browser rather than on a remote server, the maximum size depends on your device memory and browser performance. Lists of tens of thousands of lines usually process cleanly.',
        },
        {
          question: 'Does trimming spaces change the displayed lines?',
          answer:
            'Yes. When Trim spaces is checked, leading and trailing spaces and tabs are removed both when comparing lines for duplicates and in the final cleaned output.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['sort-lines', 'comma-separator', 'remove-line-breaks'],
    },
  },

  // 3) Sort Lines (/sort-lines/)
  {
    id: 'sort-lines',
    name: 'Sort Lines',
    slug: 'sort-lines',
    path: '/sort-lines/',
    canonicalUrl: 'https://riadalashekin.com/sort-lines/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'List Utility',
    shortDescription:
      'Sort lines of text alphabetically (A–Z, Z–A), numerically, by line length, or randomly in your browser with duplicate and blank-line removal.',
    seoTitle: 'Sort Lines - Sort Text Lines Alphabetically or by Length | Riad Al Ashekin',
    metaDescription:
      'Sort lines of text A to Z, Z to A, by length or numerically. Option to remove duplicates and empty lines. Free online line sorter.',
    h1: 'Sort Lines - Sort Text Lines Alphabetically or by Length',
    intro:
      'Order lists alphabetically, sort numbers properly from lowest to highest, rank strings by character length, or shuffle lines into a randomized sequence—all privately in your browser.',
    howToUse: [
      'Paste your lines of text into the Input Lines textarea.',
      'Pick one of the seven sort buttons: A to Z, Z to A, Numeric (Low–High), Numeric (High–Low), Shortest First, Longest First, or Random Shuffle.',
      'Adjust optional checkboxes for Case-insensitive comparison, Remove empty lines, and Remove duplicates.',
      'Click Random Shuffle again anytime to draw a new randomized order, or click Copy to save the sorted output.',
    ],
    features: [
      'Seven ordering modes: A–Z, Z–A, Numeric Low–High, Numeric High–Low, Shortest First, Longest First, and Random Shuffle',
      'Optional case-insensitive sorting, empty line filtering, and exact deduplication',
      'Displays total sorted line count and Copy button',
      'Client-side shuffling powered by Web Crypto random integers',
    ],
    technicalExplanation: {
      heading: 'Alphabetical vs. Numeric Ordering',
      body: 'Plain text sorters treat numbers as characters, placing 10 before 2. Dedicated numeric sorting parses actual numerical values including decimals and negative numbers so measurements and prices sort accurately.',
    },
    faqs: [
      {
        question: 'How does numeric sort differ from alphabetical sort?',
        answer:
          'Alphabetical sort compares characters from left to right, so "10" comes before "2" because "1" precedes "2". Numeric sort converts the number on each line into a real numeric value so 2 comes before 10.',
      },
      {
        question: 'Can Sort Lines handle numbers with decimals?',
        answer:
          'Yes. Numeric Ascending and Numeric Descending parse full floating-point numbers, including decimals like 3.14 and negative values such as -5.5.',
      },
      {
        question: 'Does sorting change the content inside each line?',
        answer:
          'No. Sorting only reorders lines unless you turn on Remove empty lines or Remove duplicates to drop extra rows.',
      },
      {
        question: 'How is Random Shuffle generated?',
        answer:
          'Random Shuffle uses the browser Web Crypto API (crypto.getRandomValues) with Fisher-Yates shuffling to randomize line order locally without predictable seeds.',
      },
    ],
    relatedToolSlugs: ['remove-duplicate-lines', 'comma-separator', 'reverse-text'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Sort Lines',
      howToUseSteps: [
        'Paste your list of items, keywords, or numbers into the Input Lines box with one entry on each line.',
        'Select one of the seven mode buttons above the editor: A to Z, Z to A, Numeric (Low–High), Numeric (High–Low), Shortest First, Longest First, or Random Shuffle.',
        'Toggle the Case-insensitive, Remove empty lines, or Remove duplicates checkboxes depending on how clean you want the final sorted list.',
        'Inspect the ordered list and line count in Sorted Output, then click Copy to copy the results or Clear to reset.',
      ],
      checksOrShowsHeading: 'What the Sort Lines does',
      checksOrShowsIntro:
        'Sort Lines reorders multi-line text directly inside your browser using seven distinct sorting modes and optional pre-sort cleanup filters without sending data to any server:',
      checksOrShowsPoints: [
        'Alphabetical sorting (A to Z and Z to A) orders rows using locale-aware comparison, and the Case-insensitive checkbox lets you ignore capital-letter differences while ordering or deduplicating.',
        'Numeric (Low–High) and Numeric (High–Low) extract leading numbers—including negative values and decimals—so numbers like 2, 10, and 100 sort mathematically, while any non-numeric text lines fall cleanly to the end.',
        'Shortest First and Longest First compare the character length of each line from shortest to longest or longest to shortest, breaking equal-length ties alphabetically.',
        'Random Shuffle applies Fisher-Yates shuffling using browser Web Crypto randomness, and clicking Random Shuffle again draws a fresh random sequence.',
        'Optional Remove empty lines and Remove duplicates checkboxes strip blank rows and repeated entries before sorting begins.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample input (Numeric Low to High, Remove duplicates on)',
      exampleInput: '100\n2.5\n20\n2.5\n-4',
      exampleOutputLabel: 'Sorted output',
      exampleOutput: '-4\n2.5\n20\n100\n\n(Sorted Output: 4 lines)',
      exampleNote:
        'Duplicate 2.5 is filtered out before sorting, and numeric ordering places -4, 2.5, 20, and 100 in true mathematical sequence instead of treating 100 as coming before 20.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'How does numeric sort differ from alphabetical sort?',
          answer:
            'Alphabetical sort compares characters from left to right, so "10" comes before "2" because "1" precedes "2". Numeric sort converts the number on each line into a real numeric value so 2 comes before 10.',
        },
        {
          question: 'Can Sort Lines handle numbers with decimals?',
          answer:
            'Yes. Numeric Ascending and Numeric Descending parse full floating-point numbers, including decimals like 3.14 and negative values such as -5.5.',
        },
        {
          question: 'Does sorting change the content inside each line?',
          answer:
            'No. Sorting only reorders lines unless you turn on Remove empty lines or Remove duplicates to drop extra rows.',
        },
        {
          question: 'How is Random Shuffle generated?',
          answer:
            'Random Shuffle uses the browser Web Crypto API (crypto.getRandomValues) with Fisher-Yates shuffling to randomize line order locally without predictable seeds.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['remove-duplicate-lines', 'comma-separator', 'reverse-text'],
    },
  },

  // 4) Remove Line Breaks (/remove-line-breaks/)
  {
    id: 'remove-line-breaks',
    name: 'Remove Line Breaks',
    slug: 'remove-line-breaks',
    path: '/remove-line-breaks/',
    canonicalUrl: 'https://riadalashekin.com/remove-line-breaks/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Text Utility',
    shortDescription:
      'Remove unwanted line breaks copied from PDFs or emails, keep double-spaced paragraphs, or join lines with spaces, commas, or a custom separator.',
    seoTitle: 'Remove Line Breaks - Join Lines & Remove Paragraph Breaks | Riad Al Ashekin',
    metaDescription:
      'Remove line breaks from text copied from PDFs or emails. Keep paragraph breaks or join everything into one line, with a custom separator.',
    h1: 'Remove Line Breaks - Join Lines & Remove Paragraph Breaks',
    intro:
      'Fix choppy text copied from PDF documents, scanned reports, and email columns. Flatten everything into one clean paragraph, keep intentional blank-line paragraph breaks, or join lines with any separator.',
    howToUse: [
      'Paste text containing unwanted hard line breaks into the Input Text box.',
      'Select a mode: Remove All Line Breaks (join with spaces), Keep Paragraph Breaks (preserve blank lines between paragraphs), or Custom Separator.',
      'If using Custom Separator, enter any delimiter such as a comma, semicolon, pipe, or click a quick preset like Comma+Space.',
      'Click Copy to copy the joined output.',
    ],
    features: [
      'Full flattening mode that removes every line break into flowing prose',
      'Paragraph-preserving mode that wraps single breaks while retaining double line breaks',
      'Custom separator mode with instant Space, Comma, and Comma+Space presets',
      'Handles Windows CRLF and Unix LF line endings cleanly in the browser',
    ],
    technicalExplanation: {
      heading: 'Cleaning Hard-Wrapped PDF and Email Text',
      body: 'PDF layouts store visual line coordinates rather than flowing paragraphs, so copying text injects newline characters at the right margin of every line. Preserving double line breaks repairs sentences while keeping real section breaks.',
    },
    faqs: [
      {
        question: 'Why does text copied from a PDF have unwanted line breaks?',
        answer:
          'PDF files position text line by line at fixed coordinates on a page rather than storing reflowable paragraphs. When you select and copy that text, the PDF viewer inserts a hard newline character at the end of every visual line.',
      },
      {
        question: 'How do I keep paragraph breaks while removing wrapped lines?',
        answer:
          'Select the Keep Paragraph Breaks mode. The tool collapses single line breaks inside each paragraph into normal spaces while keeping blank lines (two consecutive line breaks) intact.',
      },
      {
        question: 'Can I replace line breaks with commas or another separator?',
        answer:
          'Yes. Switch to Replace with Custom Separator, type a comma, semicolon, pipe, or any custom string into the separator box—or click the Comma (, ) preset button.',
      },
      {
        question: 'Does the tool collapse extra spacing caused by indented lines?',
        answer:
          'Yes. When removing line breaks or keeping paragraph breaks, surrounding line whitespace and double spaces are collapsed into a single clean space.',
      },
    ],
    relatedToolSlugs: ['remove-extra-spaces', 'comma-separator', 'find-and-replace-text'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Remove Line Breaks',
      howToUseSteps: [
        'Paste your multi-line text or PDF excerpt into the Input Text textarea.',
        'Pick one of three modes: Remove All Line Breaks, Keep Paragraph Breaks, or Replace with Custom Separator.',
        'When using a custom separator, type your delimiter or click one of the Space, Comma, or Comma+Space quick buttons.',
        'Click Copy below the Result box to copy the formatted text.',
      ],
      checksOrShowsHeading: 'What the Remove Line Breaks does',
      checksOrShowsIntro:
        'The tool normalizes line endings locally in your browser and provides three distinct ways to rejoin wrapped lines:',
      checksOrShowsPoints: [
        'Remove All Line Breaks converts every Windows or Unix newline into spaces and collapses extra whitespace so all text flows on a single line.',
        'Keep Paragraph Breaks keeps double line breaks (blank lines between paragraphs) intact while converting single mid-sentence wraps into single spaces.',
        'Replace with Custom Separator trims empty edges and joins non-empty lines with any string you specify, such as ", " or ";".',
        'Includes quick-fill separator buttons for Space, Comma, and Comma+Space plus Copy and Clear actions.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample PDF copy (Keep Paragraph Breaks mode)',
      exampleInput: 'This sentence was\ncopied from a PDF\nwith hard wraps.\n\nSecond paragraph starts\non a new line.',
      exampleOutputLabel: 'Returned output',
      exampleOutput: 'This sentence was copied from a PDF with hard wraps.\n\nSecond paragraph starts on a new line.',
      exampleNote:
        'Single line breaks inside each paragraph are joined cleanly into continuous text while the blank line separating the two paragraphs stays preserved.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'Why does text copied from a PDF have unwanted line breaks?',
          answer:
            'PDF files position text line by line at fixed coordinates on a page rather than storing reflowable paragraphs. When you select and copy that text, the PDF viewer inserts a hard newline character at the end of every visual line.',
        },
        {
          question: 'How do I keep paragraph breaks while removing wrapped lines?',
          answer:
            'Select the Keep Paragraph Breaks mode. The tool collapses single line breaks inside each paragraph into normal spaces while keeping blank lines (two consecutive line breaks) intact.',
        },
        {
          question: 'Can I replace line breaks with commas or another separator?',
          answer:
            'Yes. Switch to Replace with Custom Separator, type a comma, semicolon, pipe, or any custom string into the separator box—or click the Comma (, ) preset button.',
        },
        {
          question: 'Does the tool collapse extra spacing caused by indented lines?',
          answer:
            'Yes. When removing line breaks or keeping paragraph breaks, surrounding line whitespace and double spaces are collapsed into a single clean space.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['remove-extra-spaces', 'comma-separator', 'find-and-replace-text'],
    },
  },

  // 5) Remove Extra Spaces (/remove-extra-spaces/)
  {
    id: 'remove-extra-spaces',
    name: 'Remove Extra Spaces',
    slug: 'remove-extra-spaces',
    path: '/remove-extra-spaces/',
    canonicalUrl: 'https://riadalashekin.com/remove-extra-spaces/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Text Utility',
    shortDescription:
      'Remove double spaces, leading and trailing spaces, tabs, non-breaking spaces, and blank lines from text in one click.',
    seoTitle: 'Remove Extra Spaces - Clean Up Double Spaces, Tabs & Whitespace | Riad Al Ashekin',
    metaDescription:
      'Remove double spaces, leading and trailing spaces, tabs and blank lines from text online. Clean whitespace in one click and copy the result.',
    h1: 'Remove Extra Spaces - Clean Up Double Spaces, Tabs & Whitespace',
    intro:
      'Strip messy formatting left behind by word processors, spreadsheets, and web scraping. Collapse repeated spaces, convert tabs, clean non-breaking spaces, trim lines, and count every character removed.',
    howToUse: [
      'Paste the unformatted or over-spaced text into the Input Text textarea.',
      'Select the whitespace rules you want: Collapse multiple spaces, Trim each line, Convert tabs to spaces, Clean non-breaking spaces, Remove blank lines, or Remove all spaces.',
      'Inspect the Cleaned Output box and the counter showing how many characters were removed.',
      'Click Copy to copy the cleaned text.',
    ],
    features: [
      'Collapse double and triple spaces down to a single space',
      'Trim leading and trailing spaces on every line',
      'Convert tabs to single spaces and replace Unicode non-breaking spaces (U+00A0)',
      'Remove blank lines or strip all horizontal spaces completely, plus character removal counter',
    ],
    technicalExplanation: {
      heading: 'Eliminating Invisible Whitespace Bugs',
      body: 'Rich-text editors and HTML copies often insert invisible non-breaking spaces or stray tabs that break CSV imports, code snippets, and spreadsheet matching. Explicit whitespace normalization replaces them deterministically.',
    },
    faqs: [
      {
        question: 'What characters count as whitespace in this tool?',
        answer:
          'This tool specifically handles standard space characters, horizontal tab characters (\\t), Unicode non-breaking spaces (U+00A0), leading and trailing line spacing, and blank lines between rows.',
      },
      {
        question: 'What is the difference between trimming lines and collapsing spaces?',
        answer:
          'Trimming removes spaces and tabs only from the beginning and end of each line. Collapsing replaces runs of two or more consecutive spaces inside a sentence with a single space.',
      },
      {
        question: 'Does this tool remove non-breaking spaces?',
        answer:
          'Yes. When Clean non-breaking spaces is enabled, Unicode non-breaking space characters (U+00A0, often copied from HTML or Word) are converted into normal spaces before collapsing or trimming.',
      },
      {
        question: 'What happens if I check Remove all spaces?',
        answer:
          'Remove all spaces strips every space, tab, and non-breaking space character from the text while keeping line breaks unless Remove blank lines is also checked.',
      },
    ],
    relatedToolSlugs: ['remove-line-breaks', 'case-converter', 'html-cleaner'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Remove Extra Spaces',
      howToUseSteps: [
        'Paste your messy text containing extra spaces, tabs, non-breaking spaces, or blank rows into the Input Text box.',
        'Check or uncheck the six whitespace controls above the editor to choose exactly which space patterns to strip or collapse.',
        'Watch the Cleaned Output panel update in real time alongside the green counter showing how many characters were removed.',
        'Click Copy to copy the cleaned result to your clipboard, or click Clear to empty the editor and start over.',
      ],
      checksOrShowsHeading: 'What the Remove Extra Spaces does',
      checksOrShowsIntro:
        'Each toggle normalizes line endings and cleans a specific whitespace pattern strictly inside your browser without uploading text:',
      checksOrShowsPoints: [
        'Collapse multiple spaces shrinks repeated consecutive spaces down to one normal space while leaving single word spacing untouched.',
        'Trim each line removes leading and trailing spaces at the beginning and end of every row without merging separate lines together.',
        'Convert tabs to spaces turns horizontal tab characters into standard spaces, while Clean non-breaking spaces replaces invisible HTML U+00A0 characters with regular spaces.',
        'Remove blank lines deletes empty or whitespace-only rows between paragraphs cleanly.',
        'Remove all spaces strips every space, tab, and non-breaking space at once (and temporarily disables individual collapse and trim checkboxes while active), paired with a live characters-removed counter plus Copy and Clear buttons.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample messy input',
      exampleInput: '  Hello\t\tworld   from   this tool!  \n\n\n   Clean   spaces   now.  ',
      exampleOutputLabel: 'Cleaned output (default options)',
      exampleOutput: 'Hello world from this tool!\nClean spaces now.\n\n(25 characters removed)',
      exampleNote:
        'Tab characters convert into regular spaces, repeated internal gaps collapse to single spaces, blank lines are filtered out, and leading and trailing spaces on each line are trimmed cleanly.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What characters count as whitespace in this tool?',
          answer:
            'This tool specifically handles standard space characters, horizontal tab characters (\\t), Unicode non-breaking spaces (U+00A0), leading and trailing line spacing, and blank lines between rows.',
        },
        {
          question: 'What is the difference between trimming lines and collapsing spaces?',
          answer:
            'Trimming removes spaces and tabs only from the beginning and end of each line. Collapsing replaces runs of two or more consecutive spaces inside a sentence with a single space.',
        },
        {
          question: 'Does this tool remove non-breaking spaces?',
          answer:
            'Yes. When Clean non-breaking spaces is enabled, Unicode non-breaking space characters (U+00A0, often copied from HTML or Word) are converted into normal spaces before collapsing or trimming.',
        },
        {
          question: 'What happens if I check Remove all spaces?',
          answer:
            'Remove all spaces strips every space, tab, and non-breaking space character from the text while keeping line breaks unless Remove blank lines is also checked.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['remove-line-breaks', 'case-converter', 'html-cleaner'],
    },
  },

  // 6) Find and Replace Text (/find-and-replace-text/)
  {
    id: 'find-and-replace-text',
    name: 'Find and Replace Text',
    slug: 'find-and-replace-text',
    path: '/find-and-replace-text/',
    canonicalUrl: 'https://riadalashekin.com/find-and-replace-text/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Text Utility',
    shortDescription:
      'Find and replace words, phrases, or regex patterns in text with case-sensitive and whole-word options plus live match count.',
    seoTitle: 'Find and Replace Text - Replace Words in Text Online | Riad Al Ashekin',
    metaDescription:
      'Find and replace words or phrases in any text online. Options for case-sensitive, whole-word and regex matching, with a count of replacements.',
    h1: 'Find and Replace Text - Replace Words in Text Online',
    intro:
      'Replace repeated words, update product names, or run pattern-based swaps across any block of text. Toggle case sensitivity, whole-word boundaries, or JavaScript regular expressions with instant match counting.',
    howToUse: [
      'Type the word, phrase, or pattern to search for in the Find field.',
      'Enter your replacement string in the Replace With field (leave blank to delete matches).',
      'Toggle Case-sensitive, Whole word, and Use regular expression options as needed.',
      'Inspect the Matches replaced counter and copy the Updated Text, or click Apply Output as New Input to run another pass.',
    ],
    features: [
      'Instant global find-and-replace across multi-line text',
      'Optional case-sensitive matching and whole-word boundary matching',
      'JavaScript regular expression support with capture group replacement ($1, $2) and syntax error messages',
      'Live match count and Apply Output as New Input button for chained edits',
    ],
    technicalExplanation: {
      heading: 'Safe Global Search and Pattern Substitution',
      body: 'Plain string matching automatically escapes regex metacharacters like dots and parentheses so literal searches behave predictably, while Regex mode unlocks full JavaScript RegExp patterns locally.',
    },
    faqs: [
      {
        question: 'How do I replace a word everywhere at once?',
        answer:
          'Paste your text into Source Text and type the word into the Find field and its new value into Replace With. The tool applies a global match automatically so every occurrence in the text updates at once.',
      },
      {
        question: 'What does whole-word matching mean?',
        answer:
          'Whole-word matching adds word boundaries around your search term. For example, replacing "cat" with Whole word enabled changes "cat" but skips words containing those letters inside them such as "catalog" or "scatter".',
      },
      {
        question: 'Can I use regular expressions in Find and Replace Text?',
        answer:
          'Yes. Check Use regular expression to write JavaScript regex patterns in the Find box and use replacement references like $1 in Replace With. Invalid regex patterns display a clear error banner.',
      },
      {
        question: 'How can I run multiple different replacements on the same text?',
        answer:
          'After your first swap, click Apply Output as New Input to move the updated result back into Source Text, then enter your next Find and Replace values.',
      },
    ],
    relatedToolSlugs: ['regex-tester', 'case-converter', 'remove-extra-spaces'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Find and Replace Text',
      howToUseSteps: [
        'Enter the term or pattern you want to find in the Find field and the new text in Replace With.',
        'Paste or type your content into the Source Text box on the left.',
        'Enable Case-sensitive, Whole word, or Use regular expression checkboxes to control how matches are selected.',
        'Check the Matches replaced counter and Updated Text box on the right, then click Copy to copy your updated text.',
      ],
      checksOrShowsHeading: 'What the Find and Replace Text does',
      checksOrShowsIntro:
        'Find and Replace Text performs live global replacements inside your browser and protects you from accidental partial matches or invalid regex syntax:',
      checksOrShowsPoints: [
        'Replaces all matching instances globally across the entire source text in real time and displays the exact count of matches replaced.',
        'Case-sensitive toggle controls whether uppercase and lowercase letters must match identically.',
        'Whole word wraps the pattern in word boundaries (\\b) so short words do not overwrite substrings inside longer words.',
        'Use regular expression unlocks JavaScript RegExp search syntax with clear inline error reporting if a pattern has unclosed brackets or invalid syntax.',
        'Apply Output as New Input lets you chain several replacements one after another without re-pasting.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Source text (Find: "fox", Replace With: "cat", Whole word on, Case-sensitive off)',
      exampleInput: 'The quick brown fox jumps over the lazy fox. Another FOX appeared.',
      exampleOutputLabel: 'Updated text',
      exampleOutput: 'The quick brown cat jumps over the lazy cat. Another cat appeared.\n\nMatches replaced: 3',
      exampleNote:
        'With Case-sensitive unchecked, both lowercase "fox" and uppercase "FOX" match, while turning Case-sensitive on replaces only the two lowercase matches.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'How do I replace a word everywhere at once?',
          answer:
            'Paste your text into Source Text and type the word into the Find field and its new value into Replace With. The tool applies a global match automatically so every occurrence in the text updates at once.',
        },
        {
          question: 'What does whole-word matching mean?',
          answer:
            'Whole-word matching adds word boundaries around your search term. For example, replacing "cat" with Whole word enabled changes "cat" but skips words containing those letters inside them such as "catalog" or "scatter".',
        },
        {
          question: 'Can I use regular expressions in Find and Replace Text?',
          answer:
            'Yes. Check Use regular expression to write JavaScript regex patterns in the Find box and use replacement references like $1 in Replace With. Invalid regex patterns display a clear error banner.',
        },
        {
          question: 'How can I run multiple different replacements on the same text?',
          answer:
            'After your first swap, click Apply Output as New Input to move the updated result back into Source Text, then enter your next Find and Replace values.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['regex-tester', 'case-converter', 'remove-extra-spaces'],
    },
  },

  // 7) Reverse Text (/reverse-text/)
  {
    id: 'reverse-text',
    name: 'Reverse Text',
    slug: 'reverse-text',
    path: '/reverse-text/',
    canonicalUrl: 'https://riadalashekin.com/reverse-text/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Text Utility',
    shortDescription:
      'Flip text backwards by character, reverse word order, reverse line order, or reverse letters inside each word.',
    seoTitle: 'Reverse Text - Flip Text, Words or Lines Backwards | Riad Al Ashekin',
    metaDescription:
      'Reverse text online: flip every character, reverse word order or reverse line order. Free text reverser with copy button.',
    h1: 'Reverse Text - Flip Text, Words or Lines Backwards',
    intro:
      'Mirror any string backwards character by character, invert sentence word order, flip multi-line lists upside down, or reverse letters inside individual words cleanly in your browser.',
    howToUse: [
      'Paste or enter text in the Input Text textarea.',
      'Select one of the four modes: Reverse Characters, Reverse Word Order, Reverse Line Order, or Reverse Each Word.',
      'View the flipped text update live in the Reversed Output box.',
      'Click Copy to copy the reversed text to your clipboard.',
    ],
    features: [
      'Four reversal modes: Reverse Characters, Reverse Word Order, Reverse Line Order, and Reverse Each Word',
      'Unicode code-point splitting via Array.from so standard multi-byte emoji stay intact instead of breaking surrogate pairs',
      'Live side-by-side preview with Copy and Clear buttons',
      'Works completely offline inside your browser',
    ],
    technicalExplanation: {
      heading: 'Four Ways to Reverse Text Structure',
      body: 'Character reversal mirrors the whole block from last character to first, whereas word-order and line-order reversal preserve spelling while inverting sequence.',
    },
    faqs: [
      {
        question: 'What is the difference between reversing characters and reversing words?',
        answer:
          'Reverse Characters flips every single letter and symbol from end to start ("Hello world" becomes "dlrow olleH"). Reverse Word Order keeps each word readable while reversing their sequence ("world Hello").',
      },
      {
        question: 'Does Reverse Text work properly with emojis?',
        answer:
          'Single-code-point emojis stay intact because the tool splits text using Array.from rather than basic 16-bit code units. Complex multi-code-point ZWJ sequences such as family emojis may still split at joiner points.',
      },
      {
        question: 'What are common uses for reversed text?',
        answer:
          'Developers and writers use text reversal to flip chronological log lines upside down, test right-to-left string behavior, create word puzzles, and check palindromes.',
      },
      {
        question: 'Can I reverse multiple lines from bottom to top?',
        answer:
          'Yes. Choose Reverse Line Order to flip the order of lines from bottom to top while keeping the words on every line in their normal left-to-right reading order.',
      },
    ],
    relatedToolSlugs: ['sort-lines', 'case-converter', 'text-to-binary'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Reverse Text',
      howToUseSteps: [
        'Paste or type your sentence, paragraph, or multi-line list into the Input Text field on the left.',
        'Select one of the four reversal buttons along the top: Reverse Characters, Reverse Word Order, Reverse Line Order, or Reverse Each Word.',
        'Check the Reversed Output box on the right as every edit updates the flipped text immediately.',
        'Click Copy to save the reversed string to your clipboard, or click Clear to reset both boxes.',
      ],
      checksOrShowsHeading: 'What the Reverse Text does',
      checksOrShowsIntro:
        'Reverse Text transforms your string locally in browser memory across four dedicated reversal modes suited for lists, debugging, and puzzles:',
      checksOrShowsPoints: [
        'Reverse Characters flips the entire string character by character from end to start across lines.',
        'Reverse Word Order reverses the order of whitespace-separated words within each line while keeping every word spelled normally from left to right.',
        'Reverse Line Order flips the vertical order of lines in a multi-line block from bottom to top while keeping words on each line untouched.',
        'Reverse Each Word mirrors the letters inside each individual word while preserving word positions, spaces, and line breaks.',
        'Iterates Unicode code points using Array.from so standard emojis and extended characters stay intact instead of splitting into broken surrogate halves, with Clear and Copy controls included.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample input',
      exampleInput: 'Hello world!',
      exampleOutputLabel: 'Outputs by mode',
      exampleOutput:
        'Reverse Characters: !dlrow olleH\nReverse Word Order: world! Hello\nReverse Each Word: olleH !dlrow',
      exampleNote:
        'When working with multi-line logs or lists, Reverse Line Order moves the bottom line to the top while keeping each line readable in its original direction.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What is the difference between reversing characters and reversing words?',
          answer:
            'Reverse Characters flips every single letter and symbol from end to start ("Hello world" becomes "dlrow olleH"). Reverse Word Order keeps each word readable while reversing their sequence ("world Hello").',
        },
        {
          question: 'Does Reverse Text work properly with emojis?',
          answer:
            'Single-code-point emojis stay intact because the tool splits text using Array.from rather than basic 16-bit code units. Complex multi-code-point ZWJ sequences such as family emojis may still split at joiner points.',
        },
        {
          question: 'What are common uses for reversed text?',
          answer:
            'Developers and writers use text reversal to flip chronological log lines upside down, test right-to-left string behavior, create word puzzles, and check palindromes.',
        },
        {
          question: 'Can I reverse multiple lines from bottom to top?',
          answer:
            'Yes. Choose Reverse Line Order to flip the order of lines from bottom to top while keeping the words on every line in their normal left-to-right reading order.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['sort-lines', 'case-converter', 'text-to-binary'],
    },
  },

  // 8) Text to Binary Converter (/text-to-binary/)
  {
    id: 'text-to-binary',
    name: 'Text to Binary Converter',
    slug: 'text-to-binary',
    path: '/text-to-binary/',
    canonicalUrl: 'https://riadalashekin.com/text-to-binary/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Encoding',
    shortDescription:
      'Convert UTF-8 plain text into 8-bit binary bytes or decode binary back to readable text with space separation and validation.',
    seoTitle: 'Text to Binary Converter - Convert Text to Binary & Binary to Text | Riad Al Ashekin',
    metaDescription:
      'Convert text to binary code and binary back to text online. Supports spaces between bytes and UTF-8 characters.',
    h1: 'Text to Binary Converter - Convert Text to Binary & Binary to Text',
    intro:
      'Encode plain UTF-8 text into 8-bit binary sequences or decode binary strings back into text. Includes space-separated byte formatting, quick direction swapping, and clear validation for malformed binary.',
    howToUse: [
      'Choose either Text to Binary or Binary to Text at the top.',
      'In Text to Binary mode, choose whether to separate 8-bit bytes with spaces.',
      'Type or paste your text or binary zeros and ones into the left box.',
      'Copy the converted result or click Swap Input & Output to reverse the conversion.',
    ],
    features: [
      'Two-way Text to Binary and Binary to Text conversion',
      'Full UTF-8 encoding and decoding via browser TextEncoder and TextDecoder',
      'Optional space separation between 8-bit bytes',
      'Explicit error messages when binary bytes are invalid characters or not 8 bits long',
    ],
    technicalExplanation: {
      heading: 'How UTF-8 Text Maps to 8-Bit Binary Bytes',
      body: 'Modern browsers encode strings into UTF-8 bytes using one byte for standard ASCII characters and two to four bytes for accented letters and emojis. Formatting each byte as eight binary digits shows exact bit values.',
    },
    faqs: [
      {
        question: 'How is text stored as binary?',
        answer:
          'Characters are converted into numeric bytes according to UTF-8 encoding, and each byte (0 to 255) is written in base-2 using 0s and 1s. Computers store and transmit every character as patterns of those two states.',
      },
      {
        question: 'Why is each letter represented as 8 digits?',
        answer:
          'Standard byte architecture groups 8 bits together into 1 byte, offering 256 combinations. Padding smaller numbers with leading zeros (such as 01001000 for "H") keeps every byte the same 8-digit width.',
      },
      {
        question: 'Can this tool convert binary back into plain text?',
        answer:
          'Yes. Switch to Binary to Text or click Swap Input & Output to decode valid 8-bit binary bytes back into UTF-8 text, complete with error checking if any byte has fewer or more than 8 bits.',
      },
      {
        question: 'Does it work with accented letters or emojis?',
        answer:
          'Yes. Using TextEncoder and TextDecoder with UTF-8 allows multi-byte characters and emojis to encode into multiple 8-bit bytes and decode back without losing data.',
      },
    ],
    relatedToolSlugs: ['morse-code-translator', 'base64-encode-decode', 'hash-generator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Text to Binary Converter',
      howToUseSteps: [
        'Select Text to Binary or Binary to Text using the two direction buttons at the top left of the editor.',
        'When encoding text, leave Space-separated 8-bit bytes checked for readable byte groups, or uncheck it to output one continuous stream of zeros and ones.',
        'Paste your plain text or binary bit string into the left input field to compute the live output on the right.',
        'Click Copy to save the converted result, Swap Input & Output to verify round-trip conversion, or Clear to reset.',
      ],
      checksOrShowsHeading: 'What the Text to Binary Converter does',
      checksOrShowsIntro:
        'The converter translates directly between UTF-8 text and 8-bit base-2 byte representations inside your browser without network requests:',
      checksOrShowsPoints: [
        'Encodes characters using the browser TextEncoder into exact UTF-8 byte arrays and pads each byte with leading zeros to 8 binary digits.',
        'Supports multi-byte international letters, punctuation, and emojis cleanly because each UTF-8 byte maps sequentially to its own 8-bit binary token.',
        'Decodes both space-separated 8-bit bytes and unspaced binary strings whose total bit length is divisible by 8 using fatal UTF-8 validation.',
        'Shows a clear inline error alert if input contains characters other than 0, 1, and whitespace, or if any byte length is invalid.',
        'Includes Swap Input & Output, Clear, and Copy controls so you can verify encoding and decoding in one click.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample text (Space-separated 8-bit bytes on)',
      exampleInput: 'Hi!',
      exampleOutputLabel: 'Returned binary output',
      exampleOutput: '01001000 01101001 00100001',
      exampleNote:
        'Clicking Swap Input & Output switches to Binary to Text with those three 8-bit bytes prefilled and decodes straight back to "Hi!".',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'How is text stored as binary?',
          answer:
            'Characters are converted into numeric bytes according to UTF-8 encoding, and each byte (0 to 255) is written in base-2 using 0s and 1s. Computers store and transmit every character as patterns of those two states.',
        },
        {
          question: 'Why is each letter represented as 8 digits?',
          answer:
            'Standard byte architecture groups 8 bits together into 1 byte, offering 256 combinations. Padding smaller numbers with leading zeros (such as 01001000 for "H") keeps every byte the same 8-digit width.',
        },
        {
          question: 'Can this tool convert binary back into plain text?',
          answer:
            'Yes. Switch to Binary to Text or click Swap Input & Output to decode valid 8-bit binary bytes back into UTF-8 text, complete with error checking if any byte has fewer or more than 8 bits.',
        },
        {
          question: 'Does it work with accented letters or emojis?',
          answer:
            'Yes. Using TextEncoder and TextDecoder with UTF-8 allows multi-byte characters and emojis to encode into multiple 8-bit bytes and decode back without losing data.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['morse-code-translator', 'base64-encode-decode', 'hash-generator'],
    },
  },

  // 9) Morse Code Translator (/morse-code-translator/)
  {
    id: 'morse-code-translator',
    name: 'Morse Code Translator',
    slug: 'morse-code-translator',
    path: '/morse-code-translator/',
    canonicalUrl: 'https://riadalashekin.com/morse-code-translator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Encoding',
    shortDescription:
      'Translate text to International Morse code and Morse code back to text with browser Web Audio playback and speed control.',
    seoTitle: 'Morse Code Translator - Convert Text to Morse Code & Back | Riad Al Ashekin',
    metaDescription:
      'Translate text to Morse code and Morse code to text online. Uses International Morse code, with optional audio playback.',
    h1: 'Morse Code Translator - Convert Text to Morse Code & Back',
    intro:
      'Encode letters, digits, and punctuation into standard International Morse code—or decode dots and dashes back into plain text. Listen to your message via the Web Audio API with adjustable words-per-minute playback.',
    howToUse: [
      'Choose Text to Morse or Morse to Text at the top left.',
      'Enter plain text or Morse dots (.) and dashes (-) separated by spaces and slashes (/).',
      'Adjust the Audio Speed (8 to 30 WPM) slider and click Play Audio to hear the tones.',
      'Click Copy to copy the translated Morse sequence or plain text.',
    ],
    features: [
      'Bidirectional International Morse code dictionary for A–Z, 0–9, and standard punctuation',
      'Space separator between letters and forward slash (/) separator between words',
      'Built-in Web Audio API sine-wave playback with 8–30 WPM speed slider and Stop button',
      'Clear warnings when text contains unsupported symbols or unknown Morse codes',
    ],
    technicalExplanation: {
      heading: 'International Morse Timing and Separators',
      body: 'International Morse pairs short dots and longer dashes (3x dot length) to represent alphanumeric characters clearly. Spaces distinguish letters while slashes make multi-word transcripts unambiguous.',
    },
    faqs: [
      {
        question: 'What is International Morse code?',
        answer:
          'International Morse code is the globally standardized system that assigns specific sequences of dots (short signals) and dashes (long signals) to letters A through Z, digits 0 through 9, and common punctuation.',
      },
      {
        question: 'How are letters and words separated in Morse code?',
        answer:
          'In this translator, individual letters inside a word are separated by a single space, while separate words are divided by a forward slash surrounded by spaces ( / ).',
      },
      {
        question: 'What does SOS look like in Morse code?',
        answer:
          'SOS is written as ... --- ... (three dots for S, three dashes for O, and three dots for S). When sent as a single distress prosign, it is transmitted continuously without breaks between letters.',
      },
      {
        question: 'Does the audio playback work without an internet connection?',
        answer:
          'Yes. Audio beeps are synthesized locally using your browser Web Audio API oscillator at 640 Hz, so no external sound files are downloaded.',
      },
    ],
    relatedToolSlugs: ['text-to-binary', 'reverse-text', 'case-converter'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Morse Code Translator',
      howToUseSteps: [
        'Pick Text to Morse or Morse to Text using the top mode buttons.',
        'Enter letters, digits, or punctuation on the left—or paste Morse code using dots (.), dashes (-), single spaces between letters, and slashes (/) between words.',
        'Drag the Audio Speed slider anywhere from 8 to 30 WPM and click Play Audio to listen to the synthesized tones, or Stop Audio to end playback early.',
        'Click Copy to save the translated output, or click Clear to erase both boxes.',
      ],
      checksOrShowsHeading: 'What the Morse Code Translator does',
      checksOrShowsIntro:
        'The translator encodes and decodes International Morse patterns completely in your browser with local Web Audio synthesis:',
      checksOrShowsPoints: [
        'Maps letters A–Z (case-insensitively), numbers 0–9, and 18 common punctuation marks including period, comma, question mark, slash, hyphen, and quotes.',
        'Formats Morse letters separated by single spaces and separates words clearly with " / " for easy reading and reliable decoding.',
        'Synthesizes clean 640 Hz sine-wave beeps directly via the browser Web Audio API at any chosen speed between 8 and 30 words per minute.',
        'Highlights skipped unsupported characters when encoding and flags invalid Morse characters or unknown codes with a "?" placeholder instead of failing silently.',
        'Includes Clear and Copy buttons for quick workflow reuse without any external server calls.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample plain text',
      exampleInput: 'SOS HELP',
      exampleOutputLabel: 'International Morse output',
      exampleOutput: '... --- ... / .... . .-.. .--.',
      exampleNote:
        'S encodes as three dots ("..."), O encodes as three dashes ("---"), and "/" marks the space separating SOS from HELP.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What is International Morse code?',
          answer:
            'International Morse code is the globally standardized system that assigns specific sequences of dots (short signals) and dashes (long signals) to letters A through Z, digits 0 through 9, and common punctuation.',
        },
        {
          question: 'How are letters and words separated in Morse code?',
          answer:
            'In this translator, individual letters inside a word are separated by a single space, while separate words are divided by a forward slash surrounded by spaces ( / ).',
        },
        {
          question: 'What does SOS look like in Morse code?',
          answer:
            'SOS is written as ... --- ... (three dots for S, three dashes for O, and three dots for S). When sent as a single distress prosign, it is transmitted continuously without breaks between letters.',
        },
        {
          question: 'Does the audio playback work without an internet connection?',
          answer:
            'Yes. Audio beeps are synthesized locally using your browser Web Audio API oscillator at 640 Hz, so no external sound files are downloaded.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['text-to-binary', 'reverse-text', 'case-converter'],
    },
  },

  // 10) Random Name Picker (/random-name-picker/)
  {
    id: 'random-name-picker',
    name: 'Random Name Picker',
    slug: 'random-name-picker',
    path: '/random-name-picker/',
    canonicalUrl: 'https://riadalashekin.com/random-name-picker/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'UtilitiesApplication',
    badge: 'Picker Utility',
    shortDescription:
      'Pick one or multiple random winners from any name list using browser cryptographic randomness, optional auto-removal, and session history.',
    seoTitle: 'Random Name Picker - Pick a Random Winner from a List | Riad Al Ashekin',
    metaDescription:
      'Pick a random name or winner from a list online. Paste names, choose how many to draw, and remove picked names for the next round.',
    h1: 'Random Name Picker - Pick a Random Winner from a List',
    intro:
      'Draw one or multiple names fairly for giveaways, classroom turn-taking, or team assignments. Picks run locally with cryptographic randomness and optionally remove chosen entries so nobody wins twice.',
    howToUse: [
      'Paste or type your participants into the Entries box with one name per line.',
      'Choose the Number of Winners to draw at once.',
      'Leave Remove picked names checked if you do not want past winners eligible for the next round.',
      'Click Pick Random Winner, view the highlighted selection and draw history, and click Copy to save the winners.',
    ],
    features: [
      'Uses Web Crypto crypto.getRandomValues for unbiased random selection',
      'Draw one or multiple winners in a single click with validation against list size',
      'Optional automatic removal of picked names from the pool',
      'In-session Draw History log and one-click winner Copy button',
    ],
    technicalExplanation: {
      heading: 'Unbiased Randomness with crypto.getRandomValues',
      body: 'Instead of Math.random(), which varies across engines, this tool draws uniform integers via rejection sampling over window.crypto.getRandomValues so every remaining line in the pool has an equal chance.',
    },
    faqs: [
      {
        question: 'Is the Random Name Picker truly random?',
        answer:
          'Yes. Selections use your browser crypto.getRandomValues cryptographic random generator with rejection sampling, avoiding modulo bias so every remaining entry has an equal probability.',
      },
      {
        question: 'Can I pick more than one winner at a time?',
        answer:
          'Yes. Set Number of Winners to any count up to the number of names in your list, and the tool draws that many distinct entries at once without picking the same name twice in a single round.',
      },
      {
        question: 'Are the names I enter saved anywhere?',
        answer:
          'No. Your list and draw history exist only in browser memory during the current session and are never uploaded or stored on a server.',
      },
      {
        question: 'What does Remove picked names do?',
        answer:
          'When checked, any selected winner is immediately removed from the Entries box so subsequent rounds only draw from remaining participants.',
      },
    ],
    relatedToolSlugs: ['random-number-generator', 'remove-duplicate-lines', 'sort-lines'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Random Name Picker',
      howToUseSteps: [
        'Paste your list of participants into the Entries box with one name per line, or click Load Sample Names to populate a starter pool.',
        'Set Number of Winners to 1 or more depending on how many distinct entries you want selected in a single round.',
        'Leave Remove picked names checked if chosen winners should leave the pool so they cannot be picked again in later rounds.',
        'Click Pick Random Winner, view the highlighted Selected Result card and Session Pick History, and click Copy to save the chosen names.',
      ],
      checksOrShowsHeading: 'What the Random Name Picker does',
      checksOrShowsIntro:
        'The picker runs fair, unbiased random draws locally in browser memory without storing or uploading participant lists:',
      checksOrShowsPoints: [
        'Shows a live count of active entries in the pool and strips blank lines automatically before every draw.',
        'Selects random indices using window.crypto.getRandomValues with modulo-bias rejection sampling so every entry has an equal chance.',
        'Supports picking multiple distinct winners in one click and displays a clear error alert if Number of Winners exceeds available entries.',
        'Optionally removes selected winners from the Entries textarea immediately after each round when Remove picked names is checked.',
        'Keeps a reverse-chronological Session Pick History log (with a Clear History button) plus Clear, Load Sample Names, and Copy controls.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample input (Number of Winners: 2, Remove picked names: on)',
      exampleInput: 'Alice\nBob\nCharlie\nDiana\nEthan\nFatima',
      exampleOutputLabel: 'Sample draw result',
      exampleOutput: '1. Diana\n2. Bob\n\nRemaining in Entries: Alice, Charlie, Ethan, Fatima (4 names)',
      exampleNote:
        'Because draws use browser cryptographic randomness, results vary on each click, and enabling Remove picked names updates the Entries pool to 4 names automatically.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'Is the Random Name Picker truly random?',
          answer:
            'Yes. Selections use your browser crypto.getRandomValues cryptographic random generator with rejection sampling, avoiding modulo bias so every remaining entry has an equal probability.',
        },
        {
          question: 'Can I pick more than one winner at a time?',
          answer:
            'Yes. Set Number of Winners to any count up to the number of names in your list, and the tool draws that many distinct entries at once without picking the same name twice in a single round.',
        },
        {
          question: 'Are the names I enter saved anywhere?',
          answer:
            'No. Your list and draw history exist only in browser memory during the current session and are never uploaded or stored on a server.',
        },
        {
          question: 'What does Remove picked names do?',
          answer:
            'When checked, any selected winner is immediately removed from the Entries box so subsequent rounds only draw from remaining participants.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['random-number-generator', 'remove-duplicate-lines', 'sort-lines'],
    },
  },
];
