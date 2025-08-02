import Journey from "@/components/Journey";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Journey Page | MU5IC4GOOD",
  description: "This is Our Journey Page for MU5IC4GOOD",
  // other metadata
};

const OurJour = () => {
  return (
    <>
      <Journey />
    </>
  );
};

export default OurJour;
