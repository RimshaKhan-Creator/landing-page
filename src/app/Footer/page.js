export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Logo + Socials */}
        <div>
          <div className="mb-4">
            <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
          </div>
          <p className="text-sm mb-4">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-orange-500 hover:text-orange-600">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="text-orange-500 hover:text-orange-600">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold mb-2 text-orange-500">Explore</h4>
          <ul className="space-y-1">
            <li><a href="#">Home</a></li>
            <li><a href="#">Selections</a></li>
            <li><a href="#">Creators</a></li>
            <li><a href="#">Packs</a></li>
          </ul>
        </div>

        {/* Sounds */}
        <div>
          <h4 className="font-semibold mb-2 text-orange-500">Sounds</h4>
          <ul className="space-y-1">
            <li><a href="#">Samples</a></li>
            <li><a href="#">Presets</a></li>
            <li><a href="#">One-Shots</a></li>
            <li><a href="#">Free Samples</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-2 text-orange-500">Resources</h4>
          <ul className="space-y-1">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Support</a></li>
            <li><a href="#">Desktop App</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-2 text-orange-500">Legal</h4>
          <ul className="space-y-1">
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Licensing</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 text-xs text-gray-500 border-t border-gray-200">
        © 2025 SampleHub, Inc. All rights reserved.
      </div>
    </footer>
  );
}
