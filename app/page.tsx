"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Editor from "@/components/Editor";
import Review from "@/components/Review";
import { useState } from "react";

export default function Home() {
  const [review, setReview] = useState("");
  const [state, setState] = useState<"idle" | "generating" | "generated">(
    "idle"
  );

  const isGenerating = state === "generating";

  const handleGenerateReview = async (code: string) => {
    try {
      setState("generating");

      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setReview(data.review);
      setState("generated");
    } catch (err) {
      console.error("Error fetching review:", err);
      setState("idle");
    }
  };

  return (
    <main className="h-screen">
      <ResizablePanelGroup direction="horizontal" className="h-screen w-full">
        <ResizablePanel defaultSize={55}>
          <Editor
            isGenerating={isGenerating}
            onGenerateReview={handleGenerateReview}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={45}>
          <Review isGenerating={isGenerating} review={review} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
