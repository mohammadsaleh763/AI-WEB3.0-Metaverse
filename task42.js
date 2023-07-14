function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
        console.log(magicians[i]);
    }
}
// Calling the function to create album objects
var magicians = ['Harry Houdini', 'David Copperfield', 'Criss Angel', 'Penn Jillette', 'Teller'];
show_magicians(magicians);
make_great(magicians);
