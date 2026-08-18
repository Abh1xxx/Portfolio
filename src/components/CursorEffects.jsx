import { useEffect } from "react";

function CursorEffects() {
  useEffect(() => {
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (!finePointer.matches || reducedMotion.matches) {
      return undefined;
    }

    const root = document.documentElement;
    const cursor = document.querySelector(".cursor");
    const label = document.querySelector(".cursor-label");
    const dots = [...document.querySelectorAll(".cursor-trail i")];

    if (!cursor || !label || dots.length === 0) {
      return undefined;
    }

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    let currentX = targetX;
    let currentY = targetY;

    let lastX = targetX;
    let lastY = targetY;

    let velocity = 0;
    let frame;

    const contextFor = (element) => {
      if (!element) return "";

      if (element.dataset.cursor) {
        return element.dataset.cursor;
      }

      if (element.matches("a")) {
        return "OPEN";
      }

      if (element.matches(".project-card")) {
        return "VIEW";
      }

      if (element.matches(".skill-card")) {
        return "EXPLORE";
      }

      if (element.matches("button")) {
        return "SELECT";
      }

      return "";
    };

    const updateHover = (element) => {
      const text = contextFor(element);

      if (!text) {
        cursor.classList.remove("cursor-active");
        cursor.classList.remove("cursor-project");
        cursor.classList.remove("cursor-button");

        label.textContent = "";
        return;
      }

      cursor.classList.add("cursor-active");

      if (element.matches(".project-card")) {
        cursor.classList.add("cursor-project");
      }

      if (element.matches("button")) {
        cursor.classList.add("cursor-button");
      }

      label.textContent = text;
    };

    const draw = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      const dx = targetX - lastX;
      const dy = targetY - lastY;

      const movement = Math.sqrt(dx * dx + dy * dy);

      velocity += (movement - velocity) * 0.15;

      lastX = targetX;
      lastY = targetY;

      const angle = Math.atan2(dy, dx);

      root.style.setProperty("--mouse-x", `${currentX}px`);
      root.style.setProperty("--mouse-y", `${currentY}px`);
      root.style.setProperty("--cursor-speed", velocity.toFixed(2));

      cursor.style.transform = `
        translate3d(${currentX}px, ${currentY}px, 0)
        rotate(${angle}rad)
      `;

      dots.forEach((dot, index) => {
        const delay = index + 1;

        const trailX = currentX - dx * delay * 1.8;
        const trailY = currentY - dy * delay * 1.8;

        const scale = Math.max(0.35, 1 - index * 0.13);

        dot.style.transform = `
          translate3d(${trailX}px, ${trailY}px, 0)
          scale(${scale})
        `;
      });

      frame = requestAnimationFrame(draw);
    };

    const move = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const pointerOver = (event) => {
      const element = event.target.closest(
        "a, button, .project-card, .skill-card"
      );

      if (!element) return;

      updateHover(element);
    };

    const pointerOut = (event) => {
      const nextElement = event.relatedTarget?.closest?.(
        "a, button, .project-card, .skill-card"
      );

      if (!nextElement) {
        cursor.classList.remove("cursor-active");
        cursor.classList.remove("cursor-project");
        cursor.classList.remove("cursor-button");

        label.textContent = "";
      }
    };

    const click = (event) => {
      const ripple = document.createElement("span");

      ripple.className = "cursor-ripple";

      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;

      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    window.addEventListener("pointermove", move, {
      passive: true,
    });

    document.addEventListener("pointerover", pointerOver);

    document.addEventListener("pointerout", pointerOut);

    window.addEventListener("click", click);

    root.classList.add("cursor-enabled");

    draw();

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener("pointermove", move);

      document.removeEventListener("pointerover", pointerOver);

      document.removeEventListener("pointerout", pointerOut);

      window.removeEventListener("click", click);

      root.classList.remove("cursor-enabled");
    };
  }, []);

  return (
    <div className="cursor-ui" aria-hidden="true">
      <div className="cursor">
        <span className="cursor-cross horizontal" />
        <span className="cursor-cross vertical" />

        <span className="cursor-core" />

        <span className="cursor-label" />
      </div>

      <div className="cursor-trail">
        {Array.from({ length: 7 }, (_, index) => (
          <i
            key={index}
            style={{
              opacity: Math.max(0.15, 0.9 - index * 0.12),
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default CursorEffects;