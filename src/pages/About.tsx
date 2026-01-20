import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import VisionCard from "@/components/about/VisionCard";
import MissionCard from "@/components/about/MissionCard";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-impact py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            About Our Foundation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Building resilient communities through sustainable development and empowerment
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The Fednarnd Mlati Foundation is a community-based organization committed to advancing education, 
              sustainable development, and community empowerment. Having initiated impactful projects such as 
              water solutions, FMF is now expanding its focus to tree planting and infrastructure development. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Guided by the United Nations' Sustainable Development Goals (SDGs), the foundation takes a holistic 
              approach to addressing community needs, fostering inclusive and lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <VisionCard />
            <MissionCard />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="pt-10 pb-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">CORE VALUES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card shadow-card hover:shadow-primary transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Integrity</span> – We uphold transparency and accountability in all our initiatives.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card hover:shadow-primary transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Sustainability</span> – We design and implement projects that ensure long-term community impact.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-card hover:shadow-primary transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Empowerment</span> – We strengthen individuals and communities to be self-reliant and resilient.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
