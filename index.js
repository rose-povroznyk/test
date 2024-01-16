const array = [5, 3, 9, 21, 5, 1, 2, 4];
// array.sort(compareFunction);

const lettersArray = ['bbb', 'abb', 'aaa', 'aba'];
lettersArray.sort();

function compareFunction(a, b) {
  //для зростання
  if (b > a) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

const dogArr = [
  { nickname: 'Tuzik', color: 'black', weight: 3, age: 2 },
  { nickname: 'Dolly', color: 'white', weight: 5, age: 3 },
  { nickname: 'Fagot', color: 'black', weight: 15, age: 5 },
  { nickname: 'Stus', color: 'black', weight: 9, age: 1 },
];

dogArr.sort((dog1, dog2) => dog2.weight - dog1.weight);

dogArr.sort((dog1, dog2) => dog2.age - dog1.age);

const filteredDogArr = dogArr.filter((dog) => dog.color === 'white');

const weightOfAllDogs = dogArr.reduce((accum, dog) => accum + dog.weight, 0);

// function MyArray() {
//   this.length = 0;
//   this.push = function (value) {
//     this[this.length] = value;
//     this.length++;
//     return this.length;
//   };
// }

///////////////////////// Creating own Array
function MyArray() {
  this.length = 0;

  this.push = function (value) {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this.length;
  };

  this.pop = function () {
    if (this.length > 0) {
      // Зберегти останній елемент
      const lastItem = this[this.length - 1];
      // Видалити останній елемент з масиву
      delete this[this.length - 1];
      // Зменшити довжину масиву на 1
      this.length--;
      // Повернути останній елемент
      return lastItem;
    } else {
      return undefined;
    }
  };

  this.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };

  this.unshift = function (value) {
    if (this.length === 0) {
      this[0] = value;
    } else {
      // Перемістити решту елементів на один індекс вперед
      for (let i = this.length - 1; i >= 0; i--) {
        this[i + 1] = this[i];
      }
      this[0] = value; // Додати перший елемент
    }
    this.length++;
    return this.length; // Повернути нову довжину
  };

  this.shift = function () {
    // Зберегти перший елемент
    const firstItem = this[0];
    if (this.length > 0) {
      // Видалити перший елемент
      delete this[0];
      // Перемістити решту елементів на один індекс назад
      for (let i = 1; i < this.length; i++) {
        this[i - 1] = this[i];
      }
      // Зменшити довжину масиву на 1
      this.length--;
      // Повернути перший елемент
      return firstItem;
    } else {
      return undefined;
    }
  };
}

const arr = new MyArray();
arr.push(1);
arr.push(2);
arr.push(3, 2, 5, 10, 12, 33);
arr.forEach(console.log);
arr.unshift(150);
arr.shift();
