

var level = 0;

var box;
var box2;
function setup(){

    createCanvas(800, 800);

    box = new bocs();
    box2 = new bocs();
   
}

function draw(){
    background(125);
    
    textSize(36);
    text("Level: " + level, 0,30);
    box.update();
    box.show();

    box2.update();
    box2.show();
    
}


function bocs(){

    this.x = random(0, 750);
    this.y = random(0, 750);
    this.size = 50;

    this.colliding = function(){

        if(mouseX >= this.x && mouseX <= this.x + this.size && mouseY >= this.y && mouseY <= this.y + this.size){
            return true;
        }else{
            return false;
        }

    }

    this.update = function(){
        if(this.colliding() == true && mouseIsPressed){
            this.x = random(0, 750);
            this.y = random(0, 750);
            level++;
        }
    }

    this.show = function(){
        rect(this.x, this.y, this.size, this.size);
    }

    
}


