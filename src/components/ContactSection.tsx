import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
        variant: "default",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "123 Gourmet Avenue",
        "Downtown District",
        "New York, NY 10001",
      ],
      action: "Get Directions",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "Available 9 AM - 11 PM", "Daily"],
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@bellissimo.com",
        "reservations@bellissimo.com",
        "events@bellissimo.com",
      ],
      action: "Send Email",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: [
        "Monday - Sunday",
        "5:00 PM - 11:00 PM",
        "Kitchen closes at 10:30 PM",
      ],
      action: "View Menu",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 gradient-warm">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Send className="h-4 w-4 text-accent mr-2" />
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-elegant font-bold text-foreground mb-6">
            Contact
            <span className="text-luxury "> Bellissimo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Whether you have questions, special
            requests, or just want to share your experience with us.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-3xl p-8 animate-fade-in">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-elegant font-bold text-foreground mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Thank you for reaching out to us. We've received your
                    message and will respond within 24 hours.
                  </p>
                  <Button
                    variant="luxury"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="rounded-full"
                  >
                    <span className="relative z-10">Send Another Message</span>
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-elegant font-bold text-foreground mb-6">
                    Send Us a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="contact-name"
                          className="text-foreground font-medium"
                        >
                          Your Name *
                        </Label>
                        <Input
                          id="contact-name"
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          placeholder="Full name"
                          className="h-12 rounded-xl border-border/50 bg-background/50"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="contact-email"
                          className="text-foreground font-medium"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="contact-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="your@email.com"
                          className="h-12 rounded-xl border-border/50 bg-background/50"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="contact-subject"
                        className="text-foreground font-medium"
                      >
                        Subject
                      </Label>
                      <Input
                        id="contact-subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          handleInputChange("subject", e.target.value)
                        }
                        placeholder="What's this about?"
                        className="h-12 rounded-xl border-border/50 bg-background/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="contact-message"
                        className="text-foreground font-medium"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="contact-message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Tell us how we can help you..."
                        className="min-h-[150px] rounded-xl border-border/50 bg-background/50 resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="luxury"
                      className="w-full h-14 text-lg rounded-xl disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </span>
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6 animate-slide-in-right">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 hover-lift transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <div className="space-y-1 mb-4">
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full"
                      >
                        {item.action}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 animate-fade-in">
          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-elegant font-bold text-foreground mb-6 text-center">
              Find Our Location
            </h3>
            <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* Mock Map */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20"></div>
              <div className="relative z-10 text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Bellissimo Restaurant
                </h4>
                <p className="text-muted-foreground mb-4">
                  123 Gourmet Avenue, Downtown District
                  <br />
                  New York, NY 10001
                </p>
                <Button variant="luxury" className="rounded-full">
                  <span className="relative z-10">Open in Maps</span>
                </Button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-secondary/30 rounded-full animate-float"></div>
              <div
                className="absolute bottom-6 right-6 w-12 h-12 bg-primary/20 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
