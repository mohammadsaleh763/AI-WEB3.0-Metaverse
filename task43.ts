function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
      console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  let great_magicians: string[] = [];
  for (let magician of magicians) {
      let great_magician: string = "the Great " + magician;
      great_magicians.push(great_magician);
  }
  return great_magicians;
}

let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Criss Angel', 'Penn Jillette', 'Teller'];

let modified_magicians: string[] = make_great([...magicians]);

console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nModified Magicians:");
show_magicians(modified_magicians);
