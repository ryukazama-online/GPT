import React, { useState } from "react";

const MODELS = [
  { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo" },
  { id: "gpt-4", name: "GPT-4" },
];

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [model, setModel] = useState("gpt-3.5-turbo");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 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",
      },
      body: JSON.stringify({
        model: model,
        messages: [{ role: "system", content: "You are a helpful assistant." }, ...newMessages],
      }),
    });

    const data = await response.json();
    const reply = data.choices[0].message;

    setMessages([...newMessages, reply]);
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Pilih Model</label>
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="w-full p-2 border rounded bg-white dark:bg-gray-800 dark:text-white"
        >
          {MODELS.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>
      </div>

      <div className="h-[400px] overflow-y-auto bg-white dark:bg-gray-800 border rounded p-3 mb-4 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={\`p-2 rounded \${msg.role === "user" ? "bg-blue-100 dark:bg-blue-900 text-right" : "bg-gray-200 dark:bg-gray-700"}\`}
          >
            <p className="whitespace-pre-wrap">{msg.content}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 p-2 border rounded bg-white dark:bg-gray-800 dark:text-white"
          placeholder="Tulis pesan..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Kirim
        </button>
      </div>
    </div>
  );
}
