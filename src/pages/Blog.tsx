import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      title: "Bringing Water Closer to the Community in Taveta",
      excerpt: "In partnership with Davis & Shirtliff CSR and Isuzu East Africa, we have continued to take practical steps towards improving access to clean and reliable water in Taveta Sub-County. Through this collaboration, existing boreholes have been fitted with solar technology to make water pumping more sustainable and affordable. We also drilled a new borehole with a capacity of 60,000 litres, which will serve Kiwalwa Primary and Secondary Schools as well as the wider community. For the schools, this means a steady supply of safe water for learners and teachers, reducing the challenges that come with water scarcity. For the surrounding community, it is an opportunity to access free and clean water closer to home, supporting better health, livelihoods, and dignity. Speaking about the project, Fednarnd Chikira, Founder of Fednarnd Mlati Foundation, said: 'Access to clean water is a basic need, and by working together with committed partners, we are making it a reality for learners and families in Taveta. This project is more than just about water; it is about giving children the chance to focus on their education and helping the community live with dignity and hope.' This collaboration is a testament to what can be achieved when private sector partners join hands with community-focused organizations to deliver sustainable solutions that transform lives.",
      author: "Fednarnd Chikira",
      date: "2024-09-20",
      readTime: "4 min read",
      category: "Water & Sanitation",
      featured: true
    }
  ];

  const categories = ["All", "Water & Sanitation"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-impact py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            News & Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Stay informed about our latest projects, impact stories, and community developments
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-gradient-primary shadow-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured Article</h2>
          {articles
            .filter(article => article.featured)
            .map((article) => (
              <Card key={article.title} className="shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{article.author}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{article.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{article.excerpt}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="default" className="bg-gradient-primary shadow-primary">
                    Read Full Article
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>


      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="shadow-card">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter to receive the latest updates on our projects, impact stories, and community developments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-input rounded-lg bg-background text-foreground"
                />
                <Button className="bg-gradient-primary shadow-primary">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;