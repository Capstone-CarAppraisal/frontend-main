"use client";

import React from "react";

export default function FileUpload() {
  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files || event.target.files.length === 0) {
      return; // User canceled file selection
    }

    const file = event.target.files[0];

    await fetch("/api/file", {
      method: "POST",
      body: file,
      headers: {
        "Content-Type": file.type,
      },
    });
  }

  return <input type="file" onChange={handleFileUpload} />;
}
