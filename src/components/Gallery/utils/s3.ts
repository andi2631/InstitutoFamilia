import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

// Configuración del cliente S3 usando variables de entorno
const BUCKET_NAME = import.meta.env.VITE_AWS_BUCKET_NAME!;
const REGION = import.meta.env.VITE_AWS_REGION!;

const s3Client = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID!,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY!,
  },
});

// Definir los tipos de archivo multimedia
export interface MediaFile {
  type: "image" | "video";
  src: string;
  alt: string;
}

export interface GalleryProps {
  eventName: string;
}

/**
 * Lista las imágenes y videos de una carpeta específica en S3.
 * @param folderName Nombre de la carpeta dentro del bucket.
 * @returns Promise<MediaFile[]> - Array de imágenes y videos con src y alt.
 */
export const listMediaFromFolder = async (folderName: string): Promise<MediaFile[]> => {
  const params = {
    Bucket: BUCKET_NAME,
    Prefix: `${folderName}/`,
  };

  try {
    const command = new ListObjectsV2Command(params);
    const data = await s3Client.send(command);

    return (
      data.Contents?.map((item) => {
        const fileType = item.Key?.split(".").pop()?.toLowerCase(); // Extrae la extensión del archivo

        if (fileType && ["jpg", "jpeg", "png", "gif", "webp"].includes(fileType)) {
          return { type: "image", src: `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${item.Key}`, alt: "Imagen del evento" };
        } else if (fileType && ["mp4", "webm", "ogg"].includes(fileType)) {
          return { type: "video", src: `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${item.Key}`, alt: "Video del evento" };
        }
        return undefined; // Evita devolver `null`
      })
      .filter((item): item is MediaFile => !!item) || [] // Asegura que el tipo sea correcto
    );
  } catch (error) {
    console.error("Error al listar archivos multimedia:", error);
    return [];
  }
};

/**
 * Obtiene todas las galerías basadas en las carpetas dentro del bucket.
 * @param folders Array con los nombres de las carpetas en S3.
 * @returns Promise<GalleryProps[]> - Lista de galerías con imágenes y videos.
 */
export const listAllGalleries = async (folders: string[]): Promise<GalleryProps[]> => {
  return Promise.all(
    folders.map(async (folder) => {
      const GalleryPhotos = await listMediaFromFolder(folder);
      return { eventName: folder, GalleryPhotos };
    })
  );
};
