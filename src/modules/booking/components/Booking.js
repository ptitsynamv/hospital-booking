import React from "react";
import BookingService from "../services/BookingService";

class Booking extends React.Component {

    render() {
        const bookingService = new BookingService();

        return (
            <div>
                <ul>
                    {bookingService.items.map((item, i) =>
                        <li key={i}>{item.date}</li>
                    )}
                </ul>
            </div>
        );
    }
}
export default Booking