"use client";

import { useState } from "react";
import { contact } from "./site-data";

export function PartMatchForm({ category }: { category: string }) {
  const [query, setQuery] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const detail = query.trim() || "I will send the reference and dimensions in the chat.";
    const message = `Hello, I need help matching a ${category} item. My reference/details: ${detail}`;
    window.open(`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="match-form" onSubmit={submit}>
      <label htmlFor="part-reference">Enter a part number, compatible reference or key dimensions</label>
      <div>
        <input id="part-reference" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Example: your current part reference / dimensions" />
        <button type="submit">Send model / part no. <span>↗</span></button>
      </div>
      <small>No complete reference? A clear photo and measured dimensions can start the conversation.</small>
    </form>
  );
}
