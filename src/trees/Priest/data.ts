import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/priest"),
);
const icons = requireAll(require.context("../../assets/icons/priest"));

export const data: TalentData = {
  Discipline: {
    name: "Discipline",
    background: backgrounds["discipline"],
    icon: icons["spell_holy_wordfortitude"],
    talents: {
      "Twin Discipline": {
        name: "Twin Disciplines", 
        pos: "a1", 
        icon: icons["spell_holy_blessingofstrength"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Increases the damage and healing done by your instant cast spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Unbreakable Will": {
        name: "Unbreakable Will", 
        pos: "a2", 
        icon: icons["spell_magic_magearmor"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Increases your chance to resist Stun, Fear and Silence effects by an additional ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`, 
      },
      "Wand Specialization": {
        name: "Wand Specialization", 
        pos: "a3", 
        icon: icons["inv_wand_01"], 
        maxRank: 3, 
        reqPoints: 0, 
        description: talentText`Increases your damage with Wands by ${[
          8,
          16,
          25,
        ]}%.`, 
      },
      "Silent Resolve": {
        name: "Silent Resolve", 
        pos: "b1", 
        icon: icons["spell_nature_manaregentotem"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Reduces the threat generated by your spells by ${[
          7,
          14,
          20,
        ]}%.`, 
      },
      "Martyrdom": {
        name: "Martyrdom", 
        pos: "b2", 
        icon: icons["spell_nature_tranquility"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Gives you a ${[
          50,
          100,
        ]}% chance to gain the Focused Castin effect that lasts for 6 sec after being the victim of a melee or ranged critical strike.  The Focused Casting effect prevents your from losing casting time when taking damage and increases resistance to Interrupt effects by ${[
          10,
          20,
        ]}%.`, 
      },
      "Improved Power Word: Shield": {
        name: "Improved Power Word: Shield", 
        pos: "b3", 
        icon: icons["spell_holy_powerwordshield"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Increases the damage absorbed by your Power Word: Shield by ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Improved Power Word: Fortitude": {
        name: "Improved Power Word: Fortitude", 
        pos: "c1", 
        icon: icons["spell_holy_wordfortitude"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText`Increases the effect of your Power Word: Fortitude and Prayer of Fortitude spells by ${[
          15,
          30,
        ]}%.  In addition, increases your total Stamina by ${[
          1,
          2,
        ]}%.`, 
      },
      "Inner Focus": {
        name: "Inner Focus", 
        pos: "c2", 
        icon: icons["spell_frost_windwalkon"], 
        maxRank: 1, 
        reqPoints: 10, 
        description: talentText`When activated, reduces the Mana cost of your next spell by 100% and increases its critical effect chance by 25% if it is capable of a critical effect.`, 
      },
      "Meditation": {
        name: "Meditation", 
        pos: "c3", 
        icon: icons["spell_nature_sleep"], 
        maxRank: 3, 
        reqPoints: 10, 
        description: talentText`Allows ${[
          7,
          14,
          20,
        ]}% of your Mana regeneration to continue while casting.`, 
      },
      "Focused Power": {
        name: "Focused Power", 
        pos: "c4", 
        icon: icons["spell_holy_dizzy"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText`Reduces your target's chance to resist your Smite, Mind Blast and Mana Burn spells by ${[
          2,
          4,
        ]}%.`, 
      },
      "Improved Inner Fire": {
        name: "Improved Inner Fire", 
        pos: "d1", 
        icon: icons["spell_holy_innerfire"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Increases the Armor bonus of your Inner Fire spell by ${[
          10,
          20,
          30,
        ]}% and increases the total number of charges by ${[
          4,
          8,
          12,
        ]}.`, 
      },
      "Mental Agility": {
        name: "Mental Agility", 
        pos: "d2", 
        icon: icons["ability_hibernation"], 
        maxRank: 5, 
        reqPoints: 15, 
        description: talentText`Reduces the mana cost of your instant cast spells by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`, 
      },
      "Dominate Mind": {
        name: "Dominate Mind", 
        pos: "d4", 
        icon: icons["spell_shadow_manaburn"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Reduces the casting time of your Mana Burn and Mind Control spells by ${[
          "0.4 secs",
          "0.7 secs",
          "1 sec",
        ]}.`, 
      },
      "Inner Will": {
        name: "Inner Will", 
        pos: "e1", 
        icon: icons["innerwill"], 
        maxRank: 1, 
        reqPoints: 20,
        prereq: "Improved Inner Fire", 
        arrows: [{ dir: "down", from: "d1", to: "e1" }],
        description: talentText`A burst of Holy energy fills the caster, reducing the mana cost of instant cast spells by 10% and increasing your movement speed by 12%.  Lasts 10 min.

You can only have Inner Will or Inner Fire active at a time.`, 
      },
      "Divine Aegis": {
        name: "Divine Aegis", 
        pos: "e2", 
        icon: icons["spell_holy_devineaegis"], 
        maxRank: 3, 
        reqPoints: 20, 
        description: talentText`Critical heals create a protective shield on the target, absorbing ${[
          10,
          20,
          30,
        ]}% of the amount healed.  Lasts 12 sec.`, 
      },
      "Divine Spirit": {
        name: "Divine Spirit", 
        pos: "e3", 
        icon: icons["spell_holy_divinespirit"], 
        maxRank: 1, 
        reqPoints: 20,
        prereq: "Meditation", 
        arrows: [{ dir: "down", from: "c3", to: "e3" }],
        description: talentText`Holy power infuses the target, increasing their Spirit by 20 for 30 min.`, 
      },
      "Soul Warding": {
        name: "Soul Warding", 
        pos: "e4", 
        icon: icons["spell_holy_holyprotection"], 
        maxRank: 3, 
        reqPoints: 20, 
        description: talentText`Reduces the duration of the Weakened Soul effect from your Power World: Shield by ${[
          2,
          4,
          6,
        ]} sec and the mana cost of your Power Word: Shield by ${[
          2,
          4,
          6,
        ]}%.`, 
      },
      "Force of Will": {
        name: "Force of Will", 
        pos: "f3", 
        icon: icons["spell_nature_slowingtotem"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Increases your spell damage by ${[
          1,
          2,
          3,
          4,
          5,
        ]}% and the critical strike chance of your healing spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Power Infusion": {
        name: "Power Infusion", 
        pos: "g2", 
        icon: icons["spell_holy_powerinfusion"], 
        maxRank: 1, 
        reqPoints: 30,
        prereq: "Divine Aegis", 
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Infuses the target with power, increasing their spell damage and healing by 20%.  Lasts 20 sec.`, 
      },
    },
  },
  Holy: {
    name: "Holy",
    background: backgrounds["holy"],
    icon: icons["spell_holy_holybolt"],
    talents: {
      "Holy Focus": {
        name: "Holy Focus", 
        pos: "a1", 
        icon: icons["spell_holy_healingfocus"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Gives you a ${[
          14,
          28,
          42,
          58,
          70,
        ]}% chance to avoid interruption caused by damage while casting any Holy spell.`, 
      },
      "Improved Renew": {
        name: "Improved Renew", 
        pos: "a2", 
        icon: icons["spell_holy_renew"], 
        maxRank: 3, 
        reqPoints: 0, 
        description: talentText`Increases the amount healed by your Renew spell by ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Holy Specialization": {
        name: "Holy Specialization", 
        pos: "a3", 
        icon: icons["spell_holy_sealofsalvation"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Increases the critical effect chance of your Holy spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Spell Warding": {
        name: "Spell Warding", 
        pos: "b2", 
        icon: icons["spell_holy_spellwarding"], 
        maxRank: 5, 
        reqPoints: 5, 
        description: talentText`Reduces all spell damage taken by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Divine Fury": {
        name: "Divine Fury", 
        pos: "b3", 
        icon: icons["spell_holy_sealofwrath"], 
        maxRank: 5, 
        reqPoints: 5, 
        description: talentText`Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`, 
      },
      "Holy Nova": {
        name: "Holy Nova", 
        pos: "c1", 
        icon: icons["spell_holy_holynova"], 
        maxRank: 1, 
        reqPoints: 10, 
        description: talentText`Causes an explosion of holy light around the caster, causing 28 to 32 Holy damage to all enemy targets within 10 yards and healing all party members within 10 yards for 52 to 62.  These effects cause no threat.`, 
      },
      "Blessed Recovery": {
        name: "Blessed Recovery", 
        pos: "c2", 
        icon: icons["spell_holy_blessedrecovery"], 
        maxRank: 3, 
        reqPoints: 10, 
        description: talentText`After being struck by a critical hit, heal ${[
          10,
          20,
          30,
        ]}% of the damage taken over 6 seconds.`, 
      },
      "Inspiration": {
        name: "Inspiration", 
        pos: "c4", 
        icon: icons["spell_holy_layonhands"], 
        maxRank: 3, 
        reqPoints: 10, 
        description: talentText`Increases you target's armor by ${[
          8,
          16,
          25,
        ]}% for 15 sec after getting a critical effect from your Flash Heal, Heal, Greater Heal, or Prayer of Healing spells.`, 
      },
      "Holy Reach": {
        name: "Holy Reach", 
        pos: "d1", 
        icon: icons["spell_holy_purify"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`Increases the range of your Smite and Holy Fire spells and the radius of your Prayer of Healing and Holy Nova spells by ${[
          10,
          20,
        ]}%.`, 
      },
      "Improved Healing": {
        name: "Improved Healing", 
        pos: "d2", 
        icon: icons["spell_holy_heal02"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Reduces the Mana cost of your Lesser Heal, Heal, and Greater Heal spells by ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Searing Light": {
        name: "Searing Light", 
        pos: "d3", 
        icon: icons["spell_holy_searinglightpriest"], 
        maxRank: 5, 
        reqPoints: 15, 
        prereq: "Divine Fury", 
        arrows: [{ dir: "down", from: "b3", to: "d3"}], 
        description: talentText`Increases the damage of your Smite and Holy Fire spells by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%.`, 
      },
      "Divine Punishment": {
        name: "Divine Punishment", 
        pos: "d4", 
        icon: icons["spell_holy_searinglight"], 
        maxRank: 3, 
        reqPoints: 15,
        prereq: "Searing Light", 
        arrows: [{ dir: "right", from: "d3", to: "d4" }],
        description: talentText`Increases the critical strike damage bonus of your Smite spell by ${[
          33,
          66,
          100,
        ]}% and the damage over time effect of your Holy Fire spell by ${[
          17,
          34,
          50,
        ]}%.`, 
      },
      "Improved Prayer of Healing": {
        name: "Improved Prayer of Healing", 
        pos: "e1", 
        icon: icons["spell_holy_prayerofhealing02"], 
        maxRank: 2, 
        reqPoints: 20, 
        description: talentText`Reduces the Mana cost of your Prayer of Healing spell by ${[
          10,
          20,
        ]}% and its casting time by ${[
          0.25,
          0.5,
        ]} sec.`, 
      },
      "Spirit of Redemption": {
        name: "Spirit of Redemption", 
        pos: "e2", 
        icon: icons["inv_enchant_essenceeternallarge"], 
        maxRank: 1, 
        reqPoints: 20,
        description: talentText`Increases total Spirit by 5% and upon death, the priest becomes the Spirit of Redemption for 15 seconds.  The Spirit of Redemption cannot move, attack, be attacked or targeted by any spells or effects.  While in this form the priest can cast any healing spell free of cost.  When the effect ends, the priest dies.`, 
      },
      "Spiritual Guidance": {
        name: "Spiritual Guidance", 
        pos: "e3", 
        icon: icons["spell_holy_spiritualguidence"], 
        maxRank: 5, 
        reqPoints: 20, 
        description: talentText`Increases spell damage and healing by up to ${[
          5,
          10,
          15,
          20,
          25,
        ]}% of your total Spirit.`, 
      },
      "Light's Grace": {
        name: "Light's Grace", 
        pos: "f1", 
        icon: icons["spell_holy_unyieldingfaith"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Increases your total Spirit by ${[
          2,
          4,
          6,
          8,
          10,
        ]}% and reduces your target's chance to resist your Holy spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Spiritual Healing": {
        name: "Spiritual Healing", 
        pos: "f3", 
        icon: icons["spell_nature_moonglow"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Increases the amount healed by your healing spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Lightwell": {
        name: "Lightwell", 
        pos: "g2", 
        icon: icons["spell_holy_summonlightwell"], 
        maxRank: 1, 
        reqPoints: 30,
        prereq: "Spirit of Redemption", 
        arrows: [{ dir: "down", from: "e2", to: "g2"}], 
        description: talentText`Creates a holy Lightwell near the priest.  Members of your raid or party can click the Lightwell to restore 800 health over 10 sec.  Attacks done to you equal to or greater than 25% of your total health will cancel the effect.  Lightwell lasts for 3 min or 10 charges.`, 
      },
    },
  },
  Shadow: {
    name: "Shadow",
    background: backgrounds["shadow"],
    icon: icons["spell_shadow_shadowwordpain"],
    talents: {
      "Spirit Tap": {
        name: "Spirit Tap", 
        pos: "a2", 
        icon: icons["spell_shadow_requiem"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Gives you a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to gain a 100% bonus to your Spirit after killing a target that yields experience.  For the duration, your Mana will regenerate at a 50% rate while casting.  Lasts 15 seconds.`, 
      },
      "Blackout": {
        name: "Blackout", 
        pos: "a3", 
        icon: icons["spell_shadow_gathershadows"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Gives your Shadow damage spells a${["","","","n",""]} ${[
          2,
          4,
          6,
          8,
          10,
        ]}% chance to stun the target for 3 seconds.`, 
      },
      "Shadow Affinity": {
        name: "Shadow Affinity", 
        pos: "b1", 
        icon: icons["spell_shadow_shadowward"], 
        maxRank: 3, 
        reqPoints: 0, 
        description: talentText`Reduces the threat generated by your Shadow spells by ${[
          8,
          16,
          25,
        ]}%.`, 
      },
      "Improved Shadow Word: Pain": {
        name: "Improved Shadow Word: Pain", 
        pos: "b2", 
        icon: icons["spell_shadow_shadowwordpain"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Increases the duration of your Shadow Word: Pain spell by ${[
          3,
          6,
        ]} sec.`, 
      },
      "Shadow Focus": {
        name: "Shadow Focus", 
        pos: "b3", 
        icon: icons["spell_shadow_burningspirit"], 
        maxRank: 5, 
        reqPoints: 5, 
        description: talentText`Reduces your target's chance to resist your Shadow spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}% and reduces the mana cost of your Shadow spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Improved Psychic Scream": {
        name: "Improved Psychic Scream", 
        pos: "c1", 
        icon: icons["spell_shadow_psychicscream"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText`Reduces the cooldown of your Psychic Scream spell by ${[
          2,
          4,
        ]} sec.`, 
      },
      "Improved Mind Blast": {
        name: "Improved Mind Blast", 
        pos: "c2", 
        icon: icons["spell_shadow_unholyfrenzy"], 
        maxRank: 5, 
        reqPoints: 10, 
        description: talentText`Reduces the cooldown of your Mind Blast spell by ${[
          0.5,
          1,
          1.5,
          2,
          2.5,
        ]} sec.`, 
      },
      "Mind Flay": {
        name: "Mind Flay", 
        pos: "c3", 
        icon: icons["spell_shadow_siphonmana"], 
        maxRank: 1, 
        reqPoints: 10, 
        description: talentText`Assault the target's mind with Shadow energy, causing 76 Shadow damage over 3 sec and slowing their movement speed by 50%.`, 
      },
      "Improved Fade": {
        name: "Improved Fade", 
        pos: "c4", 
        icon: icons["spell_magic_lesserinvisibilty"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText`Decreases the cooldown of your Fade ability by ${[
          3,
          6,
        ]} sec.`, 
      },
      "Focused Mind": {
        name: "Focused Mind", 
        pos: "d3", 
        icon: icons["spell_shadow_shadowworddominate"], 
        maxRank: 3, 
        reqPoints: 15,
        description: talentText`Reduces the Mana cost of your Mind Blast, Mind Control and Mind Control spells by ${[
          3,
          6,
          9,
        ]}%.`, 
      },
      "Shadow Weaving": {
        name: "Shadow Weaving", 
        pos: "d4", 
        icon: icons["spell_shadow_blackplague"], 
        maxRank: 5, 
        reqPoints: 15, 
        description: talentText`Your Shadow damage spells have a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to cause your target to be vulnerable to Shadow damage.  This vulnerability increases Shadow damage dealt to your target by 2% and lasts 15 sec.  Stacks up to 5 times.`, 
      },
      "Shadowform": {
        name: "Shadowform", 
        pos: "e2", 
        icon: icons["spell_shadow_shadowform"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText`Assume a Shadowform, increasing your Shadow damage by 15% and reducing Physical damage done to you by 15%.  However, you may not cast Holy spells while in this form.`, 
      },
      "Improved Vampiric Embrace": {
        name: "Improved Vampiric Embrace", 
        pos: "e3", 
        icon: icons["spell_shadow_improvedvampiricembrace"], 
        maxRank: 2, 
        reqPoints: 20, 
        description: talentText`Increases the percentage healed by Vampiric Embrace by an additional ${[
          5,
          10,
        ]}%.`, 
      },
      "Shadow Power": {
        name: "Shadow Power", 
        pos: "e4", 
        icon: icons["spell_shadow_shadowpower"], 
        maxRank: 3, 
        reqPoints: 20, 
        description: talentText`
Increases the critical strike damage bonus of your Mind Blast and Shadow Word: Death spells by ${[
          33,
          66,
          100,
        ]}%.`, 
      },
      "Darkness": {
        name: "Darkness", 
        pos: "f3", 
        icon: icons["spell_shadow_twilight"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Increases your Shadow spell damage by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Vampiric Touch": {
        name: "Vampiric Touch", 
        pos: "g2", 
        icon: icons["spell_holy_stoicism"], 
        maxRank: 1, 
        reqPoints: 30,
        prereq: "Shadowform", 
        arrows: [{ dir: "down", from: "e2", to: "g2"}],  
        description: talentText`Causes 350 Shadow damage over 15 sec to your target and causes all party members to gain mana equal to 3% of any Shadow spell damage you deal.`, 
      },
    },
  },
};
