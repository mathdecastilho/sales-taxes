# Sales Taxes Calculator

A sales tax calculator that computes basic and import taxes on items, applying specific rounding rules.

## Features

- Calculates basic taxes (10%) for non-exempt items
- Calculates import taxes (5%) for imported items
- Applies basic tax exemptions for books, food, and medical products
- Rounds taxes up to the nearest 0.05
- Processes text input with specific format
- Generates formatted report with tax totals

## Setup

### Node.js Installation using NVM

1. Install NVM (Node Version Manager) if you don't have it:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

2. Restart your terminal or run:
```bash
source ~/.zshrc
```

3. Install and use the latest version of Node.js:
```bash
nvm install node
nvm use node
```

4. Verify the installation was successful:
```bash
node --version
npm --version
```

### Project Dependencies Installation

1. Clone the repository:
```bash
git clone https://github.com/mathdecastilho/sales-taxes.git
cd sales-taxes
```

2. Install dependencies:
```bash
npm install
```

## Project Usage

The project works as a Node.js module that processes an input string with items and returns a formatted report with calculated taxes.

### Terminal Usage Examples

1. **Using interactive Node.js:**
```bash
node -e "
const app = require('./index.js');
const input = '2 book at 12.49\\n1 music CD at 14.99\\n1 chocolate bar at 0.85';
console.log(app(input));
"
```

2. **Creating a test file:**
```bash
# Create a test-example.js file
cat > test-example.js << 'EOF'
const app = require('./index.js');

// Example 1: Basic items
const input1 = `2 book at 12.49
1 music CD at 14.99
1 chocolate bar at 0.85`;

console.log('=== Example 1: Basic items ===');
console.log(app(input1));

// Example 2: Imported items
const input2 = `1 imported box of chocolates at 10.00
1 imported bottle of perfume at 47.50`;

console.log('\n=== Example 2: Imported items ===');
console.log(app(input2));

// Example 3: Mixed items
const input3 = `1 imported bottle of perfume at 27.99
1 bottle of perfume at 18.99
1 packet of headache pills at 9.75
3 imported boxes of chocolates at 11.25`;

console.log('\n=== Example 3: Mixed items ===');
console.log(app(input3));
EOF

# Run the file
node test-example.js
```

3. **Expected output example:**
```
=== Example 1: Basic items ===
2 book: 24.98
1 music CD: 16.49
1 chocolate bar: 0.85
Sales Taxes: 1.50
Total: 42.32

=== Example 2: Imported items ===
1 imported box of chocolates: 10.50
1 imported bottle of perfume: 54.65
Sales Taxes: 7.65
Total: 65.15

=== Example 3: Mixed items ===
1 imported bottle of perfume: 32.19
1 bottle of perfume: 20.89
1 packet of headache pills: 9.75
3 imported boxes of chocolates: 35.55
Sales Taxes: 7.90
Total: 98.38
```

### Input Format

The input format should follow the pattern:
```
[quantity] [item name] at [price]
```

Examples:
- `1 book at 12.49`
- `2 music CD at 14.99`
- `1 imported bottle of perfume at 47.50`
- `3 imported boxes of chocolates at 11.25`

### Tax Rules

1. **Basic tax**: 10% on all items, except:
   - Books (book)
   - Food (chocolate, chocolates)
   - Medical products (pills)

2. **Import tax**: 5% on all imported items (containing "imported")

3. **Rounding**: Taxes are rounded up to the nearest 0.05

## Running Tests

The project uses Jest for testing. To run the tests:

### Run all tests:
```bash
npm test
```

### Run tests in watch mode (re-runs when files change):
```bash
npm test -- --watch
```

### Run tests with coverage:
```bash
npm test -- --coverage
```

### Run specific tests:
```bash
# Run only tests from index.test.js file
npm test -- index.test.js

# Run only tests containing "Case 1" in the description
npm test -- --testNamePattern="Case 1"
```

### Test Structure

Tests are organized in:
- `test/index.test.js` - Integration tests for the main application
- `test/inputParser.test.js` - Tests for the input parser
- `test/taxesCalculator/taxRouding.test.js` - Tests for tax rounding

## Project Structure

```
sales-taxes/
├── index.js                           # Module entry point
├── lib/
│   ├── index.js                      # Main application function
│   ├── inputParser.js                # Text input parser
│   ├── printer.js                    # Output formatter
│   └── taxesCalculator/
│       ├── index.js                  # Calculation orchestrator
│       ├── basicTaxCalculator.js     # Basic tax calculation
│       ├── importTaxCalculator.js    # Import tax calculation
│       └── taxRouding.js             # Tax rounding
├── test/                             # Unit and integration tests
├── package.json                      # Project configuration
└── README.md                         # This file
```
