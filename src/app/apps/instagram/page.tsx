export default function InstagramSettings() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
        Instagram Business Settings
      </h1>
      <p className="mt-2 text-gray-600">Connect your Instagram Business account via Facebook to post Photos and Reels.</p>
      
      <div className="mt-6 p-4 border-2 border-dashed border-pink-200 rounded-xl bg-pink-50">
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded font-semibold shadow-md">
          Connect Instagram
        </button>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4">
        <div className="p-4 bg-white border rounded-lg shadow-sm">
          <h4 className="font-bold">Media Quality</h4>
          <p className="text-xs text-gray-400">Cloudinary optimization is active.</p>
        </div>
        <div className="p-4 bg-white border rounded-lg shadow-sm">
          <h4 className="font-bold">Auto-Hashtags</h4>
          <p className="text-xs text-gray-400">Enabled for all posts.</p>
        </div>
      </div>
    </div>
  );
}