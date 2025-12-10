export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Document Container */}
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          {/* Document Header */}
          <div className="bg-[#4447a9] px-8 py-6">
            <h1 className="text-3xl font-bold text-white text-center">
              Privacy Policy
            </h1>
            <p className="text-blue-100 text-center mt-2">B00kmarked - Visual Bookmark Manager</p>
          </div>

          {/* Document Content */}
          <div className="px-8 py-8 sm:px-12 sm:py-10">
            {/* Last Updated */}
            <div className="text-sm text-gray-500 mb-8 pb-4 border-b border-gray-200">
              <strong>Last Updated:</strong> December 10, 2025
            </div>

            {/* Introduction */}
            <section className="mb-8 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                B00kmarked ("we", "our", or "the extension") is committed to protecting your privacy.
                This Privacy Policy explains how B00kmarked handles your data when you use our Chrome browser extension.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-8 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Bookmark Data</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  B00kmarked accesses your Chrome browser bookmarks to display them within the extension interface.
                  This data includes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Bookmark titles</li>
                  <li>Bookmark URLs</li>
                  <li>Folder structure and organization</li>
                  <li>Bookmark metadata (creation date, favicon, etc.)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Local Storage</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The extension stores the following data locally on your device:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>User preferences and settings</li>
                  <li>Cached website screenshot images</li>
                  <li>Folder expansion states</li>
                  <li>Search history within the extension</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Website Screenshots</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide visual previews of your bookmarked websites, B00kmarked may send bookmark URLs
                  to our screenshot generation service (v124.ayotomcs.me) to create preview images.
                </p>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-8 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">On-Device Processing</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>All bookmark data is processed locally on your device</li>
                  <li>Bookmarks are read directly from Chrome&apos;s bookmark API</li>
                  <li>No bookmark data is transmitted to external servers except for screenshot generation</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Screenshot Generation</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Bookmark URLs are sent to v124.ayotomcs.me only to generate screenshot previews</li>
                  <li>Screenshots are cached locally to minimize repeated requests</li>
                  <li>No personal information or browsing history is transmitted beyond the URL itself</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Local Storage</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Preferences and cached data are stored locally using Chrome&apos;s storage API</li>
                  <li>This data never leaves your device</li>
                  <li>You can clear this data at any time by uninstalling the extension</li>
                </ul>
              </div>
            </section>

            {/* Data Sharing and Third Parties */}
            <section className="mb-8 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Sharing and Third Parties</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">We Do Not:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Sell your personal data to third parties</li>
                  <li>Share your bookmark data with advertisers</li>
                  <li>Track your browsing behavior</li>
                  <li>Collect analytics or telemetry data</li>
                  <li>Store your bookmarks on remote servers</li>
                  <li>Share your information with any third parties except as described below</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Screenshot Service</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>The only external service we use is v124.ayotomcs.me for screenshot generation</li>
                  <li>Only bookmark URLs are sent to this service</li>
                  <li>Screenshots are generated on-demand and cached locally</li>
                  <li>No user identification or tracking occurs</li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-8 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We implement security measures to protect your data:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>All data processing occurs locally on your device</li>
                <li>Communication with screenshot service uses HTTPS encryption</li>
                <li>No authentication or user accounts required</li>
                <li>No cookies or tracking mechanisms used</li>
                <li>Content Security Policy enforced to prevent unauthorized access</li>
              </ul>
            </section>

            {/* Your Rights and Choices */}
            <section className="mb-8 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights and Choices</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Access and Control</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You have full control over your data:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>View all your bookmarks through Chrome&apos;s native bookmark manager</li>
                  <li>Clear cached data by uninstalling the extension</li>
                  <li>Disable screenshot previews in extension settings (if applicable)</li>
                  <li>Export or backup bookmarks using Chrome&apos;s built-in tools</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Deletion</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  To delete all data associated with B00kmarked:
                </p>
                <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                  <li>Uninstall the extension from Chrome</li>
                  <li>This will remove all cached screenshots and preferences</li>
                  <li>Your original bookmarks remain in Chrome unchanged</li>
                </ol>
              </div>
            </section>

            {/* Permissions Explained */}
            <section className="mb-8 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Permissions Explained</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                B00kmarked requests the following Chrome permissions:
              </p>
              <ul className="list-none text-gray-700 space-y-3">
                <li>
                  <strong className="text-gray-900">bookmarks:</strong> Required to read and display your Chrome bookmarks
                </li>
                <li>
                  <strong className="text-gray-900">tabs:</strong> Used to open bookmarked websites when clicked
                </li>
                <li>
                  <strong className="text-gray-900">storage:</strong> Stores user preferences and cached screenshots locally
                </li>
                <li>
                  <strong className="text-gray-900">alarms:</strong> Manages screenshot cache refresh timing
                </li>
                <li>
                  <strong className="text-gray-900">activeTab:</strong> Enables interaction with the currently active tab
                </li>
                <li>
                  <strong className="text-gray-900">contextMenus:</strong> Provides right-click menu options for bookmarks
                </li>
                <li>
                  <strong className="text-gray-900">scripting:</strong> Allows basic functionality for bookmark interaction
                </li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                B00kmarked does not knowingly collect personal information from children under 13.
                The extension is designed for general audiences and does not require any personal information to function.
              </p>
            </section>

            {/* Changes to This Privacy Policy */}
            <section className="mb-8 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We may update this Privacy Policy from time to time. We will notify users of any material changes by:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Updating the &quot;Last Updated&quot; date at the top of this policy</li>
                <li>Posting a notice in the extension&apos;s Chrome Web Store listing</li>
                <li>Providing an in-extension notification (if applicable)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Your continued use of B00kmarked after changes constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            {/* Open Source and Transparency */}
            <section className="mb-8 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Open Source and Transparency</h2>
              <p className="text-gray-700 leading-relaxed">
                B00kmarked is committed to transparency. Our code and privacy practices are open for review,
                and we welcome community feedback on our privacy measures.
              </p>
            </section>

            {/* Contact Us */}
            <section className="mb-8 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact us:
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong>{' '}
                <a href="mailto:hello@ayotomcs.me" className="text-blue-600 hover:text-blue-700 underline">
                  hello@ayotomcs.me
                </a>
              </p>
              <p className="text-gray-700 mt-3">
                We will respond to all privacy-related inquiries within 48 hours.
              </p>
            </section>

            {/* Compliance */}
            <section className="mb-8 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compliance</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                This Privacy Policy complies with:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Chrome Web Store Developer Program Policies</li>
                <li>General Data Protection Regulation (GDPR) principles</li>
                <li>California Consumer Privacy Act (CCPA) guidelines</li>
              </ul>
            </section>

            {/* Your Consent */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Consent</h2>
              <p className="text-gray-700 leading-relaxed">
                By installing and using B00kmarked, you consent to this Privacy Policy and our handling of your data
                as described herein.
              </p>
            </section>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t-2 border-gray-300 text-center">
              <h3 className="text-lg font-semibold text-gray-900">B00kmarked - Visual Bookmark Manager</h3>
              <p className="text-gray-600 mt-2">
                Privacy-focused, locally-processed bookmark organization for Chrome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}