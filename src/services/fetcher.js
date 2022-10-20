import { api } from "@/services/api";

export async function fetcher(url) {
  const response = await api.get(url);
  return response.data;
}

export async function fetcher2({ url }) {
  const response = await api.get(url);
  return response.data;
}
