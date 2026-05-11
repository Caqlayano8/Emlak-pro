import { prisma } from "@/lib/db";

interface AdBannerProps {
  position: "header" | "sidebar" | "footer" | "between-listings" | "popup";
  className?: string;
}

export async function AdBanner({ position, className = "" }: AdBannerProps) {
  let ads: { id: string; title: string; imageUrl: string; linkUrl: string | null; position: string }[] = [];
  try {
    ads = await prisma.advertisement.findMany({
      where: { position, isActive: true },
      orderBy: { order: "asc" },
      select: { id: true, title: true, imageUrl: true, linkUrl: true, position: true },
    });
  } catch {
    return null;
  }

  if (ads.length === 0) return null;

  return (
    <div className={`ad-banner ${className}`}>
      {ads.map((ad) => (
        <div key={ad.id} className="relative group">
          {ad.linkUrl ? (
            <a href={ad.linkUrl} target="_blank" rel="noopener noreferrer" className="block">
              <img
                src={ad.imageUrl}
                alt={ad.title}
                className="w-full h-auto rounded-lg object-cover"
              />
            </a>
          ) : (
            <img
              src={ad.imageUrl}
              alt={ad.title}
              className="w-full h-auto rounded-lg object-cover"
            />
          )}
          <span className="absolute top-1 right-1 bg-black/40 text-white text-[10px] px-1.5 py-0.5 rounded">
            Reklam
          </span>
        </div>
      ))}
    </div>
  );
}
