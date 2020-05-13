let list = {
    value:1,
    next: null
}

let recursiveObject = (object, n) => {
    let obj = object;
    if(n > 0){
        obj.next = JSON.parse(JSON.stringify(obj));
        console.log(obj.next.value++);
        recursiveObject(obj.next, --n)
    }
    return obj;
}

let obj = recursiveObject(list, 10);

console.log(obj);

