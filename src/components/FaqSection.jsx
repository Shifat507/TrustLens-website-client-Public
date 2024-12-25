import Lottie from 'lottie-react';
import React from 'react';
import faqImg from '../assets/FaQ.json'

const FaqSection = () => {
    return (
        
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20 '>
                <div className='md:col-span-2'>
                    <div className="collapse collapse-arrow bg-green-100">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">What is TrustLens?</div>
                        <div className="collapse-content">
                            <p>TrustLens is a platform designed to foster collaboration and transparency by connecting organizations, businesses, and individuals. We aim to build trust through meaningful partnerships and innovative solutions.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-yellow-100">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">How can I partner with TrustLens?</div>
                        <div className="collapse-content">
                            <p>To become a partner, visit our "Meet Our Partners" section and click on the partnership inquiry link. Fill out the form with your details, and our team will get back to you shortly.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-green-100">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">What services does TrustLens provide?</div>
                        <div className="collapse-content">
                            <p>TrustLens offers a range of services, including collaborative project management, trust-building frameworks, and visibility tools for enhancing organizational partnerships.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-yellow-100">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">Who are the key partners of TrustLens?</div>
                        <div className="collapse-content">
                            <p>Our key partners are highlighted in the "Meet Our Partners" section. We collaborate with reputable organizations that align with our vision of trust, transparency, and growth.</p>
                        </div>
                    </div>
                </div>
                <div >
                    <Lottie animationData={faqImg} className='w-72' />
                </div>
            </div>
        
    );
};

export default FaqSection;