function describe_city(city: string, country: string = 'default country') {
  console.log(`${city} is in ${country}.`);
}

// Calling the function for different cities with different countries
describe_city('Karachi', 'Pakistan');
describe_city('London', 'UK');
describe_city('New York');
