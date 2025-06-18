import React from "react";

export default function Home() {
  return (
    <main className="bg-gray-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 px-6 text-center relative">
        <div className="mx-auto mb-6 w-32 md:w-48 bg-teal-400 text-black font-black rounded-full py-4 px-6 text-xl uppercase">
          GS Vend
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide uppercase text-teal-400">Vending for Today</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          GS Vend brings premium vending machines to high-traffic locations — fully stocked, fully serviced, and 100% hassle-free.
        </p>
        <p className="text-sm">Contact us at <a href="mailto:scottc@gsvend.com" className="underline text-teal-400">scottc@gsvend.com</a></p>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold mb-6 text-black">Why GS Vend?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto text-black">
          <div>📍 Locally operated in Friendswood, TX</div>
          <div>🥤 Healthy + popular snack options</div>
          <div>🛠️ Zero cost, zero maintenance for the host</div>
          <div>✅ Professional setup and support included</div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-black">How It Works</h2>
        <ol className="list-decimal list-inside space-y-3 max-w-xl mx-auto text-left text-gray-800">
          <li>You apply to host a machine</li>
          <li>We scout and approve your location</li>
          <li>We install and maintain the machine</li>
          <li>You enjoy full-service vending at no cost</li>
        </ol>
      </section>

      {/* Application CTA */}
      <section id="apply" className="py-16 px-6 bg-teal-400 text-center">
        <h2 className="text-4xl font-bold mb-4 text-black">Apply to Host a Machine</h2>
        <p className="mb-4 text-lg text-black max-w-2xl mx-auto">
          We’re currently placing machines in Southern Houston hot spots. Don’t miss your chance to be part of our expansion.
        </p>
        <a href="mailto:scottc@gsvend.com" className="bg-black text-white px-8 py-4 text-lg rounded-full font-semibold shadow hover:bg-gray-800 transition">
          Email scottc@gsvend.com to Apply
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black text-white text-center">
        <p>Contact: <a href="mailto:scottc@gsvend.com" className="underline text-teal-400">scottc@gsvend.com</a></p>
        <p className="text-sm mt-2">&copy; 2025 GS Vend. All rights reserved.</p>
      </footer>
    </main>
  );
}
