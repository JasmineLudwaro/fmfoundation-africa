import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import educationImage from "@/assets/education-students.jpg";
import waterBoreholeImage from "@/assets/water-borehole.jpg";
import treePlantingImage from "@/assets/tree-planting.jpg";
import waterSolarImage from "@/assets/water-solar-infrastructure.jpg";
import waterTowerSolarImage from "@/assets/water-tower-solar.jpg";
import heroCommunityImage from "@/assets/hero-community.jpg";
import communityWaterAccess from "@/assets/community-water-access.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      src: communityWaterAccess,
      alt: "Community members celebrating clean water access from borehole",
      category: "Water & Environment",
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
      alt: "Community tree planting initiative",
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-card hover:shadow-primary transition-all duration-300 group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-2">
                        {image.category}
                      </span>
                      <p className="text-primary-foreground text-sm">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
