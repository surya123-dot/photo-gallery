import React, { useEffect, useState } from "react";


const HomePage = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getPhotos() {
      try {
      const res = await fetch("http://localhost:3000/photos");

        const data = await res.json();

        setPhotos(data);
      } catch (error) {
        console.log("Error fetching photos:", error);
      }
    }

    getPhotos();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Photo Gallery</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {photos.map((photo) => (
          <div
            key={photo.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <img
              src={photo.image}
              alt={photo.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h3>{photo.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;