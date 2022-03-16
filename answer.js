const anagram = (params1, params2) => {
  const word1 = params1.split('').sort().join();
  const word2 = params2.split('').sort().join();

  console.log(word1);

  if (word1 === word2) {
    return true;
  } else {
    return false;
  }
};
console.log('====================================');
console.log(anagram('anagram', 'nagaram'));
console.log('====================================');
console.log(anagram('aaz', 'zza'));
console.log('====================================');
