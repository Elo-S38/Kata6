// on parcourt un tableau de nombres avec deux boucles imbriquées
// on test les sommes des nombres et on evite de tester (i,j) et (j,i) grace à let j = i + 1 pour tester toutes les valeurs après i
// on cherche deux indices i et j ( numbers[i] + numbers[j] === target)

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

let numbers1 = [2, 7, 11, 15];
let target1 = 9;
console.log(twoSum(numbers1, target1));

let numbers2 = [3, 2, 4];
let target2 = 6;
console.log(twoSum(numbers2, target2));

let numbers3 = [3, 3];
let target3 = 6;
console.log(twoSum(numbers3, target3));
