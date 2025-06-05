import { ChevronRightIcon } from "lucide-react";
import React from "react";

export const SecondaryNavigationSection = () => {
  // Navigation items data
  const navItems = [
    {
      id: 1,
      title: "Physics PYQs",
      icon: "/subject-icons-2.svg",
      active: true,
    },
    {
      id: 2,
      title: "Chemistry PYQs",
      icon: "/subject-icons.svg",
      active: false,
    },
    {
      id: 3,
      title: "Mathematics PYQs",
      icon: "/subject-icons-3.svg",
      active: false,
    },
  ];

  return (
    <nav className="flex flex-col h-full w-[272px] bg-[#222e3f]">
      {/* Header section */}
      <div className="flex flex-col w-full items-start p-6 bg-[#222e3f]">
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex items-center gap-4 w-full">
            <div className="w-6 h-6 bg-[url('/exam-logo.jpg')] bg-center bg-cover" />
            <h2 className="font-['Inter',Helvetica] font-bold text-white text-xl leading-6">
              JEE Main
            </h2>
          </div>

          <div className="flex items-center justify-center gap-1 w-full">
            <p className="w-full font-body-xs-12 text-[#b9bfd0] text-[length:var(--body-xs-12-font-size)] tracking-[var(--body-xs-12-letter-spacing)] leading-[var(--body-xs-12-line-height)]">
              2025 - 2009 | 173 Papers | 15825 Qs
            </p>
          </div>
        </div>
      </div>

      {/* Navigation items */}
      <div className="flex flex-col gap-4 px-4 pb-4 w-full">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`flex h-12 items-center gap-4 px-4 py-3 w-full rounded-xl ${
              item.active ? "bg-[#1d2933]" : "bg-[#222e3f]"
            } hover:bg-[#1d2933] transition-colors`}
          >
            <img
              className="w-6 h-6"
              alt={`${item.title} icon`}
              src={item.icon}
            />
            <span className="flex-1 font-label-sm-14 font-[number:var(--label-sm-14-font-weight)] text-white text-[length:var(--label-sm-14-font-size)] tracking-[var(--label-sm-14-letter-spacing)] leading-[var(--label-sm-14-line-height)]">
              {item.title}
            </span>
            <ChevronRightIcon className="w-5 h-5 text-white" />
          </button>
        ))}
      </div>
    </nav>
  );
};
