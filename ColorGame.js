var noofSquares=6;
var colors=generateRandomColors(noofSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("rgb");
var resultDisplay=document.getElementById("resultDisplay");
var h1=document.querySelector("h1");
var newColorbutton=document.querySelector("#newColors");
var easyButton=document.querySelector("#easyButton");
var hardButton=document.querySelector("#hardButton");
var mode=false;

//When user clicks easy mode button
easyButton.addEventListener("click",function(){
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	noofSquares=3;
	colors=generateRandomColors(noofSquares);
	mode=true;
	pickedColor=pickColor();
	//console.log("Picked color is"+pickedColor);
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i]){
				squares[i].style.background=colors[i];
	     }
		else{
		         squares[i].style.display="none";
		}
	}
	
	h1.style.background="steelblue";

})

//When user clicks hard mode button
hardButton.addEventListener("click",function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	noofSquares=6;
	colors=generateRandomColors(6);
	mode=false;
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
	
		squares[i].style.background=colors[i];
        squares[i].style.display="block";
	}
	h1.style.background="steelblue";

})

colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];
    squares[i].addEventListener("click",function(){
    	var clickedColor=this.style.background;
    	if(clickedColor===pickedColor)
    	{
    		resultDisplay.textContent="Correct!";
    		displayColor(clickedColor);
    		h1.style.background=clickedColor;
    		newColorbutton.textContent="Play again?";
    	}
    	else{
    		this.style.background="#232323";
    		resultDisplay.textContent="Try Again";
    		
    	}

      })
}
newColorbutton.addEventListener("click",function(){
	newColorbutton.textContent="New colors";
	resultDisplay.textContent="";
	if(mode===false){
		console.log("Welcome easy");
		noofSquares=6;
		colors=generateRandomColors(noofSquares);
		pickedColor=pickColor();
		for(var i=0;i<squares.length;i++)
		{
			squares[i].style.background=colors[i];
		}
		colorDisplay.textContent=pickedColor;
		h1.style.background="steelblue";
    }
    else{
    	console.log("Welcome easy");
    	noofSquares=3;
		colors=generateRandomColors(noofSquares);
		pickedColor=pickColor();
		for(var i=0;i<(squares.length-noofSquares);i++)
		{
			squares[i].style.background=colors[i];
		}
		colorDisplay.textContent=pickedColor;
		h1.style.background="steelblue";
    }

})

//this function to dispaly our success color to all squares
function displayColor(color)
{
	for(var i=0;i<squares.length;i++)
	{
 		squares[i].style.background=color;
	}
}

//This funtions generates a random colors in our list of colors so that we can reflect in our H1
function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

//This function generates list of random colors 
function generateRandomColors(num)
{
	var colors=[];
	for(var i=0;i<num;i++)
	{
            colors.push(randomColor());
       	}
    return colors;
}

//This function generates a random color each time!!!
function randomColor()
{
	var red=Math.floor(Math.random()*256);
	var green=Math.floor(Math.random()*256);
	var blue=Math.floor(Math.random()*256);

	return "rgb("+red+", "+green+", "+blue+")"; 
}