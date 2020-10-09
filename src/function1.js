function getFullName(firstname, lastname) {
    return firstname + ' ' + lastname
 }
   
 function greet(firstname, lastname) {
    return "Hello! " + this.getFullName(firstname,lastname)
 }
 module.exports = {getFullName, greet}
