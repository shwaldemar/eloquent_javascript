let plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"]

function Vector(x,y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function (other) {
  return new Vector(this.x + other.x, this.y + other.y);
}

function Grid(width, height) {
  this.space = new Array(width * height);
  this.width = width;
  this.height = height;
}
//console.log(new Grid(1,2)) //test grid

Grid.prototype.isInside = function(vector) {
  return vector.x >= 0 && vector.x < this.width &&
         vector.y >= 0 && vector.y < this.height;
}

Grid.prototype.get = function(vector) {
  return this.space[vector.x + this.width * vector.y];
}

Grid.prototype.set = function(vector, value) {
  this.space[vector.x + this.width * vector.y] = value;
}


//test for grid vector getter and setters//
// var grid = new Grid(5,5);
// console.log(grid.get(new Vector(1,1)));
// grid.set(new Vector(1,1), 'X');
// console.log(grid.get(new Vector(1,1)));

var directions = {
  "n": new Vector(0,1),
  "ne": new Vector(1,-1),
  "e": new Vector(1,0),
  "se": new Vector(1,1),
  "s": new Vector(0,1),
  "sw": new Vector(-1,1),
  "w": new Vector(-1,0),
  "nw": new Vector(-1,-1)
}

var directionNames = "n ne e se s sw w nw".split(" ");

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function BouncingCritter() {
  this.direction = randomElement(directionNames);
}

BouncingCritter.prototype.act = function(view) {
  if (view.look(this.direction) != " ")
    this.direction = view.find(" ") || "s";
  return {type: "move", direction: this.direction};
}

function elementFromChar(legend, ch) {
  if (ch === " ")
    return null;
  var element = new legend[ch]();
  element.originChar = ch;
  return element;
}

function World(map, legend) {
  var grid = new Grid(map[0].length, map.length);
  this.grid = grid;
  this.legend = legend;

  map.forEach(function(line, y) {
    for (var x = 0; x < line.length; x++)
      grid.set(new Vector(x, y),
              elementFromChar(legend, line[x]));
  });
}

function charFromElement(element) {
  if (element === null)
    return " ";
  else
    return element.originChar;
}

World.prototype.toString = function() {
  var output = "";
  for (var y = 0; y < this.grid.height; y++) {
    for (var x = 0; x < this.grid.width; x++) {
      var element = this.grid.get(new Vector(x, y));
      output+=charFromElement(element);
    }
    output += "\n";
  }
  return output;
}

function Wall(){}

var world = new World(plan,
                      {"#": Wall,
                       "o": BouncingCritter});
//console.log(world.toString())

// the scope of this can get lost in nested functions like for each and map. This means that to access this from inside the loop you need to either say self = this giving it the value of other variables or to use .bind(this) so it is visible to inner functions.

// var test = {
//   prop: 10,
//   addPropTo: function(array) {
//     return array.map(function(elt) {
//       return this.prop + elt;
//     }.bind(this));
//   }
// };
// console.log(test.addPropTo([5]));
//
// var test = {
//   prop: 10,
//   addPropTo: function(array) {
//     return array.map(function(elt) {
//       return this.prop + elt;
//     }, this);
//   }
// };
// console.log(test.addPropTo([5]))

//Bind or self only works for higher order methods that support the use of a context parameter. for those that don't we can use a .call() method to call the function given as an argument.
Grid.prototype.forEach = function(f, context) {
  for (var y = 0; y < this.height; y++) {
    for (var x = 0; x < this.width; x++) {
      var value = this.space[x + y * this.width];
      if (value != null)
        f.call(context, value, new Vector(x, y));
    }
  }
};

World.prototype.turn = function() {
  var acted = []
  this.grid.forEach(function(critter, vector) {
    if (critter.act && acted.indexOf(critter) === -1) {
      acted.push(critter);
      this.letAct(critter, vector);
    }
  }, this);
}

World.prototype.letAct = function(critter, vector) {
  var action = critter.act(new View(this, vector));
  if (action && action.type == "move") {
    var dest = this.checkDestination(action, vector);
    if (dest && this.grid.get(dest) === null) {
      this.grid.set(vector, null);
      this.grid.set(dest, critter);
    }
  }
};

World.prototype.checkDestination = function(action, vector) {
  if (directions.hasOwnProperty(action.direction)) {
    var dest = vector.plus(directions[action.direction]);
    if (this.grid.isInside(dest))
      return dest;
  }
};

function View(world, vector) {
  this.world = world;
  this.vector = vector;
}

View.prototype.look = function(dir) {
  var target = this.vector.plus(directions[dir]);
  if (this.world.grid.isInside(target))
    return charFromElement(this.world.grid.get(target));
  else
    return "#";
}

View.prototype.findAll = function(ch) {
  let found = [];
  for (let dir in directions)
    if (this.look(dir) === ch)
      found.push(dir);
  return found;
}

View.prototype.find = function(ch) {
  var found = this.findAll(ch);
  if (found.length === 0) return null;
  return randomElement(found);
}

for (var i = 0; i < 5; i++) {
  world.turn();
  console.log(world.toString());
}

function dirPlus(dir, n) {
  var index = directions.indexOf(dir);
  return directionNames[(index + n + 8) % 8];
}

function Wallfollower() {
  this.dir = "s";
}

Wallfollower.prototype.act = function(view) {
  let start = this.dir;
  if (view.look(dirPlus(this.dir, -3)) != " ")
    start = this.dir = dirPlus(this.dir, -2);
  while (view.look(this.dir) != " ") {
    this.dir = dirPlus(this.dir, 1);
    if (this.dir === start) break;
  }
  return {type: "move", direction: this.dir};
}

function LifelikeWorld(map, legend) {
  World.call(this, map, legend);
}

LifelikeWorld.prototype = Object.create(World.prototype);

let actionTypes = Object.create(null);

LifelikeWorld.prototype.letAct = function(critter, vector) {
  let action = critter.act(new View(this, vector));
  let handled = action &&
    action.type in actionTypes &&
    actionTypes[action.type].call(this, critter,
                                  vector, action);
  if (!handled) {
    critter.energy -= 0.2;
    if (critter.energy <= 0)
      this.grid.set(vector, null);
  }
};

actionTypes.grow = function(critter) {
  critter.energy += 0.5;
  return true;
};

actionTypes.move = function(critter, vector, action) {
  let dest = this.checkDestination(action, vector);
  if (dest === null ||
      critter.energy <= 1 ||
      this.grid.get(dest) != null)
    return false;
  critter.energy -= 1;
  this.grid.set(vector, null);
  this.grid.set(dest, critter);
  return true;
}

actionTypes.eat = function(critter, vector, action) {
  let dest = this.checkDestination(action, vector);
  let atDest = dest != null && this.grid.get(dest);
  if (!atDest || atDest.energy === null)
    return false
  critter.energy += atDest.energy;
  this.grid.set(dest, null);
  return true
}

actionTypes.reproduce = function(critter, vector, action) {
  let baby = elementFromChar(this.legend,
                              critter.originChar);
  let dest = this.checkDestination(action, vector);
  if (dest === null ||
      critter.energy <= 2 * baby.energy ||
      this.grid.get(dest) != null)
    return false
  critter.energy -=2 * baby.energy;
  this.grid.set(dest, baby);
  return true;
}

function Plant() {
  this.energy = 3 + Math.random() * 4;
}

Plant.prototype.act = function(context) {
  if (this.energy > 15) {
    let space = context.find(" ");
    if (space)
      return {type: "reproduce", direction: space};
  }
  if (this.energy < 20)
    return {type: "grow"};
}

function PlantEater() {
  this.energy = 20;
}

PlantEater.prototype.act = function(context) {
  let space = context.find(" ");
  if (this.energy > 60 && space)
    return {type: "reproduce", direction: space};
  if (plant)
    return {type: "eat", direction: plant};
  if (space)
    return {type: "move", direction: space};
}

function SmartPlantEater() {
  this.energy = 30;
  this.direction = "e";
}

SmartPlantEater.prototype.act = function(view) {
  let space = view.find(" ");
  if (this.energy > 90 && space)
    return {type: "reproduce", direction: space};
  let plants = view.findAll("*");
  if (plants.length > 1)
    return {type: "eat", direction: randomElement(plants)};
  return {type: "move", direction: this.direction}
}

function Tiger() {
  this.energy = 100;
  this.direction = "w"
  this.preySeen = []
}

Tiger.prototype.act = function(view) {
  //Average number of prey seen per turn
  let seenPerTurn = this.preySeen.reduce(function(a,b) {
    return a+=b
  },0) / this.preySeen.length;
  let prey = view.findAll("O");
  this.preySeen.push(prey.length)
  //Drop the first element of the array if it is over 6 long
  if (this.preySeen.length > 6)
    this.preySeen.shift();
  //Only eat if the predator saw more than 1/4 prey per turn
  if (prey.length && seenPerTurn > 0.25)
    return {type: "eat", direction: randomElement(prey)};

  let space = view.find(" ")
  if (this.energy > 400 && space)
    return {type: "reproduce", direction: space};
  if (view.look(this.direction) != " " && space)
    this.direction = space;
  return {type: "move", direction: this.direction};
}

let valley = new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***     O    ##**    *#",
   "#       O         ##***    #",
   "#                 ##**     #",
   "#   O       #*             #",
   "#*          #**       O    #",
   "#***        ##**    O    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": SmartPlantEater,
   "*": Plant,
   "@": Tiger}
);
