import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const iiits = [
  { name: 'IIIT Sri City', city: 'Sri City', state: 'Andhra Pradesh', latitude: 13.62, longitude: 79.99, website: 'https://www.iiits.ac.in' },
  { name: 'IIIT Allahabad', city: 'Prayagraj', state: 'Uttar Pradesh', latitude: 25.43, longitude: 81.77, website: 'https://www.iiita.ac.in' },
  { name: 'IIIT Gwalior', city: 'Gwalior', state: 'Madhya Pradesh', latitude: 26.25, longitude: 78.17, website: 'https://www.iiitm.ac.in' },
  { name: 'IIIT Jabalpur', city: 'Jabalpur', state: 'Madhya Pradesh', latitude: 23.18, longitude: 79.98, website: 'https://www.iiitm.ac.in' },
  { name: 'IIIT Kancheepuram', city: 'Chennai', state: 'Tamil Nadu', latitude: 12.84, longitude: 80.15, website: 'https://www.iiitdm.ac.in' },
  { name: 'IIIT Kottayam', city: 'Pala', state: 'Kerala', latitude: 9.72, longitude: 76.69, website: 'https://www.iiitkottayam.ac.in' },
  { name: 'IIIT Dharwad', city: 'Dharwad', state: 'Karnataka', latitude: 15.46, longitude: 75.01, website: 'https://www.iiitdwd.ac.in' },
  { name: 'IIIT Una', city: 'Una', state: 'Himachal Pradesh', latitude: 31.48, longitude: 76.19, website: 'https://www.iiitu.ac.in' },
  { name: 'IIIT Surat', city: 'Surat', state: 'Gujarat', latitude: 21.17, longitude: 72.83, website: 'https://www.iiitsurat.ac.in' },
  { name: 'IIIT Vadodara', city: 'Gandhinagar', state: 'Gujarat', latitude: 23.22, longitude: 72.65, website: 'https://www.iiitvadodara.ac.in' },
  { name: 'IIIT Kota', city: 'Jaipur', state: 'Rajasthan', latitude: 26.91, longitude: 75.79, website: 'https://www.iiitkota.ac.in' },
  { name: 'IIIT Nagpur', city: 'Nagpur', state: 'Maharashtra', latitude: 21.17, longitude: 79.05, website: 'https://www.iiitn.ac.in' },
  { name: 'IIIT Pune', city: 'Pune', state: 'Maharashtra', latitude: 18.52, longitude: 73.86, website: 'https://www.iiitp.ac.in' },
  { name: 'IIIT Ranchi', city: 'Ranchi', state: 'Jharkhand', latitude: 23.34, longitude: 85.31, website: 'https://www.iiitranchi.ac.in' },
  { name: 'IIIT Bhagalpur', city: 'Bhagalpur', state: 'Bihar', latitude: 25.24, longitude: 86.98, website: 'https://www.iiitbh.ac.in' },
  { name: 'IIIT Tiruchirappalli', city: 'Tiruchirappalli', state: 'Tamil Nadu', latitude: 10.76, longitude: 78.81, website: 'https://www.iiitt.ac.in' },
  { name: 'IIIT Kalyani', city: 'Kalyani', state: 'West Bengal', latitude: 22.99, longitude: 88.45, website: 'https://www.iiitkalyani.ac.in' },
  { name: 'IIIT Manipur', city: 'Imphal', state: 'Manipur', latitude: 24.82, longitude: 93.94, website: 'https://www.iiitmanipur.ac.in' },
  { name: 'IIIT Lucknow', city: 'Lucknow', state: 'Uttar Pradesh', latitude: 26.85, longitude: 80.95, website: 'https://www.iiitl.ac.in' },
  { name: 'IIIT Guwahati', city: 'Guwahati', state: 'Assam', latitude: 26.14, longitude: 91.66, website: 'https://www.iiitg.ac.in' },
  { name: 'IIIT Bhopal', city: 'Bhopal', state: 'Madhya Pradesh', latitude: 23.25, longitude: 77.41, website: 'https://www.iiitbhopal.ac.in' },
  { name: 'IIIT Agartala', city: 'Agartala', state: 'Tripura', latitude: 23.83, longitude: 91.28, website: 'https://www.iiitagartala.ac.in' },
  { name: 'IIIT Bhubaneswar', city: 'Bhubaneswar', state: 'Odisha', latitude: 20.30, longitude: 85.82, website: 'https://www.iiit-bh.ac.in' },
  { name: 'IIIT Raichur', city: 'Raichur', state: 'Karnataka', latitude: 16.21, longitude: 77.35, website: 'https://www.iiitr.ac.in' },
];

const teamMembers = [
  {
    name: 'Ananya Rao',
    role: 'Lead Organizer',
    bio: 'Driving cross-IIIT collaboration and the grand finale experience.',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    socials: { linkedin: 'https://www.linkedin.com' },
    order: 1,
  },
  {
    name: 'Karthik Menon',
    role: 'Tech & Platform',
    bio: 'Architecting resilient judging pipelines and realtime updates.',
    imageUrl: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80',
    socials: { github: 'https://www.github.com' },
    order: 2,
  },
  {
    name: 'Riya Kapoor',
    role: 'Design & Experience',
    bio: 'Crafting the cyberpunk-elite visual identity for UDBHAV.',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    socials: { behance: 'https://www.behance.net' },
    order: 3,
  },
];

const sponsors = [
  { name: 'NeonStack', tier: 'Title', logoUrl: 'https://dummyimage.com/180x80/0af/fff&text=NeonStack', url: 'https://example.com', order: 1 },
  { name: 'QuantumLeap', tier: 'Platinum', logoUrl: 'https://dummyimage.com/160x70/f0f/fff&text=Quantum', url: 'https://example.com', order: 2 },
  { name: 'CyberMesh', tier: 'Gold', logoUrl: 'https://dummyimage.com/140x60/0ff/000&text=CyberMesh', url: 'https://example.com', order: 3 },
];

async function main() {
  await prisma.iIIT.deleteMany();
  await prisma.teamMember.deleteMany();
  await prisma.sponsor.deleteMany();

  await prisma.iIIT.createMany({ data: iiits });
  await prisma.teamMember.createMany({ data: teamMembers });
  await prisma.sponsor.createMany({ data: sponsors });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
