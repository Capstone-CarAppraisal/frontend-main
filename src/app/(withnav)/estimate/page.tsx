import SideBar from "@/components/Sidebar/Sidebar";

export default function EstimatePage() {
  return (
    <main>
      <div>
        <div className="flex flex-col bg-white border shadow-sm rounded-xl m-10 p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            Card title
          </h3>
          <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
            Card subtitle
          </p>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            Card link
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
