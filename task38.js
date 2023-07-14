function describe_city(city, country) {
    if (country === void 0) { country = 'default country'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Calling the function for different cities with different countries
describe_city('Karachi', 'Pakistan');
describe_city('London', 'UK');
describe_city('New York');
