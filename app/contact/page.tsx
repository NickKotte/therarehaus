import type { Metadata } from 'next';
import { Contact } from "../components/Contact";

export const metadata: Metadata = {
  title: 'Contact | Book a Consultation',
  description: 'Connect with our team of artists and designers. Schedule a consultation for your custom art project or installation.',
};

export default function ContactPage() {
  return (
    <article>
      <Contact />
    </article>
  );
}