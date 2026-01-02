import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ROADMAPS, RESOURCES } from "@/data/content";
import { ArrowRight, BookOpen, Compass, Sparkles, Target, Zap, Heart, GraduationCap, Star, ChevronRight } from "lucide-react";
import edifyLogo from "@/assets/edify-logo.png";
import { PageTransition } from "@/components/PageTransition";

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
    <PageTransition>
      <div className="min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="relative section-spacing">
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-mesh" />
            <motion.div 
              className="absolute top-20 right-[5%] sm:right-[10%] w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[500px] lg:h-[600px] rounded-full blur-3xl"
              style={{ background: "linear-gradient(135deg, hsl(20 85% 78% / 0.12) 0%, hsl(25 90% 92% / 0.08) 100%)" }}
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-32 -left-32 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-full blur-3xl"
              style={{ background: "linear-gradient(135deg, hsl(15 65% 60% / 0.08) 0%, hsl(20 85% 78% / 0.06) 100%)" }}
              animate={{ 
                scale: [1.1, 1, 1.1],
                rotate: [0, -5, 0],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Decorative dots - hidden on small screens */}
            <div className="hidden sm:block absolute top-40 left-[15%] w-2 h-2 rounded-full bg-accent/40 animate-pulse" />
            <div className="hidden sm:block absolute top-60 right-[25%] w-3 h-3 rounded-full bg-highlight/30 animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="hidden sm:block absolute bottom-40 left-[30%] w-2 h-2 rounded-full bg-accent/30 animate-pulse" style={{ animationDelay: "1s" }} />
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
                className="flex justify-center mb-6 sm:mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur-2xl bg-accent/30 animate-glow" />
                  <img 
                    src={edifyLogo} 
                    alt="Edify" 
                    className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover shadow-xl animate-float"
                  />
                </div>
              </motion.div>

              <motion.div 
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-soft/80 backdrop-blur-sm border border-accent/20 mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4 text-highlight" />
                <span className="text-xs sm:text-sm font-medium text-foreground/80">A calm approach to learning</span>
              </motion.div>
              
              <motion.h1 
                className="font-display text-balance mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Find clarity.{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-highlight">Learn anything.</span>
                  <motion.span 
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 bg-accent/30 -z-0 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                  />
                </span>
                <br className="hidden sm:block" />
                <span className="text-muted-foreground"> Follow a system.</span>
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 text-balance leading-relaxed px-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Clear roadmaps and structured resources for learners who want progress, 
                not overwhelm. One step at a time, with reflection built in.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
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
        <section className="py-10 sm:py-12 border-y border-border/50 bg-soft/30">
          <div className="container-wide">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
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
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
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
              className="text-center mb-10 sm:mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-foreground text-xs sm:text-sm font-medium mb-4">
                Our Philosophy
              </span>
              <h2 className="font-display mb-4">Why Edify?</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                We believe in systems over motivation, clarity over complexity, and sustainable progress over hustle culture.
              </p>
            </motion.div>

            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
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
                  color: "from-peach-100 to-peach-200/50"
                },
                {
                  icon: Compass,
                  title: "Built-in Reflection",
                  description: "Prompts throughout help you understand what's working and adjust your approach.",
                  color: "from-soft to-accent/20"
                },
                {
                  icon: BookOpen,
                  title: "Systems, Not Goals",
                  description: "Focus on repeatable processes that work long-term, not short-term motivation.",
                  color: "from-peach-50 to-soft"
                }
              ].map((feature, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card variant="glass" className="h-full group hover-lift border-0 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <CardHeader className="relative">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-highlight/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-highlight" />
                      </div>
                      <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                      <CardDescription className="text-sm sm:text-base leading-relaxed">{feature.description}</CardDescription>
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
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-10 sm:mb-14"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-highlight/10 text-highlight text-xs sm:text-sm font-medium mb-3">
                  Start Learning
                </span>
                <h2 className="font-display mb-2">Learning Roadmaps</h2>
                <p className="text-muted-foreground text-sm sm:text-base">Structured paths from beginner to competent.</p>
              </div>
              <Button variant="outline" asChild className="group w-full sm:w-auto">
                <Link to="/roadmaps">
                  View All Roadmaps
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {ROADMAPS.slice(0, 3).map((roadmap) => (
                <motion.div key={roadmap.id} variants={fadeInUp}>
                  <Card variant="interactive" className="h-full group overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardHeader className="relative">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.span 
                          className="text-3xl sm:text-4xl"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {roadmap.icon}
                        </motion.span>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-soft text-muted-foreground">{roadmap.duration}</span>
                      </div>
                      <CardTitle className="text-lg sm:text-xl group-hover:text-highlight transition-colors duration-300">
                        {roadmap.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                      <CardDescription className="mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">{roadmap.description}</CardDescription>
                      <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
                        {roadmap.phases.slice(0, 2).map((phase, i) => (
                          <span 
                            key={i} 
                            className="text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-secondary/80 text-secondary-foreground font-medium"
                          >
                            {phase.name.split(": ")[1]}
                          </span>
                        ))}
                        {roadmap.phases.length > 2 && (
                          <span className="text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-accent/10 text-accent-foreground font-medium">
                            +{roadmap.phases.length - 2} more
                          </span>
                        )}
                      </div>
                      <Button variant="accent" size="sm" asChild className="w-full group/btn">
                        <Link to={`/roadmaps/${roadmap.id}`}>
                          Open Roadmap
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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
          <div className="absolute top-0 right-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full blur-3xl bg-accent/5" />
          
          <div className="container-wide relative">
            <motion.div 
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-10 sm:mb-14"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-foreground text-xs sm:text-sm font-medium mb-3">
                  Curated Tools
                </span>
                <h2 className="font-display mb-2">Resource Library</h2>
                <p className="text-muted-foreground text-sm sm:text-base">Curated tools and materials for focused learning.</p>
              </div>
              <Button variant="outline" asChild className="group w-full sm:w-auto">
                <Link to="/resources">
                  Browse Resources
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {RESOURCES.map((category, index) => (
                <motion.div key={category.category} variants={fadeInUp}>
                  <Card variant="elevated" className="h-full group hover-lift">
                    <CardHeader className="pb-3 sm:pb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-soft to-accent/10 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl sm:text-2xl">{category.icon}</span>
                      </div>
                      <CardTitle className="text-base sm:text-lg">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm line-clamp-2">{category.description}</CardDescription>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-highlight font-medium">
                        <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, hsl(20 85% 78% / 0.12) 0%, transparent 70%)" }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          <div className="container-narrow relative px-4">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="inline-flex mb-6 sm:mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur-xl bg-accent/40" />
                  <img 
                    src={edifyLogo} 
                    alt="Edify Logo" 
                    className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-lg"
                  />
                </div>
              </motion.div>

              <h2 className="font-display mb-4 sm:mb-6">Ready to start your journey?</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto mb-6 sm:mb-8">
                Choose a roadmap that aligns with your goals. Take the first step. 
                We'll guide you through the rest, one step at a time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button variant="hero" size="lg" asChild className="group">
                  <Link to="/roadmaps">
                    <Star className="mr-2 h-5 w-5" />
                    Choose a Roadmap
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;