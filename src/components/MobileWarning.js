// app/MobileWarning.js

export default function MobileWarning() {
    return (
      <div className="h-screen flex justify-center items-center bg-blue-200 text-center p-4">
        <div className="max-w-md bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Please Open on Desktop or Laptop</h1>
          <p className="text-lg text-gray-700">
            This website is designed with animations and effects that are best viewed on a desktop or laptop.
            Please open it on a larger screen for a better experience.
          </p>
        </div>
      </div>
    );
  }
  