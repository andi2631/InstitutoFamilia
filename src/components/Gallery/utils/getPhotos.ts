export interface MediaFile {
  type: "image" | "video";
  src: string;
  alt: string;
}

export interface GalleryProps {
  eventName: string;
}

/**
 * Lista las imágenes y videos de una carpeta específica en el build.
 */
export const listMediaFromFolder = (folderName: string): MediaFile[] => {
  if (!folderName) {
    throw new Error("No se proporcionó un nombre de carpeta.");
  }

  const media: MediaFile[] = [];

  if (folderName === "sobreRocas") {
    media.push(
      { src: `/gallery/${folderName}/img1.jpeg`, type: "image", alt: "Imagen 1" },
      { src: `/gallery/${folderName}/img2.jpeg`, type: "image", alt: "Imagen 2" },
      { src: `/gallery/${folderName}/img3.jpeg`, type: "image", alt: "Imagen 1" },
      { src: `/gallery/${folderName}/img4.jpeg`, type: "image", alt: "Imagen 2" },
      { src: `/gallery/${folderName}/img5.jpeg`, type: "image", alt: "Imagen 2" },
      { src: `/gallery/${folderName}/img6.jpeg`, type: "image", alt: "Imagen 1" },
      { src: `/gallery/${folderName}/img7.jpeg`, type: "image", alt: "Imagen 2" },
    );
  }

  if (folderName === "cimientos") {
    media.push(
      { src: `/gallery/${folderName}/img4.jpeg`, type: "image", alt: "Imagen 4" },
      { src: `/gallery/${folderName}/img5.jpeg`, type: "image", alt: "Imagen 5" },
      { src: `/gallery/${folderName}/img6.jpeg`, type: "image", alt: "Imagen 6" },
      { src: `/gallery/${folderName}/img7.jpeg`, type: "image", alt: "Imagen 7" },
      { src: `/gallery/${folderName}/img8.jpeg`, type: "image", alt: "Imagen 8" },
      { src: `/gallery/${folderName}/img9.jpeg`, type: "image", alt: "Imagen 9" },
      { src: `/gallery/${folderName}/img10.jpeg`, type: "image", alt: "Imagen 10" },
      { src: `/gallery/${folderName}/img11.jpeg`, type: "image", alt: "Imagen 11" },
      { src: `/gallery/${folderName}/video1.mp4`, type: "video", alt: "Video 1" },
      { src: `/gallery/${folderName}/video2.mp4`, type: "video", alt: "Video 2" },
      { src: `/gallery/${folderName}/video3.mp4`, type: "video", alt: "Video 3" },
    );
  }

  return media;
};


export const listAllGalleries = (folders: string[]): GalleryProps[] => {
  return folders.map((folder) => {
    const GalleryPhotos = listMediaFromFolder(folder);
    return { eventName: folder, GalleryPhotos };
  });
};
