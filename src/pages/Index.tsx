import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ROADMAPS, RESOURCES } from "@/data/content";
import { ArrowRight, BookOpen, Compass, Sparkles, Target } from "lucide-react";

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

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden section-spacing">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-highlight/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-wide">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent-foreground mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">A calm approach to learning</span>
            </motion.div>
            
            <h1 className="font-display text-balance mb-6">
              Find clarity.{" "}
              <span className="text-accent">Learn anything.</span>
              <br />Follow a system.
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
              Clear roadmaps and structured resources for learners who want progress, 
              not overwhelm. One step at a time, with reflection built in.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" asChild>
                <Link to="/roadmaps">
                  Explore Roadmaps
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" asChild>
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing bg-secondary/30">
        <div className="container-wide">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display mb-4">Why ClarityPath?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in systems over motivation, clarity over complexity, and sustainable progress over hustle culture.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Target,
                title: "One Clear Step",
                description: "Each page gives you exactly one next action. No overwhelm, no analysis paralysis."
              },
              {
                icon: Compass,
                title: "Built-in Reflection",
                description: "Prompts throughout help you understand what's working and adjust your approach."
              },
              {
                icon: BookOpen,
                title: "Systems, Not Goals",
                description: "Focus on repeatable processes that work long-term, not short-term motivation."
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card variant="elevated" className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Roadmaps */}
      <section className="section-spacing">
        <div className="container-wide">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="font-display mb-2">Learning Roadmaps</h2>
              <p className="text-muted-foreground">Structured paths from beginner to competent.</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/roadmaps">
                View All Roadmaps
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {ROADMAPS.slice(0, 3).map((roadmap) => (
              <motion.div key={roadmap.id} variants={fadeInUp}>
                <Card variant="interactive" className="h-full group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{roadmap.icon}</span>
                      <span className="text-sm text-muted-foreground">{roadmap.duration}</span>
                    </div>
                    <CardTitle className="group-hover:text-accent transition-colors">
                      {roadmap.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{roadmap.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {roadmap.phases.slice(0, 2).map((phase, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {phase.name.replace("Phase ", "").replace(": ", ": ")}
                        </span>
                      ))}
                      {roadmap.phases.length > 2 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                          +{roadmap.phases.length - 2} more
                        </span>
                      )}
                    </div>
                    <Button variant="accent" size="sm" asChild className="w-full">
                      <Link to={`/roadmaps/${roadmap.id}`}>
                        Open Roadmap
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resources Preview */}
      <section className="section-spacing bg-secondary/30">
        <div className="container-wide">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="font-display mb-2">Resource Library</h2>
              <p className="text-muted-foreground">Curated tools and materials for focused learning.</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/resources">
                Browse Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {RESOURCES.map((category) => (
              <motion.div key={category.category} variants={fadeInUp}>
                <Card variant="elevated" className="h-full">
                  <CardHeader>
                    <span className="text-3xl mb-2">{category.icon}</span>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-3">{category.description}</CardDescription>
                    <p className="text-sm text-muted-foreground">
                      {category.items.length} resources
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container-narrow">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display mb-4">Ready to begin?</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Pick a roadmap that matches your goals. Take the first step. 
              Everything else will follow.
            </p>
            <Button variant="hero" asChild>
              <Link to="/roadmaps">
                Choose Your Path
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
