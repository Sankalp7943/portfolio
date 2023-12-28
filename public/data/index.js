var Typer={
	text: null,
	accessCountimer:null,
	index:0, 
	speed:2,
	file:"", 
	accessCount:0,
	deniedCount:0, 
	init: function(){
		accessCountimer=setInterval(function(){Typer.updLstChr();},500); 
		$.get(Typer.file,function(data){
			Typer.text=data;
			Typer.text = Typer.text.slice(0, Typer.text.length-1);
		});
	},
 
	content:function(){
		return $("#console").html();
	},
 
	write:function(str){
		$("#console").append(str);
		return false;
	},
 
	addText:function(key){
		
		if(key.keyCode==18){
			Typer.accessCount++; 
			
			if(Typer.accessCount>=3){
				Typer.makeAccess(); 
			}
		}
		
    		else if(key.keyCode==20){
			Typer.deniedCount++; 
			
			if(Typer.deniedCount>=3){
				Typer.makeDenied(); 
			}
		}
		
    		else if(key.keyCode==27){ 
			Typer.hidepop(); 
		}
		
    		else if(Typer.text){ 
			var cont=Typer.content(); 
			if(cont.substring(cont.length-1,cont.length)=="|") 
				$("#console").html($("#console").html().substring(0,cont.length-1)); 
			if(key.keyCode!=8){ 
				Typer.index+=Typer.speed;	
			}
      		else {
			if(Typer.index>0) 
				Typer.index-=Typer.speed;
			}
			var text=Typer.text.substring(0,Typer.index)
			var rtn= new RegExp("\n", "g"); 
	
			$("#console").html(text.replace(rtn,"<br/>"));
			window.scrollBy(0,50); 
		}
		
		if (key.preventDefault && key.keyCode != 122) { 
			key.preventDefault()
		};  
		
		if(key.keyCode != 122){ // otherway prevent keys default behavior
			key.returnValue = false;
		}
	},
 
	updLstChr:function(){ 
		var cont=this.content(); 
		
		if(cont.substring(cont.length-1,cont.length)=="|") 
			$("#console").html($("#console").html().substring(0,cont.length-1)); 
		
		else
			this.write("|"); // else write it
	}
}
 
function replaceUrls(text) {
	var http = text.indexOf("http://");
	var space = text.indexOf(".me ", http);
	
	if (space != -1) { 
		var url = text.slice(http, space-1);
		return text.replace(url, "<a href=\""  + url + "\">" + url + "</a>");
	} 
	
	else {
		return text
	}
}

Typer.speed=5;
Typer.file="Sankalp.txt";
Typer.init();
 
var timer = setInterval("t();", 15);
function t() {
	Typer.addText({"keyCode": 123748});
	
	if (Typer.index > Typer.text.length) {
		clearInterval(timer);
	}
}


// matrix rain

var c = document.getElementById("cx");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var chinese = "01";
//converting the string into an array of single characters
chinese = chinese.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1; 

//drawing the characters
function draw()
{
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, c.width, c.height);
	
	ctx.fillStyle = "#0F0"; //green text
	ctx.font = font_size + "px arial";
	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{
		//a random chinese character to print
		var text = chinese[Math.floor(Math.random()*chinese.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		
		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
		
		//incrementing Y coordinate
		drops[i]++;
	}
}

setInterval(draw, 33);




