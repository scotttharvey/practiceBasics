//Create an object called user. Give user a name key with the value being your name, an age key with the value being your age,
//an email key with the value being your e-mail, and a password key with the value being a fake password.
 var user = {
   name: "Scott",
   age: 20,
   email: "scott@fun.co",
   password: "dogs"
 }

//Write a function called getKeys that will loop through the user object and console.log each key name.
var getKeys = function(dude){
  console.log(Object.keys(dude));
  }



//Now write a function called getValues that will console.log each value.

var getValues = function(dude){
  console.log(Object.values(dude));
  }



//Write a function called changeEmail that will take a new email as an argument and change the email value to the new one.
function changeEmail(e){
  user.email = e
}



//Write a function called deletePassword that will delete the password property (property refers to the key/value pair) and then console.log the user object.
function deletePassword(pass){
  delete user.password;
  console.log(user);
}
//Why can't you use .length on an object?

// ANS = because .length is for arrays ;)


//When would you use bracket notation instead of dot notation?
// when using a for-in loop, and wanthing to refere to the variable in the object you are looping through


var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: false
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   },
   {
   	   author: 'J.R.R. Tolkein',
   	   title: 'The Hobbit',
   	   readingStatus: false
   }];

//Above is an array of objects. Each object is representing a book you have read.
//Write a function called checkStatus console.log the readingStatus of each book in this array.
function checkStatus(library){
	for(var i in library){
  console.log(library[i].readingStatus);
		}
    return library
	}


 //Write a function called billGates if the library array has any objects with the author 'Bill Gates'. If so, return true. If not, return false.
 function billGates(library){
 	for(var i in library){
   if (library === "Bill Gates") {
     return true
   } else {
     return false
   }
   }
   return library
 }


 //Write a function called removeBooks that will remove any books not read (readingStatus:false) from the library array.
function removeBooks(bye){
  for(var i in bye){
   if (bye[i].readingStatus === false) {
     delete bye[i]
   }
 }
 return bye
}


 //Create an object called person with name = John, age = 50. Then, access the object to console.log "John is 50 years old".
 var person = {
   name: "John",
   age: 50
 }
 console.log(person.name + " is " + person.age + " years old");
