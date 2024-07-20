//Types weaknesses
let grassWeakTo = ["fire", "ice", "bug", "poison"];
//Types not effective to
let grassResistantTo = ["eletric", "ground"];             

/*
Level is the level of the attacking Pokémon. If the used move is Beat Up, L is instead the level of the Pokémon performing the strike.
A is the effective Attack stat of the attacking Pokémon if the used move is a physical move, or the effective Special Attack stat of the attacking Pokémon if the used move is a special move (for a critical hit, negative Attack or Special Attack stat stages are ignored). If the used move is Beat Up, A is instead the base Attack of the Pokémon performing the strike.
D is the effective Defense stat of the target if the used move is a physical move, or the effective Special Defense stat of the target if the used move is a special move (for a critical hit, positive Defense or Special Defense stat stages are ignored). If the used move is Beat Up, D is instead the base Defense of the target.
Power is the effective power of the used move.
Burn is 0.5 if the attacker is burned, its Ability is not Guts, and the used move is a physical move, and 1 otherwise.
Screen is 0.5 if the used move is physical and Reflect is present on the target's side of the field, or special and Light Screen is present. For a Double Battle, Screen is instead 2/3, and 1 otherwise or if the used move lands a critical hit. However, if, in a Double Battle, when the move is executed, the only Pokémon on the target's side is the target, Screen remains as 0.5.
Targets is 0.5 in Double Battles if the move targets both foes (unless it targets all other Pokémon, like Earthquake, and only if there is more than one such target when the move is executed, regardless of whether the move actually hits or can hit all the targets), and 1 otherwise.
Weather is 1.5 if a Water-type move is being used during rain or a Fire-type move during harsh sunlight, and 0.5 if a Water-type move is used during harsh sunlight, any Fire-type move during rain, or SolarBeam during any non-clear weather besides harsh sunlight, and 1 otherwise or if any Pokémon on the field have the Ability Cloud Nine or Air Lock.
FF is 1.5 if the used move is Fire-type, and the attacker's Ability is Flash Fire that has been activated by a Fire-type move, and 1 otherwise.
Stockpile is 1, 2, or 3 if the used move is Spit Up, depending on how many Stockpiles have been used, or always 1 if the used move is not Spit Up.
Critical is 2 for a critical hit, and 1 otherwise. It is always 1 if Future Sight, Doom Desire, or Spit Up is used, if the target's Ability is Battle Armor or Shell Armor, or if the battle is the first one against PoochyenaRS/ZigzagoonE or the capture tutorial where Wally catches a Ralts.
DoubleDmg is 2 if the used move is (and 1 if the used move is not any of these moves):
Gust or Twister and the target is in the semi-invulnerable turn of Fly or Bounce.
Stomp, Needle Arm, Astonish, or Extrasensory and the target has previously used Minimize.
Surf or Whirlpool and the target is in the semi-invulnerable turn of Dive.
Earthquake or Magnitude and the target is in the semi-invulnerable turn of Dig.
Pursuit and the target is attempting to switch out.
Facade and the user is poisoned, burned, or paralyzed.
SmellingSalt and the target is paralyzed.
Revenge and the attacker has been damaged by the target this turn.
Weather Ball, there is non-clear weather, and no Pokémon on the field have the Ability Cloud Nine or Air Lock.
Charge is 2 if the move is Electric-type and Charge takes effect, and 1 otherwise.
HH is 1.5 if the attacker's ally in a Double Battle has used Helping Hand on it, and 1 otherwise.
STAB is the same-type attack bonus. This is equal to 1.5 if the move's type matches any of the user's types and 1 if otherwise.
Type1 is the type effectiveness of the used move against the target's first type (or only type, if it only has a single type). This can be 0.5 (not very effective), 1 (normally effective), or 2 (super effective). If the used move is Struggle, Future Sight, Beat Up, or Doom Desire, both Type1 and Type2 are always 1.
Type2 is the type effectiveness of the used move against the target's second type. This can be 0.5 (not very effective), 1 (normally effective), or 2 (super effective). If the target only has a single type, Type2 is 1.
random is realized as a multiplication by a random uniformly distributed integer between 85 and 100 (inclusive), followed by an integer division by 100. random is always 1 if Spit Up is used.
*/

function gen3Attack(pokemon_attacking, pokemon_defending, move, field)
{
  let attack = move.type=="physical" ? pokemon_attacking.attack : pokemon_attacking.special_attack;
  let defense = move.type=="physical" ? pokemon_defending.defense : pokemon_defending.special_defense;
  return (((((2*pokemon_attacking.level)/5 + 2)*move.power*attack/defense)/50) * getBurn(pokemon_attacking) * 1 * 1 * getWeatherBoost(field, move) * FlashFire(pokemon_attacking, move) + 2) * 1 * 1 * DoubleDamage(pokemon_attacking, pokemon_defending, move) * 1 * 1 * STAB(pokemon_attacking, move) * type1(pokemon_defending, move) * type2(pokemon_defending, move) * (random()/100);
}
//85 e 100
function random(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getBurn(pokemon_attacking)
{
  if(pokemon_attacking.status == "burn" && move.type=="physical")
  {
    if(pokemon_attacking.ability == "guts")
    {
        return 1;
    }
    return 0.5;
  }
}
function getWeatherBoost(field, move)
{
  if(field.weather == "rain" && move.type=="water")
  {
    return 1.5;
  } 
if(field.weather == "sun" && move.type=="fire")
  {
    return 1.5;
  } 
return 1;
}
function FlashFire(pokemon_attacking, move)
{
  if(pokemon_attacking.ability == "flash fire" && move.type=="fire")
  {
    return 1.5;
  }
  return 1;
}
function DoubleDamage(pokemon_attacking, pokemon_defending, move)
{
  return 1;
}
function type1(pokemon_defending, move)
{
  if(pokemon_defending.type1 == "grass")
  {
    if(grassWeakTo.includes(move.type)
  {
    return 2;
  }
  if(grassResistantTo.includes(move.type)
  {
    return 0.5;
  }
  return 1;
  }
  
}
function type2(pokemon_defending, move)
{
  if(pokemon_defending.type2==null)
  {
    return 1;
  }
  else
  {
    return type1(pokemon_defending, move);
  }
}
function STAB(pokemon_attacking, move)
{
  if(pokemon_attacking.type == move.type)
  {
    return 1.5;
  }
  return 1;
}
