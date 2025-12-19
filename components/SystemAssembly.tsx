import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Environment, 
  ContactShadows, 
  RoundedBox, 
  Text,
  Float,
  useTexture
} from '@react-three/drei';
import * as THREE from 'three';
import { Button } from './Button';
import { CheckCircle2, RotateCw, Box as BoxIcon, Zap, Lightbulb } from 'lucide-react';

// Fix for IntrinsicElements in TypeScript for React Three Fiber
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      meshPhysicalMaterial: any;
      meshStandardMaterial: any;
      meshBasicMaterial: any;
      planeGeometry: any;
      boxGeometry: any;
      cylinderGeometry: any;
      sphereGeometry: any;
      tubeGeometry: any;
      torusGeometry: any;
      ringGeometry: any;
      ambientLight: any;
      directionalLight: any;
      spotLight: any;
      pointLight: any;
      gridHelper: any;
      primitive: any;
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      meshPhysicalMaterial: any;
      meshStandardMaterial: any;
      meshBasicMaterial: any;
      planeGeometry: any;
      boxGeometry: any;
      cylinderGeometry: any;
      sphereGeometry: any;
      tubeGeometry: any;
      torusGeometry: any;
      ringGeometry: any;
      ambientLight: any;
      directionalLight: any;
      spotLight: any;
      pointLight: any;
      gridHelper: any;
      primitive: any;
    }
  }
}

// --- Config ---
type ConfigType = 'chen-5' | 'chen-10' | 'chen-15';

interface SystemConfig {
  id: ConfigType;
  name: string;
  panels: number; 
  panelGroups: number; // Groups of 4
  batteries: number;
  hubName: string;
}

const CONFIGS: Record<ConfigType, SystemConfig> = {
  'chen-5': { id: 'chen-5', name: '安宸·轻享版 (Chen S)', panels: 4, panelGroups: 1, batteries: 1, hubName: 'SmartHub' },
  'chen-10': { id: 'chen-10', name: '安宸·标准版 (Chen M)', panels: 8, panelGroups: 2, batteries: 2, hubName: 'SmartHub' },
  'chen-15': { id: 'chen-15', name: '安宸·尊享版 (Chen L)', panels: 12, panelGroups: 3, batteries: 3, hubName: 'SmartHub Pro' },
};

// --- Materials ---
const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color('#1e3a8a'), // Brighter blue
  metalness: 0.9,
  roughness: 0.1,
  clearcoat: 1.0,
  clearcoatRoughness: 0.05,
  transparent: false,
});

const frameMaterial = new THREE.MeshStandardMaterial({
  color: '#333',
  roughness: 0.5,
  metalness: 0.6
});

const cellGridMaterial = new THREE.MeshBasicMaterial({
  color: '#ffffff',
  wireframe: true,
  transparent: true,
  opacity: 0.1
});

// --- Components ---

// 1. Solar Panel Unit
// Dimensions: Roughly 1m x 1.8m
const SolarPanel = ({ idx, groupIndex, isAssembled, delayOffset = 0 }: any) => {
  const meshRef = useRef<THREE.Group>(null);
  
  // 2x2 Layout Logic within a group
  // idx 0: Top-Left, 1: Top-Right, 2: Bottom-Left, 3: Bottom-Right
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  
  // Spacing
  const gap = 0.05;
  const width = 1.05;
  const height = 1.85;
  
  // Target Assembled Position (Local to Group)
  // Centered 2x2 grid
  const tX = (col - 0.5) * (width + gap); 
  // In 3D, "Up" on the panel plane corresponds to Z in world space if flat, 
  // but we tilt the whole group usually. Let's arrange them on X/Y plane first then rotate group.
  const tY = -(row - 0.5) * (height + gap); 
  const tZ = 0;

  // Packed Position (Stacked in a box)
  // All centered, stacked vertically by thickness
  const pX = 0;
  const pY = 0;
  const pZ = idx * 0.1; // Stack thickness

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Slow down the animation
    const speed = 1.5 * delta;
    
    // Delay logic based on index for sequential effect
    // We can simulate delay by checking a global timer or just clamping animation
    // Simple lerp with different speeds isn't enough for true sequence, 
    // but for visual effect, we can use a conditional target based on time?
    // Let's stick to Lerp but with 'damp' feel.
    
    const targetX = isAssembled ? tX : pX;
    const targetY = isAssembled ? tY : pY;
    const targetZ = isAssembled ? tZ : pZ;
    
    // Position
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, speed);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, speed);
    meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetZ, speed);
  });

  return (
    <group ref={meshRef}>
      <RoundedBox args={[width, height, 0.04]} radius={0.01} material={frameMaterial}>
        {/* Cell Face */}
        <mesh position={[0, 0, 0.021]} material={glassMaterial}>
           <planeGeometry args={[width - 0.05, height - 0.05]} />
        </mesh>
        {/* Grid Lines */}
        <mesh position={[0, 0, 0.022]} material={cellGridMaterial}>
           <planeGeometry args={[width - 0.05, height - 0.05, 6, 10]} />
        </mesh>
      </RoundedBox>
    </group>
  );
}

// 2. Solar Group (2x2 Grid)
const SolarGroup = ({ index, isAssembled }: { index: number, isAssembled: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const standRef = useRef<THREE.Group>(null);
  
  useFrame((_, delta) => {
    if (!groupRef.current || !standRef.current) return;
    const speed = 1.2 * delta;

    // --- Group Transform ---
    // Assembled: Spread out along X axis (side by side groups)
    // Packed: Floating above the ground, maybe center stage
    const groupSpacing = 3.5;
    const assembledX = (index * groupSpacing) - groupSpacing/2; // Rough centering
    
    // Packed: All groups start at center (0,0,0) or slightly offset
    const packedX = 0;
    const packedY = 1 + (index * 0.5); // Stack groups
    const packedZ = 0;

    const assembledY = 0.8; // Height of bottom edge from ground
    const assembledZ = -2;

    const tX = isAssembled ? assembledX : packedX;
    const tY = isAssembled ? assembledY : packedY;
    const tZ = isAssembled ? assembledZ : packedZ;

    // Move Group
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, tX, speed);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, tY, speed);
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, tZ, speed);

    // Rotate Group (Tilt for Sun)
    // Packed: Flat (RotX = -PI/2 to lay flat stack? Or 0 if vertical?)
    // Let's say Packed = Flat horizontal (RotX = -PI/2)
    // Assembled = Tilted 30 deg (RotX = -PI/6)
    const assembledRotX = -Math.PI / 6;
    const packedRotX = -Math.PI / 2; // Flat like a table
    
    const tRotX = isAssembled ? assembledRotX : packedRotX;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, tRotX, speed);
    
    // Stand Animation
    // Only visible when assembled
    const standScale = isAssembled ? 1 : 0;
    standRef.current.scale.setScalar(THREE.MathUtils.lerp(standRef.current.scale.x, standScale, speed));
  });

  return (
    <group>
        <group ref={groupRef}>
          {/* 4 Panels in 2x2 configuration */}
          {[0, 1, 2, 3].map(i => (
            <SolarPanel key={i} idx={i} groupIndex={index} isAssembled={isAssembled} />
          ))}
          
          {/* The Support Structure (Attached to group) */}
          <group ref={standRef} position={[0, 0, -0.5]} rotation={[Math.PI/2, 0, 0]}>
             {/* Main Pole */}
             <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 2.5]} />
                <meshStandardMaterial color="#666" />
             </mesh>
             {/* Cross Bars */}
             <mesh position={[0, 0.2, 0]} rotation={[0, 0, Math.PI/2]}>
                 <cylinderGeometry args={[0.03, 0.03, 2.2]} />
                 <meshStandardMaterial color="#666" />
             </mesh>
          </group>
        </group>
    </group>
  );
};

// 3. Street Lamp (Load)
const StreetLamp = ({ isAssembled }: { isAssembled: boolean }) => {
    const lightRef = useRef<THREE.PointLight>(null);
    const bulbRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!lightRef.current || !bulbRef.current) return;
        // Flicker effect or smooth turn on
        const targetIntensity = isAssembled ? 5 : 0;
        // Add slight random flicker if on
        const flicker = isAssembled ? (Math.random() * 0.5) : 0;
        
        lightRef.current.intensity = THREE.MathUtils.lerp(lightRef.current.intensity, targetIntensity + flicker, 0.05);
        
        // Bulb emission
        const mat = bulbRef.current.material as THREE.MeshStandardMaterial;
        mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, isAssembled ? 2 : 0, 0.05);
    });

    return (
        <group position={[3.5, 0, 0]}>
            {/* Pole */}
            <mesh position={[0, 2, 0]}>
                <cylinderGeometry args={[0.08, 0.12, 4]} />
                <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
            </mesh>
            {/* Arm */}
            <mesh position={[-0.5, 3.8, 0]} rotation={[0, 0, Math.PI/4]}>
                <cylinderGeometry args={[0.05, 0.05, 1.5]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>
            {/* Lamp Head */}
            <group position={[-1.1, 4.3, 0]} rotation={[0, 0, Math.PI/6]}>
                <mesh>
                    <cylinderGeometry args={[0.3, 0.1, 0.2]} />
                    <meshStandardMaterial color="#111" />
                </mesh>
                {/* Bulb */}
                <mesh position={[0, -0.1, 0]} ref={bulbRef}>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshStandardMaterial color="#ffebb7" emissive="#ffebb7" />
                </mesh>
                {/* Light Source */}
                <pointLight ref={lightRef} distance={10} decay={2} color="#ffebb7" castShadow />
                
                {/* Light Cone Volumetric Fake */}
                {isAssembled && (
                    <mesh position={[0, -2, 0]} rotation={[0, 0, 0]}>
                        <cylinderGeometry args={[0.2, 1.5, 4, 16, 1, true]} />
                        <meshBasicMaterial color="#ffebb7" transparent opacity={0.1} side={THREE.DoubleSide} depthWrite={false} />
                    </mesh>
                )}
            </group>
        </group>
    )
}

// 4. Battery & Hub Stack (Central Unit)
const PowerStack = ({ count, isAssembled }: { count: number, isAssembled: boolean }) => {
    const stackRef = useRef<THREE.Group>(null);
    
    useFrame((_, delta) => {
        if (!stackRef.current) return;
        const speed = 2 * delta;
        
        // Animation: Drop from sky
        const tY = 0;
        const pY = 5;
        const targetY = isAssembled ? tY : pY;
        
        stackRef.current.position.y = THREE.MathUtils.lerp(stackRef.current.position.y, targetY, speed);
    });

    return (
        <group ref={stackRef} position={[0, 0, 1.5]}>
             {/* Base */}
             <mesh position={[0, 0.05, 0]}>
                 <boxGeometry args={[1, 0.1, 0.6]} />
                 <meshStandardMaterial color="#111" />
             </mesh>
             
             {/* Batteries */}
             {Array.from({length: count}).map((_, i) => (
                 <group key={i} position={[0, 0.15 + (i * 0.35) + 0.15, 0]}>
                     <RoundedBox args={[0.9, 0.3, 0.55]} radius={0.02}>
                         <meshStandardMaterial color="#222" roughness={0.4} />
                     </RoundedBox>
                     <mesh position={[0, 0, 0.28]}>
                         <boxGeometry args={[0.8, 0.02, 0.01]} />
                         <meshBasicMaterial color="#22c55e" />
                     </mesh>
                 </group>
             ))}

             {/* Smart Hub (Top) */}
             <group position={[0, 0.1 + (count * 0.35) + 0.4, 0]}>
                 <RoundedBox args={[0.7, 0.5, 0.3]} radius={0.05}>
                     <meshStandardMaterial color="#e5e5e5" metalness={0.2} roughness={0.2} />
                 </RoundedBox>
                 {/* Interface Panel */}
                 <mesh position={[0, 0, 0.16]}>
                     <planeGeometry args={[0.5, 0.3]} />
                     <meshStandardMaterial color="#000" />
                 </mesh>
                 {/* Status Light Ring */}
                 <mesh position={[0, 0, 0.17]}>
                     <ringGeometry args={[0.05, 0.06, 32]} />
                     <meshBasicMaterial color={isAssembled ? "#3b82f6" : "#333"} />
                 </mesh>
             </group>
        </group>
    )
}

// 5. Smart Cables (CatmullRom)
const SmartCables = ({ isAssembled, config }: { isAssembled: boolean, config: SystemConfig }) => {
    // We need rational paths.
    // 1. Solar Group 1 -> Hub Input (Left side)
    // 2. Solar Group 2 (if exists) -> Hub Input (Right side)
    // 3. Hub Output -> Street Lamp (Right side)
    
    // Hub Ports
    const hubHeight = (config.batteries * 0.35) + 0.4; // Approximate
    const hubPos = new THREE.Vector3(0, hubHeight, 1.5);
    
    // Lamp Input
    const lampBase = new THREE.Vector3(3.5, 0.2, 0);

    return (
        <group>
            {/* Cable 1: Solar 1 (Left) to Hub */}
            <RealisticCable 
                start={new THREE.Vector3(-1, 0.1, -1)} 
                end={new THREE.Vector3(-0.3, hubHeight, 1.5)} 
                midPoint={new THREE.Vector3(-0.8, 0.1, 1)}
                active={isAssembled}
                delay={0.5}
            />
            
            {/* Cable 2: Solar 2 (Right - if exists) to Hub */}
            {config.panelGroups > 1 && (
                 <RealisticCable 
                    start={new THREE.Vector3(1, 0.1, -1)} 
                    end={new THREE.Vector3(0.3, hubHeight, 1.5)} 
                    midPoint={new THREE.Vector3(0.8, 0.1, 1)}
                    active={isAssembled}
                    delay={0.8}
                />
            )}

            {/* Cable 3: Hub to Lamp */}
            <RealisticCable 
                start={new THREE.Vector3(0.35, hubHeight - 0.2, 1.5)} 
                end={lampBase} 
                midPoint={new THREE.Vector3(1.5, 0.1, 1.5)}
                active={isAssembled}
                color="#ffffff"
                delay={1.2} // Connect last
            />
        </group>
    )
}

const RealisticCable = ({ start, end, midPoint, active, color = "#ff9900", delay = 0 }: any) => {
    const curve = useMemo(() => {
        return new THREE.CatmullRomCurve3([
            start,
            midPoint,
            end
        ], false, 'catmullrom', 0.2);
    }, [start, end, midPoint]);

    // Animate cable "growth" or appearance
    const [progress, setProgress] = useState(0);

    useFrame((_, delta) => {
        const target = active ? 1 : 0;
        // Simple delay logic simulation
        if (active && delay > 0) {
             // This is a hacky delay for visual effect
             // Real implementation would use a timeline
        }
        
        const speed = 1.0 * delta;
        if (active) {
            setProgress(p => Math.min(p + speed, 1));
        } else {
            setProgress(p => Math.max(p - speed, 0));
        }
    });

    if (progress < 0.1) return null;

    return (
        <group>
            <mesh>
                 <tubeGeometry args={[curve, 32, 0.02, 8, false]} />
                 <meshStandardMaterial color="#111" />
            </mesh>
            {/* Flowing Electrons */}
            {active && progress > 0.9 && (
                 <ElectronFlow curve={curve} color={color} />
            )}
        </group>
    )
}

const ElectronFlow = ({ curve, color }: any) => {
    const count = 5;
    const refs = useRef<THREE.Mesh[]>([]);
    
    useFrame((_, delta) => {
        refs.current.forEach((mesh, i) => {
             if(!mesh) return;
             const speed = 0.5;
             // Store offset in userData
             mesh.userData.offset = (mesh.userData.offset || (i / count)) + (speed * delta);
             if (mesh.userData.offset > 1) mesh.userData.offset = 0;
             
             const pt = curve.getPoint(mesh.userData.offset);
             mesh.position.copy(pt);
        });
    });

    return (
        <group>
            {Array.from({length: count}).map((_, i) => (
                <mesh key={i} ref={el => refs.current[i] = el!} scale={0.8}>
                    <sphereGeometry args={[0.03, 8, 8]} />
                    <meshBasicMaterial color={color} toneMapped={false} />
                    <pointLight distance={0.5} intensity={2} color={color} />
                </mesh>
            ))}
        </group>
    )
}


// --- Main Scene ---
const Experience = ({ config, isAssembled }: { config: SystemConfig, isAssembled: boolean }) => {
   return (
      <>
         <PerspectiveCamera makeDefault position={[6, 4, 8]} fov={35} />
         <OrbitControls 
            enablePan={true} 
            minPolarAngle={0} 
            maxPolarAngle={Math.PI / 2.1} 
            autoRotate={isAssembled}
            autoRotateSpeed={0.5}
            target={[0, 1.5, 0]}
         />
         
         {/* 1. BRIGHT LIGHTING SETUP */}
         <Environment preset="city" environmentIntensity={1.5} />
         <ambientLight intensity={2.5} color="#ffffff" />
         <directionalLight 
            position={[10, 20, 10]} 
            intensity={4.0} 
            castShadow 
            shadow-bias={-0.0001}
            color="#fffbeb"
         />
         <directionalLight position={[-10, 5, -10]} intensity={1} color="#bfdbfe" />

         <group position={[0, -0.5, 0]}>
            {/* Solar Arrays (2x2) */}
            {Array.from({ length: config.panelGroups }).map((_, i) => (
               <SolarGroup key={`sg-${i}`} index={i} isAssembled={isAssembled} />
            ))}

            {/* Central Power Stack */}
            <PowerStack count={config.batteries} isAssembled={isAssembled} />
            
            {/* Load (Street Lamp) */}
            <StreetLamp isAssembled={isAssembled} />
            
            {/* Cables */}
            <SmartCables isAssembled={isAssembled} config={config} />
            
            {/* Floor */}
            <ContactShadows resolution={1024} scale={50} blur={2} opacity={0.4} far={10} color="#000" />
            <gridHelper args={[20, 20, 0x444444, 0x222222]} position={[0, 0.01, 0]} />
         </group>
      </>
   );
};

// --- Main Component ---
export const SystemAssembly: React.FC = () => {
  const [activeConfig, setActiveConfig] = useState<ConfigType>('chen-10');
  const [isAssembled, setIsAssembled] = useState(false);

  // Auto-assemble effect
  useEffect(() => {
     setIsAssembled(false);
     const t = setTimeout(() => setIsAssembled(true), 500);
     return () => clearTimeout(t);
  }, [activeConfig]);

  return (
    <div className="bg-surface-900 py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
            <div className="inline-flex items-center rounded-full px-3 py-1 bg-lumina-500/10 text-xs font-medium text-lumina-400 mb-4 border border-lumina-500/20">
              <RotateCw className="w-3 h-3 mr-2" />
              <span>3D Configuration Studio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              全系统自动装配演示
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
               见证光伏阵列展开、线束连接与负载供电的全过程。
            </p>
        </div>

        {/* 3D Canvas Container */}
        <div className="relative w-full h-[600px] bg-gradient-to-b from-gray-900 to-black rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
           
           <Canvas shadows dpr={[1, 2]} gl={{ toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.3 }}>
              <Experience config={CONFIGS[activeConfig]} isAssembled={isAssembled} />
           </Canvas>

           {/* Controls */}
           <div className="absolute top-8 left-8 z-10 flex flex-col gap-4 w-64">
              <div className="bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl">
                 <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center">
                    <BoxIcon className="w-3 h-3 mr-2" />
                    配置选择
                 </h3>
                 <div className="space-y-2">
                     {(Object.keys(CONFIGS) as ConfigType[]).map((key) => (
                        <button
                          key={key}
                          onClick={() => setActiveConfig(key)}
                          className={`w-full text-left px-3 py-3 rounded-xl text-sm transition-all flex justify-between items-center border ${
                             activeConfig === key 
                             ? 'bg-lumina-900/50 border-lumina-500/50 text-white shadow-[0_0_15px_rgba(20,184,166,0.2)]' 
                             : 'bg-transparent border-transparent text-gray-400 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                           <span className="font-medium">{CONFIGS[key].name}</span>
                           {activeConfig === key && <CheckCircle2 className="w-4 h-4 text-lumina-400" />}
                        </button>
                     ))}
                 </div>
              </div>

              <div className="bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl">
                 <Button 
                    onClick={() => setIsAssembled(!isAssembled)} 
                    size="sm" 
                    className={`w-full transition-all duration-300 ${isAssembled ? 'bg-surface-800 border-white/20 hover:bg-surface-700' : 'bg-lumina-500 hover:bg-lumina-400 text-black'}`}
                 >
                    {isAssembled ? '折叠复位 (Reset)' : '展开演示 (Deploy)'}
                 </Button>
              </div>
           </div>
           
        </div>
      </div>
    </div>
  );
};