const userDatabase = {
   Wife :{
      firstName: "Ajoke",
      lastName: "Ade",
      email: "ajokeade21@gmail.com",
      phoneNumber: 8162451390,
      accountValidated: true,
      password: "Ajokeade"

   },

   Husband :{
      firstName: "Sunday",
      lastName: "Ade",
      email: "sundayfasasi1@gmail.com",
      phoneNumber: 8066181932,
      accountValidated: true,
      password: "Ajokeade21"

   },

   Daughter :{
      firstName: "Titilayo",
      lastName: "Ade",
      email: "adebayotitilayo001@gmail.com",
      phoneNumber: 8166672525,
      accountValidated: false,
      password: "Ajokepoor"

   },

   Daughter2 :{
      firstName: "Adenike",
      lastName: "Ade",
      email: "ajokeade212@gmail.com",
      phoneNumber: 8162452390,
      accountValidated: true,
      password: "Ajokeade123"

   },

   Son :{
      firstName: "Adenire",
      lastName: "Ade",
      email: "ajokeade22@gmail.com",
      phoneNumber: 8162454390,
      accountValidated: false,
      password: "Ajokeade123"

   },
  

};


function displayUserDetails(params) {
   let username = prompt("Enter your username");
   while (validateUsername(username) == false) {
      username = prompt("Please enter a valid username so we can proceed")
   }
   
if(username == null) {
   return
}

   let password = prompt("Enter your password");
   while (validatePassword(password) == false) {
      password = prompt("Please enter a correct password");
   } 
   
   if(password == null) {
      return
   }
   
let passwordConfirm = prompt("confirm your password")
while(passwordConfirm !== password) {
   passwordConfirm = prompt("Password incorrect, please, enter a correct password")

}

if(passwordConfirm == null) {
   return
}


const user = userDatabase.username;

if(user == undefined){
   alert('User not found, please, register on the app to retrieve your details')
return
}

alert(
   `User found with the following details;
   firstname: ${user.firstName}
   lastname: ${user.lastName}
   email: ${user.email}
   phoneNumber: ${user.phoneNumber}
   accountValidated: ${user.accountValidated}
   `
)



//console.log(username, password)

}
displayUserDetails()
alert("We have come to the end of this program"); 

function validateUsername(username) {
   if (username == null || username.length === 0) {
      return true;
   }
   if (username.length > 10) {
      return false;
   } else {
      return true;
   }
}



function validatePassword(password) {
   if (password == null || password.length === 0) {
      return true;
   }
   if (password.length < 6) {
      return false;
   } else {
      return true;
   }
}
/*
const user = userDatabase.username;
console.log(user)
/*
const userDatabase = {
   Wife :{
      firstName: "Ajoke",
      lastName: "Ade",
      email: "ajokeade21@gmail.com",
      phoneNumber: 8162451390,
      accountValidated: true,
      password: "Ajokeade"

   },

   Husband :{
      firstName: "Sunday",
      lastName: "Ade",
      email: "sundayfasasi1@gmail.com",
      phoneNumber: 8066181932,
      accountValidated: true,
      password: "Ajokeade21"

   },

   Daughter :{
      firstName: "Titilayo",
      lastName: "Ade",
      email: "adebayotitilayo001@gmail.com",
      phoneNumber: 8166672525,
      accountValidated: false,
      password: "Ajokepoor"

   },

   Daughter2 :{
      firstName: "Adenike",
      lastName: "Ade",
      email: "ajokeade212@gmail.com",
      phoneNumber: 8162452390,
      accountValidated: true,
      password: "Ajokeade123"

   },

   Son :{
      firstName: "Adenire",
      lastName: "Ade",
      email: "ajokeade22@gmail.com",
      phoneNumber: 8162454390,
      accountValidated: false,
      password: "Ajokeade123"

   },
  

};
   







/*
function validateUserName(userName) {
   if (userName == null) {
      return false
     }
   if (userName.length >= 5) {
      return true
   } else {
      return false
   }
   

};

function validatePassword(password) {
   if (password.length == null ) {
return false
   }
   if (password.length > 6) {
      return true
   } else {
      return false
   }
}

let userName = prompt("Enter your username");
while(validateUserName(userName) == false) {
   userName = prompt("Please, enter a valid username so we can proceed")
}

let password = prompt("Enter your password")
while(validatePassword(password) == false) {
   password = prompt("Please, input a correct password")
} 

alert("we have come to the end of this programme")







/*
alert("Welcome to my page");
const name = document.querySelector("#username")
const greetMeButton = document.querySelector(".greet-btn")
const greetingOutput = document.querySelector(".greeting")

greetMeButton.addEventListener('click', (event) => {
   greetingOutput.innerText = `Hello ${name.value}, Welcome to my page 😊😊`;
})
*/