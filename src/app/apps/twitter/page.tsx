export default function TwitterSettings() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-black">Twitter (X) App Settings</h1>
      <p className="mt-2 text-gray-600">Connect your X account to automate your tweets and threads.</p>
      
      <div className="mt-6 p-4 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50">
        <button className="bg-black text-white px-6 py-2 rounded font-semibold hover:bg-gray-800 transition-colors">
          Connect X Account
        </button>
      </div>

      <div className="mt-10">
        <h3 className="font-semibold text-lg">Connected Accounts</h3>
        <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
           <p className="text-sm text-gray-500 italic">No X accounts connected. High-quality posts start here!</p>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Tip:</strong> Ensure your X Developer App has <strong>Read and Write</strong> permissions enabled in the settings, or posting will fail.
        </p>
      </div>
    </div>
  );
}