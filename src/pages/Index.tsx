import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ROADMAPS, RESOURCES } from "@/data/content";
import { ArrowRight, BookOpen, Compass, Sparkles, Target, Zap, Heart, GraduationCap } from "lucide-react";
import edifyLogo from "@/assets/edify-logo.png";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative section-spacing">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div 
            className="absolute top-20 right-[10%] w-[600px] h-[600px] rounded-full blur-3xl"
            style={{ background: "linear-gradient(135deg, hsl(20 85% 78% / 0.15) 0%, hsl(25 90% 92% / 0.1) 100%)" }}
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{ background: "linear-gradient(135deg, hsl(15 65% 60% / 0.1) 0%, hsl(20 85% 78% / 0.08) 100%)" }}
            animate={{ 
              scale: [1.1, 1, 1.1],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Decorative dots */}
          <div className="absolute top-40 left-[15%] w-2 h-2 rounded-full bg-accent/40 animate-pulse" />
          <div className="absolute top-60 right-[25%] w-3 h-3 rounded-full bg-highlight/30 animate-pulse" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-40 left-[30%] w-2 h-2 rounded-full bg-accent/30 animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container-wide">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Logo with glow */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-2xl bg-accent/30 animate-glow" />
                <img 
                  src={edifyLogo} 
                  alt="Edify" 
                  className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-xl animate-float"
                />
              </div>
            </motion.div>

            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-soft/80 backdrop-blur-sm border border-accent/20 mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-highlight" />
              <span className="text-sm font-medium text-foreground/80">A calm approach to learning</span>
            </motion.div>
            
            <motion.h1 
              className="font-display text-balance mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Find clarity.{" "}
              <span className="relative">
                <span className="relative z-10 text-highlight">Learn anything.</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-3 bg-accent/30 -z-0 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                />
              </span>
              <br />
              <span className="text-muted-foreground">Follow a system.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-balance leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Clear roadmaps and structured resources for learners who want progress, 
              not overwhelm. One step at a time, with reflection built in.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button variant="hero" size="lg" asChild className="group">
                <Link to="/roadmaps">
                  Explore Roadmaps
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border/50 bg-soft/30">
        <div className="container-wide">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[
              { number: "5", label: "Learning Paths", icon: Compass },
              { number: "20+", label: "Curated Resources", icon: BookOpen },
              { number: "100%", label: "Free Forever", icon: Heart },
              { number: "∞", label: "Potential", icon: Zap }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-warm)" }} />
        
        <div className="container-wide">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-4">
              Our Philosophy
            </span>
            <h2 className="font-display mb-4">Why Edify?</h2>
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
                description: "Each page gives you exactly one next action. No overwhelm, no analysis paralysis.",
                color: "bg-peach-100"
              },
              {
                icon: Compass,
                title: "Built-in Reflection",
                description: "Prompts throughout help you understand what's working and adjust your approach.",
                color: "bg-peach-200/50"
              },
              {
                icon: BookOpen,
                title: "Systems, Not Goals",
                description: "Focus on repeatable processes that work long-term, not short-term motivation.",
                color: "bg-peach-100"
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card variant="glass" className="h-full group hover-lift border-0 overflow-hidden">
                  <div className={`absolute inset-0 ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <CardHeader className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-highlight/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-highlight" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
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
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-highlight/10 text-highlight text-sm font-medium mb-3">
                Start Learning
              </span>
              <h2 className="font-display mb-2">Learning Roadmaps</h2>
              <p className="text-muted-foreground">Structured paths from beginner to competent.</p>
            </div>
            <Button variant="outline" asChild className="group">
              <Link to="/roadmaps">
                View All Roadmaps
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                <Card variant="interactive" className="h-full group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl">{roadmap.icon}</span>
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-soft text-muted-foreground">{roadmap.duration}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-highlight transition-colors duration-300">
                      {roadmap.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="mb-5 leading-relaxed">{roadmap.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {roadmap.phases.slice(0, 2).map((phase, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-3 py-1.5 rounded-full bg-secondary/80 text-secondary-foreground font-medium"
                        >
                          {phase.name.split(": ")[1]}
                        </span>
                      ))}
                      {roadmap.phases.length > 2 && (
                        <span className="text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent-foreground font-medium">
                          +{roadmap.phases.length - 2} more
                        </span>
                      )}
                    </div>
                    <Button variant="accent" size="sm" asChild className="w-full group/btn">
                      <Link to={`/roadmaps/${roadmap.id}`}>
                        Open Roadmap
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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
      <section className="section-spacing bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl bg-accent/5" />
        
        <div className="container-wide relative">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-3">
                Curated Tools
              </span>
              <h2 className="font-display mb-2">Resource Library</h2>
              <p className="text-muted-foreground">Curated tools and materials for focused learning.</p>
            </div>
            <Button variant="outline" asChild className="group">
              <Link to="/resources">
                Browse Resources
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
            {RESOURCES.map((category, index) => (
              <motion.div key={category.category} variants={fadeInUp}>
                <Card variant="elevated" className="h-full group hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-soft to-accent/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 leading-relaxed">{category.description}</CardDescription>
                    <div className="flex items-center gap-2 text-sm text-highlight font-medium">
                      <GraduationCap className="w-4 h-4" />
                      {category.items.length} resources
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0" style={{ background: "var(--gradient-warm)" }} />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(20 85% 78% / 0.15) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="container-narrow relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-xl bg-accent/40" />
                <img 
                  src={edifyLogo} 
                  alt="Edify" 
                  className="relative w-16 h-16 rounded-full object-cover shadow-lg"
                />
              </div>
            </motion.div>
            
            <h2 className="font-display mb-6">Ready to begin?</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              Pick a roadmap that matches your goals. Take the first step. 
              Everything else will follow.
            </p>
            <Button variant="hero" size="lg" asChild className="group shadow-lg shadow-accent/20">
              <Link to="/roadmaps">
                Choose Your Path
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
