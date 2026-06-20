export const NixLogo = ({ size = 28, className = "", showWordmark = true }) => (
  <div className={`flex items-center gap-2 ${className}`} data-testid="nix-logo">
    <img
      src="/images/logo.png"
      alt="Nix"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className="rounded-[6px] select-none"
      draggable={false}
    />
    {showWordmark && (
      <span className="text-[15px] font-medium tracking-tight text-white">Nix</span>
    )}
  </div>
);
