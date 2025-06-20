import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';

export const TermsOfService: React.FC = () => {
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
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Terms of Service</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Last updated: January 2025</p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 p-8 space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-700 dark:text-gray-300">
            By accessing and using Task Manager, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2. Use License</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Permission is granted to temporarily use Task Manager for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained in the application</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3. User Responsibilities</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            As a user of Task Manager, you agree to:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
            <li>Not misuse, spam, or engage in unauthorized data access</li>
            <li>Take full responsibility for your own task content and data</li>
            <li>Not use the app for harmful, illegal, or malicious activities</li>
            <li>Maintain the security of your account credentials</li>
            <li>Report any security vulnerabilities or bugs responsibly</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4. Prohibited Activities</h2>
          <p className="text-gray-700 dark:text-gray-300">
            You may not use Task Manager to engage in activities that are illegal, harmful, or violate the rights of others. This includes but is not limited to harassment, spam, unauthorized access attempts, or any form of malicious behavior.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5. Disclaimer</h2>
          <p className="text-gray-700 dark:text-gray-300">
            The materials in Task Manager are provided on an 'as is' basis. Task Manager makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6. Limitations</h2>
          <p className="text-gray-700 dark:text-gray-300">
            In no event shall Task Manager or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Task Manager, even if Task Manager or its authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7. Revisions</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Task Manager may revise these terms of service at any time without notice. By using this application, you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">8. Contact Information</h2>
          <p className="text-gray-700 dark:text-gray-300">
            If you have any questions about these Terms of Service, please contact us at contacttaskmanagerhere@gmail.com or call 6395227506.
          </p>
        </section>
      </div>
    </div>
  );
};