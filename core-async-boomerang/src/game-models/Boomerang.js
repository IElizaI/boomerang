// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!
class Boomerang {
  constructor(position, skin) {
    this.position = position;
    this.skin = skin;
  }

  fly() {
    setInterval(() => {
      this.moveRight();
    }, 100);
    // this.moveLeft();
  }

  moveLeft() {
    this.position -= 1;
  }

  moveRight() {
    this.position += 1;
  }
}

module.exports = Boomerang;
