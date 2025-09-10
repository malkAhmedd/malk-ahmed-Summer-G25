 function changeImg(){
    var img=document.querySelector('#img')
     if(img.src.includes("images/2.jpg")){
        img.src = "images/1.jpg";   
    } else {
        img.src = "images/2.jpg";  
    }
}




var userForm = document.getElementById('userForm')
var users = []

userForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e)
    console.log(e.target.elements.userName.value)
    console.log(e.target.elements.userEmail.value)

    var user = {
        name: e.target.elements.userName.value,
        email: e.target.elements.userEmail.value
    }

    users.push(user)
    console.log(users)

    showUser()
   
})



var showUser = () => {
    var tBody = document.getElementById('tableBody')
    console.log(users)
    tBody.innerText = ""
    users.forEach((item , i )=>{
        var tr = document.createElement("tr")
        var td = document.createElement('td')
        td.innerText = item.name
        var td2 = document.createElement('td')
        var td3 = document.createElement('td')
        td2.innerText = item.email

        var editBtn = document.createElement('button')
        editBtn.innerText = "Edit user"
        editBtn.classList.add('btn' , 'btn-success' , 'btn-sm')
        editBtn.addEventListener('click' , ()=>{
    var newName = prompt("Enter new name", users[i].name);
    var newEmail = prompt("Enter new email", users[i].email);

    if (newName) {
        users[i].name = newName;
    }
    if (newEmail) {
        users[i].email = newEmail;
    }
    showUser();
        })
        var deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Remove user"
        deleteBtn.classList.add('btn' , 'btn-danger' , 'btn-sm' , "ms-2")
       
          deleteBtn.addEventListener('click', () => {
            users.splice(i, 1)  
            showUser()           
        })
        td3.append(editBtn)
        td3.append(deleteBtn)
        tr.append(td)
        tr.append(td2)
        tr.append(td3)
        tBody.append(tr)
    })



}

