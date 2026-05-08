import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import path from "path";
import bcrypt from "bcryptjs";

const dbPath = path.join(process.cwd(), "dev.db");
const adapter = new PrismaBetterSqlite3({ url: dbPath });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  // Create users
  const hashedPassword = await bcrypt.hash("123456", 12);

  const user1 = await prisma.user.create({
    data: {
      name: "Ahmet Yılmaz",
      email: "ahmet@emlakpro.com",
      password: hashedPassword,
      phone: "0532 111 22 33",
      role: "agent",
      city: "İstanbul",
      bio: "10 yıllık emlak deneyimi ile İstanbul'da hizmet vermekteyim.",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Fatma Demir",
      email: "fatma@emlakpro.com",
      password: hashedPassword,
      phone: "0533 444 55 66",
      role: "agent",
      city: "Ankara",
      bio: "Ankara ve çevresinde konut ve ticari gayrimenkul danışmanlığı.",
    },
  });

  const user3 = await prisma.user.create({
    data: {
      name: "Mehmet Kaya",
      email: "mehmet@emlakpro.com",
      password: hashedPassword,
      phone: "0534 777 88 99",
      role: "user",
      city: "İzmir",
    },
  });

  // Create properties
  const properties = [
    {
      title: "Deniz Manzaralı Lüks 3+1 Daire",
      description:
        "Kadıköy'ün en prestijli lokasyonunda, deniz manzaralı, yeni yapı 3+1 daire. Geniş salon, açık mutfak, ebeveyn banyosu. Site içinde havuz, fitness, sauna mevcut. Merkezi konumu ile ulaşıma çok yakın.",
      price: 4500000,
      type: "satilik",
      category: "daire",
      city: "İstanbul",
      district: "Kadıköy",
      neighborhood: "Caferağa",
      area: 145,
      rooms: "3+1",
      bathrooms: 2,
      floor: 8,
      totalFloors: 12,
      buildingAge: 2,
      heating: "dogalgaz",
      furnished: false,
      parking: true,
      elevator: true,
      balcony: true,
      garden: false,
      pool: true,
      security: true,
      featured: true,
      userId: user1.id,
    },
    {
      title: "Bahçeli Müstakil Villa - Çeşme",
      description:
        "Çeşme Alaçatı'da 500m² arsa üzerine kurulu, 250m² kullanım alanlı müstakil villa. 4 yatak odası, 3 banyo, geniş oturma alanı. Özel havuz ve bahçe. Denize 5 dakika mesafede.",
      price: 12000000,
      type: "satilik",
      category: "villa",
      city: "İzmir",
      district: "Çeşme",
      neighborhood: "Alaçatı",
      area: 250,
      rooms: "4+2",
      bathrooms: 3,
      floor: 1,
      totalFloors: 2,
      buildingAge: 5,
      heating: "kombi",
      furnished: true,
      parking: true,
      elevator: false,
      balcony: true,
      garden: true,
      pool: true,
      security: true,
      featured: true,
      userId: user1.id,
    },
    {
      title: "Merkezi Konumda Kiralık Ofis",
      description:
        "Levent iş merkezinde, Metro'ya yürüme mesafesinde, 120m² açık ofis alanı. Hazır altyapı, klima, fiber internet. 7/24 güvenlik ve otopark.",
      price: 35000,
      type: "kiralik",
      category: "ofis",
      city: "İstanbul",
      district: "Beşiktaş",
      neighborhood: "Levent",
      area: 120,
      rooms: "3+1",
      bathrooms: 1,
      floor: 5,
      totalFloors: 15,
      buildingAge: 10,
      heating: "merkezi",
      furnished: true,
      parking: true,
      elevator: true,
      balcony: false,
      garden: false,
      pool: false,
      security: true,
      featured: true,
      userId: user2.id,
    },
    {
      title: "Yatırımlık Arsa - Belek",
      description:
        "Antalya Belek'te turizm bölgesinde 1000m² imarlı arsa. Denize 2 km mesafede. Otel veya villa projeleri için ideal konum.",
      price: 3500000,
      type: "satilik",
      category: "arsa",
      city: "Antalya",
      district: "Serik",
      neighborhood: "Belek",
      area: 1000,
      rooms: null,
      bathrooms: null,
      floor: null,
      totalFloors: null,
      buildingAge: null,
      heating: null,
      furnished: false,
      parking: false,
      elevator: false,
      balcony: false,
      garden: false,
      pool: false,
      security: false,
      featured: true,
      userId: user2.id,
    },
    {
      title: "Cadde Üzeri Kiralık Dükkan",
      description:
        "Ankara Kızılay'da ana cadde üzerinde 80m² kiralık dükkan. Yoğun yaya trafiği, geniş vitrin cephesi. Her türlü ticari faaliyet için uygundur.",
      price: 25000,
      type: "kiralik",
      category: "dukkan",
      city: "Ankara",
      district: "Çankaya",
      neighborhood: "Kızılay",
      area: 80,
      rooms: "1+0",
      bathrooms: 1,
      floor: 0,
      totalFloors: 5,
      buildingAge: 15,
      heating: "klima",
      furnished: false,
      parking: false,
      elevator: false,
      balcony: false,
      garden: false,
      pool: false,
      security: true,
      featured: false,
      userId: user2.id,
    },
    {
      title: "Boğaz Manzaralı 2+1 Kiralık Daire",
      description:
        "Beşiktaş'ta Boğaz manzaralı, eşyalı 2+1 kiralık daire. Metro ve otobüs duraklarına yakın. Site içinde otopark mevcut.",
      price: 18000,
      type: "kiralik",
      category: "daire",
      city: "İstanbul",
      district: "Beşiktaş",
      neighborhood: "Ortaköy",
      area: 95,
      rooms: "2+1",
      bathrooms: 1,
      floor: 6,
      totalFloors: 10,
      buildingAge: 8,
      heating: "dogalgaz",
      furnished: true,
      parking: true,
      elevator: true,
      balcony: true,
      garden: false,
      pool: false,
      security: true,
      featured: false,
      userId: user1.id,
    },
    {
      title: "Tarım Arazisi - Manisa",
      description:
        "Manisa Akhisar'da 5000m² verimli tarım arazisi. Sulu tarıma elverişli, yola cepheli. Zeytin ve üzüm bağcılığı için ideal.",
      price: 1500000,
      type: "satilik",
      category: "arazi",
      city: "Manisa",
      district: "Akhisar",
      area: 5000,
      rooms: null,
      bathrooms: null,
      floor: null,
      totalFloors: null,
      buildingAge: null,
      heating: null,
      furnished: false,
      parking: false,
      elevator: false,
      balcony: false,
      garden: false,
      pool: false,
      security: false,
      featured: false,
      userId: user1.id,
    },
    {
      title: "Modern 1+1 Stüdyo Daire - Üniversiteye Yakın",
      description:
        "Bursa Nilüfer'de üniversiteye 5 dakika yürüme mesafesinde, yeni yapı 1+1 stüdyo daire. Eşyalı, kombili. Öğrenci veya genç profesyoneller için ideal.",
      price: 7500,
      type: "kiralik",
      category: "daire",
      city: "Bursa",
      district: "Nilüfer",
      area: 55,
      rooms: "1+1",
      bathrooms: 1,
      floor: 3,
      totalFloors: 8,
      buildingAge: 1,
      heating: "kombi",
      furnished: true,
      parking: false,
      elevator: true,
      balcony: true,
      garden: false,
      pool: false,
      security: false,
      featured: false,
      userId: user2.id,
    },
  ];

  for (const prop of properties) {
    await prisma.property.create({ data: prop });
  }

  // Create sample messages
  await prisma.message.create({
    data: {
      content: "Merhaba, Kadıköy'deki daire hala satılık mı?",
      senderId: user3.id,
      receiverId: user1.id,
    },
  });

  await prisma.message.create({
    data: {
      content: "Merhaba, evet hala satılık. Randevu almak ister misiniz?",
      senderId: user1.id,
      receiverId: user3.id,
    },
  });

  // Create sample notifications
  await prisma.notification.create({
    data: {
      type: "system",
      title: "Hoş Geldiniz!",
      content: "EmlakPro'ya hoş geldiniz. Hemen ilan vermeye veya ev aramaya başlayın!",
      userId: user1.id,
    },
  });

  await prisma.notification.create({
    data: {
      type: "system",
      title: "Hoş Geldiniz!",
      content: "EmlakPro'ya hoş geldiniz. Hemen ilan vermeye veya ev aramaya başlayın!",
      userId: user2.id,
    },
  });

  await prisma.notification.create({
    data: {
      type: "system",
      title: "Hoş Geldiniz!",
      content: "EmlakPro'ya hoş geldiniz. Hayalinizdeki evi bulmaya başlayın!",
      userId: user3.id,
    },
  });

  console.log("Database seeded successfully!");
  console.log("Test accounts:");
  console.log("  ahmet@emlakpro.com / 123456 (agent)");
  console.log("  fatma@emlakpro.com / 123456 (agent)");
  console.log("  mehmet@emlakpro.com / 123456 (user)");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
