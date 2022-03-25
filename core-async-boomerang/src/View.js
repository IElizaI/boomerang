// Сделаем отдельный класс для отображения игры в консоли.
class View {
  render(trackArray) {
    const yourTeamName = "Ninja Raccoons";

    // Тут всё рисуем.
    console.clear();
    console.log(trackArray.join(""));
    console.log("\n\n");
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
