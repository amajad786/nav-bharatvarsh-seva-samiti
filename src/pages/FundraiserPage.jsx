import React from 'react'


import HeroSection from "../components/HeroSection";
import ContributionBox from "../components/ContributionBox";
import AboutFundraiser from "../components/AboutSections";
import Documents from "../components/MedicalDocuments";
import OtherMethods from "../components/OtherMethods";
import Comments from "../components/Comments";
import Referral from "../components/Referral";
import SuggestedFundraisers from "../components/SuggestedFundraisers";
import ProgressSection from "../components/ProgressSection";
import CampaignerInfo from "../components/CampaignerInfo";
import FundraisingTeam from "../components/FundraisingTeam";
import SupportersList from "../components/SupportersList";


export const FundraiserPage = () => {
    return (
        <>
            <div className="font-sans bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left Content */}
                    <div className="lg:col-span-2 space-y-6">
                        <HeroSection />
                        <AboutFundraiser />
                        <Documents />
                        <OtherMethods />
                        <Comments />
                        <Referral />
                        <SuggestedFundraisers />
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        <ContributionBox />
                        <ProgressSection />
                        <CampaignerInfo />
                        <FundraisingTeam />
                        <SupportersList />
                    </div>
                </div>
            </div>


        </>
    )
}
