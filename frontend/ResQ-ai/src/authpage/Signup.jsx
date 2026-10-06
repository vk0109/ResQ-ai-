import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowLeft,
  Check,
  CheckCircle2,
  XCircle,
  Loader2,
} from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const showPopup = (type, message) => {
    setPopup({ type, message });

    setTimeout(() => {
      setPopup(null);
    }, 3500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setError("");

    // Password validation
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters.");
      showPopup("error", "Password must be at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      showPopup("error", "Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed.");

        showPopup(
          "error",
          data.message || "Registration failed."
        );

        return;
      }

      showPopup(
        "success",
        "Account created! Check your email to verify your account."
      );

      // Password ko kahin save nahi karna.
      // User ko automatically login nahi karna.
      // Pehle email verification required hai.

     
    } catch (error) {
      console.error("Signup error:", error);

      setError(
        "Unable to connect to RESQ-AI server."
      );

      showPopup(
        "error",
        "Unable to connect to RESQ-AI server."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-white">

      {/* ANIMATED POPUP */}
      {popup && (
        <div className="fixed right-5 top-5 z-[9999] animate-[slideIn_0.35s_ease-out]">
          <div
            className={`flex min-w-[300px] max-w-sm items-center gap-3 rounded-2xl border px-4 py-3 shadow-2xl backdrop-blur-xl ${
              popup.type === "success"
                ? "border-emerald-200 bg-emerald-50/95 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-950/90 dark:text-emerald-300"
                : "border-red-200 bg-red-50/95 text-red-700 dark:border-red-500/20 dark:bg-red-950/90 dark:text-red-300"
            }`}
          >
            {popup.type === "success" ? (
              <CheckCircle2
                size={22}
                className="shrink-0"
              />
            ) : (
              <XCircle
                size={22}
                className="shrink-0"
              />
            )}

            <p className="text-sm font-medium">
              {popup.message}
            </p>
          </div>
        </div>
      )}

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT */}
        <div className="relative hidden overflow-hidden bg-sky-600 lg:flex">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_35%)]" />

          <div className="relative z-10 flex flex-col justify-between p-12">

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
                <ShieldCheck size={23} />
              </div>

              <span className="text-xl font-semibold tracking-tight">
                RESQ-AI
              </span>
            </div>

            <div className="max-w-lg">
              <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-sky-100">
                YOUR EMERGENCY COMPANION
              </p>

              <h1 className="text-5xl font-bold leading-tight tracking-tight">
                Be ready before
                <br />
                an emergency happens.
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-sky-100">
                Create your RESQ-AI account to keep your emergency tools,
                trusted contacts and important information available when you
                need them.
              </p>
            </div>

            <div className="space-y-3 text-sm text-sky-100">
              <div className="flex items-center gap-2">
                <Check size={17} />
                Offline-ready emergency tools
              </div>

              <div className="flex items-center gap-2">
                <Check size={17} />
                Trusted contacts
              </div>

              <div className="flex items-center gap-2">
                <Check size={17} />
                Personal emergency history
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-10">
          <div className="w-full max-w-md">

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="mb-8 flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
            >
              <ArrowLeft size={17} />
              Back
            </button>

            <div className="mb-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
                <ShieldCheck size={25} />
              </div>

              <h2 className="text-3xl font-bold tracking-tight">
                Create your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Set up your RESQ-AI account to continue.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 dark:border-slate-800 dark:bg-slate-900 dark:placeholder:text-slate-600"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 dark:border-slate-800 dark:bg-slate-900 dark:placeholder:text-slate-600"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Minimum 8 characters"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 dark:border-slate-800 dark:bg-slate-900 dark:placeholder:text-slate-600"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 hover:text-sky-600 dark:hover:text-sky-400"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium"
                >
                  Confirm password
                </label>

                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    required
                    autoComplete="new-password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 dark:border-slate-800 dark:bg-slate-900 dark:placeholder:text-slate-600"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 hover:text-sky-600 dark:hover:text-sky-400"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* ERROR */}
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/40 dark:bg-red-950/20 dark:text-red-400">
                  {error}
                </div>
              )}

              {/* CREATE ACCOUNT */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-500/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading && (
                  <Loader2
                    size={17}
                    className="animate-spin"
                  />
                )}

                {loading
                  ? "Creating account..."
                  : "Create account"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-sky-600 hover:text-sky-700 dark:text-sky-400"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px) translateY(-10px);
          }

          to {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }
      `}</style>
    </main>
  );
};

export default Signup;