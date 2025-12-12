import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  Star,
  CheckCircle,
  Wrench,
  Droplets,
  Disc,
  Settings,
  Snowflake,
  Circle,
  ClipboardCheck,
  ChevronRight,
  Car,
  Shield,
  ThumbsUp,
  DollarSign,
  Timer,
  Facebook,
  Instagram,
  Twitter,
  Moon,
  Sun,
  Loader2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { Service, Car as CarType, Testimonial } from "@shared/schema";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

import heroImage from "@assets/stock_images/professional_auto_me_3269f2a1.jpg";
import car1Image from "@assets/stock_images/used_car_dealership__c147b415.jpg";
import car2Image from "@assets/stock_images/used_car_dealership__1dc6f5b7.jpg";
import car3Image from "@assets/stock_images/used_car_dealership__04cb9967.jpg";
import car4Image from "@assets/stock_images/used_car_dealership__6c7e7dca.jpg";
import car5Image from "@assets/stock_images/used_car_dealership__e50d5eb4.jpg";
import car6Image from "@assets/stock_images/used_car_dealership__512244c5.jpg";

const carImages: Record<string, string> = {
  "1": car1Image,
  "2": car2Image,
  "3": car3Image,
  "4": car4Image,
  "5": car5Image,
  "6": car6Image,
};

const getServiceIcon = (iconName: string) => {
  const iconProps = { className: "w-8 h-8" };
  switch (iconName) {
    case "settings":
      return <Settings {...iconProps} />;
    case "droplets":
      return <Droplets {...iconProps} />;
    case "disc":
      return <Disc {...iconProps} />;
    case "wrench":
      return <Wrench {...iconProps} />;
    case "snowflake":
      return <Snowflake {...iconProps} />;
    case "circle":
      return <Circle {...iconProps} />;
    case "clipboard":
      return <ClipboardCheck {...iconProps} />;
    default:
      return <Wrench {...iconProps} />;
  }
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();

  const { data: services = [], isLoading: servicesLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  const { data: cars = [], isLoading: carsLoading } = useQuery<CarType[]>({
    queryKey: ["/api/cars"],
  });

  const { data: testimonials = [], isLoading: testimonialsLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navy shadow-lg"
            : "bg-navy/95"
        }`}
      >
        {/* Top Bar with Phone */}
        <div className="bg-primary text-primary-foreground py-1.5">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-2 text-sm">
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity"
                data-testid="link-phone-header"
              >
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </a>
              <span className="hidden sm:flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>Mon-Sat: 8AM - 6PM</span>
              </span>
            </div>
            <button
              onClick={toggleTheme}
              className="p-1 hover:opacity-80 transition-opacity"
              aria-label="Toggle theme"
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2"
              data-testid="link-logo"
            >
              <Car className="w-8 h-8 text-primary" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">Jay Auto Repair</span>
                <span className="text-xs text-silver hidden sm:block">Reliable Repairs. Quality Cars.</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("services")}
                className="text-white/90 hover:text-white transition-colors font-medium text-sm"
                data-testid="nav-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("cars")}
                className="text-white/90 hover:text-white transition-colors font-medium text-sm"
                data-testid="nav-cars"
              >
                Cars for Sale
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white/90 hover:text-white transition-colors font-medium text-sm"
                data-testid="nav-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white/90 hover:text-white transition-colors font-medium text-sm"
                data-testid="nav-contact"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="font-semibold"
                data-testid="button-book-repair-nav"
              >
                Book a Repair
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4 space-y-3">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left text-white/90 hover:text-white py-2 font-medium"
                data-testid="nav-services-mobile"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("cars")}
                className="block w-full text-left text-white/90 hover:text-white py-2 font-medium"
                data-testid="nav-cars-mobile"
              >
                Cars for Sale
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-white/90 hover:text-white py-2 font-medium"
                data-testid="nav-about-mobile"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-white/90 hover:text-white py-2 font-medium"
                data-testid="nav-contact-mobile"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full font-semibold"
                data-testid="button-book-repair-mobile"
              >
                Book a Repair
              </Button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[85vh] flex items-center pt-28"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
              data-testid="text-hero-headline"
            >
              Your Trusted Auto Repair Experts
            </h1>
            <p
              className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed"
              data-testid="text-hero-subtext"
            >
              From full-service repairs to quality used car sales, Jay Auto Repair keeps you on the road. 
              Our certified mechanics deliver honest service you can count on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-base font-semibold px-8"
                data-testid="button-book-repair-hero"
              >
                Book a Repair
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("cars")}
                className="text-base font-semibold px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                data-testid="button-view-cars-hero"
              >
                View Cars for Sale
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Certified Mechanics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">5000+ Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6"
                data-testid="text-about-headline"
              >
                Serving Our Community Since 2009
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Jay Auto Repair was founded with a simple mission: provide honest, reliable auto service 
                at fair prices. What started as a small two-bay garage has grown into a full-service 
                auto repair shop and quality used car dealership that our community trusts.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our team of ASE-certified mechanics brings decades of combined experience to every vehicle 
                that enters our shop. We believe in transparent communication, upfront pricing, and 
                standing behind our work with a comprehensive warranty on all repairs.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="stat-years">15+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="stat-customers">5000+</div>
                  <div className="text-sm text-muted-foreground mt-1">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="stat-mechanics">8</div>
                  <div className="text-sm text-muted-foreground mt-1">Certified Mechanics</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={heroImage}
                  alt="Jay Auto Repair Shop"
                  className="w-full h-full object-cover"
                  data-testid="img-about"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden sm:block">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-90">Satisfaction Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4"
              data-testid="text-services-headline"
            >
              Complete Auto Repair Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From routine maintenance to complex repairs, our expert technicians handle it all 
              with precision and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesLoading ? (
              [...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6">
                    <Skeleton className="w-14 h-14 rounded-lg mb-4" />
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-5/6 mb-4" />
                    <Skeleton className="h-4 w-24" />
                  </CardContent>
                </Card>
              ))
            ) : (
              services.map((service) => (
                <Card
                  key={service.id}
                  className="group hover-elevate transition-all duration-300"
                  data-testid={`card-service-${service.id}`}
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {getServiceIcon(service.icon)}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{service.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => scrollToSection("contact")}
                      className="font-medium text-primary p-0 h-auto"
                      data-testid={`button-book-${service.id}`}
                    >
                      Book Now
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Cars for Sale Section */}
      <section id="cars" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Inventory</span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4"
              data-testid="text-cars-headline"
            >
              Quality Used Cars for Sale
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every vehicle in our inventory undergoes a rigorous inspection by our certified mechanics. 
              Drive away with confidence knowing your car is road-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {carsLoading ? (
              [...Array(6)].map((_, i) => (
                <Card key={i} className="overflow-hidden animate-pulse">
                  <Skeleton className="aspect-[16/10]" />
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex-1">
                        <Skeleton className="h-5 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                      <Skeleton className="h-6 w-20" />
                    </div>
                    <div className="flex gap-1.5 mb-4">
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-6 w-14" />
                    </div>
                    <Skeleton className="h-9 w-full" />
                  </CardContent>
                </Card>
              ))
            ) : (
              cars.map((car) => (
                <Card
                  key={car.id}
                  className="group overflow-hidden hover-elevate"
                  data-testid={`card-car-${car.id}`}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={carImages[car.id] || car1Image}
                      alt={`${car.year} ${car.make} ${car.model}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      data-testid={`img-car-${car.id}`}
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-bold text-lg text-foreground">
                          {car.make} {car.model}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {car.year} • {car.mileage.toLocaleString()} miles
                        </p>
                      </div>
                      <div
                        className="text-xl font-bold text-primary"
                        data-testid={`text-price-${car.id}`}
                      >
                        ${car.price.toLocaleString()}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {car.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                      {car.features.length > 3 && (
                        <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                          +{car.features.length - 3} more
                        </span>
                      )}
                    </div>

                    <Button
                      className="w-full font-semibold"
                      onClick={() => scrollToSection("contact")}
                      data-testid={`button-inquire-${car.id}`}
                    >
                      Inquire About This Vehicle
                    </Button>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          <div className="text-center mt-10">
            <Button
              size="lg"
              variant="outline"
              className="font-semibold"
              data-testid="button-view-all-cars"
            >
              View All Available Cars
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Jay Auto</span>
            <h2
              className="text-3xl sm:text-4xl font-bold mt-2 mb-4"
              data-testid="text-why-headline"
            >
              Why Choose Us
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We're not just another auto shop. Here's what sets us apart from the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Certified Mechanics",
                description: "All our technicians are ASE-certified with ongoing training on the latest automotive technology.",
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Honest Pricing",
                description: "No hidden fees or surprise charges. We provide detailed estimates before any work begins.",
              },
              {
                icon: <Timer className="w-8 h-8" />,
                title: "Fast Turnaround",
                description: "We respect your time. Most services are completed same-day so you can get back on the road quickly.",
              },
              {
                icon: <Car className="w-8 h-8" />,
                title: "Reliable Used Cars",
                description: "Every vehicle in our inventory passes a comprehensive inspection and comes with warranty coverage.",
              },
              {
                icon: <ThumbsUp className="w-8 h-8" />,
                title: "Satisfaction Guarantee",
                description: "We stand behind our work with a 12-month/12,000-mile warranty on all repairs.",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Free Estimates",
                description: "Bring your vehicle in for a free diagnostic assessment and honest repair recommendations.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4"
                data-testid={`why-item-${idx}`}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4"
              data-testid="text-testimonials-headline"
            >
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsLoading ? (
              [...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Skeleton key={j} className="w-5 h-5 rounded" />
                      ))}
                    </div>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4 mb-4" />
                    <Skeleton className="h-5 w-1/3 mb-1" />
                    <Skeleton className="h-4 w-1/4" />
                  </CardContent>
                </Card>
              ))
            ) : (
              testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="hover-elevate"
                  data-testid={`card-testimonial-${testimonial.id}`}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.service}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4"
              data-testid="text-contact-headline"
            >
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to schedule a service or have questions about our inventory? We're here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-testid="form-contact">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                {...field}
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@example.com"
                                {...field}
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number (Optional)</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="(555) 123-4567"
                                {...field}
                                data-testid="input-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-service">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="repair">Auto Repair</SelectItem>
                                <SelectItem value="maintenance">Routine Maintenance</SelectItem>
                                <SelectItem value="diagnostic">Diagnostic Service</SelectItem>
                                <SelectItem value="car-inquiry">Car Purchase Inquiry</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your vehicle or inquiry..."
                              className="min-h-[120px]"
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full font-semibold" 
                      disabled={contactMutation.isPending}
                      data-testid="button-submit-contact"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Address</div>
                        <div className="text-muted-foreground text-sm">
                          1234 Auto Drive, Suite 100<br />
                          Springfield, IL 62701
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Phone</div>
                        <a
                          href="tel:+15551234567"
                          className="text-primary hover:underline text-sm"
                          data-testid="link-phone-contact"
                        >
                          (555) 123-4567
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Email</div>
                        <a
                          href="mailto:info@jayautorepair.com"
                          className="text-primary hover:underline text-sm"
                          data-testid="link-email-contact"
                        >
                          info@jayautorepair.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Business Hours</div>
                        <div className="text-muted-foreground text-sm">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: 8:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Map Embed */}
              <div className="rounded-lg overflow-hidden h-[300px] lg:h-[280px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1631661888095!2d-89.64979908464792!3d39.78173187944112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ2JzU0LjMiTiA4OcKwMzgnNTMuMiJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jay Auto Repair Location"
                  data-testid="map-embed"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Car className="w-7 h-7 text-primary" />
                <span className="text-lg font-bold">Jay Auto Repair</span>
              </div>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                Your trusted partner for auto repairs and quality used cars. 
                Serving the community with honesty and expertise since 2009.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Facebook"
                  data-testid="link-facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Instagram"
                  data-testid="link-instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Twitter"
                  data-testid="link-twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-white/70 hover:text-white transition-colors"
                    data-testid="footer-link-services"
                  >
                    Our Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("cars")}
                    className="text-white/70 hover:text-white transition-colors"
                    data-testid="footer-link-cars"
                  >
                    Cars for Sale
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-white/70 hover:text-white transition-colors"
                    data-testid="footer-link-about"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-white/70 hover:text-white transition-colors"
                    data-testid="footer-link-contact"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Engine Diagnostics</li>
                <li>Oil Changes</li>
                <li>Brake Service</li>
                <li>Transmission Repair</li>
                <li>AC Repair</li>
                <li>Tire Service</li>
              </ul>
            </div>

            {/* Business Hours */}
            <div>
              <h4 className="font-bold mb-4">Business Hours</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex justify-between gap-4">
                  <span>Monday - Friday</span>
                  <span>8AM - 6PM</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Saturday</span>
                  <span>8AM - 4PM</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-white/10">
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-2 text-primary font-semibold"
                  data-testid="footer-phone"
                >
                  <Phone className="w-4 h-4" />
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p data-testid="text-copyright">
              © 2024 Jay Auto Repair. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
