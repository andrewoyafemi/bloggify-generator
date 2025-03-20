
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlanFeature {
  included: boolean;
  text: string;
}

interface PricingPlan {
  name: string;
  subtitle: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  highlighted?: boolean;
  ctaText: string;
  idealFor: string;
}

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly");

  const plans: PricingPlan[] = [
    {
      name: "Lone Ranger",
      subtitle: "Basic Plan",
      price: billingPeriod === "yearly" ? "$29" : "$39",
      period: billingPeriod === "yearly" ? "/month, billed yearly" : "/month",
      description: "For solopreneurs just getting started",
      features: [
        { included: true, text: "600-800 word AI-generated blog posts" },
        { included: true, text: "Auto-publish to WordPress" },
        { included: true, text: "AI-generated social media captions (sent via email)" },
        { included: true, text: "Internal linking recommendations for SEO" },
        { included: true, text: "Basic AI writing frameworks (limited to standard structures)" },
      ],
      ctaText: "Start with Lone Ranger",
      idealFor: "Ideal for solopreneurs or small business owners who need basic AI-generated content without deep customization."
    },
    {
      name: "Smart Marketer",
      subtitle: "Standard Plan",
      price: billingPeriod === "yearly" ? "$49" : "$59",
      period: billingPeriod === "yearly" ? "/month, billed yearly" : "/month",
      description: "For growing marketers who want more",
      highlighted: true,
      features: [
        { included: true, text: "800-1200 word AI-generated blog posts" },
        { included: true, text: "Everything in Lone Ranger +" },
        { included: true, text: "Advanced AI writing frameworks (APR, Explore-Engage-Escape, Revenue Cycle)" },
        { included: true, text: "Multi-step AI content generation (blog + email + social post in one go)" },
        { included: true, text: "AI content strategy insights (market trends & keyword suggestions)" },
        { included: true, text: "Customizable AI writing personas (brand voice adaptation)" },
      ],
      ctaText: "Choose Smart Marketer",
      idealFor: "Best for growing marketers who want AI-powered strategy and multi-step content automation."
    },
    {
      name: "Authority Builder",
      subtitle: "Premium Plan",
      price: billingPeriod === "yearly" ? "$69" : "$79",
      period: billingPeriod === "yearly" ? "/month, billed yearly" : "/month",
      description: "For content powerhouses who need it all",
      features: [
        { included: true, text: "1200-2000 word AI-generated blog posts" },
        { included: true, text: "Everything in Smart Marketer +" },
        { included: true, text: "AI feedback loop for real-time content refinement (multi-turn editing)" },
        { included: true, text: "AI-powered sales copy analyzer & conversion score" },
        { included: true, text: "AI trend analysis for high-impact content planning" },
        { included: true, text: "Hyper-personalized AI writing based on user history & preferences" },
        { included: true, text: "FREE 3-month access to future Ghostryt products" },
      ],
      ctaText: "Go Premium",
      idealFor: "Designed for high-level content creators and businesses that want fully optimized, conversion-driven AI content."
    },
  ];

  return (
    <section id="pricing" className="section-padding px-6 bg-blue-50/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-block mb-4 px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
            <p className="text-xs font-medium text-blue-700">Fair pricing</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Less than hiring a <span className="gradient-text">freelancer</span>
          </h2>
          <p className="text-foreground/70 text-lg mb-8">
            Pick a plan that works for you.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex p-1 bg-gray-100 rounded-full">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all",
                  billingPeriod === "monthly"
                    ? "bg-white shadow-sm text-foreground"
                    : "text-foreground/60 hover:text-foreground/80"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all flex items-center",
                  billingPeriod === "yearly"
                    ? "bg-white shadow-sm text-foreground"
                    : "text-foreground/60 hover:text-foreground/80"
                )}
              >
                <span>Yearly</span>
                <span className="ml-1 px-1.5 py-0.5 text-xs rounded bg-green-100 text-green-800">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative rounded-xl overflow-hidden reveal-on-scroll",
                plan.highlighted
                  ? "glass-card border-primary/20 transform md:-translate-y-4"
                  : "glass-card"
              )}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-1 text-xs font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-primary/80 text-sm font-medium mb-2">{plan.subtitle}</p>
                <p className="text-foreground/70 text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-foreground/70 text-sm">{plan.period}</span>
                </div>

                <Button
                  className={cn(
                    "w-full mb-6",
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "bg-foreground/10 hover:bg-foreground/20 text-foreground"
                  )}
                >
                  {plan.ctaText}
                </Button>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={cn(
                        "flex items-start text-sm",
                        feature.included 
                          ? "text-foreground" 
                          : "text-foreground/40 line-through"
                      )}
                    >
                      <span className={cn(
                        "mr-2 h-5 w-5 flex-shrink-0 rounded-full flex items-center justify-center",
                        feature.included 
                          ? "bg-green-100 text-green-600" 
                          : "bg-gray-100 text-gray-400"
                      )}>
                        <Check className="h-3 w-3" />
                      </span>
                      {feature.text}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-blue-600">{plan.idealFor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-xl mx-auto reveal-on-scroll">
          <p className="text-foreground/70 text-sm mb-4">
            Are you an agency or have enterprise needs? Let's create something custom for you
          </p>
          <Button variant="outline">Talk to a human</Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
