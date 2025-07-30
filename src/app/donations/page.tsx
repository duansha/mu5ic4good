import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Donates from "@/components/Donates";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donations Page | MU5IC4GOOD",
  description: "This is Donations Page for MU5IC4GOOD",
  // other metadata
};

const Donations = () => {
  return (
    <>
      <Donates />
    </>
  );
};

export default Donations;
