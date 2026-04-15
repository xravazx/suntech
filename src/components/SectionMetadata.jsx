const SectionMetadata = ({ label = "SYST/V1.2", position = "top-left" }) => {
  const styles = {
    position: 'absolute',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.65rem',
    color: 'rgba(255, 255, 255, 0.4)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    pointerEvents: 'none',
    zIndex: 1,
    padding: '0.5rem',
  };

  const positions = {
    'top-left': { top: 0, left: 0 },
    'top-right': { top: 0, right: 0 },
    'bottom-left': { bottom: 0, left: 0 },
    'bottom-right': { bottom: 0, right: 0 },
  };

  return (
    <div style={{ ...styles, ...positions[position] }}>
      [{label}] // LOC_{Math.random().toString(36).substring(7).toUpperCase()}
    </div>
  );
};

export default SectionMetadata;
