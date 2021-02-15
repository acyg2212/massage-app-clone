import React from 'react';

const UpperThird = () => {

    return (
        <div className="upper-third-div">
            <h1 className="homepage-title">Discover the difference a great massage can make</h1>
            <h2 className="homepage-subtitle">There's good, and there's great. We help you find and book the best
            massage and bodywork near you.
            </h2>
            <div className="home-page__form--div">
                <form className="homepage-form">
                    <input type='text' placeholder='Location' className="home-page__search" />

                    <input type='checkbox' className="homepage__checkbox" id="homepage-checkbox" />
                    <label for="homepage-checkbox" className="checkbox-label">Travel to me</label>
                    <button className="form-button">Search</button>
                </form>
            </div>
        </div >
    )
}

export default UpperThird;