// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedIndustries() {
  const industries = [
    {
      translations: [
        {
          lang: "en",
          title: "Food Industry",
          titleSection: 'Industry Experts',
          description:
            "Tatra Capital Group supports businesses in food manufacturing, distribution, and supply chains by providing capital and helping them expand into new markets.",
        },
        {
          lang: "sk",
          title: "Potravinársky priemysel",
          titleSection: 'Odborníci na odvetvie',
          description:
            "Tatra Capital Group podporuje podniky v potravinárskej výrobe, distribúcii a dodávateľských reťazcoch poskytovaním kapitálu a pomáha im expandovať na nové trhy.",
        },
      ],
      image: "/images/assets/landing/industries/Food.svg",
    },
    {
      translations: [
        {
          lang: "en",
          title: "Manufacturing",
          titleSection: 'Industry Experts',
          description:
            "We invest in manufacturing businesses, injecting capital into production and helping companies broaden their market reach across Slovakia and Central Europe.",
        },
        {
          lang: "sk",
          title: "Výroba",
          titleSection: 'Odborníci na odvetvie',
          description:
            "Investujeme do výrobných podnikov, vkladáme kapitál do výroby a pomáhame spoločnostiam rozširovať ich trhový dosah v rámci Slovenska a strednej Európy.",
        },
      ],
      image: "/images/assets/landing/industries/Manufacturing.svg",
    },
    {
      translations: [
        {
          lang: "en",
          title: "Real Estate",
          titleSection: 'Industry Experts',
          description:
            "Our real estate investments focus on strategic developments that improve urban growth, logistics infrastructure, and commercial properties, ensuring long-term business viability.",
        },
        {
          lang: "sk",
          title: "Nehnuteľnosti",
          titleSection: 'Odborníci na odvetvie',
          description:
            "Naše investície do nehnuteľností sa zameriavajú na strategické projekty, ktoré zlepšujú mestský rast, logistickú infraštruktúru a komerčné nehnuteľnosti, čím zabezpečujú dlhodobú obchodnú životaschopnosť.",
        },
      ],
      image: "/images/assets/landing/industries/Building.svg",
    },
  ];

  for (const industry of industries) {
    await prisma.industry.create({
      data: industry,
    });
  }
  console.log("Industries seed data added.");
}

// async function AboutUs() {
//   const aboutUs = [
//     {
//       translations: [
//         {
//           lang: 'en',
//           title1: 'Who We Are',
//           description1: 'Tatra Capital Group is a multinational holding company founded by a group of international investors from the US, UK, and the Middle East. With a strong presence in Slovakia, we partner with and develop businesses in key industries—Food, Manufacturing, and Real Estate—that are essential for long-term economic development in Central Europe. Our approach combines global business expertise with deep local market knowledge, ensuring that every business within our portfolio operates efficiently, scales sustainably, and contributes to regional economic growth. We focus on long-term business development and sustainable expansion.',
//           title2: 'Mission',
//           description2: 'We aim to develop and support strategic projects that enhance Slovakia’s economic landscape, injecting capital into industries and broadening their market reach.',
//           title3: 'Vision',
//           description3: 'To drive sustainable growth in Slovakia and Central Europe by partnering with and developing businesses that create long-term value in food, manufacturing, and real estate.',
//         },
//         {
//           lang: 'sk',
//           title1: 'Kto sme',
//           description1: 'Tatra Capital Group je nadnárodná holdingová spoločnosť založená skupinou medzinárodných investorov z USA, UK a Blízkeho východu. S pevnou prítomnosťou na Slovensku spolupracujeme s podnikmi v kľúčových odvetviach - potraviny, výroba a nehnuteľnosti - ktoré sú nevyhnutné pre dlhodobý ekonomický rozvoj strednej Európy. Naším prístupom je kombinácia globálnych obchodných skúseností s hlbokými znalosťami miestneho trhu, čím zabezpečujeme, že každý podnik v našom portfóliu funguje efektívne, udržateľne rastie a prispieva k regionálnemu hospodárskemu rastu. Sústreďujeme sa na dlhodobý rozvoj podnikania a udržateľnú expanziu.',
//           title2: 'Misie',
//           description2: 'Cieľom je vyvíjať a podporovať strategické projekty, ktoré zlepšujú ekonomickú krajinu Slovenska, vkladajú kapitál do odvetví a rozširujú ich trhový dosah.',
//           title3: 'Vízia',
//           description3: 'Podporovať udržateľný rast na Slovensku a v strednej Európe prostredníctvom spolupráce s podnikmi, ktoré vytvárajú dlhodobú hodnotu v odvetviach potravín, výroby a nehnuteľností.',
//         }
//       ],
//       image: '/images/assets/landing/aboutUs/main'
//     }
//   ]

//   for (const about of aboutUs) {
//     await prisma.aboutUs.create({
//       data: about,
//     });
//   }
// }

// async function seedTeam() {
//   const team = [
//     {
//       translations: [
//         {
//           lang: "en",
//           position: "CEO",
//           description:
//             "I’m Noah Stern, COO of Tatra Capital Group. I focus on business development, operations, and strategic investments in food, manufacturing, and real estate. My role involves structuring deals, optimizing operations, and ensuring long-term growth. I appreciate working with dedicated, humble business owners who are passionate about what they do. My goal is to help them take the next step—whether through strategy, guidance, or new opportunities that drive real growth.",
//         },
//         {
//           lang: "sk",
//           position: "CEO",
//           description: "Noah Stern, COO spoločnosti Tatra Capital Group. Zameriavam sa na rozvoj podnikania, operácie a strategické investície v oblasti potravinárstva, výroby a nehnuteľností. Moja úloha zahŕňa štruktúrovanie obchodov, optimalizáciu operácií a zabezpečenie dlhodobého rastu. Rád spolupracujem s oddanými a pokornými podnikateľmi, ktorí sú vášniví v tom, čo robia. Mojím cieľom je pomôcť im urobiť ďalší krok – či už prostredníctvom stratégie, poradenstva alebo nových príležitostí, ktoré podporujú skutočný rast."
//         }
//       ],
//       name: "Noah Stern",
//       image: "/images/assets/landing/team/ceo.png",
//     }, 
//     {
//       translations: [
//         {
//           lang: "en",
//           position: "CEO 2",
//           description:
//             "I’m Noah Stern 242342, COO of Tatra Capital Group. I focus on business development, operations, and strategic investments in food, manufacturing, and real estate. My role involves structuring deals, optimizing operations, and ensuring long-term growth. I appreciate working with dedicated, humble business owners who are passionate about what they do. My goal is to help them take the next step—whether through strategy, guidance, or new opportunities that drive real growth.",
//         },
//         {
//           lang: "sk",
//           position: "CEO 224",
//           description: "Noah 22222 Stern, COO spoločnosti Tatra Capital Group. Zameriavam sa na rozvoj podnikania, operácie a strategické investície v oblasti potravinárstva, výroby a nehnuteľností. Moja úloha zahŕňa štruktúrovanie obchodov, optimalizáciu operácií a zabezpečenie dlhodobého rastu. Rád spolupracujem s oddanými a pokornými podnikateľmi, ktorí sú vášniví v tom, čo robia. Mojím cieľom je pomôcť im urobiť ďalší krok – či už prostredníctvom stratégie, poradenstva alebo nových príležitostí, ktoré podporujú skutočný rast."
//         }
//       ],
//       name: "Noah Stern 2",
//       image: "/images/assets/landing/team/ceo.png",
//     }, 
//     {
//       translations: [
//         {
//           lang: "en",
//           position: "CEO 3",
//           description:
//             "I’m Noah Stern 242342, COO of Tatra Capital Group. I focus on business development, operations, and strategic investments in food, manufacturing, and real estate. My role involves structuring deals, optimizing operations, and ensuring long-term growth. I appreciate working with dedicated, humble business owners who are passionate about what they do. My goal is to help them take the next step—whether through strategy, guidance, or new opportunities that drive real growth.",
//         },
//         {
//           lang: "sk",
//           position: "CEO 523",
//           description: "Noah 22222 Stern, COO spoločnosti Tatra Capital Group. Zameriavam sa na rozvoj podnikania, operácie a strategické investície v oblasti potravinárstva, výroby a nehnuteľností. Moja úloha zahŕňa štruktúrovanie obchodov, optimalizáciu operácií a zabezpečenie dlhodobého rastu. Rád spolupracujem s oddanými a pokornými podnikateľmi, ktorí sú vášniví v tom, čo robia. Mojím cieľom je pomôcť im urobiť ďalší krok – či už prostredníctvom stratégie, poradenstva alebo nových príležitostí, ktoré podporujú skutočný rast."
//         }
//       ],
//       name: "Noah Stern 3",
//       image: "/images/assets/landing/team/ceo.png",
//     }, 
//   ]

//   for (const teamMember of team) {
//     await prisma.team.create({
//       data: teamMember,
//     });
//   }
//   console.log("Team seed data added.");
// }

// async function seedTeamSection() {
//   const teamSection = [
//     {
//       image: "/images/assets/landing/team/icon.svg",
//       translations: [
//           {
//             lang: "en",
//             title: "Our Team",
//             position: "Here can be you",
//             buttonText: "Join Us",
//             buttonCard: "Learn more",
//             buttonClose: "Close",
//           },
//           {
//             lang: "sk",
//             title: "Spoznajte náš tím",
//             position: "Tu môžete byť vy",
//             buttonText: "Pridajte sa k nám",
//             buttonCard: "Zisti viac",
//             buttonClose: "Zavrieť",
//           },
//         ],
//     },
//   ];

//   for (const section of teamSection) {
//     await prisma.teamSection.create({
//       data: section,
//     });
//   }
//   console.log("TeamSection seed data added.");
// }



// async function seedWorkPosts() {
//   const workPosts = [
//     {
//       translations: [
//         {
//           lang: "en",
//           workType: "Full-time",
//           title: "Software Engineer",
//           miniDescription: "Develop and maintain web applications.",
//           location: "Kyiv",
//           workTypeLarge: "Permanent",
//           money: "$3000 - $5000",
//           title2: "Responsibilities",
//           description2:
//             "Developing high-quality software solutions and collaborating with cross-functional teams.",
//           title3: "Requirements",
//           title3Labels: [
//             "Bachelor's degree",
//             "3+ years of experience",
//             "Team player",
//           ],
//           title4: "Benefits",
//           title4Labels: [
//             "Health insurance",
//             "Flexible hours",
//             "Remote work option",
//           ],
//         },
//         {
//           lang: "sk",
//           workType: "Plný úväzok",
//           title: "Softvérový inžinier",
//           miniDescription: "Vyvíjajte a udržiavajte webové aplikácie.",
//           location: "Kyjev",
//           workTypeLarge: "Trvalý",
//           money: "$3000 - $5000",
//           title2: "Zodpovednosti",
//           description2:
//             "Vývoj vysoko kvalitných softvérových riešení a spolupráca s medzifunkčnými tímami.",
//           title3: "Požiadavky",
//           title3Labels: [
//             "Vysokoškolské vzdelanie",
//             "3+ roky skúseností",
//             "Tímový hráč",
//           ],
//           title4: "Benefity",
//           title4Labels: [
//             "Zdravotné poistenie",
//             "Flexibilné hodiny",
//             "Možnosť práce na diaľku",
//           ],
//         },
//       ],
//     },
//     {
//       translations: [
//         {
//           lang: "en",
//           workType: "Part-time",
//           title: "Content Writer",
//           miniDescription: "Create engaging content for our website.",
//           location: "Remote",
//           workTypeLarge: "Contract",
//           money: "$1000 - $2000",
//           title2: "Job Duties",
//           description2: "Writing articles, blog posts, and marketing copy.",
//           title3: "Qualifications",
//           title3Labels: [
//             "Excellent writing skills",
//             "SEO experience",
//             "Creative thinker",
//           ],
//           title4: "Perks",
//           title4Labels: [
//             "Flexible schedule",
//             "Remote work",
//             "Opportunity to grow",
//           ],
//         },
//         {
//           lang: "sk",
//           workType: "Čiastkový úväzok",
//           title: "Copywriter",
//           miniDescription: "Vytvárajte zaujímavý obsah pre našu webovú stránku.",
//           location: "Diaľkovo",
//           workTypeLarge: "Zmluvne",
//           money: "$1000 - $2000",
//           title2: "Povinnosti",
//           description2:
//             "Písanie článkov, blogov a marketingových textov.",
//           title3: "Kvalifikácie",
//           title3Labels: [
//             "Výborné písomné zručnosti",
//             "Skúsenosti so SEO",
//             "Kreatívny prístup",
//           ],
//           title4: "Výhody",
//           title4Labels: [
//             "Flexibilný rozvrh",
//             "Práca na diaľku",
//             "Príležitosť na rast",
//           ],
//         },
//       ],
//     },
//   ];

//   for (const post of workPosts) {
//     await prisma.workPost.create({
//       data: post,
//     });
//   }
//   console.log("Work posts seed data added.");
// }





async function main() {
  await seedIndustries();
  // await seedWorkPosts();
  // await AboutUs();
  // await seedTeam();
  // await seedTeamSection();
}

main()
.catch((e) => {
  console.error("Error:", e);
  process.exit(1);
})
.finally(async () => {
  await prisma.$disconnect();
});
