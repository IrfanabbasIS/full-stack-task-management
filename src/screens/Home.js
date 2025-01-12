import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Home() {
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("https://full-stack-task-management-backend.onrender.com/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });

        response = await response.json();
        setFoodItem(response[0]);
        setFoodCat(response[1]);
        // console.log(response[0], response[1]);
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div>
            <Navbar />
            <div className='container'>
                {
                    foodCat.length > 0 ? foodCat.map((data) => {
                        return (
                            <div key={data._id}>
                                <div className=" m-3" style={{fontSize:"1.5rem", fontWeight:"bold"}}>{data.CategoryName}</div>
                                <hr />
                                <div className='row mb-3'>
                                    {foodItem.length > 0 ?
                                        foodItem.filter((item) => item.CategoryName === data.CategoryName)
                                            .map(filterItems => {
                                                return (
                                                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                                        <Card foodName={filterItems.name}
                                                        options={filterItems.options[0]}
                                                        imgSrc={filterItems.img}
                                                        />

                                                    </div>
                                                )
                                            })
                                        : <div>No Such Data Found</div>}
                                </div>
                            </div>
                        )
                    })
                        : <div>No Categories Found</div>
                }
            </div>
            <Footer />
        </div>
    )
}
