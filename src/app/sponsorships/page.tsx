import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Sponsorships1 from "@/components/Sponsorships";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsorships Page | MU5IC4GOOD",
  description: "This is Sponsorships Page for MU5IC4GOOD",
  // other metadata
};

const Sponsor = () => {
  return (
    <>
      <Sponsorships1 />
    </>
  );
};

export default Sponsor;
