
// JSON code for adding data in card view format which is loaded when you start website 
var alreadyAdded = [
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
        name: 'viraj Ghag',
        dob: '1992-01-23',
        age: 19,
        gender: 'male',
        address: 'c/202 maruti complex',
        designation: 'Developer',
        salary: 60000
    },

    {
        name: 'Vijay Ghag',
        dob: '1973-08-05',
        age: 24,
        gender: 'male',
        address: 'c/202 maruti complex',
        designation: 'Developer',
        salary: 70000
    },

    {
        name: 'sangeeta Ghag',
        dob: '1998-05-20',
        age: 24,
        gender: 'female',
        address: 'c/202 maruti complex',
        designation: 'Developer',
        salary: 50000
    },
]

// Process of getting data from Json(object) and displaying it in card view animation

let joinObj = (details) => {

    var userhtml = document.getElementById('flex-container')
    userhtml.innerHTML = '';

    details.forEach(function (detail, i) {
        userhtml.innerHTML += `<div class="flex-items">
        <a href="#"><i class="fa-solid fa-trash-can" onClick="deleteUser('${i}')"></i></a>
        <div id="card-image">${initialsAdded(detail.name)}</div> 
        <tr><th>Name:-</th><td>${detail.name}</td></tr><br/>
        <tr><th>D.O.B:-</th> <td>${detail.dob}</td></tr><br/>
        <tr><th>age:-</th> <td>${detail.age}</td></tr><br/>
        <tr><th>Gender:-</th> <td>${detail.gender}</td></tr><br/>
        <tr><th>Address:-</th> <td>${detail.address}</td></tr><br/>
         <tr><th>Designation:-</th> <td>${detail.designation}</td></tr> <br/>

         <tr><th>Salary:-</th> <td>${detail.salary}</td></tr> <br/>
          <center> <button class="edited" data-toggle="modal" data-target="#myModal" onClick="editUser('${i}')">Edit User</button> </center> </div>
        `

    })

}


// For Adding Users
function addUsers() {
    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var address = document.getElementById('address').value;
    var designation = document.getElementById('designation').value;
    var salary = document.getElementById('salary').value;
    var indexx = document.getElementById('indxx').value;
    console.log(indexx);
    var user = {
        name: name,
        dob: dob,
        age: age,
        gender: gender,
        address: address,
        designation: designation,
        salary: salary,
    };
// Updating user code is written here
    if(indexx == '' || indexx == undefined)
    {
    alreadyAdded.push(user);
    console.log(user);
    
    }
    else
    {
        alreadyAdded.splice(indexx,1,user);
        console.log( alreadyAdded.splice(indexx,1,user));
        document.getElementById('res').innerHTML = "Submit";
        document.getElementById('chang').innerHTML = "Add User"

    }


    joinObj(alreadyAdded);
    clearForm()
}

// for validation
const userName = document.getElementById('name')
const nameValidation = document.getElementById('nameValidation')
const salaryValidation = document.getElementById('salaryValidation')
const salary = document.getElementById('salary')
const form = document.getElementById('form');

form.addEventListener("submit", (e)=>
{
    let message = [];
    let message1 = [];

    if(userName.value === '' || userName.value == null)
    {
       message.push('Plzz Enter Your Name')
    }
    
    if(message.length > 0)
    {
        e.preventDefault();
        nameValidation.innerHTML = message.join(', ')
    }
     if(salary.value === '' || salary.value == null)
    {
        message1.push('plzz Enter Salary')

    }
     if(message1.length > 0)
    {
        e.preventDefault();
        salaryValidation.innerHTML = message1.join(', ')
    }
    else
    {
        addUsers()
    }
})

joinObj(alreadyAdded)


// It is a code for deleting user in card
function deleteUser(i) {
    alreadyAdded.splice(i, 1)
    joinObj(alreadyAdded);
}

// It is code for clearing card information
function clearForm() {
    document.getElementById('name').value = ''
    document.getElementById('dob').value = ''
    document.getElementById('age').value = ''
    document.getElementById('gender').value = ''
    document.getElementById('address').value = ''
    document.getElementById('designation').value = ''
    document.getElementById('salary').value = ''

}

// It is a function for retreiving data from already added data 
function editUser(i)
{
    var info = alreadyAdded[i];

    document.getElementById('name').value = info.name;
    document.getElementById('dob').value = info.dob;
    document.getElementById('age').value =  info.age;
    document.getElementById('gender').value = info.gender;
    document.getElementById('address').value = info.address;
    document.getElementById('designation').value = info.designation;
    document.getElementById('salary').value = info.salary;
    document.getElementById('indxx').value = i;

    document.getElementById('res').innerHTML = "Update Book";
    document.getElementById('chang').innerHTML = "Update User"

}

// Displaying 
function initialsAdded(name)
{
    var intials = name.split(" ").map((word) =>
    {
        return word[0]
    }).join('').toUpperCase();

     return intials;
    
}



