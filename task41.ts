function show_magicians(magicians: string[]):void {
  for(let i:number=0;i<magicians.length;i++){
    console.log(magicians[i]);
  }
}
// Calling the function and passing array
let magicians:string[]=['Harry Houdini', 'David Copperfield', 'Criss Angel', 'Penn Jillette', 'Teller'];
show_magicians(magicians);