import { Calendar, MapPin } from "lucide-react";
// Using uploaded image directly

const FeaturedSection = () => {
  return <div className="px-6 py-4">
      <h2 className="text-lg font-bold text-foreground mb-4">Featured</h2>
      <a
        href="https://flipbookpdf.net/web/site/6d12900bd690ca3d7019a444276772e6510f9f68202510.pdf.html"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open SOLACE BIWEEKLY flipbook"
        className="block group focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl"
      >
        <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border transition-transform duration-200 group-hover:shadow-2xl group-hover:-translate-y-1 group-hover:scale-[1.02]">
          <div className="relative h-48">
            <img src="/lovable-uploads/ec3da0e8-30db-4ef2-beaa-a07eca8e6db0.png" alt="SOLACE BIWEEKLY flipbook cover" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-2">SOLACE BIWEEKLY</h3>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <span>October 08, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>;
};
export default FeaturedSection;