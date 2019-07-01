const myUsers = require("../../db.json");


function updateStudent (id, array, updatedValue){
    
    let index = array.findIndex((elem)=>{
      return elem.id === parseInt(id)
    })
    if(index !== -1){
      array[index].school = updatedValue
    }
    return array
  }
  //http://localhost:4000/api/user/2?school=devmountain
  
  function deleteStudent (id, array){
    let index = array.findIndex((element)=>{
      return element.id === parseInt(id)
    })
    if(index !== -1){
      array.splice(index,1)
    }
    return array
  }

module.exports = {
    getAllUsers: (req, res, next) => {
        // console.log("hit inside controller")
        res.status(200).send(myUsers)
    },

    getUserById: (req, res, next) => {
        // console.log("hit inside conroller")
        const foundUser = myUsers.filter(element => {
            return element.id === parseInt(req.params.id)
        })
        res.status(200).send(foundUser)
    },

    postNewUser: (req, res, next) => {
        // console.log('hit inside the controller')
        const { first_name, last_name, email, school } = req.body;
        let num = 11;
        const newUser = {
          id: num,
          first_name,
          last_name,
          school,
          email
        };
        num++
        myUsers.push(newUser);
        res.status(200).send(myUsers);
    },

    updateUser: (req, res, next) => {
        const { school } = req.query;
        const { id } = req.params;
        res.status(200).send(updateStudent(id, myUsers, school))
    },

    deleteUser: (req, res, next) => {
        const { id } = req.params;
        res.status(200).send(deleteStudent(id, myUsers))
    }
}