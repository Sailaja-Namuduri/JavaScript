let section=document.querySelector('section');
    let para1=document.createElement('p');
    let para2=document.createElement('p');
    section.appendChild(para1);
    section.appendChild(para2);


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
  const square=new Shape("square",3,2);
  square.calcPerimeter();
  const triangle=new Shape("triangle",3,3);
  triangle.calcPerimeter();

 