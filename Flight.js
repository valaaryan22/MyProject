function verifyFlightDeatils() {
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const persons = document.getElementById('persons').value;
    const classType = document.getElementById('classType').value;
    if (departure == 'Departure' || destination == 'Destination' || date == '' || persons == '' || classType == '') {
        alert('Please fill all the details');
    }
    else if (departure == destination) {
        alert('destination and departure cannot be same');
    }
    else {
        localStorage.setItem('departure', departure);
        localStorage.setItem('destination', destination);
        localStorage.setItem('date', date);
        localStorage.setItem('persons', persons);
        localStorage.setItem('classType', classType);
        document.write()
        window.location.href = 'FlightSearch.html';
    }
}
function homeL() {
    window.location.href = 'Flight.html';
}
function home() {
    window.location.href = 'Home.html';
}

const users = [
    { username: 'airgo_admin', password: 'airgo123' }
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'Home.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
function loginAlert() {
    alert('Please fill login details');
}

function register() {
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
    } else {
        users.push({ username, password });
        alert('Registration successful! You can now login with your new credentials.');
    }
}
function confirmed1() {
    let airline1 = "QATAR AIRWAYS";
    let time1 = '10:15 AM - 5:30 PM'
    let duration1 = '8 Hours'
    let ratings1 = '8.5 out of 10'
    let fare1 = 10000
    let person = parseInt(localStorage.getItem('persons'), 10);
    let bill1 = fare1 * person;
    let gst1 = bill1 * 0.18;
    let fee1 = bill1 * 0.01;
    let totalBill1 = bill1 + gst1 + fee1;
    localStorage.setItem('airline1', airline1);
    localStorage.setItem('time1', time1);
    localStorage.setItem('duration1', duration1);
    localStorage.setItem('ratings1', ratings1);
    localStorage.setItem('fare1', fare1);
    localStorage.setItem('bill1', bill1);
    localStorage.setItem('gst1', gst1);
    localStorage.setItem('fee1', fee1);
    localStorage.setItem('totalBill1', totalBill1);
    window.location.href = 'Payment.html';
}
function confirmed2() {
    let airline1 = "QATAR AIRWAYS";
    let time1 = '2:00 PM - 9:30 PM'
    let duration1 = '8 Hours'
    let ratings1 = '8.5 out of 10'
    let fare1 = 12000
    let person = parseInt(localStorage.getItem('persons'), 10);
    let bill1 = fare1 * person;
    let gst1 = bill1 * 0.18;
    let fee1 = bill1 * 0.01;
    let totalBill1 = bill1 + gst1 + fee1;
    localStorage.setItem('airline1', airline1);
    localStorage.setItem('time1', time1);
    localStorage.setItem('duration1', duration1);
    localStorage.setItem('ratings1', ratings1);
    localStorage.setItem('fare1', fare1);
    localStorage.setItem('bill1', bill1);
    localStorage.setItem('gst1', gst1);
    localStorage.setItem('fee1', fee1);
    localStorage.setItem('totalBill1', totalBill1);
    window.location.href = 'Payment.html';
}
function confirmed3() {
    let airline1 = "AIR INDIA";
    let time1 = '11:30 PM - 6:30 PM'
    let duration1 = '7 Hours'
    let ratings1 = '9.5 out of 10'
    let fare1 = 14500
    let person = parseInt(localStorage.getItem('persons'), 10);
    let bill1 = fare1 * person;
    let gst1 = bill1 * 0.18;
    let fee1 = bill1 * 0.01;
    let totalBill1 = bill1 + gst1 + fee1;
    localStorage.setItem('airline1', airline1);
    localStorage.setItem('time1', time1);
    localStorage.setItem('duration1', duration1);
    localStorage.setItem('ratings1', ratings1);
    localStorage.setItem('fare1', fare1);
    localStorage.setItem('bill1', bill1);
    localStorage.setItem('gst1', gst1);
    localStorage.setItem('fee1', fee1);
    localStorage.setItem('totalBill1', totalBill1);
    window.location.href = 'Payment.html';
}
function confirmed4() {
    let airline1 = "AIR INDIA";
    let time1 = '3:00 PM - 10:00 PM'
    let duration1 = '7 Hours'
    let ratings1 = '9.5 out of 10'
    let fare1 = 15000
    let person = parseInt(localStorage.getItem('persons'), 10);
    let bill1 = fare1 * person;
    let gst1 = bill1 * 0.18;
    let fee1 = bill1 * 0.01;
    let totalBill1 = bill1 + gst1 + fee1;
    localStorage.setItem('airline1', airline1);
    localStorage.setItem('time1', time1);
    localStorage.setItem('duration1', duration1);
    localStorage.setItem('ratings1', ratings1);
    localStorage.setItem('fare1', fare1);
    localStorage.setItem('bill1', bill1);
    localStorage.setItem('gst1', gst1);
    localStorage.setItem('fee1', fee1);
    localStorage.setItem('totalBill1', totalBill1);
    window.location.href = 'Payment.html';
}
function confirmed5() {
    let airline1 = "INDIGO AIRLINE";
    let time1 = '1:00 PM - 7:00 PM'
    let duration1 = '7 Hours'
    let ratings1 = '8 out of 10'
    let fare1 = 18000
    let person = parseInt(localStorage.getItem('persons'), 10);
    let bill1 = fare1 * person;
    let gst1 = bill1 * 0.18;
    let fee1 = bill1 * 0.01;
    let totalBill1 = bill1 + gst1 + fee1;
    localStorage.setItem('airline1', airline1);
    localStorage.setItem('time1', time1);
    localStorage.setItem('duration1', duration1);
    localStorage.setItem('ratings1', ratings1);
    localStorage.setItem('fare1', fare1);
    localStorage.setItem('bill1', bill1);
    localStorage.setItem('gst1', gst1);
    localStorage.setItem('fee1', fee1);
    localStorage.setItem('totalBill1', totalBill1);
    window.location.href = 'Payment.html';
}
function confirmed6() {
    let airline1 = "INDIGO AIRLINE";
    let time1 = '4:00 PM - 11:00 PM'
    let duration1 = '7 Hours'
    let ratings1 = '8 out of 10'
    let fare1 = 16000
    let person = parseInt(localStorage.getItem('persons'), 10);
    let bill1 = fare1 * person;
    let gst1 = bill1 * 0.18;
    let fee1 = bill1 * 0.01;
    let totalBill1 = bill1 + gst1 + fee1;
    localStorage.setItem('airline1', airline1);
    localStorage.setItem('time1', time1);
    localStorage.setItem('duration1', duration1);
    localStorage.setItem('ratings1', ratings1);
    localStorage.setItem('fare1', fare1);
    localStorage.setItem('bill1', bill1);
    localStorage.setItem('gst1', gst1);
    localStorage.setItem('fee1', fee1);
    localStorage.setItem('totalBill1', totalBill1);
    window.location.href = 'Payment.html';
}
function confirmed7() {
    let airline1 = "VISTARA AIRLINE";
    let time1 = '7:30 AM - 4:00 PM'
    let duration1 = '8.5 Hours'
    let ratings1 = '7.5 out of 10'
    let fare1 = 14000
    let person = parseInt(localStorage.getItem('persons'), 10);
    let bill1 = fare1 * person;
    let gst1 = bill1 * 0.18;
    let fee1 = bill1 * 0.01;
    let totalBill1 = bill1 + gst1 + fee1;
    localStorage.setItem('airline1', airline1);
    localStorage.setItem('time1', time1);
    localStorage.setItem('duration1', duration1);
    localStorage.setItem('ratings1', ratings1);
    localStorage.setItem('fare1', fare1);
    localStorage.setItem('bill1', bill1);
    localStorage.setItem('gst1', gst1);
    localStorage.setItem('fee1', fee1);
    localStorage.setItem('totalBill1', totalBill1);
    window.location.href = 'Payment.html';
}
function confirmed8() {
    let airline1 = "VISTARA AIRLINE";
    let time1 = '12:00 PM - 7:30 PM'
    let duration1 = '8.5 Hours'
    let ratings1 = '7.5 out of 10'
    let fare1 = 16000
    let person = parseInt(localStorage.getItem('persons'), 10);
    let bill1 = fare1 * person;
    let gst1 = bill1 * 0.18;
    let fee1 = bill1 * 0.01;
    let totalBill1 = bill1 + gst1 + fee1;
    localStorage.setItem('airline1', airline1);
    localStorage.setItem('time1', time1);
    localStorage.setItem('duration1', duration1);
    localStorage.setItem('ratings1', ratings1);
    localStorage.setItem('fare1', fare1);
    localStorage.setItem('bill1', bill1);
    localStorage.setItem('gst1', gst1);
    localStorage.setItem('fee1', fee1);
    localStorage.setItem('totalBill1', totalBill1);
    window.location.href = 'Payment.html';
}
function confirmPayment() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const card = document.getElementById('card').value;
    const cvv = document.getElementById('cvv').value;
    const pin = document.getElementById('pin').value;
    if (name == '' || email == '' || phone == '' || card == '' || cvv == '' || pin == '') {
        alert('Please Fill All The Details')
    }
    else {
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        window.location.href = "Confirm.html"
    }
}
function dubai() {
    const departure = prompt('Enter departure : ')
    window.location.href = 'FlightSearch.html'
}

function alt() {
    alert("Thank You! Our Team will reach you soon")
}