let guests:string[]=["Faizan", "Umer", "Haris", "Tayyaba"];
let unableToAttend:string="Haris";   //this guest can't attend dinner
let new_guests:string="Awais";
let indexOfUnableToAttend: number = guests.indexOf(unableToAttend);  //find index of guests who is unable to attend the dinner 
//console.log(indexOfUnableToAttend);
guests.splice(indexOfUnableToAttend, 1,new_guests);          // Remove the guest who can't attend and new guest is added at that index

//Add new guests to list
guests.unshift('Ali');  // add at beginning
guests.splice(Math.floor(guests.length/2),0,'Usman');  //add in middle 
guests.push('Ahmer')     // add at end

console.log("Oooops! Sorry, we can only invite two people to dinner");
let x:number=guests.length;
for (i=0;i<(x-2);i++)
{
    let guest_removed:string=guests.pop()!;
    console.log(`Sorry, ${guest_removed}. We regret to inform you that we can't invite you to dinner.`);   
}
for (var i = 0; i < guests.length; i++) {
    console.log("Dear " + guests[i] + ", you are invited to dinner. Please join us at Monal Restaurant today 8 PM.");
}        
console.log(guests.length+" people are invited to dinner party");
