function show_magicians(magicians: string[]):void {
  for(let i:number=0;i<magicians.length;i++){
    console.log(magicians[i]);
  }
}
function make_great(magicians: string[]):void{
  for (let i = 0; i < magicians.length; i++) {
      magicians[i] = "the Great " + magicians[i];
      console.log(magicians[i]);
  }
}

// Calling the function to create album objects
let magicians:string[]=['Harry Houdini', 'David Copperfield', 'Criss Angel', 'Penn Jillette', 'Teller'];
show_magicians(magicians);
make_great(magicians);