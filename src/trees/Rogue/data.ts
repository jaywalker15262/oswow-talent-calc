import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/rogue"),
);
const icons = requireAll(require.context("../../assets/icons/rogue"));

export const data: TalentData = {
  Assassination: {
    name: "Assassination",
    background: backgrounds["assassination"],
    icon: icons["ability_rogue_eviscerate"],
    talents: {
      "Improved Eviscerate": {
        name: "Improved Eviscerate", 
        pos: "a2", 
        icon: icons["ability_rogue_eviscerate"], 
        maxRank: 3, 
        reqPoints: 0, 
        description: talentText`Increases the damage done by your Eviscerate ability by ${[
          7,
          14,
          20,
        ]}%.`,
      },
      "Remorseless Attacks": {
        name: "Remorseless Attacks", 
        pos: "a3", 
        icon: icons["ability_fiegndead"], 
        maxRank: 2, 
        reqPoints: 0, 
        description: talentText`After killing an opponent that yields experience or honor, you gain a ${[
          20,
          40,
        ]}% increased critical strike chance on your next Sinister Strike, backstab, or Ambush.  Lasts 20 seconds.`, 
      },
      "Malice": {
        name: "Malice", 
        pos: "a4", 
        icon: icons["ability_racial_bloodrage"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Increases your critical strike chance by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Ruthlessness": {
        name: "Ruthlessness", 
        pos: "b1", 
        icon: icons["ability_druid_disembowel"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Guves your finishing moves a ${[
          20,
          40,
          60,
        ]}% chance to add a combo point on your target.`, 
      },
      "Blood Splatter": {
        name: "Blood Splatter", 
        pos: "b2", 
        icon: icons["ability_rogue_rupture"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Increases the damage caused by your Garrote and Rupture abilities ${[
          15,
          30,
        ]}%.`, 
      },
      "Improved Backstab": {
        name: "Improved Backstab", 
        pos: "b3", 
        icon: icons["ability_backstab"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Increases the critical strike chance of your Backstab ability by ${[
          10,
          20,
          30,
        ]}%.`, 
      },
      "Vile poisons": {
        name: "Vile poisons", 
        pos: "c2", 
        icon: icons["ability_rogue_feigndeath"], 
        maxRank: 5, 
        reqPoints: 10, 
        description: talentText`Increases damage dealt by your poisons by ${[
          4,
          8,
          12,
          16,
          20
        ]}% and gives your poisons an additional ${[
          8,
          16,
          24,
          32,
          40,
        ]}% to resist dispel effects.
        
Additionally increases the chance to apply poisons to your target by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Fel Poison": {
        name: "Fel Poison", 
        pos: "c3", 
        icon: icons["ability_creature_poison_06"], 
        maxRank: 1,
        reqPoints: 10, 
        description: talentText`Your poisons are infused with Fel magic and can Elementals and Mechanical creatures.  The infused Fel magic causes your maximum energy capacity to swell up by 10 Energy.`, 
      },
      "Lethality": {
        name: "Lethality", 
        pos: "c4", 
        icon: icons["ability_criticalstrike"], 
        maxRank: 5, 
        reqPoints: 10, 
        prereq: "Malice", 
        arrows: [{ dir: "down", from: "a4", to: "c4" }], 
        description: talentText`Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ambush, and Hemorrhage abilities by ${[
          6,
          12,
          18,
          24,
          30,
        ]}%.`, 
      },
      "Poison Paragon": {
        name: "Poison Paragon", 
        pos: "d1", 
        icon: icons["ability_rogue_poisonparagon"], 
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases the critical strike chance of your attacks made against any target you have poisoned by ${[
          2,
          4,
          6,
        ]}% and reduces the duration of all Poison effects applied to you by ${[
          17,
          34,
          50.
        ]}%.`, 
      },
      "Quick Recovery": {
        name: "Quick Recovery", 
        pos: "d2", 
        icon: icons["ability_rogue_quickrecovery"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`All healing effects on you are increased by ${[
          10,
          20,
        ]}%.  In addition, your finishing moves cost ${[
          40,
          80,
        ]}% less Energy when they fail to hit.`, 
      },
      "Improved Expose Armor": {
        name: "Improved Expose Armor", 
        pos: "d3", 
        icon: icons["ability_warrior_riposte"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`Increases the armor reduced by your Expose Armor ability by ${[
          25,
          50,
        ]}% and reduces the Energy cost by ${[
          5,
          10,
        ]}.`, 
      },
      "Venomous Wounds": {
        name: "Venomous Wounds", 
        pos: "e1", 
        icon: icons["ability_rogue_venomouswounds"], 
        maxRank: 5, 
        reqPoints: 20, 
        description: talentText`Each time your Rupture or Garrote deals damage to a poisoned enemy, you have a ${[
          12,
          24,
          36,
          48,
          60
        ]}% to deal 36 + 3% of your bonus Attack Power as additional Nature damage and to regain 8 Energy.`, 
      },
      "Cold Blood": {
        name: "Cold Blood", 
        pos: "e2", 
        icon: icons["spell_ice_lament"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText`When activated, increases the critical strike chance of your next offensive ability by 100%.`, 
      },
      "Improved Kidney Shot": {
        name: "Improved Kidney Shot", 
        pos: "e3", 
        icon: icons["ability_rogue_kidneyshot"], 
        maxRank: 3, 
        reqPoints: 20, 
        description: talentText`While affected by you Kidney Shot ability, the target receives an additional ${[
          3,
          6,
          9,
        ]}% damage from all sources.`, 
      },
      "Seal Fate": {
        name: "Seal Fate", 
        pos: "f2", 
        icon: icons["ability_rogue_sealfate"], 
        maxRank: 5, 
        reqPoints: 25, 
        prereq: "Cold Blood", 
        arrows: [{ dir: "down", from: "e2", to: "f2" }], 
        description: talentText`Your critical strikes from abilities that add combo points have a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to add an additional combo point.`, 
      },
      "Graverot Toxin": {
        name: "Graverot Toxin", 
        pos: "g2", 
        icon: icons["ability_rogue_poisonthrill"], 
        maxRank: 1, 
        reqPoints: 30, 
        description: talentText`Coats your weapons in a poison that lasts for 1 minute.  Each strike has a 10%(the proc chance is indeed affected by Vile Poisons) chance of poisoning the enemy, increasing Poison damage taken by 10% for 10 sec.  Additionally, has a small chance to put the enemy to sleep for 1 second.  Stacks up to 8 times on a single target and cannot be refreshed at maximum stacks.`, 
      },
    },
  },
  Combat: {
    name: "Combat",
    background: backgrounds["combat"],
    icon: icons["ability_backstab"],
    talents: {
      "Improved Gouge": {
        name: "Improved Gouge", 
        pos: "a1", 
        icon: icons["ability_gouge"], 
        maxRank: 3, 
        reqPoints: 0, 
        description: talentText`Increases the effect duration of you Gouge ability by ${[
          0.5,
          1,
          1.5,
        ]} sec.`, 
      },
      "Deflection": {
        name: "Deflection", 
        pos: "a2", 
        icon: icons["ability_parry"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Increases your Parry chance by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Improved Sinister Strike": {
        name: "Improved Sinister Strike", 
        pos: "a3", 
        icon: icons["spell_shadow_ritualofsacrifice"], 
        maxRank: 2, 
        reqPoints: 0, 
        description: talentText`Reduces the Energy cost of your Sinister Strike by ${[
          3,
          5,
        ]}.`, 
      },
      "Improved Slice and Dice": {
        name: "Improved Slice and Dice", 
        pos: "b1", 
        icon: icons["ability_rogue_slicedice"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Increases the duration of your Slice and Dice ability by ${[
          15,
          30,
          45,
        ]}%.`, 
      },
      "Precision": {
        name: "Precision", 
        pos: "b3", 
        icon: icons["ability_marksmanship"], 
        maxRank: 5, 
        reqPoints: 5, 
        description: talentText`Increases your chance to hit with melee weapons by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Vitality": {
        name: "Vitality", 
        pos: "b4", 
        icon: icons["ability_warrior_revenge"], 
        maxRank: 2,
        reqPoints: 5, 
        description: talentText`Increases your total Stamina by ${[
          2,
          4,
        ]}% and your total Agilit by ${[
          1,
          2,
        ]}%.`, 
      },
      "Endurance": {
        name: "Endurance", 
        pos: "c1", 
        icon: icons["spell_shadow_shadowward"], 
        maxRank: 2,
        reqPoints: 10, 
        description: talentText`Reduces the cooldown of your Sprint and Evasion abilities by ${[
          "45 sec",
          "1.5 min",
        ]}.`,
      },
      "Riposte": {
        name: "Riposte", 
        pos: "c2", 
        icon: icons["ability_warrior_challange"], 
        maxRank: 2, 
        reqPoints: 10, 
        prereq: "Deflection", 
        arrows: [{ dir: "down", from: "a2", to: "c2" }], 
        description: talentText`A strike that becomes active after ${[ 
          "parrying an opponent's attack.  This attack deals 150% weapon damage and disarms the target for 6 seconds.",
          "the opponent dodges.  This attack deals 175% weapon damage.  Awards 1 combo point.",
        ]}`, 
      },
      "Dual Wield Specialization": {
        name: "Dual Wield Specialization", pos: "c3", 
        icon: icons["ability_dualwield"], 
        maxRank: 3, 
        reqPoints: 10, 
        prereq: "Precision", 
        arrows: [{ dir: "down", from: "b3", to: "c3" }], 
        description: talentText`Increases the damage done by your offhand weapon by ${[
          10,
          20,
          30,
        ]}%.`, 
      },
      "Improved Kick": {
        name: "Improved Kick", 
        pos: "d1", 
        icon: icons["ability_kick"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`Gives your Kick ability a 100% chance to silence the target for ${[
          2,
          4,
        ]} sec.`, 
      },
      "Aggression": {
        name: "Aggression", 
        pos: "d2", 
        icon: icons["ability_racial_avatar"], 
        maxRank: 5, 
        reqPoints: 15, 
        description: talentText`Increases the damage of your Sinister Strike and Eviscerate abilities by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`, 
      },
      "Improved Sprint": {
        name: "Improved Sprint", 
        pos: "d3", 
        icon: icons["ability_rogue_sprint"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`Gives a ${[
          50,
          100,
        ]}% chance to remove all movement impeiring effects when you activate your Sprint ability.`, 
      },
      "Mace Specialization": {
        name: "Mace Specialization", 
        pos: "e1", 
        icon: icons["inv_mace_01"], 
        maxRank: 5, 
        reqPoints: 20, 
        description: talentText`Ignore ${[
          2,
          4,
          6,
          8,
          10,
        ]} armor per level when attacking an enenmy with a Mace.`, 
      },
      "Blade Flurry": {
        name: "Blade Flurry", 
        pos: "e2", 
        icon: icons["ability_warrior_punishingblow"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText`Increases your attack speed by 20%.  In addition, attacks strike an additional nearby opponent.  Lasts 15 seconds.`, 
      },
      "Sword Specialization": {
        name: "Sword Specialization", 
        pos: "e3", 
        icon: icons["inv_sword_27"], 
        maxRank: 5, 
        reqPoints: 20, 
        description: talentText`Gives you a ${[
          1,
          2,
          3,
          4,
          5,
        ]}% chance to get an extra attack on the same target after dealing damage with your Sword.`, 
      },
      "Close Quarters Combat": {
        name: "Close Quarters Combat", 
        pos: "e4", 
        icon: icons["inv_weapon_shortblade_05"], 
        maxRank: 5, 
        reqPoints: 20, 
        description: talentText`Increases your chance to get a critical strike with Daggers and Fist Weapons by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Cut to the Chase": {
        name: "Cut to the Chase", 
        pos: "f2", 
        icon: icons["ability_rogue_cuttothechase"], 
        maxRank: 3, 
        reqPoints: 25, 
        prereq: "Blade Flurry", 
        arrows: [{ dir: "down", from: "e2", to: "f2" }], 
        description: talentText`Your Eviscerate has a ${[
          20,
          40,
          60
        ]}% to cause your next Slice and Dice to not consume any combot points.  Lasts 30 sec.`, 
      },
      "Lightning Reflexes": {
        name: "Lightning Reflexes", 
        pos: "f3", 
        icon: icons["spell_nature_invisibilty"], 
        maxRank: 3, 
        reqPoints: 25, 
        description: talentText`Increases your Dodge chance by ${[
          2,
          4,
          6,
        ]}% and your melee haste by ${[
          4,
          7,
          10,
        ]}%.`, 
      },
      "Adrenaline Rush": {
        name: "Adrenaline Rush", 
        pos: "g2", 
        icon: icons["spell_shadow_shadowworddominate"], 
        maxRank: 1, 
        reqPoints: 30, 
        description: talentText`Increases your Energy regeneration rate by 100%.  Lasts 15 sec.`, 
      },
    },
  },
  Subtlety: {
    name: "Subtlety",
    background: backgrounds["subtlety"],
    icon: icons["ability_stealth"],
    talents: {
      "Street Smarts": {
        name: "Street Smarts", 
        pos: "a1", 
        icon: icons["ability_rogue_sinistercalling"], 
        maxRank: 3, 
        reqPoints: 0, 
        description: talentText`Increases the amount of money pickpocketed by ${[
          4,
          7,
          10,
        ]}% reduces the casting time of Pick Lock and Disarm Trap by ${[
          0.5,
          1,
          1.5,
        ]} sec.  Additionally, reduces the cooldown of Distract by ${[
          25,
          50,
          75,
        ]}% and its Energy cost by ${[
          33,
          66,
          100,
        ]}%.`, 
      },
      "Master of Deception": {
        name: "Master of Deception", 
        pos: "a2", 
        icon: icons["spell_shadow_charm"], 
        maxRank: 2, 
        reqPoints: 0, 
        description: talentText`Reduces the chance enemies have to detect you while in Stealth mode. ${[""," More effective than Master of Deception(Rank 1)."]}`, 
      },
      "Opportunity": {
        name: "Opportunity", 
        pos: "a3", 
        icon: icons["ability_warrior_warcry"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Increases the damage dealt when striking from behind with your Backstab, Garrote, or Ambush abilities by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%.`, 
      },
      "Sleight of Hand": {
        name: "Sleight of Hand", 
        pos: "b1", 
        icon: icons["ability_rogue_feint"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Reduces the chance you are critically hit by melee and ranged attacks by ${[
          1,
          2,
        ]}% and increases the threat reduction of your Feint ability by ${[
          15,
          30,
        ]}%.`, 
      },
      "Dirty Tricks": {
        name: "Dirty Tricks", 
        pos: "b2", 
        icon: icons["ability_sap"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Increases the range of your Blind and Sap abilities by ${[
          2,
          5,
        ]} yards and reduces the Energy cost of your Blind and Sap abilities by ${[
          25,
          50,
        ]}%.`, 
      },
      "Camouflage": {
        name: "Camouflage", 
        pos: "b3", 
        icon: icons["ability_stealth"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Increases your speed while stealthed by ${[
          5,
          10,
          15,
        ]} and reduces the cooldown of your Stealth ability by ${[
          2,
          4,
          6,
        ]} sec.`, 
      },
      "Relentless Strikes": {
        name: "Relentless Strikes", 
        pos: "c1", 
        icon: icons["ability_warrior_decisivestrike"], 
        maxRank: 3, 
        reqPoints: 10, 
        description: talentText`Your finishing moves have a ${[
          7,
          14,
          20,
        ]}% chance per combo point to restore 25 energy.`, 
      },
      "Hemorrhage": {
        name: "Hemorrhage", 
        pos: "c2", 
        icon: icons["spell_shadow_lifedrain"],
        maxRank: 1,
        reqPoints: 10, 
        description: talentText`An instant strike that damages the opponent and causes the target to hemorrhage, increasing any Physical damage dealt to the target by up to 3.  Lasts 30 charges or 15 seconds.  Awards 1 combo point.`, 
      },
      "Elusiveness": {
        name: "Elusiveness", 
        pos: "c3", 
        icon: icons["spell_magic_lesserinvisibilty"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText`Reduces the cooldown of your Vanish and Blind abilities by ${[
          "45 sec",
          "1.5 min",
        ]}.`, 
      },
      "Improved Ambush": {
        name: "Improved Ambush", 
        pos: "c4", 
        icon: icons["ability_rogue_ambush"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText`Increases the critical strike chance of your Ambush ability by ${[
          20,
          40,
        ]}%, and reduces the threat caused by the same amount.`, 
      },
      "Setup": {
        name: "Setup", 
        pos: "d1", 
        icon: icons["spell_nature_mirrorimage"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Adds a ${[
          25,
          50,
          75,
        ]}% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.`, 
      },
      "Initiative": {
        name: "Initiative", 
        pos: "d2", 
        icon: icons["spell_shadow_fumble"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Gives you a ${[
          30,
          60,
          90,
        ]}% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.`, 
      },
      "Heightened Senses": {
        name: "Heightened Senses", 
        pos: "d4", 
        icon: icons["ability_ambush"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`Increases your Stealth detection and reduces the chance you are hit by spells and ranged attack by ${[
          3,
          6,
        ]}%. ${[""," More effective than Heightened Senses (Rank 1)."]}`, 
      },
      "Serrated Blades": {
        name: "Serrated Blades", 
        pos: "d3", 
        icon: icons["inv_sword_17"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Your attacks ignore ${[
          1.67,
          3.34,
          5,
        ]} of your opponent's armor per level and increases the damage dealt by your Rupture ablity by ${[
          10,
          20,
          30,
        ]}%.`, 
      },
      "Enveloping Shadows": {
        name: "Enveloping Shadows", 
        pos: "e1", 
        icon: icons["ability_rogue_envelopingshadows"], 
        maxRank: 3, 
        reqPoints: 30,  
        description: talentText`Increases your chance to avoid area of effect attacks by an additional ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Premeditation": {
        name: "Premeditation", 
        pos: "e2", 
        icon: icons["spell_shadow_possession"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText`When used, adds 2 combo points to your target.  You must add to or use those combo points within 20 sec or the combo points are lost.`, 
      },
      "Dirty Deeds": {
        name: "Dirty Deeds", 
        pos: "e3", 
        icon: icons["spell_shadow_summonsuccubus"], 
        maxRank: 2, 
        reqPoints: 20, 
        description: talentText`Reduces the Energy cost of your Cheap Shot and Garrote abilities by ${[
          10,
          20,
        ]}.  Additionally, your special abilities cause ${[
          10,
          20,
        ]}% more damage against targets above 75% health.`, 
      },
      "Deadliness": {
        name: "Deadliness", 
        pos: "f3", 
        icon: icons["inv_weapon_crossbow_11"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Increases your Attack Power by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`, 
      },
      "Preparation": {
        name: "Preparation", 
        pos: "g2", 
        icon: icons["spell_shadow_antishadow"], 
        maxRank: 1, 
        reqPoints: 30,
        prereq: "Premeditation", 
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`When activated, this ability immediately finishes the cooldown on your other Rogue abilities.`, 
      },
    },
  },
};
