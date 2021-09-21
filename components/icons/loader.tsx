const LoaderIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="h-full" style={{ margin: "auto", background: "transparent", display: "block", shapeRendering: "auto" }} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="50" fill="none" stroke="currentColor" strokeWidth="10" r="40" strokeDasharray="188.49555921538757 64.83185307179586">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.9615384615384615s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
      </circle>
    </svg>
  )
}

export default LoaderIcon