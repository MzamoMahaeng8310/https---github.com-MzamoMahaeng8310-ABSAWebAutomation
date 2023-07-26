const crypto = require('crypto');

 function generateRandomCharacters(length) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';


  const numBytes = Math.ceil((length * 6) / 8);

 
  const randomBytes = crypto.randomBytes(numBytes);

 
  for (let i = 0; i < length; i++) {
    const randomIndex = randomBytes[i] % charset.length;
    result += charset[randomIndex];
  }

  return result;
}

module.exports = {
    generateRandomCharacters
};

// // Usage
// const randomChars = generateRandomCharacters(5);
// console.log(randomChars); // Output will be a random 10-character string