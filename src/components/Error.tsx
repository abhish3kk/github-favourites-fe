export const Error = () => {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center text-red-500 bg-white dark:bg-gray-800"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </button>
    </div>
  );
};
