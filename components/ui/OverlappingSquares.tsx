interface OverlappingSquaresProps {
  size?: 'small' | 'medium' | 'large';
  opacity?: number;
  className?: string;
}

export const OverlappingSquares: React.FC<OverlappingSquaresProps> = ({
  size = 'medium',
  opacity = 0.9,
  className = '',
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-30 h-30',
    large: 'w-[300px] h-[300px]',
  };

  return (
    <svg
      viewBox="0 0 420 420"
      className={`${sizeClasses[size]} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Charcoal square - bottom layer */}
      <rect
        x="85"
        y="170"
        width="250"
        height="250"
        rx="40"
        fill="#1A1A1A"
        opacity={opacity}
      />

      {/* Berlin Blue square - middle layer */}
      <rect
        x="0"
        y="40"
        width="250"
        height="250"
        rx="40"
        fill="#2D5A8A"
        opacity={opacity}
      />

      {/* Amber Gold square - top layer */}
      <rect
        x="170"
        y="0"
        width="250"
        height="250"
        rx="40"
        fill="#C9A227"
        opacity={opacity}
      />
    </svg>
  );
};
