export default function Loading() {
  return (
    <div className="fixed inset-0 bg-zinc-900">
      <div className="min-h-screen flex items-center justify-center">
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-full border-4 border-white/10 border-t-white/90 animate-spin" />
        </div>
      </div>
    </div>
  );
}