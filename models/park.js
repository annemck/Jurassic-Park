const Park = function(name, ticketPrice, dinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dino) {
  for (dinosaur of this.dinosaurs) {
    if (dinosaur === dino){
      index = this.dinosaurs.indexOf(dinosaur);
      this.dinosaurs.splice(index, 1);
    };
  };
};

Park.prototype.mostVisitedDinosaur = function() {
  let highest = 0;
  let dino;
  for (dinosaur of this.dinosaurs) {
    if (dinosaur.guestsAttractedPerDay > highest) {
      highest = dinosaur.guestsAttractedPerDay;
      dino = dinosaur;
    }
  }
  return dino;
};

Park.prototype.allDinosaurType = function(species) {
  typeArray = [];
  for (dinosaur of this.dinosaurs) {
    if (dinosaur.species === species) {
      typeArray.push(dinosaur);
    }
  };
  return typeArray;
};

Park.prototype.dailyVisitors = function() {
  total = 0;
  for (dinosaur of this.dinosaurs) {
    total += dinosaur.guestsAttractedPerDay;
  };
  return total;
};

Park.prototype.annualVisitors = function() {
  return (this.dailyVisitors() * 365);
};

Park.prototype.annualRevenue = function() {
  return (this.annualVisitors() * this.ticketPrice)
};

Park.prototype.removeDinosaurType = function(species) {
 for( let i = 0; i < this.dinosaurs.length; i++){
   if ( this.dinosaurs[i].species === species) {
     this.dinosaurs.splice(i, 1);
     i--
   };
  };
};

Park.prototype.dietNumbers = function() {
  const diets = {
    carnivore: 0,
    herbivore: 0,
    omnivore: 0
  };
  for (dinosaur of this.dinosaurs) {
    if (dinosaur.diet === 'carnivore') {
      diets.carnivore += 1;
    };
    if (dinosaur.diet === 'herbivore') {
      diets.herbivore += 1;
    };
    if (dinosaur.diet === 'omnivore') {
      diets.omnivore += 1;
    };
  };
  return diets;
};

module.exports = Park;
