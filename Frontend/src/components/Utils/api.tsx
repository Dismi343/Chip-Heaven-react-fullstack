import axios from 'axios';
import { Item } from '../Data/ProductType';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchItems = async (): Promise<Item[]> => {
    const response = await axios.get<Item[]>(`${API_BASE_URL}/items`);
    return response.data;
  };

