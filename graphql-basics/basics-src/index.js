import { name, greetMessage, greetUser } from "./modules/firstModule";
// Exercise
import add, { subtract } from "./modules/math";

greetUser(name, greetMessage);

// Exercise
console.log(add(15, 20));
console.log(subtract(15, 20));
