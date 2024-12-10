// let
// const
// string => amir, shirin,    '', "", ``
let firstname = 'amir';
let question = 'what is your idea about the war?';
// number => 0.00001, 100000000
let age = 31;
let year = 2024;
// boolean => false, true
let isCold = true;
let isMorning = false;
//null, undefined

// variable => hard | RAM: temprory memory => primitive: refrence N, value Y
//                                         => refrence: refrence Y, value Y => [] pointer

//object => combination of behaviors and properties
// how we write objects => {}; key,value pair
const person = {
  firstname: 'amir',
  age: 31,
  isCool: false,
  spouse: {
    firstname: 'rozhan',
    age: 30,
    isKind: true,
  },
};

// array => [], key,value pair
const students = ['asghar', 'akbar', 'kolsume akbari'];

//work on methods of all of this variables => string.,number., person.,students.,
const nameGenerator = String('amir');
const ageGenerator = Number(31);
const PersonGenerator = Object.create({ firstname: 'amir' });

const a1 = 'x';
const a2 = 'x';

// a1 == a2 => true

// f(x) = x + 2
function addTow(x) {
  return x + 2;
}

function sum(a, b) {
  return a + b;
}

function multiply(x, y) {
  return x * y;
}

function square(n) {
  return n * n;
}

function divide(d, f) {
  if (f == 0) {
    return 'divide to 0 is not allowed';
  }
  return d / f;
}

// a => a>0: positive , a<0: negative
function signDetector(a) {
  if (a > 0) {
    return 'positive';
  } else if (a < 0) {
    return 'negative';
  }
}

// 1:a, 2:b, 3:c, 4:d, 5:e, !:z

function stringDetectorWithIf(d) {
  if (d === 1) {
    return 'a';
  } else if (d === 2) {
    return 'b';
  } else if (d === 3) {
    return 'c';
  } else if (d === 4) {
    return 'd';
  } else if (d === 5) {
    return 'e';
  } else {
    return 'z';
  }
}

function stringDetectorWithSwitch(d) {
  switch (d) {
    case 1:
      return 'a';
    case 2:
      return 'b';
    case 3:
      return 'c';
    case 4:
      return 'd';
    case 5:
      return 'e';
    default:
      return 'z';
  }
}

//define scopes

let happines = 100;

function madeMeAngry() {
  happines = happines - 10;
  // happines -=10
}

function havingIceCream() {
  // happines = happines + 20
  happines += 20;
}

function takeANap() {
  happines += 5;
}

function havingStrress() {
  happines -= 15;
}

function playingGame() {
  happines += 30;
}

// void type fucntion
havingStrress();
madeMeAngry();
havingIceCream();
playingGame();
takeANap();

//decoder string
// 1:a, 2:b, 3:c, 4:d, 5:e, !:z
//1. '11234'
//2. '5123f'
//3. '6531c'

function stringDecoderWithFor(key) {
  let decodedKey = '';

  // index => 0 ;    char = key[0] : '11234': '1';    decodedKey += stringDetectorWithSwitch(char)
  // index => 1 ;    char = key[1] : '11234': '1';    decodedKey += stringDetectorWithSwitch(char)
  // index => 2 ;    char = key[2] : '11234': '2';    decodedKey += stringDetectorWithSwitch(char)
  // index => 3 ;    char = key[3] : '11234': '3';    decodedKey += stringDetectorWithSwitch(char)
  // index => 4 ;    char = key[4] : '11234': '4';    decodedKey += stringDetectorWithSwitch(char)
  for (let index = 0; index < key.length; index++) {
    const char = key[index];
    decodedKey += stringDetectorWithSwitch(Number(char));
  }

  return decodedKey;
}

function stringDecoderWithWhile(key) {
  let decodedKey = '';

  // index => 0 ;    char = key[0] : '11234': '1';    decodedKey += stringDetectorWithSwitch(char)
  // index => 1 ;    char = key[1] : '11234': '1';    decodedKey += stringDetectorWithSwitch(char)
  // index => 2 ;    char = key[2] : '11234': '2';    decodedKey += stringDetectorWithSwitch(char)
  // index => 3 ;    char = key[3] : '11234': '3';    decodedKey += stringDetectorWithSwitch(char)
  // index => 4 ;    char = key[4] : '11234': '4';    decodedKey += stringDetectorWithSwitch(char)
  let index = 0;
  while (index < key.length) {
    const char = key[index];
    decodedKey += stringDetectorWithSwitch(Number(char));
    index++;
  }

  return decodedKey;
}

console.log(stringDecoderWithWhile('12365'));
