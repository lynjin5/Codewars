//Descriptions: 
// You are creating an "Escape the room" game. The first step is to create a hash table 
// called rooms that contains all of the rooms of the game. There should be at least 
// 3 rooms inside it, each being a hash table with at least three properties 
// (e.g. name, description, completed).

//My solutions:
var rooms = {
    room1 :{
      name: 'room1',
      description: 'scary',
      completed: 'yes'
    },
    room2 :{
      name: 'room2',
      description: 'scary',
      completed: 'yes'
    },
    room3 :{
      name: 'room3',
      description: 'scary',
      completed: 'yes'
    }
  }

  //option 2:
  class Room  {
    constructor() {
      this.name = '';
      this.description = '';
      this.completed= '';
    }
  }
  var rooms = {
    bedroom : new Room(),
    kitchen : new Room(),
    bathroom : new Room(),
  }
  
  //should have at least 3 rooms, each room is an object, contain 3 properties per room