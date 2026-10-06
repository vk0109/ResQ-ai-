import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  CheckCircle2,
  XCircle,
  Download,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();

  const [status, setStatus] = useState("checking");
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const verificationStatus = searchParams.get("status");

   if (verificationStatus === "success") {
  localStorage.setItem("resqai_email_verified", "true");
  setStatus("success");
}else {
      setStatus("failed");
    }

    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt
    );

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, [searchParams]);

  const handleInstall = async () => {
    if (!deferredPrompt) {
      alert(
        "Install option is not available right now. Use your browser's Install App or Add to Home Screen option."
      );
      return;
    }

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setDeferredPrompt(null);
    }
  };

  if (status === "checking") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />

          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            Verifying your email...
          </h1>
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-black">
        <div className="max-w-md w-full text-center">

          <XCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Verification Failed
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            This verification link is invalid or has expired.
            Please create a new verification request.
          </p>

          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold"
          >
            Back to Signup
            <ArrowRight size={18} />
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-black">

      <div className="max-w-lg w-full text-center">

        <div className="mb-6">
          <CheckCircle2 className="w-24 h-24 text-green-500 mx-auto" />
        </div>

        <div className="flex items-center justify-center gap-2 mb-4">
          <ShieldCheck className="text-blue-500" size={22} />

          <span className="text-sm font-semibold text-blue-500">
            RESQ-AI VERIFIED
          </span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Email Verified! 🎉
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
          Your RESQ-AI account has been successfully verified.
          You don't need to login to install the offline app.
        </p>

        <button
          onClick={handleInstall}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
        >
          <Download size={22} />
          Install RESQ-AI
        </button>

        <p className="text-sm text-gray-500 dark:text-gray-500 mt-5">
          You can login later to access your account and synced data.
        </p>

      </div>

    </div>
  );
};

export default VerifyEmail;