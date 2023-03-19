function fetchData(url,callback){
    fetch(url)
    .then(callback)
    .catch((err)=> console.log(`error is ${err}`))

}
const apiMiddleware=({dispatch})=>next=>action=>{
    if (action.type=== ""){

    }
    next(action)
}