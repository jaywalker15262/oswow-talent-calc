import { areReqPointsMet, TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/warrior"),
);
const icons = requireAll(require.context("../../assets/icons/warrior"));

export const data: TalentData = {
  Arms: {
    name: "Arms",
    background: backgrounds["arms"],
    icon: icons["ability_rogue_eviscerate"],
    talents: {
      "Improved Heroic Strike": {
        name: "Improved Heroic Strike",
        pos: "a1",
        icon: icons["ability_rogue_ambush"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the rage cost of your Heroic Strike ability by ${[
          1,
          2,
          3,
          4,
          5,
        ]} rage ${[
          "point",
          "points",
          "points",
          "points",
          "points",
        ]}.`,
      },
      "Deflection": {
        name: "Deflection",
        pos: "a2",
        icon: icons["ability_parry"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases your Parry chance by ${[
          1,
          2,
          3,
        ]}%.`,
      },
      "Improved Rend": {
        name: "Improved Rend",
        pos: "a3",
        icon: icons["ability_gouge"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Increases the bleed damage done by your Rend ability by ${[
          10,
          20,
        ]}%.`,
      },
      "Improved Charge": {
        name: "Improved Charge",
        pos: "b1",
        icon: icons["ability_warrior_charge"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the amount of rage generated by your Charge ability by ${[
          4,
          8,
        ]}.`,
      },
      "Tactical Mastery": {
        name: "Tactical Mastery",
        pos: "b3",
        icon: icons["spell_nature_enchantarmor"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`You retain up to ${[
          5,
          10,
          15,
          20,
          25,
        ]} of your rage points when you change stances.`,
      },
      "Improved Thunder Clap": {
        name: "Improved Thunder Clap",
        pos: "b4",
        icon: icons["ability_thunderclap"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Reduces the cost of your Thunder Clap ability by ${[
          1,
          2,
          3,
        ]} rage ${[
          "point",
          "points",
          "points",
        ]} and increases the damage by ${[
          10,
          20,
          30,
        ]}% and the slowing effect by an additional ${[
          4,
          7,
          10,
        ]}%.`,
      },
      "Improved Overpower": {
        name: "Improved Overpower",
        pos: "c1",
        icon: icons["ability_meleedamage"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases the critical strike chance of your Overpower ability by ${[
          25,
          50,
        ]}%.`,
      },
      "Duelist": {
        name: "Duelist",
        pos: "c2",
        icon: icons["ability_warrior_weaponmastery"],
        maxRank: 3,
        reqPoints: 10,
        prereq: "Deflection",
        arrows: [{ dir: "down", from: "a2", to: "c2" }],
        description: talentText`Increases your Parry chance by ${[
          1,
          2,
          3,
        ]}% and the bonus damage done by your Overpower, Heroic Strike, and Mortal Strike abilities by ${[
          13,
          27,
          40
        ]}%.`,
      },
      "Anger Management": {
        name: "Anger Management",
        pos: "c3",
        icon: icons["ability_warrior_endlessrage"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Generates 1 rage per 3 seconds.`,
      },
      "Two-Handed Weapong Specialization": {
        name: "Two-Handed Weapon Specialization",
        pos: "d2",
        icon: icons["inv_axe_09"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases the damage you deal with two-handed melee weapons by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Impale": {
        name: "Impale",
        pos: "d3",
        icon: icons["ability_searingarrow"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Increases the critical strike damage bonus of your abilities in Battle, Defensive and Berserker stance by ${[
          10,
          20,
        ]}%.`,
      },
      "Poleaxe Specialization": {
        name: "Poleaxe Specialization",
        pos: "e1",
        icon: icons["inv_weapon_halbard_01"],
        maxRank: 5,
        reqPoints: 20,
        description: talentText`Increases your chance to get a critical strike with Axes and Polearms by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Sweeping Strikes": {
        name: "Sweeping Strikes",
        pos: "e2",
        icon: icons["ability_rogue_slicedice"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Your next 5 melee attacks strike an additional nearby opponent.  Lasts 20 sec.`,
      },
      "Mace Specialization": {
        name: "Mace Specialization",
        pos: "e3",
        icon: icons["inv_mace_01"],
        maxRank: 5,
        reqPoints: 20,
        description: talentText`Ignore ${[
          2,
          4,
          6,
          8,
          10,
        ]} armor per level when attacking an enemy with a mace.`,
      },
      "Deep Wounds": {
        name: "Deep Wounds",
        pos: "e4",
        icon: icons["ability_backstab"],
        maxRank: 3,
        reqPoints: 20,
        prereq: "Impale",
        arrows: [
          { dir: "right-down", from: "d3", to: "d4"}, 
          { dir: "right-down-down", from: "d4", to: "e4" }
        ], 
        description: talentText`Your critical strikes cause the opponent to bleed, dealing ${[
          16,
          32,
          48,
        ]}% of your melee weapon's average damage over 6 sec.`,
      },
      "Blood Frenzy": {
        name: "Blood Frenzy",
        pos: "f1",
        icon: icons["ability_warrior_bloodfrenzy"],
        maxRank: 2,
        reqPoints: 25,
        description: talentText`Increases your melee attack speed by ${[
          5,
          10,
        ]}%.  In addition, your Rend and Deep Wounds abilities also increase all physical damage caused to that target by ${[
          1,
          2,
        ]}%.`,
      },
      "Improved Hamstring": {
        name: "Improved Hamstring",
        pos: "f3",
        icon: icons["ability_shockwave"],
        maxRank: 3,
        reqPoints: 25,
        description: talentText`Gives your Hamstring ability a ${[
          6,
          13,
          20,
        ]}% chance to immobilize tha target for 5 sec.  In addition your Hamstring slows the enemy's movement speed by an additional ${[
          3,
          6,
          10,
        ]}%.`,
      },
       "Sword Specialization": {
        name: "Sword Specialization",
        pos: "f4",
        icon: icons["inv_sword_27"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Gives you a ${[
          1,
          2,
          3,
          4,
          5,
        ]}% chance yo get an extra attack on the same target after dealing damage with your Sword.`,
      },
      "Mortal Strike": {
        name: "Mortal Strike",
        pos: "g2",
        icon: icons["ability_warrior_savageblow"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Sweeping Strikes",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`A vicious strike that deals weapon damage plus 85 and wounds the target, reducing the effectiveness of any healing by 50% for 10 sec.`,
      },
    },
  },
  Fury: {
    name: "Fury",
    background: backgrounds["fury"],
    icon: icons["ability_warrior_innerrage"],
    talents: {
      "Victory Rush": {
        name: "Victory Rush",
        pos: "a1",
        icon: icons["ability_hunter_harass"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`After killing an opponent that yields experience or honor, restore ${[
          10,
          20,
        ]}% of your maximum health.  Cannot occur more than once every 1 min.`
      },
      "Commanding Presence": {
        name: "Commanding Presence",
        pos: "a2",
        icon: icons["spell_nature_focusedmind"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases the attack power bonus of your Battle Shout and the health bonus of your Commanding Shout by ${[
          8,
          16,
          25
        ]}%.`,
      },
      Cruelty: {
        name: "Cruelty",
        pos: "a3",
        icon: icons["ability_rogue_eviscerate"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your chance to get a critical strike with melee weapons by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Improved Demoralizing Shout": {
        name: "Improved Demoralizing Shout",
        pos: "b2",
        icon: icons["ability_warrior_warcry"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases the melee attack power reduction of your Demoralizing Shout by ${[
          9,
          18,
          27,
          36,
          45,
        ]}%.`,
      },
      "Unbridled Wrath": {
        name: "Unbridled Wrath",
        pos: "b3",
        icon: icons["spell_nature_stoneclawtotem"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Gives you a ${[
          3,
          6,
          9,
          12,
          15,
        ]}% chance to generate an additional 5 Rage points when you deal melee damage with a weapon.
        
This chance is increased to ${[
          8,
          16,
          24,
          32,
          40
        ]}% when wielding a two-handed weapon.`,
      },
      "Booming Voice": {
        name: "Booming Voice",
        pos: "c1",
        icon: icons["spell_nature_purge"],
        maxRank: 2,
        reqPoints: 10,
        prereq: "Piercing Howl",
        arrows: [{ dir: "left", from: "c2", to: "c1" }], 
        description: talentText`Increases the area of effect of your Battle Shout, Demoralizing Shout, Commanding Shout and Piercing Howl by ${[
          25,
          50,
        ]}%.  In addition, reduces the Rage cost of your Battle Shout, Commanding Shout and Intimidating Shout by ${[
          5,
          10,
        ]}.`,
      },
      "Piercing Howl": {
        name: "Piercing Howl",
        pos: "c2",
        icon: icons["spell_shadow_deathscream"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Causes all enemies near the warrior to be dazed, reducing movement speed by 50% for 6 sec.`,
      },
      "Blood Craze": {
        name: "Blood Craze",
        pos: "c3",
        icon: icons["spell_shadow_summonimp"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`After taking any damage while below 50% Health, you have a 15% chance to regenerate ${[
          6,
          12,
          18,
        ]}% of your missing health over 6, but damage taken is increased by ${[
          2,
          3,
          4,
        ]}% for the duration.`,
      },
      "Improved Cleave": {
        name: "Improved Cleave",
        pos: "c4",
        icon: icons["ability_warrior_cleave"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the bonus damage done by your Cleave ability by ${[
          25,
          50,
          75,
        ]}% and gives your Cleave a ${[
          33,
          66,
          100,
        ]}% chance to hit an additional target.`,
      },
      "Dual Wield Specialization": {
        name: "Dual Wield Specialization",
        pos: "d1",
        icon: icons["ability_dualwield"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases the damage done by your offhand weapon by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Improved Execute": {
        name: "Improved Execute",
        pos: "d2",
        icon: icons["inv_sword_48"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Reduces the Rage cost of your Execute ability by ${[
          2,
          5,
        ]}.`,
      },
      "Enrage": {
        name: "Enrage",
        pos: "d3",
        icon: icons["spell_shadow_unholyfrenzy"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Gives you a ${[
          3,
          6,
          9,
          12,
          15,
        ]}% melee damage bonus for 12 swings any time you are the victim of a critical strike or when you activate your Bloodrage ability.`,
      },
      "Improved Slam": {
        name: "Improved Slam",
        pos: "e1",
        icon: icons["ability_warrior_decisivestrike"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Decreases the casting time of your Slam ability by ${[
          0.25,
          0.5,
          0.75,
        ]} sec and gives your Slam a ${[
          33,
          66,
          100,
        ]} chance to not lose casting time when you take damage`,
      },
      "Death Wish": {
        name: "Death Wish",
        pos: "e2",
        icon: icons["spell_shadow_deathpact"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`When activated, increases your physical damage by 20% and makes you immune to Fear effects, but lowers your armor and all resistances by 20%.  Lasts 30 sec.`,
      },
      "Improved Intercept": {
        name: "Improved Intercept",
        pos: "e4",
        icon: icons["ability_rogue_sprint"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Reduces the cooldown of your Intercept abiilty by ${[
          5,
          10,
        ]} sec.`,
      },
      "Improved Berserker Rage": {
        name: "Improved Berserker Rage",
        pos: "f1",
        icon: icons["spell_nature_ancestralguardian"],
        maxRank: 2,
        reqPoints: 25,
        description: talentText`The Berserker Rage ability will generate ${[
          7,
          15,
        ]} rage when used.`,
      },
      "Flurry": {
        name: "Flurry",
        pos: "f3",
        icon: icons["ability_ghoulfrenzy"],
        maxRank: 5,
        reqPoints: 25,
        prereq: "Enrage",
        arrows: [{ dir: "down", from: "d3", to: "f3" }],
        description: talentText`Increases your attack speed by ${[
          5,
          10,
          15,
          20,
          25,
        ]}% for your next 3 swings after dealing a melee critical strike.`,
      },
      "Improved Whirlwind": {
        name: "Improved Whirlwind",
        pos: "f4",
        icon: icons["ability_whirlwind"],
        maxRank: 2,
        reqPoints: 25,
        description: talentText`Reduces the cooldown of your Whirlwind ability by ${[
          1,
          2,
        ]} sec.`,
      },
      "Bloodthirst": {
        name: "Bloodthirst",
        pos: "g2",
        icon: icons["spell_nature_bloodlust"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Death Wish",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Instantly attack the target causing damage equal to 45% of your attack power.  In addition, the next 3 successful melee attacks will restore 20 health.  This effect lasts 8 sec.`,
      },
    },
  },
  Protection: {
    name: "Protection",
    background: backgrounds["protection"],
    icon: icons["inv_shield_06"],
    talents: {
      "Improved Bloodrage": {
        name: "Improved Bloodrage",
        pos: "a1",
        icon: icons["ability_racial_bloodrage"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Increases the instant Rage generated by your Bloodrage ability by ${[
          3,
          6,
        ]}.`,
      },
      "Shield Specialization": {
        name: "Shield Specialization",
        pos: "a2",
        icon: icons["inv_shield_06"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your chance to block attacks with a shield by ${[
          1,
          2,
          3,
          4,
          5,
        ]}% and has a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to generate 3 rage when a block occurs.`,
      },
      "Anticipation": {
        name: "Anticipation",
        pos: "a3",
        icon: icons["spell_nature_mirrorimage"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your Defense skill by ${[
          3,
          6,
          9,
          12,
          15,
        ]}.`,
      },
      "Iron Will": {
        name: "Iron Will",
        pos: "b1",
        icon: icons["spell_magic_magearmor"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases your chance to resist Stun, Fear and Charm effects by an additional ${[
          3,
          6,
          9,
          12,
          15
        ]}%.`,
      },
      "Toughness": {
        name: "Toughness",
        pos: "b3",
        icon: icons["spell_holy_devotion"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases your armor value from items by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Last Stand": {
        name: "Last Stand",
        pos: "c1",
        icon: icons["spell_holy_ashestoashes"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`When activated, this ability temporarily grants all party members within 20 yards 30% of their maximum hit points for 20 sec.  After the effect expires, the hit points are lost.`,
      },
      "Improved Shield Block": {
        name: "Improved Shield Block",
        pos: "c2",
        icon: icons["ability_defend"],
        maxRank: 3,
        reqPoints: 10,
        prereq: "Shield Specialization",
        arrows: [{ dir: "down", from: "a2", to: "c2"}],
        description: talentText`Reduces the cooldown of your Shield Block ability by ${[
          "1 sec",
          "2 secs",
          "3 secs",
        ]} and increases your block amount by ${[
          15,
          30,
          45,
        ]}% for the duration.`,
      },
      "Improved Revenge": {
        name: "Improved Revenge",
        pos: "c3",
        icon: icons["ability_warrior_revenge"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Gives your Revenge ability a ${[
          15,
          30,
          45,
        ]}% chance to stun the target for 3 sec.`,
      },
      "Defiance": {
        name: "Defiance",
        pos: "c4",
        icon: icons["ability_warrior_innerrage"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the threat generated by your attacks by ${[
          5,
          10,
          15,
        ]}% while in Defensive Stance.`,
      },
      "Improved Sunder Armor": {
        name: "Improved Sunder Armor",
        pos: "d1",
        icon: icons["ability_warrior_sunder"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Reduces the cost of your Sunder Armor ability by ${[
          "1 rage point",
          "2 rage points",
          "3 rage points",
        ]}.`,
      },
      "Improved Disarm": {
        name: "Improved Disarm",
        pos: "d2",
        icon: icons["ability_warrior_disarm"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Reduces the cooldown of your Disarm ability by ${[
          5,
          10,
          15,
        ]} secs.`,
      },
      "Improved Taunt": {
        name: "Improved Taunt",
        pos: "d3",
        icon: icons["spell_nature_reincarnation"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Improves your chance to hit with your Taunt ability by ${[
          4,
          8,
        ]}%.`,
      },
      "Vitality": {
        name: "Vitality",
        pos: "e1",
        icon: icons["inv_helmet_21"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases your total Stamina by ${[
          2,
          4,
          6,
        ]}% and your total Strength by ${[
          1,
          2,
          3,
        ]}%.`,
      },
      "Concussion Blow": {
        name: "Concussion Blow",
        pos: "e2",
        icon: icons["ability_warrior_concussionblow"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Stuns the opponent for 5 sec.  If the target is immune to stuns, instead deals 72% weapon damage and causes an extreme amount of threat.`,
      },
      "Improved Shield Bash": {
        name: "Improved Shield Bash",
        pos: "e3",
        icon: icons["ability_warrior_shieldbash"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Gives your Shield Bash ability a ${[
          50,
          100,
        ]}% chance to silence the target for 3 sec.`,
      },
      "Improved Shield Wall": {
        name: "Improved Shield Wall",
        pos: "f1",
        icon: icons["ability_warrior_shieldwall"],
        maxRank: 2,
        reqPoints: 25,
        description: talentText`Increases the effect duration of your Shield Wall ability by ${[
          3,
          6,
        ]} secs and reduces the cooldown by ${[
          5,
          10,
        ]} min.`,
      },      
      "One-Handed Weapon Specialization": {
        name: "One-Handed Weapon Specialization",
        pos: "f3",
        icon: icons["inv_sword_20"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the damage you deal with One-Handed Melee weapons by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },         
      "Shield Slam": {
        name: "Shield Slam",
        pos: "g2",
        icon: icons["inv_shield_05"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Concussion Blow",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Slam the target with your shield, causing 225 to 235 damage, modified by your shield block value, and has a 50% chance of dispelling 1 magic effect on the target.  Also causes a high amount of threat.`,
      },
    },
  },
};
