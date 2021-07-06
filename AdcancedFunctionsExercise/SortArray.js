let array = [14, 7, 17, 6, 8];
let criteria = 'asc';

let sort = (array, criteria) => {
  let numbers = array.map(Number);

  let sortArrayBy = (criteria) => {
      numbers.sort(function (a, b) {
          if (a > b){
              return 1;
          }else {
              return -1;
          }
      });
      if (criteria === 'desc'){
          numbers = numbers.reverse();
      }

      return numbers;
  }

  return sortArrayBy(criteria);
};

console.log(sort(array, criteria));
