// src/Dashboard/Dashboard.jsx
import React, { useState } from 'react';
import { Card, Input, Row, Col, Typography } from 'antd';
import Logo from "../assets/Logo_Perusahaan.png";
import './Dashboard.css'; // Pastikan untuk membuat file CSS ini untuk styling

const { Title } = Typography;

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const data = [
        { id: 1, title: 'Hotel Sejahtera', image: Logo},
        { id: 2, title: 'Rumah Putri', image: Logo},
        { id: 3, title: 'Lao Net', image: Logo},
        { id: 4, title: 'Picckyy', image: Logo},
        { id: 5, title: 'Tim Raaa', image: Logo},
        { id: 6, title: 'Prenuli Net', image: Logo},
    ];

    const filteredData = data.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCardClick = (card) => {
        alert('You clicked on ${card.title}');
    };

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <Input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <Row gutter={[5, 5]} className="card-container">
                {filteredData.map(card => (
                    <Col span={4} key={card.id}>
                        <Card
                            hoverable
                            cover={<img alt={card.title} src={card.image} />}
                            onClick={() => handleCardClick(card)}
                        >
                            <Card.Meta title={card.title} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Dashboard;