import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Lightbulb, Users, Heart, Award } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";

const OurJourney = () => {
  const pillars = [
    { title: "Education Advancement", icon: Lightbulb },
    { title: "Community Development", icon: Users },
    { title: "Water and Environmental Conservation", icon: Heart },
    { title: "Charitable Support", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-16">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Community empowerment journey"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
            The Journey to Establish Fednarnd Mlati Foundation
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg p-8 shadow-card border-l-4 border-primary">
            <Quote className="h-8 w-8 text-primary mb-4" />
            <p className="text-lg text-muted-foreground leading-relaxed italic">
              Each significant vision begins with a simple question: 'How can I make a meaningful impact within my community?' 
              For the Fednarnd Mlati Foundation (FMF), the journey commenced with observing the daily challenges present in 
              our surroundings—children traversing considerable distances for water rather than attending classes, families 
              navigating life without basic resources, and communities aspiring for opportunities to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Our Beginning */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Beginning</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              This initial impulse evolved into a mission to empower individuals and communities sustainably. 
              What started as a simple observation of community needs transformed into a comprehensive approach 
              to addressing the fundamental challenges facing our people. We recognized that lasting change 
              requires more than temporary solutions—it demands building capacity, fostering resilience, 
              and creating opportunities for communities to thrive independently.
            </p>
          </div>
        </div>
      </section>

      {/* Guiding Pillars */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Guiding Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={pillar.title} className="text-center shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <pillar.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Early Challenges */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Early Challenges</h2>
          <div className="bg-card rounded-lg p-8 shadow-card">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Like any meaningful endeavor, our journey was not without obstacles. Resource constraints tested our resolve, 
              but they also taught us the value of innovation and community collaboration. Through countless community meetings, 
              we learned to listen deeply to the voices of those we aimed to serve.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Strategic partnerships became our cornerstone—working with organizations that shared our vision helped us 
              amplify our impact. These collaborations taught us that sustainable change requires collective effort, 
              bringing together diverse perspectives and resources to address complex community challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Milestone Project */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Milestone Project</h2>
          <Card className="shadow-card hover:shadow-primary transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Kiwalwa, Taveta Sub-County Project</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Our breakthrough came with the Kiwalwa project in Taveta Sub-County, where we successfully solarized 
                two boreholes and established a 60,000-litre water facility. This transformative initiative was made 
                possible through strategic collaboration with Davis & Shirtliff CSR and Isuzu East Africa, 
                demonstrating the power of partnership in creating lasting community impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Today & Tomorrow */}
      <section className="py-16 bg-gradient-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Today & Tomorrow</h2>
          <div className="text-center">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-4xl mx-auto">
              Today, FMF represents more than an organization—it embodies a movement of hope and potential. 
              We are dedicated to building resilient communities where every individual has access to dignity, 
              opportunity, and the resources needed to thrive. Our vision extends beyond immediate relief 
              to sustainable transformation that empowers communities for generations to come.
            </p>
            <div className="bg-primary/10 rounded-lg p-6 max-w-3xl mx-auto">
              <Quote className="h-8 w-8 text-primary mx-auto mb-4" />
              <p className="text-xl font-semibold text-primary italic">
                "Education is empowerment, and empowerment is the foundation of lasting change."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            We invite partners, supporters, and change-makers to join us in empowering minds and enriching communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-lg font-semibold shadow-glow transition-all duration-300">
              <a href="/get-involved">Partner With Us</a>
            </button>
            <button className="bg-background text-primary border border-primary hover:bg-background/90 px-8 py-3 rounded-lg font-semibold shadow-glow transition-all duration-300">
              <a href="/contact">Contact Us</a>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurJourney;