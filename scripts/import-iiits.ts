import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function run() {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error('Usage: pnpm import:iiits <path-to-csv>');
    process.exit(1);
  }

  const resolved = path.resolve(filePath);
  const raw = fs.readFileSync(resolved, 'utf-8');
  const records = parse(raw, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  });

  for (const row of records) {
    const { name, city, state, latitude, longitude, website, logoUrl } = row;
    if (!name || !city || !state) continue;

    await prisma.iIIT.upsert({
      where: { name },
      update: {
        city,
        state,
        latitude: latitude ? Number(latitude) : undefined,
        longitude: longitude ? Number(longitude) : undefined,
        website,
        logoUrl,
      },
      create: {
        name,
        city,
        state,
        latitude: latitude ? Number(latitude) : undefined,
        longitude: longitude ? Number(longitude) : undefined,
        website,
        logoUrl,
      },
    });
  }

  console.log(`Imported ${records.length} IIIT rows from ${resolved}`);
}

run()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
