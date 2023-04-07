import React from 'react';

const Informations = () => {
    return (
        <div className="informations">
            <div><img src="/images/icons/Map.svg" alt="address"/>Square des Martyrs, 6000 Charleroi</div>
            <div className="fax__tel">
                <div><img src="/images/icons/Tel.svg" alt="phone"/>(123) 456-7890</div>
                <div><img src="/images/icons/Fax.svg" alt="fax"/>(123) 456-7890</div>
            </div>
            <div className="informations__social">
                <span>Social Media</span>
                <span className="informations__icons"><img src="/images/icons/Facebook.svg" alt="facebook"/>
                <img src="/images/icons/Twitter.svg" alt="twitter"/>
                <img src="/images/icons/Linkedin.svg" alt="linkedin"/>
                <img src="/images/icons/Youtube.svg" alt="youtube"/>
                <img src="/images/icons/Instagram.svg" alt="instagram"/>
                <img src="/images/icons/Pinterest.svg" alt="pinterest"/>
                <img src="/images/icons/Wifi.svg" alt="rss flux"/>
                </span>
                </div>
        </div>
    );
};

export default Informations;