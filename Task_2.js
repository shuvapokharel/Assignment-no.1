// Task 2: Find largest number using arrow function
var largest=(A) =>{
    let max=A[0];
    for (i = 0; i<(A.length);i++)
        {
            if (A[i]>max)
        {
            max=A[i];
        }
        }
        console.log("Maximum is "+max);

}
largest ([11, 7, 23, 66, 2, 23]);


add