let result = undefined;

const waitUntil = (message) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
               result = message;
               reject(result); 
        },2000)
    });
}

// waitUntil('Puras promesas de ella').then(result=>{
//     console.log(result)
// }).catch(err=>{
//     console.log(err);
// });

const multiplicar = (n1,n2) =>{
return new Promise((resolve,reject) =>{
    setTimeout(()=>{
            resolve(n1 * n2)
    },1500)
})
}



const dividir = (n1,n2) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>
            resolve(n1 / n2),2000
        );
    })
    }

    //Ejecute todas las promesas que se envien
    //falla una, solo envia la excepcion de la que fallo.
// Promise.all([multiplicar(1,2),dividir(1,3),'Promesa aqui',35]).then((result)=>{
//     console.log("then ", result);
// }).catch((err)=>{
//     console.log("error ",err);
// })
console.log(result)