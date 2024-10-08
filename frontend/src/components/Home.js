import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import img1 from '../static/art1.jpg';  
import img2 from '../static/art2.jpg';  
import img3 from '../static/god3.jpg';  
import img4 from '../static/god1.jpg';  
import img5 from '../static/god2.jpg';  

const Home = () => {
    const [current, setCurrent] = useState(0);
    const carouselItems = [img1, img2, img3]; // Current carousel images
    const newArrivals = [img1, img2, img3, img4, img5]; // New arrival images

    // Carousel for existing slideshow
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % carouselItems.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [carouselItems.length]);

    return (
        <div>
            
            {/* Existing Carousel */}
            <div className="carousel">
                {carouselItems.map((item, index) => (
                    <div
                        className="carousel-item"
                        style={{ opacity: current === index ? 1 : 0 }}
                        key={index}
                    >
                        <img src={item} alt={`Artwork ${index + 1}`} />
                    </div>
                ))}
            </div>

            <h1 style={{ textAlign: 'center' }}>Welcome to the Art Gallery</h1>
            <p style={{ textAlign: 'center' }}>
                Explore a stunning collection of contemporary and classical artworks. 
                Login or Register to curate your own gallery, save favorites, and discover the artists behind each masterpiece.
            </p>

            {/* New Arrivals Section */}
            <div className="new-arrivals-section">
                <h2>New Arrivals</h2>
                <div className="main">
                    {newArrivals.map((item, index) => (
                        <div className="card" key={index}>
                            <img src={item} alt={`New Arrival ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
