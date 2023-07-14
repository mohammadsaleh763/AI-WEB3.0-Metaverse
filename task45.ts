interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
  }
  
  function createCar(manufacturer: string, model: string, ...options: any[]): Car {
    const car: Car = {
      manufacturer,
      model,
    };
  
    options.forEach(option => {
      const [key, value] = option;
      car[key] = value;
    });
  
    return car;
  }
  
  const myCar = createCar("Toyota", "Camry", ["color", "blue"], ["optionalFeature", "sunroof"]);
  
  console.log(myCar);
  