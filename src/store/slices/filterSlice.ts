import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  selectedClasses: string[];
  selectedUnits: string[];
  selectedStatus: string[];
  showWeakChapters: boolean;
  sortOrder: 'asc' | 'desc';
}

const initialState: FiltersState = {
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
  setSelectedClasses,
  setSelectedUnits,
  setSelectedStatus,
  toggleWeakChapters,
  toggleSortOrder,
} = filtersSlice.actions;

export default filtersSlice.reducer;