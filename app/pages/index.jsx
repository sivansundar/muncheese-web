"use client";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

export default function Dashboard() {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSpots();
  }, []);

  async function fetchSpots() {
    setLoading(true);
    console.log("HERE");
    const result = await fetch("/spots", {
      method: "GET",
    });

    const data = await result.json();
    console.log("result .", data);
    if (!data.error) {
      setSpots(data.data);
    }
    setLoading(false);
  }

  return (
    <div>
      {loading ? (
        <LoadingSpinner
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></LoadingSpinner>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {spots.length > 0 ? (
            spots.map((item, index) => (
              <Card key={index} style={{ padding: "12px" }}>
                <Image
                  aria-hidden
                  src={item.image_url}
                  alt="File icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
                <CardTitle style={{ paddingTop: "12px" }}>
                  {item.title}
                </CardTitle>
                <CardDescription style={{ paddingTop: "16px" }}>
                  {item.description}
                </CardDescription>
                <a
                  style={{ paddingTop: "12px" }}
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href={item.location}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Location
                </a>
              </Card>
            ))
          ) : (
            <p>Emprtyyy</p>
          )}
        </div>
      )}
    </div>
  );
}
