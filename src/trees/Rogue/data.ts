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
          5,
          10,
          15,
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
        ]}% increased critical strike chance on your next Sinister Strike, backstab, Ambush, or Ghostly strike.  Lasts 20 seconds.`, 
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
        description: talentText`Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ambush, Ghostly Strike, and Hemorrhage abilities by ${[
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
        prereq: "Vile Poisons", 
        arrows: [
          { dir: "right-left", from: "c1", to: "c2" }, 
          { dir: "right-left-left", from: "c1", to: "d1" },
        ], 
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
      "Bloodthirsty": {
        name: "Bloodthirsty", 
        pos: "d3", 
        icon: icons["ability_warrior_bloodfrenzy"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Increases the damage dealt by your Garrote and Rupture abilities by ${[
          15,
          30,
          45,
        ]}%.`, 
      },
      "Vitality": {
        name: "Vitality", 
        pos: "d4", 
        icon: icons["ability_rogue_quickrecovery"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`Allows ${[
          5,
          10,
        ]}% of your Health regeneration to work while in combat. In addition, healing taken is increased by ${[
          10,
          20,
        ]}%.`, 
      },
      "Cold Blood": {
        name: "Cold Blood", 
        pos: "e2", 
        icon: icons["spell_ice_lament"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText`When activated, increases the critical strike chance of your next Sinister Strike, Backstab, Ambush, or Eviscerate by 100%.`, 
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
        ]}% damage from all sources. In addition, decreases the cooldown of your Kidney Shot ability by ${[
          5,
          10,
          15,
        ]} sec.`, 
      },
      "Total Control": {
        name: "Total Control", 
        pos: "e4", 
        icon: icons["spell_shadow_deathpact"], 
        maxRank: 2, 
        reqPoints: 20, 
        prereq: "Improved Kidney Shot", 
        arrows: [{ dir: "right", from: "e3", to: "e4" }], 
        description: talentText`Increases the duration of your control effects by ${[
          0.5,
          1,
        ]} sec.`, 
      },
      "Seal Fate": {
        name: "Seal Fate", 
        pos: "f1", 
        icon: icons["spell_shadow_chilltouch"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Your critical strikes from abilities that add combo points have a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to add an additional combo point.`, 
      },
      "Cold Blooded": {
        name: "Cold Blooded", 
        pos: "f2", 
        icon: icons["spell_ice_lament"], 
        maxRank: 2, 
        reqPoints: 25, 
        prereq: "Cold Blood", 
        arrows: [{ dir: "down", from: "e2", to: "f2" }], 
        description: talentText`Increases the critical stike chance of your Sinister Strike, Gouge, Backstab, Ambush, Ghostly Strike, Hemorrhage, or Eciscerate abilities by ${[
          3,
          5,
        ]}%.`, 
      },
      "Gaining an Advantage": {
        name: "Gaining an Advantage", 
        pos: "f3", 
        icon: icons["banish_2"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Your auto attacks have a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to reduce the target's stats by 1% and increase your Agility by 1%. Lasts 15 seconds, stacks up to 30 times.`, 
      },
      "Vigor": {
        name: "Vigor", 
        pos: "g2", 
        icon: icons["spell_nature_earthbindtotem"], 
        maxRank: 1, 
        reqPoints: 30, 
        description: talentText`Increases you maximum Energy by 10 and increases your Energy regeneration by 5 per tick.`, 
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
      "Improved Sinister Strike": {
        name: "Improved Sinister Strike", 
        pos: "a2", 
        icon: icons["spell_shadow_ritualofsacrifice"], 
        maxRank: 2, 
        reqPoints: 0, 
        description: talentText`Reduces the Energy cost of your Sinister Strike by ${[
          3,
          5,
        ]}.`, 
      },
      "Bitter Experience": {
        name: "Bitter Experience", 
        pos: "a3", 
        icon: icons["inv_helmet_46"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Increases your dodge chance by ${[
          1,
          2,
          3,
          4,
          5,
        ]} and all resistances by ${[
          8,
          16,
          24,
          32,
          40,
        ]}`, 
      },
      "Deflection": {
        name: "Deflection", 
        pos: "b2", 
        icon: icons["ability_parry"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Increases your Parry chance by ${[
          2,
          4,
          6
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
      "Improved Sprint": {
        name: "Improved Sprint", 
        pos: "b4", 
        icon: icons["ability_rogue_sprint"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Gives a ${[
          50,
          100,
        ]}% chance to remove all movement impeiring effects when you activate your Sprint ability and increases its duration by ${[
          3,
          5,
        ]} sec.`, 
      },
      "Improved Kick": {
        name: "Improved Kick", 
        pos: "c1", 
        icon: icons["ability_kick"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText`Reduces the cost of your Kick by ${[
          10,
          20,
        ]} Energy and gives it a ${[
          50,
          100,
        ]}% chance to silence the target for 3 seconds.`, 
      },
      "Riposte": {
        name: "Riposte", 
        pos: "c2", 
        icon: icons["ability_warrior_challange"], 
        maxRank: 1, 
        reqPoints: 10, 
        prereq: "Deflection", 
        arrows: [{ dir: "down", from: "b2", to: "c2" }], 
        description: talentText`A strike that becomes active after parrying an opponent's attack. This attack deals 150% weapon damage and disarms the target for 6 seconds.`, 
      },
      "Dual Wield Specialization": {
        name: "Dual Wield Specialization", pos: "c3", 
        icon: icons["ability_dualwield"], 
        maxRank: 5, 
        reqPoints: 10, 
        prereq: "Precision", 
        arrows: [{ dir: "down", from: "b3", to: "c3" }], 
        description: talentText`Increases the damage done by your offhand weapon by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`, 
      },
      "Close Quarters Combat": {
        name: "Close Quarters Combat", 
        pos: "c4", 
        icon: icons["inv_gauntlets_04"], 
        maxRank: 5, 
        reqPoints: 10, 
        description: talentText`Increases your chance to get a critical strike with Axe, Fist and Dagger weapons by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Steadfast Determination": {
        name: "Steadfast Determination", 
        pos: "d1", 
        icon: icons["spell_nature_focusedmind"], 
        maxRank: 5, 
        reqPoints: 15, 
        description: talentText`Increases your chance to resist Stun, Fear and Charm effects by an additional ${[
          7,
          14,
          21,
          28,
          35,
        ]}%.`, 
      },
      "Mace Specialization": {
        name: "Mace Specialization", 
        pos: "d2", 
        icon: icons["inv_mace_01"], 
        maxRank: 5, 
        reqPoints: 15, 
        description: talentText`Causes your attacks with maces to ignore up to ${[
          120,
          240,
          360,
          480,
          600,
        ]}(scales with your level) of your target's Armor.`, 
      },
      "Sword Specialization": {
        name: "Sword Specialization", 
        pos: "d3", 
        icon: icons["inv_sword_27"], 
        maxRank: 5, 
        reqPoints: 15, 
        description: talentText`Gives you a ${[
          1,
          2,
          3,
          4,
          5,
        ]}% chance to get an extra attack on the same target after dealing damage with your Sword.`, 
      },
      "Blade Flurry": {
        name: "Blade Flurry", 
        pos: "e2", 
        icon: icons["ability_warrior_punishingblow"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText`Your attacks strike an additional nearby opponent. Lasts 20 seconds.`, 
      },
      "Physical Prowess": {
        name: "Physical Prowess", 
        pos: "e3", 
        icon: icons["spell_nature_strength"], 
        maxRank: 2, 
        reqPoints: 20, 
        description: talentText`Reduces the cooldown of your Sprint and Evasion abilities by ${[
          1,
          2,
        ]} minute${["","s"]} and increases your strength by ${[
          25,
          50,
        ]}% and Stamina by ${[
          5,
          10,
        ]}%.`, 
      },
      "Battle Rush": {
        name: "Battle Rush", 
        pos: "f1", 
        icon: icons["ability_warrior_rampage"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Your auto attacks have ${[
          4,
          8,
          12,
          16,
          20,
        ]}% chance to regain 5 energy.`, 
      },
      "Weapon Expertise": {
        name: "Weapon Expertise", 
        pos: "f2", 
        icon: icons["spell_holy_blessingofstrength"], 
        maxRank: 2, 
        reqPoints: 25, 
        prereq: "Blade Flurry", 
        arrows: [{ dir: "down", from: "e2", to: "f2" }], 
        description: talentText`Increases your attack speed and chance to parry by ${[
          3,
          5,
        ]}%.`, 
      },
      "Aggression": {
        name: "Aggression", 
        pos: "f3", 
        icon: icons["ability_racial_avatar"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Increases the damage of your Sinister Strike, Hemorrhage, and Eviscerate abilities by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Adrenaline Rush": {
        name: "Adrenaline Rush", 
        pos: "g2", 
        icon: icons["spell_shadow_shadowworddominate"], 
        maxRank: 1, 
        reqPoints: 30, 
        description: talentText`You feel the adrenaline, becoming immune to Fear and Incapacitate effects. Energy regeneration rate is increased by 100%. Lasts 20 sec.`, 
      },
    },
  },
  Subtlety: {
    name: "Subtlety",
    background: backgrounds["subtlety"],
    icon: icons["ability_stealth"],
    talents: {
      "Improved Sap": {
        name: "Improved Sap", 
        pos: "a1", 
        icon: icons["ability_sap"], 
        maxRank: 3, 
        reqPoints: 0, 
        description: talentText`Gives you a ${[
          30,
          60,
          90,
        ]}% chance to return to stealth mode after using your Sap ability. In addition, reduces the Energy cost of your Sap ability by ${[
          10,
          20,
          30,
        ]}.`, 
      },
      "Master of Deception": {
        name: "Master of Deception", 
        pos: "a2", 
        icon: icons["spell_shadow_charm"], 
        maxRank: 2, 
        reqPoints: 0, 
        description: talentText`Reduces the chance enemies have to detect you while in Stealth mode. ${["","More effective than Master of Deception(Rank 1)."]}`, 
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
      "Initiative": {
        name: "Initiative", 
        pos: "b1", 
        icon: icons["spell_shadow_fumble"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Gives you a ${[
          30,
          60,
          90,
        ]}% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.`, 
      },
      "Sleight of Hand": {
        name: "Sleight of Hand", 
        pos: "b2", 
        icon: icons["ability_rogue_feint"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Reduces the chance you are critically hit by melee and ranged attacks by ${[
          2,
          4,
          6,
        ]}% and increases the threat reduction of your Feint ability by ${[
          30,
          60,
          90,
        ]}%.`, 
      },
      "Thug Life": {
        name: "Thug Life", 
        pos: "b4", 
        icon: icons["inv_misc_bandana_03"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Reduces the cooldown of you Pickpocket, Distract, and Disarm Trap by ${[
          40,
          80,
        ]}% and reduces cost of your distract by ${[
          50,
          100,
        ]}%. Also increases the amount of money you gain from pickpocketing by ${[
          20,
          40,
        ]}% and reputation gains by ${[
          5,
          10,
        ]}%.`, 
      },
      "Setup": {
        name: "Setup", 
        pos: "c1", 
        icon: icons["spell_nature_mirrorimage"], 
        maxRank: 3, 
        reqPoints: 10, 
        description: talentText`Adds a ${[
          30,
          60,
          90,
        ]}% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.`, 
      },
      "Ghostly Strike": {
        name: "Ghostly Strike", 
        pos: "c2", 
        icon: icons["spell_shadow_curse"], 
        maxRank: 1, 
        reqPoints: 10, 
        description: talentText`A strike that deals 125% weapon damage and increases your chance to doge melee attacks, to avoid ranged attacks, or to resist offensive spells by 15% for 5 seconds. Awards 1 combo point.`, 
      },
      "Improved Ambush": {
        name: "Improved Ambush", 
        pos: "c3", 
        icon: icons["ability_rogue_ambush"], 
        maxRank: 3, 
        reqPoints: 10, 
        prereq: "Opportunity", 
        arrows: [{ dir: "down", from: "a3", to: "c3" }], 
        description: talentText`Increases the critical strike chance of your Ambush ability by ${[
          15,
          30,
          45,
        ]}%, and reduces the threat caused by ${[
          33,
          66,
          99,
        ]}%.`, 
      },
      "Camouflage": {
        name: "Camouflage", 
        pos: "c4", 
        icon: icons["ability_stealth"], 
        maxRank: 5, 
        reqPoints: 10, 
        description: talentText`Increases your speed while stealthed by ${[
          5,
          10,
          15,
          20,
          25,
        ]} and reduces the cooldown of your Stealth ability by ${[
          1,
          2,
          3,
          4,
          5,
        ]} sec.`, 
      },
      "Heightened Senses": {
        name: "Heightened Senses", 
        pos: "d1", 
        icon: icons["ability_ambush"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`Increases your Stealth detection and reduces the chance you are hit by spells and ranged attack by ${[
          3,
          6,
        ]}%. ${[""," More effective than Heightened Senses (Rank 1)."]}`, 
      },
      "Elusiveness": {
        name: "Elusiveness", 
        pos: "d2", 
        icon: icons["spell_magic_lesserinvisibilty"], 
        maxRank: 2, 
        reqPoints: 15, 
        prereq: "Ghostly Strike", 
        arrows: [{ dir: "down", from: "c2", to: "d2" }], 
        description: talentText`Reduces the cooldown of your Evasion, Vanish, Blind and Cloak of Shadows abilities by ${[
          1,
          2,
        ]} min.`, 
      },
      "Serrated Blades": {
        name: "Serrated Blades", 
        pos: "d3", 
        icon: icons["inv_sword_17"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Causes your attacks to ignore up to ${[
          100,
          200,
          300,
        ]} of your target's Armor and increases the duration of your Garrote and Rupture ablities by ${[
          2,
          4,
          6,
        ]} sec. The amount of Armor reduced increases with your level.`, 
      },
      "Cloak of Shadows": {
        name: "Cloak of Shadows", 
        pos: "e2", 
        icon: icons["spell_shadow_nethercloak"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText`Protects the Rogue from all spells for 5 seconds. Does not break stealth.`, 
      },
      "Dirty Deeds": {
        name: "Dirty Deeds", 
        pos: "e3", 
        icon: icons["spell_shadow_summonsuccubus"], 
        maxRank: 3, 
        reqPoints: 20, 
        description: talentText`Reduces the Energy cost of your Cheap Shot and Garrote abilities by ${[
          10,
          20,
          30,
        ]}.`, 
      },
      "Hemorrhage": {
        name: "Hemorrhage", 
        pos: "e4", 
        icon: icons["spell_shadow_lifedrain"], maxRank: 1, reqPoints: 20, 
        prereq: "Serrated Blades", 
        arrows: [
          { dir: "right-down", from: "d3", to: "d4" }, 
          { dir: "right-down-down", from: "d4", to: "e4" },
        ], 
        description: talentText`An instant strike that damages the opponent and causes the target to hemorrhage, increasing any Physical damage dealt to the target by up to 7. Lasts 30 charges or 15 seconds. Awards 1 combo point.`, 
      },
      "Brigandage": {
        name: "Brigandage", 
        pos: "f1", 
        icon: icons["inv_sword_11"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Your auto attacks drain ${[
          0.3,
          0.6,
          0.9,
          1.2,
          1.5,
        ]} per level amount of Mana from a target. For each mana drained this way, the target takes 0.3 Shadow Damage.`, 
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
      "Enveloping Shadows": {
        name: "Enveloping Shadows", 
        pos: "g2", 
        icon: icons["ability_rogue_envelopingshadows"], 
        maxRank: 3, 
        reqPoints: 30, 
        prereq: "Cloak of Shadows", 
        arrows: [{ dir: "down", from: "e2", to: "g2" }], 
        description: talentText`Increases your chance to avoid area of effect spells by an additional ${[
          10,
          20,
          30,
        ]}%. While stealthed the effect is doubled.`, 
      },
      "Preparation": {
        name: "Preparation", 
        pos: "g3", 
        icon: icons["spell_shadow_antishadow"], 
        maxRank: 1, 
        reqPoints: 30, 
        description: talentText`When activated, this ability immediately finishes the cooldown on your Rogue abilities.`, 
      },
    },
  },
};
