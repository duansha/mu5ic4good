import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | MU5IC4GOOD",
  description: "This is Blog Page for MU5IC4GOOD",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Features />
    </>
  );
};

export default Blog;
