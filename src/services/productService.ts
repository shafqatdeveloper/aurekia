import axios from "axios";
import { Product, ApiResponse } from "@/types";

const API_URL = "/api/products";

export const productService = {
  async getProducts(): Promise<ApiResponse<Product[]>> {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error: unknown) {
      const errorMessage =
        axios.isAxiosError(error) && error.response?.data?.message
          ? error.response.data.message
          : "Failed to fetch products";
      return {
        success: false,
        error: errorMessage,
      };
    }
  },

  async getProductById(id: string): Promise<ApiResponse<Product>> {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error: unknown) {
      const errorMessage =
        axios.isAxiosError(error) && error.response?.data?.message
          ? error.response.data.message
          : "Failed to fetch product";
      return {
        success: false,
        error: errorMessage,
      };
    }
  },
};
