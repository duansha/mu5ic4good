import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Missions1 from "@/components/Missions";
import Mission2 from "@/components/Missions/Mission2";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission Page | MU5IC4GOOD",
  description: "This is Mission Page for MU5IC4GOOD",
  // other metadata
};

const Missions = () => {
  return (
    <>
      <Missions1 />
      <Mission2 />
    </>
  );
};

export default Missions;
