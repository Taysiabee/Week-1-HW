function popsicle(message) {
    //wham is the box
	var wham = document.createElement("div");
    wham.style.width = "500px";
    wham.style.height = "100px";
    wham.style.background = "lime";
    wham.style.fontWeight = "bold";
    wham.style.float = "right";
    wham.style.margin = "auto";
    wham.style.color = "black";
    wham.style.textAlign = "center";
    wham.style.fontSize = "20px";
    wham.style.padding = "20px"
    wham.style.textDecoration = "solid white 5px";
    wham.innerHTML = message

    //wham box in body
    document.body.appendChild(wham)

    //make button
    var btn = document.createElement("button");
    btn.style.float = "right";
    btn.style.color = "lime";
    btn.innerHTML = "NAH"
    
    wham.appendChild(btn);//btn is the child, puts it into wham div

    btn.addEventListener('click', function(){
        close();
    })
  
    var btn1 = document.createElement("button");
    btn1.style.float = "left";
    btn1.style.color = "lime";
    btn1.innerHTML = "YUP";
    btn1.style.background = "red";
    wham.appendChild(btn1)//btn1 is the child, puts it into wham div
  
  
}// function popsicle complte





//calling buttons
let btn = document.querySelector("button")
let button = document.querySelector('button')
let wham = document.querySelector("div")

// calling popsicle
button.addEventListener('click', function(){
	popsicle('ARE YOU SURE YOU WANT TO ENTER?');//the message
    // close();
})


 

