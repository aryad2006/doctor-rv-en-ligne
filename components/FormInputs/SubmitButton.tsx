import { Loader, Loader2 } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

type SubmitButtonProps = {
  title: string;
  buttonType?: "button" | "submit" | "reset" | undefined;
  isLoading: boolean;
  loadingTitle: string;
};

export default function SubmitButton({
  title,
  buttonType = "submit",
  isLoading = false,
  loadingTitle,
}: SubmitButtonProps) {
  return (
    <>
      {isLoading ? (
        <Button disabled>
          <Loader2 className="w-4 h-4 mr-2 flex-shrink-0 animate-spin" />
          {loadingTitle}
        </Button>
      ) : (
        <Button type={buttonType} className="w-full">
          {title}
        </Button>
      )}
    </>
  );
}
