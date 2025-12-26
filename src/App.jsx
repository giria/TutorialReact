import { useEffect, useState } from "react";

export default function FileProcessing() {
  const [count, setCount] = useState(1);
  const total = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= total) {
          clearInterval(interval);
          return total;
        }
        return prev + 1;
      });
    }, 50); // speed of counting (ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Processing files...</h2>
      <p>
        {count} / {total} files processed
      </p>

      <progress value={count} max={total} style={{ width: "100%" }} />
    </div>
  );
}