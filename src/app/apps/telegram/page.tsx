export default function TelegramSettings() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-blue-500">Telegram Bot Settings</h1>
      <p className="mt-2 text-gray-600">Connect your Telegram Bot to broadcast messages to channels and groups.</p>
      
      <div className="mt-6 p-6 border-2 border-dashed border-blue-200 rounded-2xl bg-blue-50">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Bot Token</label>
            <input 
              type="password" 
              placeholder="123456789:ABCDefgh..." 
              className="mt-1 w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600 transition">
            Save Bot Token
          </button>
        </div>
      </div>

      <div className="mt-10 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-semibold text-gray-700">How to get a token?</h3>
        <p className="text-sm text-gray-500 mt-1">Message @BotFather on Telegram to create a bot and get your API token.</p>
      </div>
    </div>
  );
}