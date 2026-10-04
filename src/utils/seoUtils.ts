export function updateHeadMetadata(meta: {
  title: string;
  description?: string;
  canonical: string;
  url: string;
}) {
  if (typeof document === 'undefined') return;

  document.title = meta.title;

  const setAttr = (selector: string, attr: string, val: string, createTag?: { name: string; attrName: string; attrVal: string }) => {
    let el = document.querySelector(selector);
    if (!el && createTag) {
      el = document.createElement(createTag.name);
      el.setAttribute(createTag.attrName, createTag.attrVal);
      document.head.appendChild(el);
    }
    if (el) {
      el.setAttribute(attr, val);
    }
  };

  if (meta.description) {
    setAttr('meta[name="description"]', 'content', meta.description, { name: 'meta', attrName: 'name', attrVal: 'description' });
    setAttr('meta[property="og:description"]', 'content', meta.description, { name: 'meta', attrName: 'property', attrVal: 'og:description' });
    setAttr('meta[name="twitter:description"]', 'content', meta.description, { name: 'meta', attrName: 'name', attrVal: 'twitter:description' });
  }

  setAttr('meta[property="og:title"]', 'content', meta.title, { name: 'meta', attrName: 'property', attrVal: 'og:title' });
  setAttr('meta[name="twitter:title"]', 'content', meta.title, { name: 'meta', attrName: 'name', attrVal: 'twitter:title' });
  setAttr('link[rel="canonical"]', 'href', meta.canonical, { name: 'link', attrName: 'rel', attrVal: 'canonical' });
  setAttr('meta[property="og:url"]', 'content', meta.url, { name: 'meta', attrName: 'property', attrVal: 'og:url' });
}
