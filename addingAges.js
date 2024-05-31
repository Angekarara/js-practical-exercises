function average(employees){
    let obj = {}
   for(let employee of employees){
    const {department, age} = employee
    if(obj[department]){
       obj[department] += age 
    }
      else{
          obj[department] = age
      }
      
   }
   return obj
  
}
 employees = [
{ name: 'Alice', age: 30, department: 'Engineering' },
{ name: 'Bob', age: 25, department: 'Marketing' },
{ name: 'Charlie', age: 35, department: 'Engineering' },
{ name: 'David', age: 40, department: 'HR' },
{ name: 'Eve', age: 28, department: 'Marketing' },
];
console.log(average(employees))