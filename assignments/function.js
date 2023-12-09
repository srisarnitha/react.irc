function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  const str1 = 'car';
  const str2 = 'malayalam';
  const str3 = 'madam';
  console.log(isPalindrome(str1)); 
  console.log(isPalindrome(str2)); 
  console.log(isPalindrome(str3));