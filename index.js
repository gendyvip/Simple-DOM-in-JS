var chgHtml=document.getElementById("chgHtml"),
    chgText=document.getElementById("chgText"),
    chgContent=document.getElementById("chgContent"),
    Multiply=document.getElementById("Multiply"),
    chgStyle=document.getElementById("chgStyle"),
    test=document.getElementById("test"),
    sp=document.getElementById("sp"),
    inp1,inp2,
    body=document.getElementById("body"),
    backg1=document.getElementsByClassName("backg")[0],
    backg2=document.getElementsByClassName("backg")[1];

chgHtml.addEventListener('click',
()=>{sp.innerHTML="<div>Span 1 After Changing HTML<div/>"}
)


chgText.addEventListener('click',
()=>{sp.innerText="Span 1 After Changing Text"}
)

chgContent.addEventListener('click',
()=>{sp.textContent="Span 1 After Changing Content"}
)

Multiply.addEventListener('click',
()=>{
    inp1=document.getElementById("inp1").value,
    inp2=document.getElementById("inp2").value,
    sp.innerHTML=parseInt(inp1)*parseInt(inp2); 
}
)

chgStyle.addEventListener('click',
()=>{
    body.classList.toggle("lightb");
    }
)
