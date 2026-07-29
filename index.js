let nums = [8, 6, 7, 7];
let i;
let j;
for (i = 0; i < nums.length; i++) {
  for (j = i + 1; j < nums.length; j++)
    if (nums[i] == nums[j]) {
      console.log(true);
    }
}
