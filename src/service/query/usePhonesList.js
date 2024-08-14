import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";
export const usePhoneList = () => {
  return useQuery({
    queryKey: ["phone-list"],
    queryFn: () => request.get("/phones").then((res) => res.data),
  });
};
