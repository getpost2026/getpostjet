export default function YouTubeSettings() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-red-600">YouTube Channel Settings</h1>
      <p className="mt-2 text-gray-600">Upload and schedule your Videos or Shorts directly.</p>
      
      <div className="mt-6 p-4 border-2 border-dashed border-red-100 rounded-xl bg-red-50">
        <button className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700">
          Connect YouTube Channel
        </button>
      </div>

      <div className="mt-10">
        <h3 className="font-semibold">Channel Analytics Summary</h3>
        <div className="mt-4 p-8 text-center bg-gray-50 border rounded-lg italic text-gray-400">
          Connect your account to see subscriber and view counts here.
        </div>
      </div>
    </div>
  );
}