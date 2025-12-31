import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RESOURCES } from "@/data/content";
import { ArrowRight, Lightbulb } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const Resources = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-spacing bg-secondary/20">
        <div className="container-wide">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display mb-4">Resource Library</h1>
            <p className="text-xl text-muted-foreground">
              Curated learning resources organized by category. Each resource includes 
              its purpose, how to use it effectively, and one actionable first step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources by Category */}
      <section className="section-spacing">
        <div className="container-wide">
          <motion.div 
            className="space-y-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {RESOURCES.map((category, categoryIndex) => (
              <motion.div 
                key={category.category}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-4xl">{category.icon}</span>
                  <div>
                    <h2 className="font-display text-3xl">{category.category}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => {
                    const itemId = `${category.category}-${itemIndex}`;
                    const isExpanded = expandedItem === itemId;

                    return (
                      <Card 
                        key={itemIndex} 
                        variant="interactive"
                        className={`cursor-pointer ${isExpanded ? 'ring-2 ring-accent' : ''}`}
                        onClick={() => setExpandedItem(isExpanded ? null : itemId)}
                      >
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between">
                            {item.title}
                            <ArrowRight className={`h-4 w-4 text-muted-foreground transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm font-medium text-foreground mb-1">Purpose</p>
                              <CardDescription>{item.purpose}</CardDescription>
                            </div>

                            {isExpanded && (
                              <motion.div 
                                className="space-y-4"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                              >
                                <div>
                                  <p className="text-sm font-medium text-foreground mb-1">How to Use</p>
                                  <CardDescription>{item.howToUse}</CardDescription>
                                </div>

                                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                                  <div className="flex items-start gap-2">
                                    <Lightbulb className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                    <div>
                                      <p className="text-sm font-medium text-accent-foreground">First Step</p>
                                      <p className="text-sm text-muted-foreground">{item.actionableAdvice}</p>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reflection */}
      <section className="section-spacing bg-secondary/20">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl mb-4">Before you dive in</h3>
            <p className="text-muted-foreground text-lg mb-6">
              Resources are tools, not solutions. The best resource is the one you'll actually use consistently. 
              Pick one resource from one category and commit to using it for 2 weeks before adding more.
            </p>
            <div className="inline-block p-4 rounded-xl bg-accent/10 border border-accent/20">
              <p className="text-sm font-medium text-accent-foreground">
                💡 Ask yourself: Which single resource would make the biggest difference if I used it every day this week?
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
