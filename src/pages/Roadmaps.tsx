import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ROADMAPS } from "@/data/content";
import { ArrowRight, Clock } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Roadmaps = () => {
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
            <h1 className="font-display mb-4">Learning Roadmaps</h1>
            <p className="text-xl text-muted-foreground">
              Structured paths from beginner to competent. Each roadmap breaks down into phases, 
              steps, and reflection prompts. Pick one and begin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roadmaps Grid */}
      <section className="section-spacing">
        <div className="container-wide">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {ROADMAPS.map((roadmap) => (
              <motion.div key={roadmap.id} variants={fadeInUp}>
                <Card variant="elevated" className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{roadmap.icon}</span>
                        <div>
                          <CardTitle className="text-2xl mb-1">{roadmap.title}</CardTitle>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {roadmap.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-6">
                      {roadmap.description}
                    </CardDescription>
                    
                    <div className="space-y-2 mb-6">
                      <p className="text-sm font-medium text-foreground">Phases:</p>
                      <div className="flex flex-wrap gap-2">
                        {roadmap.phases.map((phase, i) => (
                          <span 
                            key={i}
                            className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground"
                          >
                            {phase.name.split(": ")[1]}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button variant="accent" className="w-full" asChild>
                      <Link to={`/roadmaps/${roadmap.id}`}>
                        Open Roadmap
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reflection Prompt */}
      <section className="section-spacing bg-secondary/20">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl mb-4">Before you choose</h3>
            <p className="text-muted-foreground text-lg mb-6">
              Which roadmap aligns most with where you want to be in 6 months?
              Don't pick based on what sounds impressive—pick based on genuine interest.
            </p>
            <div className="inline-block p-4 rounded-xl bg-accent/10 border border-accent/20">
              <p className="text-sm font-medium text-accent-foreground">
                💡 Reflection: Write down why you're drawn to a particular roadmap. 
                This clarity will help when motivation wanes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Roadmaps;
