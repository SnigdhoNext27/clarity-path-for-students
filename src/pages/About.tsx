import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Target, BookOpen, Shield, Sparkles } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

const About = () => {
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
            <h1 className="font-display mb-4">About Edify</h1>
            <p className="text-xl text-muted-foreground">
              A learning platform built on the belief that clarity beats motivation, 
              systems beat goals, and calm focus beats hustle culture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-spacing">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl mb-8 text-center">Our Philosophy</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Learning shouldn't feel like drowning in information. Every day, people start courses 
                they'll never finish, save resources they'll never read, and feel guilty about the 
                gap between their intentions and their actions.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Edify exists because we believe the problem isn't lack of motivation—it's lack 
                of clarity. When you know exactly what to do next, you don't need willpower. When you 
                have a system that works, you don't need to rely on feeling inspired.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                We built this platform to provide that clarity: one step at a time, with reflection 
                built in, and without the noise of notifications, gamification, or artificial urgency.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-spacing bg-secondary/20">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl mb-12 text-center">What We Believe</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Target,
                  title: "Clarity Over Motivation",
                  description: "When you know exactly what to do, doing it becomes straightforward. We provide that clarity."
                },
                {
                  icon: BookOpen,
                  title: "Systems Over Goals",
                  description: "Goals are destinations. Systems are the vehicles that get you there. We focus on building reliable systems."
                },
                {
                  icon: Heart,
                  title: "Calm Over Hustle",
                  description: "Sustainable progress beats burnout cycles. We design for the long game, not the quick win."
                },
                {
                  icon: Sparkles,
                  title: "Less Is More",
                  description: "Every addition is a potential distraction. We ruthlessly prioritize simplicity and focus."
                }
              ].map((value, index) => (
                <Card key={index} variant="elevated">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Won't Do */}
      <section className="section-spacing">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="font-display text-3xl">What We Will Never Become</h2>
            </div>
            
            <Card variant="elevated" className="mb-8">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {[
                    "A platform that uses gamification to create artificial engagement",
                    "A place filled with notifications designed to pull you back",
                    "A service that tracks your every move to 'optimize' your experience",
                    "A community that celebrates hustle culture and burnout",
                    "A tool that makes you dependent on external motivation"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-destructive font-bold">✕</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                We believe you don't need more apps fighting for your attention. 
                You need one clear path forward.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust */}
      <section className="section-spacing bg-secondary/20">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl mb-6">Building Trust Through Transparency</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Edify is built on the idea that learning tools should serve learners, 
              not the other way around. Everything here is designed to help you learn effectively 
              and then get out of your way.
            </p>
            
            <div className="inline-block p-6 rounded-2xl bg-accent/10 border border-accent/20">
              <p className="text-accent-foreground font-medium">
                The best compliment you can give us? Forgetting we exist while you're focused on learning.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
};

export default About;
