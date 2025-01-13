'"use client";';

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useState } from "react";
import { RainbowButton } from "./ui/rainbow-button";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

interface EditorProps {
  onGenerateReview: (code: string) => void;
  isGenerating: boolean;
}

const Editor = ({ onGenerateReview, isGenerating }: EditorProps) => {
  const [value, setValue] = useState("");

  return (
    <ScrollArea className="relative">
      <RainbowButton
        disabled={isGenerating}
        onClick={() => onGenerateReview(value)}
        className="absolute bottom-3 right-3 z-50 w-fit  "
      >
        Generate Review
      </RainbowButton>

      <CodeMirror
        className=" h-screen overflow-y-auto text-lg"
        value={value}
        height="100vh"
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        onChange={setValue}
      />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
export default Editor;
