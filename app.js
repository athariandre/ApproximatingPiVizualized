
class approximatePi(points, incircle, pi, loop){
    
    constructor(points,incircle){
        this.points = points;
        this.incircle = incircle;
        loop = false;
    }
    function approximatePi(points){
        var incircle = 0.0;
        var text = document.getElementById("demo");
        while (true){
            var xpos = Math.random();
            var ypos = Math.random();
            if(Math.sqrt(Math.pow((xpos-0.5),2) + Math.pow((ypos-0.5),2)) <= 0.5){
                incircle++;
            }
            this.points = points;
            this.incircle = incircle;
            this.pi = 4*points/incircle;
            updateText();
        }
    }
    function updateText(){
        document.getElementById("demo").innerHTML = pi;
    }

    function toggleRun(){
        var text = document.getElementById("demo");
        if(text.style.display == "none"){
            text.style.display = "block";
        }
        else{
            text.style.display = "none";
        }
    }
}



 // sqrt ((x2-x1)^2 + (y2-y1)^2) 
 // distance formula used to find the distance between two points
 // if random point lies is at most len/2 distance from the center, it lies within the circle
 // number of points inside the circle divided by number of points outside the circle gives us an estimation of pi 

//top left corner is (0,0)
// bottom right corner is (1,1)
// |
// |
// vp
 //+___________________________
 //|
 //|
 //|
 //|
 //|
 //|
 //|
 //|
 //|