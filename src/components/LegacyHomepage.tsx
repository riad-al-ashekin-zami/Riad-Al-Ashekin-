import React from 'react';
import { Hero } from './Hero';
import { Ecosystem } from './Ecosystem';
import { Portfolio } from './Portfolio';
import { CoFoundedVentures } from './CoFoundedVentures';
import { MarketingStarts } from './MarketingStarts';
import { ProductToMarket } from './ProductToMarket';
import { MarketingFramework } from './MarketingFramework';
import { MeasurementOptimization } from './MeasurementOptimization';
import { ThingsIveBuilt } from './ThingsIveBuilt';

interface Props {
  onNavigate: (slug: string) => void;
}

export default function LegacyHomepage({ onNavigate }: Props) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Ecosystem />
      <Portfolio onNavigate={onNavigate} />
      <CoFoundedVentures />
      <MarketingStarts />
      <ProductToMarket />
      <MarketingFramework />
      <MeasurementOptimization />
      <ThingsIveBuilt onNavigate={onNavigate} />
    </>
  );
}
