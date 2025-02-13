import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	// Insert starting text (navigation and title)
	const localizationTexts = [
		{ key: "nav_1", lang: "en", value: "Abou Us", category: "nav" },
		{ key: "nav_2", lang: "en", value: "Careers", category: "nav" },
		{ key: "nav_3", lang: "en", value: "Our Team", category: "nav" },
		{ key: "nav_1", lang: "sk", value: "O nás", category: "nav" },
		{ key: "nav_2", lang: "sk", value: "Kariéra", category: "nav" },
		{ key: "nav_3", lang: "sk", value: "Náš tím", category: "nav" },
		{ key: "title", lang: "en", value: "Shaping Tomorrow, Today", category: "home"},
		{ key: "title", lang: "sk", value: "Tvarujeme zajtra, dnes", category: "home"}
	];

	// Insert localization texts into the database
	for (const text of localizationTexts) {
		console.log("Inserting:", text);  // Log to inspect the data
		await prisma.translation.create({
			data: text,
		});
	}

	console.log("Localization texts added.");
}

main()
	.catch(async (e) => {
		console.error("Error:", e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
