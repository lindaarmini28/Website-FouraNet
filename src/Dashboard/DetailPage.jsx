// src/DetailPage/DetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from 'antd';
import Logo from "../assets/Logo_Perusahaan.png";

const { Title } = Typography;

const data = [
    { id: 1, title: 'Hotel Sejahtera', description: 'Deskripsi Hotel Sejahtera', image: Logo },
    { id: 2, title: 'Rumah Putri', description: 'Deskripsi Rumah Putri', image: Logo },
    { id: 3, title: 'Lao Net', description: 'Deskripsi Lao Net', image: Logo },
    { id: 4, title: 'Picckyy', description: 'Deskripsi Picckyy', image: Logo },
    { id: 5, title: 'Tim Raaa', description: 'Deskripsi Tim Raaa', image: Logo },
    { id: 6, title: 'Prenuli Net', description: 'Deskripsi Prenuli Net', image: Logo },
];

const DetailPage = () => {
    const { id } = useParams();
    const card = data.find((item) => item.id === parseInt(id));

    if (!card) {
        return <p>Detail tidak ditemukan.</p>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <Title level={2}>{card.title}</Title>
            <img src={card.image} alt={card.title} style={{ width: '200px', height: 'auto' }} />
            <p>{card.description}</p>
        </div>
    );
};

export default DetailPage;
