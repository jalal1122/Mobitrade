import bgImage from "../assets/loginPagesBg.jpg";
import { FiShield } from "react-icons/fi";

const AdminLoginPage = () => {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Logo */}
        <div className="flex flex-col gap-5 text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-3xl font-bold">M</span>
            </div>
            <span className="text-white text-5xl font-bold tracking-tight">
              Mobitrade
            </span>
          </div>

          <div className="text-white text-lg font-medium">
            <span>Sign in to your account</span>
          </div>
        </div>

        {/* Admin Login Card */}
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          {/* Toggle Tabs */}
          <div className="flex gap-0 bg-gray-50 rounded-full p-1 mb-8">
            <button className="flex-1 flex justify-center items-center gap-2 py-3.5 rounded-full text-sm font-medium transition-all bg-white text-gray-900 shadow-sm">
              <FiShield size={18} />
              <span>Admin Login</span>
            </button>
          </div>

          {/* Admin Warning Banner */}
          <div className="mb-6 p-3 bg-orange-50 border border-orange-200 rounded-lg flex items-center gap-2">
            <FiShield size={16} className="text-orange-600" />
            <span className="text-sm text-orange-800 font-medium">
              Admin Login Only - Authorized Personnel
            </span>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Admin Email Input */}
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-3">
                Admin Email
              </label>
              <input
                type="email"
                placeholder="admin@mobitrade.com"
                className="w-full px-5 py-4 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white transition-all text-base text-gray-700 placeholder:text-gray-400"
              />
            </div>

            {/* Admin Password Input */}
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-3">
                Admin Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-5 py-4 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white transition-all text-base text-gray-700"
              />
            </div>

            {/* Admin Sign In Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-900 transition-colors mt-8 text-base"
            >
              Admin Sign In
            </button>
          </form>
        </div>

        {/* Footer Text */}
        <p className="text-center text-sm text-white/80 mt-10">
          By continuing, you agree to our{" "}
          <a href="#" className="text-white font-semibold hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-white font-semibold hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default AdminLoginPage;
