const buttonAttack = document.getElementById("attackNow");
// pokemon 1
const level = document.getElementById("level");
const A1 = document.getElementById("attack1");
const D1 = document.getElementById("defense1");
const SA1 = document.getElementById("sattack1");
const SD1 = document.getElementById("sdefense1");
const type1_1 = document.getElementById("type1_1");
const type2_1 = document.getElementById("type2_1");
const ability1_1 = document.getElementById("ability1_1");
// pokemon 2
const A2 = document.getElementById("attack2");
const D2 = document.getElementById("defense2");
const SA2 = document.getElementById("sattack2");
const SD2 = document.getElementById("sdefense2");
const type1_2 = document.getElementById("type1_2");
const type2_2 = document.getElementById("type2_2");
const ability1_2 = document.getElementById("ability1_2");
// move
const power = document.getElementById("power");
const manner = document.getElementById("manner");
const move_type = document.getElementById("move_type")
// field
const weather = document.getElementById("weather");
// result
const damage = document.getElementById("damage");
function attack()
{
    const p1 = new Pokemon(type1_1.value, type1_2.value, ability1_1.value, A1.value, D1.value, SA1.value, SD1.value, level.value);
    const p2 = new Pokemon(type1_2.value, type2_2.value, ability1_2.value, A2.value, D2.value, SA2.value, SD2.value);
    const move = new Move(power.value, move_type.value, manner.value);
    const field = new Field(weather.value);
    damage.innerHTML = "Danno calcolato: " + gen3Attack(p1, p2, move, field);
}
buttonAttack.addEventListener("click", attack);
