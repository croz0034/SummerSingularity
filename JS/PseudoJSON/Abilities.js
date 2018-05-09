let abilities =[
    {"name": "quickFix"},
    // I Forgot that Arrays start at 0, not 1. This spacer will 'fix' that.
    {
		"name": "Abeyance",
		"class/level": [{
			"Healer": 5
		}],
		"type": 0,
		"school": 7,
		"range": 0,
		"incant": ["The strength of the aether is mine to evoke.", 3],
		"materials": ["green ", 0],
		"effect": "target is Stunned for 60 seconds.",
		"limitations": "",
		"note": "Ignores armor",
		"statelink": 7,
        "id": 1
	},

	{
		"name": "Adaptive Blessing",
		"class/level": [{
			"Healer": 2
		}, {
			"Scout": 6
		}],
		"type": 1,
		"school": 4,
		"range": 2,
		"incant": ["I enchant thee with this blessinng", 1],
		"materials": ["white ", 1],
		"effect": "Bearer becomes Resistant to one of the following schools: Death, Flame, Subdual, Command, Sorcery. School is chosen at the time of casting",
		"limitations": "May not be worn with any other Enchantments from the Protection School",
		"note": "Does not count towards a players Enchantment limit",
		"statelink": 9,
        "id": 2
	},

	{
		"name": "Adaptive Protection",
		"class/level": [{
			"Healer": 3
		}],
		"type": 1,
		"school": 4,
		"range": 2,
		"incant": ["I enchant thee with this protection", 1],
		"materials": ["white ", 1],
		"effect": "Bearer becomes immune to one of the following schools: Death, Flame, Subdual, Command, Sorcery. School is chosen at the time of casting",
		"limitations": "",
		"note": "",
		"statelink": 3,
        "id": 3
	},

	{
		"name": "Adrenaline",
		"class/level": [{
			"Barbarian": 3
		}],
		"type": 2,
		"school": 6,
		"range": 1,
		"incant": ["Adrenaline", 1],
		"materials": "",
		"effect": "Player heals a wound.",
		"limitations": "Kill Trigger",
		"note": "",
		"statelink": "",
        "id": 4
	},

	{
		"name": "Agoraphobia",
		"class/level": [{
			"Bard": 5
		}],
		"type": 2,
		"school": 0,
		"range": 3,
		"incant": ["I command thee to be alone", 3],
		"materials": "",
		"effect": "Target must remain at least 20 away from all other players unless forced there by another Magic or Ability. Lasts 30 seconds.",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 5
	},
	{
		"name": "Amplification",
		"class/level": [{
			"Bard": 4
		}],
		"type": 7,
		"school": 5,
		"range": 3,
		"incant": ["My power amplifies thine", 1],
		"materials": "",
		"effect": "Target player’s next Verbal magic is affected as per Extension.",
		"limitations": "May not be used on the caster.",
		"note": "",
		"statelink": "",
        "id": 6
	},
	{
		"name": "Ambulant",
		"class/level": [{
			"Bard": 5
		}, {
			"Druid": 5
		}, {
			"Healer": 5
		}, {
			"Wizard": 5
		}],
		"type": 5,
		"school": 3,
		"range": "",
		"incant": ["Ambulant", 1],
		"materials": "",
		"effect": "An incantation may be said while moving. May be cast while moving",
		"limitations": "May not be used on the Charge incantation.",
		"note": "",
		"statelink": "",
        "id": 7
	},
	{
		"name": "Ancestral Armor",
		"class/level": [{
			"Warrior": 6
		}, {
			"Healer": 6
		}],
		"type": 1,
		"school": 4,
		"range": 2,
		"incant": ["May this armor protect you from all forms of harm. May the flames of the fire not burn you. May the bolts from the heavens not strike you. May the arrows of your enemies not pierce you. May this armor protect you from all forms of harm.", 1],
		"materials": ["white ", 1],
		"effect": "The effects of a Magic Ball, projectile, or weapon which just struck armor worn by the player are ignored, even if the object would not otherwise affect the armor. The armor loses one point of value in the location struck. This effect will not trigger if the armor has no points left in the location struck. Ancestral Armor is not expended after use and will continue to provide protection until removed with Dispel Magic or similar magic or abilities.",
		"limitations": "Phase Arrow and Phase Bolt interact with armor worn by the bearer as though Ancestral Armor was not present",
		"note": "Abilities that ignore armor do not trigger Ancestral Armor",
		"statelink": "",
        "id": 8
	},
	{
		"name": "Assassinate",
		"class/level": [{
			"Assassin": 1
		}],
		"type": 2,
		"school": 1,
		"range": 3,
		"incant": ["Say the word “Assassinate” immediately upon killing a person.", 1],
		"materials": "",
		"effect": "The victim is Cursed",
		"limitations": "",
		"note": "",
		"statelink": 0,
        "id": 9
	},
	{
		"name": "Astral Intervention",
		"class/level": [{
			"Healer": 3
		}, {
			"Wizard": 2
		}],
		"type": 2,
		"school": 0,
		"range": 3,
		"incant": ["I command thee to retreat into the aether", 3],
		"materials": "",
		"effect": "Target player becomes Insubstantial for 30 seconds.",
		"limitations": "",
		"note": "",
		"statelink": 4,
        "id": 10
	},
	{
		"name": "Attuned",
		"class/level": [{
			"Druid": 3
		}],
		"type": 1,
		"school": 5,
		"range": 2,
		"incant": ["I enchant thee with attune", 3],
		"materials": ["white ", 1],
		"effect": "May wear an additional Enchantment. Attuned does not count towards the bearer’s Enchantment limit",
		"limitations": "This ability may not be used in conjunction with any other similar ability or magic.",
		"note": "",
		"statelink": "",
        "id": 11
	},
	{
		"name": "Avatar of Nature",
		"class/level": [{
			"Druid": 6
		}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": "All the casters Enchantments of level 4 and below are  now range Self instead of their previous range. Does not apply to Golem",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 12
	},
	{
		"name": "Awe",
		"class/level": [{
			"Bard": 3
		}, {"Paladin": 0},{"Antipaladin": 0}, {"Paladin": 5},{"Antipaladin": 5}],
		"type": 2,
		"school": 0,
		"range": 3,
		"incant": ["I command thee awed", 3],
		"materials": "",
		"effect": "Target may not attack or cast magic at the caster. Target must remain at least 20 feet away from the caster unless forced there by another Magic or Ability. Lasts 30 seconds.",
		"limitations": "",
		"note": "If the caster attacks or begins casting another magic at the target, this spell’s effect is negated.",
		"statelink": "",
        "id": 13
	},
	{
		"name": "Banish",
		"class/level": [{
			"Healer": 1
		}, {
			"Wizard": 1
		}],
		"type": 2,
		"school": 6,
		"range": 3,
		"incant": ["The spirits banish thee from this place", 3],
		"materials": "",
		"effect": "Target Insubstantial player must return to their respawn location where their Insubstantial State immediately ends.",
		"limitations": "",
		"note": "A player bearing Undead Minion or Greater Undead Minion who is currently Insubstantial has their Enchantment removed.",
		"statelink": 4,
        "id": 14
	},
	{
		"name": "Barkskin",
		"class/level": [{
			"Druid": 1
		}],
		"type": 1,
		"school": 4,
		"range": 3,
		"incant": ["I enchant thee with barkskin", 3],
		"materials": ["white ", 1],
		"effect": "Bearer gains one point of Magic Armor.",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 15
	},
	{
		"name": "Battlefield Triage",
		"class/level": [{
			"Bard": 3
		}],
		"type": 1,
		"school": 6,
		"range": 2,
		"incant": ["Be a bastion of healing", 3],
		"materials": ["4 yellow ", 1],
		"effect": "Bearer is Stopped. Bearer may cast Greater Heal by announcing \" \'Player\' thou art made whole.\" Bearer must remove an Enchantment strip after each use of Greater Heal.",
		"limitations": "Battlefield Triage is removed when the last strip is removed.",
		"note": "",
		"statelink": 6,
        "id": 16
	},
	{
		"name": "Battlemage",
		"class/level": [{
			"Wizard": 6
		}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": "Use of Ambulant becomes unlimited.",
		"limitations": "May not purchase Enchantments or Magic Balls.",
		"note": "",
		"statelink": "",
        "id": 17
	},
	{
		"name": "Bear Strength",
		"class/level": [{
			"Druid": 3
		}],
		"type": 1,
		"school": 5,
		"range": 2,
		"incant": ["I enchant thee with the strength of the bear", 3],
		"materials": ["red ", 1],
		"effect": "Bearer’s melee weapons are Shield Crushing.",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 18
	},
	{
		"name": "Berserk",
		"class/level": [{
			"Barbarian": 1
		}],
		"type": 1,
		"school": 5,
		"range": 1,
		"incant": "",
		"materials": ["red ", 1],
		"effect": "All weapons wielded in melee are Armor Breaking",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 19
	},
	{
		"name": "Blessed Aura",
		"class/level": [{
			"Healer": 5
		}],
		"type": 1,
		"school": 4,
		"range": 2,
		"incant": ["I enchant they person, arms, and armour", 3],
		"materials": ["white ", 1],
		"effect": "Resistant to all effects from the next source which would inflict a Wound, Death, State, or negatively affect them or their equipment. Does not trigger against effects cast by the player.",
		"limitations": "",
		"note": "",
		"statelink": 9,
        "id": 20
	},
	{
		"name": "Blessing Against Harm",
		"class/level": [{
			"Healer": 4
		}],
		"type": 1,
		"school": 4,
		"range": 2,
		"incant": ["I enchant thee against all harm", 3],
		"materials": ["white ", 1],
		"effect": "Resistant to all effects from the next source which would inflict a Wound, Death, State, or other negative effect. Does not trigger against effects cast by the player",
		"limitations": "",
		"note": "",
		"statelink": 9,
        "id": 21
	},
	{
		"name": "Blessing Against Wounds",
		"class/level": [{
			"Healer": 1
		}],
		"type": 1,
		"school": 4,
		"range": 2,
		"incant": ["I enchant thee against wounds", 3],
		"materials": ["white ", 1],
		"effect": "Resistant to Wounds.",
		"limitations": "May not be worn with any other Enchantments from the Protection School",
		"note": "Does not count towards a players Enchantment limit",
		"statelink": 9,
        "id": 22
	},
	{
		"name": "Blink",
		"class/level": [{
			"Assassin": 3
		}],
		"type": 2,
		"school": 5,
		"range": 1,
		"incant": ["I vanish from sight", 1],
		"materials": "",
		"effect": "Player becomes insubstantial and can move to any location within 50 feet from their starting point",
		"limitations": "Caster may not end State within 10 feet of a living enemy",
		"note": "",
		"statelink": 4,
        "id": 23
	},
	{
		"name": "Blood and Thunder",
		"class/level": [{
			"Barbarian": 0
		},{
			"Barbarian": 6
		}],
		"type": 2,
		"school": 6,
		"range": 1,
		"incant": ["Blood and Thunder!", 1],
		"materials": ["white ", 1],
		"effect": "Player gains Blessing Against Wounds.",
		"limitations": "Kill Trigger",
		"note": "Player must still wear a white strip to denote Blessing Against Wounds.",
		"statelink": 9,
        "id": 24
	},
	{
		"name": "Break Concentration",
		"class/level": [{
			"Bard": 3
		}, {
			"Wizard": 2
		}],
		"type": 2,
		"school": 0,
		"range": 3,
		"incant": ["I command thee suppressed", 1],
		"materials": "",
		"effect": "Target player is suppressed for 10 seconds.",
		"limitations": "",
		"note": "",
		"statelink": 8,
        "id": 25
	},
	{
		"name": "Brutal Strike",
		"class/level": [{
			"Barbarian": 5
		}, {
			"Antipaladin": 4
		}],
		"type": 2,
		"school": 1,
		"range": 5,
		"incant": ["And stay down!", 1],
		"materials": "",
		"effect": "Victim is Cursed. Victim is also Suppressed for 30 seconds",
		"limitations": "Wound Trigger.",
		"note": "",
		"statelink": [0, 8],
        "id": 26
	},
	{
		"name": "Call Lightning",
		"class/level": [{
			"Druid": 6
		}],
		"type": 2,
		"school": 2,
		"range": 3,
		"incant": ["I call lightning's flame to strike thee", 3],
		"materials": "",
		"effect": "Target player dies.",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 27
	},
	{
		"name": "Cancel",
		"class/level": [{
			"Bard": 1
		}, {
			"Druid": 1
		}, {
			"Healer": 1
		}, {
			"Wizard": 1
		}],
		"type": 4,
		"school": 3,
		"range": 2,
		"incant": ["My work shall be undone", 3],
		"materials": "",
		"effect": "Remove an Enchantment cast by the caster",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 28
	},
	{
		"name": "Circle of Protection",
		"class/level": [{
			"Healer": 4
		}],
		"type": 1,
		"school": 4,
		"range": 1,
		"incant": ["Circle of Protection", 2],
		"materials": ["none ", 2],
		"effect": "The caster and up to five willing players in physical contact with the caster become Insubstantial. The caster may end Circle of Protection at any time by ending his Insubstantial State with the standard Incantation. If the caster stops being Insubstantial by any means, the Enchantment ends. Players under the effect of Circle of Protection may use magic and abilities on players under the effect of the same Circle of Protection as though they were not Insubstantial",
		"limitations": "",
		"note": "Effects which would normally remove the Insubstantial State (Tracking, Release, etc) will remove this Enchantment.",
		"statelink": 4,
        "id": 29
	},
	{
		"name": "Combat Caster",
		"class/level": [{
			"Bard": 6
		}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": "Does not require an empty hand to cast Magic.",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 30
	},
	{
		"name": "Confidence",
		"class/level": [{
			"Bard": 1
		}],
		"type": 2,
		"school": 5,
		"range": 2,
		"incant": ["My power grants thee confidence", 1],
		"materials": "",
		"effect": "Target player may instantly Charge a single Magic or Ability",
		"limitations": "May not be used on self. May not be used within 20’ of a living enemy",
		"note": "",
		"statelink": "",
        "id": 31
	},
	{
		"name": "Contagion",
		"class/level": [{
			"Wizard": 5
		}],
		"type": 1,
		"school": 1,
		"range": 2,
		"incant": ["May thou bear this plague to all", 3],
		"materials": ["red ", 1],
		"effect": "All melee weapons wielded by player are Wounds Kill. Bearer is Fragile",
		"limitations": "",
		"note": "",
		"statelink": 1,
        "id": 32
	},
	{
		"name": "Corrosive Mist",
		"class/level": [{
			"Druid": 1
		}],
		"type": 1,
		"school": 1,
		"range": 2,
		"incant": ["The mists of corrosion surround thee", 3],
		"materials": ["5 red ", 1],
		"effect": "Bearer is Stopped. Bearer may cast Destroy Armor by announcing \" \'Player\' the mists of corrosion destroy your \'armor location\' armor.\" Bearer must remove a strip after each use of Destroy Armor.",
		"limitations": "",
		"note": "Corrosive Mist is removed when the last strip is removed.",
		"statelink": 6,
        "id": 33
	},
	{
		"name": "Coup de Grace",
		"class/level": [{
			"Assassin": 6
		}],
		"type": 2,
		"school": 1,
		"range": 3,
		"incant": ["Death shall come for thee", 3],
		"materials": "",
		"effect": "Target player dies.",
		"limitations": "Target must be Wounded when the caster begins the Incantation. Although it still functions even if they are healed by the end of the Incantation.",
		"note": "",
		"statelink": "",
        "id": 34
	},
	{
		"name": "Dervish",
		"class/level": [{
			"Bard": 6
		}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": "Each Verbal purchased gives double the uses",
		"note": "Example: 1/Life Charge x3 becomes 2/life Charge x3, 2/life becomes 4/life, 1/Refresh becomes 2/Refresh.",
		"limitations": "Equipment costs are doubled.",
		"statelink": "",
        "id": 35
	},
	{
		"name": "Destroy Armor",
		"class/level": [{
			"Wizard": 4
		}],
		"type": 2,
		"school": 1,
		"range": 3,
		"incant": ["Death destroys thy [hit location] armour", 3],
		"materials": "",
		"effect": "Armor on target hit location is subjected to Armor Destroying.",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 36
	},
	{
		"name": "Destruction Arrow",
		"class/level": [{"Archer": 0},{"Archer": 1},{"Archer": 3},{"Archer": 5}],
		"type": 3,
		"school": 5,
		"range": 7,
		"incant": ["Destruction arrow", 1],
		"materials": ["Arrow with red cover labeled \'Destruction\'."],
		"effect": "This arrow is Armor Destroying and Shield Destroying. Armor Destroying and Shield Destroying are applied after the normal effect of being hit with an arrow is applied.",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 37
	},
	{
		"name": "Dimensional Rift",
		"class/level": [{
			"Wizard": 4
		}],
		"type": 2,
		"school": 5,
		"range": 2,
		"incant": ["The power of the aether consumes thee", 3],
		"materials": "",
		"effect": "Target Insubstantial player dies.",
		"limitations": "",
		"note": "",
		"statelink": 4,
        "id": 38
	},
	{
		"name": "Discordia",
		"class/level": [{
			"Bard": 5
		}],
		"type": 1,
		"school": 0,
		"range": 1,
		"incant": ["My discordant melodies shall stymie my foes", 3],
		"materials": ["5 red ", 1],
		"effect": "Bearer may cast Break Concentration by announcing \" \'Player\' thou art suppressed\" and removing an enchantment strip.",
		"limitations": "Discordia is removed when the last strip is removed.",
		"note": "",
		"statelink": 8,
        "id": 39
	},
	{
		"name": "Dispel Magic",
		"class/level": [{
			"Scout": 3
		}, {
			"Druid": 3
		}, {
			"Healer": 5
		}, {
			"Wizard": 3
		}],
		"type": 2,
		"school": 5,
		"range": "3",
		"incant": ["By my power I dispel that magic", 3],
		"materials": "",
		"effect": "All Enchantments on target are removed.",
		"limitations": "",
		"note": "Will work through Protection from Magic, Enlightened Soul, Sanctuary, and similar magics and abilities. Will work on players that are Frozen or Insubstantial.",
		"statelink": "",
        "id": 40
	},
	{
		"name": "Dragged Below",
		"class/level": [{
			"Wizard": 3
		}],
		"type": 2,
		"school": 1,
		"range": 3,
		"incant": ["Death comes for thee from below", 3],
		"materials": "",
		"effect": "Target Stopped player dies.",
		"limitations": "",
		"note": "",
		"statelink": 6,
        "id": 41
	},
	{
		"name": "Elemental Barrage",
		"class/level": [{
			"Wizard": 6
		}],
		"type": 2,
		"school": 5,
		"range": 1,
		"incant": ["I am filled with the power of magic", 1],
		"materials": "",
		"effect": "Caster may use Magic Balls they are currently carrying by stating the name of the Magic Ball immediately prior to throwing the ball in place of the incantation.",
		"limitations": "This magic ends if the caster picks up any additional Magic Balls or begins casting any new magic",
		"note": "The effect is not an incantation, and so is not stopped by suppression, and may be used while moving, etc.",
		"statelink": "",
        "id": 42
	},
	{
		"name": "Empower",
		"class/level": [{
			"Bard": 2
		}],
		"type": 2,
		"school": 5,
		"range": 2,
		"incant": ["I empower thee", 1],
		"materials": "",
		"effect": "Target player regains one use of any per-life Ability or Magic they have expended.",
		"limitations": ": Does not function on Empower, Confidence, Restoration, or similar Magic and Abilities. May not be used on the caster.",
		"note": "Does not allow a player to have more than his maximum uses of a Magic or Ability.",
		"statelink": "",
        "id": 43
	},
	{
		"name": "Enlightened Soul",
		"class/level": [{
			"Healer": 5
		}, {
			"Monk": 1
		}],
		"type": 1,
		"school": 4,
		"range": 2,
		"incant": ["A distant magic has no hold upon thy now enlightened soul", 3],
		"materials": ["white ", 1],
		"effect": "Player is unaffected by Verbal magic used at a Range greater than Touch",
		"limitations": "Affects beneficial magic as well as harmful magic. Does not affect (ex) abilities",
		"note": "",
		"statelink": "",
        "id": 44
	},
	{
		"name": "Entangle",
		"class/level": [{
			"Druid": 1
		}, {
			"Healer": 2
		}, {
			"Wizard": 2
		}],
		"type": 0,
		"school": 7,
		"range": 0,
		"incant": ["The strength of earth is mine to evoke", 3],
		"materials": ["brown ", 0],
		"effect": "Target is Stopped for 60 seconds.",
		"limitations": "",
		"note": "Engulfing",
		"statelink": 6,
        "id": 45
	},
	{
		"name": "Equipment: Armor, 1 Point",
		"class/level": [{
			"Bard": 2
		}, {
			"Bard": 6
		}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": "Your class maximum armor limit increases one additional point",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 46
	},
	{
		"name": "Equipment: Shield, Medium",
		"class/level": [{
			"Bard": 5
		}, {
			"Healer": 3
		}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": "May wield up to a medium shield.",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 47
	},
	{
		"name": "Equipment: Shield, Small",
		"class/level": [{
			"Bard": 3
		}, {
			"Druid": 2
		}, {
			"Healer": 1
		}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": "May wield a small shield.",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 48
	},
	{
		"name": "Equipment: Weapon, Great",
		"class/level": [{
			"Druid": 5
		}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": "May wield one Great weapon at a time for each instance purchased (but may carry extras).",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 49
	},
	{
		"name": "Equipment: Weapon, Hinged",
		"class/level": [{
			"Healer": 2
		}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": "May wield one Hinged weapon at a time for each instance purchased (but may carry extras).",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 50
	},
	{
		"name": "Equipment: Weapon, Long",
		"class/level": [{
			"Bard": 4
		}, {
			"Druid": 4
		}, {
			"Wizard": 5
		}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": "May wield one Long weapon at a time for each instance purchased (but may carry extras).",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 51
	},
	{
		"name": "Equipment: Weapon, Short",
		"class/level": [{
			"Bard": 1
		}, {
			"Druid": 1
		}, {
			"Healer": 1
		}, {
			"Wizard": 1
		}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": "May wield one Short weapon at a time for each instance purchased (but may carry extras).",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 52
	},
	{
		"name": "Essence Graft",
		"class/level": [{
			"Druid": 5
		}],
		"type": 1,
		"school": 5,
		"range": 2,
		"incant": ["Open up and recieve my power", 3],
		"materials": ["yellow ", 1],
		"effect": "Bearer may wear up to three additional Enchantments. Essence Graft does not count towards the bearer’s Enchantment limit",
		"limitations": "Bearer may only wear Enchantments from the caster of Essence Graft. This ability may not be used in conjunction with any other similar ability or magic.",
		"note": "",
		"statelink": "",
        "id": 53
	},
	{
		"name": "Evoker",
		"class/level": [{
			"Wizard": 6
		}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": "Verbals purchased may only be of range Touch or Self. Elemental Barrage becomes Charge x10.",
		"limitations": "",
		"note": "Elemental Barrage must still be purchased.",
		"statelink": "",
        "id": 54
	},
	{
		"name": "Evolution",
		"class/level": [{
			"Scout": 4
		}],
		"type": 1,
		"school": 5,
		"range": 1,
		"incant": "",
		"materials": "",
		"effect": "May wear an additional Enchantment. Evolution does not count towards the bearer’s Enchantment limit.",
		"limitations": "",
		"note": "This ability does work in conjunction with Attuned or Essence Graft so long as the other limitations of those Enchantments are followed.",
		"statelink": "",
        "id": 55
	},
	{
		"name": "Experienced",
		"class/level": [{
			"Bard": 1
		}, {
			"Druid": 1
		}, {
			"Healer": 1
		}, {
			"Wizard": 1
		}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": "A single per-life Verbal purchased becomes Charge x5 in addition to the normal frequency OR a single perrefresh Verbal purchased becomes Charge x10 in addition to the normal frequency. This Verbal must be determined before the game begins and cannot be changed.",
		"limitations": "Verbal must be 4th level or lower.",
		"note": "",
		"statelink": "",
        "id": 56
	},
	{
		"name": "Extend Immunities",
		"class/level": [{
			"Paladin": 3
		}],
		"type": 1,
		"school": 4,
		"range": 2,
		"incant": ["May the blessing of my god protect thee", 3],
		"materials": ["white ", 1],
		"effect": "The target player gains either Resistant to Command or Resistant to Death chosen at the time of casting.",
		"limitations": "The caster may only have one instance of Extend Immunities active at a time.",
		"note": "",
		"statelink": 9,
        "id": 57
	},
	{
		"name": "Extension",
		"class/level": [{
			"Bard": 3
		}, {
			"Druid": 3
		}, {
			"Healer": 3
		}, {
			"Wizard": 3
		}],
		"type": 5,
		"school": 3,
		"range": 1,
		"incant": ["Extension", 1],
		"materials": "",
		"effect": "Verbal becomes 50 feet. Only works on Verbals with a range of 20 feet",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 58
	},
	{
		"name": "Fight After Death",
		"class/level": [{
			"Barbarian": 2
		},{
			"Barbarian": 4
		}],
		"type": 2,
		"school": 5,
		"range": 1,
		"incant": ["say \"Fight after death\" immediately after dying", 1],
		"materials": "",
		"effect": "Player continues to fight for seven seconds after being killed. Players must Chant this time out loud. As per Chanting, failure to count immediately ends the effect. Players do not receive further Wounds during Fight After Death. Players melee weapons are Shield Crushing.",
		"limitations": "Players may not activate Abilities or Magic during Fight After Death. Players may not activate Fight After Death if they died while Suppressed, Stunned, Insubstantial, or Frozen. States on the player (Such as Stopped) persist until Fight After Death has ended and are then removed as per the rules for player death. Players may not achieve game objectives nor carry game items while affected by Fight After Death, though they may still kill other players even if that player is a game objective.",
		"note": "Reeves are encouraged to remove this ability from those who use it in an unsafe manner.",
		"statelink": "",
        "id": 59
	},
	{
		"name": "Finger of Death",
		"class/level": [{
			"Wizard": 6
		}],
		"type": 2,
		"school": 1,
		"range": 3,
		"incant": ["I call upon death to smite thee", 3],
		"materials": "",
		"effect": "Target player dies.",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 60
	},
	{
		"name": "Fireball",
		"class/level": [{
			"Wizard": 4
		}],
		"type": 0,
		"school": 2,
		"range": 0,
		"incant": ["The flame of fire is mine to evoke", 3],
		"materials": ["red ", 0],
		"effect": ["Fireball will have one of the following effects on the object first struck:", "<br> 1. A weapon hit is destroyed <br> 2. A shield hit is subject to Shield Destroying <br> 3. Armor hit with Armor Points remaining is subject to Armor Destroying. <br>4. A player hit receives a Wounds Kill Wound to that hit location."],
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 61
	},
	{
		"name": "Flame Blade",
		"class/level": [{
			"Druid": 4
		}],
		"type": 1,
		"school": 2,
		"range": 2,
		"incant": ["The element of fire shall infuse your weapons", 3],
		"materials": ["1 red 1 white ", 1],
		"effect": "Bearer’s melee weapons are Armor Breaking and Shield Crushing. Bearer and their weapons are Immune to Flame.",
		"limitations": "",
		"note": "",
		"statelink": 3,
        "id": 62
	},
	{
		"name": "Force Barrier",
		"class/level": [{
			"Wizard": 1
		}],
		"type": 2,
		"school": 5,
		"range": 1,
		"incant": ["I shall not be harmed", 1],
		"materials": "",
		"effect": "Player is Frozen for 30 seconds.",
		"limitations": "",
		"note": "",
		"statelink": 2,
        "id": 63
	},
	{
		"name": "Force Bolt",
		"class/level": [{
			"Druid": 4
		}, {
			"Wizard": 1
		}],
		"type": 0,
		"school": 5,
		"range": 0,
		"incant": ["Forcebolt", 3],
		"materials": ["blue ", 0],
		"effect": ["Force Bolt will have one of the following effects on the object first struck: <br> 1. A weapon hit is destroyed <br> 2. Armor hit with Armor Points remaining is subject to Armor Breaking. <br> 3. A player hit receives a Wound to that hit location"],
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 64
	},
	{
		"name": "Gift of Air",
		"class/level": [{
			"Druid": 5
		}],
		"type": 1,
		"school": 4,
		"range": 2,
		"incant": ["I grant thee a gift of the air", 3],
		"materials": ["white ", 1],
		"effect": "The effects of a melee weapon or projectile which just struck the bearer are ignored, instead the bearer announces “Gift of Air” and becomes Insubstantial. If the bearer is wearing armor it is affected as normal in addition to triggering Gift of Air. Bearer may choose to return directly to their respawn location immediately after Gift of Air activates. Melee weapons with the Armor Breaking, Armor Destroying, Shield Crushing, or Shield Destroying Special Effects will affect the bearer as normal and do not trigger Gift of Air.",
		"limitations": "Bearer may not wield weapons or shields.",
		"note": "Bearer may end the Insubstantial state caused by Gift of Air at any time with the standard Incantation.",
		"statelink": 4,
        "id": 65
	},
	{
		"name": "Gift of Earth",
		"class/level": [{
			"Druid": 2
		}],
		"type": 1,
		"school": 4,
		"range": 2,
		"incant": ["I grant thee a gift of the earth", 3],
		"materials": ["white ", 1],
		"effect": "Bearer gains two points of magic armor and is affected as per Greater Harden.",
		"limitations": "Bearer is Suppressed.",
		"note": "",
		"statelink": 8,
        "id": 66
	},
	{
		"name": "Gift of Fire",
		"class/level": [{
			"Druid": 3
		}],
		"type": 1,
		"school": 2,
		"range": 2,
		"incant": ["I grant the a gift of the fire", 3],
		"materials": ["1 red and 1 white ", 1],
		"effect": "Bearer is Immune to Flame and gains Heat Weapon 1/Refresh Charge x3.",
		"limitations": "",
		"note": "",
		"statelink": 3,
        "id": 67
	},
	{
		"name": "Gift of Water",
		"class/level": [{
			"Druid": 4
		}],
		"type": 1,
		"school": 5,
		"range": 2,
		"incant": ["I grant thee a gift of the water", 3],
		"materials": ["1 white and 1 yellow ", 1],
		"effect": "Bearer gains one point of magic armor and Heal (selfonly) unlimited.",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 68
	},
	{
		"name": "Golem",
		"class/level": [{
			"Druid": 4
		}],
		"type": 1,
		"school": 5,
		"range": 2,
		"incant": ["From earth and clay I form thee", 3],
		"materials": ["1 red and 1 white ", 1],
		"effect": "Bearer is Immune to Death. Bearer is Cursed. Bearer can remove a Wound via Mend. Bearer may use the caster as an alternate respawn point while the caster is alive. Non-magical armor worn affected as per Imbue Armor. All Enchantments worn by the Bearer, including Golem are Persistent while Golem is worn.",
		"limitations": "A caster may only have a single Golem Enchantment active at a time",
		"note": "Greater Mend and Word of Mending will not remove a wound.",
		"statelink": [0, 3],
        "id": 69
	},
	{
		"name": "Grasping Tentacles",
		"class/level": [{
			"Druid": 6
		}],
		"type": 1,
		"school": 0,
		"range": 1,
		"incant": ["The hands of the earth rise to your bidding", 3],
		"materials": ["5 red ", 1],
		"effect": "Bearer is Stopped. Bearer may cast Hold Person by announcing \" \'Player\' stop at my command.\" Bearer must remove an Enchantment strip after each use of Hold Person",
		"limitations": "",
		"note": "Grasping Tentacles is removed when the last strip is removed.",
		"statelink": 6,
        "id": 70
	},
	{
		"name": "Greater Harden",
		"class/level": [{
			"Healer": 3
		}],
		"type": 1,
		"school": 4,
		"range": 2,
		"incant": ["I enchant thee with Greater Harden", 3],
		"materials": ["white ", 1],
		"effect": "Shields and weapons wielded by the player are affected as per Harden. May only be cast on a player.",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 71
	},
	{
		"name": "Greater Heal",
		"class/level": [{
			"Healer": 4
		}],
		"type": 2,
		"school": 6,
		"range": 2,
		"incant": ["By the grace of the divine thou art healed", 5],
		"materials": "",
		"effect": "All wounds are healed. Ignores the Cursed State.",
		"limitations": "",
		"note": "",
		"statelink": 0,
        "id": 72
	},
	{
		"name": "Greater Mend",
		"class/level": [{
			"Druid": 3
		}, {
			"Wizard": 3
		}],
		"type": 2,
		"school": 5,
		"range": 2,
		"incant": ["Return this \'object name\' to its former glory", 5],
		"materials": "",
		"effect": "Will repair a destroyed item or restore all armor points in one location",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 73
	},
	{
		"name": "Greater Release",
		"class/level": [{
			"Bard": 2
		}, {
			"Healer": 2
		}],
		"type": 2,
		"school": 5,
		"range": 3,
		"incant": ["From all thine afflictions thou art released", 2],
		"materials": "",
		"effect": "All ongoing effects and States are removed from the target. The caster may choose to leave some States or effects in place",
		"limitations": "",
		"note": "Greater Release may target Dead players. When used to end a State or Ongoing Effect imposed by a magic or ability with multiple effects, all other States and Ongoing Effects from the same source are also ended.",
		"statelink": [1, 2, 3, 4, 5, 6, 7, 8, 9],
        "id": 74
	},
	{
		"name": "Greater Resurrect",
		"class/level": [{
			"Healer": 5
		}],
		"type": 2,
		"school": 6,
		"range": 2,
		"incant": ["By the grace of the divine thou art resurrected", 5],
		"materials": "",
		"effect": "Target Dead player is returned to life. Enchantments on the player are retained. Any wounds on the player are healed. Works regardless of any States on the target.",
		"limitations": "",
		"note": "Dead players that move after dying may only return to play via respawn unless otherwise noted. (p7)",
		"statelink": "",
        "id": 75
	},
	{
		"name": "Greater Undead Minion",
		"class/level": [{
			"Healer": 5
		}],
		"type": 1,
		"school": 1,
		"range": 2,
		"incant": ["Flesh rots, bones break, skulls sigh, spirits take let the power of my will descend on thee let the power of my will restore thy spirit let the power of my will knit thy corpse let the power of my will give thee direction let the power of my will cheat thy death by the power of my will, arise my greater minion!", 1],
		"materials": ["yellow ", 1],
		"effect": ["1. Bearer does not die or respawn as normal. <br> 2. Bearer is Cursed and Suppressed. <br> 3. When the bearer would normally die, they instead become Insubstantial, remove all Wounds, and must return to the caster as soon as possible. Insubstantial players may not move more than 10’ from the caster and may not speak. The caster may touch the player and then Incant “Rise and fight again” x5 to end this Insubstantial State so long as no living enemies are within 10’ of the bearer.", "4. If this Enchantment’s Insubstantial is removed from the Bearer in any other manner than outlined in item 3 (or prevented entirely) this Enchantment is removed. <br> 5. If the caster dies, this Enchantment is removed the next time the bearer returns to the caster. <br> 6. If the Enchantment is removed, the bearer dies.", "7. For the duration of the Enchantment, the Caster is considered the players respawn.", "8. Dead players may be targeted by Greater Undead Minion and are immediately returned to life with all Wounds removed and the Insubstantial State applied."],
		"limitations": ["1. The Insubstantial State imposed by Greater Undead Minion can be removed or prevented by any Magic or Ability which would normally be capable of removing Insubstantial or preventing Insubstantial such as Tracking, Planar Grounding, Release, or similar Magic and Abilities. <br> 2. This Enchantment is removed by Banish and Dimensional Rift if used on the player while they are Insubstantial. <br> 3. The caster may not have more than three active Greater Undead Minion and Undead Minion Enchantments combined."],
		"note": "",
		"statelink": [0, 4, 8],
        "id": 76
	},
	{
		"name": "Harden",
		"class/level": [{
			"Warrior": 2
		}, {
			"Healer": 1
		}],
		"type": 1,
		"school": 4,
		"range": 2,
		"incant": ["I enchant thee with Harden", 3],
		"materials": ["white ", 1],
		"effect": ": Bearers weapons or shield may only be destroyed by Magic Balls/Verbals which destroy objects e.g. Fireball or Pyrotechnics.",
		"limitations": "Will only affect either the weapons or the shield of the bearer, not both",
		"note": "",
		"statelink": "",
        "id": 77
	},
	{
		"name": "Heal",
		"class/level": [{
			"Scout": 2
		}, {
			"Monk": 4
		},
			{"Scout": 0
		}, {
			"Monk": 0
		}, {
			"Druid": 2
		}, {
			"Healer": 1
		}, {
			"Paladin": 2
		}],
		"type": 2,
		"school": 6,
		"range": 2,
		"incant": ["Sword Cut, spear stab, mace smash, arrow jab, Let the white light of healing descend on thee. Let the white light of healing stop thy spilling blood. Let the white light of healing mend thy bones. Let the white light of healing close thy wounds. Let the white light of healing restore thy vigor. The white light of healing hath healed thee", 1],
		"materials": "",
		"effect": "Target player heals a Wound.",
		"limitations": "",
		"note": "",
		"statelink": 0,
        "id": 78
	},
	{
		"name": "Heart of the Swarm",
		"class/level": [{
			"Bard": 5
		}, {
			"Druid": 5
		}],
		"type": 1,
		"school": 6,
		"range": 1,
		"incant": ["Let all those who oppose the hive feel the wrath of the swarm", 3],
		"materials": ["yellow ", 1],
		"effect": "Bearer is Stopped. Any player on the bearer’s team may use the bearer as their respawn point as per the normal game rules. Players respawning at the caster do so by announcing \"My life for the swarm.\" ",
		"limitations": "Players can not respawn at the bearer if there are living enemy players or a game objective within 20’ of the bearer.",
		"note": "",
		"statelink": 6,
        "id": 79
	},
	{
		"name": "Heat Weapon",
		"class/level": [{
			"Druid": 1
		}, {
			"Wizard": 1
		}],
		"type": 2,
		"school": 2,
		"range": 3,
		"incant": ["I call upon flame to heat that [type of weapon]", 3],
		"materials": "",
		"effect": "Target weapon may not be wielded for 30 seconds. Players who are Immune to Flame may continue to wield the weapon.",
		"limitations": "",
		"note": "",
		"statelink": 3,
        "id": 80
	},
	{
		"name": "Hold Person",
		"class/level": [{
			"Assassin": 4
		}, {
			"Scout": 5
		}, {
			"Healer": 2
		}, {
			"Wizard": 3
		}],
		"type": 2,
		"school": 0,
		"range": 3,
		"incant": ["I command thee to stop", 3],
		"materials": "",
		"effect": "Target player becomes Stopped for 30 seconds.",
		"limitations": "",
		"note": "",
		"statelink": 6,
        "id": 81
	},
	{
		"name": "Ice Ball",
		"class/level": [{
			"Druid": 2
		}, {
			"Healer": 3
		}, {
			"Wizard": 3
		}],
		"type": 0,
		"school": 7,
		"range": 0,
		"incant": ["The strength of ice is mine to evoke", 3],
		"materials": ["white ", 0],
		"effect": "Target is Frozen for 60 seconds.",
		"limitations": "",
		"note": "Engulfing",
		"statelink": 2,
        "id": 82
	},
	{
		"name": "Icy Blast",
		"class/level": [{
			"Druid": 3
		}, {
			"Wizard": 4
		}],
		"type": 2,
		"school": 5,
		"range": 3,
		"incant": ["My power makes thee frozen", 3],
		"materials": "",
		"effect": "Target player becomes Frozen for 30 seconds.",
		"limitations": "",
		"note": "",
		"statelink": 2,
        "id": 83
	},
	{
		"name": "Imbue Armour",
		"class/level": [{
			"Druid": 1
		}],
		"type": 1,
		"school": 4,
		"range": 2,
		"incant": ["I enchant thee with Imbued Armour", 3],
		"materials": ["white ", 1],
		"effect": "All armor worn by the bearer gains a +1 modifier. This modifier may allow the armor to exceed the maximum value for its type, up to the bearer’s class maximum",
		"limitations": "",
		"note": "Does not apply to magic armor. A player may only benefit from one instance of Imbue Armor, or similar magic and abilities that increase Armor Points, at a time",
		"statelink": "",
        "id": 84
	},
	{
		"name": "Imbue Shield",
		"class/level": [{
			"Healer": 4
		}],
		"type": 1,
		"school": 4,
		"range": 2,
		"incant": ["This shield shall neither break or bend", 3],
		"materials": ["white ", 1],
		"effect": "Shield wielded by the player cannot be destroyed. Engulfing effects hitting the shield are ignored.",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 85
	},
	{
		"name": "Imbue Weapon",
		"class/level": [{
			"Druid": 6
		}],
		"type": 1,
		"school": 1,
		"range": 2,
		"incant": ["I enchant thee to slay all foes", 3],
		"materials": ["red ", 1],
		"effect": "Melee weapons wielded by the bearer are Wounds Kill.",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 86
	},
	{
		"name": "Innate",
		"class/level": [{
			"Bard": 2
		}, {
			"Druid": 2
		}, {
			"Healer": 2
		}, {
			"Wizard": 2
		}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": ["Innate", 1],
		"materials": "",
		"effect": "May be used to instantly Charge a single magic by stating the name of the magic.",
		"note": "",
		"statelink": "",
        "id": 87
	},
	{
		"name": "Insult",
		"class/level": [{
			"Warrior": 0
		},{
			"Warrior": 4
		}, {
			"Bard": 1
		}],
		"type": 2,
		"school": 0,
		"range": 3,
		"incant": ["I command thy attention sirrah", 3],
		"materials": "",
		"effect": "Victim is unable to attack or cast magic at anyone other than the caster for 30 seconds. I",
		"limitations": "If the victim of insult is attacked or has magic cast on them by someone other than the caster, the victim of Insult becomes able to choose to attack the offending party as well.",
		"note": "",
		"statelink": "",
        "id": 88
	},
	{
		"name": "Ironskin",
		"class/level": [{
			"Druid": 5
		}],
		"type": 1,
		"school": 4,
		"range": 2,
		"incant": ["I enchant thee with Ironskin", 3],
		"materials": ["white ", 1],
		"effect": "Bearer is Immune to Flame and gains two points Magic Armor affected as per Ancestral Armor.",
		"limitations": "",
		"note": "",
		"statelink": 3,
        "id": 89
	},
	{
		"name": "Legend",
		"class/level": [{
			"Bard": 6
		}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": ": Each Extension purchased gives double the uses. Example: 1/life becomes 2/life. ",
		"limitations": "Swift may not be purchased or used.",
		"note": "",
		"statelink": "",
        "id": 90
	},
	{
		"name": "Lightning Bolt",
		"class/level": [{
			"Wizard": 3
		}],
		"type": 0,
		"school": 2,
		"range": 0,
		"incant": ["The flame of storms is mine to evoke", 3],
		"materials": ["yellow ", 0],
		"effect": ["A player struck is subject to an Engulfing Stopped effect for 60 seconds. In addition Lightning Bolt will have one of the following effects on the object first struck:", "1. A weapon hit is destroyed <br> 2. Armor hit with Armor Points remaining is subject to Armor Breaking. <br> 3. A player hit receives a Wound in that hit location"],
		"limitations": "",
		"note": "Engulfing for the Stopped effect",
		"statelink": 6,
        "id": 91
	},
	{
		"name": "Lost",
		"class/level": [{
			"Bard": 5
		}],
		"type": 2,
		"school": 0,
		"range": 3,
		"incant": ["I command thee to be lost", 3],
		"materials": "",
		"effect": "Player becomes Insubstantial and must move directly to their base. Player must end their Insubstantial State as per normal once they reach their base",
		"limitations": "",
		"note": "",
		"statelink": 4,
        "id": 92
	},
	{
		"name": "Lycanthropy",
		"class/level": [{
			"Druid": 4
		}],
		"type": 1,
		"school": 1,
		"range": 2,
		"incant": ["Stalked in the forest, too close to hide, Ill be upon thee by the moonlight side", 3],
		"materials": ["1 red, 1 white ", 1],
		"effect": "Bearer gains two points of magic armor. Bearer’s melee weapons are Shield Crushing. Bearer is Immune to Command",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 93
	},
	{
		"name": "Magic Ball Block",
		"class/level": [{
			"Monk": 6
		}],
		"type": 1,
		"school": 4,
		"range": 1,
		"incant": "",
		"materials": "",
		"effect": "Player is allowed to block Magic Balls with their weapons and hands without penalty. Any Magic Ball in motion touched by a weapon wielded or by the hand of the player is nullified.",
		"limitations": "Ignored by Phase Bolt",
		"note": "Engulfing effects from blocked Magic Balls do not activate",
		"statelink": "",
        "id": 94
	},
	{
		"name": "Mass Healing",
		"class/level": [{
			"Healer": 6
		}],
		"type": 1,
		"school": 6,
		"range": 1,
		"incant": ["Let the powers of healing flow through me", 3],
		"materials": ["5 yellow ", 1],
		"effect": "Caster may Heal a player by touching them, stating \"I grant thee healing.\" Bearer must remove an Enchantment strip after each use of Heal.",
		"limitations": "Mass Healing is removed when the last strip is removed.",
		"note": "The effect is not an incantation, and so is not stopped by suppression, and may be used while moving, etc.",
		"statelink": "",
        "id": 95
	},
	{
		"name": "Mend",
		"class/level": [{
			"Archer": 2
		}, {
			"Bard": 2
		}, {
			"Druid": 1
		}, {
			"Healer": 3
		}, {
			"Wizard": 1
		}],
		"type": 2,
		"school": 5,
		"range": 2,
		"incant": ["I make this item whole again", 5],
		"materials": "",
		"effect": "Destroyed item is repaired, or one point of armor in one location is repaired.",
		"limitations": "",
		"note": "May be used to heal Golems. May be used on a Protection From Magic player's armour and equipment",
		"statelink": "",
        "id": 96
	},
	{
		"name": "Missile Block",
		"class/level": [{
			"Monk": 1
		}],
		"type": 1,
		"school": 4,
		"range": 1,
		"incant": ["", ""],
		"materials": "",
		"effect": "Player is allowed to block arrows and projectiles with their weapons and hands without penalty. Any arrow or projectile in motion touched by a weapon wielded or by the hand of the player is nullified.",
		"limitations": "Ignored by Phase Arrow",
		"note": "Engulfing effects from blocked arrows and projectiles do not activate",
		"statelink": "",
        "id": 97
	},
	{
		"name": "Naturalize Magic",
		"class/level": [{
			"Druid": 6
		}],
		"type": 1,
		"school": 5,
		"range": 1,
		"incant": ["I shall restore the balance", 3],
		"materials": ["5 red ", 1],
		"effect": "E: Bearer may cast Dispel Magic by announcing \" \'Player\' thou art dispelled.\" Bearer must remove an Enchantment strip after each use of Dispel Magic",
		"limitations": "Naturalize Magic is removed when the last strip is removed.",
		"note": "",
		"statelink": "",
        "id": 98
	},
	{
		"name": "Necromancer",
		"class/level": [{
			"Healer": 6
		}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": "All magic purchased in the Death School becomes Charge x3. You may have a combined total of five active Greater Undead Minion and Undead Minion Enchantments",
		"limitations": "You may not purchase any Enchantments from the Protection School.",
		"note": "",
		"statelink": "",
        "id": 99
	},
	{
		"name": "Persistent",
		"class/level": [{
			"Healer": 6
		}, {
			"Wizard": 6
		}],
		"type": 5,
		"school": 3,
		"range": "",
		"incant": ["Persistent", 1],
		"materials": "",
		"effect": "Enchantment returns with the user after respawning until it has been otherwise removed.",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 100
	},
	{
		"name": "Phase Arrow",
		"class/level": [{
			"Archer": 6
		}],
		"type": 3,
		"school": 5,
		"range": 7,
		"incant": ["Phase arrow", 1],
		"materials": ["Arrow with grey cover labeled \'Phase\'."],
		"effect": "This arrow does not interact with ongoing Magic or Abilities. Example: This arrow is not stopped by Stoneskin, Protection from Projectiles, and does not trigger the effects of Troll Blood, Undead Minion, Missile Block, or similar Magic or Abilities.",
		"limitations": "",
		"note": "This arrow does not supercede the Frozen, Insubstantial, or Out of Game States",
		"statelink": "",
        "id": 101
	},
	{
		"name": "Phase Bolt",
		"class/level": [{
			"Wizard": 5
		}],
		"type": 0,
		"school": 5,
		"range": 0,
		"incant": ["The power of sorcery is mine to evoke", 3],
		"materials": ["grey ", 0],
		"effect": ["This Magic Ball does not interact with other ongoing Magic or Abilities. Example: This Magic Ball is not stopped by Stoneskin, Protection from Projectiles, and does not trigger the effects of Troll Blood, Undead Minion, Magic Ball Block, or similar Magic or Abilities.", "Will have one of the following effects:", "1. A weapon hit is destroyed <br> 2. Armor hit with Armor Points remaining is subject to Armor Breaking. <br> 3. A player hit receives a Wound in that hit location."],
		"limitations": "",
		"note": "Does not supercede the Frozen, Insubstantial, or Out of Game States.",
		"statelink": 6,
        "id": 102
	},
	{
		"name": "Pheonix Tears",
		"class/level": [{
			"Healer": 6
		}],
		"type": 1,
		"school": 6,
		"range": 2,
		"incant": ["May the tears of the phoenix wash over thee", 3],
		"materials": ["2 white ", 1],
		"effect": ["Enchanted player does not die as normal. When the player would otherwise die they instead remove a strip and become Frozen for 30 seconds. When the Frozen State is ended the bearer has:", "1. All Wounds removed <br> 2. All States removed that are removed by Death or Respawning.", "3. All ongoing effects with a timer are expired <br> 4. All of their equipment is fully repaired <br> 5. All other enchantments, except those which are Persistent, are removed.", "Additionally Phoenix Tears allows you to wear an extra Enchantment from the Protection School. This extra enchantment is considered Persistent as long as Phoenix Tears is present. The additional Enchantment is not removed once Phoenix Tears is removed."],
		"limitations": "Phoenix Tears is removed when the last strip is removed.",
		"note": "",
		"statelink": 2,
        "id": 103
	},
	{
		"name": "Pinning Arrow",
		"class/level": [{"Archer": 0},{"Archer": 1},{"Archer": 3},{"Archer": 5}],
		"type": 3,
		"school": 5,
		"range": 7,
		"incant": ["Pinning arrow", 1],
		"materials": ["Arrow with yellow cover labeled \'Pinning\'."],
		"effect": "A player struck by this arrow is Stopped for 30 seconds.",
		"limitations": "",
		"note": "Engulfing",
		"statelink": 6,
        "id": 104
	},
	{
		"name": "Planar Grounding",
		"class/level": [{
			"Wizard": 2
		}],
		"type": 2,
		"school": 5,
		"range": 3,
		"incant": ["My power closes the aether to you", 3],
		"materials": "",
		"effect": "Target player has their Insubstantial State removed and may not become Insubstantial for 30 seconds. May be cast on players who are not currently Insubstantial.",
		"limitations": "",
		"note": "Planar Grounding causes Enchantments that automatically render their bearer Insubstantial, such as Undead Minion, to fail and be removed if they activate while Planar Grounding is in effect.",
		"statelink": 4,
        "id": 105
	},
	{
		"name": "Poison",
		"class/level": [{
			"Assassin": 0
		},{
			"Assassin": 2
		}, {
			"Druid": 2
		}, {
			"Antipaladin": 2
		}],
		"type": 1,
		"school": 1,
		"range": 2,
		"incant": ["I coat these weapons with a deadly poison", 2],
		"materials": ["red ", 1],
		"effect": "The next Wound dealt by the bearer in melee is Wounds Kill.",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 106
	},
	{
		"name": "Poison Arrow",
		"class/level": [{"Archer": 0},{"Archer": 1},{"Archer": 3},{"Archer": 5}],
		"type": 3,
		"school": 1,
		"range": 7,
		"incant": ["Poison arrow", 1],
		"materials": ["Arrow with green cover labeled \'Poison\'."],
		"effect": "This arrow is Wounds Kill",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 107
	},
	{
		"name": "Poison Glands",
		"class/level": [{
			"Druid": 5
		}],
		"type": 1,
		"school": 1,
		"range": "",
		"incant": ["Thou shalt secrete poison from thy venemous glands", 3],
		"materials": ["red ", 1],
		"effect": "Bearer gains self-only Poison (ex) 1/Refresh Charge x3",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 108
	},
	{
		"name": "Priest",
		"class/level": [{
			"Healer": 6
		}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": "All Meta-Magics purchased become 1/Life Charge x3.",
		"limitations": "Meta-magic may only be used on Spirit magics.",
		"note": "Heal costs 0 points",
		"statelink": "",
        "id": 109
	},
	{
		"name": "Protection from Magic",
		"class/level": [{
			"Healer": 6
		}, {
			"Wizard": 6
		}, {
			"Paladin": 6
		}],
		"type": 1,
		"school": 4,
		"range": 2,
		"incant": ["I enchant thee with protection from magic", 3],
		"materials": ["1 white ", 1],
		"effect": "Bearer is unaffected by magic from any school.",
		"limitations": "Upon death the player is Cursed.",
		"note": "This effect does not interact with other Enchantments worn by the bearer",
		"statelink": 0,
        "id": 110
	},
	{
		"name": "Protection from Projectiles",
		"class/level": [{
			"Healer": 4
		}],
		"type": 1,
		"school": 4,
		"range": 2,
		"incant": ["I enchant thee with protection from projectiles", 3],
		"materials": ["1 white ", 1],
		"effect": "Bearer is unaffected by ammunition, thrown javelins, rocks, and throwing weapons.",
		"limitations": "",
		"note": "Engulfing effects from those objects, such as Pinning Arrow, do not affect the player",
		"statelink": "",
        "id": 111
	},
	{
		"name": "Pyrotechnics",
		"class/level": [{
			"Wizard": 5
		}],
		"type": 2,
		"school": 2,
		"range": 4,
		"incant": ["I call upon the element of flame to destroy thy belongings", 3],
		"materials": "",
		"effect": "All shields and weapons carried or worn by the target player are destroyed.",
		"limitations": ": Only affects shields and weapons carried or worn when the Verbal is completed.",
		"note": "",
		"statelink": "",
        "id": 112
	},
	{
		"name": "Ranger",
		"class/level": [{
			"Druid": 6
		}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": ": The cost of all available Equipment is reduced to zero points. May use bows so long as a shield is not carried.",
		"limitations": "The cost of all Enchantments are doubled.",
		"note": "",
		"statelink": "",
        "id": 113
	},
	{
		"name": "Ravage",
		"class/level": [{
			"Wizard": 3
		}],
		"type": 1,
		"school": 1,
		"range": 3,
		"incant": ["Death shall ravage thy flesh and make thee fragile", 3],
		"materials": "",
		"effect": "Target is fragile",
		"limitations": "",
		"note": "",
		"statelink": 1,
        "id": 114
	},
	{
		"name": "Regeneration",
        "class/level": [{
			"Druid": 3
        }],
		"type": 1,
		"school": 6,
		"range": 2,
		"incant": ["I grant thee the power of regeneration”", 3],
		"materials": ["1 yellow ", 1],
		"effect": "Bearer gains unlimited use of Swift Heal (self-only).",
		"limitations": "The Heal granted by Regeneration may not be used within 10’ of a living enemy.",
		"note": "",
		"statelink": "",
        "id": 115
	},
	{
		"name": "Release",
		"class/level": [{
			"Scout": 2
		}, {
			"Bard": 1
		}, {
			"Druid": 2
		}, {
			"Healer": 1
		}, {
			"Wizard": 2
		}],
		"type": 2,
		"school": 5,
		"range": 2,
		"incant": ["From thy bindings thou art released", 2],
		"materials": "",
		"effect": "A single ongoing effect or State is removed from the target. Casters choice",
		"limitations": "Cannot remove Cursed.",
		"note": "When used to end a State or Ongoing Effect imposed by a magic or ability with multiple effects, all other States and Ongoing Effects from the same source are also ended",
		"statelink": [1, 2, 3, 4, 5, 6, 7, 8, 9],
        "id": 116
	},
	{
		"name": "Reload",
		"class/level": [{
			"Archer": 1
		}],
		"type": 2,
		"school": 5,
		"range": 1,
		"incant": ["I nocked my arrows to my bow, I let them fly, my quiver is low. Now I pause to go reload.", 1],
		"materials": "",
		"effect": "Player becomes Out of Game and may move about the field retrieving their arrows",
		"limitations": "Must stay at least 10’ away from other players at all times. The player may only remove their Out of Game state in the location they started by stating, “I return with a full quiver” x3",
		"note": "May ask reeve for assistance in retrieving arrows that are within 10’ of other players.",
		"statelink": 5,
        "id": 117
	},
	{
		"name": "Restoration",
		"class/level": [{
			"Bard": 4
		}],
		"type": 2,
		"school": 5,
		"range": 2,
		"incant": ["My power grants thee confidence", 1],
		"materials": "",
		"effect": "Player has all uses of their per-life Magic and Abilities restored.",
		"limitations": "Does not function on Empower, Confidence, Restoration, or similar Magic and Abilities. May not be used on the caster.",
		"note": "",
		"statelink": "",
        "id": 118
	},
	{
		"name": "Resurrect",
		"class/level": [{
			"Monk": 5
		}, {
			"Healer": 3
		}, {
			"Paladin": 4
		}],
		"type": 2,
		"school": 6,
		"range": 2,
		"incant": ["Sword Cut, spear stab, mace smash, arrow jab, Let the white light of healing descend on thee. Let the white light of healing stop thy spilling blood. Let the white light of healing mend thy bones. Let the white light of healing close thy wounds. Let the white light of healing restore thy vigor. The white light of healing hath healed thee", 1],
		"materials": "",
		"effect": "Target Dead player is returned to life. Any Wounds on the player are healed.",
		"limitations": "Non-Persistent Enchantments on the player are removed before the player returns to life",
		"note": "Dead players that move after dying may only return to play via respawn unless otherwise noted. (p7)",
		"statelink": 0,
        "id": 119
	},
	{
		"name": "Sanctuary",
		"class/level": [{
			"Monk": 3
		}],
		"type": 2,
		"school": 4,
		"range": 1,
		"incant": ["State \"Sanctuary\" without any weapons in hand", 1],
		"materials": "",
		"effect": "Player and their carried equipment are unaffected by hostile actions originating from within 20’. Must Chant “sanctuary”. Player may normally end Sanctuary at any time by ceasing to chant, or by picking up a weapon with their hand.",
		"limitations": "Player may not carry any weapons in hand during Sanctuary. Cannot carry nor affect game items or game objectives while in Sanctuary. Players in Sanctuary may not impede the play of other people in any manner, and must immediately remove themselves from any such situations they find themselves in. May not come within 20’ of a non-friendly base",
		"note": "If the player is voluntarily touching (other than blocking) or carrying weapons in any fashion (tucked under arms, tied to thongs, etc) at any point during Sanctuary then they may only voluntarily end Sanctuary within 20’ of a friendly base, and must continue chanting until there. Player is still susceptible to Phase Bolt and Phase Arrow.",
		"statelink": "",
        "id": 120
	},
	{
		"name": "Scavenge",
		"class/level": [{
			"Warrior": 1
		}],
		"type": 2,
		"school": 5,
		"range": 1,
		"incant": ["Scavenge", 1],
		"materials": "",
		"effect": "Repair one point of armor in one location, a shield, or a weapon",
		"limitations": "Kill Trigger",
		"note": "",
		"statelink": "",
        "id": 121
	},
	{
		"name": "Sever Spirit",
		"class/level": [{
			"Healer": 2
		}],
		"type": 2,
		"school": 6,
		"range": 3,
		"incant": ["The spirits lay a curse on thee.", 3],
		"materials": "",
		"effect": "Player is Cursed. Any Enchantments on the player are removed",
		"limitations": "May only target dead players.",
		"note": "",
		"statelink": "",
        "id": 122
	},
	{
		"name": "Shadow Step",
		"class/level": [{
			"Assassin": 1
		}, {"Scout": 3}],
		"type": 2,
		"school": 5,
		"range": 1,
		"incant": ["I step into the shadows", 1],
		"materials": "",
		"effect": "Player becomes insubstantial.",
		"limitations": "",
		"note": "",
		"statelink": 4,
        "id": 123
	},
	{
		"name": "Shake it Off",
		"class/level": [{
			"Warrior": 5
		}],
		"type": 2,
		"school": 6,
		"range": 1,
		"incant": ["I shall overcome", 1],
		"materials": "",
		"effect": "10 seconds after activating Shake It Off the player may remove from themselves one State or effect of their choice which was present at the time they activated the ability",
		"limitations": "",
		"note": "Shake It Off may be activated at any time the player is alive, even while the player would otherwise be prevented from activating abilities by Stunned, Suppressed, or similar.",
		"statelink": "",
        "id": 124
	},
	{
		"name": "Shatter",
		"class/level": [{
			"Wizard": 4
		}],
		"type": 2,
		"school": 5,
		"range": 3,
		"incant": ["My power shatters thy body", 3],
		"materials": "",
		"effect": "Target Frozen player dies.",
		"limitations": "",
		"note": "",
		"statelink": 2,
        "id": 125
	},
	{
		"name": "Shatter Weapon",
		"class/level": [{
			"Wizard": 3
		}],
		"type": 2,
		"school": 5,
		"range": 3,
		"incant": ["My power destroys thy \'type of weapon\'", 3],
		"materials": "",
		"effect": "Target weapon is destroyed.",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 126
	},
	{
		"name": "Shove",
		"class/level": [{
			"Bard": 1
		}, {
			"Healer": 2
		}, {
			"Wizard": 1
		}],
		"type": 2,
		"school": 5,
		"range": 3,
		"incant": ["My power shoves thee", 3],
		"materials": "",
		"effect": "Target player is moved back 20 feet in a straight line away from the caster.",
		"limitations": "",
		"note": "Works on Stopped players.",
		"statelink": 6,
        "id": 127
	},
	{
		"name": "Silver Tongue",
		"class/level": [{
			"Bard": 6
		}],
		"type": 1,
		"school": 5,
		"range": 2,
		"incant": ["The seething sea ceaseth and thus the seething sea sufficeth us", 2],
		"materials": ["1 yellow ", 1],
		"effect": "Bearer gains Swift 1/refresh Charge x3.",
		"limitations": "Other sources of Swift may not be utilized while Silver Tongue is worn",
		"note": "Does not use up any purchased instances of Swift. May be cast on self",
		"statelink": "",
        "id": 128
	},
	{
		"name": "Sleight of mind",
		"class/level": [{
			"Bard": 4
		}],
		"type": 1,
		"school": 5,
		"range": 2,
		"incant": ["May thy power remain", 2],
		"materials": ["1 yellow ", 1],
		"effect": "Enchantments worn by the bearer, other than Sleight of Mind, are not removed by Dispel Magic or similar Magic and Abilities",
		"limitations": "",
		"note": "Does not count towards the bearer’s Enchantment Limit.",
		"statelink": "",
        "id": 129
	},
	{
		"name": "Sniper",
		"class/level": [{
			"Archer": 6
		}],
		"type": 4,
		"school": 5,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": "Player may physically carry any number of Specialty Arrows of each type. The frequency of each type of Specialty Arrow Ability becomes 1/Life Charge x3",
		"limitations": "May not fire normal arrows. Only one type of Specialty Arrow may be charged at any given time",
		"note": "",
		"statelink": "",
        "id": 130
	},
	{
		"name": "Song of Battle",
		"class/level": [{
			"Bard": 2
		}],
		"type": 1,
		"school": 4,
		"range": 1,
		"incant": ["I sing of my legendary prowess", 1],
		"materials": ["no strip required ", 2],
		"effect": "Bearer’s weapons are Armor Breaking.",
		"limitations": "Bearer must Chant \"Song of Battle\" or sing a song regarding their martial prowess. Singing in place of the normal Chant is still a Chant and must follow all Chant rules",
		"note": "Songs are enchantments, and take an enchant slot",
		"statelink": "",
        "id": 131
	},
	{
		"name": "Song of Deflection",
		"class/level": [{
			"Bard": 4
		}],
		"type": 1,
		"school": 4,
		"range": 1,
		"incant": ["I sing of my nimble acrobatics", 1],
		"materials": ["no strip required", 2],
		"effect": "Bearer does not receive Wounds from ammunition, thrown javelins, rocks, and throwing weapons",
		"limitations": "Bearer must Chant \"Song of Deflection\" or sing a song regarding their acrobatic prowess Singing in place of the normal Chant is still a Chant and must follow all Chant rules.",
		"note": "Songs are enchantments, and take an enchant slot. Specialty arrows are still capable of inflicting states",
		"statelink": "",
        "id": 132
	},
	{
		"name": "Song of Determination",
		"class/level": [{
			"Bard": 1
		}],
		"type": 1,
		"school": 4,
		"range": 1,
		"incant": ["I sing of my unwavering determination", 1],
		"materials": ["no strip required", 2],
		"effect": "Bearer is Immune to Command.",
		"limitations": "Bearer must Chant \"Song of Determination\" or sing a song regarding their determination. Singing in place of the normal Chant is still a Chant and must follow all Chant rules",
		"note": "Songs are enchantments, and take an enchant slot",
		"statelink": 3,
        "id": 133
	},
	{
		"name": "Song of Freedom",
		"class/level": [{
			"Bard": 3
		}],
		"type": 1,
		"school": 4,
		"range": 1,
		"incant": ["I sing of my unquenchable wanderlust", 1],
		"materials": ["no strip required", 2],
		"effect": "Bearer can not receive the States Stopped, Frozen, or Insubstantial unless caused by the bearer or other enchantments they carry",
		"limitations": "Bearer must Chant \"Song of Freedom\" or sing a song of roving or rambling. Singing in place of the normal Chant is still a Chant and must follow all Chant rules.",
		"note": "Songs are enchantments, and take an enchant slot. Does NOT protect from stunned, suppressed, cursed etc.",
		"statelink": [2, 4, 6],
        "id": 134
	},
	{
		"name": "Song of Interference",
		"class/level": [{
			"Bard": 6
		}],
		"type": 1,
		"school": 4,
		"range": 1,
		"incant": ["I sing of dark magic thwarted", 1],
		"materials": ["no strip required", 2],
		"effect": "As per Enlightened Soul.",
		"limitations": "Bearer must Chant “Song of Interference” or sing a song about defeating/resisting the forces of magic. Singing in place of the normal Chant is still a Chant and must follow all Chant rules",
		"note": "Songs are enchantments, and take an enchant slot",
		"statelink": "",
        "id": 135
	},
	{
		"name": "Song of Power",
		"class/level": [{
			"Bard": 4
		}],
		"type": 1,
		"school": 4,
		"range": 1,
		"incant": ["I sing to inspire my brothers-in-arms", 1],
		"materials": ["no strip required", 2],
		"effect": "Friendly players within 20’ of the bearer have their Charging Incantation repetitions divided by 2, rounded down.",
		"limitations": "Bearer is Stopped. Bearer must Chant “Song of Power” or sing an inspiring song. Singing in place of the normal Chant is still a Chant and must follow all Chant rules.",
		"note": "Songs are enchantments, and take an enchant slot. Locally, there is a push to accept comrades-in-arms in place of brothers in arms for the sake of inclusion.",
		"statelink": 6,
        "id": 136
	},
	{
		"name": "Song of Survival",
		"class/level": [{
			"Bard": 5
		}],
		"type": 1,
		"school": 4,
		"range": 1,
		"incant": ["I sing of my numerous close calls", 1],
		"materials": ["no strip required", 2],
		"effect": "When the bearer would otherwise die, they instead announce “Song of Survival” and become Insubstantial. The caster treats the triggering event as though it had no effect on them other than triggering Song of Survival. Bearer may choose to return directly to their respawn location immediately after Song of Survival activates",
		"limitations": "Bearer must Chant “Song of Survival” or sing a song regarding their many escapes from certain doom. Singing in place of the normal Chant is still a Chant and must follow all Chant rules. Once Song of Survival has activated to protect the bearer it may not be cast again on the same life. Singing in place of the normal Chant is still a Chant and must follow all Chant rules.",
		"note": "Songs are enchantments, and take an enchant slot. : Bearer may end the Insubstantial state caused by Song of Survival at any time with the standard Incantation",
		"statelink": 4,
        "id": 137
	},
	{
		"name": "Song of Visit",
		"class/level": [{
			"Bard": 2
		}],
		"type": 1,
		"school": 4,
		"range": 1,
		"incant": ["I sing to entertain friend and foe", 3],
		"materials": ["no strip required", 2],
		"effect": "Bearer cannot be Wounded and is Immune to all schools. Bearer is Stopped. Bearer must Chant “Song of Visit” or sing a song regarding their general good nature and friendly disposition. Singing in place of the normal Chant is still a Chant and must follow all Chant rules. When Song of Visit is removed player becomes Insubstantial and must immediately move directly to their base. Upon arrival, they must immediately end the effect as per Insubstantial.",
		"limitations": "Bearer may not wield weapons, interact with game objects, impede play, gain further Enchantments, or target any player.",
		"note": "Songs are enchantments, and take an enchant slot. This Enchantment can be removed by Dispel Magic and similar Magic and Abilities",
		"statelink": [3, 6],
        "id": 138
	},
	{
		"name": "Sphere of Annihilation",
		"class/level": [{
			"Wizard": 6
		}],
		"type": 0,
		"school": 5,
		"range": 0,
		"incant": ["The power of void is mine to evoke", 3],
		"materials": ["black ", 0],
		"effect": ["Sphere of Annihilation will have one of the following effects on the object first struck:", "1. A weapon hit is destroyed <br> 2. A shield hit is subject to Shield Destroying <br> 3. A player hit dies and is Cursed"],
		"limitations": "",
		"note": "Ignores armor. Enchantments which affect equipment, such as Imbue Shield or Harden, do not function against Sphere of Annihilation.",
		"statelink": 0,
        "id": 139
	},
	{
		"name": "Steal Life Essence",
		"class/level": [{
			"Healer": 5
		}, {
			"Wizard": 5
		}, {
			"Antipaladin": 3
		}],
		"type": 2,
		"school": 1,
		"range": 2,
		"incant": ["Steal life", 1],
		"materials": "",
		"effect": "Caster may heal a Wound or instantly Charge an ability",
		"limitations": "May only be used on a dead player. That player is Cursed. Does not work on Cursed players. The caster still gains the effect even if the dead player is unaffected.",
		"note": ": In order to charge an ability, the name of the ability being charged must still be stated immediately after the incantation",
		"statelink": 0,
        "id": 140
	},
	{
		"name": "Stoneform",
		"class/level": [{
			"Druid": 2
		}],
		"type": 2,
		"school": 4,
		"range": 1,
		"incant": ["I shall not be harmed", 1],
		"materials": "",
		"effect": "Player is Frozen",
		"limitations": "",
		"note": "May end this State at any time by saying \"the earth release me.\" ",
		"statelink": 2,
        "id": 141
	},
	{
		"name": "Stoneskin",
		"class/level": [{
			"Druid": 3
		}],
		"type": 1,
		"school": 4,
		"range": 2,
		"incant": ["May nature protect thee from all forms of attack", 3],
		"materials": ["white ", 1],
		"effect": "Bearer gains two points Magic Armor affected as per Ancestral Armor.",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 142
	},
	{
		"name": "Stun",
		"class/level": [{
			"Bard": 6
		}, {
			"Healer": 6
		}],
		"type": 2,
		"school": 5,
		"range": 3,
		"incant": ["By the power of white light I stun thee", 3],
		"materials": "",
		"effect": "Target player is Stunned for 30 seconds.",
		"limitations": "",
		"note": "",
		"statelink": 7,
        "id": 143
	},
	{
		"name": "Summon Dead",
		"class/level": [{
			"Healer": 2
		}],
		"type": 2,
		"school": 6,
		"range": 4,
		"incant": ["I summon thy corpse", 5],
		"materials": "",
		"effect": "Target dead player may choose to go to the caster and then counts as though they had not moved from where they died.",
		"limitations": "May be used on a dead player who has not moved from where they died or who is at their respawn location.",
		"note": "",
		"statelink": 0,
        "id": 144
	},
	{
		"name": "Summoner",
		"class/level": [{
			"Druid": 6
		}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": "Each Enchantment purchased gives double the uses. Example: 1/Life Charge x3 becomes 2/life Charge x3, 2/ life becomes 4/life",
		"limitations": "May not purchase Verbals with a range other than Touch or Self. May not purchase equipment beyond 2nd level",
		"note": "Bow is not Purchased from ranger, so it's fair game",
		"statelink": "",
        "id": 145
	},
    ////////////////////////////////////////////////////////////////////////////////////////
   
    {
		"name": "Weapon Profficiency: Heavy Thrown",
		"class/level": [
			{"Monk": 2}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": "May now use Thrown weapons between 9 and 18 inches in length",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 146
	},
    
    
	{
		"name": "Suppression Arrow",
		"class/level": [{
			"Archer": 4
		}],
		"type": 3,
		"school": 5,
		"range": 7,
		"incant": ["Suppression arrow", 1],
		"materials": ["Arrow with purple cover labeled \"Suppression\"."],
		"effect": "A player struck by this arrow is Suppressed for 30 seconds.",
		"limitations": "",
		"note": "Engulfing",
		"statelink": 8,
        "id": 147
	},
	{
		"name": "Suppression Bolt",
		"class/level": [{
			"Wizard": 2
		}],
		"type": 0,
		"school": 7,
		"range": 0,
		"incant": ["The strength of suppression is mine to evoke", 2],
		"materials": ["purple ", 0],
		"effect": "Target is Suppressed for 60 seconds.",
		"limitations": "",
		"note": "Engulfing",
		"statelink": 8,
        "id": 148
	},
	{
		"name": "Swift",
		"class/level": [{
			"Bard": 4
		}, {
			"Druid": 4
		}, {
			"Healer": 4
		}, {
			"Wizard": 4
		}],
		"type": 5,
		"school": 3,
		"range": 1,
		"incant": ["Swift", 1],
		"materials": "",
		"effect": "Magic and abilities require only a single iteration of the incantation. For multi-line Incantations use the last line",
		"limitations": "May only be used on Magic and Abilities at a range of Ball, Touch, or Self. May not be used on the Charge incantation",
		"note": "",
		"statelink": "",
        "id": 149
	},
	{
		"name": "Teleport",
		"class/level": [{
			"Assassin": 5
		}, {
			"Druid": 4
		}, {
			"Healer": 4
		}, {
			"Wizard": 2
		}],
		"type": 2,
		"school": 5,
		"range": 1,
		"incant": ["I step into the shadows", 1],
		"materials": "",
		"effect": "Player becomes Insubstantial and moves directly to a location chosen at the time of casting by the caster",
		"limitations": "Upon arrival, they must immediately end the effect as per Insubstantial",
		"note": "If the player’s Insubstantial state is removed before they have reached their destination, the effects of Teleport end",
		"statelink": 4,
        "id": 150
	},
	{
		"name": "Terror",
		"class/level": [{
			"Bard": 4
		}],
		"type": 2,
		"school": 1,
		"range": 3,
		"incant": ["Death makes thee terrified", 3],
		"materials": "",
		"effect": "Target may not attack or cast magic at the caster. Target must remain at least 50 feet away from the caster unless forced there by another Magic or Ability. Lasts 30 seconds.",
		"limitations": "",
		"note": "If the caster attacks or begins casting another magic at the target, this spell’s effect is negated.",
		"statelink": "",
        "id": 151
	},
	{
		"name": "Throw",
		"class/level": [{
			"Wizard": 3
		}],
		"type": 2,
		"school": 5,
		"range": 3,
		"incant": ["My power throws thee", 3],
		"materials": "",
		"effect": "Target player is moved back 50 feet in a straight line away from the caster.",
		"limitations": "",
		"note": "Works on Stopped players.",
		"statelink": 6,
        "id": 152
	},
	{
		"name": "Tracking",
		"class/level": [{
			"Scout": 1
		}],
		"type": 2,
		"school": 5,
		"range": 3,
		"incant": ["Tracking", 3],
		"materials": "",
		"effect": "Target Insubstantial player immediately has their Insubstantial effect ended.",
		"limitations": "",
		"note": "Works through enlightened soul and void touched",
		"statelink": 4,
        "id": 153
	},
	{
		"name": "Troll Blood",
		"class/level": [{
			"Druid": 5
		}],
		"type": 1,
		"school": 4,
		"range": 2,
		"incant": ["The blood of the trolls sustains thee", 3],
		"materials": ["3 white ", 1],
		"effect": ["Enchanted player does not die as normal.", "When the player would otherwise die they instead ignore the triggering effect as though it had not occurred, remove a strip, and become Frozen for 30 seconds.", "The bearer is treated as though they have the effects of Regeneration inaddition to the above"],
		"limitations": "Troll Blood is removed when the last strip is removed.",
		"note": "Triggering Troll Blood will not repair your armour",
		"statelink": 2,
        "id": 154
	},
	{
		"name": "True Grit",
		"class/level": [{
			"Warrior": 3
		}],
		"type": 2,
		"school": 6,
		"range": 1,
		"incant": ["The wicked flee when I pursue” immediately after dying", 1],
		"materials": "",
		"effect": "Player returns to life with their Wounds healed and is immediately Frozen for 30 seconds.",
		"limitations": "Non-Persistent Enchantments on the player are removed before the player returns to life.",
		"note": "",
		"statelink": "",
        "id": 155
	},
	{
		"name": "Undead Minion",
		"class/level": [{
			"Healer": 3
		},{"Antipaladin": 6}],
		"type": 1,
		"school": 1,
		"range": 2,
		"incant": ["Flesh rots, bones break, skulls sigh, spirits take let the power of my will descend on thee let the power of my will restore thy spirit let the power of my will knit thy corpse let the power of my will give thee direction let the power of my will cheat thy death by the power of my will, arise my minion!", 1],
		"materials": ["yellow ", 1],
		"effect": ["1. Bearer does not die or respawn as normal. <br> 2. Bearer is Cursed, Fragile, and Suppressed. <br> 3. When the bearer would normally die, they instead become Insubstantial, remove all Wounds, and must return to the caster as soon as possible. Insubstantial players may not move more than 10’ from the caster and may not speak. The caster may touch the player and then Incant “Rise and fight again” x10 to end this Insubstantial State so long as no living enemies are within 10’ of the bearer. <br> 4. If this Enchantment’s Insubstantial is removed from the Bearer in any other manner than outlined in item 3 (or prevented entirely) this Enchantment is removed. <br> 5. If the caster dies, this Enchantment is removed the next time the bearer returns to the caster. <br> 6. If the Enchantment is removed, the bearer dies. <br> 7. For the duration of the Enchantment, the Caster is considered the players respawn. <br> 8. Dead players may be targeted by Undead Minion and are immediately returned to life with all Wounds removed and the Insubstantial State applied."],
		"limitations": ["1. The Insubstantial State imposed by Undead Minion can be removed or prevented by any Magic or Ability which would normally be capable of removing Insubstantial or preventing Insubstantial such as Tracking, Planar Grounding, Release, or similar Magic and Abilities. <br> 2. This Enchantment is removed by Banish and Dimensional Rift if used on the player while they are Insubstantial. <br> 3. The caster may not have more than three active Greater Undead Minion and Undead Minion Enchantments combined"],
		"note": "",
		"statelink": [0, 1, 4, 8],
        "id": 156
	},
	{
		"name": "Vampirisim",
		"class/level": [{
			"Wizard": 4
		}],
		"type": 1,
		"school": 1,
		"range": 2,
		"incant": ["Thy hunger can never be sated", 3],
		"materials": ["1 yellow, 1 white ", 1],
		"effect": "Player gains Adrenaline unlimited (ex), is Immune to Death, and is Cursed.",
		"limitations": "",
		"note": "Bearer’s Adrenaline ability will work through their Cursed State",
		"statelink": [0, 3],
        "id": 157
	},
	{
		"name": "Void Touched",
		"class/level": [{
			"Wizard": 5
		}],
		"type": 1,
		"school": 5,
		"range": 2,
		"incant": ["Embrace the old ones and surrender thyself", 3],
		"materials": ["1 red, 1 white ", 1],
		"effect": "Melee weapons wielded by bearer are Armor Breaking. Bearer may use Shadow Step 1/Refresh Charge x30 (ex), Steal Life Essence unlimited (ex), and is unaffected by magic from the Sorcery, Spirit, and Death Schools. Player is Cursed",
		"limitations": "is unaffected by magic from the Spirit School, Cursed.",
		"note": "Cannot be healed even by Greater Heal. May still benefit from their own Steal Life Essence.",
		"statelink": [0, 3],
        "id": 158
	},
	{
		"name": "Ward Self",
		"class/level": [{
			"Wizard": 5
		}],
		"type": 1,
		"school": 4,
		"range": 1,
		"incant": ["The power of magic defends me", 3],
		"materials": ["1 white ", 1],
		"effect": "Resistant to all effects from the next source which would inflict a Wound, Death, or State. Does not trigger against effects cast by the player",
		"limitations": "",
		"note": "",
		"statelink": 9,
        "id": 159
	},
	{
		"name": "Warder",
		"class/level": [{
			"Healer": 6
		}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": "Each Enchantment purchased in the Protection School gives double the uses. Example: 1/Life Charge x3 becomes 2/life Charge x3, 2/life becomes 4/life",
		"limitations": "Player may not purchase any magic from the Death, Command, or Subdual Schools.",
		"note": "",
		"statelink": "",
        "id": 160
	},
	{
		"name": "Warlock",
		"class/level": [{
			"Wizard": 6
		}],
		"type": 4,
		"school": 3,
		"range": "",
		"incant": "",
		"materials": "",
		"effect": "Each Verbal purchased in the Death and Flame Schools gives double the uses. Example: 1/Life Charge x3 becomes 2/life Charge x3, 2/life becomes 4/life.",
		"limitations": "Player may not purchase Verbals from any School other than the Death and Flame Schools",
		"note": "",
		"statelink": "",
        "id": 161
	},
	{
		"name": "Word of Mending",
		"class/level": [{"Druid": 6
		},{
			"Wizard": 6
		}],
		"type": 2,
		"school": 5,
		"range": 2,
		"incant": ["Spedoinkle", 1],
		"materials": "",
		"effect": "All equipment carried by target player is repaired. All armor worn by target player is restored to full value.",
		"limitations": "May not be cast within 20’ of a living enemy",
		"note": "",
		"statelink": "",
        "id": 162
	},
	{
		"name": "Wounding",
		"class/level": [{
			"Wizard": 4
		}],
		"type": 1,
		"school": 1,
		"range": 3,
		"incant": ["Death strikes off thy [left/right] [arm/leg]", 3],
		"materials": "",
		"effect": "Target hit location on target player is Wounded.",
		"limitations": "Has no effect on players already Wounded.",
		"note": "",
		"statelink": "",
        "id": 163
	},	{
		"name": "Charge",
		"class/level": [{"Archer": 1}, {"Assassin": 2}, {"Monk":3},{"Scout":1}, {"warrior":5}, {"Bard": 1}, {"Healer": 1}, {"Druid": 1}, {"Wizard": 1}, {"Paladin": 2},{"Antipaladin": 2}, ],
		"type": 4,
		"school": 3,
		"range": 1,
		"incant": ["\"spell name\" followed by: <br> \"Out of battle I pause to rest, I take some time to catch my breath. Return to me my fleeting power To aid me in my darkest hour.\" <br>", "number listed on the ability"],
		"materials": "",
		"effect": "Regain one use of the targeted ability",
		"limitations": "May only be used on completely exhausted abilities",
		"note": "Requires planted feet and a free hand.",
		"statelink": "",
        "id": 164
	},
	{
		"name": "1 point of magic at your highest level",
		"class/level": [{
			"Bard": 0
		}, {
			"Druid": 0
		}, {
			"Healer": 0
		}, {
			"Wizard": 0
		}],
		"type": 4,
		"school": 3,
		"range": 1,
		"incant": "",
		"materials": "",
		"effect": "If a caster qualifies for 'look the part' they gain an additional point of magic at their highest level.",
		"limitations": "",
		"note": "",
		"statelink": "",
        "id": 165
	},

	{
		"name": "Immune to Command",
		"class/level": [{
			"Paladin": 1
		},{
			"Antipaladin": 1
		},{
			"Barbarian": 1
		}],
		"type": 1,
		"school": 4,
		"range": 1,
		"incant": "",
		"materials": "",
		"effect": "Bearer is immune to Command",
		"limitations": "",
		"note": "",
		"statelink": 3,
        "id": 166
	},

	{
		"name": "Immune to Flame",
		"class/level": [{
			"Antipaladin": 1
		}],
		"type": 1,
		"school": 4,
		"range": 1,
		"incant": "",
		"materials": "",
		"effect": "Bearer is immune to Flame",
		"limitations": "",
		"note": "",
		"statelink": 3,
        "id": 167
	},

	{
		"name": "Immune to Death",
		"class/level": [{
			"Paladin": 1
		}],
		"type": 1,
		"school": 4,
		"range": 1,
		"incant": "",
		"materials": "",
		"effect": "Bearer is immune to Death (magic and abilities)",
		"limitations": "",
		"note": "",
		"statelink": 3,
        "id": 168
	},

	{
		"name": "Immune to Subdual",
		"class/level": [{
			"Barbarian": 1
		}],
		"type": 1,
		"school": 4,
		"range": 1,
		"incant": "",
		"materials": "",
		"effect": "Bearer is immune to Subdual",
		"limitations": "",
		"note": "",
		"statelink": 3,
        "id": 169
	}
]

            let spellType = ["magic ball", "enchantment", "verbal", "specialty arrow", "neutral", "meta-magic"];
            let spellSchool = ["command", "death", "flame", "neutral", "protection", "sorcery", "spirit", "subdual"];
            let spellRange = ["magic ball", "self", "touch", "20 feet", "50 feet", "unlimited", "self or touch", "specialty arrow"];
            let spellMaterials = ["magic ball", "enchant strip", "specialty arrow"];
            let states = ["cursed", "fragile", "frozen", "immune", "insubstantial", "out of game", "stopped", "stunned", "suppressed", "resistant"];

