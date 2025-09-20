import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye, Target } from "lucide-react";

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

      {/* Vision, Mission, Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Vision */}
            <Card className="text-center shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-primary-foreground" />
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
                  <Target className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower communities by providing sustainable water solutions, supporting educational initiatives, 
                  and fostering development programs that build resilient and equitable societies.
                </p>
              </CardContent>
            </Card>

            {/* Values Preview */}
            <Card className="text-center shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-tertiary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-tertiary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Guided by integrity, sustainability, and empowerment - the core principles that drive 
                  our commitment to lasting community transformation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Detail */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Core Values</h2>
          <div className="space-y-8">
            <div className="bg-card rounded-lg p-8 shadow-card border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-foreground mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We uphold transparency and accountability in all our initiatives, ensuring that every action 
                we take is guided by honest principles and ethical standards.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-card border-l-4 border-secondary">
              <h3 className="text-xl font-semibold text-foreground mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                We design and implement projects that ensure long-term community impact, focusing on solutions 
                that will continue to benefit communities for generations to come.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-card border-l-4 border-tertiary">
              <h3 className="text-xl font-semibold text-foreground mb-3">Empowerment</h3>
              <p className="text-muted-foreground">
                We strengthen individuals and communities to be self-reliant and resilient, providing tools 
                and knowledge that enable lasting positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;