
function makePromise(a){
    var p1 = new Promise((resolve, reject) => {
        if(a > 10){
            const r = {
                statue: true,
                message: 'I am resolve'
            }
            resolve(r);
        }   
        else{
            const r = {
                statue: false,
                message: 'I am reject'
            }
            reject(r);
        }
    });
    return p1;
}
console.log('Start of the program')
makePromise(10).then((response) => { console.log(response) },
        (e) => { console.log(e) });
console.log('After the promise')
makePromise(100).then((response) => { console.log(response) })
    .catch((e) => { console.log(e) });

console.log('End of the program')

// fetch example

var p1 = fetch('https://jsonplaceholder.typicode.com/users')
console.log(p1);