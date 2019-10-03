import micromatch from 'micromatch';

console.log(micromatch.isMatch('abc', 'a*'));
console.log(micromatch.isMatch('abc', 'b*'));
