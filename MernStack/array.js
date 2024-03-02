let array1=["1","Ishrat",57]
let index = array1[1]
console.log(index)

let array=["seema",10,"654",["pencil","breakfast",46]]
let tes = array[3][2]
console.log(tes)

let array3=["shinomiya","kakashi",["momo","23"]]
let komi = array3[2][0]
console.log(komi)

let arr=["jujutsu","light",23,"boyfriend",[1,34,"takemitchi"]]
let gojo = (arr[4][0],arr[4][1],arr[4][2])
console.log(gojo)

let array4=["shinomiya","kakashi","momo","23"]
console.log(typeof(array4))

console.log(typeof(null))

let a=null
console.log(a)

let arr09 = [[1,"sanjana",3],[4,"kunchala chal aa",6]]
let arrr = [arr[0][2],arr[1][1]]
console.log(arrr)

//const arr90=["san","jan","A"]
//arr.push(CHAUHAN)
//console.log(arr90)

//const san="jana"
//san="chauhan"

let obj={
    string : "sanjana",
    number : 123,
    boolean : "true or false",
    key : function(){
        array=[1,2,3,6,8]
        array.push(9)
        array.pop()
        return array
    }
}
console.log(obj.key())