import React from "react";

export default function Privacy() {
  return (
    <div className="page-fade">
      <section className="page-hero">
        <h1>Privacy Policy</h1>
        <p>How we handle your information</p>
      </section>

      <section className="section container prose-block">
        <p>
          Mangalam Silks &amp; Readymades respects your privacy and is committed to
          protecting any personal information you share with us. This page explains,
          in plain terms, what we collect, why we collect it, and how it is used
          whenever you get in touch through this website.
        </p>

        <h3>Information We Collect</h3>
        <p>
          When you contact us through the website — using the contact form or the
          newsletter signup — we collect the details you choose to share with us,
          typically your name, email address, phone number and the content of your
          message. We only ask for what is needed to respond to your enquiry or to
          send the updates you've opted into.
        </p>

        <h3>How We Use Your Information</h3>
        <p>
          Your information is used solely to respond to enquiries submitted through
          our contact form, to send newsletter updates about new arrivals and offers
          to subscribers who've asked for them, and to help us improve the service
          our stores and staff provide. We do not sell, rent or trade your personal
          information to any third party for marketing purposes.
        </p>

        <h3>Data Storage &amp; Security</h3>
        <p>
          Contact messages and newsletter subscriptions are stored securely and are
          only accessible to authorised Mangalam Silks &amp; Readymades staff. We take
          reasonable technical precautions to protect this information from
          unauthorised access, alteration or disclosure.
        </p>

        <h3>Cookies &amp; Tracking</h3>
        <p>
          This website is an informational site for our stores and does not use
          tracking cookies for advertising or third-party analytics purposes. Any
          data shown on this site is used purely to help you browse our collections
          and reach out to us.
        </p>

        <h3>Your Rights</h3>
        <p>
          You're always welcome to ask us what information we hold about you, to
          request corrections, or to have your details removed from our contact
          records and newsletter list. Simply reach out to us through our{" "}
          <a href="/contact" style={{ color: "var(--maroon-700)", fontWeight: 600 }}>
            Contact page
          </a>{" "}
          and our team will action your request promptly.
        </p>

        <h3>Changes to This Policy</h3>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in
          our practices. Any updates will be posted on this page, so please check
          back periodically if you'd like to stay informed.
        </p>
      </section>
    </div>
  );
}
