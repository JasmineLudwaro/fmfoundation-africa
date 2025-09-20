import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Building, Droplets } from "lucide-react";
import educationImage from "@/assets/education-students.jpg";
import waterImage from "@/assets/water-borehole.jpg";
import treePlantingImage from "@/assets/tree-planting.jpg";
import waterTowerSolarImage from "@/assets/water-tower-solar.jpg";

const OurWork = () => {
  const focusAreas = [
    {
      icon: BookOpen,
      title: "Education Support",
      description: "Providing scholarships, supporting educational debates, and ensuring access to quality learning resources for students across our communities.",
      image: educationImage,
      features: [
        "Scholarship programs for underprivileged students",
        "Educational debate competitions",
        "Learning resource provision",
        "Teacher training and support",
        "School infrastructure improvement"
      ]
    },
    {
      icon: Building,
      title: "Community Development",
      description: "Building essential infrastructure including classrooms, community halls, and social amenities that strengthen community bonds and opportunities.",
      image: treePlantingImage,
      features: [
        "Classroom construction projects",
        "Community hall development",
        "Social amenities installation",
        "Infrastructure maintenance programs",
        "Community capacity building"
      ]
    },
    {
      icon: Droplets,
      title: "Water & Environment",
      description: "Implementing sustainable water solutions through borehole drilling, tree planting initiatives, and comprehensive clean water programs.",
      image: waterTowerSolarImage,
      features: [
        "Borehole drilling and maintenance",
        "Tree planting campaigns",
        "Clean water access programs",
        "Environmental conservation education",
        "Sustainable agriculture support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-impact py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Our Focus Areas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Three pillars of sustainable community development that guide our mission
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {focusAreas.map((area, index) => (
              <div
                key={area.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <area.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{area.title}</h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">Key Initiatives:</h3>
                    <ul className="space-y-2">
                      {area.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="default" className="bg-gradient-primary shadow-primary">
                    Learn More About This Work
                  </Button>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <Card className="overflow-hidden shadow-card hover:shadow-primary transition-all duration-300">
                    <img
                      src={area.image}
                      alt={area.title === "Water & Environment" ? "Water tower with solar installation supporting clean water access" : area.title}
                      className="w-full h-80 object-cover"
                    />
                    {area.title === "Water & Environment" && (
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground text-center">Sustainable water and solar projects in our communities</p>
                      </CardContent>
                    )}
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join us in creating sustainable change that transforms communities and builds brighter futures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="shadow-glow">
              Partner With Us
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Our Impact
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurWork;