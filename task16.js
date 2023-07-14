var guests = ["Faizan", "Umer", "Haris", "Tayyaba"];
var unableToAttend = "Haris"; //this guest can't attend dinner
var new_guests = "Awais";
var indexOfUnableToAttend = guests.indexOf(unableToAttend); //find index of guests who is unable to attend the dinner 
//console.log(indexOfUnableToAttend);
guests.splice(indexOfUnableToAttend, 1, new_guests); // Remove the guest who can't attend and new guest is added at that index
//Add new guests to list
guests.unshift('Ali'); // add at beginning
guests.splice(Math.floor(guests.length / 2), 0, 'Usman'); //add in middle 
guests.push('Ahmer'); // add at end
for (var i = 0; i < guests.length; i++) {
    console.log("Dear " + guests[i] + ", you are invited to dinner. Please join us at Monal Restaurant today 8 PM.");
}
console.log("Huurah! Good News. We got a big dinner table.");
