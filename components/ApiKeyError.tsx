import React from 'react';

interface ApiKeyErrorProps {
  feature?: string;
}

const ApiKeyError: React.FC<ApiKeyErrorProps> = ({ feature = 'This feature' }) => {
  return (
    <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-6">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-bold text-amber-900 mb-2">
            Google API Key Required
          </h3>
          <p className="text-sm text-amber-800 mb-3">
            {feature} requires a Google Gemini API key to function. Please add your API key to continue.
          </p>
          <div className="bg-white rounded-lg p-4 border border-amber-200">
            <p className="text-xs font-semibold text-amber-900 mb-2">To set up your API key:</p>
            <ol className="text-xs text-amber-800 space-y-1 list-decimal list-inside">
              <li>Get your API key from <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer" className="underline font-semibold">Google AI Studio</a></li>
              <li>Add it to your <code className="bg-amber-100 px-1.5 py-0.5 rounded">.env.local</code> file as <code className="bg-amber-100 px-1.5 py-0.5 rounded">GEMINI_API_KEY=your_key_here</code></li>
              <li>Restart your development server</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyError;
