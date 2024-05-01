function genTicket(n){
    let arr = new Array(n);
    for(let i=0; i<n; i++){
        arr[i]=Math.floor(Math.random() * 10 )
    }
    return arr
}

function sum(arr){
    return arr.reduce((sum,curr)=> sum+curr , 0)  //ye fnc hme sare ke sare arr ka sum return krke dede ga.
}

export {genTicket,sum}