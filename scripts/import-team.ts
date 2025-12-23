import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function run() {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error('Usage: pnpm import:team <path-to-csv>');
    process.exit(1);
  }

  const resolved = path.resolve(filePath);
  const raw = fs.readFileSync(resolved, 'utf-8');
  const records = parse(raw, { columns: true, skip_empty_lines: true, trim: true });

  for (const row of records) {
    const { name, role, bio, imageUrl, order, socials } = row;
    if (!name || !role) continue;

    let socialsJson: Record<string, string> | undefined;
    if (socials) {
      try {
        socialsJson = JSON.parse(socials);
      } catch (e) {
        console.warn(`Could not parse socials JSON for ${name}. Value: ${socials}`);
      }
    }

    await prisma.teamMember.upsert({
      where: { name },
      update: {
        role,
        bio,
        imageUrl,
        order: order ? Number(order) : 0,
        socials: socialsJson,
      },
      create: {
        name,
        role,
        bio,
        imageUrl,
        order: order ? Number(order) : 0,
        socials: socialsJson,
      },
    });
  }

  console.log(`Imported ${records.length} team rows from ${resolved}`);
}

run()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
