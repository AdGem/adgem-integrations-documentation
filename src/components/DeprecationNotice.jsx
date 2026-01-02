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
 * @param {string} [props.date] - Override the default deprecation date
 * @param {string} [props.previousVersion] - Override the previous version being deprecated
 *
 * @example
 * // Basic usage
 * <DeprecationNotice platform="iOS" />
 *
 * // With custom date
 * <DeprecationNotice platform="Android" date="September 1, 2025" />
 */
export default function DeprecationNotice({
  platform,
  date = versions.deprecation.date,
  previousVersion = versions.deprecation.previousVersionCutoff,
}) {
  return (
    <Admonition type="warning" title="Previous SDK Version Deprecation">
      <p>
        Effective <strong>{date}</strong>, we will be discontinuing support for
        {platform} SDK version {previousVersion} and below. Please upgrade to the
        latest version to continue receiving updates, new features, and support.
      </p>
      <p>
        If you have any questions about upgrading, please contact{' '}
        <a href="mailto:support@adgem.com">support@adgem.com</a>.
      </p>
    </Admonition>
  );
}
