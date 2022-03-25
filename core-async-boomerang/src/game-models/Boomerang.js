// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!
class Boomerang {
  constructor(position, skin) {
    this.position = position;
    this.skin = skin;
  }

  // fly(positionEnemy) {
  //   setInterval(() => {
  //     console.log(positionEnemy);
  //     if (this.position !== positionEnemy) {
  //       this.moveRight();
  //     } else {
  //       this.moveLeft();
  //     }
  //   }, 250);
  // }

  // moveLeft() {
  //   // Идём влево.
  //   this.position -= 1;
  // }

  // moveRight() {
  //   // Идём вправо.
  //   this.position += 1;
  // }
}

module.exports = Boomerang;
