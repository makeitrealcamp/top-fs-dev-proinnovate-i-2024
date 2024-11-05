import { v2 as cloudinary, type UploadApiOptions } from 'cloudinary';
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from '../../config/config';

export interface CloudinaryAdapter {
  uploadImage(
    filePath: string,
    options?: UploadApiOptions,
  ): Promise<{ url: string; publicId: string }>;
  deleteImage(publicId: string): Promise<void>;
}

// Implement the adapter
export const createCloudinaryAdapter = (): CloudinaryAdapter => {
  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
  });

  return {
    uploadImage: async (
      filePath: string,
      options?: UploadApiOptions,
    ): Promise<{ url: string; publicId: string }> => {
      const result = await cloudinary.uploader.upload(filePath, options);
      return { url: result.secure_url, publicId: result.public_id };
    },
    deleteImage: async (publicId: string): Promise<void> => {
      await cloudinary.uploader.destroy(publicId);
    },
  };
};
