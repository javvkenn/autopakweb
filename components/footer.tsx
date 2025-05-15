import Link from "next/link"
import { Leaf, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import NewsletterForm from "@/components/newsletter-form"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-500" />
              <span className="text-xl font-bold text-white">EcoWeave</span>
            </div>
            <p className="text-slate-400">
              Leading manufacturer of eco-friendly woven polypropylene bags for agricultural, industrial, and commercial
              use.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="text-slate-400 hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?type=standard" className="text-slate-400 hover:text-white transition-colors">
                  Standard WPP Bags
                </Link>
              </li>
              <li>
                <Link href="/products?type=laminated" className="text-slate-400 hover:text-white transition-colors">
                  Laminated WPP Bags
                </Link>
              </li>
              <li>
                <Link href="/products?type=bopp" className="text-slate-400 hover:text-white transition-colors">
                  BOPP Printed Bags
                </Link>
              </li>
              <li>
                <Link href="/products?type=custom" className="text-slate-400 hover:text-white transition-colors">
                  Custom WPP Solutions
                </Link>
              </li>
              <li>
                <Link href="/products?type=eco" className="text-slate-400 hover:text-white transition-colors">
                  Eco-Friendly Options
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Newsletter</h3>
            <p className="text-slate-400 mb-4">
              Subscribe to our newsletter for the latest updates on sustainable packaging innovations.
            </p>
            <NewsletterForm
              inputClassName="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              buttonClassName="w-full bg-green-600 hover:bg-green-700"
            />
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} EcoWeave Packaging. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-slate-400 hover:text-white transition-colors text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
