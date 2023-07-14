function makeSandwich(...items: string[]): void {
  console.log("Sandwich Summary:");
  if (items.length > 0) {
      console.log("Bread");
      for (let item of items) {
          console.log(item);
      }
      console.log("Bread");
  } else {
      console.log("No items selected for the sandwich.");
  }
}

makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
console.log();
makeSandwich("Turkey", "Swiss");
console.log();
makeSandwich("Peanut Butter", "Jelly");