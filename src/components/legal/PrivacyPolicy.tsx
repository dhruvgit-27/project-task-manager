import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';

export const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-6">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Last updated: January 2025</p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 p-8 space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1. Information We Collect</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Task Manager collects the following types of information:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
            <li><strong>Personal Information:</strong> Name, email address when you register</li>
            <li><strong>Task Data:</strong> Tasks, descriptions, due dates, categories, and priorities you create</li>
            <li><strong>Session Data:</strong> Authentication tokens and login status for app functionality</li>
            <li><strong>Usage Data:</strong> How you interact with the application features</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2. How We Use Your Information</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            We use the collected information for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
            <li>To provide and maintain the Task Manager service</li>
            <li>To authenticate your identity and manage your account</li>
            <li>To store and organize your personal tasks and data</li>
            <li>To send you notifications about your tasks and deadlines</li>
            <li>To improve our application and user experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3. Data Storage and Security</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Your personal information and task data are stored securely using industry-standard practices. We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. Currently, data is stored locally in your browser's localStorage for optimal privacy and performance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4. Data Sharing and Third Parties</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            We are committed to protecting your privacy. We do not:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
            <li>Sell your personal information to third parties</li>
            <li>Share your task data with external companies</li>
            <li>Use your information for advertising purposes</li>
            <li>Access your data unless necessary for technical support</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5. Session Management</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Session data (such as login tokens and authentication flags) is used solely for maintaining your logged-in state and providing seamless access to your tasks. This data is automatically cleared when you log out and is not shared with any third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6. Your Rights</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
            <li>Access and review your personal data</li>
            <li>Update or correct your information</li>
            <li>Delete your account and associated data</li>
            <li>Export your task data</li>
            <li>Withdraw consent for data processing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7. Data Retention</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We retain your personal information and task data only as long as necessary to provide you with our services. You can delete your account and all associated data at any time through the application settings or by contacting us directly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">8. Changes to This Policy</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">9. Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <div className="mt-3 text-gray-700 dark:text-gray-300">
            <p>Email: contacttaskmanagerhere@gmail.com</p>
            <p>Phone: 6395227506</p>
          </div>
        </section>
      </div>
    </div>
  );
};