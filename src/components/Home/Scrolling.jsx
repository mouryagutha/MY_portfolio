import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: true,
    smooth: true,
    smoothMobile: true,
    smoothWheel: true,
    smoothKey: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
export default SmoothScrolling;
