type YouTubeEmbedProps = {
  videoId: string;
  title?: string;
  className?: string;
};

export default function YouTubeEmbed({ videoId, title, className = "" }: YouTubeEmbedProps) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
  return (
    <div className={className}>
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 shadow-lg ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
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
