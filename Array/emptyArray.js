/**         How to empty an array       */

var arrayList = ["a", "b", "c", "d", "e", "f"];

/** 1st way */
arrayList = [];

/** 2nd way */
arrayList.length = 0;

/** 3rd way  */
arrayList.splice(0, arrayList.length);

/** 4th way */
while (arrayList.length > 0) {
  arrayList.pop();
}
