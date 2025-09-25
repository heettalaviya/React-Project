import './banner.css'

function Banner() {
    return (
        <>
            <section className="banner">
                <div className="container">
                    <div className="row align-items-center">
                        
                        {/* Left Text */}
                        <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <h1>Shop Detail</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry.
                            </p>
                        </div>

                        {/* Right Breadcrumb */}
                        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                            <ul className="breadcrumb mb-0">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    Our Menu
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Banner Images */}
                <div className="banner-img position-relative">
                    <div className="onion-img position-absolute">
                        <img src="src/img/onion.png" alt="Onion" className="img-fluid" />
                    </div>
                    <div className="tamatop-img position-absolute">
                        <img src="src/img/tamato.png" alt="Tomato" className="img-fluid" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner;
