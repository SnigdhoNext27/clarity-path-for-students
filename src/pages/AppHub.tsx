import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_HUB_ITEMS } from "@/data/content";
import { CheckCircle2, FileText, Mail, Calendar } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

const iconMap: { [key: string]: any } = {
  "Application Documents": FileText,
  "Communication Templates": Mail,
  "Planning Frameworks": Calendar
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const AppHub = () => {
  return (
    <PageTransition>
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-spacing bg-secondary/20">
        <div className="container-wide">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display mb-4">Application Hub</h1>
            <p className="text-xl text-muted-foreground">
              Practical frameworks, templates, and checklists for real-world applications. 
              Step-by-step guidance you can follow immediately.
            </p>
          </motion.div>
        </div>
      </section>

      {/* App Hub Items */}
      <section className="section-spacing">
        <div className="container-wide">
          <motion.div 
            className="space-y-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {APP_HUB_ITEMS.map((category, categoryIndex) => {
              const CategoryIcon = iconMap[category.category] || FileText;
              
              return (
                <motion.div 
                  key={category.category}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <CategoryIcon className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="font-display text-3xl">{category.category}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <Card key={itemIndex} variant="elevated" className="h-full">
                        <CardHeader>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <CardDescription className="text-base">{item.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {item.steps.map((step, stepIndex) => (
                              <div 
                                key={stepIndex}
                                className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50"
                              >
                                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-xs font-semibold text-accent">{stepIndex + 1}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{step}</p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="section-spacing bg-secondary/20">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl mb-6 text-center">Universal Principles</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Clarity First",
                  description: "Make every communication easy to understand and act upon. If they have to guess what you want, you've already lost."
                },
                {
                  title: "Respect Time",
                  description: "Keep things concise. The person reading has other things to do. Front-load the important information."
                },
                {
                  title: "Follow Up",
                  description: "Most opportunities are lost not from rejection, but from silence. Have a system for appropriate follow-up."
                }
              ].map((tip, index) => (
                <Card key={index} variant="glass">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-highlight" />
                      <CardTitle className="text-lg">{tip.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{tip.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
};

export default AppHub;
