import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, ChefHat, Clock } from 'lucide-react';
import appetizerImage from '@/assets/appetizer-hero.jpg';
import mainCourseImage from '@/assets/main-course-hero.jpg';
import dessertImage from '@/assets/dessert-hero.jpg';

const FeaturedDishes = () => {
  const featuredDishes = [
    {
      id: 1,
      name: "Truffle Risotto Supreme",
      description: "Creamy Arborio rice with black truffle shavings, aged Parmesan, and a hint of white wine, finished with herb oil.",
      price: "$48",
      image: appetizerImage,
      category: "Signature",
      cookTime: "25 min",
      rating: 4.9,
      chef: "Marco",
      dietary: ["Vegetarian", "Gluten-Free"]
    },
    {
      id: 2,
      name: "Wagyu Beef Tenderloin",
      description: "Premium A5 Wagyu beef with roasted vegetables, red wine reduction, and locally sourced herbs.",
      price: "$85",
      image: mainCourseImage,
      category: "Premium",
      cookTime: "35 min",
      rating: 5.0,
      chef: "Isabella",
      dietary: ["Protein Rich"]
    },
    {
      id: 3,
      name: "Dark Chocolate Symphony",
      description: "Decadent 70% Belgian chocolate mousse with gold leaf, seasonal berries, and vanilla bean crème.",
      price: "$28",
      image: dessertImage,
      category: "Dessert",
      cookTime: "15 min",
      rating: 4.8,
      chef: "Antoine",
      dietary: ["Vegetarian"]
    }
  ];

  return (
    <section className="py-20 lg:py-32 gradient-warm">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <ChefHat className="h-4 w-4 text-accent mr-2" />
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Chef's Selection</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-elegant font-bold text-foreground mb-6">
            Featured
            <span className="text-luxury block">Culinary Masterpieces</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our most celebrated dishes, each crafted with passion and the finest ingredients from around the world.
          </p>
        </div>

        {/* Featured Dishes Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {featuredDishes.map((dish, index) => (
            <div 
              key={dish.id}
              className="group menu-item hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                  {dish.category}
                </div>

                {/* Price */}
                <div className="absolute top-4 right-4 px-3 py-1 glass rounded-full text-card font-bold">
                  {dish.price}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Button variant="luxury" className="rounded-full">
                    <span className="relative z-10">View Details</span>
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-elegant font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {dish.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-secondary mr-1 fill-current" />
                        <span>{dish.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-accent mr-1" />
                        <span>{dish.cookTime}</span>
                      </div>
                      <span className="text-bronze">Chef {dish.chef}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {dish.description}
                </p>

                {/* Dietary Tags */}
                <div className="flex flex-wrap gap-2">
                  {dish.dietary.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-accent-light text-accent text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  Add to Order
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="elegant" size="lg" className="rounded-full px-8">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;