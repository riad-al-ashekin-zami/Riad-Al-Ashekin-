import { ToolRegistryItem } from './types';
import { serpTools } from './serpTools';
import { crawlerTools } from './crawlerTools';
import { schemaTools } from './schemaTools';
import { contentTools } from './contentTools';
import { urlTools } from './urlTools';
import { calculatorTools } from './calculatorTools';
import { imageTools } from './imageTools';
import { devTools } from './devTools';

export * from './types';
export { serpTools } from './serpTools';
export { crawlerTools } from './crawlerTools';
export { schemaTools } from './schemaTools';
export { contentTools } from './contentTools';
export { urlTools } from './urlTools';
export { calculatorTools } from './calculatorTools';
export { imageTools } from './imageTools';
export { devTools } from './devTools';

export const ALL_TOOL_DETAILS: ToolRegistryItem[] = [
  ...serpTools,
  ...crawlerTools,
  ...schemaTools,
  ...contentTools,
  ...urlTools,
  ...calculatorTools,
  ...imageTools,
  ...devTools,
];

// Lookup maps for rapid resolution
const slugMap = new Map<string, ToolRegistryItem>();
const idMap = new Map<string, ToolRegistryItem>();
const pathMap = new Map<string, ToolRegistryItem>();

// Populate maps
ALL_TOOL_DETAILS.forEach(tool => {
  // Normalize slug
  const cleanSlug = tool.slug.toLowerCase().replace(/^\/+|\/+$/g, '');
  slugMap.set(cleanSlug, tool);
  idMap.set(tool.id.toLowerCase(), tool);

  // Normalize path
  const cleanPath = tool.path.toLowerCase().replace(/^\/+|\/+$/g, '');
  pathMap.set(cleanPath, tool);

  // Also map legacy paths if any
  if (tool.legacyPaths) {
    tool.legacyPaths.forEach(legacy => {
      const cleanLegacy = legacy.toLowerCase().replace(/^\/+|\/+$/g, '');
      pathMap.set(cleanLegacy, tool);
      slugMap.set(cleanLegacy, tool);
    });
  }
});

/**
 * Finds a tool by its slug (e.g. "meta-title-description-checker" or "/tools/meta-title-description-checker/")
 */
export function getToolBySlug(slug: string): ToolRegistryItem | undefined {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().replace(/^\/+|\/+$/g, '').replace(/^tools\//, '');
  return slugMap.get(clean) || pathMap.get(clean) || slugMap.get(slug.toLowerCase().replace(/^\/+|\/+$/g, ''));
}

/**
 * Finds a tool by its ID (e.g. "meta-checker" or "keyword-density-checker")
 */
export function getToolById(id: string): ToolRegistryItem | undefined {
  if (!id) return undefined;
  return idMap.get(id.toLowerCase()) || slugMap.get(id.toLowerCase());
}

/**
 * Finds a tool by exact pathname (e.g. "/tools/meta-title-description-checker/")
 */
export function getToolByPath(pathname: string): ToolRegistryItem | undefined {
  if (!pathname) return undefined;
  const clean = pathname.toLowerCase().replace(/^\/+|\/+$/g, '');
  return pathMap.get(clean) || getToolBySlug(clean);
}

/**
 * Get related tools for a given tool
 */
export function getRelatedTools(tool: ToolRegistryItem, limit = 4): ToolRegistryItem[] {
  const results: ToolRegistryItem[] = [];
  
  if (tool.relatedToolSlugs && tool.relatedToolSlugs.length > 0) {
    for (const relSlug of tool.relatedToolSlugs) {
      const found = getToolBySlug(relSlug) || getToolById(relSlug);
      if (found && found.id !== tool.id && !results.some(r => r.id === found.id)) {
        results.push(found);
      }
      if (results.length >= limit) return results;
    }
  }

  // Fallback to same category
  const sameCategory = ALL_TOOL_DETAILS.filter(t => t.category === tool.category && t.id !== tool.id);
  for (const item of sameCategory) {
    if (!results.some(r => r.id === item.id)) {
      results.push(item);
    }
    if (results.length >= limit) break;
  }

  return results;
}
