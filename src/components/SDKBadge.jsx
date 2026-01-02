import React from 'react';
import versions from '@site/src/data/versions';

/**
 * SDKBadge Component
 *
 * Displays version and requirement badges for SDK documentation.
 * Automatically pulls version data from the centralized versions.js file.
 *
 * @param {Object} props
 * @param {('ios'|'android'|'unity'|'web')} props.platform - The platform to show badge for
 * @param {boolean} [props.showVersion=true] - Whether to show the version badge
 * @param {boolean} [props.showRequirements=true] - Whether to show requirement badges
 *
 * @example
 * // Show all badges for iOS
 * <SDKBadge platform="ios" />
 *
 * // Show only version badge
 * <SDKBadge platform="android" showRequirements={false} />
 */
export default function SDKBadge({
  platform,
  showVersion = true,
  showRequirements = true,
}) {
  const platformData = versions[platform];

  if (!platformData) {
    console.warn(`SDKBadge: Unknown platform "${platform}"`);
    return null;
  }

  const badges = [];

  if (showVersion) {
    badges.push(
      <span
        key="version"
        style={{
          backgroundColor: '#25c2a0',
          color: 'white',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '0.85em',
          fontWeight: 'bold',
          marginRight: '8px',
        }}
      >
        v{platformData.version}
      </span>
    );
  }

  if (showRequirements) {
    // Platform-specific requirement badges
    if (platform === 'ios' && platformData.minOS) {
      badges.push(
        <span
          key="minOS"
          style={{
            backgroundColor: '#007aff',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '0.85em',
            marginRight: '8px',
          }}
        >
          iOS {platformData.minOS}+
        </span>
      );
    }

    if (platform === 'android') {
      if (platformData.minSDK) {
        badges.push(
          <span
            key="minSDK"
            style={{
              backgroundColor: '#3ddc84',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '0.85em',
              marginRight: '8px',
            }}
          >
            API {platformData.minSDK}+
          </span>
        );
      }
    }

    if (platform === 'unity' && platformData.minUnityVersion) {
      badges.push(
        <span
          key="minUnity"
          style={{
            backgroundColor: '#222c37',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '0.85em',
            marginRight: '8px',
          }}
        >
          Unity {platformData.minUnityVersion}+
        </span>
      );
    }
  }

  return (
    <div style={{ marginBottom: '16px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
      {badges}
    </div>
  );
}
