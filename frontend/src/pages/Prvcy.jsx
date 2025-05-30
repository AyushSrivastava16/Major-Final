import React from "react";

const Prvcy = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-blue-100 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-200">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-500 text-sm mb-8">
          Effective Date: [Jan 2025]
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6 text-sm text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-indigo-600 mb-2 hover:text-indigo-700 transition-colors">
                1. Information We Collect
              </h2>
              <p>
                We collect personal information like your name and email, along
                with exercise data such as posture and movement details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-600 mb-2 hover:text-indigo-700 transition-colors">
                2. How We Use Your Information
              </h2>
              <p>
                Your information is used to provide personalized feedback, send
                updates, and improve the app’s functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-600 mb-2 hover:text-indigo-700 transition-colors">
                3. Data Sharing
              </h2>
              <p>
                We do not sell your data. We may share it with service providers
                or when required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-600 mb-2 hover:text-indigo-700 transition-colors">
                4. Data Security
              </h2>
              <p>
                We implement reasonable security measures but cannot guarantee
                absolute protection from breaches.
              </p>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6 text-sm text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-indigo-600 mb-2 hover:text-indigo-700 transition-colors">
                5. Your Rights
              </h2>
              <p>
                You can access, correct, or delete your data at any time. You
                may also opt-out of marketing communications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-600 mb-2 hover:text-indigo-700 transition-colors">
                6. Third-Party Links
              </h2>
              <p>
                Our app may contain links to third-party sites, and we are not
                responsible for their privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-600 mb-2 hover:text-indigo-700 transition-colors">
                7. Children’s Privacy
              </h2>
              <p>
                We do not knowingly collect data from children under 13. If we
                do, we will delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-600 mb-2 hover:text-indigo-700 transition-colors">
                8. Changes to Policy
              </h2>
              <p>
                We may update this policy from time to time. Please check this
                page periodically for any changes.
              </p>
            </section>
          </div>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2 hover:text-indigo-700 transition-colors">
            Contact Us
          </h2>
          <p>If you have any questions, feel free to reach out:</p>
          <ul className="list-none pl-0">
            <li>
              <strong>Email:</strong> support@fittrack.com
            </li>
            <li>
              <strong>Phone:</strong> +91 9155556386
            </li>
            <li>
              <strong>Address:</strong> Block F, FitTrack, Noida, India
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Prvcy;
