"use client";

import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

export type MexicanCity = {
  name: string;
  lat: number;
  lng: number;
  region: string;
};

export const MEXICAN_CITIES: MexicanCity[] = [
  { name: "Ciudad de México", lat: 19.43, lng: -99.13, region: "CDMX" },
  { name: "Polanco", lat: 19.43, lng: -99.19, region: "CDMX" },
  { name: "Condesa", lat: 19.41, lng: -99.17, region: "CDMX" },
  { name: "Roma Norte", lat: 19.42, lng: -99.16, region: "CDMX" },
  { name: "Santa Fe", lat: 19.36, lng: -99.26, region: "CDMX" },
  { name: "Coyoacán", lat: 19.35, lng: -99.16, region: "CDMX" },
  { name: "Guadalajara", lat: 20.67, lng: -103.35, region: "Jalisco" },
  { name: "Zapopan", lat: 20.72, lng: -103.39, region: "Jalisco" },
  { name: "Monterrey", lat: 25.69, lng: -100.32, region: "Nuevo León" },
  { name: "San Pedro Garza García", lat: 25.66, lng: -100.40, region: "Nuevo León" },
  { name: "Puebla", lat: 19.04, lng: -98.20, region: "Puebla" },
  { name: "Querétaro", lat: 20.59, lng: -100.39, region: "Querétaro" },
  { name: "León", lat: 21.12, lng: -101.68, region: "Guanajuato" },
  { name: "Tijuana", lat: 32.51, lng: -117.04, region: "Baja California" },
  { name: "Ciudad Juárez", lat: 31.74, lng: -106.49, region: "Chihuahua" },
  { name: "Mérida", lat: 20.97, lng: -89.62, region: "Yucatán" },
  { name: "Cancún", lat: 21.16, lng: -86.85, region: "Quintana Roo" },
  { name: "Playa del Carmen", lat: 20.63, lng: -87.07, region: "Quintana Roo" },
  { name: "Puerto Vallarta", lat: 20.65, lng: -105.22, region: "Jalisco" },
  { name: "Acapulco", lat: 16.86, lng: -99.88, region: "Guerrero" },
  { name: "Toluca", lat: 19.29, lng: -99.66, region: "Estado de México" },
  { name: "Culiacán", lat: 24.81, lng: -107.39, region: "Sinaloa" },
  { name: "Hermosillo", lat: 29.07, lng: -110.96, region: "Sonora" },
  { name: "San Luis Potosí", lat: 22.16, lng: -100.98, region: "San Luis Potosí" },
  { name: "Veracruz", lat: 19.17, lng: -96.13, region: "Veracruz" },
];

export const PROFILE_CATEGORIES = [
  { key: "escort", label: "Escort", icon: "sparkles" },
  { key: "masajes", label: "Masajes", icon: "hand" },
  { key: "moteles", label: "Moteles", icon: "building" },
  { key: "sexshop", label: "Sex Shop", icon: "shopping-bag" },
  { key: "trans", label: "Trans", icon: "heart" },
  { key: "despedidas", label: "Despedidas", icon: "party" },
  { key: "videollamadas", label: "Videollamadas", icon: "video" },
] as const;

export type LocationFilterState = {
  mode: "gps" | "city";
  selectedCity: MexicanCity | null;
  selectedCategory: string | null;
  gpsLocation: [number, number] | null;
};

const LOCATION_STORAGE_KEY = "uzeed:locationFilter";

function readStored(): Partial<LocationFilterState> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(LOCATION_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function writeStored(state: Partial<LocationFilterState>) {
  try {
    localStorage.setItem(LOCATION_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

export type LocationFilterContextValue = {
  state: LocationFilterState;
  setCity: (city: MexicanCity | null) => void;
  setCategory: (cat: string | null) => void;
  setGps: (loc: [number, number]) => void;
  useCurrentLocation: () => void;
  effectiveLocation: [number, number] | null;
};

export const LocationFilterContext = createContext<LocationFilterContextValue | null>(null);

export function useLocationFilter() {
  const ctx = useContext(LocationFilterContext);
  if (!ctx) throw new Error("useLocationFilter must be within LocationFilterProvider");
  return ctx;
}

export function useLocationFilterState(): LocationFilterContextValue {
  const [state, setState] = useState<LocationFilterState>({
    mode: "gps",
    selectedCity: null,
    selectedCategory: null,
    gpsLocation: null,
  });

  useEffect(() => {
    const stored = readStored();
    if (stored.mode || stored.selectedCity || stored.gpsLocation) {
      setState(prev => ({
        ...prev,
        mode: (stored.mode as "gps" | "city") || prev.mode,
        selectedCity: stored.selectedCity || prev.selectedCity,
        gpsLocation: stored.gpsLocation || prev.gpsLocation,
      }));
    }
  }, []);

  const setCity = useCallback((city: MexicanCity | null) => {
    setState((prev) => {
      const next = { ...prev, mode: city ? "city" as const : "gps" as const, selectedCity: city };
      writeStored(next);
      return next;
    });
  }, []);

  const setCategory = useCallback((cat: string | null) => {
    setState((prev) => {
      const next = { ...prev, selectedCategory: cat };
      writeStored(next);
      return next;
    });
  }, []);

  const setGps = useCallback((loc: [number, number]) => {
    setState((prev) => {
      const next = { ...prev, gpsLocation: loc };
      writeStored(next);
      return next;
    });
  }, []);

  const useCurrentLocation = useCallback(() => {
    setState((prev) => {
      const next = { ...prev, mode: "gps" as const, selectedCity: null };
      writeStored(next);
      return next;
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setGps([pos.coords.latitude, pos.coords.longitude]),
        () => {},
        { enableHighAccuracy: true, timeout: 6000 }
      );
    }
  }, [setGps]);

  const effectiveLocation = useMemo<[number, number] | null>(
    () =>
      state.mode === "city" && state.selectedCity
        ? [state.selectedCity.lat, state.selectedCity.lng]
        : state.gpsLocation,
    [state.mode, state.selectedCity, state.gpsLocation],
  );

  return { state, setCity, setCategory, setGps, useCurrentLocation, effectiveLocation };
}
