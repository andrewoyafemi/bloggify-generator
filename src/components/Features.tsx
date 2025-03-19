
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
      title: "Content on autopilot",
      description: "Set it once, then forget about it. Fresh posts show up on your blog like magic — no alarm clock needed.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Sounds like you wrote it",
      description: "Really, who uses \"conundrum\" in their copy? GhostRyt is your superhuman copywriter",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Google will love you",
      description: "Every post is quietly optimized to climb the search ranks. More eyeballs, zero effort.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Your time back",
      description: "What would you do with an extra 10 hours each week? That's what we're giving back to you. You're welcome.",
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Content that works twice",
      description: "We'll remix your greatest hits into fresh formats. One idea, multiple pieces of content — that's smart, not lazy.",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Build your library",
      description: "Watch your content collection grow steadily. Before you know it, you've got an army of blog posts working for you 24/7.",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Never run out of ideas",
      description: "Writer's block? Never heard of it. We'll dig up the hot topics in your industry so you're always ahead of the curve.",
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Keep the final say",
      description: "We write it, you approve it. Want to tweak something? Go for it. It takes 5 minutes, not 5 hours.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "One-click publishing",
      description: "Write once, publish everywhere, without the copy-paste stress- we work well with WordPress, Ghost, Medium and coming soon to SubStack",
    },
  ];

  return (
    <section id="features" className="section-padding px-6 relative">
      <div className="absolute left-0 right-0 top-0 h-48 bg-gradient-to-b from-transparent to-blue-50/30" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-block mb-4 px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
            <p className="text-xs font-medium text-blue-700">The good stuff</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Blog like a <span className="gradient-text">content machine</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            We didn't just build another AI tool. We built the entire content process so you don't have to think about it.
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
