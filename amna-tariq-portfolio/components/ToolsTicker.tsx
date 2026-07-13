import { toolsTicker } from "@/data/projects";

export default function ToolsTicker() {
  return (
    <div className="relative border-y border-base-line py-4 overflow-hidden">
      <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-10 font-mono text-sm text-porcelain-muted">
        {[...toolsTicker, ...toolsTicker].map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            {item}
            <span className="text-gold/50">/</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
