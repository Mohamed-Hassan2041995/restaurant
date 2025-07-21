import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  CalendarIcon,
  Clock,
  Users,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const ReservationSection = () => {
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    time: "",
    occasion: "",
    requests: "",
  });

  const timeSlots = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ];

  const occasions = [
    "Casual Dining",
    "Birthday Celebration",
    "Anniversary",
    "Business Meeting",
    "Romantic Dinner",
    "Special Occasion",
    "Other",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !date ||
      !formData.name ||
      !formData.email ||
      !formData.guests ||
      !formData.time
    ) {
      toast({
        title: "Missing Information",
        description:
          "Please fill in all required fields to complete your reservation.",
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
        title: "Reservation Confirmed!",
        description: "We've sent a confirmation email with all the details.",
        variant: "default",
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <section id="reservations" className="py-20 lg:py-32 gradient-warm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-4xl font-elegant font-bold text-foreground mb-4">
              Reservation Confirmed!
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Thank you for choosing Bellissimo. We've sent a confirmation email
              to {formData.email} with all the details of your reservation.
            </p>
            <div className="glass rounded-2xl p-6 mb-8">
              <div className="grid grid-cols-2 gap-4 text-left">
                <div>
                  <span className="text-muted-foreground">Date:</span>
                  <p className="font-semibold">
                    {date && format(date, "EEEE, MMMM do, yyyy")}
                  </p>
                </div>
                <div>
                  <span className="text-muted-foreground">Time:</span>
                  <p className="font-semibold">{formData.time}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Guests:</span>
                  <p className="font-semibold">{formData.guests} people</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Occasion:</span>
                  <p className="font-semibold">{formData.occasion}</p>
                </div>
              </div>
            </div>
            <Button
              variant="luxury"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  guests: "",
                  time: "",
                  occasion: "",
                  requests: "",
                });
                setDate(undefined);
              }}
              className="rounded-full"
            >
              <span className="relative z-10">Make Another Reservation</span>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservations" className="py-20 lg:py-32 gradient-warm">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Calendar className="h-4 w-4 text-primary mr-2" />
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Reservations
            </span>
          </div> */}
          <h2 className="text-4xl md:text-6xl font-elegant font-bold text-foreground mb-6">
            Reserve Your
            <span className="text-luxury "> Perfect Table</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience an unforgettable evening at Bellissimo. Book your table
            and let us create magical moments for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Reservation Form */}
          <div className="glass rounded-3xl p-8 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your full name"
                    className="h-12 rounded-xl border-border/50 bg-background/50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-foreground font-medium"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className="h-12 rounded-xl border-border/50 bg-background/50"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="h-12 rounded-xl border-border/50 bg-background/50"
                />
              </div>

              {/* Reservation Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-foreground font-medium">Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full h-12 justify-start text-left font-normal rounded-xl border-border/50 bg-background/50",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) =>
                          date < new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label className="text-foreground font-medium">Time *</Label>
                  <Select
                    onValueChange={(value) => handleInputChange("time", value)}
                  >
                    <SelectTrigger className="h-12 rounded-xl border-border/50 bg-background/50">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                            {time}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-foreground font-medium">
                    Number of Guests *
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("guests", value)
                    }
                  >
                    <SelectTrigger className="h-12 rounded-xl border-border/50 bg-background/50">
                      <SelectValue placeholder="Select guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-foreground font-medium">
                    Occasion
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("occasion", value)
                    }
                  >
                    <SelectTrigger className="h-12 rounded-xl border-border/50 bg-background/50">
                      <SelectValue placeholder="Select occasion" />
                    </SelectTrigger>
                    <SelectContent>
                      {occasions.map((occasion) => (
                        <SelectItem key={occasion} value={occasion}>
                          {occasion}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="requests"
                  className="text-foreground font-medium"
                >
                  Special Requests
                </Label>
                <Textarea
                  id="requests"
                  value={formData.requests}
                  onChange={(e) =>
                    handleInputChange("requests", e.target.value)
                  }
                  placeholder="Any dietary restrictions, special occasions, or preferences..."
                  className="min-h-[100px] rounded-xl border-border/50 bg-background/50 resize-none"
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
                      Processing Reservation...
                    </>
                  ) : (
                    "Reserve Table"
                  )}
                </span>
              </Button>
            </form>
          </div>

          {/* Information Panel */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Restaurant Info */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-elegant font-bold text-foreground mb-6">
                Reservation Information
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">
                      Operating Hours
                    </p>
                    <p>Monday - Sunday: 5:00 PM - 11:00 PM</p>
                    <p className="text-sm">Kitchen closes at 10:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">
                      Group Reservations
                    </p>
                    <p>For parties of 9 or more, please call us directly</p>
                    <p className="text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">
                      Cancellation Policy
                    </p>
                    <p>Please provide 24 hours notice for cancellations</p>
                    <p className="text-sm">No-show fee may apply</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-elegant font-bold text-foreground mb-6">
                Need Assistance?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our reservation team is ready to help you plan the perfect
                dining experience.
              </p>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start h-12 rounded-xl"
                >
                  <span>📞 Call (555) 123-4567</span>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start h-12 rounded-xl"
                >
                  <span>📧 reservations@bellissimo.com</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
