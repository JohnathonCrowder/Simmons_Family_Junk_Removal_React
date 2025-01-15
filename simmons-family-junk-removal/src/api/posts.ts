import axios from 'axios';

// Get the base URL from environment variable or fall back to the production URL
const API_BASE_URL = 'https://codefusionlabs-backend.onrender.com';
const API_URL = `${API_BASE_URL}/api/posts`;

export interface Post {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string | null;
  date: string;
  category?: string;
  tags?: string[];
}

export const deletePost = async (id: string): Promise<void> => {
  try {
    const token = localStorage.getItem('adminToken');
    await axios.delete(`${API_URL}/${id}`, {
      headers: {
        'x-auth-token': token
      }
    });
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const exportPost = async (id: string): Promise<void> => {
  try {
    const response = await axios.get(`${API_URL}/${id}/export`, {
      responseType: 'blob'
    });
    
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `post-${id}.zip`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error('Error exporting post:', error);
    throw error;
  }
};

export const importPost = async (zipFile: File): Promise<Post> => {
  try {
    const formData = new FormData();
    formData.append('zipFile', zipFile);

    const response = await axios.post(`${API_URL}/import`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-auth-token': localStorage.getItem('adminToken')
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error importing post:', error);
    throw error;
  }
};

export const updatePost = async (id: string, formData: FormData): Promise<Post> => {
  try {
    const token = localStorage.getItem('adminToken');
    if (!formData.get('image')) {
      formData.append('keepOldImage', 'true');
    }
    
    const response = await axios.put<Post>(`${API_URL}/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-auth-token': token
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to update post');
  }
};

export const getPostById = async (id: string): Promise<Post> => {
  const response = await axios.get<Post>(`${API_URL}/${id}`);
  return response.data;
};

export const createPost = async (formData: FormData): Promise<Post> => {
  const response = await axios.post<Post>(API_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};