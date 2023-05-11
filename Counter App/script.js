///select the html element
const increamentB = document.getElementById("increamentB");
const decreamentB = document.getElementById("decreamentB");
const resetbtn = document.getElementById("resetbtn");
const displayvalue = document.getElementById("displayvalue");

// increament
increamentB.addEventListener("click",()=>{
    const value = Number(displayvalue.innerText);
    if (value >= 10) {
        alert("+10 value is not allow")
    }else {
        displayvalue.innerText = value + 1; 
    }
});

// decreament
decreamentB.addEventListener("click",()=>{
    const value = Number(displayvalue.innerText);
    if (value > 0) {
        displayvalue.innerText = value - 1;
    }else {
        alert("negative value not allow");
    }
});

// reset 
resetbtn.addEventListener("click",() => {
    displayvalue.innerText = 0 ;
} );