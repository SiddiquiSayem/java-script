class Car {
    constructor(name,year){
    this.name=name;
    this.year=year;
    }
    displayName=()=>{
        console.log(this.name);
    }
    
    displayYear=()=>{
        console.log(this.year);
    }
}



c3= new Car('tesla',2018);
c3.displayName();


// c1 {
//     name:'Audi';
//     year: 2018;
//     model:'y1';
    
// displayName=()=>{
//     console.log(this.name);
// }
// }




