export default function ArtworkLoading() {
  return (
    <div className="fixed inset-0 bg-zinc-900">
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-white/5 animate-pulse" />
          <div className="space-y-6">
            <div className="h-8 bg-white/5 rounded-lg w-3/4 animate-pulse" />
            <div className="h-4 bg-white/5 rounded-lg w-1/2 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 bg-white/5 rounded-lg animate-pulse" />
              <div className="h-4 bg-white/5 rounded-lg animate-pulse" />
              <div className="h-4 bg-white/5 rounded-lg w-3/4 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}