import './Menu.css'
import { FaStar } from "react-icons/fa";
import { BsCart } from "react-icons/bs";


function Menu() {
    let data = [{
        img: "src/img/pizza-1.png",
        title: "Shrimp pizza",
        price: "$35.00",
        desc: "All the Lorem Ipsum generators on to Internet tend to repeat"
    },
    {
        img: "src/img/pizza-2.png",
        title: "Cheese pizza",
        price: "$45.00",
        desc: "All the Lorem Ipsum generators on to Internet tend to repeat"
    },
    {
        img: "src/img/pizza-3.png",
        title: "Seafood pizza",
        price: "$65.00",
        desc: "All the Lorem Ipsum generators on to Internet tend to repeat"
    }
    ]
    return (
        <>



            {/* Our Menu start*/}
            <section className='ourmenu'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <h2>Related Products</h2>
                        </div>
                    </div>

                    <div className="cart">
                        <div className="row ">
                            {
                                data.map((v, i) => {
                                    return (
                                        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center" key={i}>
                                            <div className="box ms-2 mt-5">
                                                <div className="menu-box">
                                                    <img src={v.img} alt="" className='mb-3' />

                                                    <h3 className='mb-4'>{v.title}<span className='float-end text-danger'>{v.price}</span> </h3>
                                                    <ul className='breadcrumb text-warning mb-3'>
                                                        <FaStar /> &nbsp;
                                                        <FaStar /> &nbsp;
                                                        <FaStar /> &nbsp;
                                                        <FaStar /> &nbsp;
                                                        <FaStar />
                                                    </ul>

                                                    <p>All the Lorem Ipsum generators on to Internet tend to repeat </p>
                                                    <button className='rounded-5 py-2 px-4 bg-warning border-0'> <span className='me-2
                                        '></span>Order Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }


             

                        </div>
                    </div>
                </div>
            </section>
            {/* Our Menu end*/}
        </>
    )
}
export default Menu;