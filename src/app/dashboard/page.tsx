import Link from 'next/link';

function Dashboard () {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Welcome to the Weather Dashboard</h1>
      <nav className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <ul className="space-y-4">
          <li>
            <Link
              href="/ssg-weather"
              className="block text-blue-500 hover:text-blue-700 text-lg font-medium transition duration-200"
            >
              SSG Weather
            </Link>
          </li>
          <li>
            <Link
              href="/ssr-weather"
              className="block text-blue-500 hover:text-blue-700 text-lg font-medium transition duration-200"
            >
              SSR Weather
            </Link>
          </li>
          <li>
            <Link
              href="/isr-weather"
              className="block text-blue-500 hover:text-blue-700 text-lg font-medium transition duration-200"
            >
              ISR Weather (updates every 10 minutes)
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
