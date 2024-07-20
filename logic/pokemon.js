class Pokemon {
    type1;
    type2;
    ability;
    level;
    status=null;
    // stats
    attack;
    defense;
    sattack;
    sdefense;
    constructor(type1, type2, ability, attack, defense, sattack, sdefense, level)
    {
        this.type1 = type1;
        this.type2 = type2;
        this.ability = ability;
        this.attack = parseInt(attack);
        this.defense = parseInt(defense);
        this.sattack = parseInt(sattack);
        this.sdefense = parseInt(sdefense);
        this.level = parseInt(level);
    }
}