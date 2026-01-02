import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RESOURCES } from "@/data/content";
import { ArrowRight, Lightbulb, BookOpen } from "lucide-react";
import { useState } from "react";
import { PageTransition } from "@/components/PageTransition";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const Resources = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero */}
        <section className="section-spacing bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh -z-10" />
          <div className="container-wide">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent-foreground text-xs sm:text-sm font-medium mb-4">
                <BookOpen className="w-4 h-4" />
                Curated Collection
              </span>
              <h1 className="font-display mb-4">Resource Library</h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
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
              className="space-y-12 sm:space-y-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {RESOURCES.map((category) => (
                <motion.div 
                  key={category.category}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <motion.span 
                      className="text-3xl sm:text-4xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {category.icon}
                    </motion.span>
                    <div>
                      <h2 className="font-display text-2xl sm:text-3xl">{category.category}</h2>
                      <p className="text-sm sm:text-base text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base sm:text-lg flex items-center justify-between gap-2">
                              <span className="line-clamp-1">{item.title}</span>
                              <ArrowRight className={`h-4 w-4 text-muted-foreground transition-transform flex-shrink-0 ${isExpanded ? 'rotate-90' : ''}`} />
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3 sm:space-y-4">
                              <div>
                                <p className="text-xs sm:text-sm font-medium text-foreground mb-1">Purpose</p>
                                <CardDescription className="text-xs sm:text-sm">{item.purpose}</CardDescription>
                              </div>

                              {isExpanded && (
                                <motion.div 
                                  className="space-y-3 sm:space-y-4"
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                >
                                  <div>
                                    <p className="text-xs sm:text-sm font-medium text-foreground mb-1">How to Use</p>
                                    <CardDescription className="text-xs sm:text-sm">{item.howToUse}</CardDescription>
                                  </div>

                                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                                    <div className="flex items-start gap-2">
                                      <Lightbulb className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                      <div>
                                        <p className="text-xs sm:text-sm font-medium text-accent-foreground">First Step</p>
                                        <p className="text-xs sm:text-sm text-muted-foreground">{item.actionableAdvice}</p>
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
          <div className="container-narrow text-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-xl sm:text-2xl mb-4">Before you dive in</h3>
              <p className="text-muted-foreground text-sm sm:text-lg mb-6">
                Resources are tools, not solutions. The best resource is the one you'll actually use consistently.
              </p>
              <div className="inline-block p-4 rounded-xl bg-accent/10 border border-accent/20">
                <p className="text-xs sm:text-sm font-medium text-accent-foreground">
                  💡 Pick one resource and commit to using it for 2 weeks before adding more.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Resources;