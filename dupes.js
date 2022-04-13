const numbers = [41, 24, 28, 1, 40, 41, 32, 33, 50, 5, 34, 5, 21, 21, 43, 43, 21, 4, 49, 24];

const mostDuplicates = (arr) => {
    let mostValue;
    let mostCount = 0;

    for(let i = 0; i < arr.length; i++){
        let occur = 0;

        for(let j = 0; j < arr.length; j++){
            if(arr[i] === arr[j]){
                occur++;
            }
        }

        if(occur > mostCount){
            mostCount = occur;
            mostValue = arr[i];
        }
    }

    return `${mostValue} appeared ${mostCount} times`;
};

const optimizedDuplicates = (arr) => {
    const map = {};
  
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
  
      if (map[value] === undefined) {
        map[value] = 1;
      }
      else {
        map[value]++;
      }
    }
  
    let mostValue;
    let mostCount = 0;
  
    for (const value in map) {
      if (map[value] > mostCount) {
        mostCount = map[value];
        mostValue = value;
      }
    }
  
    return `${mostValue} appeared ${mostCount} times.`;
  };

module.exports = {mostDuplicates, optimizedDuplicates};