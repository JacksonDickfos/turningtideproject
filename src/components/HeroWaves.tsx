/** Rolling wave band at the bottom of the homepage hero. */
export function HeroWaves() {
  return (
    <div className="heroWaves" aria-hidden="true">
      <svg
        className="heroWaveLayer heroWaveLayer--back"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,70 C100,70 160,30 250,30 C340,30 500,70 720,70
             C820,70 880,30 970,30 C1060,30 1220,70 1440,70
             L1440,120 L0,120 Z"
          fill="#a89060"
        />
      </svg>
      <svg
        className="heroWaveLayer heroWaveLayer--mid"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,65 C90,65 140,15 230,15 C320,15 530,65 720,65
             C810,65 860,15 950,15 C1040,15 1250,65 1440,65
             L1440,120 L0,120 Z"
          fill="#ccb28a"
        />
      </svg>
      <svg
        className="heroWaveLayer heroWaveLayer--front"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,62 C80,62 130,5 220,5 C310,5 540,62 720,62
             C800,62 850,5 940,5 C1030,5 1260,62 1440,62
             L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
