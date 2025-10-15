import './Men.css'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteMenData, filterData } from '../Services/Action/Action';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { IoChevronDownSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const Men = () => {
    const { men } = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [show, setShow] = useState({
        category: true,
        brand: false,
        pattern: false
    });

    const [filter, setFilter] = useState({
        categories: [],
        Brand: [],
        pattern: []
    });

    const handleDelete = (id) => {
        dispatch(DeleteMenData(id));
    };

    const handleEdit = (id) => {
        navigate(`/Edit/${id}`);
    };

    const handleChange = (type, value) => {
        setFilter((prev) => {
            const selected = prev[type];
            const updated = selected.includes(value)
                ? selected.filter((item) => item !== value)
                : [...selected, value];
            const newFilter = { ...prev, [type]: updated };
            dispatch(filterData(newFilter));
            return newFilter;
        });
    };

    const handleClearAll = () => {
        const cleared = { categories: [], Brand: [], pattern: [] };
        setFilter(cleared);
        dispatch(filterData(cleared));
    };

    const categoryOptions = ["bootcut Jeans", "straightfit", "oversized", "denim"];
    const brandOptions = ["Raymond", "USPA", "Levis", "Mufti"];
    const patternOptions = ["cotton", "linen", "polyester", "wool"];

    return (
        <section className='mens-section'>
            <div className="container-fluid">
                <div className="row">
                    <aside className="col-lg-3 col-md-4 col-12 sidebar">
                        <div className="sidebar-header">
                            <h5>FILTERS</h5>
                            <button onClick={handleClearAll} className="clear-btn">Clear All</button>
                        </div>
                        <hr />

                        <div className="filter-group">
                            <div className="filter-header" onClick={() => setShow(prev => ({ ...prev, category: !prev.category }))}>
                                <h6>Category Type</h6>
                                <IoChevronDownSharp className={`icon ${show.category ? 'rotate' : ''}`} />
                            </div>
                            {show.category && (
                                <div className="filter-options">
                                    {categoryOptions.map(name => (
                                        <label key={name}>
                                            <input
                                                type="checkbox"
                                                checked={filter.categories.includes(name)}
                                                onChange={() => handleChange('categories', name)}
                                            />
                                            {name}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="filter-group">
                            <div className="filter-header" onClick={() => setShow(prev => ({ ...prev, brand: !prev.brand }))}>
                                <h6>Brand</h6>
                                <IoChevronDownSharp className={`icon ${show.brand ? 'rotate' : ''}`} />
                            </div>
                            {show.brand && (
                                <div className="filter-options">
                                    {brandOptions.map(name => (
                                        <label key={name}>
                                            <input
                                                type="checkbox"
                                                checked={filter.Brand.includes(name)}
                                                onChange={() => handleChange('Brand', name)}
                                            />
                                            {name}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="filter-group">
                            <div className="filter-header" onClick={() => setShow(prev => ({ ...prev, pattern: !prev.pattern }))}>
                                <h6>Pattern</h6>
                                <IoChevronDownSharp className={`icon ${show.pattern ? 'rotate' : ''}`} />
                            </div>
                            {show.pattern && (
                                <div className="filter-options">
                                    {patternOptions.map(name => (
                                        <label key={name}>
                                            <input
                                                type="checkbox"
                                                checked={filter.pattern.includes(name)}
                                                onChange={() => handleChange('pattern', name)}
                                            />
                                            {name}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                    </aside>

                    <div className="col-lg-9 col-md-8 col-12 men-card">
                        <div className="row g-4">
                            {men.length > 0 ? (
                                men.map((v) => (
                                    <div className="col-lg-4 col-md-6 col-sm-6" key={v.id}>
                                        <div className="mens-card">
                                            <div className="men-card-image">
                                                <img src={v.image} alt={v.name} />
                                                <CiHeart className="heart-icon" />
                                            </div>
                                            <div className="men-card-content">
                                                <h6>{v.name}</h6>
                                                <p className="desc">{v.desc}</p>
                                                <p className="price">₹ {v.price}</p>
                                                <p className="meta">{v.categoryType}</p>
                                                <p className="meta">{v.brand}</p>
                                                <p className="meta">{v.pattern.join(", ")}</p>

                                                <div className="btn-group">
                                                    <button className="edit-btn" onClick={() => handleEdit(v.id)}>Edit</button>
                                                    <button className="delete-btn" onClick={() => handleDelete(v.id)}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="no-data">No items found</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Men;
