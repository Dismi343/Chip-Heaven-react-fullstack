import axios from 'axios';
import { Item } from '../Data/ProductType';

const API_BASE_URL = 'https://chip-heaven-react-fullstack-2.onrender.com';

export const fetchItems = async (): Promise<Item[]> => {
    const response = await axios.get<Item[]>(`${API_BASE_URL}/items`);
    return response.data;
  };

