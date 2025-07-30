import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactTop from "@/components/Contact/contactTop";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | MU5IC4GOOD",
  description: "This is Contact Page for MU5IC4GOOD",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <ContactTop />

      <Contact />
    </>
  );
};

export default ContactPage;
