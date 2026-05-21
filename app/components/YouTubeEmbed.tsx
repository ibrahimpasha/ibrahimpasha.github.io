type Props = {
  videoId: string;
  title?: string;
  variant?: "hero-loop" | "standard";
};

export function YouTubeEmbed({ videoId, title, variant = "standard" }: Props) {
  const params =
    variant === "hero-loop"
      ? new URLSearchParams({
          autoplay: "1",
          mute: "1",
          loop: "1",
          playlist: videoId,
          controls: "0",
          modestbranding: "1",
          rel: "0",
          playsinline: "1",
          disablekb: "1",
          iv_load_policy: "3",
          fs: "0",
        })
      : new URLSearchParams({
          rel: "0",
          modestbranding: "1",
          playsinline: "1",
        });

  const src = `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-ink">
      <iframe
        src={src}
        title={title ?? "Video"}
        loading="lazy"
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
