var already = [
    {
        name: 'Vishal Ghag',
        dob: '1998-05-20',
        age: 24,
        gender: 'male',
        address: 'c/202 maruti complex',
        designation: 'Developer',
        salary: 50000
    },]

    let mePagal =(details) =>
    {
        details.forEach((detail,i) =>
        {
            return console.log(detail.name); 
        })
    }

    mePagal(already)

    const getInitals = (name) =>
    {
       return name.split(" ").map((word) =>
       {
           return word[0]
       }).join('').toUpperCase()
    }

console.log(getInitals("vishal ghag"));



