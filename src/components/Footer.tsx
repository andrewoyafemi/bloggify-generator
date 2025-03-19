
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-1">
            <div className="mb-6">
              <span className="font-display text-2xl font-bold tracking-tight">
                Bloggify
              </span>
            </div>
            <p className="text-foreground/70 text-sm mb-6 max-w-xs">
              AI-powered content generation to help businesses maintain consistent, high-quality blogs with minimal effort.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-foreground/60 mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Use Cases', 'Integrations', 'API'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-foreground/70 hover:text-foreground transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-foreground/60 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Press', 'Partners'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-foreground/70 hover:text-foreground transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-foreground/60 mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {['Documentation', 'Help Center', 'Tutorials', 'Status', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-foreground/70 hover:text-foreground transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-foreground/60 text-sm">
              &copy; {currentYear} Bloggify. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 md:mt-0">
              {['Terms', 'Privacy', 'Cookies', 'Accessibility'].map((item, i) => (
                <a 
                  key={item}
                  href="#"
                  className={cn(
                    "text-foreground/60 hover:text-foreground transition-colors text-sm",
                    i !== 0 && "md:border-l md:border-gray-300 md:pl-6"
                  )}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
