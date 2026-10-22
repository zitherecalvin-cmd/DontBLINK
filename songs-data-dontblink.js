/**
 * songs-data-dontblink.js — the "DontBLINK" setlist.
 *
 * Same shape as songs-data-dnb.js: each song is written-key chords stacked
 * over lyrics, grouped into labeled sections. `transpose.js` operates directly
 * on these raw lines, so this file is the single source of truth for both the
 * Markdown chart (build-markdown-dontblink.js) and the interactive HTML page
 * (chord_guide_dontblink.html).
 *
 * Source chords: the .docx sheets in this folder
 * (Alapaap_Chords_by_Eraserheads.docx, Whats_Up_Chords_ver_2_by_4_Non_Blondes.docx,
 * The_Final_Countdown_Chords_by_Europe.docx). Chords/lyrics/spacing are
 * verbatim from each sheet's first [Section] onward; the sheet headers
 * (difficulty, tuning, chord diagrams, strumming patterns, credits) and the
 * What's Up intro guitar tab were left out, as in the DNB guide.
 *
 * 2026-10-14 changes (user-approved): What's Up - the stray comma after the
 * intro chords was removed, and it's played in A with no capo (the sheet's
 * capo 2 is dropped; chords as written). The Final
 * Countdown - its two [Verse] sections are numbered Verse 1 / Verse 2, and
 * its note says the original recording is in F#m.
 *
 * BPM: from each sheet's strumming section (Alapaap 148, What's Up 67 with
 * a 57 ending, The Final Countdown 118).
 *
 * The Final Countdown's chords are written in E minor, so it's stored as
 * key "E" + minor (the HTML labels its keys as minor and spells by the
 * relative major).
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.DONTBLINK_SONGS = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var SONGS = [
    {
      number: 1,
      title: "Alapaap",
      artist: "Eraserheads",
      key: "G",
      bpm: 148,
      sections: [
        { label: "Intro", lines: [
          "GM7\tGM7\tGM7\tGM7",
          "C\tC\tC\tC",
          "A A\tB\tC\tD",
          "",
          "GM7                  GM7",
          "May isang umaga na tayo'y magsasama",
          "  CM7                 GM7",
          "Haya at halina sa ala paap",
          "    GM7         FM7 (hold)",
          "O, anong sarap, haa...."
        ] },
        { label: "Verse 1", lines: [
          "G              Am7       Bm7 C",
          "  Hanggang sa dulo ng mundo,",
          "G              Am7       Bm7 C",
          "  Hanggang maubos ang ubo;",
          "G              Am7          Bm7 C",
          "  Hanggang gumulong ang luha,",
          "",
          "G                Am7         Bm7 C",
          "    Hanggang mahulog ang tala."
        ] },
        { label: "Chorus", lines: [
          "G               Am7       Bm7    C",
          "Masdan mo ang aking mata, 'di mo ba nakikita?",
          "  G            Am7       Bm7         C",
          "Ako ngayo'y lumilipad at nasa langit na",
          "         D   C",
          "Gusto mo bang sumama?"
        ] },
        { label: "Verse 2", lines: [
          "G             Am7       Bm7           C",
          "Hindi mo na kailangan ang magtago't mahiya",
          "G             Am7           Bm7       C",
          "Hindi mo na kailangan ang humanap ng iba"
        ] },
        { label: "Chorus", lines: [
          "G              Am7        Bm7    C",
          "Kalimutan lang muna ang lahat ng problema",
          "  G                   Am7        Bm7        C",
          "Huminga ka ng malalim at tayo'y lalarga na.",
          "         D   C",
          "Handa na bang gumala?"
        ] },
        { label: "Interlude", lines: [
          "F G C Am F G A C#m D E",
          "Pap pa rap pap pa pa rap pa...",
          "A C#m D E",
          "Pa pa pa pa (papapa...)",
          "C Bm C Bm C A/C# D",
          "La la la....oooh hoo hoo..."
        ] },
        { label: "Verse 3", lines: [
          "G             Am7       Bm7           C",
          "Ang daming bawal sa mundo (Ang daming bawal sa mundo)",
          "G             Am7       Bm7           C",
          "Sinasakal nila tayo (Sinasakal nila tayo)",
          "G             Am7       Bm7           C",
          "Buksan ang puso at isipan (Buksan ang puso at isipan)",
          "G             Am7       Bm7           C",
          "Paliparin ang kamalayan (Paliparin)"
        ] },
        { label: "Chorus", lines: [
          "G              Am7        Bm7    C",
          "Masdan mo ang aking mata, 'di mo ba nakikita?",
          "  G     Am7        Bm7          C",
          "Ako'y lumilipad at nasa alapaap na"
        ] },
        { label: "Outro", lines: [
          "         D     C                 D     C",
          "Gusto mo bang...?   (Gusto mo bang...?)",
          "         Bm     C                 Bm     C",
          "Gusto mo bang...?   (Gusto mo bang...?)",
          "         Bm     C                 Bm     C",
          "Gusto mo bang...?   (Gusto mo bang...?)",
          "         Bm     C                 Bm     C",
          "Gusto mo bang...?   (Gusto mo bang...?)",
          "",
          "         Bm     C                 Bm     C",
          "Gusto mo bang...?   (Gusto mo bang...?)",
          "         Bm     C                 Bm     C",
          "Gusto mo bang...?   (Gusto mo bang...?)",
          "         Bm     C                 Bm     C",
          "Gusto mo bang...?   (Gusto mo bang...?)",
          "         Bm     C               Bm     C",
          "Gusto mo bang...?   (Gusto mo bang...?)",
          "",
          "GM7 GM7 (hold)",
          "  ...Sumama?"
        ] }
      ]
    },
    {
      number: 2,
      title: "What's Up",
      artist: "4 Non Blondes",
      key: "A",
      bpm: 67,
      note: "Key of A, no capo (the source sheet suggests capo 2; played here without it).",
      bpmNote: "Ending slows to 57 BPM.",
      sections: [
        { label: "Intro", lines: [
          "A       Bm   D       A"
        ] },
        { label: "Verse 1", lines: [
          "A",
          "   Twenty-five years and my life is still",
          "Bm",
          "Trying to get up that great big hill",
          "    D               A",
          "Of hope for a destination",
          "   A",
          "I realized quickly when I knew I should",
          "          Bm",
          "That the world was made up of this brotherhood",
          "    D                      A",
          "Of man, for whatever that means"
        ] },
        { label: "Pre-Chorus", lines: [
          "          A",
          "And so I cry sometimes when I'm lying in bed",
          "         Bm",
          "Just to get it all out, what's in my head",
          "      D                         A",
          "and I - I am feeling a little peculiar",
          "          A",
          "And so I wake in the morning and I step outside",
          "      Bm",
          "and I take a deep breath and I get real high and",
          "  D                                             A",
          "I scream from the top of my lungs \"What's going on?\""
        ] },
        { label: "Chorus", lines: [
          "            A           Bm",
          "And I said \"Heyeyeyeyey Heyeyey\"",
          "        D                 A",
          "I said \"Hey, what's going on?\"",
          "            A           Bm",
          "And I said \"Heyeyeyeyey Heyeyey\"",
          "        D                 A",
          "I said \"Hey, what's going on?\""
        ] },
        { label: "Interlude", lines: [
          "A       Bm D   A",
          "  Ooh, Ooh Ooh",
          "",
          "ADLIB VOCALIST",
          "",
          "FAST TEMPO"
        ] },
        { label: "Verse 2", lines: [
          "      A                    Bm",
          "And I try, oh my God, do I try",
          "              D                  A",
          "I try all the time, in this institution",
          "      A                     Bm",
          "And I pray, oh my God, do I pray",
          "                    D",
          "I pray every single day",
          "          A",
          "For a revolution"
        ] },
        { label: "Pre-Chorus", lines: [
          "          A",
          "And so I cry sometimes when I'm lying in bed",
          "         Bm",
          "Just to get it all out, what's in my head",
          "      D                         A",
          "and I - I am feeling a little peculiar",
          "          A",
          "And so I wake in the morning and I step outside",
          "      Bm",
          "and I take a deep breath and I get real high and",
          "  D                                             A",
          "I scream from the top of my lungs \"What's going on?\""
        ] },
        { label: "Chorus", lines: [
          "            A           Bm",
          "And I said \"Heyeyeyeyey Heyeyey\"",
          "        D                 A",
          "I said \"Hey, what's going on?\"",
          "            A  (STOP)    Bm (STOP)",
          "And I said \"Heyeyeyeyey Heyeyey\"",
          "        D (STOP)          A (STOP)",
          "I said \"Hey, what's going on?\"",
          "",
          "            A (STOP)\tBm (STOP)",
          "And I said \"Heyeyeyeyey Heyeyey\"",
          "        D (STOP)\t\t  A (STOP)",
          "I said \"Hey, what's going on?\"",
          "            A           Bm",
          "And I said \"Heyeyeyeyey HeyeYEYEYE\"",
          "        D                 A",
          "I said \"Hey, what's going on?\""
        ] },
        { label: "Interlude (FAST)", lines: [
          "A       Bm D   A",
          "  Ooh, Ooh Ooh"
        ] },
        { label: "Outro (SLOW)", lines: [
          "A",
          "   Twenty-five years and my life is still",
          "Bm                                       D - Dm",
          "Trying to get up that great big hill of hope",
          "             A",
          "For a destination"
        ] }
      ]
    },
    {
      number: 3,
      title: "The Final Countdown",
      artist: "Europe",
      key: "E",
      keyNote: "E minor",
      minor: true,
      bpm: 118,
      note: "Key of E minor, as written on the sheet. The original recording is in F#m — choose F#m on the Key picker to play along with the record.",
      sections: [
        { label: "Intro", lines: [
          "Em   C   Am   D B/D#",
          "Em   C   Am   D B/D#",
          "Em   C   Am   D B/D#",
          "Em   C   Am   D B/D#",
          "Em D/F# G C B",
          "",
          "Em   C   Am   D",
          "Em   C   Am   D",
          "Em D/F# G C B",
          "Em"
        ] },
        { label: "Verse 1", lines: [
          "Em",
          "     We're leaving together,",
          "                 Am",
          "But still it's farewell",
          "Em",
          "     And maybe we'll come back,",
          "    D/F#      G",
          "To earth, who can tell?",
          "C                    D",
          "   I guess there is no one to blame",
          "G        D/F#    Em      D       C",
          "   We're leaving ground (leaving ground)",
          "                  Bm           D",
          "Will things ever be the same again?"
        ] },
        { label: "Chorus", lines: [
          "               Em        C                Am       D",
          "It's the final countdown...",
          "               Em        C                Am       D",
          "     The final countdown...                            Ohhh,"
        ] },
        { label: "Verse 2", lines: [
          "Em",
          "     We're heading for Venus",
          "                Am",
          "and still we stand tall",
          "Em",
          "     Cause maybe they've seen us",
          "     D/F#     G",
          "and welcome us all",
          "C               D",
          "   With so many light years to go",
          "G      D/F#         Em     D     C",
          "   and things to be found (to be found)",
          "                     Bm           D",
          "I'm sure that we'll all miss her so."
        ] },
        { label: "Chorus", lines: [
          "               Em        C                Am       D",
          "It's the final countdown...",
          "               Em        C                Am       D",
          "     The final countdown...",
          "               Em    D/F# G           C    B",
          "     The final countdown...                 Ohhh",
          "Em"
        ] },
        { label: "Instrumental", lines: [
          "Am   G/B   C   F   Dm   G   Am   Em",
          "",
          "Am  G/B C F Dm G Am B",
          "Em  C Am D",
          "Em  C Am D",
          "          Em    D/F# G C   B",
          "The final countdown...   Oh-oh"
        ] },
        { label: "Chorus", lines: [
          "               Em        C      Am      D",
          "It's the final countdown...",
          "               Em        C      Am      D",
          "     The final countdown...",
          "               Em            D/F# G       C     B",
          "     The final countdown. The final countdown     Ohhh,",
          "               Em        C                 Am       D",
          "It's the final countdown.   We're leaving together",
          "               Em        C                    Am     D",
          "     The final countdown.   We'll all miss her so.",
          "               Em            D/F# G       C   B",
          "It's the final countdown. The final countdown Ohhh,",
          "               Em        C                 Am       D",
          "",
          "It's the final countdown.   We're leaving together",
          "               Em        C                    Am     D",
          "     The final countdown.   We'll all miss her so.",
          "               Em            D/F# G       C   B",
          "It's the final countdown. The final countdown Ohhh,"
        ] },
        { label: "Outro", lines: [
          "E \tEb"
        ] }
      ]
    }
  ];

  return SONGS;
}));
