import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send, MessageCircle, Lightbulb } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      toast({
        title: "Message required",
        description: "Please enter a message before sending.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent! (Demo)",
      description: "In a real implementation, this would be sent to our team.",
    });
    
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitting(false);
  };

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
            <h1 className="font-display mb-4">Contact & Feedback</h1>
            <p className="text-xl text-muted-foreground">
              Questions, suggestions, or just want to say hello? We read everything 
              and respond to what we can.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-spacing">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {/* Form */}
              <div className="md:col-span-2">
                <Card variant="elevated">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <CardTitle>Send a Message</CardTitle>
                        <CardDescription>We'll get back to you if a response is needed</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name (optional)</Label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email (optional)</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Share your thoughts, questions, or feedback..."
                          rows={6}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="resize-none"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        variant="accent" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card variant="accent">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-accent-foreground mb-2">Helpful Feedback</p>
                        <p className="text-sm text-muted-foreground">
                          The most helpful feedback is specific. Instead of "this could be better," 
                          try "I expected X but got Y, which was confusing because..."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card variant="glass">
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong className="text-foreground">Response time:</strong> We read all messages. 
                      If a response is needed and you've included your email, 
                      expect to hear back within a few business days.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Feature requests:</strong> We love hearing 
                      what would help you learn better. No promises, but everything is considered.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reflection */}
      <section className="section-spacing bg-secondary/20">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl mb-4">Before you reach out</h3>
            <p className="text-muted-foreground text-lg mb-6">
              Consider: What outcome would make this message worthwhile for you? 
              Clear asks get clearer responses.
            </p>
            <div className="inline-block p-4 rounded-xl bg-accent/10 border border-accent/20">
              <p className="text-sm font-medium text-accent-foreground">
                💡 Reflection: The clearer you are about what you need, the more helpful any response can be.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
