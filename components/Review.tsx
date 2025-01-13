"use client";

import MarkdownPreview from "@uiw/react-markdown-preview";
import { Loader2 } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

interface ReviewProps {
  review: string;
  isGenerating: boolean;
}

const Review = ({ review, isGenerating }: ReviewProps) => {
  return (
    <ScrollArea className="flex h-full relative isolate">
      <MarkdownPreview
        source={review}
        className="p-10 text-xl w-full bg-[#282c35] h-screen overflow-y-auto"
        style={{
          backgroundColor: "#282c35",
        }}
      />
      {isGenerating && (
        <div className="flex fade-in  items-center justify-center absolute inset-0 bg-black/40 backdrop-blur-[2px] z-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
    </ScrollArea>
  );
};

export default Review;
