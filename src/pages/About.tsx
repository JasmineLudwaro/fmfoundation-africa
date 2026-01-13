import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target } from "lucide-react";


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
      <section className="py-16 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Vision */}
            <Card className="text-center shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Eye className="w-7 h-7 text-primary" />
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
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Target className="w-7 h-7 text-secondary" />
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

      {/* Core Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every initiative we undertake
            </p>
            <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-primary via-secondary to-tertiary rounded-full" />
          </div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Integrity */}
            <Card className="bg-card shadow-card hover:shadow-primary transition-all duration-300 border-t-4 border-primary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Integrity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We uphold transparency and accountability in all our initiatives.
                </p>
              </CardContent>
            </Card>

            {/* Sustainability */}
            <Card className="bg-card shadow-card hover:shadow-primary transition-all duration-300 border-t-4 border-secondary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Sustainability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We design and implement projects that ensure long-term community impact.
                </p>
              </CardContent>
            </Card>

            {/* Empowerment */}
            <Card className="bg-card shadow-card hover:shadow-primary transition-all duration-300 border-t-4 border-tertiary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Empowerment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We strengthen individuals and communities to be self-reliant and resilient.
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