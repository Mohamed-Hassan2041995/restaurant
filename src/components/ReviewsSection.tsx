import React from 'react';
import { Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Chen",
      rating: 5,
      title: "Absolutely Exceptional",
      review: "From the moment we walked in, the ambiance was perfect. The truffle risotto was a masterpiece, and the service was impeccable. This is fine dining at its absolute best.",
      date: "2 weeks ago",
      verified: true,
      avatar: "SC"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      rating: 5,
      title: "Unforgettable Anniversary",
      review: "We celebrated our 10th anniversary here and it exceeded all expectations. The sommelier's wine pairing was brilliant, and every course was pure artistry on a plate.",
      date: "1 month ago",
      verified: true,
      avatar: "MR"
    },
    {
      id: 3,
      name: "Emily Thompson",
      rating: 5,
      title: "Culinary Perfection",
      review: "The attention to detail in every dish is remarkable. The chef's tasting menu was a journey through flavors I never knew existed. Worth every penny!",
      date: "3 weeks ago",
      verified: true,
      avatar: "ET"
    },
    {
      id: 4,
      name: "James Wilson",
      rating: 5,
      title: "Business Dinner Success",
      review: "Brought international clients here and they were thoroughly impressed. The private dining room, exceptional service, and exquisite food made for a perfect evening.",
      date: "1 week ago",
      verified: true,
      avatar: "JW"
    },
    {
      id: 5,
      name: "Lisa Park",
      rating: 5,
      title: "Beyond Expectations",
      review: "Every element was perfect - from the warm greeting to the final dessert. The lobster thermidor was divine, and the chocolate lava cake was the perfect ending.",
      date: "4 days ago",
      verified: true,
      avatar: "LP"
    },
    {
      id: 6,
      name: "David Kumar",
      rating: 5,
      title: "Michelin Star Quality",
      review: "This restaurant truly deserves its reputation. The creativity in each dish, combined with flawless execution, makes this a destination worth traveling for.",
      date: "5 days ago",
      verified: true,
      avatar: "DK"
    }
  ];

  const averageRating = 5.0;
  const totalReviews = 247;

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <Star className="h-4 w-4 text-secondary mr-2 fill-current" />
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">Guest Reviews</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-elegant font-bold text-foreground mb-6">
            What Our Guests
            <span className="text-luxury block">Are Saying</span>
          </h2>
          
          {/* Rating Summary */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{averageRating}</div>
              <div className="flex items-center justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                ))}
              </div>
              <div className="text-muted-foreground text-sm">Based on {totalReviews} reviews</div>
            </div>
            
            <div className="h-16 w-px bg-border hidden sm:block"></div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground text-sm">Recommend us</div>
            </div>
            
            <div className="h-16 w-px bg-border hidden sm:block"></div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-bronze mb-2">5★</div>
              <div className="text-muted-foreground text-sm">Michelin Guide</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              className="glass rounded-2xl p-6 hover-lift transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Quote className="h-5 w-5 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                ))}
              </div>

              {/* Review Title */}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {review.title}
              </h3>

              {/* Review Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{review.review}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-medium text-sm mr-3">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-foreground flex items-center">
                      {review.name}
                      {review.verified && (
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center ml-2">
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">{review.date}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-card/50 backdrop-blur-sm rounded-2xl px-8 py-4 border border-border/50">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-600 rounded text-white flex items-center justify-center text-xs font-bold">G</div>
              <span className="text-sm text-muted-foreground">Google Reviews</span>
              <div className="flex items-center ml-2">
                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                <span className="text-sm font-medium ml-1">4.9</span>
              </div>
            </div>
            
            <div className="h-6 w-px bg-border"></div>
            
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-red-600 rounded text-white flex items-center justify-center text-xs font-bold">Y</div>
              <span className="text-sm text-muted-foreground">Yelp</span>
              <div className="flex items-center ml-2">
                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                <span className="text-sm font-medium ml-1">4.8</span>
              </div>
            </div>
            
            <div className="h-6 w-px bg-border"></div>
            
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-orange-600 rounded text-white flex items-center justify-center text-xs font-bold">T</div>
              <span className="text-sm text-muted-foreground">TripAdvisor</span>
              <div className="flex items-center ml-2">
                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                <span className="text-sm font-medium ml-1">5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;