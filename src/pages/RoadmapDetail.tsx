import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ROADMAPS } from "@/data/content";
import { useProgress } from "@/hooks/use-progress";
import { ProgressRing } from "@/components/ProgressRing";
import { PageTransition } from "@/components/PageTransition";
import { 
  ArrowLeft, 
  ChevronDown, 
  ChevronRight, 
  CheckCircle2, 
  Circle, 
  Lightbulb, 
  AlertTriangle, 
  Target, 
  XCircle,
  RotateCcw,
  Trophy
} from "lucide-react";

const RoadmapDetail = () => {
  const { id } = useParams<{ id: string }>();
  const roadmap = ROADMAPS.find(r => r.id === id);
  const [openPhases, setOpenPhases] = useState<string[]>([]);
  const [openSteps, setOpenSteps] = useState<string[]>([]);
  
  const { 
    toggleStepComplete, 
    isStepComplete, 
    getCompletionPercentage,
    getPhaseCompletionPercentage,
    resetRoadmapProgress
  } = useProgress();

  if (!roadmap) {
    return (
      <PageTransition>
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
      </PageTransition>
    );
  }

  const totalSteps = roadmap.phases.reduce((acc, phase) => acc + phase.steps.length, 0);
  const overallProgress = getCompletionPercentage(roadmap.id, totalSteps);

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
    <PageTransition>
      <div className="min-h-screen">
        {/* Header */}
        <section className="section-spacing bg-gradient-to-b from-soft/50 to-background relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <motion.div 
              className="absolute top-10 right-[20%] w-[400px] h-[400px] rounded-full blur-3xl bg-accent/10"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 15, repeat: Infinity }}
            />
          </div>
          
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link 
                to="/roadmaps" 
                className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6 group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                All Roadmaps
              </Link>
              
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
                <div className="flex items-start gap-4 flex-1">
                  <motion.span 
                    className="text-5xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    {roadmap.icon}
                  </motion.span>
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
                
                {/* Progress Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Card variant="glass" className="p-6 min-w-[200px]">
                    <div className="flex items-center gap-4">
                      <ProgressRing percentage={overallProgress} size={64} strokeWidth={5} />
                      <div>
                        <p className="text-sm text-muted-foreground">Progress</p>
                        <p className="text-2xl font-display font-semibold text-foreground">
                          {overallProgress}%
                        </p>
                      </div>
                    </div>
                    {overallProgress > 0 && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="mt-4 w-full text-muted-foreground hover:text-foreground"
                        onClick={() => resetRoadmapProgress(roadmap.id)}
                      >
                        <RotateCcw className="mr-2 h-3 w-3" />
                        Reset Progress
                      </Button>
                    )}
                    {overallProgress === 100 && (
                      <motion.div 
                        className="flex items-center gap-2 mt-3 p-2 rounded-lg bg-highlight/10 text-highlight"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        <Trophy className="h-4 w-4" />
                        <span className="text-sm font-medium">Completed!</span>
                      </motion.div>
                    )}
                  </Card>
                </motion.div>
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
                const phaseProgress = getPhaseCompletionPercentage(roadmap.id, phaseIndex, phase.steps.length);
                const isPhaseComplete = phaseProgress === 100;
                
                return (
                  <motion.div
                    key={phase.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: phaseIndex * 0.1 }}
                  >
                    <Card 
                      variant="elevated" 
                      className={`overflow-hidden transition-all duration-300 ${isPhaseComplete ? 'ring-2 ring-highlight/30' : ''}`}
                    >
                      <button
                        onClick={() => togglePhase(phase.name)}
                        className="w-full text-left"
                      >
                        <CardHeader className="cursor-pointer hover:bg-secondary/50 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                                isPhaseComplete 
                                  ? 'bg-highlight text-background' 
                                  : 'bg-accent/10 text-accent'
                              }`}>
                                {isPhaseComplete ? (
                                  <CheckCircle2 className="h-5 w-5" />
                                ) : (
                                  phaseIndex + 1
                                )}
                              </div>
                              <div className="flex-1">
                                <CardTitle className="text-xl">{phase.name}</CardTitle>
                                <CardDescription>{phase.description}</CardDescription>
                                {/* Phase Progress Bar */}
                                <div className="mt-2 flex items-center gap-3">
                                  <Progress value={phaseProgress} className="h-1.5 flex-1 max-w-[200px]" />
                                  <span className="text-xs text-muted-foreground">{phaseProgress}%</span>
                                </div>
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
                                  const stepComplete = isStepComplete(roadmap.id, phaseIndex, stepIndex);
                                  
                                  return (
                                    <div 
                                      key={stepIndex}
                                      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                                        stepComplete 
                                          ? 'border-highlight/30 bg-highlight/5' 
                                          : 'border-border/50'
                                      }`}
                                    >
                                      <div className="flex items-center">
                                        {/* Completion Toggle */}
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            toggleStepComplete(roadmap.id, phaseIndex, stepIndex);
                                          }}
                                          className="p-4 hover:bg-secondary/30 transition-colors"
                                        >
                                          <motion.div
                                            whileTap={{ scale: 0.9 }}
                                          >
                                            {stepComplete ? (
                                              <CheckCircle2 className="h-5 w-5 text-highlight" />
                                            ) : (
                                              <Circle className="h-5 w-5 text-muted-foreground hover:text-highlight transition-colors" />
                                            )}
                                          </motion.div>
                                        </button>
                                        
                                        {/* Step Title & Toggle */}
                                        <button
                                          onClick={() => toggleStep(stepId)}
                                          className="flex-1 text-left p-4 pl-0 hover:bg-secondary/30 transition-colors"
                                        >
                                          <div className="flex items-center gap-3">
                                            <span className={`font-medium transition-colors ${stepComplete ? 'text-highlight' : ''}`}>
                                              {step.title}
                                            </span>
                                            <motion.div
                                              className="ml-auto"
                                              animate={{ rotate: isStepOpen ? 90 : 0 }}
                                              transition={{ duration: 0.2 }}
                                            >
                                              <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                            </motion.div>
                                          </div>
                                        </button>
                                      </div>

                                      <AnimatePresence>
                                        {isStepOpen && (
                                          <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                          >
                                            <div className="px-4 pb-4 space-y-4 border-t border-border/30 pt-4 ml-12">
                                              <p className="text-muted-foreground">{step.instruction}</p>
                                              
                                              <div className="grid gap-3">
                                                <div className="flex items-start gap-2 p-3 rounded-lg bg-highlight/5 border border-highlight/20">
                                                  <Target className="h-4 w-4 text-highlight mt-0.5 flex-shrink-0" />
                                                  <div>
                                                    <p className="text-sm font-medium text-foreground">Focus</p>
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
                                <motion.div 
                                  className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent/20"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.2 }}
                                >
                                  <div className="flex items-start gap-2">
                                    <Lightbulb className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                    <div>
                                      <p className="font-medium text-accent-foreground mb-1">Phase Reflection</p>
                                      <p className="text-sm text-muted-foreground">{phase.reflection}</p>
                                    </div>
                                  </div>
                                </motion.div>
                              </div>
                            </CardContent>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  </motion.div>
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
              <Button variant="outline" asChild className="group">
                <Link to="/roadmaps">
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Explore Other Roadmaps
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default RoadmapDetail;
