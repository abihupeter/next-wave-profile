import { useState } from "react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Clock,
  Download,
  Linkedin,
  Github,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Contact from Portfolio");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:abihupita@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation animation="fade-in">
          <h1 className="text-4xl font-bold mb-4">
            Get in{" "}
            <span className="primary-gradient bg-clip-text text-transparent">
              Touch 👋
            </span>
          </h1>
          <p className="text-muted-foreground text-lg mb-10">
            Have an idea, question, or just want to say hi? Drop a message
            below!
          </p>

          {/* Form */}
          <form className="space-y-6 text-left" onSubmit={handleSend}>
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <Button
              type="submit"
              className="primary-gradient hover-glow w-full"
            >
              Send Message
            </Button>
          </form>

          {/* Extra Info */}
          <div className="mt-12 space-y-4 text-left text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <a
                href="https://www.google.com/maps/place/Moi+Ave,+Nairobi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:scale-105"
              >
                Nairobi, Kenya
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:abihupita@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:scale-105"
              >
                abihupita@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Typically responds within 24 hours
            </div>
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              <a
                href="/resume.pdf"
                download
                className="hover:underline hover:scale-105"
              >
                Download CV
              </a>
            </div>
            <div className="flex items-center gap-2">
              💼 Currently{" "}
              <span className="font-medium text-green-500 hover:scale-105">
                open to work
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+254794436286"
                  className="hover:underline hover:scale-105"
                >
                  +254 794 436 286
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-500 hover:scale-105" />
                <a
                  href="https://wa.me/254794099551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:scale-105"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex justify-center gap-6">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition hover:scale-105"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
