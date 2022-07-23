document.querySelector("#botaoteste").addEventListener("click", dizOi)

function dizOi () {
    console.log ('oie')
    //this.classList.toggle("active");
    var testeesconderp = this.nextElementSibling;
    if (testeesconderp.style.display === "block") {
        testeesconderp.style.display = "none";
    } else {
        testeesconderp.style.display = "block";
    }
 }