import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto reveal-on-scroll">
        <div className="rounded-2xl overflow-hidden relative">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700" />
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJ3aGl0ZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSI0MiIgY3k9IjQyIiByPSIyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI0MiIgcj0iMiIvPjxjaXJjbGUgY3g9IjQyIiBjeT0iMTIiIHI9IjIiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIi8+PGNpcmNsZSBjeD0iMjciIGN5PSIyNyIgcj0iMiIvPjxjaXJjbGUgY3g9IjI3IiBjeT0iNTciIHI9IjIiLz48Y2lyY2xlIGN4PSIyNyIgY3k9IjMiIHI9IjIiLz48Y2lyY2xlIGN4PSI1NyIgY3k9IjI3IiByPSIyIi8+PGNpcmNsZSBjeD0iMyIgY3k9IjI3IiByPSIyIi8+PC9nPjwvc3ZnPg==')]" />
          
          <div className="relative py-16 px-8 md:px-16 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="md:w-7/12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">
                Ready to stop stressing about your blog?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-lg">
                Join the smart folks who post every day without writing a word. Your audience won't know the difference, but your calendar will.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="h-12 px-6 bg-white text-blue-700 hover:bg-white/90">
                  Get started now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="h-12 px-6 text-white border-white/30 hover:bg-white/10">
                  See a quick demo
                </Button>
              </div>
            </div>
            <div className="md:w-5/12 space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-white">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="font-medium">No credit card needed</p>
                </div>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="font-medium">Full access for 14 days</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="font-medium">Cancel with one click</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
