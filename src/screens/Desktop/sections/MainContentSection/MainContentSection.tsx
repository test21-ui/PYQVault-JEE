import { ArrowUpDownIcon, ChevronDownIcon } from "lucide-react";
import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@/components/button";
import { Card, CardContent } from "@/components/card";
import { Badge } from "@/components/badge";
import { Separator } from "@/components/separator";
import { mockData, getUniqueClasses, getUniqueUnits, getUniqueStatuses } from "@/data/chapter";
import { toggleSortOrder, setSelectedClasses, setSelectedUnits, setSelectedStatus, toggleWeakChapters } from "@/store/slices/filterSlice";
import type { RootState } from "@/store";
import { Cube, Atom, Function, Calculator, Beaker } from "phosphor-react";

const getChapterIcon = (index: number) => {
  const icons = [Cube, Atom, Function, Calculator];
  return icons[index % icons.length];
};

export const MainContentSection = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);
  const [showClassDropdown, setShowClassDropdown] = useState(false);
  const [showUnitDropdown, setShowUnitDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  const subjectData = useMemo(() => 
    mockData.filter(chapter => chapter.subject === filters.selectedSubject),
    [filters.selectedSubject]
  );

  const classes = useMemo(() => getUniqueClasses(subjectData), [subjectData]);
  const units = useMemo(() => getUniqueUnits(subjectData), [subjectData]);
  const statuses = useMemo(() => getUniqueStatuses(subjectData), [subjectData]);

  const filteredChapters = useMemo(() => {
    let filtered = subjectData;

    if (filters.selectedClasses.length > 0) {
      filtered = filtered.filter(chapter => filters.selectedClasses.includes(chapter.class));
    }

    if (filters.selectedUnits.length > 0) {
      filtered = filtered.filter(chapter => filters.selectedUnits.includes(chapter.unit));
    }

    if (filters.selectedStatus.length > 0) {
      filtered = filtered.filter(chapter => filters.selectedStatus.includes(chapter.status));
    }

    if (filters.showWeakChapters) {
      filtered = filtered.filter(chapter => chapter.isWeakChapter);
    }

    if (filters.sortOrder === 'desc') {
      filtered = [...filtered].reverse();
    }

    return filtered;
  }, [filters, subjectData]);

  const handleClassSelect = (selectedClass: string) => {
    const newSelection = filters.selectedClasses.includes(selectedClass)
      ? filters.selectedClasses.filter(c => c !== selectedClass)
      : [...filters.selectedClasses, selectedClass];
    dispatch(setSelectedClasses(newSelection));
  };

  const handleUnitSelect = (selectedUnit: string) => {
    const newSelection = filters.selectedUnits.includes(selectedUnit)
      ? filters.selectedUnits.filter(u => u !== selectedUnit)
      : [...filters.selectedUnits, selectedUnit];
    dispatch(setSelectedUnits(newSelection));
  };

  const handleStatusSelect = (selectedStatus: string) => {
    const newSelection = filters.selectedStatus.includes(selectedStatus)
      ? filters.selectedStatus.filter(s => s !== selectedStatus)
      : [...filters.selectedStatus, selectedStatus];
    dispatch(setSelectedStatus(newSelection));
  };

  const getSubjectIcon = () => {
    switch (filters.selectedSubject) {
      case 'Physics':
        return Atom;
      case 'Chemistry':
        return Beaker;
      case 'Mathematics':
        return Calculator;
      default:
        return Atom;
    }
  };

  const SubjectIcon = getSubjectIcon();

  return (
    <div className="flex flex-col w-full items-start bg-[#1b2132] border border-solid border-[#30435a]">
      <header className="flex flex-col w-full items-start pt-6 pb-4 px-6 bg-[#222e3f]">
        <div className="flex items-start w-full bg-[#222e3f]">
          <div className="flex flex-col items-start gap-4 flex-1">
            <div className="inline-flex items-center gap-4">
              <SubjectIcon size={24} weight="fill" className="text-white" />
              <h1 className="font-bold text-white text-xl tracking-[0] leading-6">
                {filters.selectedSubject} PYQs
              </h1>
            </div>
            <p className="text-[#b9bfd0] text-sm tracking-[0] leading-[18.2px]">
              Chapter-wise Collection of {filters.selectedSubject} PYQs
            </p>
          </div>
        </div>
      </header>

      <div className="flex w-full items-center gap-2 px-4 py-3 bg-[#222e3f] relative">
        <div className="relative">
          <Button
            variant="outline"
            className="flex items-center justify-center gap-0.5 p-1.5 bg-[#222e3f] rounded-xl border border-solid border-[#3e5574]"
            onClick={() => setShowClassDropdown(!showClassDropdown)}
          >
            <span className="text-white font-medium">
              {filters.selectedClasses.length > 0 
                ? `${filters.selectedClasses.length} Classes`
                : "Class"}
            </span>
            <ChevronDownIcon className="w-5 h-5" />
          </Button>
          {showClassDropdown && (
            <div className="absolute top-full mt-1 w-48 bg-[#222e3f] border border-[#3e5574] rounded-xl z-50">
              {classes.map((cls) => (
                <button
                  key={cls}
                  className={`w-full text-left px-4 py-2 hover:bg-[#1d2933] text-white ${
                    filters.selectedClasses.includes(cls) ? "bg-[#1d2933]" : ""
                  }`}
                  onClick={() => handleClassSelect(cls)}
                >
                  {cls}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <Button
            variant="outline"
            className="flex items-center justify-center gap-0.5 p-1.5 bg-[#222e3f] rounded-xl border border-solid border-[#3e5574]"
            onClick={() => setShowUnitDropdown(!showUnitDropdown)}
          >
            <span className="text-white font-medium">
              {filters.selectedUnits.length > 0 
                ? `${filters.selectedUnits.length} Units`
                : "Units"}
            </span>
            <ChevronDownIcon className="w-5 h-5" />
          </Button>
          {showUnitDropdown && (
            <div className="absolute top-full mt-1 w-48 bg-[#222e3f] border border-[#3e5574] rounded-xl z-50">
              {units.map((unit) => (
                <button
                  key={unit}
                  className={`w-full text-left px-4 py-2 hover:bg-[#1d2933] text-white ${
                    filters.selectedUnits.includes(unit) ? "bg-[#1d2933]" : ""
                  }`}
                  onClick={() => handleUnitSelect(unit)}
                >
                  {unit}
                </button>
              ))}
            </div>
          )}
        </div>

        <Separator
          orientation="vertical"
          className="h-6 bg-[#3e5574] rounded-xl"
        />

        <div className="relative">
          <Badge
            variant="outline"
            className="flex items-center justify-center gap-0.5 p-1.5 bg-[#222e3f] rounded-xl border border-solid border-[#3e5574] cursor-pointer"
            onClick={() => setShowStatusDropdown(!showStatusDropdown)}
          >
            <span className="text-white font-medium">
              {filters.selectedStatus.length > 0 
                ? filters.selectedStatus.join(", ")
                : "Status"}
            </span>
          </Badge>
          {showStatusDropdown && (
            <div className="absolute top-full mt-1 w-48 bg-[#222e3f] border border-[#3e5574] rounded-xl z-50">
              {statuses.map((status) => (
                <button
                  key={status}
                  className={`w-full text-left px-4 py-2 hover:bg-[#1d2933] text-white ${
                    filters.selectedStatus.includes(status) ? "bg-[#1d2933]" : ""
                  }`}
                  onClick={() => handleStatusSelect(status)}
                >
                  {status}
                </button>
              ))}
            </div>
          )}
        </div>

        <Button
          variant="outline"
          className={`min-w-8 min-h-8 p-0 bg-[#222e3f] rounded-xl border border-solid ${
            filters.showWeakChapters ? "border-[#56eeb0]" : "border-[#3e5574]"
          }`}
          onClick={() => dispatch(toggleWeakChapters())}
        >
          <div className={`w-8 h-8 flex items-center justify-center ${
            filters.showWeakChapters ? "text-[#56eeb0]" : "text-white"
          }`}>
            W
          </div>
        </Button>
      </div>

      <div className="flex w-full min-h-12 items-center px-4 py-0 bg-[#222e3f]">
        <div className="flex flex-col items-start justify-center gap-1 pl-0 pr-2 py-2 flex-1">
          <p className="w-full mt-[-1.00px] text-white text-sm">
            Showing {filteredChapters.length} chapters
          </p>
        </div>

        <Button
          variant="ghost"
          className="flex items-center gap-1 h-9 px-2 py-2 rounded-[10px] text-[#6fbbfc]"
          onClick={() => dispatch(toggleSortOrder())}
        >
          <ArrowUpDownIcon className="w-5 h-5" />
          <span className="text-[#6fbbfc] font-medium">Sort</span>
        </Button>
      </div>

      <div className="flex flex-col w-full items-start gap-4 p-4 bg-[#222e3f]">
        {filteredChapters.map((chapter, index) => {
          const Icon = getChapterIcon(index);
          const totalQuestions = Object.values(chapter.yearWiseQuestionCount).reduce((a, b) => a + b, 0);
          const trend = chapter.yearWiseQuestionCount["2025"] > chapter.yearWiseQuestionCount["2024"] ? "up" : 
                       chapter.yearWiseQuestionCount["2025"] < chapter.yearWiseQuestionCount["2024"] ? "down" : "none";

          return (
            <Card
              key={chapter.chapter}
              className="flex items-center gap-4 p-4 w-full bg-[#222e3f] rounded-xl border border-solid border-[#3e5574]"
            >
              <CardContent className="flex items-center gap-4 p-0 w-full">
                <Icon size={24} weight="fill" className="text-white" />

                <div className="flex flex-col items-start gap-2 flex-1">
                  <div className="flex items-center gap-6 w-full">
                    <h3 className="flex-1 mt-[-1.00px] font-medium text-white text-base">
                      {chapter.chapter}
                    </h3>

                    <div className="text-right whitespace-nowrap text-xs">
                      <span className="text-[#b9bfd0]">2025: </span>
                      <span className="text-[#b9bfd0]">
                        {chapter.yearWiseQuestionCount["2025"]}Qs
                      </span>
                      {trend === "up" && (
                        <span className="text-[#56eeb0]"> ↑</span>
                      )}
                      {trend === "down" && (
                        <span className="text-[#fb474c]"> ↓</span>
                      )}
                      <span className="text-[#b9bfd0]"> | 2024: </span>
                      <span className="text-[#b9bfd0]">
                        {chapter.yearWiseQuestionCount["2024"]}Qs
                      </span>
                    </div>

                    <span className="text-[#3e5574] text-xs">|</span>

                    <span className="text-[#b9bfd0] text-xs">
                      {chapter.questionSolved}/{totalQuestions} Qs
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};