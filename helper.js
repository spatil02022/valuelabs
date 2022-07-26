export const uniqueArray =async (arr)=>{
    var unique = arr.filter((v, i, a) => a.indexOf(v) === i);
    return unique
}
