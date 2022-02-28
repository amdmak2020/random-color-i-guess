var x = document.getElementById("bubu").addEventListener('click', yup)

function yup(){
    document.getElementById("onion").style.backgroundColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
    document.getElementById("bubu").innerHTML = document.getElementById("onion").style.backgroundColor;

}
