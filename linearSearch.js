function linearSearch(arr, x){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==x){
            return i
        }
    }
    return -1

}

let arr = [10,20,30,40,50,60,70];

let number = 50;

let result =linearSearch(arr,number)

if(result !== -1){
    console.log(`index is  ${result}` )
}else{
    console.log("index is not found")
}




const linearSearch2 =(arr ,  x2)=>{
    for(let i =0; i<arr.length;i++){
        if(arr[i] == x2){
            return i
        }
    }
    return -1
}

let arr2 =[10,20,30,40,50,60,70]

let num = 10;

let result1 = linearSearch2(arr2,num)

const display=(index)=>{
    index !== -1 ? console.log(`index is available ${result1}`):console.log("index is  not available")
}
display(result1)




//problem 3
function linearSearch3(ar, n , x){
    for(let i = 0 ;i<n;i++){
        if(ar[i]==x){
            return i
        }
    }
    return -1
}

let ar = [10,20,30,40,50,60,70,80,90]
let n = ar.length

function serachIn(ar,n,x){
    let result3 = linearSearch3(ar,n,x)
    if (result3 == -1){
        console.log("not founde")
    }else{
        console.log(`it is index ${result3}`)
    }

}

let x1= 90;

serachIn(ar,n,x1)

let x2 = 3

serachIn(ar,n,x2)