import React from "react";
import HeroSection from "./../components/HeroSection";
import { useRouter } from "./../util/router.js";

function DashboardPage(props) {
  const router = useRouter();

  return (
    <HeroSection
      color="white"
      size="medium"
      backgroundImage=""
      backgroundImageOpacity={1}
      title="Your landing page title here"
      subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
      buttonText="Start Free Trial"
      buttonOnClick={() => {
        // Navigate to pricing page
        router.push("/pricing");
      }}
    ></HeroSection>
  );
}

export default DashboardPage;
