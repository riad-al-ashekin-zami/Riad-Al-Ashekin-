import { ToolRegistryItem } from './types';

export const utilityDevTools: ToolRegistryItem[] = [
  // 11) Base64 Encode & Decode (/base64-encode-decode/)
  {
    id: 'base64-encode-decode',
    name: 'Base64 Encode & Decode',
    slug: 'base64-encode-decode',
    path: '/base64-encode-decode/',
    canonicalUrl: 'https://riadalashekin.com/base64-encode-decode/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'DeveloperApplication',
    badge: 'Dev Utility',
    shortDescription:
      'Encode UTF-8 text to Base64 or decode Base64 strings back to text in your browser with URL-safe (- and _) support.',
    seoTitle: 'Base64 Encode & Decode - Encode & Decode Base64 Online | Riad Al Ashekin',
    metaDescription:
      'Encode text to Base64 or decode Base64 to text online. Supports UTF-8 and URL-safe Base64. Runs in your browser.',
    h1: 'Base64 Encode & Decode - Encode & Decode Base64 Online',
    intro:
      'Convert plain UTF-8 strings into Base64 payloads or decode Base64 strings back to readable text locally in your browser. Includes URL-safe Base64 mode (- and _), validation errors, and one-click copying.',
    howToUse: [
      'Select Encode to Base64 or Decode Base64 at the top left.',
      'Toggle URL-safe Base64 if you need "-" and "_" instead of "+" and "/" without trailing "=" padding.',
      'Paste plain text or a Base64 string into the left input box.',
      'Click Copy to copy the converted output or click Swap Input & Output to test round-trip decoding.',
    ],
    features: [
      'Two-way Base64 encoding and decoding using browser TextEncoder and TextDecoder for full UTF-8 support',
      'URL-safe Base64 toggle replacing "+" with "-", "/" with "_", and stripping "=" padding',
      'Clear inline error messages when decoding malformed Base64 input',
      '100% local processing with Swap, Clear, and Copy buttons',
    ],
    technicalExplanation: {
      heading: 'Base64 Encoding and UTF-8 Safety',
      body: 'Browser btoa and atob functions operate on 8-bit bytes rather than multi-byte Unicode text. Converting strings with TextEncoder into UTF-8 byte arrays first prevents character corruption on accented letters and symbols.',
    },
    faqs: [
      {
        question: 'What is Base64 used for?',
        answer:
          'Base64 represents arbitrary binary bytes using 64 printable ASCII characters. Developers use it to safely embed images in data URLs, carry payloads inside JSON or HTTP headers, and pass compact binary segments in URLs.',
      },
      {
        question: 'Is Base64 a form of encryption?',
        answer:
          'No. Base64 is a reversible encoding format with no secret key. Anyone can decode a Base64 string back to its original bytes instantly, so it must never be used alone to hide passwords or confidential secrets.',
      },
      {
        question: 'What is URL-safe Base64?',
        answer:
          'Standard Base64 uses plus (+), slash (/), and equals (=) padding, which carry special meanings in URLs. URL-safe Base64 substitutes hyphen (-) for plus, underscore (_) for slash, and omits trailing equals signs.',
      },
      {
        question: 'Does this Base64 tool handle emojis and non-English letters?',
        answer:
          'Yes. The encoder converts your text to UTF-8 bytes with TextEncoder before Base64 conversion and decodes bytes back with fatal UTF-8 validation.',
      },
    ],
    relatedToolSlugs: ['url-encoder', 'hash-generator', 'jwt-decoder'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Base64 Encode & Decode',
      howToUseSteps: [
        'Choose Encode to Base64 or Decode Base64 using the two mode buttons at the top left.',
        'When encoding, check URL-safe (- and _, no padding) if you need hyphen and underscore characters without trailing equals signs for URLs or tokens.',
        'Paste your plain text or Base64 string into the left input box to compute the converted output live on the right.',
        'Click Copy to save the converted result, Swap Input & Output to flip direction and test round-tripping, or Clear to reset.',
      ],
      checksOrShowsHeading: 'What the Base64 Encode & Decode does',
      checksOrShowsIntro:
        'The converter encodes and decodes data strictly inside your browser tab without transmitting strings to any external server:',
      checksOrShowsPoints: [
        'Encodes strings into UTF-8 bytes via TextEncoder before applying standard Base64 transformation, ensuring accented letters, Unicode symbols, and emojis survive intact without garbling characters.',
        'Supports URL-safe Base64 output by replacing "+" with "-", replacing "/" with "_", and trimming trailing "=" padding.',
        'Decodes both standard and URL-safe Base64 inputs by stripping whitespace, restoring missing "=" padding, and decoding bytes with fatal UTF-8 validation.',
        'Displays a clear error banner whenever an input string has invalid Base64 length, disallowed characters, or broken UTF-8 byte sequences.',
        'Provides Clear, Swap Input & Output, and Copy controls so you can verify round-trip decoding immediately inside browser memory.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample text (Encode to Base64, standard mode)',
      exampleInput: 'hello@example.com',
      exampleOutputLabel: 'Base64 output',
      exampleOutput: 'aGVsbG9AZXhhbXBsZS5jb20=',
      exampleNote:
        'Enabling URL-safe (- and _, no padding) omits the trailing "=" character and substitutes "-" and "_" whenever "+" or "/" appear. Everything computes locally inside your tab with zero server requests.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What is Base64 used for?',
          answer:
            'Base64 represents arbitrary binary bytes using 64 printable ASCII characters. Developers use it to safely embed images in data URLs, carry payloads inside JSON or HTTP headers, and pass compact binary segments in URLs.',
        },
        {
          question: 'Is Base64 a form of encryption?',
          answer:
            'No. Base64 is a reversible encoding format with no secret key. Anyone can decode a Base64 string back to its original bytes instantly, so it must never be used alone to hide passwords or confidential secrets.',
        },
        {
          question: 'What is URL-safe Base64?',
          answer:
            'Standard Base64 uses plus (+), slash (/), and equals (=) padding, which carry special meanings in URLs. URL-safe Base64 substitutes hyphen (-) for plus, underscore (_) for slash, and omits trailing equals signs.',
        },
        {
          question: 'Does this Base64 tool handle emojis and non-English letters?',
          answer:
            'Yes. The encoder converts your text to UTF-8 bytes with TextEncoder before Base64 conversion and decodes bytes back with fatal UTF-8 validation.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['url-encoder', 'hash-generator', 'jwt-decoder'],
    },
  },

  // 12) QR Code Generator (/qr-code-generator/)
  {
    id: 'qr-code-generator',
    name: 'QR Code Generator',
    slug: 'qr-code-generator',
    path: '/qr-code-generator/',
    canonicalUrl: 'https://riadalashekin.com/qr-code-generator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'DeveloperApplication',
    badge: 'QR Builder',
    shortDescription:
      'Generate custom QR codes for URLs, plain text, email, phone, and Wi-Fi networks in your browser and download as PNG or SVG.',
    seoTitle: 'QR Code Generator - Create Free QR Codes for URLs & Text | Riad Al Ashekin',
    metaDescription:
      'Create QR codes for links, text, email, phone and Wi-Fi online. Choose size and colors, then download as PNG or SVG. No sign-up.',
    h1: 'QR Code Generator - Create Free QR Codes for URLs & Text',
    intro:
      'Create crisp, scannable static QR codes locally in your browser without tracking redirects or account logins. Support URLs, plain text, email, telephone links, and Wi-Fi credentials with PNG and vector SVG downloads.',
    howToUse: [
      'Choose the QR payload type: URL, Text, Email, Phone, or Wi-Fi.',
      'Fill in the target link, text, email address and subject, phone number, or Wi-Fi network details (SSID, encryption, and password).',
      'Customize Size (192, 256, 384, or 512 px), Error Correction level (L, M, Q, or H), and Foreground and Background colors.',
      'Preview the live QR matrix on the right, copy the SVG code, or download as PNG or SVG.',
    ],
    features: [
      'Five payload builders: URL, Text, Email (mailto with optional subject), Phone (tel), and Wi-Fi',
      'Live client-side rendering using the qrcode canvas and SVG generator',
      'Configurable error correction levels L (7%), M (15%), Q (25%), and H (30%)',
      'Download crisp raster PNG or scalable vector SVG plus Copy SVG Code button',
    ],
    technicalExplanation: {
      heading: 'Direct Static QR Payloads Without Middleman Redirects',
      body: 'Because the QR pattern embeds your target string directly in the matrix inside the browser, there is no tracking shortener database that can go offline or expire later.',
    },
    faqs: [
      {
        question: 'Do QR codes created with this generator expire?',
        answer:
          'No. These are static QR codes whose data (URL, text, or Wi-Fi network) is encoded directly inside the black-and-white squares. They never depend on a hosted redirect service and keep working as long as the destination link works.',
      },
      {
        question: 'Should I download my QR code as PNG or SVG?',
        answer:
          'Choose PNG for quick web sharing, documents, or fixed digital sizes. Choose SVG for print flyers, packaging, or large posters because vector graphics scale cleanly to any size without pixel blur.',
      },
      {
        question: 'What does error correction level mean in a QR code?',
        answer:
          'Error correction adds redundant data blocks so phones can still scan a code even if part of it is smudged or worn. Level L recovers up to 7%, M 15%, Q 25%, and H 30% damage, though higher levels create denser squares.',
      },
      {
        question: 'Are Wi-Fi passwords sent anywhere when making a Wi-Fi QR code?',
        answer:
          'No. The WIFI:T:...;S:...;P:... string and QR matrix are drawn directly in your browser using JavaScript and are never transmitted over the network.',
      },
    ],
    relatedToolSlugs: ['utm-builder', 'url-cleaner', 'placeholder-image-generator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the QR Code Generator',
      howToUseSteps: [
        'Pick one of the five payload buttons across the top: URL, TEXT, EMAIL, PHONE, or WIFI.',
        'Enter your destination link, plain text, email address and optional subject, phone number, or Wi-Fi SSID, password, and encryption type (WPA/WPA2, WEP, or None).',
        'Select your target Size (192 × 192 up to 512 × 512 px), Error Correction level (L, M, Q, or H), and Foreground/Background hex colors.',
        'Click Download PNG, Download SVG, or Copy SVG Code below the live preview.',
      ],
      checksOrShowsHeading: 'What the QR Code Generator does',
      checksOrShowsIntro:
        'Everything renders locally inside your browser using a static QR encoder so URLs, messages, and Wi-Fi credentials never leave your device:',
      checksOrShowsPoints: [
        'Builds properly structured static strings for website URLs, plain text, mailto links with optional subjects, tel phone links, and standard Wi-Fi network payloads.',
        'Supports four pixel resolution presets (192, 256, 384, and 512 px) with a 2-module quiet margin and Error Correction levels L (7%), M (15%), Q (25%), and H (30%).',
        'Updates the live QR preview immediately as you adjust Foreground and Background color pickers, and warns clearly when an input field is empty.',
        'Generates both downloadable PNG data URLs and clean scalable SVG markup with Download PNG, Download SVG, and Copy SVG Code buttons.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample Wi-Fi configuration (SSID: OfficeGuest, Encryption: WPA/WPA2)',
      exampleInput: 'Type: WIFI | SSID: OfficeGuest | Encryption: WPA | Size: 256px | ECC: M',
      exampleOutputLabel: 'Encoded QR payload string',
      exampleOutput: 'WIFI:T:WPA;S:OfficeGuest;P:guest2026;;',
      exampleNote:
        'Scanning the rendered QR code prompts smartphones to join the OfficeGuest network directly without manual password typing, and choosing SVG keeps edges sharp at any print size.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'Do QR codes created with this generator expire?',
          answer:
            'No. These are static QR codes whose data (URL, text, or Wi-Fi network) is encoded directly inside the black-and-white squares. They never depend on a hosted redirect service and keep working as long as the destination link works.',
        },
        {
          question: 'Should I download my QR code as PNG or SVG?',
          answer:
            'Choose PNG for quick web sharing, documents, or fixed digital sizes. Choose SVG for print flyers, packaging, or large posters because vector graphics scale cleanly to any size without pixel blur.',
        },
        {
          question: 'What does error correction level mean in a QR code?',
          answer:
            'Error correction adds redundant data blocks so phones can still scan a code even if part of it is smudged or worn. Level L recovers up to 7%, M 15%, Q 25%, and H 30% damage, though higher levels create denser squares.',
        },
        {
          question: 'Are Wi-Fi passwords sent anywhere when making a Wi-Fi QR code?',
          answer:
            'No. The WIFI:T:...;S:...;P:... string and QR matrix are drawn directly in your browser using JavaScript and are never transmitted over the network.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['utm-builder', 'url-cleaner', 'placeholder-image-generator'],
    },
  },

  // 13) UUID Generator (/uuid-generator/)
  {
    id: 'uuid-generator',
    name: 'UUID Generator',
    slug: 'uuid-generator',
    path: '/uuid-generator/',
    canonicalUrl: 'https://riadalashekin.com/uuid-generator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'DeveloperApplication',
    badge: 'Dev Utility',
    shortDescription:
      'Generate 1 to 1,000 random UUID v4 identifiers using Web Crypto randomness with uppercase and no-hyphens formatting options.',
    seoTitle: 'UUID Generator - Generate Random UUID v4 Online | Riad Al Ashekin',
    metaDescription:
      'Generate random UUID v4 values online. Create one or many at once, choose uppercase or no hyphens, and copy them in one click.',
    h1: 'UUID Generator - Generate Random UUID v4 Online',
    intro:
      'Create single or bulk random version 4 Universally Unique Identifiers directly inside your browser using crypto.randomUUID. Format values with or without hyphens, switch between lowercase and uppercase, and copy the entire batch at once.',
    howToUse: [
      'Set Quantity between 1 and 1,000 IDs.',
      'Check Uppercase (A–F) or Remove hyphens depending on your database or code convention.',
      'Click Generate UUIDs to produce a fresh batch.',
      'Click Copy All UUIDs to save the whole list to your clipboard.',
    ],
    features: [
      'Uses crypto.randomUUID with fallback to RFC 4122 bit-masked crypto.getRandomValues',
      'Generates from 1 up to 1,000 unique UUID v4 identifiers in one batch',
      'Instant formatting toggles for uppercase hex digits and hyphen removal',
      'Line-by-line output textarea and one-click Copy All button',
    ],
    technicalExplanation: {
      heading: 'Cryptographically Random Version 4 UUIDs',
      body: 'RFC 4122 version 4 UUIDs devote 122 of their 128 bits to random entropy while locking 6 version and variant bits. Generating them in the browser avoids server round trips.',
    },
    faqs: [
      {
        question: 'What is a UUID?',
        answer:
          'A UUID (Universally Unique Identifier) is a standardized 128-bit identifier typically formatted as 32 hexadecimal digits split into five hyphen-separated groups (for example, 550e8400-e29b-41d4-a716-446655440000).',
      },
      {
        question: 'What does version 4 (v4) mean in a UUID?',
        answer:
          'Version 4 means the identifier is created from random bytes rather than timestamps or network MAC addresses. You can spot a v4 UUID because its third section always starts with the digit 4.',
      },
      {
        question: 'Can two generated UUIDs ever be the same?',
        answer:
          'It is theoretically possible because values are random, but the chance of collision across 122 random bits is so tiny (over 5.3 × 10^36 possible v4 values) that accidental duplicates are practically negligible for normal applications.',
      },
      {
        question: 'Does changing uppercase or hyphen options generate new IDs?',
        answer:
          'No. The Uppercase and Remove hyphens checkboxes reformat your current list immediately without throwing away your generated identifiers until you click Generate UUIDs.',
      },
    ],
    relatedToolSlugs: ['random-number-generator', 'hash-generator', 'random-password-generator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the UUID Generator',
      howToUseSteps: [
        'Enter how many identifiers you need in the Quantity (1–1000) input box.',
        'Check Uppercase if you want capital A–F hexadecimal letters, and check Remove hyphens if your schema expects compact 32-character strings.',
        'Click Generate UUIDs whenever you want to create a brand-new random batch.',
        'Review the Generated UUID v4 List textarea and click Copy All UUIDs to save all lines to your clipboard.',
      ],
      checksOrShowsHeading: 'What the UUID Generator does',
      checksOrShowsIntro:
        'The generator produces RFC 4122 version 4 UUIDs strictly inside your browser tab without touching any external service or database:',
      checksOrShowsPoints: [
        'Uses the native browser crypto.randomUUID() API when available and automatically falls back to bit-masked crypto.getRandomValues() for RFC 4122 version 4 compliance.',
        'Generates anywhere from 1 to 1,000 identifiers in one batch and displays a clear validation error if the quantity is not a whole number within 1–1,000.',
        'Toggling Uppercase or Remove hyphens reformats your already-generated list live without discarding existing IDs until you click Generate UUIDs again.',
        'Outputs one UUID per line inside a monospaced read-only textarea paired with a Copy All UUIDs button for quick pasting into SQL queries or JSON fixtures.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Settings (Quantity: 3, Uppercase: off, Remove hyphens: off)',
      exampleInput: 'Quantity = 3 | Format = Lowercase with hyphens',
      exampleOutputLabel: 'Sample generated UUID v4 batch',
      exampleOutput:
        'f47ac10b-58cc-4372-a567-0e02b2c3d479\n7c9e6679-7425-40de-944b-e07fc1f90ae7\n3fa85f64-5717-4562-b3fc-2c963f66afa6',
      exampleNote:
        'Notice the digit 4 at the start of the third group in each UUID, identifying version 4 random format, while the fourth group starts with 8, 9, a, or b per RFC 4122. Your values will differ on every fresh batch.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What is a UUID?',
          answer:
            'A UUID (Universally Unique Identifier) is a standardized 128-bit identifier typically formatted as 32 hexadecimal digits split into five hyphen-separated groups (for example, 550e8400-e29b-41d4-a716-446655440000).',
        },
        {
          question: 'What does version 4 (v4) mean in a UUID?',
          answer:
            'Version 4 means the identifier is created from random bytes rather than timestamps or network MAC addresses. You can spot a v4 UUID because its third section always starts with the digit 4.',
        },
        {
          question: 'Can two generated UUIDs ever be the same?',
          answer:
            'It is theoretically possible because values are random, but the chance of collision across 122 random bits is so tiny (over 5.3 × 10^36 possible v4 values) that accidental duplicates are practically negligible for normal applications.',
        },
        {
          question: 'Does changing uppercase or hyphen options generate new IDs?',
          answer:
            'No. The Uppercase and Remove hyphens checkboxes reformat your current list immediately without throwing away your generated identifiers until you click Generate UUIDs.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['random-number-generator', 'hash-generator', 'random-password-generator'],
    },
  },

  // 14) Hash Generator (/hash-generator/)
  {
    id: 'hash-generator',
    name: 'Hash Generator',
    slug: 'hash-generator',
    path: '/hash-generator/',
    canonicalUrl: 'https://riadalashekin.com/hash-generator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'DeveloperApplication',
    badge: 'Dev Utility',
    shortDescription:
      'Compute MD5, SHA-1, SHA-256, SHA-384, and SHA-512 cryptographic digests in your browser with lowercase/uppercase hex formatting.',
    seoTitle: 'Hash Generator - MD5, SHA-1, SHA-256 & SHA-512 Online | Riad Al Ashekin',
    metaDescription:
      'Generate MD5, SHA-1, SHA-256 and SHA-512 hashes from text online. Hashing runs in your browser, so your text is not sent anywhere.',
    h1: 'Hash Generator - MD5, SHA-1, SHA-256 & SHA-512 Online',
    intro:
      'Compute MD5, SHA-1, SHA-256, SHA-384, and SHA-512 checksums from any UTF-8 text inside your browser. Compare digest formats in lowercase or uppercase hex and copy individual hashes with zero server transmission.',
    howToUse: [
      'Type or paste your input string into the Input Text textarea.',
      'Toggle Uppercase HEX if you want capital A–F digest characters.',
      'Read all five generated digests (MD5, SHA-1, SHA-256, SHA-384, and SHA-512) as they update automatically.',
      'Click Copy next to any digest row, or click Clear at the bottom to reset.',
    ],
    features: [
      'Computes MD5 (128-bit), SHA-1 (160-bit), SHA-256 (256-bit), SHA-384 (384-bit), and SHA-512 (512-bit) side by side',
      'Uses Web Crypto API crypto.subtle.digest for all SHA algorithms and pure browser JS for MD5',
      'Lowercase or uppercase hexadecimal display toggle',
      'Per-hash Copy button on every row plus Clear control',
    ],
    technicalExplanation: {
      heading: 'Local Browser Digest Computation',
      body: 'SHA digests run on hardware-accelerated Web Crypto SubtleCrypto routines inside the browser, ensuring sensitive API payloads or test strings never cross the network.',
    },
    faqs: [
      {
        question: 'What is a cryptographic hash?',
        answer:
          'A hash is a fixed-length digital fingerprint calculated from input data of any size. Changing even a single character in the input produces a completely different digest string.',
      },
      {
        question: 'Can a hash be reversed back into the original text?',
        answer:
          'No. Hash functions are one-way mathematical transformations, so you cannot algebraically invert a digest to recover the input string.',
      },
      {
        question: 'Why should MD5 and SHA-1 not be used for storing passwords?',
        answer:
          'MD5 and SHA-1 are outdated for security-critical uses because they are vulnerable to collision attacks and are fast to brute-force on modern hardware. Use modern slow password-hashing algorithms like Argon2, scrypt, or bcrypt for passwords.',
      },
      {
        question: 'Is my input text sent to a backend server to calculate the hash?',
        answer:
          'No. SHA-1, SHA-256, SHA-384, and SHA-512 run locally using crypto.subtle.digest, and MD5 runs in browser JavaScript with zero server requests.',
      },
    ],
    relatedToolSlugs: ['base64-encode-decode', 'uuid-generator', 'random-password-generator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Hash Generator',
      howToUseSteps: [
        'Paste or type the text you want to hash into the Input Text textarea at the top.',
        'Check or uncheck Uppercase HEX on the top right to switch hexadecimal digest output between lowercase a–f and uppercase A–F.',
        'Inspect all five digests—MD5, SHA-1, SHA-256, SHA-384, and SHA-512—as they compute live beneath the input.',
        'Click Copy beside any algorithm row to copy that specific checksum, or click Clear to empty the input field.',
      ],
      checksOrShowsHeading: 'What the Hash Generator does',
      checksOrShowsIntro:
        'Hash Generator turns UTF-8 text into five widely used digest formats strictly inside browser memory with zero server uploads:',
      checksOrShowsPoints: [
        'Encodes your text into UTF-8 bytes via TextEncoder and computes SHA-1, SHA-256, SHA-384, and SHA-512 concurrently using window.crypto.subtle.digest directly in browser memory.',
        'Computes 128-bit MD5 checksums in browser JavaScript using js-md5 alongside the SHA family, returning an empty digest state cleanly when the input box is blank.',
        'Displays fixed hexadecimal lengths ranging from 32 characters for MD5, 40 for SHA-1, 64 for SHA-256, 96 for SHA-384, and 128 characters for SHA-512.',
        'Reformats all five digest cards instantly between lowercase and uppercase hexadecimal letters when you toggle Uppercase HEX without clearing or altering your input text.',
        'Provides a dedicated Copy button on every individual hash row so you can grab one specific checksum cleanly, plus a Clear button at the bottom.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample text (lowercase hex)',
      exampleInput: 'hello',
      exampleOutputLabel: 'Returned digests',
      exampleOutput:
        'MD5: 5d41402abc4b2a76b9719d911017c592\nSHA-1: aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d\nSHA-256: 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824',
      exampleNote:
        'Because cryptographic hashes are deterministic yet sensitive to every input bit, adding one trailing space or changing a single letter completely alters every digest shown.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What is a cryptographic hash?',
          answer:
            'A hash is a fixed-length digital fingerprint calculated from input data of any size. Changing even a single character in the input produces a completely different digest string.',
        },
        {
          question: 'Can a hash be reversed back into the original text?',
          answer:
            'No. Hash functions are one-way mathematical transformations, so you cannot algebraically invert a digest to recover the input string.',
        },
        {
          question: 'Why should MD5 and SHA-1 not be used for storing passwords?',
          answer:
            'MD5 and SHA-1 are outdated for security-critical uses because they are vulnerable to collision attacks and are fast to brute-force on modern hardware. Use modern slow password-hashing algorithms like Argon2, scrypt, or bcrypt for passwords.',
        },
        {
          question: 'Is my input text sent to a backend server to calculate the hash?',
          answer:
            'No. SHA-1, SHA-256, SHA-384, and SHA-512 run locally using crypto.subtle.digest, and MD5 runs in browser JavaScript with zero server requests.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['base64-encode-decode', 'uuid-generator', 'random-password-generator'],
    },
  },

  // 15) JWT Decoder (/jwt-decoder/)
  {
    id: 'jwt-decoder',
    name: 'JWT Decoder',
    slug: 'jwt-decoder',
    path: '/jwt-decoder/',
    canonicalUrl: 'https://riadalashekin.com/jwt-decoder/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'DeveloperApplication',
    badge: 'Dev Utility',
    shortDescription:
      'Decode a JSON Web Token locally to inspect formatted header, payload claims, readable exp/iat/nbf timestamps, and expiry status.',
    seoTitle: 'JWT Decoder - Decode JSON Web Tokens Online | Riad Al Ashekin',
    metaDescription:
      'Decode a JWT and read its header and payload online. Shows expiry and issued-at times. Decoding runs in your browser.',
    h1: 'JWT Decoder - Decode JSON Web Tokens Online',
    intro:
      'Inspect the header and claims inside any JSON Web Token right inside your browser. Converts Base64URL segments into formatted JSON, translates exp, iat, and nbf Unix timestamps into readable dates, and clearly flags whether the token is expired.',
    howToUse: [
      'Paste a three-part JWT string (header.payload.signature) into the Encoded JWT Token textarea.',
      'Review the formatted JSON in the Header and Payload panels.',
      'Check the Token Timestamps cards for readable UTC and local dates of exp (Expiry), iat (Issued At), and nbf (Not Before).',
      'Click Copy beside Header or Payload to copy the decoded JSON.',
    ],
    features: [
      'Decodes Base64URL header and payload JSON with UTF-8 decoding',
      'Checks JWT three-part structure and flags malformed Base64 or JSON segments clearly',
      'Formats exp, iat, and nbf Unix timestamps as readable UTC and local date strings and shows Expired vs Active status',
      'Displays explicit notice reminding users that cryptographic signatures are NOT verified',
    ],
    technicalExplanation: {
      heading: 'Inspecting Unencrypted JWT Claims Safely',
      body: 'JSON Web Tokens encode their header and claims with Base64URL rather than encryption, allowing local client inspection while signature verification remains the responsibility of your server.',
    },
    faqs: [
      {
        question: 'Does decoding a JWT verify its signature?',
        answer:
          'No. The decoder clearly notes that it does NOT verify the cryptographic signature against any secret or public key. Anyone can build or alter a decoded payload unless the receiving server validates the signature.',
      },
      {
        question: 'Is it safe to paste a JWT token into this decoder?',
        answer:
          'Decoding happens 100% locally in your browser without sending the token to any server. Still, as a basic security habit, avoid pasting live production tokens or credentials in shared environments.',
      },
      {
        question: 'What do the exp, iat, and nbf claims mean?',
        answer:
          'exp (Expiration Time) is the Unix timestamp after which the token expires, iat (Issued At) records when the token was created, and nbf (Not Before) marks the earliest time the token becomes valid.',
      },
      {
        question: 'Why does my token require three dot-separated parts?',
        answer:
          'A compact JWS token consists of Header, Payload, and Signature separated by two dots. If a string does not have three parts, the decoder displays a clear structure error message.',
      },
    ],
    relatedToolSlugs: ['base64-encode-decode', 'json-formatter', 'unix-timestamp-converter'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the JWT Decoder',
      howToUseSteps: [
        'Paste your encoded JWT string (three dot-separated Base64URL segments) into the Encoded JWT textarea.',
        'Review the amber notice at the top confirming that browser decoding inspects claims only and does NOT verify the cryptographic signature.',
        'Inspect the formatted Header JSON and Payload JSON panels as well as the Issued At (iat), Not Before (nbf), and Expires (exp) timestamp cards.',
        'Click Copy above Header JSON or Payload JSON to copy either decoded JSON block, or click Clear to reset.',
      ],
      checksOrShowsHeading: 'What the JWT Decoder does',
      checksOrShowsIntro:
        'JWT Decoder parses compact JWT tokens locally inside your browser and turns numeric Unix claims into readable timestamps:',
      checksOrShowsPoints: [
        'Validates that the pasted token splits cleanly into three dot-separated segments and decodes Base64URL header and payload text into pretty-printed 2-space JSON.',
        'Detects numeric iat (Issued At), nbf (Not Before), and exp (Expires) claims inside the payload and renders them using your local date and time format.',
        'Compares the numeric exp timestamp against your current browser clock to display a clear Active or Expired status indicator.',
        'Surfaces explicit error alerts when parts are missing or when Base64URL or JSON parsing fails, and keeps all token inspection completely offline.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample JWT payload segment decoded',
      exampleInput: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFsZXggUmVlZCIsImlhdCI6MTcwMDAwMDAwMCwiZXhwIjoxOTAwMDAwMDAwfQ.signature',
      exampleOutputLabel: 'Decoded Header & Payload',
      exampleOutput:
        'Header: { "alg": "HS256", "typ": "JWT" }\nPayload: { "sub": "1234567890", "name": "Alex Reed", "iat": 1700000000, "exp": 1900000000 }',
      exampleNote:
        'Timestamp cards render formatted dates for iat and exp automatically alongside an Active or Expired badge, while reminding you that signature verification must always occur on your server.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'Does decoding a JWT verify its signature?',
          answer:
            'No. The decoder clearly notes that it does NOT verify the cryptographic signature against any secret or public key. Anyone can build or alter a decoded payload unless the receiving server validates the signature.',
        },
        {
          question: 'Is it safe to paste a JWT token into this decoder?',
          answer:
            'Decoding happens 100% locally in your browser without sending the token to any server. Still, as a basic security habit, avoid pasting live production tokens or credentials in shared environments.',
        },
        {
          question: 'What do the exp, iat, and nbf claims mean?',
          answer:
            'exp (Expiration Time) is the Unix timestamp after which the token expires, iat (Issued At) records when the token was created, and nbf (Not Before) marks the earliest time the token becomes valid.',
        },
        {
          question: 'Why does my token require three dot-separated parts?',
          answer:
            'A compact JWS token consists of Header, Payload, and Signature separated by two dots. If a string does not have three parts, the decoder displays a clear structure error message.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['base64-encode-decode', 'json-formatter', 'unix-timestamp-converter'],
    },
  },

  // 16) Regex Tester (/regex-tester/)
  {
    id: 'regex-tester',
    name: 'Regex Tester',
    slug: 'regex-tester',
    path: '/regex-tester/',
    canonicalUrl: 'https://riadalashekin.com/regex-tester/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'DeveloperApplication',
    badge: 'Dev Utility',
    shortDescription:
      'Test JavaScript regular expressions live with inline match highlighting, g/i/m/s/u flags, match index listing, and capture groups.',
    seoTitle: 'Regex Tester - Test JavaScript Regular Expressions Online | Riad Al Ashekin',
    metaDescription:
      'Test regular expressions online with live match highlighting, capture groups and flags. Uses the JavaScript regex engine.',
    h1: 'Regex Tester - Test JavaScript Regular Expressions Online',
    intro:
      'Write, debug, and inspect regular expressions using your browser native JavaScript RegExp engine. Toggle flags, preview matched spans highlighted in real time, and examine exact character indices and capture groups.',
    howToUse: [
      'Type your regular expression pattern into the Pattern field without outer slashes.',
      'Toggle any combination of JavaScript flags: g (global), i (ignore case), m (multiline), s (dotAll), and u (unicode).',
      'Paste or edit sample content inside the Test String textarea.',
      'Inspect the highlighted matches box and detailed match breakdown with capture groups below, or click Copy Matches.',
    ],
    features: [
      'Uses the native JavaScript RegExp engine with instant pattern validation',
      'Supports all five core flags: g, i, m, s, and u',
      'Live inline match highlighting plus structured match table showing match index, text, and numbered capture groups',
      'Protection against zero-length infinite regex loops and Copy Matches button',
    ],
    technicalExplanation: {
      heading: 'Native JavaScript RegExp Evaluation',
      body: 'Because the tester compiles your pattern directly via new RegExp(pattern, flags), matching behavior matches Node.js and modern frontend JavaScript runtimes identically.',
    },
    faqs: [
      {
        question: 'Which regular expression flavor does Regex Tester use?',
        answer:
          'It runs directly on your browser native JavaScript (ECMAScript) regular expression engine, making results match Chrome, Firefox, Safari, and Node.js behavior.',
      },
      {
        question: 'What do the g, i, and m flags do?',
        answer:
          'g (global) finds every match in the text instead of stopping at the first one. i (case-insensitive) ignores uppercase/lowercase differences. m (multiline) lets ^ and $ match the start and end of each line.',
      },
      {
        question: 'How do capture groups work in the match details?',
        answer:
          'Wrapping part of your pattern in parentheses like (\\w+) creates a numbered capture group ($1, $2, and so on). Each match row lists every captured group substring alongside its character start index.',
      },
      {
        question: 'What happens if I type an invalid regex syntax?',
        answer:
          'The tester catches RegExp syntax errors immediately and displays an inline error message describing the problem (such as an unterminated group) without crashing the page.',
      },
    ],
    relatedToolSlugs: ['find-and-replace-text', 'url-parser', 'json-validator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Regex Tester',
      howToUseSteps: [
        'Type your pattern into the JavaScript Regular Expression input box without leading or trailing slashes.',
        'Click any combination of the five flag buttons—g (global), i (ignore case), m (multiline), s (dotAll), and u (unicode)—to update matching behavior immediately.',
        'Paste or edit sample text inside the Test String textarea.',
        'Review the Live Highlighted Matches panel and the numbered breakdown table below, then click Copy Matches if you want to save matched offsets.',
      ],
      checksOrShowsHeading: 'What the Regex Tester does',
      checksOrShowsIntro:
        'Regex Tester evaluates ECMAScript regular expressions locally via your browser JavaScript RegExp engine with safety guards and capture-group inspection:',
      checksOrShowsPoints: [
        'Toggles standard JavaScript flags g, i, m, s, and u interactively and displays the total match count above the highlighted preview.',
        'Highlights every matched range inline inside the Test String preview box so you can verify boundaries visually.',
        'Displays a structured table of the first 50 matches listing match number (#), starting character Index, Full Match text, and numbered Capture Groups separated clearly.',
        'Stops safely after 2,000 iterations and advances zero-length matches to avoid infinite browser loops, while displaying native syntax error messages when a pattern is invalid.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample Pattern & Flags: (\\w+)@([\\w.-]+\\.[a-z]{2,}) with flags g, i',
      exampleInput: 'Contact support@example.com or billing@test.org for help.',
      exampleOutputLabel: 'Detected matches',
      exampleOutput:
        'Match #1 (index 8): "support@example.com" | Group 1: "support" | Group 2: "example.com"\nMatch #2 (index 31): "billing@test.org" | Group 1: "billing" | Group 2: "test.org"',
      exampleNote:
        'Both email addresses highlight inline inside Live Highlighted Matches while Capture Groups split each local part and domain automatically.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'Which regular expression flavor does Regex Tester use?',
          answer:
            'It runs directly on your browser native JavaScript (ECMAScript) regular expression engine, making results match Chrome, Firefox, Safari, and Node.js behavior.',
        },
        {
          question: 'What do the g, i, and m flags do?',
          answer:
            'g (global) finds every match in the text instead of stopping at the first one. i (case-insensitive) ignores uppercase/lowercase differences. m (multiline) lets ^ and $ match the start and end of each line.',
        },
        {
          question: 'How do capture groups work in the match details?',
          answer:
            'Wrapping part of your pattern in parentheses like (\\w+) creates a numbered capture group ($1, $2, and so on). Each match row lists every captured group substring alongside its character start index.',
        },
        {
          question: 'What happens if I type an invalid regex syntax?',
          answer:
            'The tester catches RegExp syntax errors immediately and displays an inline error message describing the problem (such as an unterminated group) without crashing the page.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['find-and-replace-text', 'url-parser', 'json-validator'],
    },
  },

  // 17) Cron Expression Generator (/cron-expression-generator/)
  {
    id: 'cron-expression-generator',
    name: 'Cron Expression Generator',
    slug: 'cron-expression-generator',
    path: '/cron-expression-generator/',
    canonicalUrl: 'https://riadalashekin.com/cron-expression-generator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'DeveloperApplication',
    badge: 'Dev Utility',
    shortDescription:
      'Build 5-field cron schedules visually, read any cron expression in plain English, and view the next 5 run times in your time zone.',
    seoTitle: 'Cron Expression Generator - Build & Explain Cron Schedules | Riad Al Ashekin',
    metaDescription:
      'Build cron expressions with a simple form and read any cron schedule in plain English. Shows the next run times.',
    h1: 'Cron Expression Generator - Build & Explain Cron Schedules',
    intro:
      'Build standard five-field cron schedules using individual minute, hour, day-of-month, month, and day-of-week inputs—or paste any cron string to inspect its plain-English description and preview its next five execution times.',
    howToUse: [
      'Click a quick preset (such as Every 5 minutes or Weekdays at 9:00 AM) or edit the five cron fields manually.',
      'Alternatively, paste an existing 5-field cron expression directly into the Cron Expression input box.',
      'Check the plain-English summary confirming how each field behaves.',
      'Verify the Next 5 Run Times list in your local time zone and click Copy to save the expression.',
    ],
    features: [
      'Two-way editing across a combined 5-field expression input and five separate field controls',
      'Supports wildcards (*), step syntax (*/5), lists (1,15), ranges (1-5), and validation errors',
      'Plain-English schedule breakdown generated live in your browser',
      'Computes the next 5 matching run timestamps using your device time zone',
    ],
    technicalExplanation: {
      heading: 'Standard 5-Field Unix Cron Syntax',
      body: 'Unix crontab files schedule background tasks using minute, hour, day of month, month, and day of week slots. Evaluating matching steps locally prevents off-by-one deployment errors.',
    },
    faqs: [
      {
        question: 'What do the 5 fields of a cron expression mean?',
        answer:
          'From left to right, the five space-separated fields stand for: Minute (0–59), Hour (0–23), Day of Month (1–31), Month (1–12), and Day of Week (0–6, where 0 is Sunday).',
      },
      {
        question: 'What does */5 mean in a cron field?',
        answer:
          'The slash sets a step interval starting at zero (or field minimum). Putting */5 in the Minute field means "every 5 minutes" (at minutes 0, 5, 10, 15, and so on through 55).',
      },
      {
        question: 'Is a cron schedule evaluated in UTC or local time?',
        answer:
          'A cron expression itself has no embedded time zone—it depends on the server or scheduler running it (many cloud schedulers use UTC, while local crontab uses system local time). This tool previews run times in your browser local time zone.',
      },
      {
        question: 'Can I paste an existing cron string to decode it?',
        answer:
          'Yes. Editing the combined Cron Expression box updates the five individual field inputs, generates a plain-English summary, and recalculates the next 5 scheduled dates automatically.',
      },
    ],
    relatedToolSlugs: ['unix-timestamp-converter', 'time-zone-converter', 'regex-tester'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Cron Expression Generator',
      howToUseSteps: [
        'Click one of the four schedule presets—Every 5 mins, Hourly, Daily midnight, or Weekdays 9 AM—or edit the five individual Minute, Hour, Day/Month, Month, and Weekday fields.',
        'Alternatively, paste any existing 5-field string straight into the 5-Field Cron Expression box to sync the five fields automatically.',
        'Read the Plain-English Summary card to confirm your interval, hours, days, and weekdays match what you intended.',
        'Inspect the Next 5 Run Times (Local Time) list and click Copy Expression to copy the final string.',
      ],
      checksOrShowsHeading: 'What the Cron Expression Generator does',
      checksOrShowsIntro:
        'The generator validates and explains standard five-field Unix cron schedules directly in your browser without external dependencies:',
      checksOrShowsPoints: [
        'Supports wildcards (*), step intervals (*/N or start/step), comma-separated lists, and inclusive ranges across Minute (0–59), Hour (0–23), Day/Month (1–31), Month (1–12), and Weekday (0–6).',
        'Generates a plain-English description translating each active field into human-readable timing.',
        'Scans upcoming minutes across the next 12 months to preview the next five matching timestamps in your browser local time zone.',
        'Flags malformed strings clearly whenever fewer or more than five space-separated fields or out-of-range numbers are entered.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample cron expression',
      exampleInput: '*/15 9-17 * * 1-5',
      exampleOutputLabel: 'Plain-English summary',
      exampleOutput:
        'Runs every 15 minutes, at hour 9-17, every day of month, in every month, on weekday 1-5.',
      exampleNote:
        'Next 5 Run Times updates immediately to list the upcoming five 15-minute marks occurring during hours 9 through 17 on weekdays 1 through 5 (Monday through Friday).',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What do the 5 fields of a cron expression mean?',
          answer:
            'From left to right, the five space-separated fields stand for: Minute (0–59), Hour (0–23), Day of Month (1–31), Month (1–12), and Day of Week (0–6, where 0 is Sunday).',
        },
        {
          question: 'What does */5 mean in a cron field?',
          answer:
            'The slash sets a step interval starting at zero (or field minimum). Putting */5 in the Minute field means "every 5 minutes" (at minutes 0, 5, 10, 15, and so on through 55).',
        },
        {
          question: 'Is a cron schedule evaluated in UTC or local time?',
          answer:
            'A cron expression itself has no embedded time zone—it depends on the server or scheduler running it (many cloud schedulers use UTC, while local crontab uses system local time). This tool previews run times in your browser local time zone.',
        },
        {
          question: 'Can I paste an existing cron string to decode it?',
          answer:
            'Yes. Editing the combined Cron Expression box updates the five individual field inputs, generates a plain-English summary, and recalculates the next 5 scheduled dates automatically.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['unix-timestamp-converter', 'time-zone-converter', 'regex-tester'],
    },
  },

  // 18) CSV to JSON Converter (/csv-to-json/)
  {
    id: 'csv-to-json',
    name: 'CSV to JSON Converter',
    slug: 'csv-to-json',
    path: '/csv-to-json/',
    canonicalUrl: 'https://riadalashekin.com/csv-to-json/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'DeveloperApplication',
    badge: 'Data Utility',
    shortDescription:
      'Convert CSV files or pasted spreadsheet text to JSON objects or arrays in your browser with delimiter detection and download.',
    seoTitle: 'CSV to JSON Converter - Convert CSV Files to JSON Online | Riad Al Ashekin',
    metaDescription:
      'Convert CSV to JSON online. Upload a file or paste data, choose the delimiter and header row, then copy or download the JSON.',
    h1: 'CSV to JSON Converter - Convert CSV Files to JSON Online',
    intro:
      'Transform comma-, semicolon-, or tab-delimited CSV data into clean JSON locally inside your browser. Handles RFC-style quoted strings containing commas and newlines, supports header or headerless sheets, and downloads as a .json file.',
    howToUse: [
      'Paste CSV text into the CSV Input box or click Upload .csv File to read a local .csv or .txt file.',
      'Select the Delimiter (Auto-detect, Comma, Semicolon, or Tab).',
      'Toggle First row as headers (keys objects when checked, or outputs arrays when unchecked) and Pretty print.',
      'Click Copy or Download .json to save the converted JSON output.',
    ],
    features: [
      'Client-side FileReader upload and raw textarea editing—nothing is sent to a server',
      'Automatic delimiter detection or explicit comma, semicolon, and tab selection',
      'Proper RFC 4180 parser handling escaped quotes ("") and commas inside quoted fields',
      'Outputs objects keyed by header names or nested row arrays when headers are unchecked, plus Copy and .json download',
    ],
    technicalExplanation: {
      heading: 'RFC-Compliant Local CSV Parsing',
      body: 'Simple comma splitting breaks whenever addresses or descriptions contain embedded commas. A character-state parser tracks quote boundaries properly across delimiters and newlines.',
    },
    faqs: [
      {
        question: 'Is my CSV file uploaded to a server?',
        answer:
          'No. Uploaded CSV files are read using the browser FileReader API and parsed locally in JavaScript, so your spreadsheet data stays completely on your device.',
      },
      {
        question: 'How are quoted values that contain commas handled?',
        answer:
          'The parser tracks double-quoted fields, so a value like "Austin, TX" stays intact as a single field instead of splitting into extra columns, and doubled quotes inside quotes unescape cleanly.',
      },
      {
        question: 'What if my CSV does not have a header row?',
        answer:
          'Uncheck First row as headers. Each CSV row then converts into an array of cell strings rather than keyed objects; when First row as headers is checked, any blank header cell automatically falls back to column_1, column_2, and so forth.',
      },
      {
        question: 'Can it convert semicolon-delimited or TSV files?',
        answer:
          'Yes. Auto-detect inspects the first line for commas, semicolons, and tabs, or you can manually pick Comma, Semicolon, or Tab from the Delimiter dropdown.',
      },
    ],
    relatedToolSlugs: ['json-to-csv', 'json-formatter', 'yaml-to-json'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the CSV to JSON Converter',
      howToUseSteps: [
        'Paste your CSV text into the CSV Input box or click Upload .csv File to load a local .csv or .txt file from your computer.',
        'Keep Delimiter set to Auto-detect or manually choose Comma (,), Semicolon (;), or Tab.',
        'Keep First row as headers checked to create JSON objects keyed by header names (or uncheck it to output plain arrays), and toggle Pretty print for 2-space indentation.',
        'Click Copy to copy the generated JSON Output, Download .json to save converted.json, or Clear to reset.',
      ],
      checksOrShowsHeading: 'What the CSV to JSON Converter does',
      checksOrShowsIntro:
        'The converter parses delimiter-separated data inside your browser using a character-level quote parser without sending files to any server:',
      checksOrShowsPoints: [
        'Reads pasted text or uploaded .csv files locally through FileReader and handles both Unix and Windows line endings cleanly.',
        'Auto-detects tabs, semicolons, or commas when set to Auto-detect, and allows manual delimiter selection whenever needed.',
        'Preserves embedded commas, line breaks, and escaped double quotes ("") inside quoted fields so values never shift into wrong columns.',
        'Outputs an array of keyed JSON objects using the header row (falling back to column_N if a header cell is blank), or nested row arrays when First row as headers is turned off.',
        'Flags unclosed quotes with a clear error banner and lets you export compact or 2-space pretty-printed JSON via Copy or Download .json.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample CSV input',
      exampleInput: 'name,role,city\n"Reed, Alex",Analyst,Austin\nSamira Khan,Developer,London',
      exampleOutputLabel: 'Converted JSON output',
      exampleOutput:
        '[\n  {\n    "name": "Reed, Alex",\n    "role": "Analyst",\n    "city": "Austin"\n  },\n  {\n    "name": "Samira Khan",\n    "role": "Developer",\n    "city": "London"\n  }\n]',
      exampleNote:
        'Notice that "Reed, Alex" remains a single name field despite the comma inside quotes, and unchecking Pretty print outputs the same JSON on one compact line.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'Is my CSV file uploaded to a server?',
          answer:
            'No. Uploaded CSV files are read using the browser FileReader API and parsed locally in JavaScript, so your spreadsheet data stays completely on your device.',
        },
        {
          question: 'How are quoted values that contain commas handled?',
          answer:
            'The parser tracks double-quoted fields, so a value like "Austin, TX" stays intact as a single field instead of splitting into extra columns, and doubled quotes inside quotes unescape cleanly.',
        },
        {
          question: 'What if my CSV does not have a header row?',
          answer:
            'Uncheck First row as headers. Each CSV row then converts into an array of cell strings rather than keyed objects; when First row as headers is checked, any blank header cell automatically falls back to column_1, column_2, and so forth.',
        },
        {
          question: 'Can it convert semicolon-delimited or TSV files?',
          answer:
            'Yes. Auto-detect inspects the first line for commas, semicolons, and tabs, or you can manually pick Comma, Semicolon, or Tab from the Delimiter dropdown.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['json-to-csv', 'json-formatter', 'yaml-to-json'],
    },
  },

  // 19) JSON to CSV Converter (/json-to-csv/)
  {
    id: 'json-to-csv',
    name: 'JSON to CSV Converter',
    slug: 'json-to-csv',
    path: '/json-to-csv/',
    canonicalUrl: 'https://riadalashekin.com/json-to-csv/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'DeveloperApplication',
    badge: 'Data Utility',
    shortDescription:
      'Flatten nested JSON arrays into Excel-compatible CSV in your browser with dot-notation headers, live table preview, and file download.',
    seoTitle: 'JSON to CSV Converter - Convert JSON to CSV for Excel | Riad Al Ashekin',
    metaDescription:
      'Convert JSON arrays to CSV online for Excel or Google Sheets. Nested fields are flattened. Copy the result or download a .csv file.',
    h1: 'JSON to CSV Converter - Convert JSON to CSV for Excel',
    intro:
      'Convert JSON arrays of objects into spreadsheet-ready CSV files locally in your browser. Automatically flattens nested objects with dot notation, renders a live preview table, and adds UTF-8 BOM on .csv downloads so Excel opens characters cleanly.',
    howToUse: [
      'Paste a JSON array of objects into the JSON Array Input field or click Upload JSON File.',
      'Choose your output Delimiter (Comma, Semicolon, or Tab).',
      'Inspect the live Table Preview below to verify flattened columns and row values.',
      'Click Copy CSV or Download .csv to export the spreadsheet file.',
    ],
    features: [
      'Accepts pasted JSON or uploaded .json files directly in browser memory',
      'Flattens nested JSON objects using dot notation (for example, user.city) and serializes nested arrays',
      'Escapes delimiters, quotes, and newlines properly for Excel and Google Sheets',
      'Interactive Table Preview plus Copy CSV and UTF-8 BOM .csv file download',
    ],
    technicalExplanation: {
      heading: 'Flattening Hierarchical JSON into Tabular Columns',
      body: 'API responses often contain nested objects that spreadsheets cannot display in a single flat column without preprocessing. Recursively walking each object builds deterministic dot-separated column names.',
    },
    faqs: [
      {
        question: 'What JSON structure works best for CSV conversion?',
        answer:
          'A non-empty JSON array of objects (such as [{"id":1,"name":"Alex"},{"id":2,"name":"Sam"}]) works best because object keys map directly to spreadsheet column headers. Arrays of plain values or single objects can trigger a format error.',
      },
      {
        question: 'How are nested JSON objects handled?',
        answer:
          'Nested objects are automatically flattened with dot notation—for example, {"user":{"city":"Dhaka"}} becomes a column named user.city. Embedded arrays inside cells are preserved as compact JSON strings.',
      },
      {
        question: 'Will the downloaded CSV open properly in Microsoft Excel?',
        answer:
          'Yes. Download .csv prepends a UTF-8 BOM (byte order mark) and properly quotes fields with commas or newlines so Excel displays accented characters and column boundaries cleanly.',
      },
      {
        question: 'What if different objects in the JSON array have missing keys?',
        answer:
          'The converter collects the union of all keys across every record in the array and fills missing cells with empty strings so columns stay aligned.',
      },
    ],
    relatedToolSlugs: ['csv-to-json', 'json-validator', 'json-formatter'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the JSON to CSV Converter',
      howToUseSteps: [
        'Paste a non-empty JSON array of objects into the JSON Array Input textarea, or click Upload .json File to load a local .json file.',
        'Select Comma (,), Semicolon (;), or Tab in the Delimiter dropdown to match your spreadsheet tool.',
        'Inspect the live Table Preview below the text boxes to confirm flattened column headers and aligned cell values look accurate.',
        'Click Copy to copy the generated CSV text, Download .csv to save converted.csv with UTF-8 BOM encoding, or Clear to reset.',
      ],
      checksOrShowsHeading: 'What the JSON to CSV Converter does',
      checksOrShowsIntro:
        'The converter flattens structured JSON arrays into tabular CSV lines strictly inside your browser without uploading files anywhere:',
      checksOrShowsPoints: [
        'Recursively flattens nested child objects into dot-separated header names (such as meta.city and meta.plan) while serializing nested arrays as JSON strings.',
        'Gathers the complete union of keys across every record in the JSON array and leaves empty cells where optional properties are omitted.',
        'Displays a scrollable Table Preview showing up to the first 20 flattened rows directly on the page before you export.',
        'Escapes cells containing delimiters, double quotes, or line breaks cleanly, and prepends a UTF-8 byte order mark (BOM) when saving converted.csv so Excel displays characters reliably.',
        'Validates that input is a non-empty JSON array of objects and surfaces clear syntax or structure errors above the editor.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample nested JSON input',
      exampleInput: '[{"id":1,"user":{"name":"Alex","city":"Austin"}},{"id":2,"user":{"name":"Nadia","city":"Dhaka"}}]',
      exampleOutputLabel: 'Flattened CSV output',
      exampleOutput: 'id,user.name,user.city\n1,Alex,Austin\n2,Nadia,Dhaka',
      exampleNote:
        'The nested user object expands automatically into separate user.name and user.city columns in both CSV Output and the Table Preview.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What JSON structure works best for CSV conversion?',
          answer:
            'A non-empty JSON array of objects (such as [{"id":1,"name":"Alex"},{"id":2,"name":"Sam"}]) works best because object keys map directly to spreadsheet column headers. Arrays of plain values or single objects can trigger a format error.',
        },
        {
          question: 'How are nested JSON objects handled?',
          answer:
            'Nested objects are automatically flattened with dot notation—for example, {"user":{"city":"Dhaka"}} becomes a column named user.city. Embedded arrays inside cells are preserved as compact JSON strings.',
        },
        {
          question: 'Will the downloaded CSV open properly in Microsoft Excel?',
          answer:
            'Yes. Download .csv prepends a UTF-8 BOM (byte order mark) and properly quotes fields with commas or newlines so Excel displays accented characters and column boundaries cleanly.',
        },
        {
          question: 'What if different objects in the JSON array have missing keys?',
          answer:
            'The converter collects the union of all keys across every record in the array and fills missing cells with empty strings so columns stay aligned.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['csv-to-json', 'json-validator', 'json-formatter'],
    },
  },

  // 20) YAML to JSON Converter (/yaml-to-json/)
  {
    id: 'yaml-to-json',
    name: 'YAML to JSON Converter',
    slug: 'yaml-to-json',
    path: '/yaml-to-json/',
    canonicalUrl: 'https://riadalashekin.com/yaml-to-json/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'DeveloperApplication',
    badge: 'Data Utility',
    shortDescription:
      'Convert YAML to JSON and JSON back to YAML in your browser using a real YAML parser with indentation controls and line-number error messages.',
    seoTitle: 'YAML to JSON Converter - Convert YAML to JSON & JSON to YAML | Riad Al Ashekin',
    metaDescription:
      'Convert YAML to JSON and JSON to YAML online. Validates syntax and shows clear error messages with line numbers.',
    h1: 'YAML to JSON Converter - Convert YAML to JSON & JSON to YAML',
    intro:
      'Switch configuration files cleanly between YAML and JSON directly in your browser. Validates syntax with line-number reporting, lets you choose 2- or 4-space indentation, and copies results in one click.',
    howToUse: [
      'Select either YAML to JSON or JSON to YAML at the top left.',
      'Set Indentation to 2 spaces or 4 spaces.',
      'Paste your YAML or JSON content into the left editor.',
      'Check for any syntax error banner with line details, or click Copy to save the converted output.',
    ],
    features: [
      'Two-way conversion powered by the client-side js-yaml parser',
      'Configurable 2-space and 4-space indentation',
      'Syntax validation showing YAML or JSON parse errors including line numbers when reported by the parser',
      'Two-way YAML to JSON and JSON to YAML toggles plus Clear and Copy controls running purely in browser memory',
    ],
    technicalExplanation: {
      heading: 'Schema-Safe YAML and JSON Serialization',
      body: 'YAML supports multi-line configurations and readable nesting while JSON offers strict data interchange. Parsing into native structures before dumping avoids brittle string replacements.',
    },
    faqs: [
      {
        question: 'What is the main difference between YAML and JSON?',
        answer:
          'YAML uses whitespace indentation and minimal punctuation for human-friendly configuration files, whereas JSON uses explicit curly braces, square brackets, and quoted keys for strict machine data interchange.',
      },
      {
        question: 'Why do YAML indentation errors happen?',
        answer:
          'YAML depends strictly on consistent leading spaces to mark hierarchy. Mixing tabs with spaces or shifting a child key by one uneven space triggers a parser error, which this tool reports with line details.',
      },
      {
        question: 'Are YAML comments kept when converting to JSON?',
        answer:
          'No. The JSON specification does not support comments, so any # comments in your YAML file are dropped when converting to JSON and will not reappear if you convert back.',
      },
      {
        question: 'Can I choose how many spaces are used for indentation?',
        answer:
          'Yes. Use the Indentation selector at the top right to format either JSON or YAML output with 2 spaces or 4 spaces.',
      },
    ],
    relatedToolSlugs: ['json-formatter', 'csv-to-json', 'xml-formatter'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the YAML to JSON Converter',
      howToUseSteps: [
        'Choose YAML to JSON or JSON to YAML using the two mode buttons at the top left.',
        'Pick 2 Spaces or 4 Spaces from the Indentation selector on the top right.',
        'Paste your YAML configuration or JSON payload into the left input box to convert it immediately in the right output box.',
        'Review any syntax error banner showing the line number if parsing fails, then click Copy to save the converted output or Clear to empty the editor.',
      ],
      checksOrShowsHeading: 'What the YAML to JSON Converter does',
      checksOrShowsIntro:
        'Powered locally by the js-yaml parser in your browser, the converter validates syntax and converts structured configs without server calls:',
      checksOrShowsPoints: [
        'Parses YAML mappings, sequences, numbers, booleans, nulls, and multi-line strings accurately into formatted JSON directly in browser memory.',
        'Serializes valid JSON objects and arrays back into clean indentation-based YAML when switched to JSON to YAML mode.',
        'Applies your selected 2-space or 4-space Indentation width immediately across both output formats for consistent code style.',
        'Reports YAML indentation mistakes, invalid syntax, or malformed JSON tokens alongside the parser line number whenever reported.',
        'Includes YAML to JSON and JSON to YAML direction buttons, a Clear button, and a Copy button so you can convert and verify configuration snippets quickly.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample YAML configuration (2-space indent)',
      exampleInput: 'service: api\nport: 8080\ntags:\n  - production\n  - v2',
      exampleOutputLabel: 'Converted JSON output',
      exampleOutput: '{\n  "service": "api",\n  "port": 8080,\n  "tags": [\n    "production",\n    "v2"\n  ]\n}',
      exampleNote:
        'Switching to JSON to YAML mode and pasting that formatted JSON block serializes it back into clean 2-space YAML, though # comments present in original YAML cannot persist in JSON.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What is the main difference between YAML and JSON?',
          answer:
            'YAML uses whitespace indentation and minimal punctuation for human-friendly configuration files, whereas JSON uses explicit curly braces, square brackets, and quoted keys for strict machine data interchange.',
        },
        {
          question: 'Why do YAML indentation errors happen?',
          answer:
            'YAML depends strictly on consistent leading spaces to mark hierarchy. Mixing tabs with spaces or shifting a child key by one uneven space triggers a parser error, which this tool reports with line details.',
        },
        {
          question: 'Are YAML comments kept when converting to JSON?',
          answer:
            'No. The JSON specification does not support comments, so any # comments in your YAML file are dropped when converting to JSON and will not reappear if you convert back.',
        },
        {
          question: 'Can I choose how many spaces are used for indentation?',
          answer:
            'Yes. Use the Indentation selector at the top right to format either JSON or YAML output with 2 spaces or 4 spaces.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['json-formatter', 'csv-to-json', 'xml-formatter'],
    },
  },

  // 21) Unix Timestamp Converter (/unix-timestamp-converter/)
  {
    id: 'unix-timestamp-converter',
    name: 'Unix Timestamp Converter',
    slug: 'unix-timestamp-converter',
    path: '/unix-timestamp-converter/',
    canonicalUrl: 'https://riadalashekin.com/unix-timestamp-converter/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'DeveloperApplication',
    badge: 'Time Utility',
    shortDescription:
      'Convert Unix epoch timestamps (seconds or milliseconds) into UTC, local time, and ISO 8601, and convert dates back to epoch values.',
    seoTitle: 'Unix Timestamp Converter - Epoch Time to Date & Date to Timestamp | Riad Al Ashekin',
    metaDescription:
      'Convert Unix timestamps to readable dates and dates to epoch time online. Supports seconds and milliseconds, in UTC and your local time.',
    h1: 'Unix Timestamp Converter - Epoch Time to Date & Date to Timestamp',
    intro:
      'Watch the live current Unix epoch clock tick, convert seconds or milliseconds into readable UTC, local, and ISO 8601 dates, and translate any calendar date and time back into an integer timestamp.',
    howToUse: [
      'Check the live Current Unix Epoch Time card at the top or click Copy Seconds to grab the current timestamp.',
      'To decode an epoch value, enter a number in Timestamp to Date; values of 13+ digits (or outside seconds range) auto-detect as milliseconds.',
      'Read the converted UTC String, Local Time, ISO 8601 output, and detected unit below.',
      'To encode a calendar date, fill out Date & Time to Timestamp and copy either Seconds or Milliseconds.',
    ],
    features: [
      'Live updating Current Unix Timestamp in both seconds and milliseconds',
      'Automatic seconds vs. milliseconds detection with explicit unit display',
      'Outputs formatted UTC string, browser Local Time, and ISO 8601 timestamp',
      'Bidirectional Date & Time to Unix Timestamp converter with validation',
    ],
    technicalExplanation: {
      heading: 'Working with Unix Seconds and Milliseconds',
      body: 'Unix time counts elapsed seconds since 1970-01-01T00:00:00Z excluding leap seconds. JavaScript Date.now uses milliseconds, whereas many backend databases and APIs expect 10-digit seconds.',
    },
    faqs: [
      {
        question: 'What is a Unix timestamp?',
        answer:
          'A Unix timestamp (also called epoch time) is the count of seconds or milliseconds that have elapsed since midnight UTC on January 1, 1970, not counting leap seconds.',
      },
      {
        question: 'How do I tell seconds apart from milliseconds?',
        answer:
          'Current timestamps in seconds are 10 digits long (around 1.7 billion), while millisecond timestamps are 13 digits long (1,000 times larger). The converter checks digit magnitude and tells you whether seconds or milliseconds were detected.',
      },
      {
        question: 'What is the Year 2038 problem?',
        answer:
          'Older software that stores Unix seconds as a signed 32-bit integer overflows after 2,147,483,647 seconds (03:14:07 UTC on January 19, 2038), wrapping around to 1901. Modern 64-bit systems and JavaScript numbers avoid this limit.',
      },
      {
        question: 'Does Unix epoch time change for daylight saving time or time zones?',
        answer:
          'No. The raw Unix integer represents the exact same instant worldwide relative to UTC. Time zones and daylight saving time only change how that instant displays when converted to local clock time.',
      },
    ],
    relatedToolSlugs: ['time-zone-converter', 'date-difference-calculator', 'cron-expression-generator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the Unix Timestamp Converter',
      howToUseSteps: [
        'Read the live ticking Current Unix Epoch Time card at the top, or click Copy to grab the current epoch seconds.',
        'To decode an epoch value, paste any integer into Timestamp to Date—or click Use Current Timestamp to fill the active clock value.',
        'Inspect the detected unit (Seconds vs Milliseconds) along with the formatted UTC, Browser Local Time, and ISO 8601 cards, each with its own Copy button.',
        'To encode a calendar date, pick a date and time in Date & Time to Timestamp and copy either the Unix Seconds or Unix Milliseconds output.',
      ],
      checksOrShowsHeading: 'What the Unix Timestamp Converter does',
      checksOrShowsIntro:
        'All timestamp calculations execute immediately inside browser memory using native JavaScript Date routines:',
      checksOrShowsPoints: [
        'Displays a live updating Unix epoch counter at the top of the page paired with a one-click Copy button.',
        'Automatically distinguishes seconds from milliseconds using numeric magnitude (values with absolute value at or above 10^12 are treated as milliseconds) and rejects non-integer text with a clear error.',
        'Converts every valid timestamp simultaneously into UTC, your browser Local Time, and standardized ISO 8601 output, each equipped with a Copy button.',
        'Converts any chosen date and local time back into both 10-digit Unix Seconds and 13-digit Unix Milliseconds with separate Copy actions.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample timestamp input',
      exampleInput: '1700000000',
      exampleOutputLabel: 'Decoded outputs (auto-detected: Seconds)',
      exampleOutput:
        'UTC: Tue, 14 Nov 2023 22:13:20 GMT\nISO 8601: 2023-11-14T22:13:20.000Z',
      exampleNote:
        'Entering 1700000000000 triggers Milliseconds auto-detection because its magnitude is at or above 1e12, returning the exact same UTC and ISO 8601 instant.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What is a Unix timestamp?',
          answer:
            'A Unix timestamp (also called epoch time) is the count of seconds or milliseconds that have elapsed since midnight UTC on January 1, 1970, not counting leap seconds.',
        },
        {
          question: 'How do I tell seconds apart from milliseconds?',
          answer:
            'Current timestamps in seconds are 10 digits long (around 1.7 billion), while millisecond timestamps are 13 digits long (1,000 times larger). The converter checks digit magnitude and tells you whether seconds or milliseconds were detected.',
        },
        {
          question: 'What is the Year 2038 problem?',
          answer:
            'Older software that stores Unix seconds as a signed 32-bit integer overflows after 2,147,483,647 seconds (03:14:07 UTC on January 19, 2038), wrapping around to 1901. Modern 64-bit systems and JavaScript numbers avoid this limit.',
        },
        {
          question: 'Does Unix epoch time change for daylight saving time or time zones?',
          answer:
            'No. The raw Unix integer represents the exact same instant worldwide relative to UTC. Time zones and daylight saving time only change how that instant displays when converted to local clock time.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['time-zone-converter', 'date-difference-calculator', 'cron-expression-generator'],
    },
  },

  // 22) HEX to RGB Converter (/hex-to-rgb/)
  {
    id: 'hex-to-rgb',
    name: 'HEX to RGB Converter',
    slug: 'hex-to-rgb',
    path: '/hex-to-rgb/',
    canonicalUrl: 'https://riadalashekin.com/hex-to-rgb/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'DeveloperApplication',
    badge: 'Color Utility',
    shortDescription:
      'Convert HEX (3/6/8-digit), RGB(A), and HSL(A) colors in your browser with a native color picker, live swatch, and white/black contrast ratios.',
    seoTitle: 'HEX to RGB Converter - Convert HEX, RGB & HSL Colors | Riad Al Ashekin',
    metaDescription:
      'Convert HEX color codes to RGB and HSL, and RGB back to HEX, online. Includes a color picker and a live preview.',
    h1: 'HEX to RGB Converter - Convert HEX, RGB & HSL Colors',
    intro:
      'Translate colors effortlessly across 3-, 6-, and 8-digit HEX codes, RGB/RGBA values, and HSL/HSLA CSS strings. Preview the color swatch, pick shades interactively, and check contrast ratios against pure white and pure black.',
    howToUse: [
      'Type or paste any valid 3-, 6-, or 8-digit HEX code, rgb()/rgba(), or hsl()/hsla() value into the Color Input field.',
      'Or click the native color Picker swatch on the right to choose any shade visually.',
      'Inspect the converted 6-digit HEX, 8-digit HEX, RGB/RGBA, and HSL/HSLA outputs plus Contrast vs White and Contrast vs Black.',
      'Click Copy next to any color format to copy its CSS-ready string.',
    ],
    features: [
      'Parses 3-digit (#F09), 6-digit (#7839EE), and 8-digit (#7839EE80) HEX plus rgb()/rgba() and hsl()/hsla()',
      'Native browser color picker synced with formatted HEX output',
      'Live preview swatch and WCAG contrast ratio calculation against #FFFFFF and #000000',
      'One-click Copy button on each output format plus invalid-syntax error feedback',
    ],
    technicalExplanation: {
      heading: 'Color Space Conversion and Luminance Contrast',
      body: 'HEX and RGB both encode red, green, and blue channels on a 0–255 scale, while HSL separates hue, saturation, and lightness for easier UI adjustments.',
    },
    faqs: [
      {
        question: 'What is the difference between HEX and RGB color codes?',
        answer:
          'Both HEX and RGB describe the same red, green, and blue intensity values from 0 to 255. RGB writes those numbers in decimal (such as rgb(120, 57, 238)), whereas HEX writes the same channels as two-digit base-16 hexadecimal pairs (#7839EE).',
      },
      {
        question: 'What does the alpha value in RGBA, HSLA, or 8-digit HEX mean?',
        answer:
          'Alpha controls transparency from 0 (completely transparent) to 1 (fully opaque) in rgba()/hsla(), or 00 to FF in 8-digit HEX. Lower alpha lets underlying background colors show through.',
      },
      {
        question: 'What is considered a good text contrast ratio?',
        answer:
          'Under common WCAG accessibility guidelines, normal body text generally targets a contrast ratio of at least 4.5:1 against its background, while large text (18pt regular or 14pt bold) targets at least 3:1.',
      },
      {
        question: 'Can I paste an RGB or HSL string to get its HEX equivalent?',
        answer:
          'Yes. The single Color Input field automatically detects HEX, rgb(), rgba(), hsl(), and hsla() syntax and converts it into all four output cards.',
      },
    ],
    relatedToolSlugs: ['css-gradient-generator', 'box-shadow-generator', 'favicon-generator'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the HEX to RGB Converter',
      howToUseSteps: [
        'Paste or type any 3-, 6-, or 8-digit HEX code, rgb()/rgba() string, or hsl()/hsla() value into the Color Input box.',
        'Alternatively, click the synced native Picker square on the right to select any shade visually.',
        'Inspect the live color preview swatch together with Contrast vs White and Contrast vs Black ratios.',
        'Click Copy inside any of the four output cards: HEX (6-digit), HEX (8-digit with Alpha), RGB / RGBA, or HSL / HSLA.',
      ],
      checksOrShowsHeading: 'What the HEX to RGB Converter does',
      checksOrShowsIntro:
        'The converter parses CSS color formats inside your browser and computes equivalent representations plus luminance contrast ratios:',
      checksOrShowsPoints: [
        'Detects and parses 3-digit shorthand HEX (#F09), 6-digit HEX (#7839EE), 8-digit HEX with alpha (#7839EE80), rgb()/rgba(), and hsl()/hsla() syntax automatically.',
        'Calculates all four formatted output strings simultaneously and places an individual Copy button next to every format.',
        'Computes relative sRGB luminance to display real-time Contrast vs White (#FFFFFF) and Contrast vs Black (#000000) ratios.',
        'Keeps the native HTML color Picker synchronized with your typed HEX value and shows a clear syntax hint if an input cannot be parsed.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample HEX input',
      exampleInput: '#7839EE',
      exampleOutputLabel: 'Converted formats and contrast ratios',
      exampleOutput:
        'HEX (6-digit): #7839EE\nHEX (8-digit): #7839EEFF\nRGB: rgb(120, 57, 238)\nHSL: hsl(261, 84%, 58%)\nContrast vs White: 6.23:1 | Contrast vs Black: 3.37:1',
      exampleNote:
        'Because Contrast vs White exceeds 4.5:1 while Contrast vs Black is 3.37:1, pure white text over #7839EE meets common WCAG normal-text contrast guidelines.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What is the difference between HEX and RGB color codes?',
          answer:
            'Both HEX and RGB describe the same red, green, and blue intensity values from 0 to 255. RGB writes those numbers in decimal (such as rgb(120, 57, 238)), whereas HEX writes the same channels as two-digit base-16 hexadecimal pairs (#7839EE).',
        },
        {
          question: 'What does the alpha value in RGBA, HSLA, or 8-digit HEX mean?',
          answer:
            'Alpha controls transparency from 0 (completely transparent) to 1 (fully opaque) in rgba()/hsla(), or 00 to FF in 8-digit HEX. Lower alpha lets underlying background colors show through.',
        },
        {
          question: 'What is considered a good text contrast ratio?',
          answer:
            'Under common WCAG accessibility guidelines, normal body text generally targets a contrast ratio of at least 4.5:1 against its background, while large text (18pt regular or 14pt bold) targets at least 3:1.',
        },
        {
          question: 'Can I paste an RGB or HSL string to get its HEX equivalent?',
          answer:
            'Yes. The single Color Input field automatically detects HEX, rgb(), rgba(), hsl(), and hsla() syntax and converts it into all four output cards.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['css-gradient-generator', 'box-shadow-generator', 'favicon-generator'],
    },
  },

  // 23) CSS Gradient Generator (/css-gradient-generator/)
  {
    id: 'css-gradient-generator',
    name: 'CSS Gradient Generator',
    slug: 'css-gradient-generator',
    path: '/css-gradient-generator/',
    canonicalUrl: 'https://riadalashekin.com/css-gradient-generator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'DeveloperApplication',
    badge: 'CSS Builder',
    shortDescription:
      'Design linear and radial CSS gradients visually with angle sliders, multi-stop color controls, starter presets, and one-click CSS copy.',
    seoTitle: 'CSS Gradient Generator - Create Linear & Radial Gradients | Riad Al Ashekin',
    metaDescription:
      'Create linear and radial CSS gradients with a visual editor. Add color stops, set the angle and copy the CSS code.',
    h1: 'CSS Gradient Generator - Create Linear & Radial Gradients',
    intro:
      'Build linear and radial CSS background gradients visually in your browser. Adjust angles, drag stop percentages, add or delete color stops, try built-in starter presets, and copy production-ready CSS syntax.',
    howToUse: [
      'Choose Linear or Radial gradient mode, or click a starter preset (Violet Dusk, Oceanic Slate, or Warm Dawn).',
      'In Linear mode, drag the Angle slider between 0 and 360 degrees.',
      'Adjust each color stop color picker and position percentage slider, or click Add Stop to insert extra colors.',
      'Click Copy inside the dark CSS code bar at the bottom to copy the background rule.',
    ],
    features: [
      'Linear (0°–360°) and circular Radial gradient preview and syntax generation',
      'Multi-stop editor with interactive color pickers, percentage sliders, Add Stop, and Remove Stop controls',
      'Three starter presets (Violet Dusk, Oceanic Slate, Warm Dawn) built into the toolbar',
      'Live gradient preview banner and copy-ready CSS background declaration',
    ],
    technicalExplanation: {
      heading: 'Standard Unprefixed CSS Gradient Syntax',
      body: 'Sorting stops by percentage ensures smooth color transitions without abrupt jumps in linear-gradient() and radial-gradient() declarations.',
    },
    faqs: [
      {
        question: 'What is the difference between a linear gradient and a radial gradient?',
        answer:
          'A linear gradient blends colors smoothly along a straight line defined by an angle such as 90deg or 135deg. A radial gradient blends outward in a circular shape starting from the center toward the outer stops.',
      },
      {
        question: 'Do generated CSS gradients work in all modern browsers?',
        answer:
          'Yes. Standard unprefixed linear-gradient() and radial-gradient() rules are natively supported across all modern desktop and mobile browsers without vendor prefixes.',
      },
      {
        question: 'How can I add transparency to a CSS gradient?',
        answer:
          'In the generated CSS rule, replace any hex color stop such as #7839ee with an RGBA, HSLA, or 8-digit hex value (for example rgba(120, 57, 238, 0.5) or #7839ee80) or transparent where you want underlying elements to show through.',
      },
      {
        question: 'How many color stops can I add?',
        answer:
          'You need at least two stops to form a gradient, and you can click Add Stop to append additional intermediate colors and position them anywhere from 0% to 100%.',
      },
    ],
    relatedToolSlugs: ['hex-to-rgb', 'box-shadow-generator', 'css-minifier'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the CSS Gradient Generator',
      howToUseSteps: [
        'Select Linear or Radial gradient mode—or click Violet Dusk, Oceanic Slate, or Warm Dawn to load a built-in starter preset.',
        'When Linear mode is active, drag the Angle slider between 0° and 360° to rotate the gradient direction.',
        'Pick each color stop using its color picker and adjust its 0%–100% position slider, or click Add Stop to insert extra color transitions.',
        'Inspect the live gradient preview banner at the top and click Copy inside the dark CSS code bar at the bottom.',
      ],
      checksOrShowsHeading: 'What the CSS Gradient Generator does',
      checksOrShowsIntro:
        'The visual builder updates both the live gradient preview and standard unprefixed CSS syntax directly inside your browser:',
      checksOrShowsPoints: [
        'Generates clean linear-gradient(angle, ...) and circular radial-gradient(circle, ...) background declarations with zero vendor prefixes.',
        'Automatically sorts color stops by percentage from 0% to 100% so your visual transitions stay smooth even if you drag sliders past one another.',
        'Includes Add Stop and per-stop Remove buttons while ensuring at least two color stops always remain active.',
        'Offers three starter presets—Violet Dusk, Oceanic Slate, and Warm Dawn—alongside a dark syntax output bar with a Copy button.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Default 3-stop linear configuration',
      exampleInput: 'Type: Linear | Angle: 135deg | Stops: #241547 at 0%, #7839ee at 50%, #38bdf8 at 100%',
      exampleOutputLabel: 'Generated CSS code',
      exampleOutput: 'background: linear-gradient(135deg, #241547 0%, #7839ee 50%, #38bdf8 100%);',
      exampleNote:
        'Switching the mode toggle to Radial converts the same sorted color stops into background: radial-gradient(circle, #241547 0%, #7839ee 50%, #38bdf8 100%); immediately.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What is the difference between a linear gradient and a radial gradient?',
          answer:
            'A linear gradient blends colors smoothly along a straight line defined by an angle such as 90deg or 135deg. A radial gradient blends outward in a circular shape starting from the center toward the outer stops.',
        },
        {
          question: 'Do generated CSS gradients work in all modern browsers?',
          answer:
            'Yes. Standard unprefixed linear-gradient() and radial-gradient() rules are natively supported across all modern desktop and mobile browsers without vendor prefixes.',
        },
        {
          question: 'How can I add transparency to a CSS gradient?',
          answer:
            'In the generated CSS rule, replace any hex color stop such as #7839ee with an RGBA, HSLA, or 8-digit hex value (for example rgba(120, 57, 238, 0.5) or #7839ee80) or transparent where you want underlying elements to show through.',
        },
        {
          question: 'How many color stops can I add?',
          answer:
            'You need at least two stops to form a gradient, and you can click Add Stop to append additional intermediate colors and position them anywhere from 0% to 100%.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['hex-to-rgb', 'box-shadow-generator', 'css-minifier'],
    },
  },

  // 24) CSS Box Shadow Generator (/box-shadow-generator/)
  {
    id: 'box-shadow-generator',
    name: 'CSS Box Shadow Generator',
    slug: 'box-shadow-generator',
    path: '/box-shadow-generator/',
    canonicalUrl: 'https://riadalashekin.com/box-shadow-generator/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'DeveloperApplication',
    badge: 'CSS Builder',
    shortDescription:
      'Build multi-layer CSS box-shadow styles visually with sliders for horizontal/vertical offset, blur, spread, color opacity, and inset shadows.',
    seoTitle: 'CSS Box Shadow Generator - Create CSS Box Shadows Visually | Riad Al Ashekin',
    metaDescription:
      'Create CSS box-shadow effects with sliders for offset, blur, spread and color. Preview live and copy the CSS code.',
    h1: 'CSS Box Shadow Generator - Create CSS Box Shadows Visually',
    intro:
      'Fine-tune depth, soft card elevation, or inset borders visually without guessing pixel numbers. Layer multiple shadows, control horizontal and vertical offsets, blur, spread, opacity, and copy clean CSS in one click.',
    howToUse: [
      'Move the Horizontal X, Vertical Y, Blur, Spread, and Opacity sliders for Layer 1 while watching the live Preview Card.',
      'Click the Color input to pick a shadow color, and check Inset if you want the shadow drawn inside the card.',
      'Click Add Layer to stack additional shadows for softer multi-layered depth.',
      'Click Copy on the dark CSS bar at the bottom to copy the complete box-shadow rule.',
    ],
    features: [
      'Interactive sliders for Horizontal X (-60px to 60px), Vertical Y (-60px to 60px), Blur (0px to 100px), Spread (-40px to 40px), and Opacity (0 to 1)',
      'Per-layer color picker and Inset toggle',
      'Unlimited stacked shadow layers joined as comma-separated CSS box-shadow values',
      'Live floating Preview Card and Copy CSS button',
    ],
    technicalExplanation: {
      heading: 'Stacking Realistic CSS Box Shadows',
      body: 'Real-world elevation combines a tight ambient shadow with a softer diffused drop shadow. Multi-layer CSS controls let designers inspect exact pixel geometry directly on a styled card.',
    },
    faqs: [
      {
        question: 'What is the difference between blur and spread in box-shadow?',
        answer:
          'Blur controls how soft or feathered the shadow edge becomes (larger values make the edge wider and softer). Spread expands or shrinks the size of the solid shadow rectangle evenly on all sides before blur is applied—negative spread pulls the shadow inward.',
      },
      {
        question: 'How do I create an inner shadow?',
        answer:
          'Check the Inset box on any shadow layer. Adding the inset keyword in CSS draws the shadow inside the element border instead of outside.',
      },
      {
        question: 'Can I stack multiple box shadows on one element?',
        answer:
          'Yes. Click Add Layer to create additional layers. The generator joins all layers with commas inside a single valid CSS box-shadow declaration.',
      },
      {
        question: 'Why does the output CSS use rgba() for the shadow color?',
        answer:
          'Converting your chosen hex color and Opacity slider into rgba(r, g, b, alpha) ensures subtle translucent shadows work consistently across browsers.',
      },
    ],
    relatedToolSlugs: ['css-gradient-generator', 'hex-to-rgb', 'css-minifier'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the CSS Box Shadow Generator',
      howToUseSteps: [
        'Watch the Preview Card update live as you adjust the X (-60 to 60px), Y (-60 to 60px), Blur (0 to 100px), Spread (-40 to 40px), and Opacity (0 to 1) sliders on Layer 1.',
        'Select a shadow color via the Color picker and check Inset if you want the shadow rendered inside the card border.',
        'Click Add Layer whenever you want to combine multiple soft ambient and key shadow layers together, or click Remove to drop extra layers.',
        'Click Copy inside the dark CSS code bar at the bottom to copy the complete box-shadow rule.',
      ],
      checksOrShowsHeading: 'What the CSS Box Shadow Generator does',
      checksOrShowsIntro:
        'The visual generator combines multiple shadow layers on a live Preview Card and outputs copy-ready CSS in your browser:',
      checksOrShowsPoints: [
        'Supports stacking multiple independent shadow layers and joins them into one comma-separated CSS box-shadow declaration.',
        'Provides exact sliders per layer for horizontal offset X, vertical offset Y, blur radius, spread radius, opacity, color picker, and Inset checkbox.',
        'Converts each layer hex color and alpha opacity slider into clean rgba(r, g, b, alpha) syntax for predictable browser rendering.',
        'Allows removing any extra layer (while keeping at least one active layer) and provides a one-click Copy button.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Default shadow layer settings',
      exampleInput: 'X: 0px | Y: 12px | Blur: 28px | Spread: -4px | Color: #150d28 | Opacity: 0.18 | Inset: off',
      exampleOutputLabel: 'Generated CSS box-shadow rule',
      exampleOutput: 'box-shadow: 0px 12px 28px -4px rgba(21, 13, 40, 0.18);',
      exampleNote:
        'Using a negative spread (-4px) pulls the shadow footprint slightly inward so the soft 28px blur concentrates below the bottom edge of the Preview Card.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'What is the difference between blur and spread in box-shadow?',
          answer:
            'Blur controls how soft or feathered the shadow edge becomes (larger values make the edge wider and softer). Spread expands or shrinks the size of the solid shadow rectangle evenly on all sides before blur is applied—negative spread pulls the shadow inward.',
        },
        {
          question: 'How do I create an inner shadow?',
          answer:
            'Check the Inset box on any shadow layer. Adding the inset keyword in CSS draws the shadow inside the element border instead of outside.',
        },
        {
          question: 'Can I stack multiple box shadows on one element?',
          answer:
            'Yes. Click Add Layer to create additional layers. The generator joins all layers with commas inside a single valid CSS box-shadow declaration.',
        },
        {
          question: 'Why does the output CSS use rgba() for the shadow color?',
          answer:
            'Converting your chosen hex color and Opacity slider into rgba(r, g, b, alpha) ensures subtle translucent shadows work consistently across browsers.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['css-gradient-generator', 'hex-to-rgb', 'css-minifier'],
    },
  },

  // 25) HTML Entity Encoder & Decoder (/html-entity-encoder/)
  {
    id: 'html-entity-encoder',
    name: 'HTML Entity Encoder & Decoder',
    slug: 'html-entity-encoder',
    path: '/html-entity-encoder/',
    canonicalUrl: 'https://riadalashekin.com/html-entity-encoder/',
    category: 'utility',
    schemaType: 'SoftwareApplication',
    softwareApplicationCategory: 'DeveloperApplication',
    badge: 'Dev Utility',
    shortDescription:
      'Escape reserved HTML characters (<, >, &, ", \') or all non-ASCII symbols to numeric entities, and decode HTML entities back to plain text.',
    seoTitle: 'HTML Entity Encoder & Decoder - Escape & Unescape HTML Characters | Riad Al Ashekin',
    metaDescription:
      'Encode special characters to HTML entities or decode entities back to text online. Escape <, >, & and quotes for safe HTML.',
    h1: 'HTML Entity Encoder & Decoder - Escape & Unescape HTML Characters',
    intro:
      'Escape HTML syntax characters safely for displaying code snippets or user text inside web pages, and decode named, decimal, or hex HTML entities back into readable text inside your browser.',
    howToUse: [
      'Choose Encode to Entities or Decode Entities at the top left.',
      'When encoding, keep Encode all non-ASCII characters unchecked to escape only the five core HTML characters (&, <, >, ", \'), or check it to convert extended symbols into numeric &#code; entities as well.',
      'Paste your markup or escaped string into the left textarea.',
      'Click Copy to save the encoded or decoded output.',
    ],
    features: [
      'Escapes core HTML reserved characters (&, <, >, ", and \') to standard entities',
      'Optional checkbox to encode all non-ASCII Unicode code points (>127) as decimal &#code; entities',
      'Decodes decimal (&#169;), hexadecimal (&#xA9;), and common named entities (&amp;, &lt;, &gt;, &quot;, &nbsp;, &copy;, &mdash;, etc.)',
      'Swap Input & Output, Clear, and Copy buttons operating locally in browser memory',
    ],
    technicalExplanation: {
      heading: 'Escaping Reserved Characters Without Mutating Browser DOM',
      body: 'Pure string replacement avoids browser parser side effects and reliably converts reserved brackets and ampersands so raw HTML code displays as literal text rather than rendering tags.',
    },
    faqs: [
      {
        question: 'Which characters must be escaped in HTML?',
        answer:
          'At minimum, escape ampersand (& to &amp;), less-than (< to &lt;), greater-than (> to &gt;), double quote (" to &quot; inside attributes), and single quote (\' to &#39; in single-quoted attributes).',
      },
      {
        question: 'What is the difference between named and numeric HTML entities?',
        answer:
          'Named entities use memorable labels like &lt; or &copy;, while numeric entities use the character Unicode code point in decimal (&#60;) or hexadecimal (&#x3C;). Both render the exact same symbol in browsers.',
      },
      {
        question: 'Why does escaping special characters help prevent broken HTML?',
        answer:
          'If literal < or & characters appear unescaped inside content or attributes, the browser HTML parser can mistake them for opening tags or broken attribute boundaries, scrambling layout or breaking templates.',
      },
      {
        question: 'Can this tool decode both decimal and hexadecimal numeric entities?',
        answer:
          'Yes. Decode mode converts decimal entities like &#169;, hex entities like &#xA9;, and common named entities back into their plain characters.',
      },
    ],
    relatedToolSlugs: ['html-cleaner', 'url-encoder', 'markdown-to-html'],
    belowSectionGuide: {
      howToUseHeading: 'How to use the HTML Entity Encoder & Decoder',
      howToUseSteps: [
        'Pick Encode to Entities or Decode Entities using the two direction buttons at the top left.',
        'When encoding, keep Encode all non-ASCII characters (numeric) unchecked to escape only the five core HTML characters (&, <, >, ", \'), or check it to convert extended Unicode symbols to numeric &#code; entities too.',
        'Paste your raw HTML snippet or escaped entity text into the left textarea to view the live output on the right.',
        'Click Copy to save the converted result, Swap Input & Output to check round-tripping, or Clear to reset.',
      ],
      checksOrShowsHeading: 'What the HTML Entity Encoder & Decoder does',
      checksOrShowsIntro:
        'The tool runs pure string-level escaping and unescaping directly inside your browser without executing or mutating DOM tags:',
      checksOrShowsPoints: [
        'Encodes ampersand (&), less-than (<), greater-than (>), double quote ("), and single quote (\') into &amp;, &lt;, &gt;, &quot;, and &#39;.',
        'Optionally converts every character with a Unicode code point above 127 into a decimal numeric HTML entity such as &#169; when Encode all non-ASCII characters is checked.',
        'Decodes decimal entities (&#dec;), hexadecimal entities (&#xhex;), and 13 common named entities (&amp;, &lt;, &gt;, &quot;, &#39;, &apos;, &nbsp;, &copy;, &reg;, &trade;, &mdash;, &ndash;, &hellip;) back into plain text.',
        'Includes Clear, Swap Input & Output, and Copy buttons so you can verify safe round-trip escaping locally.',
      ],
      exampleHeading: 'Example',
      exampleInputLabel: 'Sample HTML snippet (Encode mode, reserved characters only)',
      exampleInput: '<div class="card">5 > 3 & "Free"</div>',
      exampleOutputLabel: 'Escaped HTML entity output',
      exampleOutput: '&lt;div class=&quot;card&quot;&gt;5 &gt; 3 &amp; &quot;Free&quot;&lt;/div&gt;',
      exampleNote:
        'Clicking Swap Input & Output switches to Decode Entities and converts that escaped string right back into the literal HTML snippet.',
      faqHeading: 'Frequently asked questions',
      faqs: [
        {
          question: 'Which characters must be escaped in HTML?',
          answer:
            'At minimum, escape ampersand (& to &amp;), less-than (< to &lt;), greater-than (> to &gt;), double quote (" to &quot; inside attributes), and single quote (\' to &#39; in single-quoted attributes).',
        },
        {
          question: 'What is the difference between named and numeric HTML entities?',
          answer:
            'Named entities use memorable labels like &lt; or &copy;, while numeric entities use the character Unicode code point in decimal (&#60;) or hexadecimal (&#x3C;). Both render the exact same symbol in browsers.',
        },
        {
          question: 'Why does escaping special characters help prevent broken HTML?',
          answer:
            'If literal < or & characters appear unescaped inside content or attributes, the browser HTML parser can mistake them for opening tags or broken attribute boundaries, scrambling layout or breaking templates.',
        },
        {
          question: 'Can this tool decode both decimal and hexadecimal numeric entities?',
          answer:
            'Yes. Decode mode converts decimal entities like &#169;, hex entities like &#xA9;, and common named entities back into their plain characters.',
        },
      ],
      relatedHeading: 'Related tools',
      relatedSlugs: ['html-cleaner', 'url-encoder', 'markdown-to-html'],
    },
  },
];
