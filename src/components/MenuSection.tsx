import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Star, Leaf, Flame, Clock } from 'lucide-react';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Items', icon: null },
    { id: 'appetizers', name: 'Appetizers', icon: Leaf },
    { id: 'mains', name: 'Main Courses', icon: Flame },
    { id: 'desserts', name: 'Desserts', icon: Star },
    { id: 'beverages', name: 'Beverages', icon: Clock },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Mediterranean Mezze Platter",
      description: "Hummus, baba ganoush, olives, feta, and artisanal bread with herb-infused olive oil",
      price: 24,
      category: 'appetizers',
      dietary: ['Vegetarian', 'Mediterranean'],
      cookTime: '10 min',
      rating: 4.7,
      spiciness: 1,
      popular: true
    },
    {
      id: 2,
      name: "Seared Scallops",
      description: "Pan-seared scallops with cauliflower purée, pancetta crisps, and microgreens",
      price: 32,
      category: 'appetizers',
      dietary: ['Gluten-Free', 'Premium'],
      cookTime: '15 min',
      rating: 4.9,
      spiciness: 0,
      popular: false
    },
    {
      id: 3,
      name: "Lobster Thermidor",
      description: "Fresh lobster in creamy cognac sauce, gratinated with Gruyère, served with seasonal vegetables",
      price: 68,
      category: 'mains',
      dietary: ['Premium', 'Signature'],
      cookTime: '30 min',
      rating: 5.0,
      spiciness: 0,
      popular: true
    },
    {
      id: 4,
      name: "Herb-Crusted Rack of Lamb",
      description: "New Zealand lamb with rosemary crust, ratatouille, and red wine jus",
      price: 58,
      category: 'mains',
      dietary: ['Protein Rich', 'Premium'],
      cookTime: '25 min',
      rating: 4.8,
      spiciness: 0,
      popular: true
    },
    {
      id: 5,
      name: "Wild Mushroom Risotto",
      description: "Creamy Arborio rice with porcini, shiitake, and truffle oil, finished with aged Parmesan",
      price: 36,
      category: 'mains',
      dietary: ['Vegetarian', 'Gluten-Free'],
      cookTime: '25 min',
      rating: 4.6,
      spiciness: 0,
      popular: false
    },
    {
      id: 6,
      name: "Chocolate Lava Cake",
      description: "Warm Belgian chocolate cake with molten center, vanilla ice cream, and berry coulis",
      price: 18,
      category: 'desserts',
      dietary: ['Vegetarian', 'Signature'],
      cookTime: '12 min',
      rating: 4.9,
      spiciness: 0,
      popular: true
    },
    {
      id: 7,
      name: "Tiramisu Royale",
      description: "Classic Italian tiramisu with mascarpone, espresso, and gold leaf garnish",
      price: 16,
      category: 'desserts',
      dietary: ['Vegetarian', 'Italian'],
      cookTime: '5 min',
      rating: 4.7,
      spiciness: 0,
      popular: false
    },
    {
      id: 8,
      name: "Sommelier's Selection",
      description: "Curated wine pairing featuring premium vintages from our cellar",
      price: 45,
      category: 'beverages',
      dietary: ['Wine Pairing', 'Premium'],
      cookTime: '2 min',
      rating: 4.8,
      spiciness: 0,
      popular: true
    }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDietaryColor = (tag) => {
    const colors = {
      'Vegetarian': 'bg-green-100 text-green-800',
      'Gluten-Free': 'bg-blue-100 text-blue-800',
      'Premium': 'bg-yellow-100 text-yellow-800',
      'Signature': 'bg-purple-100 text-purple-800',
      'Protein Rich': 'bg-red-100 text-red-800',
      'Mediterranean': 'bg-orange-100 text-orange-800',
      'Italian': 'bg-green-100 text-green-800',
      'Wine Pairing': 'bg-purple-100 text-purple-800'
    };
    return colors[tag] || 'bg-accent-light text-accent';
  };

  return (
    <section id="menu" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Flame className="h-4 w-4 text-primary mr-2" />
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Menu</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-elegant font-bold text-foreground mb-6">
            Culinary
            <span className="text-luxury block">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each dish is a masterpiece, crafted with the finest ingredients and presented with artistic flair.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 rounded-2xl border-border/50 bg-card/50 backdrop-blur-sm text-lg"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? 'luxury' : 'outline'}
                  onClick={() => setActiveCategory(category.id)}
                  className="rounded-full px-6 transition-all duration-300 hover:scale-105"
                >
                  {IconComponent && <IconComponent className="h-4 w-4 mr-2" />}
                  <span className={activeCategory === category.id ? 'relative z-10' : ''}>
                    {category.name}
                  </span>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group glass rounded-2xl p-6 hover-lift transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-elegant font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    {item.popular && (
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-secondary mr-1 fill-current" />
                      <span>{item.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-accent mr-1" />
                      <span>{item.cookTime}</span>
                    </div>
                    {item.spiciness > 0 && (
                      <div className="flex items-center">
                        {[...Array(item.spiciness)].map((_, i) => (
                          <Flame key={i} className="h-3 w-3 text-red-500 fill-current" />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">${item.price}</div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {item.dietary.map((tag) => (
                  <span 
                    key={tag}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getDietaryColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  Add to Order
                </Button>
                <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No items found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;