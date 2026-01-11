import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import educationImage from "@/assets/education-students.jpg";
import waterBoreholeImage from "@/assets/water-borehole.jpg";
import treePlantingImage from "@/assets/tree-planting.jpg";
import waterSolarImage from "@/assets/water-solar-infrastructure.jpg";
import waterTowerSolarImage from "@/assets/water-tower-solar.jpg";
import heroCommunityImage from "@/assets/hero-community.jpg";
import communityWaterAccess from "@/assets/community-water-access.jpg";
import galleryTreePlanting from "@/assets/gallery-tree-planting-event.jpg";
import gallerySolarInfra from "@/assets/gallery-water-solar-infrastructure.jpg";
import galleryReliefSupplies from "@/assets/gallery-relief-supplies.jpg";
import galleryWaterTowers from "@/assets/gallery-water-towers.jpg";
import galleryKiwalwa from "@/assets/gallery-kiwalwa-village.jpg";
import galleryWaterCelebration from "@/assets/gallery-water-celebration.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      src: galleryWaterCelebration,
      alt: "Community celebrating clean water access",
      category: "Water & Environment",
    },
    {
      src: communityWaterAccess,
      alt: "Community members accessing clean water from borehole",
      category: "Water & Environment",
    },
    {
      src: galleryTreePlanting,
      alt: "Community tree planting initiative",
      category: "Environment",
    },
    {
      src: gallerySolarInfra,
      alt: "Solar-powered water infrastructure with storage tanks",
      category: "Water & Environment",
    },
    {
      src: galleryWaterTowers,
      alt: "Water storage towers infrastructure",
      category: "Water & Environment",
    },
    {
      src: galleryKiwalwa,
      alt: "Kiwalwa Village water project with partner support",
      category: "Water & Environment",
    },
    {
      src: galleryReliefSupplies,
      alt: "Relief supplies ready for community distribution",
      category: "Community Support",
    },
    {
      src: educationImage,
      alt: "Students in classroom receiving educational support",
      category: "Education",
    },
    {
      src: waterBoreholeImage,
      alt: "Borehole drilling project providing clean water",
      category: "Water & Environment",
    },
    {
      src: treePlantingImage,
      alt: "Environmental conservation tree planting",
      category: "Environment",
    },
    {
      src: waterSolarImage,
      alt: "Solar-powered water infrastructure installation",
      category: "Water & Environment",
    },
    {
      src: waterTowerSolarImage,
      alt: "Water tower with solar installation",
      category: "Water & Environment",
    },
    {
      src: heroCommunityImage,
      alt: "Community development activities",
      category: "Community Development",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-impact py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Our Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Capturing moments of impact, growth, and community transformation
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-card shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-2">
                      {image.category}
                    </span>
                    <p className="text-background text-sm line-clamp-2">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
