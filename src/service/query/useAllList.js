import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";
export const useAllList = () => {
  return useQuery({
    queryKey: ["all-list"],
    queryFn: () => request.get("/all").then((res) => res.data),
  });
};
