import axios from 'axios';
import { BASE_URL } from '../utils/config';

export interface NewsletterSubscription {
  _id: string;
  email: string;
  date: string;
}

export const getSubscriptions = async (): Promise<NewsletterSubscription[]> => {
  const response = await axios.get(`${BASE_URL}/api/newsletter`, {
    headers: {
      'x-auth-token': localStorage.getItem('adminToken')
    }
  });
  return response.data;
};

export const deleteSubscription = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/api/newsletter/${id}`, {
    headers: {
      'x-auth-token': localStorage.getItem('adminToken')
    }
  });
};