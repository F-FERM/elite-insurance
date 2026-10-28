import EliteAbout from "../components/home/About";
import EliteClaims from "../components/home/Claims";
import EliteContact from "../components/home/Contact";
import ElitePurpose from "../components/home/ElitePurpose";
import EliteServices from "../components/home/EliteServices";
import EliteFooter from "../components/home/Footer";
import EliteHero from "../components/home/Hero";
import PolicyRenewal from "../components/home/PolicyRenewal";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <EliteHero/>
      <EliteAbout/>
      <ElitePurpose/>
      <EliteServices/>
      <EliteClaims/>
      <PolicyRenewal/>
      <EliteContact/>
      <EliteFooter/>
 
    </main>
  );
}