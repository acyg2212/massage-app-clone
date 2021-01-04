import React from 'react';
import BookAppointmentPic from '../assets/book-appointment.jpg';
import CheckPrice from '../assets/check-price.jpg';
import FindTherapist from '../assets/find-therapist.jpg';

const BottomThird = () => {

    return (
        <div className="homepage__bottomthird-div">
            <h2>How This Works</h2>
            <div className="homepage__bottomthird-div__inner-container">
                <div className="homepage__bottomthird__card">
                    <img className="homepage__bottomthird__card__img" src={FindTherapist} alt="not here yet" />
                    <h3 className="homepage__bottomthird__card__h3">Find Massage Therapists</h3>
                    <p className="homepage__bottomthird__card__p">Finding great Massage Therapists and bodyworkers near you
                    has never been easier. Search by business or individual.
                    Even by massage technique!
                    </p>
                    <a href="/get-started">Get Started</a>
                </div>
                <div className="homepage__bottomthird__card">
                    <img className="homepage__bottomthird__card__img" src={CheckPrice} alt="not here yet" />
                    <h3 className="homepage__bottomthird__card__h3">Check Pricing and Availability</h3>
                    <p className="homepage__bottomthird__card__p">No more wasting time trying to find an opening to book,
                    wondering who your service provider will be, or what it
                    will cost.
                    </p>
                    <a href="/get-started">Get Started</a>
                </div>
                <div className="homepage__bottomthird__card">
                    <img className="homepage__bottomthird__card__img" src={BookAppointmentPic} alt="not here yet" />
                    <h3 className="homepage__bottomthird__card__h3">Book an Appointment</h3>
                    <p className="homepage__bottomthird__card__p">Simply Select a provider, service, and an available time.
                    You'll receive an immediate confirmation and a reminder
                    the day before your appointment.
                    </p>
                    <a href="/get-started">Get Started</a>
                </div>


            </div>
        </div>
    )
}

export default BottomThird;