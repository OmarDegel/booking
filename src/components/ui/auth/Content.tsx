import React from "react";

function Content({
  color,
  title,
  description,
}: {
  color: string;
  title: string;
  description: string;
}) {
  const settings = JSON.parse(localStorage.getItem("settings") || "{}");

  return (
    <div
      className={`hidden lg:flex w-1/2 h-screen ${color} items-center justify-center p-12 relative overflow-hidden`}
    >
      <div className="text-white text-center space-y-4">
        <img src={settings?.logo} alt="Logo" className="h-16 w-16 mx-auto" />
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="opacity-80 max-w-sm">{description}</p>
      </div>
    </div>
  );
}

export default Content;
