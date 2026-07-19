// Boolean(false)      // false
// Boolean(0)          // false
// Boolean(-0)         // false
// Boolean(0n)         // false
// Boolean("")         // false
// Boolean(null)       // false
// Boolean(undefined)  // false
// Boolean(NaN)        // false

// ---------- 1. String Conversion ----------

let ans = String(123);          // "123"
String(true);         // "true"
String(false);        // "false"
String(null);         // "null"
String(undefined);    // "undefined"

123 + "";             // "123"

// ------------------------------------------
// ---------- 2. Number Conversion ----------

Number("123");        // 123
Number("12.5");       // 12.5
Number("abc");        // NaN  (NOt a Number)
Number("");           // 0
Number(" ");          // 0
Number(true);         // 1
Number(false);        // 0
Number(null);         // 0
Number(undefined);    // NaN

+"100";               // 100
+"12.5";              // 12.5

parseInt("123");      // 123
parseInt("123px");    // 123
parseInt("12.99");    // 12

parseFloat("12.99");  // 12.99
parseFloat("12.5px"); // 12.5

// ------------------------------------------
// ---------- 3. Boolean Conversion ----------

Boolean(1);           // true
Boolean(0);           // false
Boolean(-1);          // true
Boolean("");          // false
Boolean(" ");         // true
Boolean("Hello");     // true
Boolean(null);        // false
Boolean(undefined);   // false
Boolean(NaN);         // false
Boolean([]);          // true
Boolean({});          // true

// ------------------------------------------
// ---------- 4. Implicit Conversion ----------

"5" + 2;              // "52"
"5" - 2;              // 3
"5" * 2;              // 10
"10" / 2;             // 5

true + 1;             // 2
false + 1;            // 1
null + 1;             // 1
undefined + 1;        // NaN

// ------------------------------------------
// ---------- 5. Equality ----------

5 == "5";             // true
5 === "5";            // false

null == undefined;    // true
null === undefined;   // false

// ------------------------------------------
// ---------- 6. typeof ----------

typeof 10;            // "number"
typeof "Hello";       // "string"
typeof true;          // "boolean"
typeof undefined;     // "undefined"
typeof null;          // "object" ⚠️
typeof Symbol();      // "symbol"
typeof 123n;          // "bigint"
typeof {};            // "object"
typeof [];            // "object"
typeof function(){};  // "function"


console.log(ans);
