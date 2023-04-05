// useHeroText.js
import { useQuery } from "react-query";

export function useHeroText(number) {
  const fetchHeroText = async (indexName) => {
    console.log(number);
    const response = await fetch(`/api/searchArchetype?indexName=${indexName}`);
    const data = await response.json();
    return data.heroText.hero_texts;
  };

  const {
    data: heroText,
    isLoading,
    error,
  } = useQuery(["heroText", number], () => fetchHeroText(`creator${number}`), {
    enabled: !!number,
  });

  return { heroText, isLoading, error };
}
