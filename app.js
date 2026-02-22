/* ---------------- Icons (clean SVG, consistent strokes) ---------------- */
const svg = (paths) => `
  <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="#1f2a3a" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    ${paths}
  </svg>
`;

const ICONS = {
  sparkle: svg(`
    <path d="M12 2l1.2 4.1L17 7.3l-3.8 1.2L12 12l-1.2-3.5L7 7.3l3.8-1.2L12 2z"></path>
    <path d="M5 13l.8 2.6L8.5 16l-2.7.8L5 19l-.8-2.2L1.5 16l2.7-.4L5 13z" opacity=".9"></path>
    <path d="M19 13l.8 2.6L22.5 16l-2.7.8L19 19l-.8-2.2L15.5 16l2.7-.4L19 13z" opacity=".9"></path>
  `),
heart: svg(`
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
`),
  bolt: svg(`<path d="M13 2L4 14h7l-1 8 10-14h-7l0-6z"></path>`),
people: svg(`<circle cx="12" cy="7.25" r="3" fill="none" stroke="#1f2a3a" stroke-width="2.2"/><circle cx="5.4" cy="9.15" r="2.3" fill="none" stroke="#1f2a3a" stroke-width="2.2"/><circle cx="18.6" cy="9.15" r="2.3" fill="none" stroke="#1f2a3a" stroke-width="2.2"/><path d="M4 20c.7-3.7 4-6.3 8-6.3s7.3 2.6 8 6.3" fill="none" stroke="#1f2a3a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.8 19.8c.5-2.6 2.6-4.5 5.2-4.8" fill="none" stroke="#1f2a3a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22.2 19.8c-.5-2.6-2.6-4.5-5.2-4.8" fill="none" stroke="#1f2a3a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`),
 question: svg(`
    <path d="M12 18.2h.01"></path>
    <path d="M9.3 9.1a2.9 2.9 0 1 1 4.4 2.5c-.9.6-1.7 1.2-1.7 2.6v.4"></path>
    <path d="M12 2.8a9.2 9.2 0 1 0 0 18.4a9.2 9.2 0 0 0 0-18.4z"></path>
  `),
  dice: svg(`
    <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="3.2"></rect>
    <circle cx="8.4" cy="8.4" r="1.15" fill="#1f2a3a" stroke="none"></circle>
    <circle cx="15.6" cy="8.4" r="1.15" fill="#1f2a3a" stroke="none"></circle>
    <circle cx="8.4" cy="15.6" r="1.15" fill="#1f2a3a" stroke="none"></circle>
    <circle cx="15.6" cy="15.6" r="1.15" fill="#1f2a3a" stroke="none"></circle>
  `),
  back: svg(`<path d="M15 18l-6-6 6-6"></path>`),
  left: svg(`<path d="M14.5 18l-6-6 6-6"></path>`),
  right: svg(`<path d="M9.5 6l6 6-6 6"></path>`)
};

// inject icons
document.getElementById("icon-identity").innerHTML = ICONS.sparkle;
document.getElementById("icon-comfort").innerHTML = ICONS.heart;
document.getElementById("icon-motivation").innerHTML = ICONS.bolt;
document.getElementById("icon-service").innerHTML = ICONS.people;
document.getElementById("icon-guidance").innerHTML = ICONS.question;
document.getElementById("icon-random").innerHTML = ICONS.dice;

document.getElementById("icon-back").innerHTML = ICONS.back;
document.getElementById("icon-dice").innerHTML = ICONS.dice;
document.getElementById("icon-left").innerHTML = ICONS.left;
document.getElementById("icon-right").innerHTML = ICONS.right;

/* ---------------- Data: 5 categories (21 each). Random uses all items. ---------------- */
const DATA = {
  identity: {
    title: "Identity / Affirmation",
    subtitle: "For when you forget who you are.",
    items: [
      { affirmation:"You are known and called by God.", ref:"Isaiah 43:1", verse:"But now thus says the Lord, he who created you, O Jacob, he who formed you, O Israel: Do not fear, for I have redeemed you; I have called you by name, you are mine." },
      { affirmation:"You are wonderfully made.", ref:"Psalm 139:14", verse:"I praise you, for I am fearfully and wonderfully made. Wonderful are your works; that I know very well." },
      { affirmation:"You are a child of God.", ref:"1 John 3:1", verse:"See what love the Father has given us, that we should be called children of God; and that is what we are." },
      { affirmation:"You were made for good works.", ref:"Ephesians 2:10", verse:"For we are what he has made us, created in Christ Jesus for good works, which God prepared beforehand to be our way of life." },
      { affirmation:"You are chosen and set apart.", ref:"1 Peter 2:9", verse:"But you are a chosen race, a royal priesthood, a holy nation, God’s own people, in order that you may proclaim the mighty acts of him who called you out of darkness into his marvelous light." },
      { affirmation:"Christ lives in you.", ref:"Galatians 2:20", verse:"And it is no longer I who live, but it is Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me." },
      { affirmation:"There is no condemnation over you in Christ.", ref:"Romans 8:1", verse:"There is therefore now no condemnation for those who are in Christ Jesus." },
      { affirmation:"You are God’s child and heir.", ref:"Romans 8:16–17", verse:"It is that very Spirit bearing witness with our spirit that we are children of God, and if children, then heirs, heirs of God and joint heirs with Christ—if, in fact, we suffer with him so that we may also be glorified with him." },
      { affirmation:"In Christ, you are a new creation.", ref:"2 Corinthians 5:17", verse:"So if anyone is in Christ, there is a new creation: everything old has passed away; see, everything has become new!" },
      { affirmation:"You are chosen, holy and beloved.", ref:"Colossians 3:12", verse:"As God’s chosen ones, holy and beloved, clothe yourselves with compassion, kindness, humility, meekness, and patience." },
      { affirmation:"God rejoices over you.", ref:"Zephaniah 3:17", verse:"The Lord, your God, is in your midst, a warrior who gives victory; he will rejoice over you with gladness, he will renew you in his love; he will exult over you with loud singing." },
      { affirmation:"Jesus calls you His friend.", ref:"John 15:15", verse:"I do not call you servants any longer, because the servant does not know what the master is doing; but I have called you friends, because I have made known to you everything that I have heard from my Father." },
      { affirmation:"You are loved by Jesus.", ref:"John 15:9", verse:"As the Father has loved me, so I have loved you; abide in my love." },
      { affirmation:"God proved His love for you.", ref:"Romans 5:8", verse:"But God proves his love for us in that while we still were sinners Christ died for us." },
      { affirmation:"You are beautiful in His eyes.", ref:"Song of Songs 4:7", verse:"You are altogether beautiful, my love; there is no flaw in you." },
      { affirmation:"You are God’s treasured possession.", ref:"Deuteronomy 7:6", verse:"For you are a people holy to the Lord your God; the Lord your God has chosen you out of all the peoples on earth to be his people, his treasured possession." },
      { affirmation:"You were chosen before the world began.", ref:"Ephesians 1:4", verse:"Just as he chose us in Christ before the foundation of the world to be holy and blameless before him in love." },
      { affirmation:"You are more than a conqueror.", ref:"Romans 8:37", verse:"No, in all these things we are more than conquerors through him who loved us." },
      { affirmation:"You have power, love and self-discipline.", ref:"2 Timothy 1:7", verse:"For God did not give us a spirit of cowardice, but rather a spirit of power and of love and of self-discipline." },
      { affirmation:"You have fullness in Christ.", ref:"Colossians 2:10", verse:"And you have come to fullness in him, who is the head of every ruler and authority." },
      { affirmation:"Your citizenship is in heaven.", ref:"Philippians 3:20", verse:"But our citizenship is in heaven, and it is from there that we are expecting a Savior, the Lord Jesus Christ" }
    ]
  },

  comfort: {
    title: "Comfort",
    subtitle: "For when everything feels heavy.",
    items: [
      { affirmation:"God is near to your broken heart.", ref:"Psalm 34:18", verse:"The Lord is near to the brokenhearted, and saves the crushed in spirit." },
      { affirmation:"Jesus gives you rest when you’re weary.", ref:"Matthew 11:28", verse:"\"Come to me, all you that are weary and are carrying heavy burdens, and I will give you rest.\"" },
      { affirmation:"God consoles you in your affliction.", ref:"2 Corinthians 1:3–4", verse:"Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and the God of all consolation, who consoles us in all our affliction, so that we may be able to console those who are in any affliction with the consolation with which we ourselves are consoled by God." },
      { affirmation:"You do not walk the darkest valley alone.", ref:"Psalm 23:4", verse:"Even though I walk through the darkest valley, I fear no evil; for you are with me; your rod and your staff—they comfort me." },
      { affirmation:"God sees every tear and restless night.", ref:"Psalm 56:8", verse:"You have kept count of my tossings; put my tears in your bottle. Are they not in your record?" },
      { affirmation:"You can cast your anxiety on Him.", ref:"1 Peter 5:7", verse:"Cast all your anxiety on him, because he cares for you." },
      { affirmation:"God’s peace guards your heart and mind.", ref:"Philippians 4:6–7", verse:"Do not worry about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus." },
      { affirmation:"Jesus gives you His peace.", ref:"John 14:27", verse:"\"Peace I leave with you; my peace I give to you. I do not give to you as the world gives. Do not let your hearts be troubled, and do not let them be afraid.\"" },
      { affirmation:"God is your refuge and strength.", ref:"Psalm 46:1", verse:"God is our refuge and strength, a very present help in trouble." },
      { affirmation:"God strengthens you and upholds you.", ref:"Isaiah 41:10", verse:"Do not fear, for I am with you, do not be afraid, for I am your God; I will strengthen you, I will help you, I will uphold you with my victorious right hand." },
      { affirmation:"Nothing can separate you from God’s love.", ref:"Romans 8:38–39", verse:"For I am convinced that neither death, nor life, nor angels, nor rulers, nor things present, nor things to come, nor powers, nor height, nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord." },
      { affirmation:"God will wipe every tear.", ref:"Revelation 21:4", verse:"He will wipe every tear from their eyes. Death will be no more; mourning and crying and pain will be no more, for the first things have passed away." },
      { affirmation:"God heals the brokenhearted.", ref:"Psalm 147:3", verse:"He heals the brokenhearted, and binds up their wounds." },
      { affirmation:"You are not forgotten by God.", ref:"Isaiah 49:15–16", verse:"Can a woman forget her nursing child, or show no compassion for the child of her womb? Even these may forget, yet I will not forget you. See, I have inscribed you on the palms of my hands; your walls are continually before me." },
      { affirmation:"God’s mercies are new every morning.", ref:"Lamentations 3:22–23", verse:"The steadfast love of the Lord never ceases, his mercies never come to an end; they are new every morning; great is your faithfulness." },
      { affirmation:"You are safe under His wings.", ref:"Psalm 91:4", verse:"He will cover you with his pinions, and under his wings you will find refuge; his faithfulness is a shield and buckler." },
      { affirmation:"God protects those who take refuge in Him.", ref:"Nahum 1:7", verse:"The Lord is good, a stronghold in a day of trouble; he protects those who take refuge in him." },
      { affirmation:"God will sustain you.", ref:"Psalm 55:22", verse:"Cast your burden on the Lord, and he will sustain you; he will never permit the righteous to be moved." },
      { affirmation:"God revives the humble and contrite.", ref:"Isaiah 57:15", verse:"For thus says the high and lofty one who inhabits eternity, whose name is Holy: I dwell in the high and holy place, and also with those who are contrite and humble in spirit, to revive the spirit of the humble, and to revive the heart of the contrite." },
      { affirmation:"God is your light and salvation.", ref:"Psalm 27:1", verse:"The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?" },
      { affirmation:"Take courage, Jesus has conquered the world.", ref:"John 16:33", verse:"\"I have said this to you, so that in me you may have peace. In the world you face persecution. But take courage; I have conquered the world!\"" }
    ]
  },

  /* Motivation: unchanged here (if you want to swap this too, paste your 21 and I’ll replace it) */
  motivation: {
    title: "Motivation / Perseverance",
    subtitle: "For when you are tired and want to give up.",
    items: [
      { affirmation:"Christ gives you strength to keep going.", ref:"Philippians 4:13", verse:"I can do all things through Christ which strengtheneth me." },
      { affirmation:"God will renew your strength when you wait on Him.", ref:"Isaiah 40:31", verse:"But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint." },
      { affirmation:"Your perseverance in doing good is not wasted.", ref:"Galatians 6:9", verse:"And let us not be weary in well doing: for in due season we shall reap, if we faint not." },
      { affirmation:"You can be strong and courageous because God is with you.", ref:"Joshua 1:9", verse:"Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest." },
      { affirmation:"God strengthens you to endure with patience and joy.", ref:"Colossians 1:11", verse:"Strengthened with all might, according to his glorious power, unto all patience and longsuffering with joyfulness." },
      { affirmation:"You can run your race with your eyes on Jesus.", ref:"Hebrews 12:1–2", verse:"Let us run with patience the race that is set before us, Looking unto Jesus the author and finisher of our faith." },
      { affirmation:"Your work for the Lord is never in vain.", ref:"1 Corinthians 15:58", verse:"Therefore, my beloved brethren, be ye stedfast, unmoveable, always abounding in the work of the Lord, forasmuch as ye know that your labour is not in vain in the Lord." },
      { affirmation:"God’s grace is enough for your weakness.", ref:"2 Corinthians 12:9", verse:"My grace is sufficient for thee: for my strength is made perfect in weakness." },
      { affirmation:"You can be fervent in spirit and patient in trials.", ref:"Romans 12:11–12", verse:"Not slothful in business; fervent in spirit; serving the Lord; Rejoicing in hope; patient in tribulation; continuing instant in prayer." },
      { affirmation:"Your trials can grow you into maturity.", ref:"James 1:2–4", verse:"Count it all joy when ye fall into divers temptations; Knowing this, that the trying of your faith worketh patience." },
      { affirmation:"God has given you a spirit of power, love, and a sound mind.", ref:"2 Timothy 1:7", verse:"For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind." },
      { affirmation:"You can hold on to hope because God is faithful.", ref:"Hebrews 10:23", verse:"Let us hold fast the profession of our faith without wavering; (for he is faithful that promised;)" },
      { affirmation:"God shows you what is good and how to walk.", ref:"Micah 6:8", verse:"He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?" },
      { affirmation:"You can commit your way to the Lord and trust Him to act.", ref:"Psalm 37:5", verse:"Commit thy way unto the LORD; trust also in him; and he shall bring it to pass." },
      { affirmation:"God will not leave you as you do the work He gives you.", ref:"1 Chronicles 28:20", verse:"Be strong and of good courage, and do it: fear not, nor be dismayed: for the LORD God, even my God, will be with thee; he will not fail thee, nor forsake thee." },
      { affirmation:"Your suffering can produce endurance, character and hope.", ref:"Romans 5:3–4", verse:"We glory in tribulations also: knowing that tribulation worketh patience; And patience, experience; and experience, hope." },
      { affirmation:"God Himself will restore and strengthen you.", ref:"1 Peter 5:10", verse:"But the God of all grace… after that ye have suffered a while, make you perfect, stablish, strengthen, settle you." },
      { affirmation:"The Lord goes before you and will not abandon you.", ref:"Deuteronomy 31:8", verse:"And the LORD, he it is that doth go before thee; he will be with thee; he will not fail thee, neither forsake thee: fear not, neither be dismayed." },
      { affirmation:"You can be strong and take heart as you hope in the Lord.", ref:"Psalm 31:24", verse:"Be of good courage, and he shall strengthen your heart, all ye that hope in the LORD." },
      { affirmation:"Do not grow tired of doing what is right.", ref:"2 Thessalonians 3:13", verse:"But ye, brethren, be not weary in well doing." },
      { affirmation:"Staying faithful leads to the crown of life.", ref:"Revelation 2:10", verse:"Be thou faithful unto death, and I will give thee a crown of life." }
    ]
  },

  service: {
    title: "Service / Community",
    subtitle: "For when loving and serving people feels difficult.",
    items: [
      { affirmation:"Jesus chose the way of serving.", ref:"Mark 10:45", verse:"\"For the Son of Man came not to be served but to serve, and to give his life a ransom for many.\"" },
      { affirmation:"Your gifts are given to serve others.", ref:"1 Peter 4:10", verse:"Like good stewards of the manifold grace of God, serve one another with whatever gift each of you has received." },
      { affirmation:"Whatever you do for God is seen by Him.", ref:"Colossians 3:23–24", verse:"Whatever your task, put yourselves into it, as done for the Lord and not for your masters, since you know that from the Lord you will receive the inheritance as your reward; you serve the Lord Christ." },
      { affirmation:"God will not forget your love and service.", ref:"Hebrews 6:10", verse:"For God is not unjust; he will not overlook your work and the love that you showed for his sake in serving the saints, as you still do." },
      { affirmation:"You can choose humility and care for others’ interests.", ref:"Philippians 2:3–4", verse:"Do nothing from selfish ambition or conceit, but in humility regard others as better than yourselves. Let each of you look not to your own interests, but to the interests of others." },
      { affirmation:"You are called to serve in love.", ref:"Galatians 5:13", verse:"For you were called to freedom, brothers and sisters; only do not use your freedom as an opportunity for self-indulgence, but through love become slaves to one another." },
      { affirmation:"You are a needed part of Christ’s body.", ref:"Romans 12:4–5", verse:"For as in one body we have many members, and not all the members have the same function, so we, who are many, are one body in Christ, and individually we are members one of another." },
      { affirmation:"You can honour others with real affection.", ref:"Romans 12:10", verse:"Love one another with mutual affection; outdo one another in showing honour." },
      { affirmation:"Sharing and hospitality are part of your worship.", ref:"Romans 12:13", verse:"Contribute to the needs of the saints; extend hospitality to strangers." },
      { affirmation:"What you do for the least, you do for Jesus.", ref:"Matthew 25:40", verse:"\"And the king will answer them, ‘Truly I tell you, just as you did it to one of the least of these who are members of my family, you did it to me.’\"" },
      { affirmation:"Jesus’ way of leadership is humble service.", ref:"John 13:14–15", verse:"\"So if I, your Lord and Teacher, have washed your feet, you also ought to wash one another’s feet. For I have set you an example, that you also should do as I have done to you.\"" },
      { affirmation:"There is blessing in giving yourself away.", ref:"Acts 20:35", verse:"\"In all this I have given you an example that by such work we must support the weak, remembering the words of the Lord Jesus, for he himself said, ‘It is more blessed to give than to receive.’\"" },
      { affirmation:"You can encourage and build others up.", ref:"1 Thessalonians 5:11", verse:"Therefore encourage one another and build up each other, as indeed you are doing." },
      { affirmation:"Community stirs one another toward love.", ref:"Hebrews 10:24–25", verse:"And let us consider how to provoke one another to love and good deeds, not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near." },
      { affirmation:"As you refresh others, God will refresh you.", ref:"Proverbs 11:25", verse:"A generous person will be enriched, and one who gives water will get water." },
      { affirmation:"You can bear with others in love.", ref:"Ephesians 4:2–3", verse:"With all humility and gentleness, with patience, bearing with one another in love, making every effort to maintain the unity of the Spirit in the bond of peace." },
      { affirmation:"God equips you to build up His people.", ref:"Ephesians 4:11–12", verse:"The gifts he gave were that some would be apostles, some prophets, some evangelists, some pastors and teachers, to equip the saints for the work of ministry, for building up the body of Christ." },
      { affirmation:"You can pursue what brings peace and growth.", ref:"Romans 14:19", verse:"Let us then pursue what makes for peace and for mutual upbuilding." },
      { affirmation:"Your light can point people back to God.", ref:"Matthew 5:14–16", verse:"\"You are the light of the world. A city built on a hill cannot be hid... In the same way, let your light shine before others, so that they may see your good works and give glory to your Father in heaven.\"" },
      { affirmation:"Love holds everything together.", ref:"Colossians 3:12–14", verse:"As God’s chosen ones, holy and beloved, clothe yourselves with compassion, kindness, humility, meekness, and patience... Above all, clothe yourselves with love, which binds everything together in perfect harmony." },
      { affirmation:"You are invited to love as Jesus loves.", ref:"John 15:12–13", verse:"\"This is my commandment, that you love one another as I have loved you. No one has greater love than this, to lay down one’s life for one’s friends.\"" }
    ]
  },

  guidance: {
    title: "Guidance / Decision Making",
    subtitle: "For when you don’t know what to do next.",
    items: [
      { affirmation:"As you trust Him, God will direct your path.", ref:"Proverbs 3:5–6", verse:"Trust in the Lord with all your heart, and do not rely on your own insight. In all your ways acknowledge him, and he will make straight your paths." },
      { affirmation:"God’s plans for you are good and hopeful.", ref:"Jeremiah 29:11", verse:"For surely I know the plans I have for you, says the Lord, plans for your welfare and not for harm, to give you a future with hope." },
      { affirmation:"God Himself promises to teach and counsel you.", ref:"Psalm 32:8", verse:"I will instruct you and teach the way you should go; I will counsel you with my eye upon you." },
      { affirmation:"You can ask God for wisdom.", ref:"James 1:5", verse:"If any of you is lacking in wisdom, ask God, who gives to all generously and ungrudgingly, and it will be given you." },
      { affirmation:"God’s word lights up your next step.", ref:"Psalm 119:105", verse:"Your word is a lamp to my feet and a light to my path." },
      { affirmation:"God will show you which way to go.", ref:"Isaiah 30:21", verse:"And when you turn to the right or when you turn to the left, your ears shall hear a word behind you, saying, “This is the way; walk in it.”" },
      { affirmation:"God can show you His ways and paths.", ref:"Psalm 25:4–5", verse:"Make me to know your ways, O Lord; teach me your paths. Lead me in your truth, and teach me, for you are the God of my salvation; for you I wait all day long." },
      { affirmation:"The Lord orders your steps and holds your hand.", ref:"Psalm 37:23–24", verse:"Our steps are made firm by the Lord, when he delights in our way; though we stumble, we shall not fall headlong, for the Lord holds us by the hand." },
      { affirmation:"God is working all things for your good.", ref:"Romans 8:28", verse:"We know that all things work together for good for those who love God, who are called according to his purpose." },
      { affirmation:"God will finish the good work He started.", ref:"Philippians 1:6", verse:"I am confident of this, that the one who began a good work among you will bring it to completion by the day of Jesus Christ." },
      { affirmation:"God’s ways are higher than yours.", ref:"Isaiah 55:8–9", verse:"For my thoughts are not your thoughts, nor are your ways my ways, says the Lord. For as the heavens are higher than the earth, so are my ways higher than your ways and my thoughts than your thoughts." },
      { affirmation:"In God’s presence there is fullness of joy.", ref:"Psalm 16:11", verse:"You show me the path of life. In your presence there is fullness of joy; in your right hand are pleasures forevermore." },
      { affirmation:"You belong to Jesus and can hear His voice.", ref:"John 10:27", verse:"\"My sheep hear my voice. I know them, and they follow me.\"" },
      { affirmation:"God can fill you with knowledge of His will.", ref:"Colossians 1:9", verse:"For this reason, since the day we heard it, we have not ceased praying for you and asking that you may be filled with the knowledge of God’s will in all spiritual wisdom and understanding." },
      { affirmation:"God lovingly directs your steps.", ref:"Proverbs 16:9", verse:"The human mind plans the way, but the Lord directs the steps." },
      { affirmation:"God’s steadfast love can meet you in the morning.", ref:"Psalm 143:8", verse:"Let me hear of your steadfast love in the morning, for in you I put my trust. Teach me the way I should go, for to you I lift up my soul." },
      { affirmation:"God guides you with His counsel.", ref:"Psalm 73:23–24", verse:"Nevertheless I am continually with you; you hold my right hand. You guide me with your counsel, and afterward you will receive me with honour." },
      { affirmation:"The Lord will guide you continually.", ref:"Isaiah 58:11", verse:"The Lord will guide you continually, and satisfy your needs in parched places, and make your bones strong; and you shall be like a watered garden, like a spring of water, whose waters never fail." },
      { affirmation:"God’s purpose stands above all plans.", ref:"Proverbs 19:21", verse:"The human mind may devise many plans, but it is the purpose of the Lord that will be established." },
      { affirmation:"The Holy Spirit will teach you and remind you.", ref:"John 14:26", verse:"\"But the Advocate, the Holy Spirit, whom the Father will send in my name, will teach you everything, and remind you of all that I have said to you.\"" },
      { affirmation:"The Lord will keep your life.", ref:"Psalm 121:7", verse:"The Lord will keep you from all evil; he will keep your life." }
    ]
  }
};

/* ---------------- State + elements ---------------- */
const LS = {
  hideNote: "truthbox_hide_note"
};
let flippedOnceThisLoad = false;
let currentCat = null;
let pool = [];
let order = [];
let idx = 0;

const homeView = document.getElementById("homeView");
const cardView = document.getElementById("cardView");

const crumbText = document.getElementById("crumbText");
const catTitle = document.getElementById("catTitle");
const catSubtitle = document.getElementById("catSubtitle");

const flipCard = document.getElementById("flipCard");
const affirmText = document.getElementById("affirmText");
const verseRef = document.getElementById("verseRef");
const verseText = document.getElementById("verseText");
const countPill = document.getElementById("countPill");
const tapHint = document.getElementById("tapHint");

/* ---------------- Helpers ---------------- */
const randInt = (n) => Math.floor(Math.random() * n);

const shuffle = (arr) => {
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

function setView(view){
  if(view === "home"){
    homeView.style.display = "grid";
    cardView.style.display = "none";
    cardView.setAttribute("aria-hidden","true");
  } else {
    homeView.style.display = "none";
    cardView.style.display = "grid";
    cardView.setAttribute("aria-hidden","false");
  }
}

function getAllItems(){
  const all = [];
  Object.keys(DATA).forEach(k=>{
    DATA[k].items.forEach(it => all.push({ ...it, _cat:k }));
  });
  return all;
}

function buildPool(categoryKey){
  currentCat = categoryKey;

  if(categoryKey === "random"){
    pool = getAllItems();
    order = shuffle([...Array(pool.length).keys()]);
    idx = randInt(order.length);
  } else {
    pool = DATA[categoryKey].items.map(it => ({ ...it, _cat: categoryKey }));
    order = [...Array(pool.length).keys()];
    idx = 0;
  }
}

function updateHeader(){
  if(currentCat === "random"){
    crumbText.textContent = "HOME / RANDOM";
    catTitle.textContent = "Random";
    catSubtitle.textContent = "Surprise me (God knows what I need).";
  } else {
    crumbText.textContent = `HOME / ${DATA[currentCat].title.toUpperCase()}`;
    catTitle.textContent = DATA[currentCat].title;
    catSubtitle.textContent = DATA[currentCat].subtitle;
  }
}

function currentItem(){
  return pool[ order[idx] ];
}

function renderCard(){
  // always go back to FRONT when switching cards
  flipCard.classList.remove("flipped");

  const it = currentItem();
  affirmText.textContent = it.affirmation;
  verseRef.textContent = it.ref;
  verseText.textContent = it.verse;

  countPill.textContent = `${idx + 1}/${pool.length}`;

tapHint.style.display = flippedOnceThisLoad ? "none" : "block";}

function openCategory(categoryKey){
  buildPool(categoryKey);
  updateHeader();
  renderCard();
  setView("cards");
  window.scrollTo({ top: 0, behavior: "instant" });
}

/* ---------------- Events: tiles ---------------- */
document.querySelectorAll(".tile").forEach(btn=>{
  btn.addEventListener("click", ()=> openCategory(btn.dataset.cat));
});

/* ---------------- Flip behaviour ---------------- */
function toggleFlip(){
  const willFlipToBack = !flipCard.classList.contains("flipped");
  flipCard.classList.toggle("flipped");

  if (willFlipToBack && !flippedOnceThisLoad) {
  flippedOnceThisLoad = true;
  tapHint.style.display = "none";
}
}
document.getElementById("frontFace").addEventListener("click", toggleFlip);
document.getElementById("backFace").addEventListener("click", toggleFlip);

/* ---------------- Navigation ---------------- */
document.getElementById("prevBtn").addEventListener("click", ()=>{
  idx = (idx - 1 + order.length) % order.length;
  renderCard();
});
document.getElementById("nextBtn").addEventListener("click", ()=>{
  idx = (idx + 1) % order.length;
  renderCard();
});

/* ---------------- Back + Randomise ---------------- */
document.getElementById("backBtn").addEventListener("click", ()=> setView("home"));

document.getElementById("randomizeBtn").addEventListener("click", ()=>{
  // within category (or across all if you're on Random)
  const n = order.length;
  if(n <= 1) return;

  let newIdx = idx;
  while(newIdx === idx){
    newIdx = randInt(n);
  }
  idx = newIdx;
  renderCard();
});

/* ---------------- Note modal ---------------- */
const noteOverlay = document.getElementById("noteOverlay");
const closeNote = document.getElementById("closeNote");
const openNoteBtn = document.getElementById("openNoteBtn");
const dontAuto = document.getElementById("dontAutoShowNote");

function showNote(){
  noteOverlay.style.display = "grid";
  noteOverlay.setAttribute("aria-hidden","false");
}
function hideNote(){
  noteOverlay.style.display = "none";
  noteOverlay.setAttribute("aria-hidden","true");
}

openNoteBtn.addEventListener("click", showNote);
closeNote.addEventListener("click", hideNote);
noteOverlay.addEventListener("click", (e)=>{
  if(e.target === noteOverlay) hideNote();
});

dontAuto.checked = localStorage.getItem(LS.hideNote) === "1";
dontAuto.addEventListener("change", ()=>{
  if(dontAuto.checked) localStorage.setItem(LS.hideNote, "1");
  else localStorage.removeItem(LS.hideNote);
});

// auto-show unless opted out
if(localStorage.getItem(LS.hideNote) !== "1"){
  setTimeout(showNote, 400);
}

/* ---------------- Init ---------------- */
setView("home");

// console warnings if any category isn't 21 (so it never silently breaks again)
Object.keys(DATA).forEach(k=>{
  if(DATA[k].items.length !== 21){
    console.warn(`[DATA] ${k} has ${DATA[k].items.length} items (expected 21)`);
  }
});
