const exponent = 2.99e8
console.log(`Exponent of 2.998 * 10 to power of 8: ${exponent / 100}`)

const additionAndMultiplication = 100 + 4 * 11
console.log(`Addition & Multiplication of 100 + 4 * 11: ${additionAndMultiplication}`)

const additionAndMultiplicationWithBracketsMakesAdditionHappenFirst = (100 +4) *11
console.log(`Addition normally happens after multiplication except when you put it in brakets first of (100 +4) *11: ${additionAndMultiplicationWithBracketsMakesAdditionHappenFirst}`)

const subtractAndDivideWithoutBrakets = 100 - 4 / 2
console.log(`Subtract and divide without brakets means that division happens first on 100 - 4 / 2: ${subtractAndDivideWithoutBrakets}`)

const subtractAndDivideWithBrackets = (100 - 4) / 2
console.log(`Subtract and divide with brackets makes the division happen second of(100 - 4) / 2 : ${subtractAndDivideWithBrackets}`)

const moduloTheRemainderAfterDivision = 900 % 3.5
console.log(`Modulo gives the remainder after division of 900 % 3.5: ${moduloTheRemainderAfterDivision}`);

const infinity = Infinity * Infinity
console.log(`Infinity is a tricky number of Infinity * Infinity: ${infinity}`)

const naan = 10 * NaN
console.log(`Nan is not a number of 10 * NaN: ${naan}`)

const string1 = "This is string1"
console.log(`String1: ${string1}`)

const string2 = 'This is string2'
console.log(`String2: ${string2}`)

const stringOnTwoLines = "This is line 1\nAnd this is line 2"
console.log(stringOnTwoLines);

const weirdStringStuff = "A new line character is written like \"\\n\"."
console.log(weirdStringStuff)

const concatenate = "con " + " cat" + " e" + " nate"
console.log(concatenate);

const unaryOperator1 = 4.5
console.log(`Using typeof on a number: ${typeof unaryOperator1}`);

const unaryOperator2 = "Birds"
console.log(`Using typeof on a string: ${typeof unaryOperator2}`);

const unaryOperator3 = 100 * NaN
console.log(`Using typeof on a nan sum: ${unaryOperator3}`);

const usingTwoOperators = (- (10 - 2))
console.log(`Using two operators: ${usingTwoOperators}`);

const boolean1 = 3 > 2
console.log(`boolean of 3 > 2: ${boolean1}`);

const boolean2 = 2 > 3
console.log(`boolean of 2 > 3: ${boolean2}`);

const boolean3 = "Aardvark" < "Zoroaster"
console.log(`boolean of "Aardvark" < "Zoroaster": ${boolean3}`);

const boolean4 = "Zoroaster" < "Aardvark"
console.log(`boolean of "Zoroaster" < "Aardvark": ${boolean4}`)

console.log(`"z" > "Z":`, "z" > "Z");
console.log(`"z" > "!":`, "z" > "!");
console.log(`"a" < "b":`, "a" < "b");
console.log(`"z" > "p":`, "z" > "p");
console.log(`"itchy" !== "scratchy":`, "itchy" !== "scratchy");
console.log(`NaN === NaN:`, NaN === NaN);
console.log(`true && false:`, true && false);
console.log(`false && true:`, false && true);
console.log(`true && true:`, true && true);
console.log(`false || true:`, false || true);
console.log(`false || false:`, false || false);

const multiMaths = 1 + 1 == 2 && 10 * 10 > 50
console.log(`1 + 1 == 2 && 10 * 10 > 50: ${multiMaths}`);

const weirdBool1 = (true ? 1 : 2)
console.log(`true ? 1 : 2= ${weirdBool1}`);

const weirdBool2 = (false ? 1 : 2)
console.log(`false ? 1 : 2= ${weirdBool2}`);

const nullEqualsUndefined1 = null == undefined
console.log(`null == undefined:`, nullEqualsUndefined1);

const nullEqualsUndefined2 = null === undefined
console.log(`null === undefined:`, nullEqualsUndefined2);

const nullDoesntEqualZero = null === 0
console.log(`null === 0: ${nullDoesntEqualZero}`);

const nullOr = null || "user"
console.log(`null || "user" reports true value: ${nullOr}`);

const simonOrUser = "Simon" || "user"
console.log(`"Simon" || "user" reports true value: ${simonOrUser}`);

const nullAndUser = null && "user"
console.log(`null && "user" reports false value: ${nullAndUser}`);

const simonAndUser = "Simon" && "user"
console.log(`"Simon" && "user" reports false value: ${simonAndUser}`);
