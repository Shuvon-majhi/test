import React from 'react'
import { useState, useEffect } from 'react';
export default function Bookings() {

    const [data, setData] = useState({})

    useEffect(() => {
        const data = localStorage.getItem("slots")
        const AllData = JSON.parse(data);
        setData(AllData)
    }, [])
    
    return (
        <div className='w-50 border m-auto mt-5'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>Number</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Age</th>
                        <th>Date</th>
                        <th>Slot</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(data).map(([key, value]) => {
                        return (
                            Object.entries(value).map(([key1, value1]) => {
                                return (
                                    <tr key={key1}>
                                        <td>{value1.name}</td>
                                        <td>{value1.number}</td>
                                        <td>{value1.email}</td>
                                        <td>{value1.address}</td>
                                        <td>{value1.age}</td>
                                        <td>{value1.date}</td>
                                        <td>{key}</td>
                                    </tr>
                                )
                            })
                        )
                    })}

                </tbody>

            </table>
        </div>
    )
}
