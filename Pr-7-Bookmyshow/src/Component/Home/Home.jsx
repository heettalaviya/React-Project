import { useEffect, useState } from "react";
import { Button, Card, Container, Form, Row, Col } from "react-bootstrap";
import { getStorageData, setStorageData } from "../../services/storage";
import { useNavigate } from "react-router";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [sortOption, setSortOption] = useState("");
    const [filterCategory, setFilterCategory] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setProducts(getStorageData());
    }, []);

    const handleDelete = (id) => {
        const updated = products.filter((p) => p.id !== id);
        setProducts(updated);
        setStorageData(updated);
    };

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };


    const filteredProducts = products
        .filter((p) => {
            const matchesSearch =
                p.title.toLowerCase().includes(search.toLowerCase()) ||
                p.category.toLowerCase().includes(search.toLowerCase());

            const matchesCategory = !filterCategory || p.category === filterCategory;
            return matchesSearch && matchesCategory;
        })
        .sort((a, b) => {
            switch (sortOption) {
                case "priceLowHigh":
                    return a.price - b.price;
                case "priceHighLow":
                    return b.price - a.price;
                case "titleAZ":
                    return a.title.localeCompare(b.title);
                case "titleZA":
                    return b.title.localeCompare(a.title);
                case "quantityHighLow":
                    return b.quantity - a.quantity;
                case "quantityLowHigh":
                    return a.quantity - b.quantity;
                default:
                    return 0;
            }
        });

    return (
        <Container>

            <Row className="my-3 g-2">
                <Col md={5}>
                    <Form.Control
                        type="text"
                        placeholder="Search by title or category..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Col>
                <Col md={3}>
                    <Form.Select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                    >
                        <option value="">All Categories</option>
                        <option value="Gujarati Movie">Gujarati Movie</option>
                        <option value="Hindi Movie">Hindi Movie</option>
                        <option value="English Movie">English Movie</option>
                        <option value="South Indian Movie">South Indian Movie</option>
                    </Form.Select>
                </Col>
                <Col md={3}>
                    <Form.Select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="">Sort By</option>
                        <option value="priceLowHigh">Price: Low to High</option>
                        <option value="priceHighLow">Price: High to Low</option>
                        <option value="titleAZ">Title: A-Z</option>
                        <option value="titleZA">Title: Z-A</option>
                        <option value="quantityHighLow">Quantity: High to Low</option>
                        <option value="quantityLowHigh">Quantity: Low to High</option>
                    </Form.Select>
                </Col>
            </Row>

            <Row>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Col md={3} className="mb-3" key={product.id}>
                            <Card className="h-100 border border-2 rounded">
                                <Card.Img
                                    variant="top"
                                    src={product.image}
                                    height={300}
                                    style={{ objectFit: "cover" }}
                                />
                                <Card.Body>
                                    <Card.Title>
                                        <b>{product.id} {product.title}</b>
                                    </Card.Title>
                                    <Card.Text className="text-white"><b>Description: </b>{product.desc}</Card.Text>
                                    <Card.Text className="text-white"><b>Price: </b>{product.price}</Card.Text>
                                    <Card.Text className="text-white"><b>Category: </b>{product.category}</Card.Text>
                                    <Card.Text className="text-white"><b>Quantity: </b>{product.quantity}</Card.Text>

                                    <div className="d-flex justify-content-between">
                                        <Button
                                            variant="success"
                                            onClick={() => handleEdit(product.id)}
                                        >
                                            Edit
                                        </Button>

                                        <Button
                                            variant="danger"
                                            onClick={() => handleDelete(product.id)}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <h5 className="text-center w-100 text-black">No products found...!!</h5>
                )}
            </Row>
        </Container>
    );
};

export default Home;
