const CAT_API_URL = "https://api.thecatapi.com/v1";

type Breed = {
  name: string;
};

export type CatImage = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds?: Breed[];
};

function catApiHeaders() {
  const apiKey = process.env.CAT_API_KEY;
  if (!apiKey) {
    return {};
  }

  return {
    "x-api-key": apiKey,
  };
}

export async function getCatImages(page: number, limit: number) {
  const query = new URLSearchParams({
    limit: String(limit),
    page: String(page),
    order: "DESC",
    has_breeds: "1",
  });

  const response = await fetch(
    `${CAT_API_URL}/images/search?${query.toString()}`,
    {
      headers: catApiHeaders(),
      next: {
        revalidate: 120,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch cats");
  }

  const data = (await response.json()) as CatImage[];
  return data;
}

export async function getCatById(id: string) {
  const response = await fetch(`${CAT_API_URL}/images/${id}`, {
    headers: catApiHeaders(),
    next: {
      revalidate: 120,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch cat detail");
  }

  const data = (await response.json()) as CatImage;
  return data;
}
