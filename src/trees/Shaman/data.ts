import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/shaman"),
);
const icons = requireAll(require.context("../../assets/icons/shaman"));

export const data: TalentData = {
  Elemental: {
    name: "Elemental",
    background: backgrounds["elemental"],
    icon: icons["spell_nature_lightning"],
    talents: {
      "Convection": {
        name: "Convection", 
        pos: "a2", 
        icon: icons["spell_nature_wispsplode"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Reduces the Mana cost of your Shock, Lightning Bolt and Chain Lightning spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%`, 
      },
      "Concussion": {
        name: "Concussion", 
        pos: "a3", 
        icon: icons["spell_fire_fireball"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Reverberation": {
        name: "Reverberation", 
        pos: "b1", 
        icon: icons["spell_frost_frostward"], 
        maxRank: 5, 
        reqPoints: 5, 
        description: talentText`Reduces the cooldown of you Shock spells by ${[
          0.2,
          0.4,
          0.6,
          0.8,
          1,
        ]} sec.`, 
      },
      "Cauterizing Flames": {
        name: "Cauterizing Flames", 
        pos: "b2", 
        icon: icons["spell_nature_guardianward"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Increases spell damage bonus of your Flametongue Weapon by ${[
          50,
          100,
        ]}%.`, 
      },
      "Call of Flame": {
        name: "Call of Flame", 
        pos: "b3", 
        icon: icons["spell_fire_immolation"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Increases all Fire damage done by ${[
          3,
          6,
          9,
        ]}%.`, 
      },
      "Improved Fire Totems": {
        name: "Improved Fire Totems", 
        pos: "c1", 
        icon: icons["spell_fire_sealoffire"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText`Reduces the delay before your Fire Nova Totem activates by ${[
          0.5,
          1,
        ]} sec. and decreases the threat generated by your Magma totem by ${[
          25,
          50,
        ]}%.`, 
      },
      "Elemental Warding": {
        name: "Elemental Warding", 
        pos: "c2", 
        icon: icons["spell_nature_spiritarmor"], 
        maxRank: 3, 
        reqPoints: 10, 
        description: talentText`Reduces damage taken from Fire, Frost, and Nature effects by ${[
          4,
          8,
          12,
        ]}%.`, 
      },
      "Lightning Mastery": {
        name: "Lightning Mastery", 
        pos: "c3", 
        icon: icons["spell_lightning_lightningbolt01"], 
        maxRank: 5, 
        reqPoints: 10, 
        description: talentText`Reduces the cast time of your Lightning Bolt and Chain Lightning spells by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`, 
      },
      "Elemental Focus": {
        name: "Elemental Focus",
        pos: "c4", 
        icon: icons["spell_shadow_manaburn"], 
        maxRank: 1, 
        reqPoints: 10, 
        description: talentText`Gives you a 10% chance to enter a Clearcasting state after casting any Fire, Frost, or Nature damage spell.  The Clearcasting state reduces the mana cost of your next 2 damage or healing spells by 40%.`, 
      },
      "Master of Elements": {
        name: "Master of Elements", 
        pos: "d1", 
        icon: icons["spell_frostfire-orb"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Your Fire and Frost spell criticals will refund ${[
          10,
          20,
          30,
        ]}% of their base mana cost.`, 
      },
      "Eye of the Storm": {
        name: "Eye of the Storm", 
        pos: "d2", 
        icon: icons["spell_nature_eyeofthestorm"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Reduces all pushback suffered from damaging attacks by ${[
          17,
          34,
          50,
        ]}%.  Additionally gives you a ${[
          33,
          66,
          100,
        ]}% chance to reduce the pushback suffered from damaging attacks by 50% for 6 sec after being the victim of a melee or ranged critical strike.`, 
      },
      "Call of Thunder": {
        name: "Call of Thunder",
         pos: "d3", 
        icon: icons["spell_nature_callstorm"], 
        maxRank: 3, 
        reqPoints: 15,
        prereq: "Lightning Mastery", 
        arrows: [{ dir: "down", from: "c3", to: "d3" }], 
        description: talentText`Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by an additional ${[
          2,
          4,
          6,
        ]}%.`, 
      },
      "Storm Reach": {
        name: "Storm Reach", 
        pos: "e1", 
        icon: icons["spell_nature_stormreach"], 
        maxRank: 2, 
        reqPoints: 20, 
        description: talentText`Increases the range of your Lightning Bolt and Chain Lighting by ${[
          5,
          10,
        ]} yards.`, 
      },
      "Elemental Fury": {
        name: "Elemental Fury", 
        pos: "e2", 
        icon: icons["spell_fire_volcano"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText`Increases the critical strike damage bonus of your Searing, Magma, and Fire Nova Totems and your Fire, Frost, and Nature spells by 100%.`, 
      },
      "Shamanism": {
        name: "Shamanism", 
        pos: "e4", 
        icon: icons["spell_nature_wispheal"], 
        maxRank: 3, 
        reqPoints: 20,
        prereq: "Elemental Focus", 
        arrows: [{ dir: "down", from: "c4", to: "e4" }], 
        description: talentText`Entering a Clearcasting state increases all party members' spell haste by ${[
          2,
          4,
          6,
        ]}% if within 20 yards of the Shaman.  Lasts 8 sec.`, 
      },
      "Elemental Precision": {
        name: "Elemental Precision", 
        pos: "f1", 
        icon: icons["spell_nature_elementalprecision_1"], 
        maxRank: 3, 
        reqPoints: 25, 
        description: talentText`Reduces the chance for enemies to resist your Fire, Frost and Nature spells by ${[
          1,
          2,
          3,
        ]}% and decreases their magical resistances against your spells by ${[
          13,
          27,
          40,
        ]}.`, 
      },
      "Lightning Overload": {
        name: "Lightning Overload", 
        pos: "f3", 
        icon: icons["spell_nature_lightningoverload"], 
        maxRank: 2, 
        reqPoints: 25,
        prereq: "Call of Thunder", 
        arrows: [{ dir: "down", from: "d3", to: "f3" }], 
        description: talentText`Gives your Lightning Bolt and Chain Lightning spells a ${[
          8,
          16,
        ]}% chance to cast a second, similiar spell on the same target at no additional cost that causes half damage and no threat.`, 
      },
      "Sons of Ice and Fire": {
        name: "Sons of Ice and Fire", 
        pos: "g2", 
        icon: icons["spell_frostresistancetotem_01"], 
        maxRank: 1, 
        reqPoints: 30,
        prereq: "Elemental Fury", 
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Deepens your communion with the elements Water and Fire, teaching you Water Jet and Molten Blast.`, 
      },
    },
  },
  Enhancement: {
    name: "Enhancement",
    background: backgrounds["enhancement"],
    icon: icons["spell_nature_lightningshield"],
    talents: {
      "Guardian Totems": {
        name: "Guardian Totems", 
        pos: "a1", 
        icon: icons["spell_nature_stoneskintotem"], 
        maxRank: 2, 
        reqPoints: 0, 
        description: talentText`Increases the effect of your Resistance Totems, Stoneskin Totem and Windwall Totem by ${[
          10,
          20,
        ]}% and reduces the cooldown of your Grounding Totem by ${[
          1,
          2,
        ]} sec.`, 
      },
      "Ancestral Knowledge": {
        name: "Ancestral Knowledge", 
        pos: "a2", icon: icons["spell_shadow_grimward"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Increases your maximum Mana by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`, 
      },
      "Improved Lightning Shield": {
        name: "Improved Lightning Shield", 
        pos: "a3", 
        icon: icons["spell_nature_lightningshield"], 
        maxRank: 3, 
        reqPoints: 0, 
        description: talentText`Your Lightning Shield gains ${[
          "1 additional charge",
          "2 additional charges",
          "3 additional charges",
        ]}  However, the damage done by your Lightning Shield orbs is decreased by ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Thundering Strikes": {
        name: "Thundering Strikes", 
        pos: "b2", 
        icon: icons["ability_thunderbolt"], 
        maxRank: 5, 
        reqPoints: 5, 
        description: talentText`Improves your chance to get a critical strike with your weapon attacks and Shock spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Anticipation": {
        name: "Anticipation", 
        pos: "b3", 
        icon: icons["spell_nature_mirrorimage"], 
        maxRank: 5, 
        reqPoints: 5, 
        description: talentText`Increases your chance to dodge by an additional ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Enhancing Totems": {
        name: "Enhancing Totems", 
        pos: "c1", 
        icon: icons["spell_nature_earthbindtotem"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText`Increases the effect of your Strength of Earth and Grace of Air Totems by ${[
          8,
          15,
        ]}%.`, 
      },
      "Elemental Devastation": {
        name: "Elemental Devastationy", 
        pos: "c2", 
        icon: icons["classic_spell_fire_elementaldevastation"], 
        maxRank: 5, 
        reqPoints: 10, 
        prereq: "Thundering Strikes", 
        arrows: [{ dir: "down", from: "b2", to: "c2" }], 
        description: talentText`Your offensive spell crits will increase your attack speed by ${[
          5,
          10,
          15,
          20,
          25,
        ]}% for 10 sec.`, 
      },
      "Shamanistic Focus": {
        name: "Shamanistic Focus", 
        pos: "c3", 
        icon: icons["spell_nature_elementalabsorption"], 
        maxRank: 1, 
        reqPoints: 10, 
        description: talentText`Reduces the mana cost of your Shock spells by 25%.`, 
      },
      "Improved Ghost Wolf": {
        name: "Improved Ghost Wolf", 
        pos: "c4", 
        icon: icons["spell_nature_spiritwolf"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText`Reduces the cast time of your Ghost Wolf spell by ${[
          1,
          2,
        ]} sec.`, 
      }, 
      "Improved Weapon Totems": {
        name: "Improved Weapon Totems", 
        pos: "d1", 
        icon: icons["spell_fire_enchantweapon"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`Increases the melee attack power bonus of your Windfury Totem by ${[
          15,
          30,
        ]}% and increases the damage caused by your Flametongue Totem by ${[
          6,
          12,
        ]}%.`, 
      },
      "Toughness": {
        name: "Toughness", 
        pos: "d2", 
        icon: icons["spell_holy_devotion"], 
        maxRank: 5, 
        reqPoints: 15, 
        description: talentText`Increases your Stamina by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%, and reduces the duration of all movement slowing effects by ${[
          6,
          12,
          18,
          24,
          30,
        ]}%.`, 
      },
      "Elemental Weapons": {
        name: "Elemental Weapons", 
        pos: "d3", 
        icon: icons["spell_fire_flametounge"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Increases the melee attack power bonus of your Rockbiter Weapon by ${[
          7,
          14,
          20,
        ]}%, your Windfury Weapon effect by ${[
          20,
          40,
          60,
        ]}% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Ancestral Power": {
        name: "Ancestral Power", 
        pos: "e1", 
        icon: icons["spell_nature_astralrecal"], 
        maxRank: 2, 
        reqPoints: 20, 
        description: talentText`Increases spell damage and healing by an amount equal to ${[
          8,
          15,
        ]}% of your total Attack Power and increases your chance to hit with spells by ${[
          2,
          4,
        ]}%.`,
      },
      "Bloodlust": {
        name: "Bloodlust", 
        pos: "e2", 
        icon: icons["spell_nature_shamanrage"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText`Increases a friendly target's attack speed by 30% and movement speed by 20%.  If the target is someone other than the Shaman, then you will recieve half of the effect as well.  Lasts 15 sec.`, 
      },
      "Weapon Mastery": {
        name: "Weapon Mastery", 
        pos: "e3", 
        icon: icons["ability_hunter_swiftstrike"], 
        maxRank: 3, 
        reqPoints: 20, 
        description: talentText`Increases the damage you deal with all weapons by ${[
          2,
          4,
          6,
        ]}%.`,
      },
      "Sprit Weapons": {
        name: "Sprit Weapons", 
        pos: "e4", 
        icon: icons["ability_dualwieldspecialization"], 
        maxRank: 1, 
        reqPoints: 20,
        prereq: "Elemental Weapons",
        arrows: [
          { dir: "right-down", from: "d3", to: "d4"}, 
          { dir: "right-down-down", from: "d4", to: "e4" }
        ],  
        description: talentText`Gives a chance to parry enemy melee attacks and allows one-hand and off-hand weapons to be equipped in the off-hand.`, 
      },
      "Maelstrom Weapon": {
        name: "Maelstrom Weapon", 
        pos: "f1", 
        icon: icons["spell_shaman_maelstromweapon"], 
        maxRank: 2, 
        reqPoints: 25,
        description: talentText`When you deal damage with a melee weapon, you have a chance${["", " (higher than rank 1)"]} to reduce the cast time of your next Lightning Bolt and Chain Lightning by 20%.  Stacks up to 5 times.  Lasts 20 sec.`, 
      },
      "Unleashed Rage": {
        name: "Unleashed Rage", 
        pos: "f3", 
        icon: icons["spell_nature_unleashedrage"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Causes your critical hits with melee attacks to increase all party members' melee attack power by ${[
          2,
          4,
          6,
          8,
          10,
        ]}% if within 20 yards of the Shaman.  Lasts 10 sec.`, 
      },
      "Stormstrike": {
        name: "Stormstrike", 
        pos: "g2", 
        icon: icons["ability_shaman_stormstrike"], 
        maxRank: 1, 
        reqPoints: 30, 
        prereq: "Bloodlust", 
        arrows: [{ dir: "down", from: "e2", to: "g2" }], 
        description: talentText`Gives you an extra attack.  In addition, your 2 next Nature spells that damage an enemy target restores 20% of your base mana.  Lasts 10 sec.`, 
      },
    },
  },
  Restoration: {
    name: "Restoration",
    background: backgrounds["restoration"],
    icon: icons["spell_nature_magicimmunity"],
    talents: {
      "Nature's Guidance": {
        name: "Nature's Guidance", 
        pos: "a1", 
        icon: icons["spell_frost_stun"], 
        maxRank: 3, 
        reqPoints: 0, 
        description: talentText`Increases your chance to hit with melee attacks and spells by ${[
          1,
          2,
          3,
        ]}%.`, 
      },
      "Tidal Mastery": {
        name: "Tidal Mastery", 
        pos: "a2", 
        icon: icons["spell_nature_tranquility"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Increases the critical effect chance of your healing and lightning spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}% and increases the speed reduction of your Frost Shock by an additional ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Totemic Mastery": {
        name: "Totemic Mastery", 
        pos: "a3", 
        icon: icons["spell_nature_nullward"], 
        maxRank: 2, 
        reqPoints: 0, 
        description: talentText`The radius of your totems is increased by ${[
          25,
          50,
        ]}%.`, 
      },
      "Improved Healing Wave": {
        name: "Improved Healing Wave", 
        pos: "b1", 
        icon: icons["spell_nature_magicimmunity"], 
        maxRank: 5, 
        reqPoints: 5, 
        description: talentText`Reduces the cast time of your Healing Wave by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`, 
      },
      "Totemic Focus": {
        name: "Totemic Focus", 
        pos: "b3", 
        icon: icons["spell_nature_moonglow"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Reduces the Mana cost of your Totems by ${[
          25,
          50,
        ]}%.`, 
      },
      "Nature Grace": {
        name: "Nature Grace", 
        pos: "b4", 
        icon: icons["spell_nature_healingtouch"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Reduces the threat you generate by ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Nature's Guardian": {
        name: "Nature's Guardian", 
        pos: "c1", 
        icon: icons["spell_nature_natureguardian"], 
        maxRank: 3, 
        reqPoints: 10, 
        description: talentText`Reduces the chance you are critically hit by ${[
          2,
          4,
          6,
        ]}%.`, 
      },
      "Tidal Barrier": {
        name: "Tidal Barrier", 
        pos: "c2", 
        icon: icons["spell_frost_wisp"], 
        maxRank: 1, 
        reqPoints: 10, 
        prereq: "Tidal Mastery", 
        arrows: [{ dir: "down", from: "a2", to: "c2" }], 
        description: talentText`Reduces the damage taken from physical attacks and Fire spells by 50%, but reduces damage caused by 30%. Lasts 10 seconds.`, 
      },
      "Spiritwalking": {
        name: "Spiritwalking", 
        pos: "c3", 
        icon: icons["spiritwalker"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText`Reduces the chance you are hit by melee attacks by ${[
          3,
          6,
        ]}%. In addition, reduces the cooldown of your Astral Recall and Reincarnation spells by ${[
          15,
          30,
        ]} minutes and increases the amount of Health and Man you reincarnate with by an additional ${[
          15,
          30,
        ]}%.`, 
      },
      "Nature Focus": {
        name: "Nature Focus", 
        pos: "c4", 
        icon: icons["spell_nature_healingwavelesser"], 
        maxRank: 5, 
        reqPoints: 10, 
        description: talentText`Gives you a ${[
          14,
          28,
          42,
          56,
          70,
        ]}% chance to avoid interruption caused by damage while casting any Healing spell and ${[
          6,
          12,
          18,
          24,
          30,
        ]}% while casting Lightning damange spells.`, 
      },
      "Nature Spirit": {
        name: "Nature Spirit", 
        pos: "d1", 
        icon: icons["spell_nature_preservation"], 
        maxRank: 5, 
        reqPoints: 15, 
        description: talentText`Increases spell damage and healing by up to ${[
          5,
          10,
          15,
          20,
          25,
        ]}% of your total Spirit.`, 
      },
      "Tidal Focus": {
        name: "Tidal Focus", 
        pos: "d2", 
        icon: icons["spell_frost_manarecharge"], 
        maxRank: 5, 
        reqPoints: 15, 
        description: talentText`Reduces the Mana cost of your healing and lightning spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%. Also reduces the Mana cost of your Frost Shock spell by ${[
          10,
          20,
          30,
          40,
          50,
        ]}%.`, 
      },
      "Restorative Totems": {
        name: "Restorative Totems", 
        pos: "d3", 
        icon: icons["spell_nature_manaregentotem"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`Increases the effect of your Mana Tide, Mana Spring and Healing Stream Totems by ${[
          30,
          50,
        ]}%.`, 
      },
      "Ancestral Healing": {
        name: "Ancestral Healing", 
        pos: "e1", 
        icon: icons["spell_nature_undyingstrength"], 
        maxRank: 3, 
        reqPoints: 20, 
        description: talentText`Increases your target's armor value by ${[
          5,
          10,
          15,
        ]}% for 20 seconds after getting a critical effect from one of your healing spells.`, 
      },
      "Purification": {
        name: "Purification", 
        pos: "e2", 
        icon: icons["spell_frost_wizardmark"], 
        maxRank: 5, 
        reqPoints: 20, 
        description: talentText`Increases the effectiveness of your Healing spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}% and increases damage dealt to Undead or Demons by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`, 
      },
      "Nature's Swiftness": {
        name: "Nature's Swiftness", 
        pos: "e3", 
        icon: icons["spell_nature_ravenform"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText`Whan Activated, your next Nature spell with a casting time of less than 10 seconds becomes an instant cast spell.`, 
      },
      "Focused Mind": {
        name: "Focused Mind", 
        pos: "e4", 
        icon: icons["spell_nature_focusedmind"], 
        maxRank: 3, 
        reqPoints: 20, 
        prereq: "Nature Focus", 
        arrows: [{ dir: "down", from: "c4", to: "e4" }], 
        description: talentText`Increases your chance to resist Silence and Interrupt effects by an additional ${[
          10,
          20,
          30,
        ]}%.`, 
      },
      "Healing Way": {
        name: "Healing Way", 
        pos: "f1", 
        icon: icons["spell_nature_healingway"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Your Healing Wave spells have a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to increase the effect of subsequent Healing Wave spells on that target by 3% for 30 seconds. This effect will stack up to 5 times.`, 
      },
      "Meditation": {
        name: "Meditation", 
        pos: "f3", 
        icon: icons["spell_nature_sleep"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Allows ${[
          10,
          20,
          30,
          40,
          50,
        ]}% of you Mana regeneration to continue while casting.`, 
      },
      "Cleansing Wave": {
        name: "Cleansing Wave", 
        pos: "g2", 
        icon: icons["spell_shadow_demonbreath"], 
        maxRank: 1, 
        reqPoints: 30, 
        prereq: "Purification", 
        arrows: [{ dir: "down", from: "e2", to: "g2" }], 
        description: talentText`Attempts to cure 1 poison, disease and magic effect, and additional 1 poison, disease and magic effect in 3 seconds.`, 
      },
    },
  },
};
