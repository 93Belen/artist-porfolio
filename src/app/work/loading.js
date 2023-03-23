export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: "auto", backgroundImage: "none", display: "block", shapeRendering: "auto"}} width="111px" height="111px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke="#fb923c" stroke-width="5" r="27" stroke-dasharray="127.23450247038662 44.411500823462205">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="3.0303030303030303s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                </circle>
            </svg>
    </div>
    )
  }