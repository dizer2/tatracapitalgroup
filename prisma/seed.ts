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
          description:
            "Tatra Capital Group supports businesses in food manufacturing, distribution, and supply chains by providing capital and helping them expand into new markets.",
        },
        {
          lang: "sk",
          title: "Potravinársky priemysel",
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
          description:
            "We invest in manufacturing businesses, injecting capital into production and helping companies broaden their market reach across Slovakia and Central Europe.",
        },
        {
          lang: "sk",
          title: "Výroba",
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
          description:
            "Our real estate investments focus on strategic developments that improve urban growth, logistics infrastructure, and commercial properties, ensuring long-term business viability.",
        },
        {
          lang: "sk",
          title: "Nehnuteľnosti",
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

async function seedWorkPosts() {
  const workPosts = [
    {
      translations: [
        {
          lang: "en",
          workType: "Full-time",
          title: "Software Engineer",
          miniDescription: "Develop and maintain web applications.",
          location: "Kyiv",
          workTypeLarge: "Permanent",
          money: "$3000 - $5000",
          title2: "Responsibilities",
          description2:
            "Developing high-quality software solutions and collaborating with cross-functional teams.",
          title3: "Requirements",
          title3Labels: [
            "Bachelor's degree",
            "3+ years of experience",
            "Team player",
          ],
          title4: "Benefits",
          title4Labels: [
            "Health insurance",
            "Flexible hours",
            "Remote work option",
          ],
        },
        {
          lang: "sk",
          workType: "Plný úväzok",
          title: "Softvérový inžinier",
          miniDescription: "Vyvíjajte a udržiavajte webové aplikácie.",
          location: "Kyjev",
          workTypeLarge: "Trvalý",
          money: "$3000 - $5000",
          title2: "Zodpovednosti",
          description2:
            "Vývoj vysoko kvalitných softvérových riešení a spolupráca s medzifunkčnými tímami.",
          title3: "Požiadavky",
          title3Labels: [
            "Vysokoškolské vzdelanie",
            "3+ roky skúseností",
            "Tímový hráč",
          ],
          title4: "Benefity",
          title4Labels: [
            "Zdravotné poistenie",
            "Flexibilné hodiny",
            "Možnosť práce na diaľku",
          ],
        },
      ],
    },
    {
      translations: [
        {
          lang: "en",
          workType: "Part-time",
          title: "Content Writer",
          miniDescription: "Create engaging content for our website.",
          location: "Remote",
          workTypeLarge: "Contract",
          money: "$1000 - $2000",
          title2: "Job Duties",
          description2: "Writing articles, blog posts, and marketing copy.",
          title3: "Qualifications",
          title3Labels: [
            "Excellent writing skills",
            "SEO experience",
            "Creative thinker",
          ],
          title4: "Perks",
          title4Labels: [
            "Flexible schedule",
            "Remote work",
            "Opportunity to grow",
          ],
        },
        {
          lang: "sk",
          workType: "Čiastkový úväzok",
          title: "Copywriter",
          miniDescription: "Vytvárajte zaujímavý obsah pre našu webovú stránku.",
          location: "Diaľkovo",
          workTypeLarge: "Zmluvne",
          money: "$1000 - $2000",
          title2: "Povinnosti",
          description2:
            "Písanie článkov, blogov a marketingových textov.",
          title3: "Kvalifikácie",
          title3Labels: [
            "Výborné písomné zručnosti",
            "Skúsenosti so SEO",
            "Kreatívny prístup",
          ],
          title4: "Výhody",
          title4Labels: [
            "Flexibilný rozvrh",
            "Práca na diaľku",
            "Príležitosť na rast",
          ],
        },
      ],
    },
  ];

  for (const post of workPosts) {
    await prisma.workPost.create({
      data: post,
    });
  }
  console.log("Work posts seed data added.");
}

async function main() {
  await seedIndustries();
  await seedWorkPosts();
}

main()
  .catch((e) => {
    console.error("Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
