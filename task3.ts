let person_name:string="My name is muhammad saleh";
function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  };
console.log(person_name.toLowerCase(),"\n",person_name.toUpperCase(),"\n",toTitleCase(person_name));