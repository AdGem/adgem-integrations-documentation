import React from 'react';
import Admonition from '@theme/Admonition';
import versions from '@site/src/data/versions';

/**
 * DeprecationNotice Component
 *
 * Displays a standardized deprecation warning for SDK documentation.
 * Automatically adjusts messaging based on whether the deadline is in the future or past.
 * Hides completely if the deadline is more than 6 months in the past.
 *
 * @param {Object} props
 * @param {string} props.platform - The platform name (e.g., "iOS", "Android", "Unity")
 * @param {string} [props.deadline] - Override the default deprecation deadline date (e.g., "July 1, 2025")
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
  // Parse the deadline date string (e.g., "July 1, 2025")
  const deadlineDate = new Date(deadline);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize to start of day

  // Calculate 6 months ago
  const sixMonthsAgo = new Date(today);
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  // Hide the notice if deadline is more than 6 months in the past
  if (deadlineDate < sixMonthsAgo) {
    return null;
  }

  const isPast = deadlineDate <= today;

  if (isPast) {
    // Past tense messaging
    return (
      <Admonition type="caution" title="SDK Version No Longer Supported">
        <p>
          As of <strong>{deadline}</strong>, support for all previous versions of our
          AdGem Offerwall SDK has ended. Our infrastructure no longer supports traffic
          from {platform} SDK versions prior to <strong>{currentVersion}</strong>.
        </p>
        <p>
          Please upgrade to the latest SDK version immediately to restore service.
          Contact <a href="mailto:support@adgem.com">support@adgem.com</a> for migration
          assistance.
        </p>
      </Admonition>
    );
  }

  // Future tense messaging
  return (
    <Admonition type="warning" title="Upcoming SDK Version Deprecation">
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
