'use client';

import ImageDepthMap from '@/packages/react-depth-map-component/src/ImageDepthMap';

const CLEAN_BACKGROUND_PATH = "/bg.jpg";
const PORTRAIT_PATH = "/portrait.webp";
const DEPTH_MAP_PATH = "/depthmap.webp";

interface PortraitProps {
  size?: number;
}

export default function Portrait({
  size = 500,
}: PortraitProps) {
  return (
    <div 
      style={{
        position: "relative",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "0%",
        overflow: "hidden",
      }}
    >
      {/* Background Layer - This will now move*/}
      <div>
        <ImageDepthMap
          originalImg={CLEAN_BACKGROUND_PATH}
          depthImg={DEPTH_MAP_PATH}
          verticalThreshold={15}
          horizontalThreshold={15}
          respondTo="mouseMove"
          reverseMotion={undefined}
          className={undefined}
          style={undefined}
          onPermissionChange={undefined}
        />
      </div>

      {/* Portrait Layer */}
      <div 
        style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%",
        }}
      >
        <div>
          <ImageDepthMap
            originalImg={PORTRAIT_PATH}
            depthImg={DEPTH_MAP_PATH}
            verticalThreshold={15}
            horizontalThreshold={15}
            respondTo="mouseMove"
            reverseMotion={undefined}
            className={undefined}
            style={undefined}
            onPermissionChange={undefined}
          />
        </div>
      </div>
    </div>
  );
}
