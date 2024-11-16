import { URLs } from "@/api";

export default (image: string): string => {
  return URLs.image_base_url + image;
};
