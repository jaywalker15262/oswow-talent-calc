import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/druid"),
);
const icons = requireAll(require.context("../../assets/icons/druid"));

export const data: TalentData = {
  Balance: {
    name: "Balance",
    background: backgrounds["balance"],
    icon: icons["spell_nature_starfall"],
    talents: { 
      "Starlight Wrath": {
        name: "Starlight Wrath",
        pos: "a1",
        icon: icons["spell_nature_abolishmagic"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the cast time of your Wrath and Starfire spells by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`,
      },
      "Genesis": {
        name: "Genesis",
        pos: "a2",
        icon: icons["spell_arcane_arcane03"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases the damage and healing done by your periodic spell damage and healing effects by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },    
      "Nature's Grasp": {
        name: "Nature's Grasp",
        pos: "a3",
        icon: icons["spell_nature_natureswrath"],
        maxRank: 1,
        reqPoints: 0,
        description: talentText`While active, any time an enemy strikes the caster they have a 35% chance to become afflicted by Entangling Roots (Rank 1).  Only useable outdoors.  2 charges.  Lasts 45 sec.`,
      },
      "Improved Nature's Grasp": {
        name: "Improved Nature's Grasp",
        pos: "a4",
        icon: icons["spell_nature_natureswrath"],
        maxRank: 2,
        reqPoints: 0,
        prereq: "Nature's Grasp",
        arrows: [{ dir: "right", from: "a3", to: "a4" }],
        description: talentText`Increases the chance for your Nature's Grasp to entangle an enemy by ${[
          25,
          50,
        ]}%.`,
      },
      "Control of Nature": {
        name: "Control of Nature",
        pos: "b1",
        icon: icons["spell_nature_stranglevines"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Gives you a ${[
          50,
          100,
        ]}% chance to avoid interruption caused by damage while casting Entangling Roots, Hibernate, and Soothe Animal.`,
      }, 
      "Focused Starlight": {
        name: "Focused Starlight",
        pos: "b2",
        icon: icons["inv_staff_01"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases the critical strike chance of your Starfire, Moonfire, and Wrath spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Improved Moonfire": {
        name: "Improved Moonfire",
        pos: "b3",
        icon: icons["spell_nature_starfall"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the damage and critical strike chance of your Moonfire spell by ${[
          3,
          6,
          9,
        ]}%.`,
      },
      "Brambles": {
        name: "Brambles",
        pos: "c1",
        icon: icons["spell_nature_thorns"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases damage caused by your Thorns and Entangling Roots spells by ${[
          25,
          50,
          75,
        ]}%.`,
      },      
      "Insect Swarm": {
        name: "Insect Swarm",
        pos: "c3",
        icon: icons["spell_nature_insectswarm"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`The enemy target is swarmed by insects, decreasing their chance to hit by 3% and causing 110 Nature damage over 20 sec.`,
      },
      "Nature's Reach": {
        name: "Nature's Reach",
        pos: "c4",
        icon: icons["spell_nature_naturetouchgrow"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases the range of your Wrath, Entangling Roots, Faerie Fire, Moonfire, Starfire, Hurricane and Insect Swarm spells by ${[
          10,
          20,
        ]}% and reduces the threat caused by those spells by ${[
          5,
          10,
        ]}%.`,
      },
      "Moonglow": {
        name: "Moonglow",
        pos: "d1",
        icon: icons["spell_nature_sentinal"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by ${[
          3,
          6,
          9,
        ]}%.`
      },
      "Vengeance": {
        name: "Vengenace",
        pos: "d2",
        icon: icons["spell_nature_purge"],
        maxRank: 5,
        reqPoints: 15,
        prereq: "Focused Starlight",
        arrows: [{ dir: "down", from: "b2", to: "d2" }],
        description: talentText`Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by ${[
          20,
          40,
          60,
          80,
          100,
        ]}%.`,
      },
      "Celestial Focus": {
        name: "Celestial Focus",
        pos: "d3",
        icon: icons["spell_arcane_starfire"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Gives your Starfire spell a ${[
          5,
          10,
          15,
        ]}% to stun the target for 3 sec and increases the chance you'll resist spell interruption when casting your Wrath and Hurricane spells by ${[
          25,
          50,
          75,
        ]}%.`,
      },
      "Improved Faerie Fire": {
        name: "Improved Faerie Fire",
        pos: "d4",
        icon: icons["spell_nature_faeriefire"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Icreases armor reduced of your Faerie Fire and Faerie Fire (Feral) spells by ${[
          12,
          25,
        ]}%.`,
      },
      "Dreamstate": {
        name: "Dreamstate",
        pos: "e1",
        icon: icons["dreamstate"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Regenerate mana equal to ${[
          4,
          8,
          12,
        ]}% of your Intellect every 5 sec, even while casting.`,
      },
      "Nature's Grace": {
        name: "Nature's Grace",
        pos: "e2",
        icon: icons["spell_nature_naturesblessing"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`All spell criticals grace you with a blessing of nature, reducing the casting time of your next spell by 0.5 sec.`,
      },
      "Balance of Power": {
        name: "Balance of Power",
        pos: "e3",
        icon: icons["nature_balancer"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Reduces the chance that the opponent can resist your Balance spells by ${[
          2,
          4,
        ]}% and reduces the chance you'll be hit by spells by ${[
          2,
          4,
        ]}%.`,
      },
      "Eclipse": {
        name: "Eclipse",
        pos: "f2",
        icon: icons["ability_druid_eclipse"],
        maxRank: 5,
        reqPoints: 25,
        prereq: "Nature's Grace",
        arrows: [{dir: "down", from: "e2", to: "f2"}],
        description: talentText`When you hit with Starfire you have a ${[
          5,
          10,
          15,
          20,
          25,
        ]}% chance, or when you hit with Moonfire you have a ${[
          2,
          4,
          6,
          8,
          10,
        ]}% chance, of increasing damage done by Wrath by 40%.  When you hit with Wrath, you have a ${[
          3,
          6,
          9,
          12,
          15,
        ]}% chance of increasing your critical strike chance with Starfire by 40%.

Each effect lasts 15 sec and each has a separate 30 sec cooldown.  Both effects cannot occur simultaneously.`,
      },
      "Moonkin Form": {
        name: "Moonkin Form",
        pos: "g2",
        icon: icons["spell_nature_forceofnature"],
        maxRank: 1,
        reqPoints: 30,
        description: talentText`Transforms the Druid into Moonkin Form.  While in this form the damage done by your Balance spells is increased by 10%, armor contribution from items is increased by 270%, total mana is increased by 25%, and all party members within 30 yards have their spell critical chance increased by 3%.  The Moonkin can only cast Balance, Mark of the Wild, and Remove Curse spells while shapeshifted.

The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.`,
      },
    },
  },
  "Feral Combat": {
    name: "Feral Combat",
    background: backgrounds["feral"],
    icon: icons["ability_racial_bearform"],
    talents: {
      
      "Ferocity": {
        name: "Ferocity",
        pos: "a1",
        icon: icons["ability_hunter_pet_hyena"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the cost of your Maul, Claw, Rake, and Mangle(Cat) abilities by ${[
          1,
          2,
          3,
          4,
          5,
        ]} Rage or Energy.`,
      },
      "Feral Aggression": {
        name: "Feral Aggression",
        pos: "a2",
        icon: icons["ability_druid_demoralizingroar"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases the Attack Power reduction of your Demoralizing Roar by ${[
          9,
          18,
          27,
          36,
          45,
        ]}% and the damage caused by your Ferocious Bite by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%.`,
      },
      "Furor": {
        name: "Furor",
        pos: "a3",
        icon: icons["spell_holy_blessingofstamina"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Gives you ${[
          33,
          66,
          100,
        ]}%% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or 30 Energy when you shapeshift into Cat Form.
        
Each effect has a separate 5 sec cooldown.`,
      },
      "Feral Instinct": {
        name: "Feral Instinct",
        pos: "b1",
        icon: icons["ability_ambush"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the threat caused in Bear and Dire Bear Form by ${[
          5,
          10,
          15,
        ]}%, reduces the chance enemies have to detect you while Prowling.`,
      },        
      "Brutal Impact": {
        name: "Brutal Impact",
        pos: "b2",
        icon: icons["ability_druid_bash"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the stun duration of your Bash and Pounce abilities by ${[
          0.5,
          1,
        ]} sec.`,
      },
      "Thick Hide": {
        name: "Thick Hide",
        pos: "b3",
        icon: icons["inv_misc_pelt_bear_03"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases your Armor contribution from items by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Feline Swiftness": {
        name: "Feline Swiftness",
        pos: "c1",
        icon: icons["spell_nature_spiritwolf"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases your movement speed by ${[
          15,
          30,
        ]}% while in Cat Form and increases your chance to dodge while in Cat Form by ${[
          2,
          4,
        ]}%.`,
      },
      
      "Feral Charge": {
        name: "Feral Charge",
        pos: "c2",
        icon: icons["ability_hunter_pet_bear"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Causes you to charge an enemy, immobilizing and interrupting any spell being cast for 4 sec.`,
      },
      "Sharpened Claws": {
        name: "Sharpened Claws",
        pos: "c3",
        icon: icons["inv_misc_monsterclaw_04"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases your critical strike chance while in Bear, Dire Bear or Cat Form by ${[
          2,
          4,
          6,
        ]}%.`,
      },      
      "Leap": {
        name: "leap",
        pos: "c4",
        icon: icons["leap"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Remove all movement impairing effects and leap forward. The distance you leap is highly dependent on the terrain.`,
      },  
      "Predatory Strikes": {
        name: "Predatory Strikes",
        pos: "d2",
        icon: icons["ability_hunter_pet_cat"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases your melee attack power in Cat, Bear and Dire Bear Forms by ${[
          50,
          100,
          150,
        ]}% of your level.`,
      },
      "Primal Fury": {
        name: "Primal Fury",
        pos: "d3",
        icon: icons["ability_racial_cannibalize"],
        maxRank: 2,
        reqPoints: 15,
        prereq: "Sharpened Claws",
        arrows: [{ dir: "down", from: "c3", to: "d3" }],
        description: talentText`Gives you a ${[
          50,
          100,
        ]}% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form and your critical strikes from Cat Form abilities that add combo points have a ${[
          50,
          100,
        ]}% to add an additional combo point.`,
      },      
      "Savage Fury": {
        name: "Savage Fury",
        pos: "e1",
        icon: icons["ability_druid_ravage"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Increases the damage caused by your Ravage, Claw, Rake, Maul and Swipe abilities by ${[
          10,
          20,
        ]}%.`,
      },
      "Leader of the Pack": {
        name: "Leader of the Pack",
        pos: "e2",
        icon: icons["spell_nature_unyeildingstamina"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`While in Cat, Bear or Dire Bear Form, the Leader of the Pack increases their ranged and melee critical chance by 5%, and of all party members within 45 yards by 3%.`,
      },
      "Primal Tenacity": {
        name: "Primal Tenacity",
        pos: "e3",
        icon: icons["primal_tenacity"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases your chance to resist Stun and Fear mechanics by ${[
          5,
          10,
          15,
        ]}% and reduces chance you'll be critically hit by melee and ranged attacks by ${[
          1,
          2,
          3,
        ]}%.`,
      },
      "Heart of the Wild": {
        name: "Heart of the Wild",
        pos: "f2",
        icon: icons["spell_holy_blessingofagility"],
        maxRank: 5,
        reqPoints: 25,
        prereq: "Leader of the Pack",
        arrows: [{ dir: "down", from: "e2", to: "f2" }],
        description: talentText`Increases your Intellect by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by ${[
          4,
          8,
          12,
          16,
          20,
        ]}% and while in Cat Form your attack power is increased by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
    },
  },
  Restoration: {
    name: "Restoration",
    background: backgrounds["restoration"],
    icon: icons["spell_nature_healingtouch"],
    talents: {
      
      "Accuracy": {
        name: "Accuracy",
        pos: "a1",
        icon: icons["accuracy"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases your chance to hit with all attacks and spells by ${[
          1,
          2,
          3,
        ]}%.`
      },

      "Nature's Focus": {
        name: "Nature's Focus",
        pos: "a2",
        icon: icons["spell_nature_healingwavegreater"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Gives you a ${[
          15,
          30,
          45,
          60,
          75,
        ]}% chance to avoid interruption caused by damage while casting.`,
      },
      "Natural Shapeshifter": {
        name: "Natural Shapeshifter",
        pos: "a4",
        icon: icons["spell_nature_wispsplode"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Reduces the mana cost of all shapeshifting by ${[
          10,
          20,
          30,
        ]}%.`
      },

      "Naturalist": {
        name: "Naturalist",
        pos: "b1",
        icon: icons["spell_nature_healingtouch"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the cast time of your Healing Touch spell by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec and increases you Mana regeneration by ${[
          10,
          20,
          30,
          40,
          50,
        ]}% while in Cat, Bear or Dire Bear form.`,
      },
      
      "Subtlety": {
        name: "Subtlety",
        pos: "b2",
        icon: icons["ability_eyeoftheowl"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the threat you generate by ${[
          6,
          12,
          18,
          24,
          30,
        ]}% and increases the chance to avoid area of effect spells by an additional ${[
          6,
          12,
          18,
          24,
          30,
        ]}%.`,
      },
      
      "Improved Enrage": {
        name: "Improved Enrage",
        pos: "b3",
        icon: icons["ability_druid_enrage"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`The Enrage ability now instantly generates ${[
          10,
          20,
        ]} Rage.`,
      },
      "Revive": {
        name: "Revive",
        pos: "c1",
        icon: icons["revive"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Returns the spirit to the body, restoring a dead target to life with 20% of their health and mana. Cannot be cast when in combat.`
      },

      "Omen of Clarity": {
        name: "Omen of Clarity",
        pos: "c2",
        icon: icons["spell_nature_crystalball"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Imbues the Druid with natural energy. Each of the Druid's melee attack has a chance to reduce the cost and cast time of your next damage or healing spell by 75%. Lasts 5 min.`,
      },

      "Reflection": {
        name: "Reflection",
        pos: "c3",
        icon: icons["spell_frost_windwalkon"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Allows ${[
          7,
          14,
          20,
        ]}% of your Mana regeneration to continue while casting.`,
      },

      "Improved Mark of the Wild": {
        name: "Improved Mark of the Wild",
        pos: "c4",
        icon: icons["spell_nature_regeneration"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the effects of your Mark of the Wild and Gift of the Wild spells by ${[
          20,
          40,
          60,
        ]}%. and reduces the chance listed spells will be dispelled by ${[
          30,
          60,
          90,
        ]}%`,
      },

      "Gift of Nature": {
        name: "Gift of Nature",
        pos: "d2",
        icon: icons["spell_nature_protectionformnature"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases Nature damage done by ${[
          2,
          4,
          6,
          8,
          10,
        ]}% and increases the effect of all healing spells and healing taken by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },

      "Improved Rejuvenation": {
        name: "Improved Rejuvenation",
        pos: "d3",
        icon: icons["spell_nature_rejuvenation"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases the effect of your Rejuvenation spell by ${[
          5,
          10,
          15,
        ]}%.`,
      },

      "Custody of the Nature": {
        name: "Custody of the Nature",
        pos: "d4",
        icon: icons["custody_of_the_nature"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`After being struck by a critical hit, you become immune to critical strikes for the next ${[
          1,
          2,
          3,
        ]} attack(s) or ${[
          3,
          4,
          5,
        ]} sec. In addition, gives your spell effects additional ${[
          15,
          20,
          25,
        ]}% chance to resist dispel effects.`,
      },

      "Nature's Swiftness": {
        name: "Nature's Swiftness",
        pos: "e1",
        icon: icons["spell_nature_ravenform"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`When activated, your next spell becomes an instant cast spell.`,
      },

      "Tranquil Spirit": {
        name: "Tranquil Spirit",
        pos: "e2",
        icon: icons["spell_holy_elunesgrace"],
        maxRank: 5,
        reqPoints: 20,
        description: talentText`Reduces the mana cost of your Healing Touch and Tranquility spells by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%. In addition, increases eddect and reduces threat cause by Tranquility by ${[
          20,
          40,
          60,
          80,
          100,
        ]}%.`,
      },

      "Catharsis": {
        name: "Catharsis",
        pos: "e4",
        icon: icons["catharsis"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Reduces the Mana cost of your Soothe Animal, Hibernate, Remove Curse, Cure Poison, Abolish Poisin, Rebirth and Revive spells by ${[
          15,
          30,
          45,
        ]}%.\nIn addition, your innervate casts grants you ${[
          7,
          14,
          20,
        ]} sec of Innervate effect.`,
      },
      
      "Animism": {
        name: "Animism",
        pos: "f1",
        icon: icons["animism"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases damage and healing done by up to ${[
          8,
          16,
          24,
          32,
          40,
        ]}% of your total Spirit.`,
      },

      "Improved Regrowth": {
        name: "Improved Regrowth",
        pos: "f3",
        icon: icons["spell_nature_resistnature"],
        maxRank: 5,
        reqPoints: 25,
        prereq: "Improved Rejuvenation",
        arrows: [{ dir: "down", from: "d3", to: "f3" }],
        description: talentText`Increases the critical effect chance of your Regrowth spell by ${[
          15,
          30,
          45,
          60,
          75,
        ]}%.`,
      },

      "Swiftmend": {
        name: "Swiftmend",
        pos: "g2",
        icon: icons["inv_relics_idolofrejuvenation"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Tranquil Spirit",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Consumes a Rejuvenation or Regrowth effect on a friendly target to instantly heal them an amount equal to 12 sec. of Rejuvenation or 18 sec. of Regrowth.`,
      },
    },
  },
};
