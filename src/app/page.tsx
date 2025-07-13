"use client";
import { useState } from "react";
import { Footer, Header } from "./components";
import CardList from "./components/CardList";

export default function Home() {
  const [selectedName, setSelectedName] = useState<string>("");
  return (
    <div>
      <Header selectedName={selectedName} />
      <div className="text-center p-5 text-3xl">
        <CardList setSelectedName={setSelectedName} />
      </div>
      <Footer selectedName={selectedName} />
    </div>
  );
}
