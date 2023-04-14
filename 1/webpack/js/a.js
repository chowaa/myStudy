export function add(a ,b) {
  console.log('add');
  let obj = {
    name:'asd'
  }
  let obj1 = {
    sex:"nan"
  }
  let obj2 = {...obj,...obj1}
  console.log(obj2,'obj2');
  let ms = 1000
  let myP = new Promise((resolve, reject) => {
    setTimeout(() => {
       let count = 3;
       if (count) {
         resolve(count);
       } else {
         reject(count);
       }
    }, ms)})

  return a + b;
}