'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Home() {
  const app = useRef(null);
  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);
  const container = useRef(null);
  const circle = useRef(null);

  const { contextSafe } = useGSAP(() => {
    xTo.current = gsap.quickTo(".flair", "x", { duration: 0.6, ease: "expo" }),
    yTo.current = gsap.quickTo(".flair", "y", { duration: 0.6, ease: "expo" })
  }, { scope: app })

  const moveShape = contextSafe((e: React.MouseEvent) => {
    if (xTo.current && yTo.current) {
      xTo.current(e.clientX);
      yTo.current(e.clientY);
    }
  })

  useGSAP(() => {
    gsap.to(".box", { rotation: "+=360", duration: 3 })
    gsap.to(circle.current, { rotation: "+=360", duration: 4 })
  }, { scope: container, revertOnUpdate: true })

  return (
    <div className="app" ref={app} onMouseMove={e => moveShape(e)}>
      <div ref={container} className="container">
        <div className="box blue">Selector</div>
        <div ref={circle} className="circle green">Ref</div>
      </div>
      <div className="box blue">Selector</div>
      <div className="flair" />
    </div>
  );
}
