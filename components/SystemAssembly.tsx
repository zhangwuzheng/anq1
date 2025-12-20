import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Environment, 
  ContactShadows, 
  RoundedBox, 
  Text,
} from '@react-three/drei';
import * as THREE from 'three';
import { Button } from './Button';
import { CheckCircle2, RotateCw, Box as BoxIcon, MonitorSmartphone } from 'lucide-react';

// Augmented definition for React Three Fiber elements
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
      coneGeometry: any; 
      sphereGeometry: any;
      tubeGeometry: any;
      torusGeometry: any;
      ringGeometry: any;
      circleGeometry: any;
      ambientLight: any;
      directionalLight: any;
      spotLight: any;
      pointLight: any;
      gridHelper: any;
      primitive: any;
    }
  }
}

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
      coneGeometry: any; 
      sphereGeometry: any;
      tubeGeometry: any;
      torusGeometry: any;
      ringGeometry: any;
      circleGeometry: any;
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
  color: new THREE.Color('#0a1a3a'), 
  metalness: 0.9,
  roughness: 0.1,
  clearcoat: 1.0,
  clearcoatRoughness: 0.05,
});

const frameMaterial = new THREE.MeshStandardMaterial({
  color: '#1a1a1a',
  roughness: 0.6,
  metalness: 0.5
});

const cellGridMaterial = new THREE.MeshBasicMaterial({
  color: '#ffffff',
  wireframe: true,
  transparent: true,
  opacity: 0.05
});

// --- Components ---

// 1. Solar Panel Unit (Tight spacing - No Gaps)
const SolarPanel = ({ idx, show, unfolded }: any) => {
  const meshRef = useRef<THREE.Group>(null);
  
  // 2x2 Layout: Zero gap
  const row = Math.floor(idx / 2); // 0 or 1
  const col = idx % 2; // 0 or 1
  
  const width = 1.05;
  const height = 1.85;
  
  // Center the 2x2 group
  const totalW = (width * 2);
  const totalH = (height * 2);
  
  const tX = (col * width) - (totalW / 2) + (width / 2);
  const tY = -((row * height) - (totalH / 2) + (height / 2)); // Relative Y in panel plane
  
  // Packed: Stacked
  const pZ = idx * 0.06; // Stack thickness

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const speed = 0.8 * delta;
    
    // Scale for appear effect
    const targetScale = show ? 1 : 0;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), speed * 2);

    // Unfold animation
    const targetX = unfolded ? tX : 0;
    const targetY = unfolded ? tY : 0;
    const targetZ = unfolded ? 0 : pZ;
    
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, speed);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, speed);
    meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetZ, speed);
  });

  return (
    <group ref={meshRef}>
      <RoundedBox args={[width, height, 0.04]} radius={0.005} material={frameMaterial}>
        <mesh position={[0, 0, 0.021]} material={glassMaterial}>
           <planeGeometry args={[width - 0.01, height - 0.01]} />
        </mesh>
        <mesh position={[0, 0, 0.022]} material={cellGridMaterial}>
           <planeGeometry args={[width - 0.01, height - 0.01, 6, 10]} />
        </mesh>
      </RoundedBox>
    </group>
  );
}

// Fixed Ground Stand (T-Shape)
const FixedStand = () => {
    return (
        <group position={[0, -1.2, 0]}> 
            {/* Main Central Post */}
            <mesh position={[0, 0.6, 0]}>
                <cylinderGeometry args={[0.08, 0.1, 1.2]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            {/* Base Feet (Cross style) */}
            {[0, 1, 2, 3].map(i => (
                <group key={i} rotation={[0, (i * Math.PI) / 2, 0]}>
                    <mesh position={[0.4, 0.1, 0]} rotation={[0, 0, 0]}>
                        <boxGeometry args={[0.8, 0.05, 0.08]} />
                        <meshStandardMaterial color="#222" />
                    </mesh>
                </group>
            ))}
            {/* Top Hinge Support (North-South Bar) */}
            <mesh position={[0, 1.2, 0]} rotation={[Math.PI/2, 0, 0]}>
                <cylinderGeometry args={[0.06, 0.06, 0.4]} />
                <meshStandardMaterial color="#555" />
            </mesh>
        </group>
    )
}

// Telescopic Actuator (Visualizes the tilt mechanism)
const TelescopicActuator = ({ tilt }: { tilt: number }) => {
    const cylinderRef = useRef<THREE.Group>(null);
    const pistonRef = useRef<THREE.Mesh>(null);
    
    const extension = Math.sin(tilt) * 0.3; 
    const baseLen = 0.6;
    const currentLen = baseLen + extension;

    useFrame(() => {
        if (pistonRef.current) {
             pistonRef.current.position.y = currentLen / 2;
             pistonRef.current.scale.y = currentLen;
        }
        if (cylinderRef.current) {
            // Angle the actuator to follow the connection point
            cylinderRef.current.rotation.z = -tilt * 0.8; 
            cylinderRef.current.position.y = -0.4 + (extension * 0.2); // slight movement
        }
    });

    return (
        <group position={[0.4, 0, 0]}> {/* Offset to Right side */}
             <group ref={cylinderRef}>
                {/* Cylinder Body */}
                <mesh position={[0, -0.2, 0]}>
                    <cylinderGeometry args={[0.04, 0.04, 0.5]} />
                    <meshStandardMaterial color="#444" />
                </mesh>
                {/* Piston Rod */}
                <mesh ref={pistonRef} position={[0, 0.3, 0]}>
                    <cylinderGeometry args={[0.02, 0.02, 1]} />
                    <meshStandardMaterial color="#bbb" metalness={0.8} />
                </mesh>
                {/* Joint */}
                <mesh position={[0, -0.45, 0]}>
                   <sphereGeometry args={[0.05]} />
                   <meshStandardMaterial color="#333" />
                </mesh>
             </group>
        </group>
    )
}

// 2. Solar Group with Fixed Stand & Static Panels (No tracking)
const SolarGroup = ({ index, show, unfolded }: { index: number, show: boolean, unfolded: boolean }) => {
  const containerRef = useRef<THREE.Group>(null);
  const pivotRef = useRef<THREE.Group>(null);
  const [tilt, setTilt] = useState(0);

  useFrame((_, delta) => {
    if (!containerRef.current || !pivotRef.current) return;
    const speed = 0.5 * delta;

    // 1. Positioning (Shortened Spacing)
    const groupSpacing = 2.5; // Shortened distance
    // Center point logic: 
    // If 1 group: 0 - 1.25 = -1.25
    // If 2 groups: i=0 -> -1.25, i=1 -> 1.25
    const tX = (index * groupSpacing) - (groupSpacing * 0.5); 
    const tZ = -4; 
    const tY = 1.2; 

    containerRef.current.position.x = THREE.MathUtils.lerp(containerRef.current.position.x, tX, speed);
    containerRef.current.position.z = THREE.MathUtils.lerp(containerRef.current.position.z, tZ, speed);
    containerRef.current.position.y = THREE.MathUtils.lerp(containerRef.current.position.y, tY, speed);

    // 2. No Tracking Logic (Static)
    // Removed sunPosition dependency and dynamic tilt
    let targetTilt = 0;
    
    // Apply tilt to Z axis (Roll) - Keeping it at 0 (Flat) for static display
    pivotRef.current.rotation.z = THREE.MathUtils.lerp(pivotRef.current.rotation.z, targetTilt, speed);
    
    const targetPitch = unfolded ? -Math.PI / 2 : -Math.PI / 2; // Always horizontal-ish base
    pivotRef.current.rotation.x = THREE.MathUtils.lerp(pivotRef.current.rotation.x, targetPitch, speed);

    setTilt(targetTilt);
  });

  return (
    <group ref={containerRef}>
        {/* Fixed Base on Ground */}
        {show && <FixedStand />}

        {/* The Pivot Group */}
        <group ref={pivotRef}>
           {/* Visual Frame Spine */}
           {unfolded && (
               <mesh position={[0, 0, -0.1]} rotation={[0,0,0]}>
                   <boxGeometry args={[0.1, 3.8, 0.05]} />
                   <meshStandardMaterial color="#333" />
               </mesh>
           )}
           
           <group>
              {[0, 1, 2, 3].map(i => (
                <SolarPanel key={i} idx={i} show={show} unfolded={unfolded} />
              ))}
           </group>
           
           {/* Telescopic Actuator attached to frame */}
           {unfolded && <TelescopicActuator tilt={tilt} />}
        </group>
    </group>
  );
};

// 3. Home Lamp
const HomeLamp = ({ show, on }: { show: boolean, on: boolean }) => {
    const groupRef = useRef<THREE.Group>(null);
    const lightRef = useRef<THREE.PointLight>(null);

    useFrame((_, delta) => {
        if (!groupRef.current || !lightRef.current) return;
        const speed = 1.0 * delta;
        const targetScale = show ? 1 : 0;
        groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), speed);
        
        const targetInt = on ? 4 : 0;
        lightRef.current.intensity = THREE.MathUtils.lerp(lightRef.current.intensity, targetInt, speed * 2);
    });

    return (
        <group ref={groupRef} position={[3, 0, 2.5]}>
            <mesh position={[0, 0.05, 0]}>
                <cylinderGeometry args={[0.25, 0.3, 0.1, 32]} />
                <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0, 1.5, 0]}>
                <cylinderGeometry args={[0.02, 0.02, 3, 16]} />
                <meshStandardMaterial color="#111" />
            </mesh>
            <mesh position={[0, 2.8, 0]}>
                <coneGeometry args={[0.4, 0.5, 32, 1, true]} />
                <meshStandardMaterial color="#f5f5f5" side={THREE.DoubleSide} transparent opacity={0.9} />
            </mesh>
            <mesh position={[0, 2.7, 0]}>
                <sphereGeometry args={[0.08]} />
                <meshStandardMaterial color="#fff" emissive={on ? "#ffaa00" : "#000"} emissiveIntensity={on ? 2 : 0} />
            </mesh>
            <pointLight ref={lightRef} position={[0, 2.6, 0]} distance={8} color="#ffaa00" castShadow />
        </group>
    )
}

// 4. Power System
const PowerSystem = ({ count, show, active }: { count: number, show: boolean, active: boolean }) => {
    const batteryRef = useRef<THREE.Group>(null);
    const hubRef = useRef<THREE.Group>(null);
    
    useFrame((_, delta) => {
        if (!batteryRef.current || !hubRef.current) return;
        const speed = 1.0 * delta;
        const tY = show ? 0 : 5;
        
        batteryRef.current.position.y = THREE.MathUtils.lerp(batteryRef.current.position.y, tY, speed);
        hubRef.current.position.y = THREE.MathUtils.lerp(hubRef.current.position.y, tY + 1.2, speed * 0.9); 
    });

    return (
        <group position={[0, 0, 3]}>
             {/* Battery Stack - Left */}
             <group ref={batteryRef} position={[-1.2, 0, 0]}>
                 <mesh position={[0, 0.05, 0]}>
                     <boxGeometry args={[1, 0.1, 0.6]} />
                     <meshStandardMaterial color="#111" />
                 </mesh>
                 {Array.from({length: count}).map((_, i) => (
                     <group key={i} position={[0, 0.15 + (i * 0.35) + 0.15, 0]}>
                         <RoundedBox args={[0.9, 0.3, 0.55]} radius={0.02}>
                             <meshStandardMaterial color="#222" roughness={0.4} />
                         </RoundedBox>
                         <Text position={[-0.35, 0, 0.28]} fontSize={0.05} color="#666">AGP-LFP</Text>
                         <mesh position={[0.35, 0, 0.28]}>
                             <circleGeometry args={[0.02]} />
                             <meshBasicMaterial color={active ? "#22c55e" : "#333"} />
                         </mesh>
                     </group>
                 ))}
             </group>

             {/* Smart Hub - Right */}
             <group ref={hubRef} position={[1.2, 1.2, 0]}> 
                 <mesh position={[0, -0.6, 0]}>
                     <cylinderGeometry args={[0.05, 0.05, 1.2]} />
                     <meshStandardMaterial color="#333" />
                 </mesh>
                 <mesh position={[0, -1.2, 0]}>
                     <cylinderGeometry args={[0.2, 0.2, 0.05]} />
                     <meshStandardMaterial color="#333" />
                 </mesh>

                 <group position={[0, 0.2, 0]}>
                     <RoundedBox args={[0.7, 0.5, 0.3]} radius={0.05}>
                         <meshStandardMaterial color="#e5e5e5" metalness={0.2} roughness={0.2} />
                     </RoundedBox>
                     <group position={[0, 0.05, 0.16]}>
                         <mesh>
                            <planeGeometry args={[0.55, 0.3]} />
                            <meshStandardMaterial color="#000" />
                         </mesh>
                         {active && (
                             <group position={[0, 0, 0.01]}>
                                 <Text position={[-0.15, 0.08, 0]} fontSize={0.04} color="#888">INPUT</Text>
                                 <Text position={[-0.15, 0.02, 0]} fontSize={0.06} color="#fbbf24">2.4kW</Text>
                                 <Text position={[0.15, 0.08, 0]} fontSize={0.04} color="#888">OUTPUT</Text>
                                 <Text position={[0.15, 0.02, 0]} fontSize={0.06} color="#3b82f6">0.8kW</Text>
                             </group>
                         )}
                     </group>
                 </group>
             </group>

             {/* Connection: Battery to Hub */}
             {show && (
                 <RealisticCable 
                    start={new THREE.Vector3(-1.2, (count * 0.35) + 0.2, 0)}
                    end={new THREE.Vector3(1.2, 1.0, 0)}
                    midPoint={new THREE.Vector3(0, 0.5, 0)}
                    active={active}
                    color="#22c55e"
                    thick={true}
                 />
             )}
        </group>
    )
}

// 5. Smart Cables (Daisy Chain Logic)
const SmartCables = ({ show, config, hubPos }: { show: boolean, config: SystemConfig, hubPos: THREE.Vector3 }) => {
    
    // Group positions are calculated based on groupSpacing = 2.5
    // Width of panel group is ~2.1m.
    // Center of Group 0: -1.25. Right Edge of G0: -1.25 + 1.05 = -0.2
    // Center of Group 1: +1.25. Left Edge of G1: 1.25 - 1.05 = 0.2
    // Gap is 0.4m.
    
    const zDepth = -4;
    
    return (
        <group>
            {/* 1. Daisy Chain: Group 0 to Group 1 (if exists) */}
            {config.panelGroups > 1 && (
                 <RealisticCable 
                    start={new THREE.Vector3(-0.2, 0.5, zDepth)} // G0 Right Edge (-1.25 + 1.05)
                    end={new THREE.Vector3(0.2, 0.5, zDepth)}    // G1 Left Edge (1.25 - 1.05)
                    midPoint={new THREE.Vector3(0, 0.1, zDepth)} // Hangs low
                    active={show}
                    color="#fbbf24"
                />
            )}

            {/* 2. Final Run: Last Group to Hub */}
            <RealisticCable 
                start={
                    config.panelGroups > 1 
                    ? new THREE.Vector3(2.3, 0.5, zDepth)  // Group 1 Right Edge (1.25 + 1.05)
                    : new THREE.Vector3(-0.2, 0.5, zDepth) // Group 0 Right Edge (-1.25 + 1.05)
                }
                end={hubPos} 
                midPoint={new THREE.Vector3(1.0, 0.2, 0)}
                active={show}
                color="#fbbf24"
            />

            {/* 3. Hub to Lamp */}
            <RealisticCable 
                start={new THREE.Vector3(hubPos.x + 0.2, hubPos.y, hubPos.z)} 
                end={new THREE.Vector3(3, 0.1, 2.5)} 
                midPoint={new THREE.Vector3(2.5, 0.8, 2.5)}
                active={show}
                color="#ffffff"
            />
        </group>
    )
}

const RealisticCable = ({ start, end, midPoint, active, color = "#ff9900", thick=false }: any) => {
    const curve = useMemo(() => {
        return new THREE.CatmullRomCurve3([start, midPoint, end], false, 'catmullrom', 0.2);
    }, [start, end, midPoint]);

    const [progress, setProgress] = useState(0);

    useFrame((_, delta) => {
        const speed = 0.5 * delta; 
        if (active) {
            setProgress(p => Math.min(p + speed, 1));
        } else {
            setProgress(p => Math.max(p - speed, 0));
        }
    });

    if (progress < 0.05) return null;

    return (
        <group>
            <mesh>
                 <tubeGeometry args={[curve, 40, thick ? 0.03 : 0.015, 8, false]} />
                 <meshStandardMaterial color="#111" />
            </mesh>
            {active && progress > 0.9 && (
                 <ElectronFlow curve={curve} color={color} />
            )}
        </group>
    )
}

const ElectronFlow = ({ curve, color }: any) => {
    const count = 4;
    const refs = useRef<THREE.Mesh[]>([]);
    
    useFrame((_, delta) => {
        refs.current.forEach((mesh, i) => {
             if(!mesh) return;
             const speed = 0.4;
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
                    <sphereGeometry args={[0.04]} />
                    <meshBasicMaterial color={color} toneMapped={false} />
                    <pointLight distance={0.4} intensity={2} color={color} />
                </mesh>
            ))}
        </group>
    )
}

// 6. Static Sun
const Sun = () => {
    // Static Sun Position
    const sunPos = new THREE.Vector3(5, 15, 5);

    return (
        <group>
            <mesh position={sunPos}>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshBasicMaterial color="#fbbf24" toneMapped={false} />
                <pointLight intensity={2} distance={100} color="#fbbf24" />
            </mesh>
            <directionalLight 
                position={sunPos}
                intensity={3} 
                castShadow 
                color="#fffbeb"
                shadow-bias={-0.0001}
            />
        </group>
    )
}


// --- Main Scene ---
const Experience = ({ config, stage }: { config: SystemConfig, stage: number }) => {
   const showPower = stage >= 1;
   const showLamp = stage >= 2;
   const showSolar = stage >= 3;
   const unfoldSolar = stage >= 4;
   const connectCables = stage >= 5;
   const systemActive = stage >= 5;

   return (
      <>
         <PerspectiveCamera makeDefault position={[0, 8, 14]} fov={35} />
         <OrbitControls 
            enablePan={true} 
            minPolarAngle={0} 
            maxPolarAngle={Math.PI / 2.1} 
            autoRotate={false}
            target={[0, 2, 0]}
         />
         
         <Environment preset="city" environmentIntensity={0.8} />
         <ambientLight intensity={0.5} />
         
         {/* Static Sun */}
         {systemActive && <Sun />}
         {!systemActive && <directionalLight position={[10, 10, 5]} intensity={2} />}

         <group position={[0, -1, 0]}>
            {/* Solar Arrays with Fixed Stand & Static Panels */}
            {Array.from({ length: config.panelGroups }).map((_, i) => (
               <SolarGroup key={`sg-${i}`} index={i} show={showSolar} unfolded={unfoldSolar} />
            ))}

            {/* Separated Power System */}
            <PowerSystem count={config.batteries} show={showPower} active={systemActive} />
            
            {/* Home Lamp */}
            <HomeLamp show={showLamp} on={systemActive} />
            
            {/* Daisy Chain Cables */}
            <SmartCables show={connectCables} config={config} hubPos={new THREE.Vector3(1.2, 1.4, 3)} />
            
            {/* Floor */}
            <ContactShadows resolution={1024} scale={50} blur={2} opacity={0.4} far={10} color="#000" />
            <gridHelper args={[40, 40, 0x333333, 0x111111]} position={[0, 0.01, 0]} />
         </group>
      </>
   );
};

// --- Mobile Fallback UI ---
const MobileFallback = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-surface-900 to-black p-8 text-center border-t border-white/5 relative overflow-hidden">
        {/* Abstract decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-lumina-500/10 rounded-full blur-[80px]"></div>
        
        <div className="relative z-10 bg-surface-800/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl max-w-sm">
            <div className="w-16 h-16 bg-surface-900 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10 shadow-lg">
                <MonitorSmartphone className="w-8 h-8 text-lumina-400" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">
                3D 体验仅支持桌面端
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                为了提供最佳的交互性能与视觉效果，全系统自动装配演示功能已针对桌面大屏设备进行优化。
            </p>
            <p className="text-xs text-gray-500">
                请切换至 PC 或 Mac 浏览器访问以获得完整体验。
            </p>
        </div>
    </div>
  );
};

// --- Main Component ---
export const SystemAssembly: React.FC = () => {
  const [activeConfig, setActiveConfig] = useState<ConfigType>('chen-10');
  const [isPlaying, setIsPlaying] = useState(false);
  const [stage, setStage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile Detection
  useEffect(() => {
    const checkMobile = () => {
        setIsMobile(window.innerWidth < 1024); // Consider tablets as mobile for heavy 3D
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sequenced Animation Logic
  useEffect(() => {
     if (!isPlaying || isMobile) {
         setStage(0);
         return;
     }

     let timers: NodeJS.Timeout[] = [];
     
     // Slower Sequence
     setStage(1);
     timers.push(setTimeout(() => setStage(2), 2000));
     timers.push(setTimeout(() => setStage(3), 4000));
     timers.push(setTimeout(() => setStage(4), 6000));
     timers.push(setTimeout(() => setStage(5), 9000));

     return () => timers.forEach(t => clearTimeout(t));
  }, [isPlaying, activeConfig, isMobile]);

  // Auto-play on load (only desktop)
  useEffect(() => {
      if (!isMobile) {
        setIsPlaying(true);
      }
  }, [isMobile]);

  const handleReset = () => {
      setIsPlaying(false);
      setTimeout(() => setIsPlaying(true), 500);
  }

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
               包含分离式储能部署、可伸缩光伏支架展开及线缆连接演示。
            </p>
        </div>

        {/* 3D Canvas Container */}
        <div className="relative w-full h-[600px] bg-gradient-to-b from-gray-900 to-black rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
           
           {isMobile ? (
               <MobileFallback />
           ) : (
               <>
                   <Canvas shadows dpr={[1, 2]} gl={{ toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}>
                      <Experience config={CONFIGS[activeConfig]} stage={stage} />
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
                                  onClick={() => {
                                      setActiveConfig(key);
                                      handleReset();
                                  }}
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
                            onClick={handleReset} 
                            size="sm" 
                            className="w-full transition-all duration-300 bg-lumina-500 hover:bg-lumina-400 text-black"
                         >
                            重新演示 (Replay)
                         </Button>
                      </div>
                   </div>
                   
                   {/* Progress Indicator */}
                   <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                       {[1,2,3,4,5].map(i => (
                           <div key={i} className={`h-1 rounded-full transition-all duration-500 ${stage >= i ? 'w-8 bg-lumina-500' : 'w-2 bg-gray-700'}`}></div>
                       ))}
                   </div>
               </>
           )}

        </div>
      </div>
    </div>
  );
};