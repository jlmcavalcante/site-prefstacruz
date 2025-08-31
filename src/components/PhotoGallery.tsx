interface PhotoGalleryProps {
  imageUrls: string[];
}

export default function PhotoGallery({ imageUrls }: PhotoGalleryProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {imageUrls.map((url, index) => (
        <div key={index} className="overflow-hidden rounded-lg">
          <img
            src={url}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
