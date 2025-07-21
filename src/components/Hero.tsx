import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-32 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-bronze/20 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Welcome Badge */}
          {/* <div className="inline-flex items-center px-6 py-2 rounded-full glass border border-secondary/20 mb-8 animate-scale-in">
            <span className="text-secondary font-medium">Welcome to Luxury Dining</span>
          </div> */}

          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-elegant font-bold text-card mb-6 leading-tight">
            Exquisite <span className="text-luxury "> Culinary </span>
            Experience
            {/* <span className="block">Exquisite</span>
            <span className="text-luxury block">Culinary</span>
            <span className="block">Experience</span> */}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-card/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Indulge in our masterfully crafted dishes, where every meal is a
            journey through sophisticated flavors and elegant presentation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              variant="luxury"
              size="lg"
              className="rounded-full text-lg px-8 py-6 group hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Menu
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-lg px-8 py-6  border-card/30 hover:bg-card hover:text-primary group backdrop-blur-sm"
            >
              <Play className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
              Watch Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                15+
              </div>
              <div className=" text-sm uppercase tracking-wider text-secondary">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                50+
              </div>
              <div className="text-secondary text-sm uppercase tracking-wider">
                Signature Dishes
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                5★
              </div>
              <div className="text-secondary text-sm uppercase tracking-wider">
                Michelin Rating
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-card/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-card/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
