
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
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  highlighted?: boolean;
  ctaText: string;
}

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly");

  const plans: PricingPlan[] = [
    {
      name: "Basic",
      price: billingPeriod === "yearly" ? "$29" : "$39",
      period: billingPeriod === "yearly" ? "/month, billed yearly" : "/month",
      description: "For solo creators just getting started",
      features: [
        { included: true, text: "10 fresh blog posts each month" },
        { included: true, text: "Basic SEO that actually works" },
        { included: true, text: "Ideas when you're stuck" },
        { included: true, text: "WordPress plugin" },
        { included: false, text: "Custom posting schedule" },
        { included: false, text: "Advanced SEO magic" },
        { included: false, text: "Content recycling" },
        { included: false, text: "VIP support" },
      ],
      ctaText: "Start with Basic",
    },
    {
      name: "Pro",
      price: billingPeriod === "yearly" ? "$79" : "$99",
      period: billingPeriod === "yearly" ? "/month, billed yearly" : "/month",
      description: "For serious creators who mean business",
      highlighted: true,
      features: [
        { included: true, text: "30 fresh blog posts each month" },
        { included: true, text: "Advanced SEO that crushes it" },
        { included: true, text: "Research that finds the gold" },
        { included: true, text: "WordPress & Medium integration" },
        { included: true, text: "Post whenever you want" },
        { included: true, text: "See what's working (analytics)" },
        { included: false, text: "Content recycling" },
        { included: false, text: "VIP support" },
      ],
      ctaText: "Go Pro",
    },
    {
      name: "Enterprise",
      price: billingPeriod === "yearly" ? "$199" : "$249",
      period: billingPeriod === "yearly" ? "/month, billed yearly" : "/month",
      description: "For content powerhouses who need it all",
      features: [
        { included: true, text: "Unlimited blog posts (yes, really)" },
        { included: true, text: "Premium SEO that dominates" },
        { included: true, text: "Deep-dive topic research" },
        { included: true, text: "Connect to anything" },
        { included: true, text: "Your schedule, your rules" },
        { included: true, text: "Analytics that tell the truth" },
        { included: true, text: "Turn old posts into new gold" },
        { included: true, text: "A real human you can call" },
      ],
      ctaText: "Contact Sales",
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
            Pick a plan that works for you. All plans include a no-questions-asked 14-day test drive.
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
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
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

                <ul className="space-y-3">
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
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-xl mx-auto reveal-on-scroll">
          <p className="text-foreground/70 text-sm mb-4">
            Got special needs? Let's chat about a custom setup that works for your team.
          </p>
          <Button variant="outline">Talk to a human</Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
