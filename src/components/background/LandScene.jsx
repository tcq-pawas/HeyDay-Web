import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COLORS = {
  forest: "#0c2418",
  leaf: "#3d6b28",
  olive: "#2f3d1c",
  sand: "#8a7350",
  gold: "#8f7438",
  slate: "#0d1218",
};

function usePointerParallax(enabled) {
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) {
      target.current.x = 0;
      target.current.y = 0;
      return undefined;
    }

    const onMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      target.current.x = x * 0.35;
      target.current.y = -y * 0.28;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled]);

  return { target, current };
}

function FloatingForm({
  geometry,
  position,
  scale = 1,
  color,
  opacity = 0.28,
  roughness = 0.55,
  metalness = 0.02,
  transmission = 0.35,
  thickness = 0.6,
  ior = 1.2,
  drift = { x: 0.35, y: 0.25, z: 0.12 },
  rotAmp = 0.025,
  scaleAmp = 0.025,
  duration = 55,
  phase = 0,
  matte = false,
}) {
  const ref = useRef(null);
  const baseScale = useMemo(() => {
    if (Array.isArray(scale)) {
      return new THREE.Vector3(scale[0], scale[1], scale[2]);
    }
    return new THREE.Vector3(scale, scale, scale);
  }, [scale]);

  const base = useMemo(
    () => ({
      pos: new THREE.Vector3(...position),
      phase,
      speed: (Math.PI * 2) / duration,
    }),
    [position, phase, duration]
  );

  useFrame((state) => {
    const mesh = ref.current;
    if (!mesh) return;

    const t = state.clock.elapsedTime * base.speed + base.phase;
    mesh.position.x = base.pos.x + Math.sin(t) * drift.x;
    mesh.position.y = base.pos.y + Math.cos(t * 0.85) * drift.y;
    mesh.position.z = base.pos.z + Math.sin(t * 0.55) * drift.z;

    mesh.rotation.x = Math.sin(t * 0.7) * rotAmp;
    mesh.rotation.y = Math.cos(t * 0.55) * rotAmp;
    mesh.rotation.z = Math.sin(t * 0.4) * rotAmp * 0.6;

    const s = 1 + Math.sin(t * 0.65) * scaleAmp;
    mesh.scale.set(baseScale.x * s, baseScale.y * s, baseScale.z * s);
  });

  return (
    <mesh ref={ref} position={position} scale={scale} geometry={geometry}>
      {matte ? (
        <meshStandardMaterial
          color={color}
          roughness={roughness}
          metalness={metalness}
          transparent
          opacity={opacity}
          depthWrite={false}
        />
      ) : (
        <meshPhysicalMaterial
          color={color}
          roughness={roughness}
          metalness={metalness}
          transmission={transmission}
          thickness={thickness}
          ior={ior}
          transparent
          opacity={opacity}
          depthWrite={false}
          attenuationColor={color}
          attenuationDistance={2.5}
        />
      )}
    </mesh>
  );
}

function LandscapeWave({
  position,
  color,
  opacity = 0.16,
  duration = 70,
  phase = 0,
  width = 8,
  depth = 3,
}) {
  const ref = useRef(null);
  const geo = useMemo(() => {
    const g = new THREE.PlaneGeometry(width, depth, 28, 12);
    const pos = g.attributes.position;
    for (let i = 0; i < pos.count; i += 1) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z =
        Math.sin(x * 0.55 + y * 0.35) * 0.28 +
        Math.cos(x * 0.25 - y * 0.5) * 0.16;
      pos.setZ(i, z);
    }
    g.computeVertexNormals();
    return g;
  }, [width, depth]);

  useFrame((state) => {
    const mesh = ref.current;
    if (!mesh) return;
    const t = state.clock.elapsedTime * ((Math.PI * 2) / duration) + phase;
    mesh.position.y = position[1] + Math.sin(t) * 0.12;
    mesh.position.x = position[0] + Math.cos(t * 0.7) * 0.18;
    mesh.rotation.z = Math.sin(t * 0.5) * 0.02;
  });

  return (
    <mesh
      ref={ref}
      position={position}
      rotation={[-Math.PI / 2.4, 0, 0.08]}
      geometry={geo}
    >
      <meshStandardMaterial
        color={color}
        roughness={0.85}
        metalness={0.01}
        transparent
        opacity={opacity}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function ParticleFog({ count = 28 }) {
  const ref = useRef(null);
  const { positions, phases } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 7;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      phases[i] = Math.random() * Math.PI * 2;
    }
    return { positions, phases };
  }, [count]);

  useFrame((state) => {
    const points = ref.current;
    if (!points) return;
    const arr = points.geometry.attributes.position.array;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i += 1) {
      const ix = i * 3;
      const p = phases[i];
      arr[ix + 1] = positions[ix + 1] + Math.sin(t * 0.12 + p) * 0.35;
      arr[ix] = positions[ix] + Math.cos(t * 0.08 + p) * 0.25;
    }
    points.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={COLORS.sand}
        size={0.04}
        transparent
        opacity={0.14}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

/** Abstract low-poly tree: trunk + layered canopy cones. */
function AbstractTree({
  position,
  scale = 1,
  canopyColor = COLORS.forest,
  trunkColor = COLORS.sand,
  opacity = 0.38,
  duration = 55,
  phase = 0,
  drift = { x: 0.18, y: 0.12, z: 0.08 },
  layers = 3,
  glass = false,
}) {
  const ref = useRef(null);
  const geos = useMemo(
    () => ({
      trunk: new THREE.CylinderGeometry(0.06, 0.1, 0.7, 6),
      canopy: [
        new THREE.ConeGeometry(0.55, 0.7, 6),
        new THREE.ConeGeometry(0.42, 0.58, 6),
        new THREE.ConeGeometry(0.28, 0.48, 5),
      ],
    }),
    []
  );

  const base = useMemo(
    () => ({
      pos: new THREE.Vector3(...position),
      scale,
      phase,
      speed: (Math.PI * 2) / duration,
    }),
    [position, scale, phase, duration]
  );

  useFrame((state) => {
    const group = ref.current;
    if (!group) return;
    const t = state.clock.elapsedTime * base.speed + base.phase;
    group.position.x = base.pos.x + Math.sin(t) * drift.x;
    group.position.y = base.pos.y + Math.cos(t * 0.8) * drift.y;
    group.position.z = base.pos.z + Math.sin(t * 0.5) * drift.z;
    group.rotation.y = Math.sin(t * 0.45) * 0.03;
    group.rotation.z = Math.sin(t * 0.35) * 0.02;
    const s = base.scale * (1 + Math.sin(t * 0.6) * 0.02);
    group.scale.setScalar(s);
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      <mesh position={[0, 0.35, 0]} geometry={geos.trunk}>
        <meshStandardMaterial
          color={trunkColor}
          roughness={0.92}
          metalness={0.01}
          transparent
          opacity={opacity * 0.85}
          depthWrite={false}
        />
      </mesh>
      {geos.canopy.slice(0, layers).map((geo, i) => (
        <mesh key={i} position={[0, 0.75 + i * 0.38, 0]} geometry={geo}>
          {glass ? (
            <meshPhysicalMaterial
              color={canopyColor}
              roughness={0.45}
              metalness={0.02}
              transmission={0.22}
              thickness={0.8}
              transparent
              opacity={opacity}
              depthWrite={false}
            />
          ) : (
            <meshStandardMaterial
              color={canopyColor}
              roughness={0.88}
              metalness={0.02}
              transparent
              opacity={opacity}
              depthWrite={false}
            />
          )}
        </mesh>
      ))}
    </group>
  );
}

function SceneContent({ reduceMotion, enableParallax }) {
  const group = useRef(null);
  const { target, current } = usePointerParallax(enableParallax && !reduceMotion);

  const geos = useMemo(
    () => ({
      blob: new THREE.IcosahedronGeometry(1, 1),
      soft: new THREE.SphereGeometry(1, 24, 24),
      dune: new THREE.SphereGeometry(1, 16, 12),
      crystal: new THREE.OctahedronGeometry(1, 0),
      ribbon: new THREE.TorusGeometry(1, 0.18, 12, 48),
      stone: new THREE.DodecahedronGeometry(1, 0),
    }),
    []
  );

  useFrame((_, delta) => {
    if (!group.current) return;
    if (reduceMotion) {
      group.current.position.x = 0;
      group.current.position.y = 0;
      return;
    }
    current.current.x += (target.current.x - current.current.x) * Math.min(1, delta * 1.6);
    current.current.y += (target.current.y - current.current.y) * Math.min(1, delta * 1.6);
    group.current.position.x = current.current.x;
    group.current.position.y = current.current.y;
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.28} color="#9aab9a" />
      <directionalLight position={[4, 6, 3]} intensity={0.32} color="#c8c2b4" />
      <directionalLight position={[-5, 2, -3]} intensity={0.18} color="#2f5d2c" />

      <FloatingForm
        geometry={geos.soft}
        position={[-4.2, 2.1, -4.5]}
        scale={2.4}
        color={COLORS.forest}
        opacity={0.42}
        roughness={0.95}
        transmission={0.05}
        drift={{ x: 0.4, y: 0.3, z: 0.1 }}
        duration={78}
        phase={0.4}
        matte
      />
      <FloatingForm
        geometry={geos.soft}
        position={[4.5, -1.8, -5]}
        scale={2.8}
        color={COLORS.olive}
        opacity={0.38}
        roughness={0.95}
        transmission={0.04}
        drift={{ x: 0.35, y: 0.28, z: 0.08 }}
        duration={86}
        phase={1.7}
        matte
      />

      <FloatingForm
        geometry={geos.blob}
        position={[-2.2, 0.4, -1.5]}
        scale={1.35}
        color={COLORS.leaf}
        opacity={0.4}
        roughness={0.45}
        transmission={0.25}
        thickness={1.1}
        drift={{ x: 0.45, y: 0.35, z: 0.15 }}
        rotAmp={0.03}
        scaleAmp={0.028}
        duration={52}
        phase={0.9}
      />
      <FloatingForm
        geometry={geos.dune}
        position={[2.6, 1.1, -2.2]}
        scale={[1.8, 0.85, 1.3]}
        color={COLORS.sand}
        opacity={0.36}
        roughness={0.65}
        transmission={0.18}
        drift={{ x: 0.38, y: 0.32, z: 0.12 }}
        rotAmp={0.022}
        duration={64}
        phase={2.4}
      />
      <FloatingForm
        geometry={geos.stone}
        position={[0.3, -1.4, -1.1]}
        scale={1.1}
        color={COLORS.forest}
        opacity={0.48}
        roughness={0.85}
        metalness={0.02}
        transmission={0.08}
        drift={{ x: 0.3, y: 0.4, z: 0.1 }}
        rotAmp={0.028}
        duration={58}
        phase={3.1}
        matte
      />

      <FloatingForm
        geometry={geos.crystal}
        position={[-1.1, 1.8, 0.2]}
        scale={0.55}
        color={COLORS.gold}
        opacity={0.34}
        roughness={0.4}
        transmission={0.28}
        thickness={1.4}
        drift={{ x: 0.28, y: 0.42, z: 0.18 }}
        rotAmp={0.035}
        scaleAmp={0.03}
        duration={42}
        phase={1.2}
      />
      <FloatingForm
        geometry={geos.ribbon}
        position={[1.8, -0.2, 0.4]}
        scale={0.85}
        color={COLORS.leaf}
        opacity={0.36}
        roughness={0.5}
        transmission={0.22}
        drift={{ x: 0.32, y: 0.28, z: 0.14 }}
        rotAmp={0.03}
        duration={48}
        phase={4.2}
      />
      <FloatingForm
        geometry={geos.crystal}
        position={[3.2, 1.6, -0.6]}
        scale={0.4}
        color={COLORS.sand}
        opacity={0.32}
        roughness={0.42}
        transmission={0.25}
        drift={{ x: 0.25, y: 0.36, z: 0.12 }}
        rotAmp={0.03}
        duration={36}
        phase={5.1}
      />

      {/* Abstract tree silhouettes along the landscape */}
      <AbstractTree
        position={[-3.4, -1.55, -2.6]}
        scale={1.15}
        canopyColor={COLORS.forest}
        trunkColor={COLORS.sand}
        opacity={0.4}
        duration={62}
        phase={0.6}
        layers={3}
      />
      <AbstractTree
        position={[-2.1, -1.35, -1.8]}
        scale={0.75}
        canopyColor={COLORS.olive}
        trunkColor={COLORS.sand}
        opacity={0.36}
        duration={48}
        phase={2.1}
        layers={2}
        drift={{ x: 0.14, y: 0.1, z: 0.06 }}
      />
      <AbstractTree
        position={[0.6, -1.45, -2.4]}
        scale={1.35}
        canopyColor={COLORS.leaf}
        trunkColor={COLORS.sand}
        opacity={0.34}
        duration={70}
        phase={1.4}
        layers={3}
        glass
        drift={{ x: 0.2, y: 0.14, z: 0.09 }}
      />
      <AbstractTree
        position={[2.4, -1.5, -2.0]}
        scale={0.95}
        canopyColor={COLORS.forest}
        trunkColor={COLORS.olive}
        opacity={0.38}
        duration={55}
        phase={3.3}
        layers={3}
      />
      <AbstractTree
        position={[3.6, -1.25, -2.8]}
        scale={0.65}
        canopyColor={COLORS.olive}
        trunkColor={COLORS.sand}
        opacity={0.32}
        duration={44}
        phase={4.5}
        layers={2}
        drift={{ x: 0.12, y: 0.09, z: 0.05 }}
      />
      <AbstractTree
        position={[-0.9, -1.2, -3.4]}
        scale={0.55}
        canopyColor={COLORS.leaf}
        trunkColor={COLORS.sand}
        opacity={0.28}
        duration={80}
        phase={5.2}
        layers={2}
        drift={{ x: 0.1, y: 0.08, z: 0.05 }}
      />

      <LandscapeWave
        position={[0, -2.4, -3]}
        color={COLORS.forest}
        opacity={0.38}
        duration={72}
        phase={0.5}
        width={11}
        depth={4}
      />
      <LandscapeWave
        position={[1.2, -2.1, -2.2]}
        color={COLORS.olive}
        opacity={0.3}
        duration={60}
        phase={2.2}
        width={9}
        depth={3.2}
      />
      <LandscapeWave
        position={[-0.8, -1.9, -1.5]}
        color={COLORS.sand}
        opacity={0.22}
        duration={84}
        phase={3.8}
        width={8}
        depth={2.6}
      />

      {!reduceMotion && <ParticleFog count={24} />}
    </group>
  );
}

export default function LandScene({ reduceMotion = false, enableParallax = true }) {
  return (
    <div className="land-atmosphere__canvas">
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.2, 6.5], fov: 42, near: 0.1, far: 40 }}
        style={{ background: "transparent" }}
        frameloop={reduceMotion ? "demand" : "always"}
      >
        <SceneContent
          reduceMotion={reduceMotion}
          enableParallax={enableParallax}
        />
      </Canvas>
    </div>
  );
}
