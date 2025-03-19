
import { motion } from "framer-motion";
import { 
  Calendar, Sparkles, TrendingUp, 
  Clock, RefreshCw, Layers, 
  Search, PenTool, Zap
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureProps) => {
  return (
    <div className="glass-card p-6 rounded-xl reveal-on-scroll">
      <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70 text-sm">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Daily Content Schedule",
      description: "Set up your content calendar once and get fresh blog posts published automatically every day.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI-Powered Writing",
      description: "Our advanced AI analyzes your brand voice and creates content that sounds authentically like you.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "SEO Optimization",
      description: "Every post is automatically optimized for search engines to drive more organic traffic.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time-Saving",
      description: "Save 10+ hours per week that would otherwise be spent researching, writing, and editing content.",
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Content Recycling",
      description: "Automatically repurpose your best-performing content into new formats to maximize its value.",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Content Library",
      description: "Build a comprehensive library of content that continuously drives traffic and leads.",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Topic Research",
      description: "AI-powered research finds the most relevant and trending topics in your industry.",
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Human Oversight",
      description: "Easy review and editing process lets you maintain quality control with minimal time investment.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Publishing",
      description: "Direct integration with WordPress, Medium, and other platforms for seamless publishing.",
    },
  ];

  return (
    <section id="features" className="section-padding px-6 relative">
      <div className="absolute left-0 right-0 top-0 h-48 bg-gradient-to-b from-transparent to-blue-50/30" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-block mb-4 px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
            <p className="text-xs font-medium text-blue-700">Powerful Features</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Everything you need for <span className="gradient-text">effortless blogging</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Our platform handles the entire content creation process so you can focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
