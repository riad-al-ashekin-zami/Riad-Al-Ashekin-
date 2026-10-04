// Lightweight URL path normalization utility
export function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  let clean = path.trim();
  if (!clean.startsWith('/')) {
    clean = '/' + clean;
  }
  return clean;
}
