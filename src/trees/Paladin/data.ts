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
      "Improved Seal of Righteousness": {name: "Improved Seal of Righteousness", pos: "a1", icon: icons["ability_thunderbolt"], maxRank: 5, reqPoints: 0, description: talentText``, },
      "Divine Strength": {name: "Divine Strength", pos: "a2", icon: icons["ability_golemthunderclap"], maxRank: 5, reqPoints: 0, description: talentText``, },
      "Divine Intellect": {name: "Divine Intellect", pos: "a3", icon: icons["spell_nature_sleep"], maxRank: 5, reqPoints: 0, description: talentText``, },
      "Aura Mastery": {name: "Aura Mastery", pos: "b1", icon: icons["spell_holy_auramastery"], maxRank: 2, reqPoints: 5, description: talentText``, },
      "Spiritual Focus": {name: "Spiritual Focus", pos: "c1", icon: icons["spell_arcane_blink"], maxRank: 3, reqPoints: 10, description: talentText``, },
      "Holy Power": {name: "Holy Power", pos: "b3", icon: icons["spell_holy_power"], maxRank: 5, reqPoints: 5, description: talentText``, },
      "Improved Lay on Hands": {name: "Improved Lay on Hands", pos: "b4", icon: icons["spell_holy_layonhands"], maxRank: 2, reqPoints: 5, description: talentText``, },
      "Shield of Faith": {name: "Shield of Faith", pos: "b2", icon: icons["spell_holy_holyguidance"], maxRank: 3, reqPoints: 5, description: talentText``, },
      "Consecration": {name: "Consecration", pos: "c2", icon: icons["spell_holy_innerfire"], maxRank: 1, reqPoints: 10, description: talentText``, },
      "Long Arm of Justice": {name: "Long Arm of Justice", pos: "c4", icon: icons["spell_holy_healingaura"], maxRank: 3, reqPoints: 10, description: talentText``, },
      "Divine Grace": {name: "Divine Grace", pos: "d1", icon: icons["spell_holy_sealofwisdom"], maxRank: 2, reqPoints: 15, description: talentText``, },
      "Improved Purifying": {name: "Improved Purifying", pos: "d2", icon: icons["spell_holy_purifyingpower"], maxRank: 3, reqPoints: 15, prereq: "Consecration", arrows: [{ dir: "down", from: "c2", to: "d2"}], description: talentText``, },
      "Illumination": {name: "Illumination", pos: "d3", icon: icons["spell_holy_greaterheal"], maxRank: 5, reqPoints: 15, prereq: "Holy Power", arrows: [{ dir: "down", from: "b3", to: "d3" }], description: talentText``, },
      "Unyielding Faith": {name: "Unyielding Faith", pos: "d4", icon: icons["spell_holy_unyieldingfaith"], maxRank: 3, reqPoints: 15, description: talentText``, },
      "Light's Mercy": {name: "Light's Mercy", pos: "e1", icon: icons["spell_holy_holybolt"], maxRank: 3, reqPoints: 20, description: talentText``, },
      "Holy Shock": {name: "Holy Shock", pos: "e2", icon: icons["spell_holy_searinglight"], maxRank: 1, reqPoints: 20, description: talentText``, },
      "Inevitable Justice": {name: "Inevitable Justice", pos: "e3", icon: icons["spell_holy_divinepurpose"], maxRank: 3, reqPoints: 20, description: talentText``, },
      "Healing Light": {name: "Healing Light", pos: "f1", icon: icons["spell_holy_proclaimchampion"], maxRank: 5, reqPoints: 25, description: talentText``, },
      "Searing Light": {name: "Searing Light", pos: "f3", icon: icons["spell_holy_revivechampion"], maxRank: 5, reqPoints: 25, description: talentText``, },
      "Inner Light": {name: "Inner Light", pos: "g2", icon: icons["spell_holy_surgeoflight"], maxRank: 1, reqPoints: 30, prereq: "Holy Shock", arrows: [{ dir: "down", from: "e2", to: "g2" }], description: talentText``, },
    },
  },
  Protection: {
    name: "Protection",
    background: backgrounds["protection"],
    icon: icons["spell_holy_devotionaura"],
    talents: {
      "Toughness": {name: "Toughness", pos: "a2", icon: icons["spell_holy_devotion"], maxRank: 5, reqPoints: 0, description: talentText``, },
      "Shield Specialization": {name: "Shield Specialization", pos: "a3", icon: icons["inv_shield_06"], maxRank: 5, reqPoints: 0, description: talentText``, },
      "Precision": {name: "Precision", pos: "b1", icon: icons["ability_rogue_ambush"], maxRank: 3, reqPoints: 5, description: talentText``, },
      "Guardian's Favor": {name: "Guardian's Favor", pos: "b2", icon: icons["spell_holy_sealofprotection"], maxRank: 2, reqPoints: 5, description: talentText``, },
      "Redoubt": {name: "Redoubt", pos: "b3", icon: icons["ability_defend"], maxRank: 5, reqPoints: 5, prereq: "Shield Specialization", arrows: [{ dir: "down", from: "a3", to: "b3"}], description: talentText``, },
      "Improved Hammer of Justice": {name: "Improved Hammer of Justice", pos: "b4", icon: icons["spell_holy_sealofmight"], maxRank: 3, reqPoints: 5, description: talentText``, },
      "Dominance": {name: "Dominance", pos: "c1", icon: icons["spell_nature_reincarnation"], maxRank: 1, reqPoints: 10, prereq: "Precision", arrows: [{ dir: "down", from: "b1", to: "c1" }], description: talentText``, },
      "Blessing of Sanctuary": {name: "Blessing of Sanctuary", pos: "c2", icon: icons["spell_nature_lightningshield"], maxRank: 1, reqPoints: 10, description: talentText``, },
      "One-Handed Weapon Specialization": {name: "One-Handed Weapon Specialization", pos: "c3", icon: icons["inv_sword_20"], maxRank: 5, reqPoints: 10, description: talentText``, },
      "Vindication": {name: "Vindication", pos: "c4", icon: icons["spell_holy_vindication"], maxRank: 3, reqPoints: 10, description: talentText``, },
      "Improved Defensive Auras": {name: "Improved Defensive Auras", pos: "d1", icon: icons["spell_holy_devotionaura"], maxRank: 2, reqPoints: 15, description: talentText``, },
      "Improved Concentration Aura": {name: "Improved Concentration Aura", pos: "d3", icon: icons["spell_holy_mindsooth"], maxRank: 3, reqPoints: 15, description: talentText``, },
      "Second Wind": {name: "Second Wind", pos: "d4", icon: icons["inv_jewelry_talisman_06"], maxRank: 5, reqPoints: 15, description: talentText``, },
      "Improved Righteous Fury": {name: "Improved Righteous Fury", pos: "e1", icon: icons["spell_holy_sealoffury"], maxRank: 3, reqPoints: 20, description: talentText``, },
      "Holy Shield": {name: "Holy Shield", pos: "e2", icon: icons["spell_holy_blessingofprotection"], maxRank: 1, reqPoints: 20, prereq: "Blessing of Sanctuary", arrows: [{ dir: "down", from: "c2", to: "e2"}], description: talentText``, },
      "Anticipation": {name: "Anticipation", pos: "e3", icon: icons["spell_magic_lesserinvisibilty"], maxRank: 3, reqPoints: 20, description: talentText``, },
      "Morale": {name: "Morale", pos: "f1", icon: icons["spell_holy_heroism"], maxRank: 5, reqPoints: 25, description: talentText``, },
      "Improved Holy Shield": {name: "Improved Holy Shield", pos: "f2", icon: icons["spell_holy_blessingofprotection"], maxRank: 2, reqPoints: 25, prereq: "Holy Shield", arrows: [{ dir: "down", from: "e2", to: "f2" }], description: talentText``, },
      "Reckoning": {name: "Reckoning", pos: "f3", icon: icons["spell_holy_blessingofstrength"], maxRank: 5, reqPoints: 25, description: talentText``, },
      "Seal of Fury": {name: "Seal of Fury", pos: "g2", icon: icons["spell_holy_crusader"], maxRank: 1, reqPoints: 30, description: talentText``, },
    },
  },
  Retribution: {
    name: "Retribution",
    background: backgrounds["retribution"],
    icon: icons["spell_holy_auraoflight"],
    talents: {
      "Improved Judgement": {name: "Improved Judgement", pos: "a1", icon: icons["spell_holy_righteousfury"], maxRank: 3, reqPoints: 0, description: talentText``, },
      "Conviction": {name: "Conviction", pos: "a2", icon: icons["spell_holy_retributionaura"], maxRank: 5, reqPoints: 0, description: talentText``, },
      "Improved Seal of the Crusader": {name: "Improved Seal of the Crusader", pos: "a3", icon: icons["spell_holy_holysmite"], maxRank: 3, reqPoints: 0, description: talentText``, },
      "Deflection": {name: "Deflection", pos: "b1", icon: icons["ability_parry"], maxRank: 3, reqPoints: 5, description: talentText``, },
      "Improved Retribution Aura": {name: "Improved Retribution Aura", pos: "b3", icon: icons["spell_holy_auraoflight"], maxRank: 2, reqPoints: 5, description: talentText``, },
      "The Revenant": {name: "The Revenant", pos: "c1", icon: icons["spell_holy_ashestoashes"], maxRank: 3, reqPoints: 10, prereq: "Deflection", arrows: [{ dir: "down", from: "b1", to: "c1" }], description: talentText``, },
      "Blessed Strikes": {name: "Blessed Strikes", pos: "c2", icon: icons["spell_holy_blessedarm"], maxRank: 5, reqPoints: 10, prereq: "Conviction", arrows: [{ dir: "down", from: "a2", to: "c2" }], description: talentText``, },
      "Seal of Command": {name: "Seal of Command", pos: "c3", icon: icons["ability_warrior_innerrage"], maxRank: 1, reqPoints: 10, description: talentText``, },
      "Pursuit of Justice": {name: "Pursuit of Justice", pos: "c4", icon: icons["spell_holy_persuitofjustice"], maxRank: 2, reqPoints: 10, description: talentText``, },
      "Eye for an Eye": {name: "Eye for an Eye", pos: "d1", icon: icons["spell_holy_eyeforaneye"], maxRank: 2, reqPoints: 15, description: talentText``, },
      "Benediction": {name: "Benediction", pos: "d2", icon: icons["spell_frost_windwalkon"], maxRank: 3, reqPoints: 15, description: talentText``, },
      "Divine Might": {name: "Divine Might", pos: "d3", icon: icons["spell_holy_fistofjustice"], maxRank: 2, reqPoints: 15, description: talentText``, },
      "Two-Handed Weapon Specialization": {name: "Two-Handed Weapon Specialization", pos: "e1", icon: icons["inv_hammer_04"], maxRank: 3, reqPoints: 20, description: talentText``, },
      "Sanctity Aura": {name: "Sanctity Aura", pos: "e2", icon: icons["spell_holy_mindvision"], maxRank: 1, reqPoints: 20, description: talentText``, },
      "Vengeance": {name: "Vengeance", pos: "e3", icon: icons["ability_racial_avatar"], maxRank: 5, reqPoints: 20, description: talentText``, },
      "Repentance": {name: "Repentance", pos: "e4", icon: icons["spell_holy_prayerofhealing"], maxRank: 1, reqPoints: 20, description: talentText``, },
      "Crusade": {name: "Crusade", pos: "f1", icon: icons["spell_holy_crusade"], maxRank: 5, reqPoints: 25, description: talentText``, },
      "Improved Sanctity Aura": {name: "Improved Sanctity Aura", pos: "f2", icon: icons["spell_holy_mindvision"], maxRank: 2, reqPoints: 25, prereq: "Sanctity Aura", arrows: [{ dir: "down", from: "e2", to: "f2" }], description: talentText``, },
      "Codex of the Silver Hand": {name: "Codex of the Silver Hand", pos: "f3", icon: icons["inv_misc_book_07"], maxRank: 5, reqPoints: 25, description: talentText``, },
      "Crusader Strike": {name: "Crusader Strike", pos: "g2", icon: icons["spell_holy_crusaderstrike2"], maxRank: 1, reqPoints: 30, description: talentText``, },
    },
  },
};
