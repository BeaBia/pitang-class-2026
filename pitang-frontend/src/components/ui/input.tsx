import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "flex w-full min-w-0 bg-transparent py-2 text-base transition-all outline-none md:text-sm",
        
        "border-t-0 border-x-0 border-b-2 border-[#F9FBDB]/30 rounded-none px-0",
      
        "placeholder:text-[#F9FBDB]/40",
        "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#F9FBDB]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        
        className
      )}
      {...props}
    />
  );
}

export { Input };
