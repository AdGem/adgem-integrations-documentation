/**
 * Centralized SDK version management
 *
 * This file contains all SDK version numbers and related configuration.
 * Update versions here and they will automatically propagate to all documentation.
 *
 * Usage in MDX files:
 *   import versions from '@site/src/data/versions';
 *   <p>Current iOS SDK version: {versions.ios.version}</p>
 *
 * Usage in React components:
 *   import versions from '@site/src/data/versions';
 *   const { ios, android, unity } = versions;
 */

module.exports = {
  // iOS SDK
  ios: {
    version: '2.0.0',
    minOS: '15.8',
    downloadUrl: 'https://adgem-framework.s3.amazonaws.com/iOS-2.0.0.zip',
    cocoapodsName: 'AdGem',
  },

  // Android SDK
  android: {
    version: '4.0.3',
    minSDK: '28',
    targetSDK: '34',
    mavenRepo: 'https://maven.adgem.com',
  },

  // Unity SDK
  unity: {
    version: '1.6.14',
    minUnityVersion: '2020.3',
    packageName: 'com.adgem.sdk',
  },

  // Web Offerwall
  web: {
    version: '1.0.0',
    scriptUrl: 'https://cdn.adgem.com/offerwall/v1/offerwall.js',
  },

  // Deprecation notice settings
  deprecation: {
    date: 'July 1, 2025',
    previousVersionCutoff: '1.x',
  },

  // API versions
  api: {
    offer: 'v1',
    targeted: 'v1',
    postback: 'v3',
  },
};
