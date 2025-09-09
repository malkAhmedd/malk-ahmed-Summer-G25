var users = [];
var numberOfUsers = prompt("Enter number of users:");
function addUser(name, id, balance) {
    users.push({ name: name, id: id, balance: balance });
}
   
function editUserBalanceById() {
    var id=prompt("please enter id of the user you want to edit:")
    var newBalance=prompt("please enter newbalane of the user you want to edit:")
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            users[i].balance = newBalance;
        }
    }
  
}
function deleteUserById() {
    var id=prompt("please enter id of the user you want to remove:")
   
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) {
           users.splice(i,1)
        }
    }
  
}
for (var i = 0; i < numberOfUsers; i++) {
    var name = prompt("Enter name of user " + (i+1));
    var id = prompt("Enter id of user " + (i+1));
    var balance = prompt("Enter balance of user " + (i+1));
    addUser(name, id, balance);
}
editUserBalanceById()
deleteUserById()
console.log(users)
