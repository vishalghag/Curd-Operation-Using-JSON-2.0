var already = [
    {
        name: 'Vishal Ghag',
        dob: '1998-05-20',
        age: 24,
        gender: 'male',
        address: 'c/202 maruti complex',
        designation: 'Developer',
        salary: 50000
    },
    {
        name: 'viraj jhag',
        dob: '1998-05-20',
        age: 24,
        gender: 'male',
        address: 'c/202 maruti complex',
        designation: 'Developer',
        salary: 50000
    },
]

var result = already.map((item) =>
{
    
    return item.name.split(" ").map((word) =>
    {
        return word[0]
    }).join('').toUpperCase();
}).join(" ")

console.log(result);
