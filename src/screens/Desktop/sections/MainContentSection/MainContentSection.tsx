import { ArrowUpDownIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/button";
import { Card, CardContent } from "@/components/card";
import { Badge } from "@/components/badge";
import { Separator } from "@/components/separator";

// Define chapter data for mapping
const chapters = [
  {
    id: 1,
    name: "Gravitation",
    icon: "/chapter-icon.svg",
    stats: { year2025: "8Qs", year2024: "6Qs" },
    trend: "up",
    progress: "113/205 Qs",
  },
  {
    id: 2,
    name: "Math in Physics",
    icon: "/chapter-icon-3.svg",
    stats: { year2025: "2Qs", year2024: "6Qs" },
    trend: "down",
    progress: "113/205 Qs",
  },
  {
    id: 3,
    name: "Units and Dimensions",
    icon: "/chapter-icon-5.svg",
    stats: { year2025: "6Qs", year2024: "6Qs" },
    trend: "none",
    progress: "113/205 Qs",
  },
  {
    id: 4,
    name: "Motion in One Dimension long name",
    icon: "/chapter-icon-7.svg",
    stats: { year2025: "8Qs", year2024: "6Qs" },
    trend: "up",
    progress: "113/205 Qs",
  },
  {
    id: 5,
    name: "Motion in Two Dimensions",
    icon: "/chapter-icon-6.svg",
    stats: { year2025: "8Qs", year2024: "6Qs" },
    trend: "up",
    progress: "113/205 Qs",
  },
  {
    id: 6,
    name: "Laws of Motion",
    icon: "/chapter-icon-1.svg",
    stats: { year2025: "8Qs", year2024: "6Qs" },
    trend: "up",
    progress: "113/205 Qs",
  },
  {
    id: 7,
    name: "Centre of Mass Equilibrium and Momentum",
    icon: "/chapter-icon-4.svg",
    stats: { year2025: "8Qs", year2024: "6Qs" },
    trend: "up",
    progress: "113/205 Qs",
  },
  {
    id: 8,
    name: "Work Power Energy",
    icon: "/chapter-icon-2.svg",
    stats: { year2025: "8Qs", year2024: "6Qs" },
    trend: "up",
    progress: "113/205 Qs",
  },
];

export const MainContentSection = () => {
  return (
    <div className="flex flex-col w-full items-start bg-[#1b2132] border border-solid border-[#30435a]">
      <header className="flex flex-col w-full items-start pt-6 pb-4 px-0 bg-[#222e3f]">
        <div className="flex items-start w-full bg-[#222e3f]">
          <div className="flex flex-col items-center gap-4 flex-1">
            <div className="inline-flex items-center justify-center gap-4">
              <img
                className="w-6 h-6"
                alt="Subject icons"
                src="/subject-icons-1.svg"
              />
              <h1 className="w-fit mt-[-1.00px] font-bold text-white text-xl text-center tracking-[0] leading-6 whitespace-nowrap">
                Physics PYQs
              </h1>
            </div>
            <p className="w-fit font-normal text-[#b9bfd0] text-sm text-right tracking-[0] leading-[18.2px] whitespace-nowrap">
              Chapter-wise Collection of Physics PYQs
            </p>
          </div>
          <div className="w-14 h-14" />
        </div>
      </header>

      <div className="flex w-full items-center gap-2 px-4 py-3 bg-[#222e3f]">
        <Button
          variant="outline"
          className="flex items-center justify-center gap-0.5 p-1.5 bg-[#222e3f] rounded-xl border border-solid border-[#3e5574]"
        >
          <span className="text-white font-medium">Class</span>
          <ChevronDownIcon className="w-5 h-5" />
        </Button>

        <Button
          variant="outline"
          className="flex items-center justify-center gap-0.5 p-1.5 bg-[#222e3f] rounded-xl border border-solid border-[#3e5574]"
        >
          <span className="text-white font-medium">Units</span>
          <ChevronDownIcon className="w-5 h-5" />
        </Button>

        <Separator
          orientation="vertical"
          className="h-6 bg-[#3e5574] rounded-xl"
        />

        <Badge
          variant="outline"
          className="flex items-center justify-center gap-0.5 p-1.5 bg-[#222e3f] rounded-xl border border-solid border-[#3e5574]"
        >
          <span className="text-white font-medium">Not Started</span>
        </Badge>

        <Button
          variant="outline"
          className="min-w-8 min-h-8 p-0 bg-[#222e3f] rounded-xl border border-solid border-[#3e5574]"
        >
          <img className="w-8 h-8" alt="Chip button" src="/chip-button.svg" />
        </Button>
      </div>

      <div className="flex w-full min-h-12 items-center px-4 py-0 bg-[#222e3f]">
        <div className="flex flex-col items-start justify-center gap-1 pl-0 pr-2 py-2 flex-1">
          <p className="w-full mt-[-1.00px] text-white text-sm">
            Showing all chapters (34)
          </p>
        </div>

        <Button
          variant="ghost"
          className="flex items-center gap-1 h-9 px-2 py-2 rounded-[10px] text-[#6fbbfc]"
        >
          <ArrowUpDownIcon className="w-5 h-5" />
          <span className="text-[#6fbbfc] font-medium">Sort</span>
        </Button>
      </div>

      <div className="flex flex-col w-full items-start gap-4 p-4 bg-[#222e3f]">
        {chapters.map((chapter) => (
          <Card
            key={chapter.id}
            className="flex items-center gap-4 p-4 w-full bg-[#222e3f] rounded-xl border border-solid border-[#3e5574]"
          >
            <CardContent className="flex items-center gap-4 p-0 w-full">
              <img
                className="w-6 h-6"
                alt={`${chapter.name} icon`}
                src={chapter.icon}
              />

              <div className="flex flex-col items-start gap-2 flex-1">
                <div className="flex items-center gap-6 w-full">
                  <h3 className="flex-1 mt-[-1.00px] font-medium text-white text-base">
                    {chapter.name}
                  </h3>

                  <div className="text-right whitespace-nowrap text-xs">
                    <span className="text-[#b9bfd0]">2025: </span>
                    <span className="text-[#b9bfd0]">
                      {chapter.stats.year2025}
                    </span>
                    {chapter.trend === "up" && (
                      <span className="text-[#56eeb0]"> ↑</span>
                    )}
                    {chapter.trend === "down" && (
                      <span className="text-[#fb474c]"> ↓</span>
                    )}
                    <span className="text-[#b9bfd0]"> | 2024: </span>
                    <span className="text-[#b9bfd0]">
                      {chapter.stats.year2024}
                    </span>
                  </div>

                  <span className="text-[#3e5574] text-xs">|</span>

                  <span className="text-[#b9bfd0] text-xs">
                    {chapter.progress}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
