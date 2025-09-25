import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import "./DescriptionTabs.css";


export default function DescriptionTabs() {
const [active, setActive] = useState("description");


return (
<section className="description-tabs">
<div className="container">
<div className="row">
<div className="col-12">
<Tab.Container activeKey={active} onSelect={(k) => setActive(k)}>
<div className="d-flex justify-content-center w-100">
<Nav className="custom-nav" role="tablist">
<Nav.Item>
<Nav.Link eventKey="description">DESCRIPTION</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="reviews">REVIEWS</Nav.Link>
</Nav.Item>
</Nav>
</div>


<Tab.Content className="custom-tab-content">
<Tab.Pane eventKey="description">
<div className="tab-inner">
<p className="para">
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>


<p className="para">
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
labore et dolore magnam aliquam quaerat voluptatem.
</p>
</div>
</Tab.Pane>


<Tab.Pane eventKey="reviews">
<div className="tab-inner">
<p className="para">There are no reviews yet. Be the first to write a review.</p>
</div>
</Tab.Pane>
</Tab.Content>
</Tab.Container>
</div>
</div>
</div>
</section>
);
}