const textAreaEl=document.getElementById("textarea");
let totalCountEl=document.getElementById("total-count");
let remCountEl= document.getElementById("rem-count");
textAreaEl.addEventListener("keyup", ()=>{
    updateCount();
});
function updateCount() {
    totalCountEl.innerText=textAreaEl.value.length;
    remCountEl.innerText=textAreaEl.getAttribute("maxLength")-textAreaEl.value.length;
}