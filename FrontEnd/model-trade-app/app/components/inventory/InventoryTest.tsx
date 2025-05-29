'use client';
import React from 'react'
import { useEffect, useState } from "react";
import { ModelResponseDTO } from "@/app/dtos/response/ModelResponseDTO";
import ModelList from './ModelList';
const InventoryTestPage = () => {
    const [models, setModels] = useState<ModelResponseDTO[]>([]);

    useEffect(() => {
        const token =
            "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJkZXZubHUuY29tIiwic3ViIjoidHJ1b25ndGVzdDExMDYiLCJleHAiOjE3NDg1ODI5ODEsImlhdCI6MTc0ODQ5NjU4MX0.R061BhQSZSiH8NpIYamIkRLdsWKRQkicvWvs4CcQ61ISrtaNNPx0mxsMU8XMeZUmQ5sz5w2tW8JgglMolY-X2w";
        console.log("Gọi API getAllModelByUser");
        fetch("http://localhost:8080/model_trade/api/model/getAllModelByUser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            mode: 'cors',
            credentials: 'include',
        })
            .then((res) => res.json()) // ✅ gọi hàm
            .then((data) => {
                if (Array.isArray(data.result)) {
                    setModels(data.result);
                } else {
                    console.error("API không trả về result là mảng:", data);
                }
            })
            .catch((err) => console.error("Fetch failed:", err));
    }, []);




    return (
        <div className="p-4 space-y-4">
            <ModelList models={models} />
        </div>
    );
}

export default InventoryTestPage