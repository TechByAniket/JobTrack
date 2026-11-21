
import { useEffect } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";

function Toast({ message, type = "success", onClose }) {
  const isSuccess = type === "success";

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <div
      className={`flex items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-lg ${
        isSuccess ? "border-green-200" : "border-red-200"
      }`}
    >
      {isSuccess ? (
        <CheckCircle className="text-green-500 shrink-0" size={20} />
      ) : (
        <XCircle className="text-red-500 shrink-0" size={20} />
      )}

      <p className="text-sm font-medium text-slate-700">{message}</p>

      <button
        onClick={onClose}
        className="ml-auto text-slate-400 hover:text-slate-700"
      >
        <X size={16} />
      </button>
    </div>
  );
}

export default Toast;
