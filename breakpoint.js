debugger;

console.log("I am the first thing to execute");

function numberone(){
	console.log("I am function number one");
	debugger;
}

function numbertwo(){
	console.log("I am function number two");
	debugger;
}

function numberthree(){
	console.log("I am function number three");
	debugger;
}

function numberfour(beatle){
	if(beatle == "john"){
		debugger;
	}else if(beatle == "george"){
		debugger;
	}else if(beatle == "ringo"){
		debugger;
	}else if(beatle == "paul"){
		debugger;
	}
}

numberone();
numberthree();
numbertwo();
numberfour("ringo");
