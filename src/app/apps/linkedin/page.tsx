export default function LinkedInSettings() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-blue-800">LinkedIn App Settings</h1>
      <p className="mt-2 text-gray-600">Connect your LinkedIn profile or company pages to post content.</p>
      
      <div className="mt-6 p-4 border-2 border-dashed border-blue-100 rounded-xl bg-blue-50">
        <button className="bg-blue-800 text-white px-6 py-2 rounded font-semibold hover:bg-blue-900 transition-colors">
          Connect LinkedIn Account
        </button>
      </div>

      <div className="mt-10">
        <h3 className="font-semibold text-lg">Integrated Profiles / Pages</h3>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
           <p className="text-sm text-gray-500 italic">No LinkedIn accounts linked yet. Click the button above to start.</p>
        </div>
      </div>

      <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-sm text-amber-800">
          <strong>Note:</strong> LinkedIn requires <strong>w_member_social</strong> permissions to post on your behalf.
        </p>
      </div>
    </div>
  );
}