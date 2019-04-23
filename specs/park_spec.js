const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  
  let dino1 = new Dinosaur('t-rex', 'carnivore', 70);
  let dino2 = new Dinosaur('velociraptor', 'carnivore', 20);
  let dino3 = new Dinosaur('stegosaurous', 'herbivore', 10);
  let dinosaurs = [];
  let park;
  
  beforeEach(function () {
    dinosaurs = [dino1, dino2, dino3];
    park = new Park('Jurassic Park', 10, dinosaurs);
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3);
  });

  it('should be able to add a dinosaur to its collection', function() {
    const dino = new Dinosaur('pterodactyl', 'omnivore', 45);
    park.addDinosaur(dino);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaur(dino2);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    actual = park.mostVisitedDinosaur();
    assert.deepStrictEqual(actual, dino1);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    actual = park.allDinosaurType('t-rex').length;
    assert.strictEqual(actual, 1);
  });
  
  it('should be able to calculate the total number of visitors per day', function() {
    actual = park.dailyVisitors();
    assert.strictEqual(actual, 100);
  });
  
  it('should be able to calculate the total number of visitors per year', function() {
    actual = park.annualVisitors();
    assert.strictEqual(actual, 36500);
  });
  
  it('should be able to calculate the total revenue from ticket sales for one year', function() {
    actual = park.annualRevenue();
    assert.strictEqual(actual, 365000);
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    const dino = new Dinosaur('stegosaurous', 'herbivore', 45);
    park.addDinosaur(dino);
    park.removeDinosaurType('stegosaurous');
    actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2);
  });
  
  it('should be able to make an object containing each of the diet types and the number of dinosaurs in the park of that diet type', function() {
    actual = park.dietNumbers();
    assert.deepStrictEqual(actual, { carnivore: 2, herbivore: 1, omnivore: 0 })
  });

});
