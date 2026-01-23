import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginTS from '@typescript-eslint/eslint-plugin';
import parserTS from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: parserTS,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        sourceType: 'module',
        requireConfigFile: false
      }
    },
    settings: {
      react: {
        createClass: 'createReactClass',
        pragma: 'React',
        version: 'detect'
      }
    },
    plugins: {
      '@typescript-eslint': pluginTS,
      'react': pluginReact,
      'prettier': pluginPrettier
    },
    rules: {
      // Modern Code Quality Rules
      'array-callback-return': 1, // enforce `return` statements in callbacks of array methods - ENABLED for better code quality
      'no-await-in-loop': 1, // disallow `await` inside of loops - ENABLED to prevent performance issues
      'no-constructor-return': 1, // disallow returning value from constructor - ENABLED for correctness
      'no-duplicate-imports': 1, // disallow duplicate module imports
      'no-promise-executor-return': 1, // disallow returning values from Promise executor functions - ENABLED for correctness
      'no-self-compare': 1, // disallow comparisons where both sides are exactly the same
      'no-template-curly-in-string': 1, // disallow template literal placeholder syntax in regular strings - ENABLED to catch common mistakes
      'no-unmodified-loop-condition': 1, // disallow unmodified loop conditions
      'no-unreachable-loop': 1, // disallow loops with a body that allows only one iteration
      'no-use-before-define': 1, // disallow the use of variables before they are defined - ENABLED for stricter code
      'require-atomic-updates': 1, // disallow assignments that can lead to race conditions due to usage of `await` or `yield`

      // Additional Strict Rules
      'complexity': [1, 10], // enforce a maximum cyclomatic complexity - ENABLED with limit of 10
      'no-magic-numbers': [1, { ignore: [0, 1, -1], ignoreArrayIndexes: true }], // disallow magic numbers with exceptions
      'id-length': [
        1,
        { min: 2, exceptions: ['i', 'j', 'k', 'x', 'y', 'z', '_'] }
      ], // enforce minimum identifier lengths
      'accessor-pairs': 0, // enforce getter and setter pairs in objects and classes - OFF
      'arrow-body-style': 0, // require braces around arrow function bodies - OFF
      'block-scoped-var': 1, // enforce the use of variables within the scope they are defined
      'camelcase': 1, // enforce camelcase naming convention
      'capitalized-comments': 0, // enforce or disallow capitalization of the first letter of a comment - OFF for flexibility
      'class-methods-use-this': 0, // enforce that class methods utilize `this` - OFF
      'consistent-return': 1, // require `return` statements to either always or never specify values
      'consistent-this': 1, // enforce consistent naming when capturing the current execution context
      'default-case': 1, // require `default` cases in `switch` statements
      'default-case-last': 1, // enforce default clauses in switch statements to be last
      'default-param-last': 1, // enforce default parameters to be last - ENABLED for modern practices
      'dot-notation': 1, // enforce dot notation whenever possible
      'eqeqeq': 1, // require the use of `===` and `!==`
      'func-name-matching': 1, // require function names to match the name of the variable or property to which they are assigned
      'func-names': 0, // require or disallow named `function` expressions - OFF for flexibility
      'func-style': 0, // enforce the consistent use of either `function` declarations or expressions - OFF
      'grouped-accessor-pairs': 1, // require grouped accessor pairs in object literals and classes
      'guard-for-in': 1, // require `for-in` loops to include an `if` statement
      'id-denylist': 0, // disallow specified identifiers - OFF
      'id-match': 0, // require identifiers to match a specified regular expression - OFF
      'init-declarations': 0, // require or disallow initialization in variable declarations - OFF
      'max-classes-per-file': 1, // enforce a maximum number of classes per file
      'max-depth': [1, 4], // enforce a maximum depth that blocks can be nested - UPDATED to 4 for modern practices
      'max-lines': [1, { max: 1000, skipBlankLines: true }], // enforce a maximum number of lines per file - UPDATED to 1000
      'max-lines-per-function': [1, { max: 300 }], // enforce a maximum number of lines of code in a function - UPDATED to 300
      'max-nested-callbacks': [1, 4], // enforce a maximum depth that callbacks can be nested - UPDATED to 4
      'max-params': [1, { max: 5 }], // enforce a maximum number of parameters in function definitions - UPDATED to 5
      'max-statements': [1, { max: 30 }], // enforce a maximum number of statements allowed in function blocks - UPDATED to 30
      'multiline-comment-style': 0, // enforce a particular style for multiline comments - OFF
      'new-cap': 0, // require constructor names to begin with a capital letter - OFF
      'no-alert': 1, // disallow the use of `alert`, `confirm`, and `prompt`
      'no-array-constructor': 1, // disallow `Array` constructors
      'no-bitwise': 1, // disallow bitwise operators
      'no-caller': 1, // disallow the use of `arguments.caller` or `arguments.callee`
      'no-case-declarations': 1, // disallow lexical declarations in case clauses
      'no-console': 1, // disallow the use of `console`
      'no-continue': 1, // disallow `continue` statements
      'no-delete-var': 1, // disallow deleting variables
      'no-div-regex': 1, // disallow division operators explicitly at the beginning of regular expressions
      'no-else-return': 1, // disallow `else` blocks after `return` statements in `if` statements
      'no-empty': 1, // disallow empty block statements
      'no-empty-function': [1, { allow: ['constructors'] }], // disallow empty functions
      'no-eq-null': 1, // disallow `null` comparisons without type-checking operators
      'no-eval': 1, // disallow the use of `eval()`
      'no-extend-native': 1, // disallow extending native types
      'no-extra-bind': 1, // disallow unnecessary calls to `.bind()`
      'no-extra-boolean-cast': 1, // disallow unnecessary boolean casts
      'no-extra-label': 1, // disallow unnecessary labels
      'no-global-assign': 1, // disallow assignments to native objects or read-only global variables
      'no-implicit-coercion': 1, // disallow shorthand type conversions
      'no-implicit-globals': 1, // disallow declarations in the global scope
      'no-implied-eval': 1, // disallow the use of `eval()`-like methods
      'no-inline-comments': 1, // disallow inline comments after code
      'no-invalid-this': 1, // disallow `this` keywords outside of classes or class-like objects
      'no-iterator': 1, // disallow the use of the `__iterator__` property
      'no-label-var': 1, // disallow labels that share a name with a variable
      'no-labels': 1, // disallow labeled statements
      'no-lone-blocks': 1, // disallow unnecessary nested blocks
      'no-lonely-if': 1, // disallow `if` statements as the only statement in `else` blocks
      'no-loop-func': 1, // disallow function declarations that contain unsafe references inside loop statements
      'no-multi-assign': 1, // disallow use of chained assignment expressions
      'no-multi-str': 1, // disallow multiline strings
      'no-negated-condition': 1, // disallow negated conditions
      'no-nested-ternary': 1, // disallow nested ternary expressions
      'no-new': 1, // disallow `new` operators outside of assignments or comparisons
      'no-new-func': 1, // disallow `new` operators with the `Function` object
      'no-new-object': 1, // disallow `Object` constructors
      'no-new-wrappers': 1, // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
      'no-nonoctal-decimal-escape': 1, // disallow `\8` and `\9` escape sequences in string literals
      'no-octal': 1, // disallow octal literals
      'no-octal-escape': 1, // disallow octal escape sequences in string literals
      'no-param-reassign': 1, // disallow reassigning `function` parameters
      'no-plusplus': 1, // disallow the unary operators `++` and `--`   "no-proto": 1, // disallow the use of the `__proto__` property
      'no-redeclare': 1, // disallow variable redeclaration
      'no-regex-spaces': 1, // disallow multiple spaces in regular expressions
      'no-restricted-exports': 1, // disallow specified names in exports
      'no-restricted-globals': 1, // disallow specified global variables
      'no-restricted-imports': 1, // disallow specified modules when loaded by `import`
      'no-restricted-properties': 1, // disallow certain properties on certain objects
      'no-restricted-syntax': 1, // disallow specified syntax
      'no-return-assign': 1, // disallow assignment operators in `return` statements
      'no-return-await': 1, // disallow unnecessary `return await`
      'no-script-url': 1, // disallow `javascript:` urls
      'no-sequences': 1, // disallow comma operators
      'no-shadow': 1, // disallow variable declarations from shadowing variables declared in the outer scope
      'no-shadow-restricted-names': 1, // disallow identifiers from shadowing restricted names
      'no-ternary': 1, // disallow ternary operators
      'no-throw-literal': 1, // disallow throwing literals as exceptions
      'no-undef-init': 1, // disallow initializing variables to `undefined`
      'no-undefined': 1, // disallow the use of `undefined` as an identifier
      'no-underscore-dangle': 1, // disallow dangling underscores in identifiers
      'no-unneeded-ternary': 1, // disallow ternary operators when simpler alternatives exist - ENABLED
      'no-unused-expressions': 1, // disallow unused expressions
      'no-unused-labels': 1, // disallow unused labels
      'no-useless-call': 1, // disallow unnecessary calls to `.call()` and `.apply()`
      'no-useless-catch': 1, // disallow unnecessary `catch` clauses
      'no-useless-computed-key': 1, // disallow unnecessary computed property keys in objects and classes
      'no-useless-concat': 1, // disallow unnecessary concatenation of literals or template literals
      'no-useless-constructor': 1, // disallow unnecessary constructors - ENABLED
      'no-useless-escape': 1, // disallow unnecessary escape characters
      'no-useless-rename': 1, // disallow renaming import, export, and destructured assignments to the same name
      'no-useless-return': 1, // disallow redundant return statements
      'no-var': 1, // require `let` or `const` instead of `var`
      'no-void': [1, { allowAsStatement: true }], // disallow `void` operators
      'no-warning-comments': 1, // disallow specified warning terms in comments
      'no-with': 1, // disallow `with` statements
      'object-shorthand': 1, // require or disallow method and property shorthand syntax for object literals - ENABLED
      'one-var': 0, // enforce variables to be declared either together or separately in functions // DONE - OFF
      'operator-assignment': 1, // require or disallow assignment operator shorthand where possible
      'prefer-arrow-callback': 1, // require using arrow functions for callbacks
      'prefer-const': 1, // require `const` declarations for variables that are never reassigned after declared
      'prefer-destructuring': 1, // require destructuring from arrays and/or objects
      'prefer-exponentiation-operator': 1, // disallow the use of `Math.pow` in favor of the `**` operator
      'prefer-named-capture-group': 1, // enforce using named capture group in regular expression
      'prefer-numeric-literals': 1, // disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
      'prefer-object-spread': 1, // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
      'prefer-promise-reject-errors': 1, // require using Error objects as Promise rejection reasons
      'prefer-regex-literals': 1, // disallow use of the `RegExp` constructor in favor of regular expression literals
      'prefer-rest-params': 1, // require rest parameters instead of `arguments`
      'prefer-spread': 1, // require spread operators instead of `.apply()`
      'prefer-template': 1, // require template literals instead of string concatenation
      'radix': 1, // enforce the consistent use of the radix argument when using `parseInt()`
      'require-await': 1, // disallow async functions which have no `await` expression
      'require-unicode-regexp': 1, // enforce the use of `u` flag on RegExp
      'require-yield': 1, // require generator functions to contain `yield`
      'sort-imports': 1, // enforce sorted import declarations within modules
      'sort-keys': 1, // require object keys to be sorted
      'sort-vars': 1, // require variables within the same declaration block to be sorted
      'spaced-comment': 1, // enforce consistent spacing after the `//` or `/*` in a comment
      'strict': 1, // require or disallow strict mode directives
      'symbol-description': 1, // require symbol descriptions
      'vars-on-top': 1, // require `var` declarations be placed at the top of their containing scope
      'yoda': 1, // require or disallow "Yoda" conditions

      // Formatting Rules (Disabled - handled by Prettier)
      'curly': 0, // enforce consistent brace style for all control statements - OFF
      'lines-around-comment': 0, // require empty lines around comments - OFF
      'no-confusing-arrow': 0, // disallow arrow functions where they could be confused with comparisons - OFF
      'no-mixed-operators': 0, // disallow mixed binary operators - OFF
      'no-tabs': 0, // disallow all tabs - OFF
      'no-unexpected-multiline': 0, // disallow confusing multiline expressions - OFF
      'quotes': 0, // enforce the consistent use of either backticks, double, or single quotes - OFF
      'array-bracket-newline': 0, // enforce linebreaks after opening and before closing array brackets - OFF
      'array-element-newline': 0, // enforce line breaks after each array element - OFF
      'arrow-parens': 0, // require parentheses around arrow function arguments - OFF
      'arrow-spacing': 0, // enforce consistent spacing before and after the arrow in arrow functions - OFF
      'block-spacing': 0, // disallow or enforce spaces inside of blocks after opening block and before closing block - OFF
      'brace-style': 0, // enforce consistent brace style for blocks - OFF
      'comma-dangle': 0, // require or disallow trailing commas - OFF
      'comma-spacing': 0, // enforce consistent spacing before and after commas - OFF
      'comma-style': 0, // enforce consistent comma style - OFF
      'computed-property-spacing': 0, // enforce consistent spacing inside computed property brackets - OFF
      'dot-location': 0, // enforce consistent newlines before and after dots - OFF
      'eol-last': 0, // require or disallow newline at the end of files - OFF
      'func-call-spacing': 0, // require or disallow spacing between function identifiers and their invocations - OFF
      'function-call-argument-newline': 0, // enforce line breaks between arguments of a function call - OFF
      'function-paren-newline': 0, // enforce consistent line breaks inside function parentheses - OFF
      'generator-star-spacing': 0, // enforce consistent spacing around `*` operators in generator functions - OFF
      'implicit-arrow-linebreak': 0, // enforce the location of arrow function bodies - OFF
      'indent': 0, // enforce consistent indentation - OFF
      'jsx-quotes': 0, // enforce the consistent use of either double or single quotes in JSX attributes - OFF
      'key-spacing': 0, // enforce consistent spacing between keys and values in object literal properties - OFF
      'keyword-spacing': 0, // enforce consistent spacing around keywords and keyword-like tokens - OFF
      'linebreak-style': 0, // enforce consistent linebreak style - OFF
      'multiline-ternary': 0, // enforce newlines between operands of ternary expressions - OFF
      'newline-per-chained-call': 0, // require a newline after each call in a method chain - OFF
      'new-parens': 0, // enforce or disallow parentheses when invoking a constructor with no arguments - OFF
      'no-extra-parens': 0, // disallow unnecessary parentheses - OFF
      'no-extra-semi': 0, // disallow unnecessary semicolons - OFF
      'no-floating-decimal': 0, // disallow leading or trailing decimal points in numeric literals - OFF
      'no-mixed-spaces-and-tabs': 0, // disallow mixed spaces and tabs for indentation - OFF
      'no-multi-spaces': 0, // disallow multiple spaces - OFF
      'no-multiple-empty-lines': 0, // disallow multiple empty lines - OFF
      'no-trailing-spaces': 0, // disallow trailing whitespace at the end of lines - OFF
      'no-whitespace-before-property': 0, // disallow whitespace before properties - OFF
      'nonblock-statement-body-position': 0, // enforce the location of single-line statements - OFF
      'object-curly-newline': 0, // enforce consistent line breaks after opening and before closing braces - OFF
      'object-curly-spacing': 0, // enforce consistent spacing inside braces - OFF
      'object-property-newline': 0, // enforce placing object properties on separate lines - OFF
      'one-var-declaration-per-line': 0, // require or disallow newlines around variable declarations - OFF
      'operator-linebreak': 0, // enforce consistent linebreak style for operators - OFF
      'padded-blocks': 0, // require or disallow padding within blocks - OFF
      'quote-props': 0, // require quotes around object literal property names - OFF
      'rest-spread-spacing': 0, // enforce spacing between rest and spread operators and their expressions - OFF
      'semi': 0, // require or disallow semicolons instead of ASI - OFF
      'semi-spacing': 0, // enforce consistent spacing before and after semicolons - OFF
      'semi-style': 0, // enforce location of semicolons - OFF
      'space-before-blocks': 0, // enforce consistent spacing before blocks - OFF
      'space-before-function-paren': 0, // enforce consistent spacing before `function` definition opening parenthesis - OFF
      'space-in-parens': 0, // enforce consistent spacing inside parentheses - OFF
      'space-infix-ops': 0, // require spacing around infix operators - OFF
      'space-unary-ops': 0, // enforce consistent spacing before or after unary operators - OFF
      'switch-colon-spacing': 0, // enforce spacing around colons of switch statements - OFF
      'template-curly-spacing': 0, // require or disallow spacing around embedded expressions of template strings - OFF
      'template-tag-spacing': 0, // require or disallow spacing between template tags and their literals - OFF
      'unicode-bom': 0, // require or disallow Unicode byte order mark (BOM) - OFF
      'wrap-iife': 0, // require parentheses around immediate `function` invocations - OFF
      'wrap-regex': 0, // require parenthesis around regex literals - OFF
      'yield-star-spacing': 0, // require or disallow spacing around the `*` in `yield*` expressions - OFF

      // Core ESLint Rules
      'line-comment-position': 0, // enforce position of line comments - OFF
      'lines-between-class-members': 0, // require or disallow an empty line between class members - OFF
      'max-len': [
        1,
        {
          code: 100,
          ignoreUrls: true,
          ignoreComments: true,
          ignorePattern: '^.*[\'"].{10,}[\'"].*$'
        }
      ], // enforce a maximum line length - UPDATED to 100
      'max-statements-per-line': 1, // enforce a maximum number of statements allowed per line
      'padding-line-between-statements': 0, // require or disallow padding lines between statements - OFF
      'no-cond-assign': 1, // disallow assignment in conditional expressions
      'no-constant-condition': 1, // disallow use of constant expressions in conditions
      'no-control-regex': 1, // disallow control characters in regular expressions
      'no-debugger': 1, // disallow use of debugger - ENABLED for production
      'no-dupe-args': 1, // disallow duplicate arguments in functions
      'no-dupe-keys': 1, // disallow duplicate keys when creating object literals
      'no-duplicate-case': 1, // disallow a duplicate case label
      'no-ex-assign': 1, // disallow assigning to the exception in a catch block
      'no-func-assign': 1, // disallow overwriting functions written as function declarations
      'no-inner-declarations': 1, // disallow function or variable declarations in nested blocks
      'no-invalid-regexp': 1, // disallow invalid regular expression strings in the RegExp constructor
      'no-irregular-whitespace': 1, // disallow irregular whitespace outside of strings and comments
      'no-obj-calls': 1, // disallow the use of object properties of the global object (Math and JSON) as functions
      'no-sparse-arrays': 1, // disallow sparse arrays
      'no-unreachable': 1, // disallow unreachable statements after a return, throw, continue, or break statement
      'use-isnan': 1, // disallow comparisons with the value NaN
      'valid-typeof': 1, // ensure that the results of typeof are compared against a valid string
      'no-unused-vars': 1, // disallow declaration of variables that are not used in the code
      'array-bracket-spacing': 0, // enforce consistent spacing inside array brackets - OFF

      // TypeScript ESLint Rules
      '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_' }], // disallow unused variables with underscore prefix exception
      '@typescript-eslint/no-explicit-any': 1, // disallow usage of the any type - ENABLED for better type safety
      '@typescript-eslint/prefer-nullish-coalescing': 1, // prefer nullish coalescing operator - ENABLED for modern practices
      '@typescript-eslint/prefer-optional-chain': 1, // prefer optional chaining - ENABLED for modern practices
      '@typescript-eslint/no-non-null-assertion': 1, // disallow non-null assertions - ENABLED for safety
      '@typescript-eslint/consistent-type-imports': 1, // enforce consistent usage of type imports - ENABLED
      '@typescript-eslint/no-floating-promises': 1, // require Promise-like statements to be handled appropriately
      '@typescript-eslint/await-thenable': 1, // disallow awaiting a value that is not a Thenable
      '@typescript-eslint/no-misused-promises': 1, // avoid using promises in places not designed to handle them
      '@typescript-eslint/prefer-readonly': 1, // require private members to be marked as readonly if they're never modified
      '@typescript-eslint/prefer-readonly-parameter-types': 0, // require function parameters to be typed as readonly - OFF as it can be too restrictive
      '@typescript-eslint/strict-boolean-expressions': 1, // restrict the types allowed in boolean expressions
      // TypeScript formatting rules (disabled - handled by Prettier)
      '@typescript-eslint/brace-style': 0, // OFF
      '@typescript-eslint/comma-dangle': 0, // OFF
      '@typescript-eslint/comma-spacing': 0, // OFF
      '@typescript-eslint/func-call-spacing': 0, // OFF
      '@typescript-eslint/indent': 0, // OFF
      '@typescript-eslint/keyword-spacing': 0, // OFF
      '@typescript-eslint/member-delimiter-style': 0, // OFF
      '@typescript-eslint/no-extra-parens': 0, // OFF
      '@typescript-eslint/no-extra-semi': 0, // OFF
      '@typescript-eslint/object-curly-spacing': 0, // OFF
      '@typescript-eslint/semi': 0, // OFF
      '@typescript-eslint/space-before-blocks': 0, // OFF
      '@typescript-eslint/space-before-function-paren': 0, // OFF
      '@typescript-eslint/space-infix-ops': 0, // OFF
      '@typescript-eslint/type-annotation-spacing': 0, // OFF
      '@typescript-eslint/quotes': 0, // OFF

      // React Rules
      'react/display-name': 0, // prevent missing displayName in a React component definition - OFF
      'react/jsx-no-undef': 1, // disallow undeclared variables in JSX
      'react/jsx-sort-props': 1, // enforce props alphabetical sorting - ON
      'react/jsx-uses-react': 0, // prevent React to be incorrectly marked as unused - OFF for React 17+
      'react/jsx-uses-vars': 1, // prevent variables used in JSX to be incorrectly marked as unused
      'react/no-did-mount-set-state': 0, // prevent usage of setState in componentDidMount - OFF (deprecated)
      'react/no-did-update-set-state': 0, // prevent usage of setState in componentDidUpdate - OFF (deprecated)
      'react/no-multi-comp': 0, // prevent multiple component definition per file - OFF
      'react/no-unknown-property': 1, // prevent usage of unknown DOM property
      'react/prop-types': 0, // prevent missing props validation in a React component definition - OFF for TypeScript projects
      'react/react-in-jsx-scope': 0, // prevent missing React when using JSX - OFF for React 17+
      'react/self-closing-comp': 1, // prevent extra closing tags for components without children
      'react/hook-use-state': 1, // enforce destructuring and symmetric naming of useState hook value and setter variables - ENABLED
      'react/jsx-no-leaked-render': 1, // prevent problematic leaked values from being rendered - ENABLED
      'react/jsx-no-useless-fragment': 1, // disallow unnecessary fragments - ENABLED
      // React formatting rules (disabled - handled by Prettier)
      'react/jsx-child-element-spacing': 0, // OFF
      'react/jsx-closing-bracket-location': 0, // OFF
      'react/jsx-closing-tag-location': 0, // OFF
      'react/jsx-curly-newline': 0, // OFF
      'react/jsx-curly-spacing': 0, // OFF
      'react/jsx-equals-spacing': 0, // OFF
      'react/jsx-first-prop-new-line': 0, // OFF
      'react/jsx-indent': 0, // OFF
      'react/jsx-indent-props': 0, // OFF
      'react/jsx-max-props-per-line': 0, // OFF
      'react/jsx-newline': 0, // OFF
      'react/jsx-one-expression-per-line': 0, // OFF
      'react/jsx-props-no-multi-spaces': 0, // OFF
      'react/jsx-tag-spacing': 0, // OFF
      'react/jsx-wrap-multilines': 0, // OFF

      // Prettier specific
      'prettier/prettier': 1
    }
  }
];
