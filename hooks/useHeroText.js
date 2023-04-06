// useHeroText.js
import { useQuery } from "react-query";

export function useHeroText(number) {
  const fetchHeroText = async (number) => {
    const response = await fetch(`/api/getHeroText?number=${number}`);
    const data = await response.json();
    return data.heroText.hero_texts;
  };

  const {
    data: heroText,
    isLoading,
    error,
  } = useQuery(["heroText", number], () => fetchHeroText(number), {
    enabled: !!number,
  });

  return { heroText, isLoading, error };
}
