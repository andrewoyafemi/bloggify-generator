
import { Play } from "lucide-react";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const VideoExplainer = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  
  const handlePlayVideo = () => {
    setVideoPlaying(true);
  };
  
  return (
    <section id="how-it-works" className="section-padding px-6 bg-gradient-to-b from-white to-blue-50/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 reveal-on-scroll">
          <div className="inline-block mb-4 px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
            <p className="text-xs font-medium text-blue-700">See it in action</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            How <span className="gradient-text">GhostRyt</span> actually works
          </h2>
          <p className="text-foreground/70 text-lg mb-8">
            Watch how we take the pain out of content creation in under 3 minutes
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg reveal-on-scroll">
          <div className="relative bg-gray-900 rounded-xl overflow-hidden">
            {!videoPlaying ? (
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{ 
                      backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1600&h=900')",
                      backgroundSize: "cover"
                    }}
                  >
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Button 
                        onClick={handlePlayVideo}
                        className="bg-white text-primary hover:bg-white/90 rounded-full w-20 h-20 flex items-center justify-center"
                      >
                        <Play className="h-8 w-8 ml-1" />
                      </Button>
                    </div>
                  </div>
                </AspectRatio>
              </div>
            ) : (
              <AspectRatio ratio={16 / 9}>
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  title="GhostRyt Explainer Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </AspectRatio>
            )}
          </div>
        </div>
        
        <div className="mt-10 text-center reveal-on-scroll">
          <p className="text-foreground/70 text-lg mb-6">
            Save 10+ hours per week with automated content that sounds like you wrote it
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoExplainer;
