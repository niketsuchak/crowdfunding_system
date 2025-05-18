import React, { useEffect, useState, useContext } from "react";
import { CrowdFundingContext } from "../Context/CroudFunding";
import { Card, PupUp } from "../Components";

const Campaigns = () => {
  const { getCampaigns, donate, getDonations } = useContext(CrowdFundingContext);
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, active, ended
  const [openModal, setOpenModal] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  useEffect(() => {
    loadCampaigns();
  }, []);

  const loadCampaigns = async () => {
    try {
      const data = await getCampaigns();
      setCampaigns(data || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setCampaigns([]);
      setLoading(false);
    }
  };

  const handleDonateClick = (campaign) => {
    setSelectedCampaign(campaign);
    setOpenModal(true);
  };

  const filterCampaigns = (campaigns) => {
    if (filter === 'all') return campaigns;
    
    const now = new Date().getTime();
    if (filter === 'active') {
      return campaigns.filter(campaign => {
        const deadlineNotPassed = new Date(campaign.deadline).getTime() > now;
        const targetNotReached = parseFloat(campaign.amountCollected) < parseFloat(campaign.target);
        return deadlineNotPassed && targetNotReached;
      });
    }
    // Ended campaigns are either past deadline or have reached/exceeded target
    return campaigns.filter(campaign => {
      const deadlinePassed = new Date(campaign.deadline).getTime() <= now;
      const targetReached = parseFloat(campaign.amountCollected) >= parseFloat(campaign.target);
      return deadlinePassed || targetReached;
    });
  };

  // Add a helper function to check if campaign is ended
  const isCampaignEnded = (campaign) => {
    const now = new Date().getTime();
    const deadlinePassed = new Date(campaign.deadline).getTime() <= now;
    const targetReached = parseFloat(campaign.amountCollected) >= parseFloat(campaign.target);
    return deadlinePassed || targetReached;
  };

  return (
    <div className="min-h-screen py-16 backgroundMain">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Explore Campaigns
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover innovative projects and ideas from creators around the world. 
              Support the campaigns you believe in and help make dreams reality.
            </p>
          </div>

          {/* Filter Section */}
          <div className="flex justify-center mb-8 space-x-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-lg font-medium ${
                filter === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Campaigns
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-6 py-2 rounded-lg font-medium ${
                filter === 'active'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter('ended')}
              className={`px-6 py-2 rounded-lg font-medium ${
                filter === 'ended'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Ended
            </button>
          </div>

          {/* Campaigns Grid */}
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
              <p className="text-gray-400 mt-4">Loading campaigns...</p>
            </div>
          ) : !campaigns || campaigns.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No campaigns found</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filterCampaigns(campaigns).map((campaign, i) => (
                <div key={i} className="bg-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        {campaign.title}
                      </h3>
                      {isCampaignEnded(campaign) && (
                        <span className="px-2 py-1 text-xs font-semibold bg-red-500/20 text-red-400 rounded-full">
                          Ended
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {campaign.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <span>Target: {campaign.target} ETH</span>
                      <span>Raised: {campaign.amountCollected} ETH</span>
                    </div>
                    <div className="mt-4 h-2 bg-gray-700 rounded-full">
                      <div
                        className="h-full bg-purple-600 rounded-full"
                        style={{
                          width: `${Math.min(
                            (campaign.amountCollected / campaign.target) * 100,
                            100
                          )}%`
                        }}
                      />
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                      <span className="text-sm text-gray-400">
                        {new Date(campaign.deadline).toLocaleDateString()}
                      </span>
                      <div className="space-x-2">
                        <button
                          onClick={() => handleDonateClick(campaign)}
                          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                        >
                          Donate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Donation Modal */}
      {openModal && (
        <PupUp
          setOpenModel={setOpenModal}
          getDonations={getDonations}
          donate={selectedCampaign}
          donateFunction={donate}
        />
      )}
    </div>
  );
};

export default Campaigns; 