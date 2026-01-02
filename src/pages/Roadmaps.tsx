import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ROADMAPS } from "@/data/content";
import { useProgress } from "@/hooks/use-progress";
import { PageTransition } from "@/components/PageTransition";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";

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
  const { getCompletionPercentage } = useProgress();

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero */}
        <section className="section-spacing bg-gradient-to-b from-soft/50 to-background relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <motion.div 
              className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full blur-3xl bg-accent/10"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
            />
          </div>
          
          <div className="container-wide">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-highlight/10 text-highlight text-sm font-medium mb-4">
                Choose Your Path
              </span>
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
              {ROADMAPS.map((roadmap) => {
                const totalSteps = roadmap.phases.reduce((acc, phase) => acc + phase.steps.length, 0);
                const progress = getCompletionPercentage(roadmap.id, totalSteps);
                const isStarted = progress > 0;
                const isComplete = progress === 100;

                return (
                  <motion.div key={roadmap.id} variants={fadeInUp}>
                    <Card 
                      variant="elevated" 
                      className={`h-full hover:shadow-xl transition-all duration-300 group overflow-hidden ${
                        isComplete ? 'ring-2 ring-highlight/30' : ''
                      }`}
                    >
                      {/* Progress indicator at top */}
                      {isStarted && (
                        <div className="h-1 bg-secondary">
                          <motion.div 
                            className="h-full bg-highlight"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          />
                        </div>
                      )}
                      
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <motion.span 
                              className="text-4xl"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              {roadmap.icon}
                            </motion.span>
                            <div>
                              <CardTitle className="text-2xl mb-1 group-hover:text-highlight transition-colors">
                                {roadmap.title}
                              </CardTitle>
                              <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Clock className="w-4 h-4" />
                                  {roadmap.duration}
                                </div>
                                {isComplete && (
                                  <div className="flex items-center gap-1 text-sm text-highlight">
                                    <CheckCircle2 className="w-4 h-4" />
                                    Complete
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base mb-6">
                          {roadmap.description}
                        </CardDescription>
                        
                        {/* Progress info */}
                        {isStarted && (
                          <div className="mb-6 p-3 rounded-lg bg-secondary/50">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">Your Progress</span>
                              <span className="text-sm text-highlight font-semibold">{progress}%</span>
                            </div>
                            <Progress value={progress} className="h-2" />
                          </div>
                        )}
                        
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

                        <Button variant="accent" className="w-full group/btn" asChild>
                          <Link to={`/roadmaps/${roadmap.id}`}>
                            {isStarted ? 'Continue Learning' : 'Open Roadmap'}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Reflection Prompt */}
        <section className="section-spacing bg-gradient-to-b from-background to-soft/30">
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
    </PageTransition>
  );
};

export default Roadmaps;
