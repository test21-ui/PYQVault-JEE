import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  selectedSubject: string;
  selectedClasses: string[];
  selectedUnits: string[];
  selectedStatus: string[];
  showWeakChapters: boolean;
  sortOrder: 'asc' | 'desc';
}

const initialState: FiltersState = {
  selectedSubject: 'Physics',
  selectedClasses: [],
  selectedUnits: [],
  selectedStatus: [],
  showWeakChapters: false,
  sortOrder: 'asc',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSelectedSubject: (state, action: PayloadAction<string>) => {
      state.selectedSubject = action.payload;
      // Reset filters when changing subject
      state.selectedClasses = [];
      state.selectedUnits = [];
      state.selectedStatus = [];
    },
    setSelectedClasses: (state, action: PayloadAction<string[]>) => {
      state.selectedClasses = action.payload;
    },
    setSelectedUnits: (state, action: PayloadAction<string[]>) => {
      state.selectedUnits = action.payload;
    },
    setSelectedStatus: (state, action: PayloadAction<string[]>) => {
      state.selectedStatus = action.payload;
    },
    toggleWeakChapters: (state) => {
      state.showWeakChapters = !state.showWeakChapters;
    },
    toggleSortOrder: (state) => {
      state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
    },
  },
});

export const {
  setSelectedSubject,
  setSelectedClasses,
  setSelectedUnits,
  setSelectedStatus,
  toggleWeakChapters,
  toggleSortOrder,
} = filtersSlice.actions;

export default filtersSlice.reducer;