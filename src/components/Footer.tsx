

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-100 pt-16 pb-12 font-sans text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-16">
          {/* Brand Column */}
          <div className="md:col-span-2 pr-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-pink-500 rounded-md flex items-center justify-center text-white font-bold text-xs">
                DS
              </div>
              <span className="font-bold text-lg text-slate-900 tracking-tight">
                Dev <span className="text-pink-500">Stack</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xs mb-6">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
              <a href="#github" className="hover:text-slate-900 transition-colors">GitHub</a>
              <a href="#twitter" className="hover:text-slate-900 transition-colors">Twitter</a>
              <a href="#linkedin" className="hover:text-slate-900 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-slate-900 text-xs tracking-wider uppercase mb-4">
              Product
            </h4>
            <ul className="space-y-3 text-xs text-slate-500">
              <li><a href="#home" className="hover:text-slate-900 transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-slate-900 text-xs tracking-wider uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-xs text-slate-500">
              <li><a href="#about" className="hover:text-slate-900 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a></li>
              <li><a href="#careers" className="hover:text-slate-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-slate-900 text-xs tracking-wider uppercase mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-xs text-slate-500">
              <li><a href="#privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}