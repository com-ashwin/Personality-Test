var btnres=document.querySelector("#btnText");

var txtdata=document.querySelector("#textarea");

function disp(btnres)
{
    console.log("your text is :",btnres.value);

}
btnres.addEventListener("click",disp)