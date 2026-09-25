import { useState, useEffect } from 'react';

export interface AuthorProfile {
  name: string;
  fullName: string;
  role: string;
  badge: string;
  subRole: string;
  bio: string;
  avatarUrl: string;
  squarePortraitUrl: string;
  fullPortraitUrl: string;
}

export const PORTRAIT_OPTIONS = {
  formal: '/images/riad-portrait.jpg',
  casual: '/images/riad-author-1x1.jpg'
};

export const SITE_AUTHOR: AuthorProfile = {
  name: 'Riad Al Ashekin',
  fullName: 'Riad Al Ashekin Zami',
  role: 'Business & Tech Consultant • SEO Strategist',
  badge: 'Author',
  subRole: 'Business & Technology Consultant • SEO Strategist • Software Architect',
  bio: 'Advising founders, executives, and enterprise leadership teams across North America, Europe, and Asia on software architectures, digital go-to-market execution, and organic acquisition dominance.',
  avatarUrl: '/images/riad-portrait.jpg',
  squarePortraitUrl: '/images/riad-portrait.jpg',
  fullPortraitUrl: '/images/riad-booking-portrait.jpg'
};

/**
 * Returns the active author avatar URL, checking for any user-uploaded override in localStorage
 */
export function getAuthorAvatarUrl(): string {
  if (typeof window !== 'undefined') {
    const customPhoto = 
      localStorage.getItem('riad_author_photo') || 
      localStorage.getItem('riad_blog_author_photo');
    if (customPhoto) return customPhoto;
  }
  return SITE_AUTHOR.avatarUrl;
}

export function useAuthorPhoto() {
  const [avatar, setAvatar] = useState<string>(() => getAuthorAvatarUrl());

  useEffect(() => {
    const handleUpdate = () => {
      setAvatar(getAuthorAvatarUrl());
    };
    window.addEventListener('storage', handleUpdate);
    window.addEventListener('author-photo-updated', handleUpdate);
    return () => {
      window.removeEventListener('storage', handleUpdate);
      window.removeEventListener('author-photo-updated', handleUpdate);
    };
  }, []);

  const updatePhoto = (dataUrl: string) => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('riad_author_photo', dataUrl);
        localStorage.setItem('riad_blog_author_photo', dataUrl);
        window.dispatchEvent(new Event('author-photo-updated'));
        setAvatar(dataUrl);
      } catch (err) {
        console.warn('Failed to save to localStorage:', err);
      }
    }
  };

  const resetPhoto = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('riad_author_photo');
      localStorage.removeItem('riad_blog_author_photo');
      window.dispatchEvent(new Event('author-photo-updated'));
      setAvatar(SITE_AUTHOR.avatarUrl);
    }
  };

  return { avatar, updatePhoto, resetPhoto };
}

