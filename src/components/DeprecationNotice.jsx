import React from 'react';
import Admonition from '@theme/Admonition';
import versions from '@site/src/data/versions';

/**
 * DeprecationNotice Component
 *
 * Displays a standardized deprecation warning for SDK documentation.
 * Uses centralized version data from versions.js.
 *
 * @param {Object} props
 * @param {string} props.platform - The platform name (e.g., "iOS", "Android", "Unity")
 * @param {string} [props.deadline] - Override the default deprecation deadline date
 * @param {string} [props.currentVersion] - The current minimum supported version
 *
 * @example
 * // Basic usage with defaults from versions.js
 * <DeprecationNotice platform="iOS" />
 *
 * // With custom deadline and version
 * <DeprecationNotice
 *   platform="Android"
 *   deadline="September 1, 2025"
 *   currentVersion="v4.0.0"
 * />
 */
export default function DeprecationNotice({
  platform,
  deadline = versions.deprecation.date,
  currentVersion = versions.deprecation.previousVersionCutoff,
}) {
  return (
    <Admonition type="warning" title="Previous SDK Version Deprecation">
      <p>
        Effective <strong>{deadline}</strong>, we will be discontinuing support for all
        previous versions of our AdGem Offerwall SDK. Our infrastructure will no longer
        support traffic from {platform} SDK versions prior to <strong>{currentVersion}</strong>.
      </p>
      <p>
        We strongly encourage all developers and partners to upgrade to the latest SDK
        version to ensure uninterrupted service and continued technical support. Please
        contact <a href="mailto:support@adgem.com">support@adgem.com</a> for migration
        guidance.
      </p>
    </Admonition>
  );
}
