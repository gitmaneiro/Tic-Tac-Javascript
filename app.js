
let character= "x";

document.querySelectorAll(".grid div").forEach(element => {
	element.addEventListener("click", ()=>{
		if(element.innerHTML===""){
			element.innerHTML=character;
			character=character==="x" ? "o" : "x";
		}
	});
});


function reset(){
	document.querySelectorAll(".grid div").forEach(element => {
		element.innerHTML="";
		
	});
	
}