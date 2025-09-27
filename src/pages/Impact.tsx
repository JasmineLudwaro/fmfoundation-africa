import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users, Droplets, TreePine, GraduationCap, Building2, Heart } from "lucide-react";

const Impact = () => {
  const impactStats = [
    {
      icon: Users,
      number: "400+",
      label: "Household Reach",
      description: "Direct impact across rural and urban communities in Kenya"
    },
    {
      icon: Droplets,
      number: "3",
      label: "Boreholes Drilled",
      description: "Providing clean water access to thousands of community members"
    },
    {
      icon: GraduationCap,
      number: "300+",
      label: "Students Supported",
      description: "Educational scholarships and learning resource provision"
    },
    {
      icon: Building2,
      number: "0",
      label: "Infrastructure Projects",
      description: "Schools, halls, and community facilities constructed"
    }
  ];

  const sdgProgress = [
    { goal: "Quality Education (SDG 4)", progress: 75, color: "bg-blue-500" },
    { goal: "Clean Water & Sanitation (SDG 6)", progress: 80, color: "bg-cyan-500" },
    { goal: "Sustainable Communities (SDG 11)", progress: 65, color: "bg-orange-500" },
    { goal: "Climate Action (SDG 13)", progress: 70, color: "bg-green-500" },
    { goal: "Partnerships for Goals (SDG 17)", progress: 85, color: "bg-purple-500" }
  ];

  const testimonials = [
    {
      name: "Mary Wanjiku",
      role: "Community Leader, Kiambu",
      quote: "The borehole project has transformed our community. We no longer walk kilometers for clean water, and our children can focus on their education."
    },
    {
      name: "James Ochieng",
      role: "Teacher, Nakuru County",
      quote: "The new classroom and learning materials have significantly improved our students' learning environment. Thank you FMF for believing in our children's future."
    },
    {
      name: "Grace Mutiso",
      role: "Scholarship Recipient",
      quote: "The scholarship program gave me hope when I thought my education was over. Now I'm studying to become a nurse to serve my community."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-impact py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Our Impact
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Measuring the difference we make in communities across Kenya
          </p>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Impact by Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={stat.label} className="text-center shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-2">{stat.number}</h3>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h4>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Progress */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Progress Toward UN Sustainable Development Goals
          </h2>
          <div className="space-y-6">
            {sdgProgress.map((sdg, index) => (
              <Card key={sdg.goal} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-foreground">{sdg.goal}</h3>
                    <span className="text-sm font-medium text-muted-foreground">{sdg.progress}%</span>
                  </div>
                  <Progress value={sdg.progress} className="h-3" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default Impact;