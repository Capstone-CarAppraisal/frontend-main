"use client";

//upload image to backend
export default async function Image(data: any, side: string) {
  if (data) {
    const formData = new FormData();
    formData.append("files", data);

    const url = `http://localhost:8000/predict/${side}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const predictJSON = await response.json();
      // return prediction
      return predictJSON["All prediction"];
    } catch (error) {
      console.error("An error occurred:", error);
    }
  } else {
    console.error("No file");
  }
}
