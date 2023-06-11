// function y(x){
//     x();
//     console.log("y is called");
// }

// function x(){
//     console.log("x is called");
// }

// y(x);

// 

// const calculateArea = (radius) => {
//   const areas = [];
//   for(let i=0;i<radius.length;i++)
//     areas.push(Math.PI * radius[i] * radius[i]);
//   return areas;
// };

// console.log(calculateArea(radii));

const radii = [3, 1, 2, 4];

const calculateArea = (radius) => {
  return Math.PI * radius * radius;
};

const calculateCircumference = (radius) => {
    return 2* Math.PI * radius;
};

const calculateDiameter = (radius) => {
    return 2 * radius;
};

function calculate(radius,logic){
   const areas = [];
   for(let i=0;i<radius.length;i++)
        areas.push(logic(radius[i]));
    return areas;
}

// console.log(calculate(radii,calculateArea));

// console.log(calculate(radii,calculateCircumference));

// console.log(calculate(radii,calculateDiameter)); 


const newRadii = radii.map(calculateArea);
console.log(newRadii);