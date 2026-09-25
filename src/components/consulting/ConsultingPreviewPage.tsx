import React from 'react';
import { ConsultingHomepage } from './ConsultingHomepage';

interface Props {
  onNavigate: (slug: string) => void;
}

export function ConsultingPreviewPage({ onNavigate }: Props) {
  return <ConsultingHomepage onNavigate={onNavigate} isPreview={true} />;
}

