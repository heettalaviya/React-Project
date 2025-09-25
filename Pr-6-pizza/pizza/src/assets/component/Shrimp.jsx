const Shrimp = () => {
    return (
        <>
            <section className="shrimp my-5">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Image Section */}
                        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                            <img 
                                src="src/img/pizza-1.png" 
                                alt="Shrimp Pizza" 
                                className="img-fluid rounded"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="col-12 col-md-6">
                            <h3>Shrimp Pizza</h3>
                            <h3>$35.00</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Semper sagittis dolor aliquet quam feugiat nisi a ultrices 
                                feugiat. Viverra facilisi turpis eget tempor. Mattis risus 
                                amet euismod eleifend.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, colur consectetur omni adipisicing 
                                elit, sed do eiusmod tempor incididunt labore et magna aliqua.
                            </p>
                            <p><strong>Category:</strong> Chicken, Lunch, Pizza, Burger</p>
                            <p><strong>Tags:</strong> Healthy, Organic, Chicken, Sauce</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shrimp;
