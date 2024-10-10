// Google Map Initialization
function initMap() {
    const cafeLocation = { lat: 50.4501, lng: 30.5234 }; // Example coordinates (Kyiv, Ukraine)
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: cafeLocation,
    });
    const marker = new google.maps.Marker({
        position: cafeLocation,
        map: map,
    });
}

// Add to cart functionality (optional, extendable)
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});


const YOUR_API_KEY = <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1266.6063663819957!2d30.488313!3d50.5859992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d31737b3cb29%3A0x9b2fae5cf7d982a8!2sWindow%20coffee!5e0!3m2!1suk!2sua!4v1728580618954!5m2!1suk!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

