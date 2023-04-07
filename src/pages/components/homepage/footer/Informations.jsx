import React from 'react';

const Informations = () => {
    return (
        <div className="informations">
            <div><img src="/public/images/icons/Map.svg" alt="address"/>Square des Martyrs, 6000 Charleroi</div>
            <div className="fax__tel">
                <div><img src="/public/images/icons/Tel.svg" alt="phone"/>(123) 456-7890</div>
                <div><img src="/public/images/icons/Fax.svg" alt="fax"/>(123) 456-7890</div>
            </div>
            <div className="informations__social">
                <span>Social Media</span>
                <span className="informations__icons"><img src="/public/images/icons/Facebook.svg" alt="facebook"/>
                <img src="/public/images/icons/Twitter.svg" alt="twitter"/>
                <img src="/public/images/icons/Linkedin.svg" alt="linkedin"/>
                <img src="/public/images/icons/Youtube.svg" alt="youtube"/>
                <img src="/public/images/icons/Instagram.svg" alt="instagram"/>
                <img src="/public/images/icons/Pinterest.svg" alt="pinterest"/>
                <img src="/public/images/icons/Wifi.svg" alt="rss flux"/>
                </span>
                </div>
        </div>
    );
};

export default Informations;