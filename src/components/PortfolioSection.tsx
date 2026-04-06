import { useState } from "react";
import { ExternalLink } from "lucide-react";
import sampleExecutive from "@/assets/sample-executive.jpg";
import sampleCreative from "@/assets/sample-creative.jpg";
import sampleMinimal from "@/assets/sample-minimal.jpg";
import sampleCareerChange from "@/assets/sample-career-change.jpg";
import sampleFederal from "@/assets/sample-federal.jpg";
import sampleAcademic from "@/assets/sample-academic.jpg";

const categories = ["All", "Executive", "Creative", "Career Change", "Specialized"];

const portfolioItems = [
  {
    image: sampleExecutive,
    title: "Senior VP of Marketing",
    category: "Executive",
    description: "C-suite executive transitioning from Fortune 500 to startup leadership. Resulted in 3 interview calls within the first week.",
    industry: "Marketing & Advertising",
  },
  {
    image: sampleCreative,
    title: "UX Design Lead",
    category: "Creative",
    description: "Creative professional resume with infographic elements showcasing a portfolio of award-winning design work.",
    industry: "Design & Technology",
  },
  {
    image: sampleMinimal,
    title: "Software Engineer",
    category: "Creative",
    description: "Clean, ATS-optimized resume for a senior developer. Landed interviews at 4 FAANG companies.",
    industry: "Technology",
  },
  {
    image: sampleCareerChange,
    title: "Teacher to Project Manager",
    category: "Career Change",
    description: "Successfully repositioned 15 years of teaching experience into transferable project management skills.",
    industry: "Education → Corporate",
  },
  {
    image: sampleFederal,
    title: "Federal Government GS-13",
    category: "Specialized",
    description: "Comprehensive federal resume with KSAs, specialized experience, and proper formatting for USAJobs.",
    industry: "Government",
  },
  {
    image: sampleAcademic,
    title: "University Professor",
    category: "Specialized",
    description: "Academic CV featuring publications, research grants, and teaching philosophy for tenure-track position.",
    industry: "Higher Education",
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">Portfolio</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real Results, Real Careers
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Browse samples from my portfolio of 2,500+ professionally written resumes across industries.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-gold text-secondary shadow-soft"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, i) => (
            <div
              key={item.title}
              className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={item.image}
                  alt={`${item.title} resume sample`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={1024}
                />
                <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                    <ExternalLink className="h-5 w-5 text-secondary" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-body font-medium text-gold tracking-wider uppercase">
                  {item.industry}
                </span>
                <h3 className="font-heading text-lg font-bold text-foreground mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
