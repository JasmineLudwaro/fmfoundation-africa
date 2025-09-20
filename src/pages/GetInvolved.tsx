import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { HandHeart, Users, DollarSign, Mail } from "lucide-react";

const GetInvolved = () => {
  const involvementOptions = [
    {
      icon: HandHeart,
      title: "Volunteer With Us",
      description: "Join our team of dedicated volunteers making a direct impact in communities across Kenya.",
      features: [
        "Field work opportunities",
        "Skills-based volunteering",
        "Event organization support",
        "Community outreach programs"
      ],
      cta: "Apply to Volunteer"
    },
    {
      icon: Users,
      title: "Partner With Us",
      description: "Collaborate with FMF to amplify our impact through strategic partnerships and resource sharing.",
      features: [
        "Corporate partnerships",
        "NGO collaborations",
        "Government partnerships",
        "International development alliances"
      ],
      cta: "Explore Partnerships"
    },
    {
      icon: DollarSign,
      title: "Support Our Mission",
      description: "Your donations help us fund critical projects that transform communities and change lives.",
      features: [
        "One-time donations",
        "Monthly giving programs",
        "Project-specific funding",
        "Legacy giving options"
      ],
      cta: "Donate Now"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-impact py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Get Involved
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Together we can create sustainable change that transforms communities
          </p>
        </div>
      </section>

      {/* Involvement Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {involvementOptions.map((option, index) => (
              <Card key={option.title} className="shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-center">{option.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Ways to Contribute:</h4>
                    <ul className="space-y-2">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant="default" 
                    className="w-full bg-gradient-primary shadow-primary"
                  >
                    {option.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-card">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">Get in Touch</CardTitle>
              <p className="text-muted-foreground">
                Ready to make a difference? Reach out to us and let's discuss how you can get involved.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="interest">Area of Interest</Label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                    <option value="">Select your area of interest</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="partnership">Partnership</option>
                    <option value="donation">Donation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about how you'd like to get involved..."
                    rows={5}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary shadow-primary"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Every Action Counts
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Whether through volunteering, partnerships, or donations, your contribution helps us build 
            stronger, more resilient communities across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="shadow-glow">
              Start Volunteering Today
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Make a Donation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;