"use client";

import React from "react";
import { Provider } from 'react-redux';
import { Desktop } from "@/screens/Desktop";
import { store } from "@/store";

export default function Page() {
  return (
    <Provider store={store}>
      <Desktop />
    </Provider>
  );
}
