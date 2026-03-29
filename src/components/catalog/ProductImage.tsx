const COLORS: Record<string, { bg: string; accent: string; label: string }> = {
  'cfg-01': { bg: '#0d1117', accent: '#22d3ee', label: 'TITAN i9' },
  'cfg-02': { bg: '#0d1117', accent: '#7c3aed', label: 'RYZEN 9' },
  'cfg-03': { bg: '#0d1117', accent: '#10b981', label: 'PRO i7' },
  'lap-01': { bg: '#0a0f1e', accent: '#f43f5e', label: 'ROG SCAR' },
  'lap-02': { bg: '#0a0f1e', accent: '#6366f1', label: 'LEGION 7' },
  'lap-03': { bg: '#0a0f1e', accent: '#14b8a6', label: 'THINKPAD' },
  'comp-01': { bg: '#0d1117', accent: '#f59e0b', label: 'RTX 4080' },
  'peri-01': { bg: '#0d1117', accent: '#ec4899', label: 'NEON SET' },
};

export function ProductImage({ imageId, className }: { imageId: string; className?: string }) {
  const cfg = COLORS[imageId] ?? { bg: '#0d1117', accent: '#22d3ee', label: imageId };
  const isLaptop = imageId.startsWith('lap-');
  const isPeri = imageId.startsWith('peri-');

  return (
    <svg
      className={className}
      viewBox="0 0 320 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ background: cfg.bg }}
    >
      <defs>
        <radialGradient id={`glow-${imageId}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={cfg.accent} stopOpacity="0.25" />
          <stop offset="100%" stopColor={cfg.accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="320" height="200" fill={cfg.bg} />
      <rect width="320" height="200" fill={`url(#glow-${imageId})`} />

      {/* Grid lines */}
      {[40, 80, 120, 160, 200, 240, 280].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="200" stroke={cfg.accent} strokeOpacity="0.05" strokeWidth="1" />
      ))}
      {[40, 80, 120, 160].map(y => (
        <line key={y} x1="0" y1={y} x2="320" y2={y} stroke={cfg.accent} strokeOpacity="0.05" strokeWidth="1" />
      ))}

      {isLaptop ? (
        <>
          <rect x="60" y="40" width="200" height="120" rx="8" fill="#1e293b" stroke={cfg.accent} strokeWidth="1.5" strokeOpacity="0.6" />
          <rect x="68" y="48" width="184" height="100" rx="4" fill="#0f172a" />
          <rect x="80" y="58" width="160" height="80" rx="2" fill="#1e293b" opacity="0.5" />
          <line x1="80" y1="80" x2="240" y2="80" stroke={cfg.accent} strokeWidth="1" strokeOpacity="0.3" />
          <line x1="80" y1="100" x2="200" y2="100" stroke={cfg.accent} strokeWidth="1" strokeOpacity="0.2" />
          <line x1="80" y1="120" x2="220" y2="120" stroke={cfg.accent} strokeWidth="1" strokeOpacity="0.2" />
          <rect x="100" y="160" width="120" height="10" rx="5" fill="#1e293b" stroke={cfg.accent} strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="160" cy="165" r="3" fill={cfg.accent} fillOpacity="0.5" />
        </>
      ) : isPeri ? (
        <>
          <rect x="50" y="110" width="220" height="60" rx="8" fill="#1e293b" stroke={cfg.accent} strokeWidth="1.5" strokeOpacity="0.6" />
          {[70, 90, 110, 130, 150, 170, 190, 210, 230].map((x, i) => (
            <rect key={i} x={x} y="118" width="14" height="14" rx="3" fill="#0f172a" stroke={cfg.accent} strokeWidth="1" strokeOpacity="0.4" />
          ))}
          {[80, 100, 120, 140, 160, 180, 200, 220].map((x, i) => (
            <rect key={i} x={x} y="138" width="14" height="14" rx="3" fill="#0f172a" stroke={cfg.accent} strokeWidth="1" strokeOpacity="0.4" />
          ))}
          <ellipse cx="240" cy="80" rx="30" ry="35" fill="#1e293b" stroke={cfg.accent} strokeWidth="1.5" strokeOpacity="0.6" />
          <ellipse cx="240" cy="80" rx="10" ry="12" fill="#0f172a" stroke={cfg.accent} strokeWidth="1" strokeOpacity="0.4" />
        </>
      ) : (
        <>
          <rect x="80" y="30" width="160" height="140" rx="6" fill="#1e293b" stroke={cfg.accent} strokeWidth="1.5" strokeOpacity="0.6" />
          <rect x="88" y="38" width="144" height="90" rx="4" fill="#0f172a" />
          <rect x="95" y="45" width="60" height="75" rx="3" fill="#1e293b" opacity="0.8" />
          {[0, 1, 2, 3].map(i => (
            <rect key={i} x="98" y={50 + i * 16} width="54" height="10" rx="2" fill={cfg.accent} fillOpacity={0.15 + i * 0.05} />
          ))}
          <rect x="165" y="45" width="60" height="35" rx="3" fill={cfg.accent} fillOpacity="0.1" stroke={cfg.accent} strokeWidth="1" strokeOpacity="0.3" />
          <text x="195" y="67" fill={cfg.accent} fontSize="8" textAnchor="middle" fontFamily="monospace" fillOpacity="0.7">GPU</text>
          <rect x="88" y="135" width="144" height="20" rx="2" fill="#0f172a" />
          <rect x="93" y="138" width="30" height="14" rx="2" fill={cfg.accent} fillOpacity="0.2" />
          <rect x="127" y="138" width="50" height="14" rx="2" fill={cfg.accent} fillOpacity="0.1" />
          <rect x="90" y="168" width="140" height="8" rx="4" fill="#1e293b" stroke={cfg.accent} strokeWidth="1" strokeOpacity="0.4" />
        </>
      )}

      <text x="160" y="192" fill={cfg.accent} fontSize="9" textAnchor="middle" fontFamily="monospace" fillOpacity="0.6">{cfg.label}</text>
      <circle cx="290" cy="20" r="4" fill={cfg.accent} fillOpacity="0.7" />
      <circle cx="30" cy="180" r="3" fill={cfg.accent} fillOpacity="0.5" />
    </svg>
  );
}
