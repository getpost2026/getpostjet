import Link from 'next/link';

const apps = [
  { name: 'Facebook', id: 'facebook', icon: 'FB' },
  { name: 'LinkedIn', id: 'linkedin', icon: 'LI' },
  { name: 'Twitter (X)', id: 'twitter', icon: 'X' },
  { name: 'Instagram', id: 'instagram', icon: 'IG' },
  { name: 'YouTube', id: 'youtube', icon: 'YT' },
  { name: 'Threads', id: 'threads', icon: 'TH' },
  { name: 'Slack', id: 'slack', icon: 'SL' },
  { name: 'Pinterest', id: 'pinterest', icon: 'PI' },
  { name: 'Reddit', id: 'reddit', icon: 'RD' },
  { name: 'Discord', id: 'discord', icon: 'DC' },
  { name: 'WhatsApp', id: 'whatsapp', icon: 'WA' },
  { name: 'Telegram', id: 'telegram', icon: 'TG' },
  { name: 'Google Biz', id: 'google-biz', icon: 'GB' },
  { name: 'Resend', id: 'resend', icon: 'RS' },
  { name: 'Dev.to', id: 'dev-to', icon: 'DV' },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed left-0 top-0 overflow-y-auto p-4">
      <h2 className="text-xl font-bold mb-8 text-blue-400">MultiPost SaaS</h2>
      <nav className="space-y-2">
        <Link href="/" className="block p-2 hover:bg-gray-800 rounded text-green-400 font-bold">
          + Create New Post
        </Link>
        <hr className="border-gray-700 my-4" />
        <p className="text-xs text-gray-500 uppercase font-bold px-2">Social Apps</p>
        {apps.map((app) => (
          <Link 
            key={app.id} 
            href={`/apps/${app.id}`} 
            className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded transition-all"
          >
            <span className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded text-xs font-bold">
              {app.icon}
            </span>
            <span>{app.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}