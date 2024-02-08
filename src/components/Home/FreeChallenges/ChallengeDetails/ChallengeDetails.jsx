"use client"
import Image from "next/image";
import { useEffect, useState } from "react";


const ChallengeDetails = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/challenges')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    //console.log(data)
    return (
        <div className="w-10/12 mx-auto">
           Hii
        </div>
    );
};

export default ChallengeDetails;