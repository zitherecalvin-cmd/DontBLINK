# DontBLINK — Chord Guide

> 3 songs · designed to match the transpose-toolbar experience in `chord-guide-september-25.md` (see `chord_guide_dontblink.html`)
> Source chords: `.docx` chord sheets in this folder (`Alapaap_Chords_by_Eraserheads.docx`, `Whats_Up_Chords_ver_2_by_4_Non_Blondes.docx`, `The_Final_Countdown_Chords_by_Europe.docx`)

---

## About — Key Transposition

`chord_guide_dontblink.html` adds a per-song **Key** toolbar (below each song title), same as the other guides:

- Shows the key the chart is written in (e.g. `D`).
- **− / +** buttons step the whole song up or down one semitone at a time.
- The key dropdown jumps straight to any of the 12 keys (key-to-key transposition, e.g. D → G).
- **Reset** returns to the original written key.
- Transposing only rewrites the chords (roots, slash-chord bass notes, and all extensions/qualities like `maj7`, `add9`, `sus4`, `m7b5` are preserved) — lyrics, section labels, and chord-to-lyric spacing are untouched.
- Sharp/flat spelling automatically follows the target key's convention (flat keys: F, Bb, Eb, Ab, Db, Gb — sharp keys: C, G, D, A, E, B, F#).

The transpose engine lives in `transpose.js` (also usable from Node) with its test suite in `test_transpose.js` (`node test_transpose.js`). Shared with the other guides in this project.

BPM notes: taken from each sheet's strumming section (Alapaap 148; What's Up 67, slowing to 57 for the ending; The Final Countdown 118). What's Up is played in A with no capo (the sheet's capo 2 is dropped; chords as written). The Final Countdown is written in E minor as on the sheet — its Key toolbar shows minor names (Em), and the original recording is in F#m.

**Auto-scroll** in `chord_guide_dontblink.html` stops at the end of each song (when its last line reaches the bottom of the screen); press Auto-Scroll again to carry on into the next song at that song's BPM.

---

## Setlist

1. [Alapaap](#1-alapaap) — Eraserheads · ♩ 148 BPM · Key of G
2. [What's Up](#2-whats-up) — 4 Non Blondes · ♩ 67 BPM · Key of A
3. [The Final Countdown](#3-the-final-countdown) — Europe · ♩ 118 BPM · Key of E minor

---

## 1. Alapaap — Eraserheads
♩ **148 BPM** · Key of **G**

**[Intro]**

```
GM7	GM7	GM7	GM7
C	C	C	C
A A	B	C	D

GM7                  GM7
May isang umaga na tayo'y magsasama
  CM7                 GM7
Haya at halina sa ala paap
    GM7         FM7 (hold)
O, anong sarap, haa....
```

**[Verse 1]**

```
G              Am7       Bm7 C
  Hanggang sa dulo ng mundo,
G              Am7       Bm7 C
  Hanggang maubos ang ubo;
G              Am7          Bm7 C
  Hanggang gumulong ang luha,

G                Am7         Bm7 C
    Hanggang mahulog ang tala.
```

**[Chorus]**

```
G               Am7       Bm7    C
Masdan mo ang aking mata, 'di mo ba nakikita?
  G            Am7       Bm7         C
Ako ngayo'y lumilipad at nasa langit na
         D   C
Gusto mo bang sumama?
```

**[Verse 2]**

```
G             Am7       Bm7           C
Hindi mo na kailangan ang magtago't mahiya
G             Am7           Bm7       C
Hindi mo na kailangan ang humanap ng iba
```

**[Chorus]**

```
G              Am7        Bm7    C
Kalimutan lang muna ang lahat ng problema
  G                   Am7        Bm7        C
Huminga ka ng malalim at tayo'y lalarga na.
         D   C
Handa na bang gumala?
```

**[Interlude]**

```
F G C Am F G A C#m D E
Pap pa rap pap pa pa rap pa...
A C#m D E
Pa pa pa pa (papapa...)
C Bm C Bm C A/C# D
La la la....oooh hoo hoo...
```

**[Verse 3]**

```
G             Am7       Bm7           C
Ang daming bawal sa mundo (Ang daming bawal sa mundo)
G             Am7       Bm7           C
Sinasakal nila tayo (Sinasakal nila tayo)
G             Am7       Bm7           C
Buksan ang puso at isipan (Buksan ang puso at isipan)
G             Am7       Bm7           C
Paliparin ang kamalayan (Paliparin)
```

**[Chorus]**

```
G              Am7        Bm7    C
Masdan mo ang aking mata, 'di mo ba nakikita?
  G     Am7        Bm7          C
Ako'y lumilipad at nasa alapaap na
```

**[Outro]**

```
         D     C                 D     C
Gusto mo bang...?   (Gusto mo bang...?)
         Bm     C                 Bm     C
Gusto mo bang...?   (Gusto mo bang...?)
         Bm     C                 Bm     C
Gusto mo bang...?   (Gusto mo bang...?)
         Bm     C                 Bm     C
Gusto mo bang...?   (Gusto mo bang...?)

         Bm     C                 Bm     C
Gusto mo bang...?   (Gusto mo bang...?)
         Bm     C                 Bm     C
Gusto mo bang...?   (Gusto mo bang...?)
         Bm     C                 Bm     C
Gusto mo bang...?   (Gusto mo bang...?)
         Bm     C               Bm     C
Gusto mo bang...?   (Gusto mo bang...?)

GM7 GM7 (hold)
  ...Sumama?
```

---

## 2. What's Up — 4 Non Blondes
♩ **67 BPM** · Key of **A**

> Key of A, no capo (the source sheet suggests capo 2; played here without it).

> Ending slows to 57 BPM.

**[Intro]**

```
A       Bm   D       A
```

**[Verse 1]**

```
A
   Twenty-five years and my life is still
Bm
Trying to get up that great big hill
    D               A
Of hope for a destination
   A
I realized quickly when I knew I should
          Bm
That the world was made up of this brotherhood
    D                      A
Of man, for whatever that means
```

**[Pre-Chorus]**

```
          A
And so I cry sometimes when I'm lying in bed
         Bm
Just to get it all out, what's in my head
      D                         A
and I - I am feeling a little peculiar
          A
And so I wake in the morning and I step outside
      Bm
and I take a deep breath and I get real high and
  D                                             A
I scream from the top of my lungs "What's going on?"
```

**[Chorus]**

```
            A           Bm
And I said "Heyeyeyeyey Heyeyey"
        D                 A
I said "Hey, what's going on?"
            A           Bm
And I said "Heyeyeyeyey Heyeyey"
        D                 A
I said "Hey, what's going on?"
```

**[Interlude]**

```
A       Bm D   A
  Ooh, Ooh Ooh

ADLIB VOCALIST

FAST TEMPO
```

**[Verse 2]**

```
      A                    Bm
And I try, oh my God, do I try
              D                  A
I try all the time, in this institution
      A                     Bm
And I pray, oh my God, do I pray
                    D
I pray every single day
          A
For a revolution
```

**[Pre-Chorus]**

```
          A
And so I cry sometimes when I'm lying in bed
         Bm
Just to get it all out, what's in my head
      D                         A
and I - I am feeling a little peculiar
          A
And so I wake in the morning and I step outside
      Bm
and I take a deep breath and I get real high and
  D                                             A
I scream from the top of my lungs "What's going on?"
```

**[Chorus]**

```
            A           Bm
And I said "Heyeyeyeyey Heyeyey"
        D                 A
I said "Hey, what's going on?"
            A  (STOP)    Bm (STOP)
And I said "Heyeyeyeyey Heyeyey"
        D (STOP)          A (STOP)
I said "Hey, what's going on?"

            A (STOP)	Bm (STOP)
And I said "Heyeyeyeyey Heyeyey"
        D (STOP)		  A (STOP)
I said "Hey, what's going on?"
            A           Bm
And I said "Heyeyeyeyey HeyeYEYEYE"
        D                 A
I said "Hey, what's going on?"
```

**[Interlude (FAST)]**

```
A       Bm D   A
  Ooh, Ooh Ooh
```

**[Outro (SLOW)]**

```
A
   Twenty-five years and my life is still
Bm                                       D - Dm
Trying to get up that great big hill of hope
             A
For a destination
```

---

## 3. The Final Countdown — Europe
♩ **118 BPM** · Key of **E** (E minor)

> Key of E minor, as written on the sheet. The original recording is in F#m — choose F#m on the Key picker to play along with the record.

**[Intro]**

```
Em   C   Am   D B/D#
Em   C   Am   D B/D#
Em   C   Am   D B/D#
Em   C   Am   D B/D#
Em D/F# G C B

Em   C   Am   D
Em   C   Am   D
Em D/F# G C B
Em
```

**[Verse 1]**

```
Em
     We're leaving together,
                 Am
But still it's farewell
Em
     And maybe we'll come back,
    D/F#      G
To earth, who can tell?
C                    D
   I guess there is no one to blame
G        D/F#    Em      D       C
   We're leaving ground (leaving ground)
                  Bm           D
Will things ever be the same again?
```

**[Chorus]**

```
               Em        C                Am       D
It's the final countdown...
               Em        C                Am       D
     The final countdown...                            Ohhh,
```

**[Verse 2]**

```
Em
     We're heading for Venus
                Am
and still we stand tall
Em
     Cause maybe they've seen us
     D/F#     G
and welcome us all
C               D
   With so many light years to go
G      D/F#         Em     D     C
   and things to be found (to be found)
                     Bm           D
I'm sure that we'll all miss her so.
```

**[Chorus]**

```
               Em        C                Am       D
It's the final countdown...
               Em        C                Am       D
     The final countdown...
               Em    D/F# G           C    B
     The final countdown...                 Ohhh
Em
```

**[Instrumental]**

```
Am   G/B   C   F   Dm   G   Am   Em

Am  G/B C F Dm G Am B
Em  C Am D
Em  C Am D
          Em    D/F# G C   B
The final countdown...   Oh-oh
```

**[Chorus]**

```
               Em        C      Am      D
It's the final countdown...
               Em        C      Am      D
     The final countdown...
               Em            D/F# G       C     B
     The final countdown. The final countdown     Ohhh,
               Em        C                 Am       D
It's the final countdown.   We're leaving together
               Em        C                    Am     D
     The final countdown.   We'll all miss her so.
               Em            D/F# G       C   B
It's the final countdown. The final countdown Ohhh,
               Em        C                 Am       D

It's the final countdown.   We're leaving together
               Em        C                    Am     D
     The final countdown.   We'll all miss her so.
               Em            D/F# G       C   B
It's the final countdown. The final countdown Ohhh,
```

**[Outro]**

```
E 	Eb
```

---
