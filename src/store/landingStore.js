import { create } from "zustand";
import {
  Doctor1,
  Doctor2,
  Doctor3,
  Doctor4,
} from "../client/components/home/image";
import {
  IMG01,
  IMG02,
  IMG03,
  IMG04,
  IMG05,
  IMG06,
  IMG07,
  IMG08,
  IMG09,
} from "../client/components/home/clinic/img.jsx";
export const useLandingPageStore = create((set) => ({
  allAdvisors: null,
  categories: null,
  updateCategories: (data) => set({ categories: data }),
  updateAllAdvisors: (data) => set({ allAdvisors: data }),
}));
