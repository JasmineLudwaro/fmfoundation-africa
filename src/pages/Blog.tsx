import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      title: "Launching Our Tree Planting Campaign",
      excerpt: "Join us in our ambitious goal to plant 50,000 trees across Kenya in 2024. Learn about our environmental conservation strategy and how communities are leading the charge.",
      author: "Dr. Sarah Kimani",
      date: "2024-03-15",
      readTime: "5 min read",
      category: "Environment",
      featured: true
    },
    {
      title: "New Borehole Project in Rural Kenya",
      excerpt: "Breaking ground on our latest water access project in Machakos County. This initiative will provide clean water to over 3,000 community members.",
      author: "James Mutua",
      date: "2024-03-08",
      readTime: "3 min read",
      category: "Water & Sanitation",
      featured: false
    },
    {
      title: "Celebrating Educational Milestones",
      excerpt: "Recognizing the achievements of our scholarship recipients and the impact of our educational support programs across 15 schools in Nairobi and surrounding areas.",
      author: "Grace Wanjiru",
      date: "2024-02-28",
      readTime: "4 min read",
      category: "Education",
      featured: false
    },
    {
      title: "Community-Led Development: A Success Story",
      excerpt: "How the people of Kiambu County took ownership of their development projects and achieved remarkable results through local leadership and partnership.",
      author: "Peter Ochieng",
      date: "2024-02-20",
      readTime: "6 min read",
      category: "Community Development",
      featured: false
    },
    {
      title: "Partnership Spotlight: Working with Local Organizations",
      excerpt: "Exploring our collaborative approach to community development and how partnerships with local organizations amplify our impact.",
      author: "Mary Njoki",
      date: "2024-02-15",
      readTime: "4 min read",
      category: "Partnerships",
      featured: false
    },
    {
      title: "SDG Progress Report: Our 2023 Impact",
      excerpt: "A comprehensive look at our progress toward achieving the UN Sustainable Development Goals and the measurable impact we've made in communities.",
      author: "FMF Research Team",
      date: "2024-01-30",
      readTime: "8 min read",
      category: "Impact & Research",
      featured: false
    }
  ];

  const categories = ["All", "Environment", "Water & Sanitation", "Education", "Community Development", "Partnerships", "Impact & Research"];

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

      {/* All Articles */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles
              .filter(article => !article.featured)
              .map((article, index) => (
                <Card key={article.title} className="shadow-card hover:shadow-primary transition-all duration-300 animate-scale-in">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <User size={12} />
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
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