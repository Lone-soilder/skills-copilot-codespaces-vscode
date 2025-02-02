function callback(){
    console.log("I love you...!!!");
    let h1 = document.createElement('h1');
    h1.textContent = "I love you ...!!!";
    document.body.appendChild(h1);
}

// setTimeout(()=>{
//     callback();
// },3000);

//using promise 

// now creating a promise constructor which return a promise to myPromise
// const myPromise = new Promise((resolve , reject) => {
//     const status = false;

//     if(!status){
//         resolve(callback);
//     }
//     else{
//         reject("error is there bro.");
//     }
// })

//now defining the promise's resolved and reject condition
// myPromise.then(callback()).catch(err => console.log(err));

// let me write the same async and await method

function callingBack(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(callback);
        },3000);
    });
}
async function calling(){
    const callingbackresolve = await callingBack();
    callingbackresolve();

}

calling();



