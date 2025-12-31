import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ROADMAPS } from "@/data/content";
import { ArrowLeft, ChevronDown, ChevronRight, CheckCircle2, Circle, Lightbulb, AlertTriangle, Target, XCircle } from "lucide-react";

const RoadmapDetail = () => {
  const { id } = useParams<{ id: string }>();
  const roadmap = ROADMAPS.find(r => r.id === id);
  const [openPhases, setOpenPhases] = useState<string[]>([]);
  const [openSteps, setOpenSteps] = useState<string[]>([]);

  if (!roadmap) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl mb-4">Roadmap not found</h1>
          <Button asChild>
            <Link to="/roadmaps">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Roadmaps
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const togglePhase = (phaseName: string) => {
    setOpenPhases(prev => 
      prev.includes(phaseName) 
        ? prev.filter(p => p !== phaseName)
        : [...prev, phaseName]
    );
  };

  const toggleStep = (stepId: string) => {
    setOpenSteps(prev =>
      prev.includes(stepId)
        ? prev.filter(s => s !== stepId)
        : [...prev, stepId]
    );
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section-spacing bg-secondary/20">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link 
              to="/roadmaps" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Roadmaps
            </Link>
            
            <div className="flex items-start gap-4">
              <span className="text-5xl">{roadmap.icon}</span>
              <div>
                <h1 className="font-display mb-2">{roadmap.title}</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  {roadmap.description}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Estimated duration: {roadmap.duration}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Phases */}
      <section className="section-spacing">
        <div className="container-wide max-w-4xl">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {roadmap.phases.map((phase, phaseIndex) => {
              const isPhaseOpen = openPhases.includes(phase.name);
              
              return (
                <Card key={phase.name} variant="elevated" className="overflow-hidden">
                  <button
                    onClick={() => togglePhase(phase.name)}
                    className="w-full text-left"
                  >
                    <CardHeader className="cursor-pointer hover:bg-secondary/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                            {phaseIndex + 1}
                          </div>
                          <div>
                            <CardTitle className="text-xl">{phase.name}</CardTitle>
                            <CardDescription>{phase.description}</CardDescription>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: isPhaseOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        </motion.div>
                      </div>
                    </CardHeader>
                  </button>

                  <AnimatePresence>
                    {isPhaseOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardContent className="pt-0">
                          <div className="border-t border-border/50 pt-6 space-y-4">
                            {phase.steps.map((step, stepIndex) => {
                              const stepId = `${phase.name}-${stepIndex}`;
                              const isStepOpen = openSteps.includes(stepId);
                              
                              return (
                                <div 
                                  key={stepIndex}
                                  className="border border-border/50 rounded-xl overflow-hidden"
                                >
                                  <button
                                    onClick={() => toggleStep(stepId)}
                                    className="w-full text-left p-4 hover:bg-secondary/30 transition-colors"
                                  >
                                    <div className="flex items-center gap-3">
                                      <Circle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                      <span className="font-medium">{step.title}</span>
                                      <motion.div
                                        className="ml-auto"
                                        animate={{ rotate: isStepOpen ? 90 : 0 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                      </motion.div>
                                    </div>
                                  </button>

                                  <AnimatePresence>
                                    {isStepOpen && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        <div className="px-4 pb-4 space-y-4 border-t border-border/30 pt-4">
                                          <p className="text-muted-foreground">{step.instruction}</p>
                                          
                                          <div className="grid gap-3">
                                            <div className="flex items-start gap-2 p-3 rounded-lg bg-highlight/5 border border-highlight/20">
                                              <Target className="h-4 w-4 text-highlight mt-0.5 flex-shrink-0" />
                                              <div>
                                                <p className="text-sm font-medium text-highlight-foreground">Focus</p>
                                                <p className="text-sm text-muted-foreground">{step.focus}</p>
                                              </div>
                                            </div>

                                            <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                                              <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                                              <div>
                                                <p className="text-sm font-medium">Avoid</p>
                                                <p className="text-sm text-muted-foreground">{step.avoid}</p>
                                              </div>
                                            </div>

                                            <div className="flex items-start gap-2 p-3 rounded-lg bg-accent/5 border border-accent/20">
                                              <AlertTriangle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                              <div>
                                                <p className="text-sm font-medium text-accent-foreground">Common Mistake</p>
                                                <p className="text-sm text-muted-foreground">{step.commonMistake}</p>
                                              </div>
                                            </div>

                                            <div className="flex items-start gap-2 p-3 rounded-lg bg-secondary border border-border/50">
                                              <CheckCircle2 className="h-4 w-4 text-highlight mt-0.5 flex-shrink-0" />
                                              <div>
                                                <p className="text-sm font-medium">Completion Signal</p>
                                                <p className="text-sm text-muted-foreground">{step.completionSignal}</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}

                            {/* Phase Reflection */}
                            <div className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent/20">
                              <div className="flex items-start gap-2">
                                <Lightbulb className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                <div>
                                  <p className="font-medium text-accent-foreground mb-1">Phase Reflection</p>
                                  <p className="text-sm text-muted-foreground">{phase.reflection}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              );
            })}
          </motion.div>

          {/* Final CTA */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-4">
              Ready to start? Open the first phase and complete the first step today.
            </p>
            <Button variant="outline" asChild>
              <Link to="/roadmaps">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Explore Other Roadmaps
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RoadmapDetail;
