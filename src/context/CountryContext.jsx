import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CountryContext = createContext(null);
export const useCountry = () => useContext(CountryContext);

const LS_KEY = "savedCountries_v1";

export function CountryProvider({ children }) {
  const [saved, setSaved] = useState(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(saved));
  }, [saved]);

  function saveCountry(country) {
    setSaved((prev) =>
      prev.some((c) => c.name === country.name) ? prev : [...prev, country]
    );
  }

  const value = useMemo(() => ({ saved, saveCountry }), [saved]);

  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
}
