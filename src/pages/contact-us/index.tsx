import React from "react";
import "./contact.scss";
import PrimaryButton from "@/components/shared/buttons/primary-button";

export default function ContactUs() {
  return (
    <main className="contact__us">
      <h2 className="title">Contact Us</h2>

      <form action="">
        <input name="name" type="text" placeholder="Full Name" />
        <input name="email" type="text" placeholder="Email Address" />
        <input name="subject" type="text" placeholder="Title of mail" />
        <textarea
          name="content"
          id=""
          placeholder="Write email content"
        ></textarea>

        <PrimaryButton type="submit" variation="secondary">
          Submit
        </PrimaryButton>
      </form>
    </main>
  );
}
