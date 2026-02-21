export type Ayat = {
  number: number;
  text: string;
  translation: string;
};

export type SurahAyats = {
  [key: number]: Ayat[];
};

export const ayats: SurahAyats = {
  1: [
    { "number": 1, "text": "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "translation": "In the name of Allah, the Entirely Merciful, the Especially Merciful." },
    { "number": 2, "text": "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ", "translation": "[All] praise is [due] to Allah, Lord of the worlds -" },
    { "number": 3, "text": "ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "translation": "The Entirely Merciful, the Especially Merciful," },
    { "number": 4, "text": "مَٰلِكِ يَوْمِ ٱدِّينِ", "translation": "Sovereign of the Day of Recompense." },
    { "number": 5, "text": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", "translation": "It is You we worship and You we ask for help." },
    { "number": 6, "text": "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ", "translation": "Guide us to the straight path -" },
    { "number": 7, "text": "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ", "translation": "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray." }
  ],
  2: [
    { "number": 1, "text": "الٓمٓ", "translation": "Alif, Lam, Meem." },
    { "number": 2, "text": "ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ", "translation": "This is the Book about which there is no doubt, a guidance for those conscious of Allah -" },
    { "number": 3, "text": "ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ", "translation": "Who believe in the unseen, establish prayer, and spend out of what We have provided for them," },
  ],
  18: [
    { "number": 1, "text": "ٱلْحَمْدُ لِلَّهِ ٱلَّذِىٓ أَنزَلَ عَلَىٰ عَبْدِهِ ٱلْكِتَٰبَ وَلَمْ يَجْعَل لَّهُۥ عِوَجَا ۜ", "translation": "Praise be to Allah Who has sent down to His servant the Book, and has allowed no crookedness therein." },
    { "number": 2, "text": "قَيِّمًا لِّيُنذِرَ بَأْسًا شَدِيدًا مِّن لَّدُنْهُ وَيُبَشِّرَ ٱلْمُؤْمِنِينَ ٱلَّذِينَ يَعْمَلُونَ ٱلصَّٰلِحَٰتِ أَنَّ لَهُمْ أَجْرًا حَسَنًا", "translation": "(He has made it) straight to give warning of a severe punishment from Him, and to give good news to the believers who do good deeds, that they shall have a fair reward." }
  ]
};
