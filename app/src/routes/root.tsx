export default function Root() {
  return (
    <>
     {/* Create Bot Button */}
      <div>
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-end sm:flex-nowrap">
          <div className="ml-4 mt-2 flex-shrink-0">
            <button
              type="button"
              className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
            Create new bot
            </button>
          </div>
        </div>
      </div>
    </>
  );
}