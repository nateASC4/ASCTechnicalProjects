//Pokemon Classes
var arceus = new Pokemon("Arceus","Normal",400, 372, 372, true)
var charizard = new Pokemon("Charizard","Fire Flying", "200", 198, 164, false)
if{
    console.log(TypeError)

} else {
    charizard = "200"
    console.log(TypeError);


class Pokemon {
	static all;
	constructor(name, type, hp, def, atk, legend) {
		// Check the errors 
		if (typeof name === "string") {
			this.name = name;
		} else {
			throw new error(`The parameter for NAME is not of type 'string'. ` +
			 `You entered ${name} which is of type '${typeof name}'.`);
		}
        if (typeof hp === 'number') {
			this.hp = hp;
		} else {
			throw new Error(`The parameter for NUMBER is not of type 'number'. ` +
             `You entered ${hp} which is of type '${typeof number}'.`);
        }
		if (typeof type === 'string') {
			this.type = type;
		} else {
			throw new error(`The parameter for TYPE is not of type 'string'. ` +
			 `You entered ${type} which is '${typeof type}'.`);
		}
		
		if (typeof def === 'number') {
			this.def = def;
		} else {
			throw new Error(`The parameter for DEF is not of type 'number'. ` +
			 `You entered ${def} which is of type '${typeof def}'.`);
		}

		if (typeof atk === 'number') {
			this.atk = atk;
		} else {
			throw new Error(`The parameter for ATK is not of type 'number'. ` +
			 `You entered ${atk} which is of type '${typeof atk}'.`);
		}

		if (typeof legend === 'boolean') {
			this.legend = legend;
		} else {
			throw new Error(`The parameter for LEGEND is not of type 'boolean'. ` +
			 `You entered ${legend} which is of type '${typeof legend}'.`);
		}

		all.push(this);
	}

	// These are the functions to return
	getName() {
		return this.name;
	}
	getHp() {
		return this.hp;
	}
	getType() {
        return this.name;
	}
	getAtk() {
		return this.atk;
	}
    getDef(){
        return this.def;
	}
	getLegend() {
		return this.legend;
	}

	// Set the functions
	setName(newName) {
		this.name = newName;
    }
    setHp(newHp) {
        this.hp = newHp;
    }
	setType(newType) {
		this.type = newType;
    }
    setAtk(newAtk) {
        this.atk = newAtk;
    }
	setDef(newDef) {
		this.def = newDef;
	}
	setLegend(newLegend) {
		this.legend = newLegend;
	}

	// Attack functions for the battle 
	attack(target) {
		if (target Pokemon) {
			throw new Error(`attack() method must be used 'Pokemon'.`)
		}
        
        let yourPokemonHp = target.getHp(); // Get target Pokemon's hp value
		let yourPokemonAtk = this.getAtk(); // Get current Pokemon's atk value
		let yourPokemonDef = target.getDef(); // Get target Pokemon's def value

		return target.setHp(targetPokemonHp - (yourPokemonAtk - targetPokemonDef));
	}

	// AliveCheck Method
	AliveCheck() {
		return (this.getHp() > 0);
	}
}