"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Box, DollarSign, ShieldCheck, Star, Truck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeLargeTitles"
        background="grid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Pricing", id: "pricing" },
        { name: "Services", id: "services" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="C&S Dumpsters"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{ variant: "gradient-bars" }}
      title="Omaha’s Most Trusted Dumpster Rental Company"
      description="Luxury-level customer service, fast delivery, affordable pricing, and 5-star rated by Omaha homeowners, contractors, and businesses. Call us directly at (402) 850-5868."
      testimonials={[
        { name: "Sarah J.", handle: "@sarah_j", testimonial: "Seriously one of the best services I’ve ever requested.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/outdoors-abstract-shadow-daytime_23-2149080289.jpg?_wi=1", imageAlt: "sleek black commercial dumpster driveway" },
        { name: "Mike D.", handle: "@miked_omaha", testimonial: "Fast, friendly, and very fair pricing.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-teenage-girl-posing_23-2148672410.jpg", imageAlt: "sleek black commercial dumpster driveway" },
        { name: "Lisa K.", handle: "@lisa_k_homes", testimonial: "Great communication, friendly, arrived exactly when they said.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-with-safety-vest-crossed-arms_23-2148269352.jpg", imageAlt: "sleek black commercial dumpster driveway" },
        { name: "Contractor B.", handle: "@b_builds", testimonial: "The dumpsters are new and luxurious.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/coffee-shop-small-business_23-2149196195.jpg?_wi=1", imageAlt: "sleek black commercial dumpster driveway" },
        { name: "Tom R.", handle: "@tom_r_omaha", testimonial: "Professional, clean, and right on time every time.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/fumigation_23-2148013411.jpg", imageAlt: "sleek black commercial dumpster driveway" },
      ]}
      buttons={[
        { text: "Call (402) 850-5868", href: "tel:+14028505868" },
        { text: "Text for Fast Quote", href: "sms:+14028505868" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/outdoors-abstract-shadow-daytime_23-2149080289.jpg?_wi=2"
      imageAlt="Luxury black dumpster rental in residential driveway"
      mediaAnimation="slide-up"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/beautiful-african-american-woman-cafe_273609-5292.jpg", alt: "Satisfied customer" },
        { src: "http://img.b2bpic.net/free-photo/portrait-adorable-blue-eyed-female-model-with-hair-knot-wears-overalls-enjoys-drinking-fruit-smoothie-looks-happily-somewhere-while-sits-cozy-restaurant-beautiful-teenage-girl-coffee-shop_273609-3038.jpg", alt: "Satisfied customer" },
        { src: "http://img.b2bpic.net/free-photo/dreamy-beautiful-female-with-warm-blue-eyes-positive-smile-dressed-casually-has-dark-hair-tied-knot-drinks-fresh-cocktail-being-pleased-spend-free-time-cafeteria-summer-rest-leisure_273609-3039.jpg", alt: "Satisfied customer" },
        { src: "http://img.b2bpic.net/free-photo/young-handsome-cheerful-gardener-smiling-looking-camera-posing_176420-3837.jpg", alt: "Satisfied customer" },
        { src: "http://img.b2bpic.net/free-photo/medium-shot-old-man-with-glasses-safety-helmet_23-2148269397.jpg", alt: "Satisfied customer" },
      ]}
      avatarText="Trusted by 56+ Local Omaha Residents"
      marqueeItems={[
        { type: "text-icon", text: "Same-Day Delivery", icon: Truck },
        { type: "text-icon", text: "Driveway Friendly", icon: ShieldCheck },
        { type: "text-icon", text: "Transparent Pricing", icon: DollarSign },
        { type: "text-icon", text: "Contractor Approved", icon: Box },
        { type: "text-icon", text: "5-Star Rated", icon: Star },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        { title: "Premium Customer Service", description: "Fast communication, polite drivers, stress-free rentals.", imageSrc: "http://img.b2bpic.net/free-photo/plastic-storage-case_1339-5894.jpg" },
        { title: "Fast Delivery", description: "Need it today? We move quickly with same-day and next-day options.", imageSrc: "http://img.b2bpic.net/free-photo/old-car-door-yard_23-2149714257.jpg?_wi=1" },
        { title: "Honest Pricing", description: "Transparent billing with no hidden surprises or games.", imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-painting-car-door_23-2149714295.jpg" },
        { title: "Residential Friendly", description: "Driveway-safe placement and clean, professional equipment.", imageSrc: "http://img.b2bpic.net/free-photo/factory_23-2148098549.jpg?_wi=1" },
        { title: "Contractor Ready", description: "Reliable service for roofing, remodels, demolition, and major cleanouts.", imageSrc: "http://img.b2bpic.net/free-photo/covered-bridge-vermont-autumn_649448-5434.jpg" },
      ]}
      title="Why Omaha Chooses C&S Dumpsters"
      description="We combine premium service with reliability to make your cleanup project hassle-free."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        { id: "15-3", tag: "15 yard dumpsters", price: "$250", period: "3 Days", description: "1 Ton Included", button: { text: "Call (402) 850-5868", href: "tel:+14028505868" }, featuresTitle: "Includes:", features: ["1 Ton Weight Limit", "3 Day Rental", "Driveway-Safe"] },
        { id: "15-7", tag: "Value", price: "$280", period: "7 Days", description: "1.5 Tons Included", button: { text: "Call (402) 850-5868", href: "tel:+14028505868" }, featuresTitle: "Includes:", features: ["1.5 Ton Weight Limit", "7 Day Rental", "Driveway-Safe"] },
        { id: "20-3", tag: "Commercial", price: "$280", period: "3 Days", description: "1.5 Tons Included", button: { text: "Call (402) 850-5868", href: "tel:+14028505868" }, featuresTitle: "Includes:", features: ["1.5 Ton Weight Limit", "3 Day Rental", "Heavy Duty"] },
        { id: "20-7", tag: "Contractor", price: "$325", period: "7 Days", description: "2 Tons Included", button: { text: "Call (402) 850-5868", href: "tel:+14028505868" }, featuresTitle: "Includes:", features: ["2 Ton Weight Limit", "7 Day Rental", "Heavy Duty"] },
      ]}
      title="Dumpster Rental Prices"
      description="Simple, transparent pricing tailored to your project size."
    />
  </div>

  <div id="services" data-section="services">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        { id: "1", value: "20 Yard Dumpsters", description: "Perfect for mid-sized construction and large home cleanouts." },
        { id: "2", value: "Remodel", description: "Debris, construction & roofing" },
        { id: "3", value: "Demolition", description: "Sheds, structures & site prep" },
        { id: "4", value: "20 Yard Dumpster Services", description: "Professional-grade disposal for any large project." },
      ]}
      title="What We Help With"
      description="From minor garage cleanouts to large-scale construction sites, we cover it all."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Sarah Johnson", date: "Jan 2025", title: "Homeowner", quote: "Great communication, friendly, arrived exactly when they said they would.", tag: "Residential", avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-teenage-girl-posing_23-2148672410.jpg", imageSrc: "http://img.b2bpic.net/free-photo/outdoors-abstract-shadow-daytime_23-2149080289.jpg?_wi=3", imageAlt: "smiling omaha resident testimonial" },
        { id: "2", name: "Michael Chen", date: "Dec 2024", title: "Developer", quote: "Seriously one of the best services I’ve ever requested.", tag: "Contractor", avatarSrc: "http://img.b2bpic.net/free-photo/front-view-man-with-safety-vest-crossed-arms_23-2148269352.jpg", imageSrc: "http://img.b2bpic.net/free-photo/coffee-shop-small-business_23-2149196195.jpg?_wi=2", imageAlt: "smiling omaha resident testimonial" },
        { id: "3", name: "Emily Rodriguez", date: "Nov 2024", title: "Realtor", quote: "Fast, friendly, and very fair pricing.", tag: "Commercial", avatarSrc: "http://img.b2bpic.net/free-photo/fumigation_23-2148013411.jpg", imageSrc: "http://img.b2bpic.net/free-photo/designers-team-working-3d-model_23-2149371886.jpg", imageAlt: "smiling omaha resident testimonial" },
        { id: "4", name: "David Kim", date: "Oct 2024", title: "General Contractor", quote: "The dumpsters are new and luxurious.", tag: "Contractor", avatarSrc: "http://img.b2bpic.net/plastic-storage-case_1339-5894.jpg", imageSrc: "http://img.b2bpic.net/free-photo/old-car-door-yard_23-2149714257.jpg?_wi=2", imageAlt: "smiling omaha resident testimonial" },
        { id: "5", name: "Jenny Wilson", date: "Sep 2024", title: "Homeowner", quote: "Best experience I've had renting a dumpster in Omaha.", tag: "Residential", avatarSrc: "http://img.b2bpic.net/free-photo/full-shot-man-painting-car-door_23-2149714295.jpg", imageSrc: "http://img.b2bpic.net/free-photo/factory_23-2148098549.jpg?_wi=2", imageAlt: "smiling omaha resident testimonial" },
      ]}
      title="Trusted by Omaha Homeowners & Contractors"
      description="Join 56+ happy customers who have experienced our premium dumpster rental service."
    />
  </div>

  <div id="process" data-section="process">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "1. Call or Text Us", content: "Tell us what size you need and your location." },
        { id: "2", title: "2. Fast Delivery", content: "We place the dumpster exactly where you need it." },
        { id: "3", title: "3. Fill It Up", content: "Take your time during your rental period." },
        { id: "4", title: "4. We Haul It Away", content: "When you're done, we pick it up promptly." },
      ]}
      title="How It Works"
      description="Renting a dumpster with C&S is simple and hassle-free."
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/young-man-looking-into-solid-fuel-boiler-working-with-biofuels-economical-heating_169016-15375.jpg"
      imageAlt="Solid fuel boiler maintenance"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Local Omaha Company. Premium Standards."
      description="C&S Dumpsters is a locally owned Omaha company built on one thing: doing business the right way. We show up on time, answer our phone, communicate clearly, and make renting a dumpster simple. We treat every customer like our reputation depends on it—because it does."
      metrics={[
        { value: "56+", title: "Reviews" },
        { value: "24/7", title: "Availability" },
        { value: "Fast", title: "Service" },
      ]}
      mediaAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/group-happy-young-business-people-celebrating-success_171337-7432.jpg"
      imageAlt="Happy business team"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{ variant: "gradient-bars" }}
      tag="Ready to Start?"
      title="Need a Dumpster Today?"
      description="Call or text us now at (402) 850-5868 for a fast quote and same-day delivery options."
      mediaPosition="right"
      imageSrc="http://img.b2bpic.net/free-photo/happy-businesspeople-celebrating-team-success_1262-21062.jpg"
      imageAlt="Successful team work"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        { title: "Company", items: [{ label: "About Us", href: "#about" }, { label: "Services", href: "#services" }, { label: "Contact", href: "#contact" }] },
        { title: "Resources", items: [{ label: "Pricing", href: "#pricing" }, { label: "How It Works", href: "#process" }, { label: "Reviews", href: "#testimonials" }] },
        { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] },
      ]}
      logoText="C&S Dumpsters"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}