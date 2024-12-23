let obj = {
    name:"John",
    company:"Microsoft",
    salary:4000000,
    age:24,
    city:"Bengaluru",
    team:"Azure storage",
    designation:"Software Engineer"
}
for(const key in obj){
    console.log(`${key} -> ${obj[key]}`)
}