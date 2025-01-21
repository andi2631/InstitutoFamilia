const BUCKET_URL = 'https://instituto-familia-s3.s3.us-west-2.amazonaws.com/Screenshot+2024-10-21+083746.png'

export interface GalleryProps {
  GalleryPhotos: EventImages[];
  eventName: string;
}

type EventImages = {
  src: string;
  alt: string;
}

export const EventsWithPhotos : GalleryProps[] = [
  {
    eventName: 'Curso Matrimonio X fecha',
    GalleryPhotos: [
      { src: `${BUCKET_URL}/volunteer.jpg`, alt: 'Volunteers working' },
      { src: 'https://source.unsplash.com/random/800x600?education', alt: 'Educational program' },
      { src: 'https://source.unsplash.com/random/800x600?environment', alt: 'Environmental project' },
      { src: 'https://source.unsplash.com/random/800x600?teamwork', alt: 'Team collaboration' },
      { src: 'https://source.unsplash.com/random/800x600?impact', alt: 'Making an impact' },
    ]
  },

]