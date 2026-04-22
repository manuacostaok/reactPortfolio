import { useEffect } from "react";

export const CursorTrail = () => {
  useEffect(() => {
    const dots = [];

    const createDot = (x, y) => {
      const dot = document.createElement("div");
      dot.className = "cursor-dot";
      document.body.appendChild(dot);

      dot.style.left = x + "px";
      dot.style.top = y + "px";

      setTimeout(() => dot.remove(), 400);
    };

    const move = (e) => {
      createDot(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return null;
};