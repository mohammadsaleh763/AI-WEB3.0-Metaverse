var person_name = "My name is muhammad saleh";
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
;
console.log(person_name.toLowerCase(), "\n", person_name.toUpperCase(), "\n", toTitleCase(person_name));
