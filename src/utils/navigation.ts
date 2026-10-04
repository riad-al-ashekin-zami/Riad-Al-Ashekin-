import React from 'react';

/**
 * Handles link clicks gracefully for Single Page Application (SPA) architecture
 * while fully preserving standard browser behaviors:
 * - Middle-click (mouse wheel click) -> Opens in new tab
 * - Ctrl + Click (Windows/Linux) -> Opens in new tab
 * - Cmd + Click (macOS) -> Opens in new tab
 * - Shift + Click -> Opens in new window
 * - Right-click -> Context menu with native "Open link in new tab"
 * - Normal left-click -> Smooth client-side SPA navigation
 */
export function handleLinkClick(
  e: React.MouseEvent<HTMLAnchorElement | HTMLElement>,
  href: string,
  onNavigate?: (slug: string) => void
): void {
  // If user held Ctrl, Cmd, Shift, Alt or clicked with a non-primary mouse button,
  // do NOT prevent default — let the browser natively open in a new tab or window!
  if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button !== 0) {
    return;
  }

  // If the target element or anchor has target="_blank", let browser natively open in new tab!
  const targetAttr = (e.currentTarget as HTMLAnchorElement)?.target || 
                     (e.target as HTMLElement)?.closest('a')?.getAttribute('target');
  if (targetAttr === '_blank') {
    return;
  }

  // External links, anchors, or mailto/tel should follow default browser behavior
  if (
    !onNavigate ||
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('#') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:')
  ) {
    return;
  }

  // Smooth client-side navigation
  e.preventDefault();
  onNavigate(href);
}

/**
 * Universal AppLink component that renders an <a> tag with native href
 * supporting "Open in new tab", middle click, Ctrl/Cmd click, and smooth SPA transition.
 */
export interface AppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  onNavigate?: (slug: string) => void;
  className?: string;
  children: React.ReactNode;
}

export const AppLink = React.forwardRef<HTMLAnchorElement, AppLinkProps>(
  ({ href, onNavigate, className, children, onClick, ...rest }, ref) => {
    return React.createElement(
      'a',
      {
        ref,
        href,
        className,
        onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
          if (onClick) {
            onClick(e);
          }
          if (!e.defaultPrevented) {
            handleLinkClick(e, href, onNavigate);
          }
        },
        ...rest
      },
      children
    );
  }
);

AppLink.displayName = 'AppLink';
