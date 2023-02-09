//The optional chaining '?.' is a safe way to access nested object properties,
// even if an intermediate property doesn’t exist.

const work = {
    manager: true,
    CEO: true,
    home_office: true
}

console.log(work?.dev)


// The optional chaining ?. is not an operator, but a special syntax construct, that also works with functions and square brackets.

//For example, ?.() is used to call a function that may not exist.

//In the code below, some of our users have admin method, and some don’t:

let userAdmin = {
    admin() {
      alert("I am admin");
    }
  };
  
  let userGuest = {};
  
  userAdmin.admin?.(); // I am admin
  
  userGuest.admin?.(); // nothing happens (no such method)

  