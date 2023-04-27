import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

const HoverCard = ({ children, label }) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={5}
            className="bg-gray-800 text-white px-2 py-1 rounded-md text-sm whitespace-nowrap"
          >
            {label}
          
          </Tooltip.Content>
        
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default HoverCard;
