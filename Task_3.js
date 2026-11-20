// Task 3: Area of cylinder using object

const cylinder = {
    radius: 2,
    height: 3,

    area: function() 
    {
        return Math.PI * this.radius * this.radius * this.height;
    }
};

console.log("Cylinder result:", cylinder.area());
