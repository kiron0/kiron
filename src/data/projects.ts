export type TPortfolio = {
  title: string;
  description: string;
  sourceCode?: {
    frontend: string;
    backend: string;
  };
};

const BASE_API_URL = "https://api.kiron.dev/api/v1";

const API_KEY = "lkjs0904klfghog9douy09uhgu0430gpdjlkg09udjpggrljhg09";

export async function getPortfolios(): Promise<TPortfolio[]> {
  try {
    const apiUrl = BASE_API_URL;
    const apiKey = API_KEY;
    const url = `${apiUrl}/portfolio/published`;
    const result = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const data = await result.json();
    return data?.data?.portfolios;
  } catch (error) {
    console.log(error);
    return [];
  }
}
