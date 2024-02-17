"use client";

export default async function ImageUpload(data: any, side: string) {
  if (data) {
    const formData = new FormData();
    formData.append("files", data); // Append the file to the form data

    // Adjust the URL to your FastAPI endpoint
    const url = `http://localhost:8000/predict/${side}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData, // Send the form data as the request body
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const predictJSON = await response.json();
      return predictJSON["All prediction"];
    } catch (error) {
      console.error("An error occurred:", error);
    }
  } else {
    console.error("No file");
  }
}
