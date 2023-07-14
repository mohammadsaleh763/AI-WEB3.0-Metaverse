var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["New York", "Paris", "Jakarta", "Sydney", "London", "Adelaide", "Islamabad"];
console.log("Original Order:", placesToVisit);
console.log("Alphabetical Order: ", __spreadArray([], placesToVisit, true).sort());
console.log("Original Order:", placesToVisit);
console.log("Reversed Alphabetical Order:", __spreadArray([], placesToVisit, true).sort().reverse());
console.log("Original Order:", placesToVisit);
console.log("Reversed Order:", placesToVisit.reverse());
//console.log("Original Order:",placesToVisit);
console.log("Original Order:", placesToVisit.reverse());
//console.log("Original Order:",placesToVisit);
console.log("Alphabetical Order: ", placesToVisit.sort());
//console.log("Order Changed: ",placesToVisit);
console.log("Reversed Alphabatical Order: ", placesToVisit.sort().reverse());
