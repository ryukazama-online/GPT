import React, { useState } from "react";
import ChatBox from "./components/ChatBox";
import "./styles/index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors">
      <div className="max-w-3xl mx-auto p-4">
        <ChatBox />
      </div>
    </div>
  );
}
