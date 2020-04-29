import React from "react";
import HeroSection from "./../components/HeroSection";
import { useRouter } from "./../util/router.js";

import Portis from "@portis/web3";
import Web3 from "web3";

const portis = new Portis("f4bbd071-8b8e-4b43-bb96-93e9071b6b42", "rinkeby");
//const portis = new Portis('f4bbd071-8b8e-4b43-bb96-93e9071b6b42', 'mainnet');
const web3 = new Web3(portis.provider);

function IndexPage(props) {
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
        //router.push("/pricing");
        portis.provider.enable();
      }}
    ></HeroSection>
  );
}

export default IndexPage;
