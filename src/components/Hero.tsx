
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-50 to-transparent" />
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute -left-24 top-1/2 w-72 h-72 rounded-full bg-indigo-100/40 blur-3xl" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="reveal-on-scroll">
            <div className="inline-block mb-4 px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
              <p className="text-xs font-medium text-blue-700">Automate Your Content Creation</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-balance leading-tight">
              <span>Daily blog posts,</span>
              <br />
              <span className="gradient-text">zero effort.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl text-balance">
              Our AI content generator creates high-quality blog posts every day, letting you focus on what matters most—growing your business.
            </p>
            
            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="h-12 px-6 bg-primary hover:bg-primary/90 text-white font-medium">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="h-12 px-6">
                See How It Works
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-8 flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-300" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-medium">1,000+</span> business owners
                <div className="flex mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative reveal-on-scroll">
            <div className="glass-card rounded-xl overflow-hidden subtle-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-white to-blue-50 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Content generation dashboard"
                    className="w-full h-full object-cover rounded-t-xl animate-blur-in" 
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-lg animate-float shadow-md">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Post Published</p>
                    <p className="text-xs text-gray-500">Today at 9:00 AM</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 glass-card p-3 rounded-lg animate-float shadow-md" style={{ animationDelay: "1s" }}>
                <div className="flex items-center space-x-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L15 15" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="9" stroke="#6366F1" strokeWidth="2"/>
                  </svg>
                  <p className="text-sm font-medium">Next post in: <span className="text-indigo-600">18h</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
