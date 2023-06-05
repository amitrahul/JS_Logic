//                          Array modification using "with" method

const animal = ["elephant","dog","cow"]
animal[0] = "lion";
console.log((animal)); // ['lion', 'dog', 'cow']

console.log(animal.with(2,"rat")); // ['lion', 'dog', 'rat']