import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <main className="font-sans">
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Smart. Simple. Profitable.</h1>
        <p className="text-lg mb-6">GS Vend brings premium vending machines to high-traffic locations — fully stocked, fully serviced, and 100% hassle-free.</p>
        <a href="#apply" className="bg-yellow-400 text-black px-6 py-3 rounded">Apply to Host a Machine</a>
      </section>
      <section className="py-12 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Why GS Vend?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div>📍 Locally operated in Friendswood, TX</div>
          <div>🥤 Healthy + popular snack options</div>
          <div>🔒 No contracts, no risk</div>
          <div>💸 You earn while we manage everything</div>
        </div>
      </section>
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <ol className="list-decimal list-inside space-y-3 max-w-xl mx-auto text-left">
          <li>You apply to host a machine</li>
          <li>We scout and approve your location</li>
          <li>We install and maintain the machine</li>
          <li>You receive monthly payouts</li>
        </ol>
      </section>
      <section id="apply" className="py-12 px-6 bg-yellow-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Apply Now</h2>
        <p className="mb-6">We’re currently placing machines in South Houston. Don’t miss your chance to join the pilot program.</p>
        <a href="mailto:scottc@gsvend.com" className="bg-blue-900 text-white px-6 py-3 rounded">Email Us to Apply</a>
      </section>
      <footer className="py-8 px-6 bg-gray-800 text-white text-center">
        <p>Contact: <a href="mailto:scottc@gsvend.com" className="underline">scottc@gsvend.com</a></p>
        <p className="text-sm mt-2">&copy; {new Date().getFullYear()} GS Vend. All rights reserved.</p>
      </footer>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));