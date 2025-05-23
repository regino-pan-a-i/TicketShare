export const bookings = [
    {
        "id": "1",
        "event": "Campground reservation",
        "date": "2025-06-01",
        "details": [
        "Arrive by noon",
        "Only two cars per reservation",
        "Keep out of fenced areas"
        ],
        "price": "$45.00",
        "location": "Yosemite Valley Campground",
        "status": "Confirmed",
        "confirmationNumber": "CG12345YZ",
        "category": "Accommodation",
        "participants": 4,
        "vendor": "National Park Service",
        "duration": "2 nights",
        "bookingDate": "2025-04-01",
        "time": "12:00",
        "notes": "Bring printed confirmation and ID"
    },
    {
        "id": "2",
        "event": "Bus ticket to Yosemite",
        "date": "2025-06-03",
        "details": [
        "Departure at 6:30 AM",
        "Seat 12A assigned",
        "One carry-on bag allowed"
        ],
        "price": "$28.50",
        "location": "Yosemite Transit Station",
        "status": "Confirmed",
        "confirmationNumber": "BT987654",
        "category": "Transportation",
        "participants": 1,
        "vendor": "Yosemite Transit Co.",
        "duration": "4 hours",
        "bookingDate": "2025-04-03",
        "time": "06:30",
        "notes": "Arrive 15 min early"
    },
    {
        "id": "3",
        "event": "Family plane tickets to Denver",
        "date": "2025-06-05",
        "details": [
        "Flight departs at 2:45 PM",
        "Check in 2 hours before",
        "Includes 2 adults and 2 children"
        ],
        "price": "$782.00",
        "location": "LAX to Denver International",
        "status": "Confirmed",
        "confirmationNumber": "FLDEN2025",
        "category": "Transportation",
        "participants": 4,
        "vendor": "Delta Airlines",
        "duration": "2.5 hours",
        "bookingDate": "2025-04-04",
        "time": "14:45",
        "notes": "Bring ID and check baggage limits"
    },
    {
        "id": "4",
        "event": "Car rental reservation",
        "date": "2025-06-07",
        "details": [
        "Pickup at LAX airport terminal 1",
        "Compact SUV requested",
        "Return with full tank"
        ],
        "price": "$120.00",
        "location": "LAX Airport",
        "status": "Confirmed",
        "confirmationNumber": "RENTX321",
        "category": "Transportation",
        "participants": 1,
        "vendor": "Hertz",
        "duration": "3 days",
        "bookingDate": "2025-04-05",
        "time": "10:00",
        "notes": "Driver’s license required"
    },
    {
        "id": "5",
        "event": "Train ride to Grand Canyon",
        "date": "2025-06-08",
        "details": [
        "Coach class, seat 19B",
        "Departs at 9:00 AM",
        "Snacks available on board"
        ],
        "price": "$67.00",
        "location": "Grand Canyon Railway Station",
        "status": "Confirmed",
        "confirmationNumber": "GC789123",
        "category": "Transportation",
        "participants": 2,
        "vendor": "Amtrak",
        "duration": "5 hours",
        "bookingDate": "2025-04-06",
        "time": "09:00",
        "notes": "Bring snacks and ID"
    },
    {
        "id": "6",
        "event": "Hotel check-in - Ocean View Inn",
        "date": "2025-06-10",
        "details": [
        "Check-in starts at 3 PM",
        "Room 204 reserved for 3 nights",
        "Oceanfront view included"
        ],
        "price": "$349.00",
        "location": "Ocean View Inn, Santa Cruz",
        "status": "Confirmed",
        "confirmationNumber": "HOTEL204",
        "category": "Accommodation",
        "participants": 2,
        "vendor": "Ocean View Inn",
        "duration": "3 nights",
        "bookingDate": "2025-04-08",
        "time": "15:00",
        "notes": "Early check-in not guaranteed"
    },
    {
        "id": "7",
        "event": "Zipline adventure",
        "date": "2025-06-12",
        "details": [
        "Arrive 30 minutes early",
        "Wear closed-toe shoes",
        "Signed waiver required"
        ],
        "price": "$85.00",
        "location": "Redwood Adventure Park",
        "status": "Confirmed",
        "confirmationNumber": "ZIP0007",
        "category": "Activity",
        "participants": 2,
        "vendor": "Zip Adventures",
        "duration": "2 hours",
        "bookingDate": "2025-04-10",
        "time": "09:30",
        "notes": "Wear secure clothing"
    },
    {
        "id": "8",
        "event": "Boat tour of San Francisco Bay",
        "date": "2025-06-14",
        "details": [
        "Tour begins at 11 AM sharp",
        "Board at Pier 39",
        "Guided tour lasts 90 minutes"
        ],
        "price": "$40.00",
        "location": "San Francisco, Pier 39",
        "status": "Confirmed",
        "confirmationNumber": "BOATTOUR39",
        "category": "Activity",
        "participants": 2,
        "vendor": "Bay Explorer Tours",
        "duration": "90 minutes",
        "bookingDate": "2025-04-12",
        "time": "11:00",
        "notes": "Be on time — no refunds for late arrivals"
    },
    {
        "id": "9",
        "event": "Rental bike pickup",
        "date": "2025-06-16",
        "details": [
        "Helmet included",
        "Pickup location: Main Street Bike Shop",
        "Return by 6 PM"
        ],
        "price": "$22.00",
        "location": "Main Street Bike Shop",
        "status": "Confirmed",
        "confirmationNumber": "BIKE1022",
        "category": "Activity",
        "participants": 1,
        "vendor": "City Cycle Co.",
        "duration": "1 day",
        "bookingDate": "2025-04-13",
        "time": "09:00",
        "notes": "Helmet included"
    },
    {
        "id": "10",
        "event": "Concert tickets - Summer Beats Festival",
        "date": "2025-06-18",
        "details": [
        "Gates open at 5 PM",
        "General admission",
        "No outside food or drinks"
        ],
        "price": "$95.00",
        "location": "Downtown Event Center",
        "status": "Confirmed",
        "confirmationNumber": "FEST2025SB",
        "category": "Activity",
        "participants": 2,
        "vendor": "Festival Inc.",
        "duration": "6 hours",
        "bookingDate": "2025-04-14",
        "time": "17:00",
        "notes": "Pack light, bring earplugs"
    }

];

let currentId = 10
export function addBooking(booking){
    currentId += 1
    booking["id"] = currentId
    bookings.push(booking)
}

export function findBooking(id) {
    return bookings.find(element => element.id === id) || null;
}