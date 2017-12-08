//Vanilla on ready
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
    const printButton = document.getElementById("print");
    printButton.addEventListener("click", function(){
        console.log("prnt button clicked");
        window.print();
    })
});