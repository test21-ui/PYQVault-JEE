

import React from "react";
import { ScrollArea } from "../../components/scroll-area";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { SecondaryNavigationSection } from "./sections/SecondaryNavigationSection/SecondaryNavigationSection";

export const Desktop = () => {
  return (
    <div className="bg-[#222e3f] flex flex-row justify-center w-full">
      <div className="bg-[#222e3f] w-full max-w-[1360px] relative">
        <ScrollArea className="h-screen">
          <div className="flex">
            <SecondaryNavigationSection />
            <MainContentSection />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
