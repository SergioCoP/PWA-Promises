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

numAleatorio().then(res=>{
    console.log(res);
    nCuadrado(res).then(res=>{
        console.log(res);
        nRaiz(res).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err)
        })
    }).catch(err=>{
        console.log(err)
    })
}).catch(err =>{
    console.log(err)
})

//Ejercicio 2


const urls = ['https://reqres.in/api/users?page=2',
'https://pokeapi.co/api/v2/pokemon','https://jsonplaceholder.typicode.com/users'
]

let resp = [];
const multi = (urls) =>{
    urls.forEach(uri => {
        fetch(uri).then(res => resp.push(res.data))
    });

    

}


console.log()