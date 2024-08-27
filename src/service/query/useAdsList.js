import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";
export const useAdsList = () => {
  return useQuery({
    queryKey: ["ads-list"],
    queryFn: () => request.get("/ads").then((res) => res.data),
  });
};
