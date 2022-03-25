// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!
class Boomerang {
  constructor(position, skin) {
    this.position = position;
    this.skin = skin;
  }

  fly() {
    this.moveRight();
    this.moveLeft();
  }

  moveLeft() {
    if (this.position === 1) {
      this.position = "?";
      console.log("YOU WON! Enemy is dead!");
      process.exit();
      // return;
    }
    this.position -= 1;
  }

  moveRight() {
    this.position += 1;
  }
}

module.exports = Boomerang;
