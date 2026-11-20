// Task 4: Area of square and rectangle using common function
function calarea()
{
    return this.length*this.breadth;
}
const rectangle = {
    length: 10,
    breadth: 5,
    area:calarea, 
};
const square = {
    length: 6,
    breadth: 6,
    area:calarea, 
};
console.log("Rectangle Area:",rectangle.area());
console.log("Square Area:",square.area());