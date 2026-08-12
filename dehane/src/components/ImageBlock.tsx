import Image from "next/image";

export function ImageBlock({
  src,
  alt,
  priority = false
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="image-panel">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 720px) 50vw, 100vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
