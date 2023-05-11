const para = document.getElementById("para");
const clickbtn = document.getElementById("clickbtm");



clickbtn.addEventListener("dblclick",function (){
    para.style.color = "green";
    para.style.fontWeight = "900";
    para.style.textDecoration = "underline";
});