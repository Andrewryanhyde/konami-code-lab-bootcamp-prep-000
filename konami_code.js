const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


chai.config.includeStack = true;


function init() {
  let index=0;
function init() {
  document.body.addEventListener("keydown", function(event){
    const key=parseInt(event.which);
    console.log(event.which);
    if(key===code[index]){
      index++;
      if(index===code.length){
        window.alert("Cheat activated, you cheater")
      }
    }
    else{
      index=0;
    }
  })
}
init();
}