import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Users, Droplets, TreePine, GraduationCap, Building2, Heart } from "lucide-react";
import heroImage from "@/assets/hero-animated-background.jpg";
import educationImage from "@/assets/education-students.jpg";
import treePlantingImage from "@/assets/tree-planting.jpg";
import waterSolarImage from "@/assets/water-solar-infrastructure.jpg";
import communityWaterAccess from "@/assets/community-water-access.jpg";
import logo from "@/assets/fm-foundation-logo-optimized.png";

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
      image: communityWaterAccess,
    },
  ];

  const impactStats = [
    { icon: Users, number: "400+", label: "Household Reach" },
    { icon: Droplets, number: "3", label: "Boreholes Drilled" },
    { icon: GraduationCap, number: "300+", label: "Students Supported" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero min-h-[80vh] flex items-center overflow-hidden">
        {/* Animated Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Community development background"
            className="w-full h-full object-cover opacity-25 animate-float"
          />
        </div>
        
        {/* Animated Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-secondary/30 animate-gradient-shift"
          style={{ backgroundSize: '400% 400%' }}
        />
        
        {/* Floating Orbs for Subtle Motion */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl animate-float-orb" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-float-orb-reverse" />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-glow-pulse" />
        </div>
        
        {/* Light Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute w-2 h-2 bg-primary-foreground/60 rounded-full animate-particle-drift" style={{ left: '10%', animationDelay: '0s' }} />
          <div className="absolute w-1.5 h-1.5 bg-primary-foreground/40 rounded-full animate-particle-drift" style={{ left: '25%', animationDelay: '3s' }} />
          <div className="absolute w-2.5 h-2.5 bg-primary-foreground/50 rounded-full animate-particle-drift" style={{ left: '40%', animationDelay: '6s' }} />
          <div className="absolute w-1 h-1 bg-primary-foreground/60 rounded-full animate-particle-drift" style={{ left: '60%', animationDelay: '9s' }} />
          <div className="absolute w-2 h-2 bg-primary-foreground/30 rounded-full animate-particle-drift" style={{ left: '75%', animationDelay: '12s' }} />
          <div className="absolute w-1.5 h-1.5 bg-primary-foreground/50 rounded-full animate-particle-drift" style={{ left: '90%', animationDelay: '15s' }} />
        </div>
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/40" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Organization Name - Prominent */}
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-wide animate-fade-in">
              Fednarnd Mlati Foundation
            </h2>
            <div className="mt-3 mx-auto w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-primary-foreground/80 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
          </div>
          
          {/* Tagline */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Empowering Minds,
              <br />
              <span className="text-primary-glow drop-shadow-lg">Enriching Communities</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.4s' }}>
              Building resilient communities through sustainable development, education, and environmental conservation across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="bg-background text-primary border border-primary hover:bg-background/90 shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/about">About Us</Link>
              </Button>
              <Button size="lg" className="bg-background text-primary border border-primary hover:bg-background/90 shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/our-work">Our Work</Link>
              </Button>
              <Button size="lg" className="bg-background text-primary hover:bg-background/90 border border-primary shadow-glow hover:shadow-xl transition-all duration-300">
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Vision & Mission</h2>
            <p className="text-xl text-muted-foreground">Our guiding principles for community transformation</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Vision */}
            <Card className="text-center shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A transformed society where communities thrive through access to clean water, quality education, 
                  sustainable development, environmental conservation, and opportunities that promote shared prosperity for all.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="text-center shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower communities by providing sustainable water solutions, supporting educational initiatives, 
                  and fostering development programs that build resilient and equitable societies.
                </p>
              </CardContent>
            </Card>
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
