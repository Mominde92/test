import { CategorySection } from "@/components/home/CategorySection";
import { CurrentLocationStoresSection } from "@/components/home/CurrentLocationStoresSection";
import { FeaturedProductsSection } from "@/components/home/FeaturedProductsSection";
import { FlashSaleSection } from "@/components/home/FlashSaleSection";
import { HeroSection } from "@/components/home/HeroSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { Footer } from "@/components/layout/Footer";
import { StoresNearYouSection } from "@/components/home/StoresNearYouSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream-soft text-ink">
      <HeroSection />
      <PartnersSection />
      <CategorySection />
      <FeaturedProductsSection />
      <FlashSaleSection />
      <StoresNearYouSection />
      <CurrentLocationStoresSection />
      <Footer />
    </main>
  );
}
