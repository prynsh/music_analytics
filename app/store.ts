'use client'
import { create } from "zustand";

type DashboardState = {
  totalCount: number;
  activeCount: number;
  totalStream: number;
  revenueCount: number;
  artistName: string;
};

export const useDashboardStore = create<DashboardState>(() => ({
  totalCount: 5981,
  activeCount: 3861,
  totalStream: 7802,
  revenueCount: 9832,
  artistName: "Karan Aujla",
}));
