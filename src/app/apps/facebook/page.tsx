export default function FacebookSettings() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-blue-600">Facebook App Settings</h1>
      <p className="mt-2 text-gray-600">Manage your Facebook pages and tokens here.</p>
      
      <div className="mt-6 p-4 border-2 border-dashed border-blue-200 rounded-xl">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Connect Facebook Account
        </button>
      </div>

      <div className="mt-10">
        <h3 className="font-semibold">Linked Pages</h3>
        <p className="text-sm text-gray-400">No pages linked yet.</p>
      </div>
    </div>
  );
}