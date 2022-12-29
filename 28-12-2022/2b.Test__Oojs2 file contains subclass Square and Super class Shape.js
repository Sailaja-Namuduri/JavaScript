let section=document.querySelector('section');
let para1=document.createElement('p');
let para2=document.createElement('p');
let para3=document.createElement('p');

section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);


class Shape {

    name;
    sides;
    sideLength;

    constructor(name,sides,sideLength){
        this.name=name;
        this.sides=sides;
        this.sideLength=sideLength;
    }
    
    calcPerimeter(){
        console.log('SuperClass name property:: ',this.name);
        console.log('SuperClass sides property:: ',this.sides);
        console.log('SuperClass sideLength property:: ',this.sideLength);

        let perimeter;
        if(this.name=='triangle'){
            perimeter=3*this.sides;
            para1.textContent=`Perimeter of ${this.name} is ${perimeter}`;
           // console.log(`Perimeter of ${this.name} is ${perimeter}`);
        }else if(this.name=='square'){
            perimeter=4*this.sides;
            para2.textContent=`Perimeter of ${this.name} is ${perimeter}`;
            //console.log(`Perimeter of ${this.name} is ${perimeter}`);
        }
    }

  }
class Square extends Shape{
    constructor(name, sides,sideLength){
        super(name="square",sides=4,sideLength);
        /*
            Below DONT'WORK:: ERROR: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
            
            this.name='square';
            this.sides=4;
            this.sideLength=sideLength;
        */
    }
    
    clacArea(){

        console.log('SubClass name property:: ',this.name);
        console.log('SubClass sides property:: ',this.sides);
        console.log('SubClass sideLength property:: ',this.sideLength);

        let area;
        console.log('side length is::',this.sideLength);
        area=this.sideLength*this.sideLength;
        console.log(area);
        para3.textContent=`Are of the Square is ${area}`;
    }
}
const square=new Square('hel',10,13);
square.calcPerimeter();
square.clacArea();
