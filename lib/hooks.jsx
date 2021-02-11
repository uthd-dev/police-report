import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useReport() {
  const { data, error } = useSWR(`/api/reports`, fetcher);
  return {
    reports: data,
    isLoading: !error && !data,
    isError: error,
  };
}
