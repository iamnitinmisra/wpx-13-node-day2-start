const express = require("express");
const app = express();
let num = 11; // 11 because there are 10 studends and dont want to overwrite any
const controller = require("./controller/userController")
const myUsers = require("../db.json");
app.use(express.json());



app.get("/api/users", controller.getAllUsers);

app.get("/api/users/:id", controller.getUserById);

// {
//     "id": 1,
//     "first_name": "Raul",
//     "last_name": "Wynter",
//     "email": "rwynter0@gmail.com",
//     "school": "uofa"
//   }
// pretend the get is a post

// http://localhost:4000/api/new_user/devmountain/100?email=joshborup@gmail.com&first_name=josh&last_name=borup

app.post("/api/new_user/", controller.postNewUser);

// function updateStudent (id, array, updatedValue){
//   let index = array.findIndex((elem)=>{
//     return elem.id === parseInt(id)
//   })
//   if(index !== -1){
//     array[index].school = updatedValue
//   }
//   return array
// }
// //http://localhost:4000/api/user/2?school=devmountain

// function deleteStudent (id, array){
//   let index = array.findIndex((element)=>{
//     return element.id === parseInt(id)
//   })
//   if(index !== -1){
//     array.splice(index,1)
//   }
//   return array
// }

app.put("/api/user/:id", controller.updateUser);


app.delete("/api/user/:id", controller.deleteUser);

const port = 4000;
app.listen(port, () => console.log(`server running on port ${port}`));
