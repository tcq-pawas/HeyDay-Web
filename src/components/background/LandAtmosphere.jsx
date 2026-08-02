import {
  Component,
  Suspense,
  lazy,
  memo,
  useEffect,
  useState,
  useCallback,
} from "react";
import LandFallback from "./LandFallback";
import "./land-atmosphere.css";

const LandScene = lazy(() => import("./LandScene"));

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function useIsMobile() {
  const [mobile, setMobile] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(max-width: 768px), (pointer: coarse)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px), (pointer: coarse)");
    const onChange = () => setMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return mobile;
}

class SceneErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError?.();
  }

  render() {
    if (this.state.hasError) {
      return <LandFallback reducedMotion={false} />;
    }
    return this.props.children;
  }
}

function LandAtmosphere() {
  const reduceMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const [webgl, setWebgl] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setWebgl(supportsWebGL());
  }, []);

  const onSceneError = useCallback(() => {
    setFailed(true);
  }, []);

  const use3d = webgl === true && !failed && !reduceMotion;

  return (
    <div className="land-atmosphere" aria-hidden="true" role="presentation">
      {use3d ? (
        <Suspense fallback={<LandFallback reducedMotion={false} />}>
          <SceneErrorBoundary onError={onSceneError}>
            <LandScene reduceMotion={false} enableParallax={!isMobile} />
          </SceneErrorBoundary>
        </Suspense>
      ) : webgl === null ? null : (
        <LandFallback reducedMotion={reduceMotion} />
      )}
    </div>
  );
}

export default memo(LandAtmosphere);
