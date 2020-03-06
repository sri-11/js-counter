let val=0;
let op=document.getElementById('t1');
op.value=0;
let add=document.getElementById('b1');
let sub=document.getElementById('b2');

function inc(){

    if(op.value<10){
        val=op.value++;
        op.innerText=val;
    }
    else{
    add.disabled = true;
    }
}

function dec(){
    if(op.value<=10 && op.value>0){
        val=op.value--;
        op.innerText=val;
}
// else{
//     sub.disabled = true;
//     }
}
add.addEventListener("click",inc);
sub.addEventListener("click",dec);
