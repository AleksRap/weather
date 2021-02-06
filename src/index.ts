import {Text} from './components';
import './index.scss';

console.log(Text);

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    function a(test: string) {
      console.log(test + test);
    }
    a('eergddf');
    resolve('foo');
  }, 300);
});

promise1.then(console.log);


// class A {
//
//   static age = 12;
//
//   constructor(test) {
//     this.test = test;
//   }
//
//   #test() {
//     console.log('private')
//   }
//
//   test2() {
//     this.#test();
//   }
// }
//
// const a = new A('hello');
//
// console.log(a.test, A.age);
