import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Users, Droplets, TreePine, GraduationCap, Building2, Heart } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";
import educationImage from "@/assets/education-students.jpg";
import waterImage from "@/assets/water-borehole.jpg";
import treePlantingImage from "@/assets/tree-planting.jpg";
import waterSolarImage from "@/assets/water-solar-infrastructure.jpg";

const Index = () => {
  const focusAreas = [
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Scholarships, debates, and access to learning resources",
      image: educationImage,
    },
    {
      icon: Building2,
      title: "Community Development",
      description: "Construction of classrooms, halls, and social amenities",
      image: treePlantingImage,
    },
    {
      icon: Droplets,
      title: "Water & Environment",
      description: "Boreholes, tree planting, and clean water initiatives",
      image: waterImage,
    },
  ];

  const impactStats = [
    { icon: Users, number: "50+", label: "Communities Served" },
    { icon: Droplets, number: "25", label: "Boreholes Drilled" },
    { icon: GraduationCap, number: "500+", label: "Students Supported" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Community empowerment"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Empowering Minds,
            <br />
            <span className="text-primary-glow">Enriching Communities</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Building resilient communities through sustainable development, education, and environmental conservation across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-background text-primary hover:bg-background/90 border border-primary shadow-glow">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Focus Areas</h2>
            <p className="text-xl text-muted-foreground">Three pillars of sustainable community development</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <Card key={area.title} className="overflow-hidden shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in group">
                <div className="relative h-48">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <area.icon className="h-8 w-8 text-primary-foreground mb-2" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  <Link to="/our-work" className="text-primary font-medium hover:text-primary-glow transition-colors inline-flex items-center">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Impact</h2>
            <p className="text-xl text-muted-foreground">Measuring the difference we make in communities</p>
          </div>
          
          {/* Featured Project Image */}
          <div className="mb-12">
            <Card className="overflow-hidden shadow-card">
              <img
                src={waterSolarImage}
                alt="Community water and solar infrastructure project"
                className="w-full h-64 md:h-80 object-cover"
              />
              <CardContent className="p-6 text-center">
                <p className="text-lg text-muted-foreground">Sustainable water and solar projects in our communities</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={stat.label} className="text-center shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                  <p className="text-lg font-semibold text-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Partner with us to build resilient communities
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Together, we can create sustainable change that transforms lives and strengthens communities across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-glow">
              <Link to="/get-involved">Get Involved</Link>
            </Button>
            <Button size="lg" className="bg-primary text-primary-foreground">
              <Link to="/impact">View Our Impact</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
