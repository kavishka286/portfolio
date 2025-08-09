"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("contact")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Get In <span className="text-orange-500">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Start a Conversation</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question about my
                  work, want to collaborate, or just want to say hello, feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="p-3 bg-orange-500/10 rounded-lg">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a
                      href="mailto:kavishkasenavirathna6@gmail.com"
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      senavirathnakavishka86@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <Phone className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <a href="tel:0740936503" className="text-gray-300 hover:text-orange-500 transition-colors">
                      0740936503
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="p-3 bg-gray-500/10 rounded-lg">
                    <Github className="h-6 w-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">GitHub</p>
                    <a
                      href="https://github.com/kavishka286"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      github.com/kavishka286
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Linkedin className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/senavirathna"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      linkedin.com/in/senavirathna
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="p-3 bg-red-500/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-gray-300">Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-900 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-900 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-gray-900 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-gray-700">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-bold text-lg mb-4">Kavishka Senavirathna</h4>
                <p className="text-gray-400 text-sm">
                  Full-Stack Developer passionate about creating innovative digital solutions. Let's build something
                  amazing together.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
                <div className="space-y-2">
                  {["Home", "About", "Skills", "Projects", "Services", "Contact"].map((link) => (
                    <button
                      key={link}
                      onClick={() =>
                        document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="block text-gray-400 hover:text-orange-500 transition-colors text-sm"
                    >
                      {link}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold text-lg mb-4">Get In Touch</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-400">kavishkasenavirathna6@gmail.com</p>
                  <p className="text-gray-400">0740936503</p>
                  <p className="text-gray-400">Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p className="text-gray-400 text-sm">
                © 2024 Kavishka Senavirathna. All rights reserved. Made with ❤️ and lots of coffee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
