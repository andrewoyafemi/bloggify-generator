
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Bloggify has completely revolutionized our content strategy. We now publish high-quality blog posts every day without the constant scramble to create content. This has freed up so much time to focus on other aspects of our business.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "GrowthPulse",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 2,
    content: "As a solo entrepreneur, I was struggling to maintain a consistent blog schedule. With Bloggify, I'm able to maintain an active blog that drives traffic and generates leads, all while focusing on product development. It's been a game-changer.",
    author: "Michael Chen",
    role: "Founder",
    company: "NexTech Solutions",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 3,
    content: "The quality of content that Bloggify produces is incredible. It's hard to believe it's AI-generated. Our audience engagement has increased by 43% since we started using the platform, and we're seeing a significant boost in organic traffic.",
    author: "Emily Rodriguez",
    role: "Content Strategist",
    company: "Vertex Media",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    if ('touches' in e) {
      setStartX(e.touches[0].clientX);
    } else {
      setStartX(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (translateX > 100) {
      handlePrev();
    } else if (translateX < -100) {
      handleNext();
    }
    setTranslateX(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        handleNext();
      }
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isDragging]);

  return (
    <section id="testimonials" className="section-padding px-6 relative overflow-hidden">
      <div className="absolute -right-32 top-10 w-64 h-64 rounded-full bg-blue-100/30 blur-3xl" />
      <div className="absolute -left-32 bottom-10 w-64 h-64 rounded-full bg-indigo-100/30 blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-block mb-4 px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
            <p className="text-xs font-medium text-blue-700">Customer Testimonials</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Loved by <span className="gradient-text">business owners</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Hear what our customers have to say about how Bloggify has transformed their content strategy.
          </p>
        </div>

        <div 
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          onMouseLeave={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(calc(-${activeIndex * 100}% + ${translateX}px))`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="w-full flex-shrink-0 px-4"
              >
                <div className="glass-card p-8 md:p-10 rounded-xl flex flex-col md:flex-row gap-6 md:gap-10 items-center subtle-shadow">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="flex mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-5 w-5",
                            i < testimonial.rating 
                              ? "text-yellow-400 fill-current" 
                              : "text-gray-300"
                          )}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl italic mb-6 text-foreground/90">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-foreground/70">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute inset-y-0 left-0 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full bg-white/80 shadow-sm text-foreground hover:bg-white"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full bg-white/80 shadow-sm text-foreground hover:bg-white"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  i === activeIndex ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400"
                )}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
