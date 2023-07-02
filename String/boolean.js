/**     convert boolean to string           */

// #01
const flag = true;
flag.toString(); // 'true'

// #02
const flag_1 = true;
"" + flag; // 'true'

// #03
const flag_2 = true;
const booleanToString = (f) => (f ? "true" : "false");
booleanToString(flag_2); // 'true'

// #04
String(true); // 'true'

// #05
const flag_3 = true;
const booleanToString_1 = (f) => `${f}`;
booleanToString_1(flag_3); // 'true'
