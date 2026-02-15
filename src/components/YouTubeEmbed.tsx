type YouTubeEmbedProps = {
  videoId: string;
  title?: string;
  className?: string;
};

export default function YouTubeEmbed({ videoId, title, className = "" }: YouTubeEmbedProps) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
  return (
    <div className={className}>
      {title && (
        <h3 className="font-display text-lg font-semibold text-syntech-black sm:text-xl mb-4">
          {title}
        </h3>
      )}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gray-200 bg-syntech-neutral shadow-sm">
        <iframe
          src={embedUrl}
          title={title ?? "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}
