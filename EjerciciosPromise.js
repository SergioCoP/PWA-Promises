//Ejercicio 1
let nAle = 0;
const numAleatorio = () =>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
                res(Math.floor(Math.random() * 100) ,0)
        })
    })
}


const nCuadrado = (n) =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(n^2)
        },3000)
    })
}



const nRaiz = (n) =>{
    return new Promise((res, reject) => {
        setTimeout(()=>{
            res(Math.sqrt(n))
        },1000)
    })
}

// numAleatorio().then(res=>{
//     console.log(res);
//     nCuadrado(res).then(res=>{
//         console.log(res);
//         nRaiz(res).then(res=>{
//             console.log(res);
//         }).catch(err=>{
//             console.log(err)
//         })
//     }).catch(err=>{
//         console.log(err)
//     })
// }).catch(err =>{
//     console.log(err)
// })

//Ejercicio 2


const urls = ['https://reqres.in/api/users?page=2',
'https://pokeapi.co/api/v2/pokemon','https://jsonplaceholder.typicode.com/users'
]


const multi = () =>{
    let resp = [];
    urls.forEach(uri => {
        fetch(uri).then(res => res.json()).then(res => resp.push(res))
    });
    console.log(resp)
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej(resp)
        },0)
    })    
}

// multi().then(res=>{
//     console.log(res)
// }).catch(err =>{
//     console.log("error",err)
// })



//Ejercicio 3 promesas paralelas

const paralelas = () =>{
    let arrayPromise = []
    let promesas = []
for(let i =0;i < 5;i++){
promesas.push(
   new Promise((res,rej)=>{
        setTimeout(()=>{
            res(i)
        },0)
    })
)
}
    Promise.all(promesas).then(res=>{
        res.forEach(el=>{
            arrayPromise.push(el)
        })
    }).catch(err=>{
        console.log("Error" , err)
    })

    return new Promise((res, rej) => {
        setTimeout(()=>{
            res(arrayPromise)
        },200)        
    })
}

// paralelas().then(res=>{
// console.log(res)
// }).catch(err=>{
//     console.log("error",err)
// })

//Ejercicio 4
const promesaRetardo = (n) =>{
    let promesas = []
    for(let i = 0; i<n;i++){
        promesas.push(
            new Promise((res,rej)=>{
                setTimeout(()=>{
                    console.log(i)
                    res(i)
                },n*1000)
            })
        )
    }


    Promise.all(promesas).then(res=>{
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                console.log("Todas las promesas se resolvieron")
                res("Todas las promesas se resolvieron")
            },n*1000)
        })
    })
} 

// promesaRetardo(4)

//Ejercicio 5

const promesaCancelacion = () =>{
    let pRes,pRej;
    let tProm;
    let cancelada = false;
   const promesa =  new Promise((res,rej)=>{
      tProm = setTimeout(()=>{
        if(!cancelada){
            res("Promesa realizada")
        }
            
        },5000) 
    })

    const cancel = () =>{
        cancelada = true
        clearTimeout(tProm)
       return Promise.reject("Promesa cancelada")
    }

    promesa.cancel = cancel;

    return promesa;
}

let promCan = promesaCancelacion()

promCan.then(res=>{
    console.log(res)
}).catch(err=>{
    console.log("Error",err)
})

setTimeout(()=>{
    promCan.cancel().catch(err=>{
        console.log(err)
    });
},1000)
