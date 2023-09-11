let result = undefined;

console.log(result)

const waitUntil = (message) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
               result = message;
               reject(result); 
        },2000)
    });
}

waitUntil('Puras promesas de ella').then(result=>{
    console.log(result)
}).catch(err=>{
    console.log(err);
});

console.log(result)