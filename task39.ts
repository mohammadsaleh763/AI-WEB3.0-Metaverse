function city_country(city: string, country: string) {
  return(`"${city},${country}"`);
}

// Calling the function for different cities with different countries
console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('London', 'UK'));
console.log(city_country('New York','USA'));
