import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

// assuming the button variants types are something like following
type ButtonVariant =
  | "ghost"
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | null
  | undefined;

interface TooltipButtonProps {
  content: string;
  icon: React.ReactNode;
  onClick: () => void;
  buttonVariant?: ButtonVariant;
  buttonClassName?: string;
  delay?: number;
  disbaled?: boolean;
  loading?: boolean;
}

export const TooltipButton = ({
  content,
  icon,
  onClick,
  buttonVariant = "ghost",
  buttonClassName = "",
  delay = 0,
  disbaled = false,
  loading = false,
}: TooltipButtonProps) => {
  return (
    <TooltipProvider delayDuration={delay}>
      <Tooltip>
        <TooltipTrigger
          className={disbaled ? "cursor-not-allowed" : "cursor-pointer"}
        >
          <Button
            size={"icon"}
            disabled={disbaled}
            variant={buttonVariant}
            className={buttonClassName}
            onClick={onClick}
          >
            {loading ? (
              <Loader className="min-w-4 min-h-4 animate-spin text-emerald-400" />
            ) : (
              icon
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{loading ? "Loading..." : content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
