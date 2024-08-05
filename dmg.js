

// function gen3Attack(pokemon_attacking, pokemon_defending, move, field)
// {
//   let attack0 = move.manner=="physical" ? pokemon_attacking.attack : pokemon_attacking.sattack;
//   let defense0 = move.manner=="physical" ? pokemon_defending.defense : pokemon_defending.sdefense;
//   return (((((2*pokemon_attacking.level)/5 + 2)*move.power*attack0/defense0)/50) * getBurn(pokemon_attacking) * 1 * 1 * getWeatherBoost(field, move) * FlashFire(pokemon_attacking, move) + 2) * 1 * 1 * DoubleDamage(pokemon_attacking, pokemon_defending, move) * 1 * 1 * STAB(pokemon_attacking, move) * type1(pokemon_defending, move) * type2(pokemon_defending, move) * (random(85, 100)/100);
// }


// function gen4Attack(pokemon_attacking, pokemon_defending, move, field)
// {
//   let attack0 = move.manner=="physical" ? pokemon_attacking.attack : pokemon_attacking.sattack;
//   let defense0 = move.manner=="physical" ? pokemon_defending.defense : pokemon_defending.sdefense;
//   return (((((2*pokemon_attacking.level)/5 + 2)*move.power*attack0/defense0)/50) * getBurn(pokemon_attacking) * 1 * 1 * getWeatherBoost(field, move) * FlashFire(pokemon_attacking, move) + 2) * 1 * getItem(pokemon_attacking) * 1 * (random(85, 100)/100) * STAB(pokemon_attacking, move) * type1(pokemon_defending, move) * type2(pokemon_defending, move) * SRF(pokemon_attacking, pokemon_defending, move) * EB(pokemon_attacking, pokemon_defending, move) * TL(pokemon_attacking, pokemon_defending, move) * berry(pokemon_defending, move);
// }

// COMMON FUNCTIONS

// function getItem(pokemon_attacking)
// {
//   return 1;
// }

// //85 e 100 for GenIII and GenIV  
// function random(min, max)
// {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getBurn(pokemon_attacking)
// {
//   if(pokemon_attacking.status == "burn" && move.manner=="physical")
//   {
//     if(pokemon_attacking.ability == "guts")
//     {
//         return 1;
//     }
//     return 0.5;
//   }
//   return 1;
// }

// function getWeatherBoost(field, move)
// {
//   if(field.weather == "rain" && move.type=="water")
//   {
//     return 1.5;
//   } 
// if(field.weather == "sun" && move.type=="fire")
//   {
//     return 1.5;
//   } 
// return 1;
// }

// function FlashFire(pokemon_attacking, move)
// {
//   if(pokemon_attacking.ability == "flash fire" && move.type=="fire")
//   {
//     return 1.5;
//   }
//   return 1;
// }
// function DoubleDamage(pokemon_attacking, pokemon_defending, move)
// {
//   return 1;
// }

// function type1(pokemon_defending, move)
// {
//   // grass
//   if(pokemon_defending.type1 == "grass")
//   {
//     if(grassWeakTo.includes(move.type))
//     {
//     return 2;
//     }
//   if(grassResistantTo.includes(move.type))
//   {
//     return 0.5;
//   }
//   return 1;
//   }
//   // water
//   if(pokemon_defending.type1 == "water")
//   {
//     if(waterWeakTo.includes(move.type))
//   {
//     return 2;
//   }
//   if(waterResistantTo.includes(move.type))
//   {
//     return 0.5;
//   }
//   return 1;
//   }
//   // fire
//    if(pokemon_defending.type1 == "fire")
//   {
//     if(fireWeakTo.includes(move.type))
//   {
//     return 2;
//   }
//   if(fireResistantTo.includes(move.type))
//   {
//     return 0.5;
//   }
//   return 1;
//   }
  
//   if(pokemon_defending.type2 == "steel")
//   {
//      if(steelWeakTo.includes(move.type))
//   {
//     return 2;
//   }
//   if(steelResistantTo.includes(move.type))
//   {
//     return 0.5;
//   }
//   if(steelImmuneTo.includes(move.type))
//   {
//     return 0;
//   }
//   return 1;
//   }
  
//   return 1;
  
// }

// function type2(pokemon_defending, move)
// {
//   if(pokemon_defending.type2=="null")
//   {
//     return 1;
//   }
//   else
//   {
//     return type1(pokemon_defending, move);
//   }
// }

// function STAB(pokemon_attacking, move)
// {
//   if(pokemon_attacking.type == move.type)
//   {
//     return 1.5;
//   }
//   return 1;
// }

// function SRF(pokemon_attacking,pokemon_defending, move)
// {
//     if(pokemon_attacking.ability == "mold breaker")
//     {
//       return 1;
//     }
//   if(type1(pokemon_defending, move)==2 || type2(pokemon_defending, move) == 2)
//   {
//     if(pokemon_defending.ability == "solid rock" || pokemon_defending.ability == "filter")
//     {
//       return 0.75;
//     }
//     return 1;
//   }
//   return 1;
// }

// function EB(pokemon_attacking,pokemon_defending, move)
// {
//   return 1;
// }

// function TL(pokemon_attacking,pokemon_defending, move)
// {
//   return 1;
// }

// function berry(pokemon_defending, move)
// {
//   return 1;
// }
