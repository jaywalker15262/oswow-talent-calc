import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/paladin"),
);
const icons = requireAll(require.context("../../assets/icons/paladin"));

export const data: TalentData = {
  Holy: {
    name: "Holy",
    background: backgrounds["holy"],
    icon: icons["spell_holy_holybolt"],
    talents: {
      "Divine Intellect": {
        name: "Divine Intellect", 
        pos: "a2", 
        icon: icons["spell_nature_sleep"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Increase you total Intellect by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Benediction": {
        name: "Benediction", 
        pos: "a3",
        icon: icons["spell_frost_windwalkon"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Reduces the Mana cost of your Judgement and Seal spells by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%.`, 
      },
      "Improved Blessing of Wisdom": {
        name: "Improved Blessing of Wisdom", 
        pos: "b1", 
        icon: icons["spell_holy_sealofwisdom"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Increases the effect of your Blessing of Wisdom spell by ${[
          10,
          20,
        ]}%.`, 
      },
      "Spiritual Focus": {
        name: "Spiritual Focus", 
        pos: "b2", 
        icon: icons["spell_arcane_blink"], 
        maxRank: 5, 
        reqPoints: 5, 
        description: talentText`Gives your Flash of Light, Holy Light and Exorcism spells a ${[
          14,
          28,
          42,
          56,
          70
        ]}% chance to not lose casting time when you take damage.`, 
      },
      "Improved Seal of Righteousness": {
        name: "Improved Seal of Righteousness", 
        pos: "b3", 
        icon: icons["ability_thunderbolt"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Increase the damage done by your Seal of Righteousness and Judgement of Righteousness by ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Healing Light": {
        name: "Healing Light", 
        pos: "c1", 
        icon: icons["spell_holy_holybolt"], 
        maxRank: 3, 
        reqPoints: 10, 
        description: talentText`Increases the amount healed by your Holy Light, Flash of Light and the effectiveness of Holy Shock spells by ${[
          4,
          8,
          12,
        ]}%.`, 
      },
      "Sanctity Aura": {
        name: "Sanctity Aura", 
        pos: "c2", 
        icon: icons["spell_holy_mindvision"], 
        maxRank: 1, 
        reqPoints: 10, 
        description: talentText`Increases Holy damage done by party members within 30 yards by 10%.  Players may only have one Aura on them per Paladin at any one time.`, 
      },
      "Improved Lay on Hands": {
        name: "Improved Lay on Hands", 
        pos: "c3", 
        icon: icons["spell_holy_layonhands"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText`Gives the target of your Lay on Hands spell ${[
          4,
          8,
        ]}% reduced physical damage taken for 2 min.  In addition, the cooldown of your Lay on Hands spell is reduced by ${[
          10,
          20,
        ]} min.`, 
      },
      "Unyielding Faith": {
        name: "Unyielding Faith", 
        pos: "c4", 
        icon: icons["spell_holy_unyieldingfaith"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText`Increases your chance to resist Fear and Disorient effects by an additional ${[
          5,
          10,
        ]}%.`, 
      },
      "Purifying Power": {
        name: "Purifying Power", 
        pos: "d1", 
        icon: icons["spell_holy_purifyingpower"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`Reduces the Mana cost of your Cleanse, Purify and Consecration spells by ${[
          5,
          10,
        ]}% and increases the damage your Exorcism and Holy Wrath spells by ${[
          10,
          20,
        ]}%.`, 
      },
      "Illumination": {
        name: "Illumination", 
        pos: "d2", 
        icon: icons["spell_holy_greaterheal"], 
        maxRank: 5, 
        reqPoints: 15,  
        description: talentText`After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell you have a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to gain Mana equal to 60% of the base cost of the spell.`, 
      },
      "Improved Concentration Aura": {
        name: "Improved Concentration Aura", 
        pos: "d3", 
        icon: icons["spell_holy_mindsooth"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Increases the effect of your Concentration Aura by an additional ${[
          5,
          10,
          15,
        ]}% and gives all group members affected by the aura an additional ${[
          5,
          10,
          15,
        ]}% chance to resist Silence and Interrupt effects.`, 
      },
      "Holy Guidance": {
        name: "Holy Guidance", 
        pos: "e1", 
        icon: icons["ability_paladin_holyguidance"], 
        maxRank: 5, 
        reqPoints: 20, 
        description: talentText`Increases spell damage and healing by up to ${[
          4,
          8,
          12,
          16,
          20,
        ]}% of your total Intellect.`, 
      },
      "Divine Favor": {
        name: "Divine Favor", 
        pos: "e2", 
        icon: icons["spell_holy_heal"], 
        maxRank: 1,
        reqPoints: 20,
        prereq: "Illumination", 
        arrows: [{ dir: "down", from: "d2", to: "e2" }], 
        description: talentText`When activated, gives your next Flash of Light, Holy Light, or Holy Shock spell a 100% critical effect chance.`, 
      },
      "Revelation": {
        name: "Revelation", 
        pos: "e3", 
        icon: icons["spell_holy_healingaura"], 
        maxRank: 2, 
        reqPoints: 20, 
        description: talentText`Increases the effectiveness of your Seal of Light and Seal of Wisdom by ${[
          10,
          20,
        ]}%.  Additionally, increases the the effectiveness of your Judgement of Light and Judgement of Wisdom by ${[
          10,
          20,
        ]}% as well as the amount of friendly targets affected by ${[
          1,
          2,
        ]}.`, 
      },
      "Holy Power": {
        name: "Holy Power", 
        pos: "f3", 
        icon: icons["spell_holy_power"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Increases the critical effect chance of your Holy spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Holy Shock": {
        name: "Holy Shock", 
        pos: "g2", 
        icon: icons["spell_holy_searinglight"], 
        maxRank: 1, 
        reqPoints: 30,
        prereq: "Divine Favor", 
        arrows: [{ dir: "down", from: "e2", to: "g2" }], 
        description: talentText`Blasts the target with Holy energy, causing 202 to 220 Holy damage to an enemy, or 313 to 341 healing to an ally.`, 
      },
    },
  },
  Protection: {
    name: "Protection",
    background: backgrounds["protection"],
    icon: icons["spell_holy_devotionaura"],
    talents: {
      "Divine Strength": {
        name: "Divine Strength", 
        pos: "a2", 
        icon: icons["ability_golemthunderclap"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Increases your Strength by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Redoubt": {
        name: "Redoubt", 
        pos: "a3", 
        icon: icons["ability_defend"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Damaging melee and ranged attacks against you have a 10% chance to increase your chance to block by ${[
          6,
          12,
          18,
          24,
          30,
        ]}%.  Lasts 10 sec or 5 blocks.`, 
      },
      "Improved Devotion Aura": {
        name: "Improved Devotion Aura", 
        pos: "b1", 
        icon: icons["spell_holy_devotionaura"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Increases the armor bonus of your Devotion Aura by ${[
          8,
          16,
          25,
        ]}%.`, 
      },
      "Guardian's Favor": {
        name: "Guardian's Favor", 
        pos: "b2", 
        icon: icons["spell_holy_sealofprotection"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Reduces the cooldown of your Hand of Protection by ${[
          60,
          120,
        ]} sec and increases the duration of your Hand of Freedom by ${[
          2,
          4,
        ]} sec.`, 
      },
      "Anticipation": {
        name: "Anticipation", 
        pos: "b4", 
        icon: icons["spell_magic_lesserinvisibilty"], 
        maxRank: 5, 
        reqPoints: 5, 
        description: talentText`Increases your Defense skill by ${[
          3,
          6,
          9,
          12,
          15,
        ]}.`,
      },
      "Blessing of Sanctuary": {
        name: "Blessing of Sanctuary", 
        pos: "c1", 
        icon: icons["spell_nature_lightningshield"], 
        maxRank: 1, 
        reqPoints: 10, 
        description: talentText`Places a Blessing on the friendly target, reducing the damage dealt from all sources by up to 5 for 10 min.  In addition, when the target blocks a melee attack the attacker will take 7 Holy damage.  Players may only have one Blessing on them per Paladin at any one time.`, 
      },
      "Improved Seal Fury": {
        name: "Improved Seal of Fury", 
        pos: "c2", 
        icon: icons["spell_holy_sealoffury"], 
        maxRank: 3, 
        reqPoints: 10, 
        description: talentText`Increase the amount of threat generated by your Seal of Fury and Judgement of Fury by ${[
          11,
          22,
          33,
        ]}%.`, 
      },
      "Shield Specialization": {
        name: "Shield Specialization", 
        pos: "c3", 
        icon: icons["inv_shield_06"],
        maxRank: 3, 
        reqPoints: 10,
        prereq: "Redoubt", 
        arrows: [{ dir: "down", from: "a3", to: "c3"}], 
        description: talentText`Increases the amount of damage absorbed by your shield by ${[
          10,
          20,
          30,
        ]}% and gives you a ${[
          33,
          66,
          100,
        ]}% whenever you block to restore 2% of your total mana.`, 
      },
      "Precision": {
        name: "Precision", 
        pos: "c4", 
        icon: icons["ability_rogue_ambush"], 
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases your chance to hit with melee attack and spells by ${[
          1,
          2,
          3,
        ]}%.`, 
      },
      "Divine Sacrifice": {
        name: "Divine Sacrifice", 
        pos: "d1", 
        icon: icons["spell_nature_timestop"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`Increases the effectiveness of your Hand of Sacrifice by ${[
          17,
          35,
        ]}% and reduces the cooldown of your Divine Intervention by ${[
          10,
          20,
        ]} min.`, 
      },
      "Toughness": {
        name: "Toughness", 
        pos: "d2", 
        icon: icons["spell_holy_devotion"], 
        maxRank: 5, 
        reqPoints: 15,
        description: talentText`Increases your armor value from items by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Improved Hammer of Justice": {
        name: "Improved Hammer of Justice", 
        pos: "d3", 
        icon: icons["spell_holy_sealofmight"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Reduces the cooldown of your Hammer of Justice spell by ${[
          5,
          10,
          15,
        ]} sec.`, 
      },
      "Spell Warding": {
        name: "Spell Warding", 
        pos: "e1", 
        icon: icons["spell_holy_improvedresistanceauras"], 
        maxRank: 3, 
        reqPoints: 20, 
        description: talentText`All spell damage taken is reduced by ${[
          3,
          6,
          9,
        ]}%.`, 
      },
      "Ardent Defender": {
        name: "Ardent Defender", 
        pos: "e2", 
        icon: icons["spell_holy_ardentdefender"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText`Reduces all damage you take by 20% for 10 sec.  While Ardent Defender is active, the next attack that would otherwise kill you will instead bring you to 15% of your maximum health.`, 
      },
      "Reckoning": {
        name: "Reckoning", 
        pos: "e3", 
        icon: icons["spell_holy_blessingofstrength"], 
        maxRank: 5, 
        reqPoints: 20, 
        description: talentText`Gives you a ${[
          2,
          4,
          6,
          8,
          10,
        ]}% chance to gain an extra attack after being hit by any damaging attack.`, 
      },
      "Expel Evil": {
        name: "Expel Evil", 
        pos: "e4", 
        icon: icons["spell_shadow_darksummoning"], 
        maxRank: 2, 
        reqPoints: 20,
        description: talentText`Reduces the casting time of your Exorcism spell by ${[
          0.75,
          1.5,
        ]} sec and its mana cost by ${[
          25,
          50,
        ]}%, but reduces the damage dealt by ${[
          15,
          30,
        ]}%. In addition, gives your Holy Wrath spell a ${[
          50,
          100,
        ]}% to not lose casting time when you take damage.`, 
      },
      "One-Handed Weapon Specialization": {
        name: "One-Handed Weapon Specialization", 
        pos: "f3", 
        icon: icons["inv_sword_20"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Increases all damage you deal when a one-handed melee weapon is equipped by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Holy Shield": {
        name: "Holy Shield", 
        pos: "g2", 
        icon: icons["spell_holy_blessingofprotection"], 
        maxRank: 1, 
        reqPoints: 30, 
        prereq: "Ardent Defender", 
        arrows: [{ dir: "down", from: "e2", to: "g2"}], 
        description: talentText`Increases chance to block by 30% for 8 sec, and grants you a chance equal to your block chance to deal 65 Holy damage with your shield for each melee and ranged attack taken while active.  Blocked attacks always expend a charge.  8 charges.`, 
      },
    },
  },
  Retribution: {
    name: "Retribution",
    background: backgrounds["retribution"],
    icon: icons["spell_holy_auraoflight"],
    talents: {
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
      "Improved Seal of the Crusader": {
        name: "Improved Seal of the Crusader",
        pos: "a3", 
        icon: icons["spell_holy_holysmite"], 
        maxRank: 5,
        reqPoints: 0, 
        description: talentText`Increases the melee attack power bonus of your Seal of the Crusader and the damage done by your Judgement of the Crusader by ${[
          4,
          8,
          12,
          16,
          20
        ]}%.`, 
      },
      "Improved Blessing of Might": {
        name: "Improved Blessing of Might", 
        pos: "b1", 
        icon: icons["spell_holy_fistofjustice"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Increases the attack power bonus of your Blessing of Might by ${[
          10,
          20,
        ]}%.`, 
      },
      "Vindication": {
        name: "Vindication", 
        pos: "b2", 
        icon: icons["spell_holy_vindication"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Gives the Paladin's damaging melee attacks a chance to reduce the target's attack power by ${[
          3,
          6,
          10,
        ]}% for 15 sec.`, 
      },
      "Conviction": {
        name: "Conviction", 
        pos: "b3", 
        icon: icons["spell_holy_retributionaura"], 
        maxRank: 5, 
        reqPoints: 5, 
        description: talentText`Increases your chance to get a critical strike with your melee weapons and Judgement spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Stoicism": {
        name: "Stoicism", 
        pos: "c1", 
        icon: icons["inv_helmet_21"], 
        maxRank: 3, 
        reqPoints: 10, 
        description: talentText`Increases your resistance to Stun effects by an additional ${[
          5,
          10,
          15,
        ]}% and reduces the chance your spells will be dispelled by an additional ${[
          10,
          20,
          30,
        ]}%.`, 
      },
      "Pursuit of Justice": {
        name: "Pursuit of Justice", 
        pos: "c2", 
        icon: icons["spell_holy_persuitofjustice"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText`Increases the movement speed and mounted movement speed by ${[
          5,
          10,
        ]}%.  This does not stack with other movement speed increasing effects.`, 
      },
      "Seal of Command": {
        name: "Seal of Command", 
        pos: "c3", 
        icon: icons["ability_warrior_innerrage"], 
        maxRank: 1, 
        reqPoints: 10, 
        description: talentText`Gives the Paladin a chance to deal additional Holy damage equal to 65% of normal weapon damage  Only one Seal can be active on the Paladin at any one time.  Lasts 30 sec.  Unleashing this Seal's energy will judge an enemy, instantly causing 46 to 51 Holy damage, 93 to 101 if the target is stunned or incapacitated.`, 
      },
      "Improved Judgement": {
        name: "Improved Judgement", 
        pos: "c4", 
        icon: icons["spell_holy_righteousfury"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText`Decreases the cooldown of your Judgement spell by ${[
          1,
          2,
        ]} sec and increases its range by ${[
          2,
          5,
        ]} yards.`, 
      },
      "Eye for an Eye": {
        name: "Eye for an Eye", 
        pos: "d1", 
        icon: icons["spell_holy_eyeforaneye"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`All spell criticals against you cause ${[
          15,
          30,
        ]}% of the damage taken to the caster as well.  The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health.`, 
      },
      "Crusade": {
        name: "Crusade", 
        pos: "d2", 
        icon: icons["spell_holy_crusade"], 
        maxRank: 3, 
        reqPoints: 15,
        description: talentText`Increases the damage done by your Crusader Strike, Hammer of Wrath and the effectiveness of Judgement spells by ${[
          4,
          7,
          10,
        ]}%.`, 
      },
      "Sanctified Retribution": {
        name: "Sanctified Retribution", 
        pos: "d3", 
        icon: icons["spell_holy_auraoflight"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`Increases the damage done by your Retribution Aura by ${[
          12,
          25,
        ]}% and all damage caused by friendly targets affected by your Sanctity Aura is increased by ${[
          1,
          2,
        ]}%.`, 
      },
      "Two-Handed Weapon Specialization": {
        name: "Two-Handed Weapon Specialization", 
        pos: "e1", 
        icon: icons["inv_hammer_04"], 
        maxRank: 3, 
        reqPoints: 20, 
        description: talentText`Increases the damage you deal with two-handed melee weapons by ${[
          2,
          4,
          6,
        ]}%.`, 
      },
      "Repentance": {
        name: "Repentance", 
        pos: "e2", 
        icon: icons["spell_holy_prayerofhealing"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText`Puts the enemy target in a state of meditation, incapacitating them for up to 6 sec.  Any damage caused will awaken the target.  Only works against Humanoids.`, 
      },
      "Improved Hammer of Wrath": {
        name: "Improved Hammer of Wrath", 
        pos: "e3", 
        icon: icons["ability_thunderclap"], 
        maxRank: 2, 
        reqPoints: 20, 
        description: talentText`Reduces the casting time of your Hammer of Wrath spell by ${[
          0.5,
          1,
        ]} sec.`, 
      },
      "Templar's Judgement": {
        name: "Templar's Judgement", 
        pos: "e4", 
        icon: icons["ability_paladin_bluejudgement"], 
        maxRank: 3,
        reqPoints: 20,
        prereq: "Improved Judgement", 
        arrows: [{ dir: "down", from: "c4", to: "e4"}], 
        description: talentText`Increases your chance to hit with spells by ${[
          1,
          2,
          3,
        ]}% and gives your Judgement spell a ${[
          25,
          50,
          75,
        ]}% chance to grant you 15% of your base mana.`, 
      },
      "Vengeance": {
        name: "Vengeance", 
        pos: "f3", 
        icon: icons["ability_racial_avatar"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Gives you a ${[
          2,
          5,
          7,
          10,
          12,
        ]}% bonus to Physical and Holy damage you deal and reduces the casting time of your Exorcism by ${[
          0.15,
          0.3,
          0.45,
          0.6,
          0.75,
        ]} sec for 8 sec after dealing critical strike from a weapon swing, spell, or ability.`, 
      },
      "Crusader Strike": {
        name: "Crusader Strike", 
        pos: "g2", 
        icon: icons["spell_holy_crusaderstrike"], 
        maxRank: 1, 
        reqPoints: 30,
        prereq: "Repentance", 
        arrows: [{ dir: "down", from: "e2", to: "g2"}],
        description: talentText`An instant strike that causes 100% weapon damage plus 40% of your Holy spell damage.`, 
      },
    },
  },
};
