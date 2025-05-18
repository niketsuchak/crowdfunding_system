import React, { useState, useContext } from "react";
import { CrowdFundingContext } from "../Context/CroudFunding";

const CreateCampaign = () => {
  const { createCampaign } = useContext(CrowdFundingContext);
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });

  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      const data = await createCampaign(campaign);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen py-16 backgroundMain">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Create Your Campaign
            </h1>
            <p className="text-gray-300">
              Launch your crowdfunding campaign and bring your ideas to life through the power of blockchain.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-700">
            <form className="space-y-6" onSubmit={createNewCampaign}>
              <div>
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-200">
                  Campaign Title
                </label>
                <input
                  id="title"
                  onChange={(e) => setCampaign({ ...campaign, title: e.target.value })}
                  placeholder="Enter a memorable title for your campaign"
                  required
                  type="text"
                  className="w-full px-4 py-3 text-gray-200 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500"
                />
              </div>

              <div>
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-200">
                  Description
                </label>
                <textarea
                  id="description"
                  onChange={(e) => setCampaign({ ...campaign, description: e.target.value })}
                  placeholder="Describe your campaign in detail. What are your goals? How will you use the funds?"
                  required
                  rows="6"
                  className="w-full px-4 py-3 text-gray-200 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-200">
                    Target Amount (ETH)
                  </label>
                  <input
                    id="amount"
                    onChange={(e) => setCampaign({ ...campaign, amount: e.target.value })}
                    placeholder="0.0"
                    required
                    type="number"
                    step="0.01"
                    className="w-full px-4 py-3 text-gray-200 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="deadline" className="block mb-2 text-sm font-medium text-gray-200">
                    Campaign Deadline
                  </label>
                  <input
                    id="deadline"
                    onChange={(e) => setCampaign({ ...campaign, deadline: e.target.value })}
                    required
                    type="date"
                    className="w-full px-4 py-3 text-gray-200 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-6 py-4 text-lg font-medium text-white transition duration-200 bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                >
                  Launch Campaign
                </button>

                <p className="mt-4 text-xs text-gray-400 text-center">
                  By creating a campaign, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign; 