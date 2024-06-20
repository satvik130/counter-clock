const c=document.querySelector('#countval');
const increment =()=>{
let val=parseInt(c.innerText);
val=val+1;
c.innerText=val;
};

const decrement=()=>{
    let val=parseInt(c.innerText);
    val=val-1;
    c.innerText=val;
}; 