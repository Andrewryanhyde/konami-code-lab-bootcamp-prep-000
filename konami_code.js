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
  document.body.addEventListener("keydown", function event(e){
   	  let key = e.key;
	  console.log(e.key)
	  if (key === codes[index]) {
	    index++;
	  }
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