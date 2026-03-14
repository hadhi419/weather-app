function SignUpDisabled() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Access Restricted
        </h1>

        <p className="text-gray-700 mb-3">
          Your account is not on the approved whitelist for this application.
        </p>

        <p className="text-gray-500 text-sm mb-6">
          If you believe this is a mistake, please contact the system
          administrator to request access.
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition duration-200"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default SignUpDisabled;
