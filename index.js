module.exports = {
  rules: {
    'no-inferrable-types': 0, // disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean // DONE - OFF
    'no-unsafe-assignment': 0, // disallow assigning a value with type any to variables and properties // DONE - OFF
    'no-unsafe-member-access': 0, //disallow member access on a value with type any // DONE - OFF
    'array-callback-return': 0, // enforce `return` statements in callbacks of array methods // DONE - OFF
    'no-await-in-loop': 0, // disallow `await` inside of loops // DONE - OFF
    'no-constructor-return': 0, // disallow returning value from constructor // DONE - OFF
    'no-duplicate-imports': 1, // disallow duplicate module imports // DONE
    'no-promise-executor-return': 0, // disallow returning values from Promise executor functions // DONE - OFF
    'no-self-compare': 1, // disallow comparisons where both sides are exactly the same // DONE
    'no-template-curly-in-string': 0, // disallow template literal placeholder syntax in regular strings // DONE - OFF
    'no-unmodified-loop-condition': 1, // disallow unmodified loop conditions // DONE
    'no-unreachable-loop': 1, // disallow loops with a body that allows only one iteration // DONE
    'no-use-before-define': 0, // disallow the use of variables before they are defined // DONE - OFF
    'require-atomic-updates': 1, // disallow assignments that can lead to race conditions due to usage of `await` or `yield` // DONE
    'accessor-pairs': 0, // enforce getter and setter pairs in objects and classes // DONE - OFF
    'arrow-body-style': 0, // require braces around arrow function bodies // DONE - OFF
    'block-scoped-var': 1, // enforce the use of variables within the scope they are defined // DONE
    'camelcase': 1, // enforce camelcase naming convention // DONE
    'capitalized-comments': 1, // enforce or disallow capitalization of the first letter of a comment // DONE
    'class-methods-use-this': 0, // enforce that class methods utilize `this` // DONE
    'complexity': 0, // enforce a maximum cyclomatic complexity allowed in a program // DONE - OFF
    'consistent-return': 1, // require `return` statements to either always or never specify values // DONE
    'consistent-this': 1, // enforce consistent naming when capturing the current execution context // DONE
    'curly': 1, // enforce consistent brace style for all control statements // DONE
    'default-case': 1, // require `default` cases in `switch` statements // DONE
    'default-case-last': 1, // enforce default clauses in switch statements to be last // DONE
    'default-param-last': 1, // enforce default parameters to be last // DONE
    'dot-notation': 1, // enforce dot notation whenever possible // DONE
    'eqeqeq': 1, // require the use of `===` and `!==` // DONE
    'func-name-matching': 1, // require function names to match the name of the variable or property to which they are assigned // DONE
    'func-names': 1, // require or disallow named `function` expressions // DONE
    'func-style': 0, // enforce the consistent use of either `function` declarations or expressions // DONE - OFF
    'grouped-accessor-pairs': 1, // require grouped accessor pairs in object literals and classes // DONE
    'guard-for-in': 1, // require `for-in` loops to include an `if` statement // DONE
    'id-denylist': 1, // disallow specified identifiers // DONE
    'id-length': 0, // enforce minimum and maximum identifier lengths // DONE - OFF
    'id-match': 1, // require identifiers to match a specified regular expression // DONE
    'init-declarations': 0, // require or disallow initialization in variable declarations // DONE - OFF
    'max-classes-per-file': 1, // enforce a maximum number of classes per file // DONE
    'max-depth': [1, 3], // enforce a maximum depth that blocks can be nested // DONE
    'max-lines': [1, { max: 600, skipBlankLines: true }], // enforce a maximum number of lines per file // DONE - CUSTOMISED
    'max-lines-per-function': [1, { max: 300 }], // enforce a maximum number of lines of code in a function // DONE - CUSTOMISED
    'max-nested-callbacks': 1, // enforce a maximum depth that callbacks can be nested // DONE
    'max-params': [1, { max: 7 }], // enforce a maximum number of parameters in function definitions // DONE - CUSTOMISED
    'max-statements': [1, { max: 20 }], // enforce a maximum number of statements allowed in function blocks // DONE - CUSTOMISED
    'multiline-comment-style': 1, // enforce a particular style for multiline comments // DONE
    'new-cap': 0, // require constructor names to begin with a capital letter // DONE - OFF
    'no-alert': 1, // disallow the use of `alert`, `confirm`, and `prompt` // DONE
    'no-array-constructor': 1, // disallow `Array` constructors // DONE
    'no-bitwise': 1, // disallow bitwise operators // DONE
    'no-caller': 1, // disallow the use of `arguments.caller` or `arguments.callee` // DONE
    'no-case-declarations': 1, // disallow lexical declarations in case clauses // DONE
    'no-confusing-arrow': 1, // disallow arrow functions where they could be confused with comparisons // DONE
    'no-console': 1, // disallow the use of `console` // DONE
    'no-continue': 1, // disallow `continue` statements // DONE
    'no-delete-var': 1, // disallow deleting variables // DONE
    'no-div-regex': 1, // disallow division operators explicitly at the beginning of regular expressions // DONE
    'no-else-return': 1, // disallow `else` blocks after `return` statements in `if` statements // DONE
    'no-empty': 1, // disallow empty block statements // DONE
    'no-empty-function': [1, { allow: ['constructors'] }], // disallow empty functions // DONE - CUSTOMISED
    'no-eq-null': 1, // disallow `null` comparisons without type-checking operators // DONE
    'no-eval': 1, // disallow the use of `eval()` // DONE
    'no-extend-native': 1, // disallow extending native types // DONE
    'no-extra-bind': 1, // disallow unnecessary calls to `.bind()` // DONE
    'no-extra-boolean-cast': 1, // disallow unnecessary boolean casts // DONE
    'no-extra-label': 1, // disallow unnecessary labels // DONE
    'no-extra-semi': 1, // disallow unnecessary semicolons // DONE
    'no-floating-decimal': 1, // disallow leading or trailing decimal points in numeric literals // DONE
    'no-global-assign': 1, // disallow assignments to native objects or read-only global variables // DONE
    'no-implicit-coercion': 1, // disallow shorthand type conversions // DONE
    'no-implicit-globals': 1, // disallow declarations in the global scope // DONE
    'no-implied-eval': 1, // disallow the use of `eval()`-like methods // DONE
    'no-inline-comments': 1, // disallow inline comments after code // DONE
    'no-invalid-this': 1, // disallow `this` keywords outside of classes or class-like objects // DONE
    'no-iterator': 1, // disallow the use of the `__iterator__` property // DONE
    'no-label-var': 1, // disallow labels that share a name with a variable // DONE
    'no-labels': 1, // disallow labeled statements // DONE
    'no-lone-blocks': 1, // disallow unnecessary nested blocks // DONE
    'no-lonely-if': 1, // disallow `if` statements as the only statement in `else` blocks // DONE
    'no-loop-func': 1, // disallow function declarations that contain unsafe references inside loop statements // DONE
    'no-magic-numbers': 0, // disallow magic numbers // Comment, this rule seems to be hard to satisfy. // DONE
    'no-mixed-operators': 1, // disallow mixed binary operators // DONE
    'no-multi-assign': 1, // disallow use of chained assignment expressions // DONE
    'no-multi-str': 1, // disallow multiline strings // DONE
    'no-negated-condition': 1, // disallow negated conditions // DONE
    'no-nested-ternary': 1, // disallow nested ternary expressions // DONE
    'no-new': 1, // disallow `new` operators outside of assignments or comparisons // DONE
    'no-new-func': 1, // disallow `new` operators with the `Function` object // DONE
    'no-new-object': 1, // disallow `Object` constructors // DONE
    'no-new-wrappers': 1, // disallow `new` operators with the `String`, `Number`, and `Boolean` objects // DONE
    'no-nonoctal-decimal-escape': 1, // disallow `\8` and `\9` escape sequences in string literals // DONE
    'no-octal': 1, // disallow octal literals // DONE
    'no-octal-escape': 1, // disallow octal escape sequences in string literals // DONE
    'no-param-reassign': 1, // disallow reassigning `function` parameters // DONE
    'no-plusplus': 0, // disallow the unary operators `++` and `--` // DONE - OFF
    'no-proto': 1, // disallow the use of the `__proto__` property // DONE
    'no-redeclare': 1, // disallow variable redeclaration // DONE
    'no-regex-spaces': 1, // disallow multiple spaces in regular expressions // DONE
    'no-restricted-exports': 1, // disallow specified names in exports // DONE
    'no-restricted-globals': 1, // disallow specified global variables // DONE
    'no-restricted-imports': 1, // disallow specified modules when loaded by `import` // DONE
    'no-restricted-properties': 1, // disallow certain properties on certain objects // DONE
    'no-restricted-syntax': 1, // disallow specified syntax // DONE
    'no-return-assign': 1, // disallow assignment operators in `return` statements // DONE
    'no-return-await': 1, // disallow unnecessary `return await` // DONE
    'no-script-url': 1, // disallow `javascript:` urls // DONE
    'no-sequences': 1, // disallow comma operators // DONE
    'no-shadow': 0, // disallow variable declarations from shadowing variables declared in the outer scope // DONE
    'no-shadow-restricted-names': 1, // disallow identifiers from shadowing restricted names // DONE
    'no-ternary': 0, // disallow ternary operators // DONE - OFF
    'no-throw-literal': 1, // disallow throwing literals as exceptions // DONE
    'no-undef-init': 1, // disallow initializing variables to `undefined` // DONE
    'no-undefined': 0, // disallow the use of `undefined` as an identifier // DONE
    'no-underscore-dangle': 0, // disallow dangling underscores in identifiers // DONE
    'no-unneeded-ternary': 0, // disallow ternary operators when simpler alternatives exist // DONE - OFF
    'no-unused-expressions': 0, // disallow unused expressions // DONE - OFF
    'no-unused-labels': 1, // disallow unused labels // DONE
    'no-useless-call': 1, // disallow unnecessary calls to `.call()` and `.apply()` // DONE
    'no-useless-catch': 1, // disallow unnecessary `catch` clauses // DONE
    'no-useless-computed-key': 1, // disallow unnecessary computed property keys in objects and classes // DONE
    'no-useless-concat': 1, // disallow unnecessary concatenation of literals or template literals // DONE
    'no-useless-constructor': 0, // disallow unnecessary constructors // DONE
    'no-useless-escape': 1, // disallow unnecessary escape characters // DONE
    'no-useless-rename': 1, // disallow renaming import, export, and destructured assignments to the same name // DONE
    'no-useless-return': 1, // disallow redundant return statements // DONE
    'no-var': 1, // require `let` or `const` instead of `var` // DONE
    'no-void': [1, { allowAsStatement: true }], // disallow `void` operators // DONE - CUSTOMISED
    'no-warning-comments': 1, // disallow specified warning terms in comments // DONE
    'no-with': 1, // disallow `with` statements // DONE
    'object-shorthand': 0, // require or disallow method and property shorthand syntax for object literals // DONE
    'one-var': 0, // enforce variables to be declared either together or separately in functions // DONE
    'one-var-declaration-per-line': 1, // require or disallow newlines around variable declarations // DONE
    'operator-assignment': 1, // require or disallow assignment operator shorthand where possible // DONE
    'prefer-arrow-callback': 1, // require using arrow functions for callbacks // DONE
    'prefer-const': 1, // require `const` declarations for variables that are never reassigned after declared // DONE
    'prefer-destructuring': 0, // require destructuring from arrays and/or objects // DONE - OFF
    'prefer-exponentiation-operator': 1, // disallow the use of `Math.pow` in favor of the `**` operator // DONE
    'prefer-named-capture-group': 1, // enforce using named capture group in regular expression // DONE
    'prefer-numeric-literals': 1, // disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals // DONE
    'prefer-object-spread': 1, // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead. // DONE
    'prefer-promise-reject-errors': 1, // require using Error objects as Promise rejection reasons // DONE
    'prefer-regex-literals': 1, // disallow use of the `RegExp` constructor in favor of regular expression literals // DONE
    'prefer-rest-params': 1, // require rest parameters instead of `arguments` // DONE
    'prefer-spread': 1, // require spread operators instead of `.apply()` // DONE
    'prefer-template': 1, // require template literals instead of string concatenation // DONE
    'quote-props': 0, // require quotes around object literal property names // DONE
    'radix': 1, // enforce the consistent use of the radix argument when using `parseInt()` // DONE
    'require-await': 1, // disallow async functions which have no `await` expression // DONE
    'require-unicode-regexp': 1, // enforce the use of `u` flag on RegExp // DONE
    'require-yield': 1, // require generator functions to contain `yield` // DONE
    'sort-imports': 1, // enforce sorted import declarations within modules // DONE
    'sort-keys': 0, // require object keys to be sorted // DONE
    'sort-vars': 1, // require variables within the same declaration block to be sorted // DONE
    'spaced-comment': 1, // enforce consistent spacing after the `//` or `/*` in a comment // DONE
    'strict': 0, // require or disallow strict mode directives // DONE - OFF
    'symbol-description': 1, // require symbol descriptions // DONE
    'vars-on-top': 1, // require `var` declarations be placed at the top of their containing scope // DONE
    'yoda': 1, // require or disallow "Yoda" conditions // DONE
    'array-bracket-newline': 1, // enforce linebreaks after opening and before closing array brackets // DONE
    'array-bracket-spacing': 1, // enforce consistent spacing inside array brackets // DONE
    'array-element-newline': 0, // enforce line breaks after each array element // DONE - OFF
    'arrow-parens': 1, // require parentheses around arrow function arguments // DONE
    'arrow-spacing': 1, // enforce consistent spacing before and after the arrow in arrow functions // DONE
    'block-spacing': 1, // disallow or enforce spaces inside of blocks after opening block and before closing block // DONE
    'brace-style': 1, // enforce consistent brace style for blocks // DONE
    'comma-dangle': 1, // require or disallow trailing commas // DONE
    'comma-spacing': 1, // enforce consistent spacing before and after commas // DONE
    'comma-style': 1, // enforce consistent comma style // DONE
    'computed-property-spacing': 1, // enforce consistent spacing inside computed property brackets // DONE
    'dot-location': 0, // enforce consistent newlines before and after dots // DONE
    'eol-last': 1, // require or disallow newline at the end of files // DONE
    'func-call-spacing': 1, // require or disallow spacing between function identifiers and their invocations // DONE
    'function-call-argument-newline': [1, 'consistent'], // enforce line breaks between arguments of a function call // DONE - CUSTOMISED
    'function-paren-newline': [1, 'multiline-arguments'], // enforce consistent line breaks inside function parentheses // DONE
    'generator-star-spacing': 1, // enforce consistent spacing around `*` operators in generator functions // DONE
    'implicit-arrow-linebreak': 1, // enforce the location of arrow function bodies // DONE
    'indent': [1, 2], // enforce consistent indentation. second value is number of spaces // DONE
    'jsx-quotes': 1, // enforce the consistent use of either double or single quotes in JSX attributes // DONE
    'key-spacing': 1, // enforce consistent spacing between keys and values in object literal properties // DONE
    'keyword-spacing': 1, // enforce consistent spacing before and after keywords // DONE
    'line-comment-position': 1, // enforce position of line comments // DONE
    'linebreak-style': 0, // enforce consistent linebreak style // OFF
    'lines-around-comment': 1, // require empty lines around comments // DONE
    'lines-between-class-members': 0, // require or disallow an empty line between class members // DONE
    'max-len': [
      1,
      { code: 140, ignoreUrls: true, ignorePattern: '^import .*' },
    ], // enforce a maximum line length // DONE - CUSTOMISED
    'max-statements-per-line': 1, // enforce a maximum number of statements allowed per line // DONE
    'multiline-ternary': 0, // enforce newlines between operands of ternary expressions // DONE - OFF
    'new-parens': 1, // enforce or disallow parentheses when invoking a constructor with no arguments // DONE
    'newline-per-chained-call': 1, // require a newline after each call in a method chain // DONE
    'no-extra-parens': 0, // disallow unnecessary parentheses // DONE - OFF
    'no-mixed-spaces-and-tabs': 1, // disallow mixed spaces and tabs for indentation // DONE
    'no-multi-spaces': 1, // disallow multiple spaces // DONE
    'no-multiple-empty-lines': 1, // disallow multiple empty lines // DONE
    'no-tabs': 1, // disallow all tabs // DONE
    'no-trailing-spaces': 1, // disallow trailing whitespace at the end of lines // DONE
    'no-whitespace-before-property': 1, // disallow whitespace before properties // DONE
    'nonblock-statement-body-position': 1, // enforce the location of single-line statements // DONE
    'object-curly-newline': 1, // enforce consistent line breaks after opening and before closing braces // DONE
    'object-curly-spacing': [1, 'always'], // enforce consistent spacing inside braces // DONE
    'object-property-newline': 0, // enforce placing object properties on separate lines // DONE - OFF
    'operator-linebreak': 1, // enforce consistent linebreak style for operators // DONE
    'padded-blocks': 0, // require or disallow padding within blocks // DONE
    'padding-line-between-statements': 1, // require or disallow padding lines between statements // DONE
    'quotes': [1, 'single'], // enforce the consistent use of either backticks, double, or single quotes // DONE
    'rest-spread-spacing': 1, // enforce spacing between rest and spread operators and their expressions // DONE
    'semi': [1, 'always'], // require or disallow semicolons instead of ASI // DONE
    'semi-spacing': 1, // enforce consistent spacing before and after semicolons // DONE
    'semi-style': 1, // enforce location of semicolons // DONE
    'space-before-blocks': 1, // enforce consistent spacing before blocks // DONE
    'space-before-function-paren': 0, // enforce consistent spacing before `function` definition opening parenthesis // DONE
    'space-in-parens': 1, // enforce consistent spacing inside parentheses // DONE
    'space-infix-ops': 1, // require spacing around infix operators // DONE
    'space-unary-ops': 1, // enforce consistent spacing before or after unary operators // DONE
    'switch-colon-spacing': 1, // enforce spacing around colons of switch statements // DONE
    'template-curly-spacing': 1, // require or disallow spacing around embedded expressions of template strings // DONE
    'template-tag-spacing': 1, // require or disallow spacing between template tags and their literals // DONE
    'unicode-bom': 1, // require or disallow Unicode byte order mark (BOM) // DONE
    'wrap-iife': 1, // require parentheses around immediate `function` invocations // DONE
    'wrap-regex': 1, // require parenthesis around regex literals // DONE
    'yield-star-spacing': 1, // require or disallow spacing around the `*` in `yield*` expressions // DONE
    'no-cond-assign': 1, // disallow assignment in conditional expressions // DONE
    'no-constant-condition': 1, // disallow use of constant expressions in conditions // DONE
    'no-control-regex': 1, // disallow control characters in regular expressions // DONE
    'no-debugger': 0, // disallow use of debugger // DONE - OFF
    'no-dupe-args': 1, // disallow duplicate arguments in functions // DONE
    'no-dupe-keys': 1, // disallow duplicate keys when creating object literals // DONE
    'no-duplicate-case': 1, // disallow a duplicate case label // DONE
    'no-empty-class': 1, // disallow the use of empty character classes in regular expressions // DONE
    'no-ex-assign': 1, // disallow assigning to the exception in a catch block // DONE
    'no-func-assign': 1, // disallow overwriting functions written as function declarations // DONE
    'no-inner-declarations': 1, // disallow function or variable declarations in nested blocks // DONE
    'no-invalid-regexp': 1, // disallow invalid regular expression strings in the RegExp constructor // DONE
    'no-irregular-whitespace': 1, // disallow irregular whitespace outside of strings and comments // DONE
    'no-negated-in-lhs': 1, // disallow negation of the left operand of an in expression // DONE
    'no-obj-calls': 1, // disallow the use of object properties of the global object (Math and JSON) as functions // DONE
    'no-reserved-keys': 1, // disallow reserved words being used as object literal keys // DONE
    'no-sparse-arrays': 1, // disallow sparse arrays // DONE
    'no-unreachable': 1, // disallow unreachable statements after a return, throw, continue, or break statement // DONE
    'use-isnan': 1, // disallow comparisons with the value NaN // DONE
    'valid-jsdoc': 1, // ensure JSDoc comments are valid // DONE
    'valid-typeof': 1, // ensure that the results of typeof are compared against a valid string // DONE
    'no-catch-shadow': 1, // disallow the catch clause parameter name being the same as a variable in the outer scope // DONE
    'no-unused-vars': 1, // disallow declaration of variables that are not used in the code // DONE
    'newline-after-var': 0, // allow/disallow an empty newline after var statement // DONE - OFF
    'no-spaced-func': 1, // disallow space between function identifier and application // DONE
    'no-wrap-func': 1, // disallow wrapping of non-IIFE statements in parens // DONE
    'space-after-keywords': [1, 'always'], // require a space after certain keywords // DONE
    'space-in-brackets': [1, 'never'], // require or disallow spaces inside brackets // DONE
    'space-return-throw-case': [1, 'always'], // require a space after return, throw, and case // DONE
    'spaced-line-comment': [1, 'always'], // require or disallow a space immediately following the // in a line comment // DONE

    // React specific
    'react/display-name': 0, // prevent missing displayName in a React component definition // DONE - OFF
    'react/jsx-quotes': [1, 'double', 'avoid-escape'], // Enforce quote style for JSX attributes // DONE
    'react/jsx-no-undef': 1, // disallow undeclared variables in JSX // DONE
    'react/jsx-sort-props': 0, // enforce props alphabetical sorting // DONE - OFF
    'react/jsx-uses-react': 1, // prevent React to be incorrectly marked as unused // DONE
    'react/jsx-uses-vars': 1, // prevent variables used in JSX to be incorrectly marked as unused // DONE
    'react/no-did-mount-set-state': 1, // prevent usage of setState in componentDidMount // DONE
    'react/no-did-update-set-state': 1, // prevent usage of setState in componentDidUpdate // DONE
    'react/no-multi-comp': 0, // prevent multiple component definition per file // DONE - OFF
    'react/no-unknown-property': 1, // prevent usage of unknown DOM property // DONE
    'react/prop-types': 1, // prevent missing props validation in a React component definition // DONE
    'react/react-in-jsx-scope': 1, // prevent missing React when using JSX // DONE
    'react/self-closing-comp': 1, // prevent extra closing tags for components without children // DONE
    'react/wrap-multilines': 1 // prevent missing parentheses around multilines JSX // DONE
  }
};
