let nums = [8, 6, 7, 7];
let i;
let j;
for (i = 0; i < nums.length; i++) {
  for (j = i + 1; j < nums.length; j++)
    if (nums[i] == nums[j]) {
      console.log(true);
    }
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
let result = [];

for (let i = 0; i < strs.length; i++) {
  let found = false;

  for (let j = 0; j < result.length; j++) {
    let word1 = strs[i].split("").sort().join("");
    let word2 = result[j][0].split("").sort().join("");

    if (word1 === word2) {
      result[j].push(strs[i]);
      found = true;
      break;
    }
  }

  if (!found) {
    result.push([strs[i]]);
  }
}

console.log(result);

function findMin(nums) {
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }

  return min;
}

console.log(findMin([3, 4, 5, 6, 1, 2]));


