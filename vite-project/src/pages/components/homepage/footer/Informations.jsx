import React from 'react';

const Informations = () => {
    return (
        <div className="informations">
            <div><img src="/images/icons/Map.svg"/>Square des Martyrs, 6000 Charleroi</div>
            <div className="fax__tel">
                <div><img src="/images/icons/Tel.svg"/>(123) 456-7890</div>
                <div><img src="/images/icons/Fax.svg"/>(123) 456-7890</div>
            </div>
            <div className="informations__social">
                <span>Social Media</span>
                <span><img src="/images/icons/Facebook.svg"/>
                <img src="/images/icons/Twitter.svg"/>
                <img src="/images/icons/Linkedin.svg"/>
                <img src="/images/icons/Youtube.svg"/>
                <img src="/images/icons/Instagram.svg"/>
                <img src="/images/icons/Pinterest.svg"/>
                <img src="/images/icons/Wifi.svg"/>
                </span>
                </div>
        </div>
    );
};

export default Informations;