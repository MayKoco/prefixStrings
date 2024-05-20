let strs = ["flower", "flow", "flight"];

const findPrefix = () => {
  if (strs.length === 0) return ""; //handle when empty str

  const shortest = strs.reduce((acc, curr) => (curr.length < acc.length ? curr : acc), strs[0]); 
  let cnt = 0
  for (let i = 0; i < shortest.length; i++) {
    cnt += 1
    if (strs.some(str => str[i] !== shortest[i])) {
      return cnt === 1 ? 'There is no common prefix among the input strings' : shortest.substring(0, i);
    }
  }

  return shortest;
};

console.log(findPrefix());
