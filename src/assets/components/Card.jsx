import React, { useState, useEffect } from 'react';

export default function Card() {
    const [restaurants, setRestaurants] = useState([]);
    const [visibleRestaurants, setVisibleRestaurants] = useState(8);

    useEffect(() => {
        fetch('https://restaurant-api.dicoding.dev/list')
            .then(response => response.json())
            .then(data => setRestaurants(data.restaurants))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const getRatingStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <>
                {Array(fullStars).fill().map((_, index) => <i key={`full-${index}`} className="fas fa-star"></i>)}
                {halfStar && <i className="fas fa-star-half-alt"></i>}
                {Array(emptyStars).fill().map((_, index) => <i key={`empty-${index}`} className="far fa-star"></i>)}
            </>
        );
    };

    const handleLoadMore = () => {
        setVisibleRestaurants(prevVisibleRestaurants => prevVisibleRestaurants + 8);
    };

    return (
        <>
            {restaurants.slice(0, visibleRestaurants).map(restaurant => (
                <div key={restaurant.id} className="col-3 my-3">
                    <div className="card rounded-0 h-100 d-flex flex-column border-0">
                        <img src={`https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}`} className="card-img-top" alt={restaurant.name} height="200px" />
                        <div className="flex-column item-start py-3">
                            <h5 className="card-title">{restaurant.name}</h5>
                            <div className="rating my-2">
                                {getRatingStars(restaurant.rating)}
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                                <p className="location">{restaurant.city}</p>
                                <div className="open-status">
                                    <i className="fa-solid fa-circle me-1"></i>
                                    <span className="">OPEN NOW</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto d-grid">
                            <a href="#" className="btn btn-primary btn-block rounded-0">LEARN MORE</a>
                        </div>
                    </div>
                </div>
            ))}
            {/* Tombol "Load More" akan muncul jika jumlah card yang ditampilkan kurang dari total card */}
            {visibleRestaurants < restaurants.length && (
                <div className="col-12 mt-3 text-center">
                    <button className="btn btn-outline-primary px-5 rounded-0" onClick={handleLoadMore}>Load More</button>
                </div>
            )}
        </>
    );
}
