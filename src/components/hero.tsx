export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image with Gradients at Top and Bottom */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.9)), url('hero.jpg')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center p-8">
        <h1 className="text-5xl font-bold">Welcome to My Site</h1>
        <p className="text-xl mt-4">Your adventure starts here.</p>
        <button className="mt-8 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
}