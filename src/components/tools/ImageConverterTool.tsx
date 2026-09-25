import React, { useState, useRef } from 'react';
import { Upload, Download, Image as ImageIcon, CheckCircle2, RotateCw } from 'lucide-react';

interface Props {
  targetFormat?: 'image/png' | 'image/jpeg' | 'image/webp';
  ext?: 'png' | 'jpg' | 'webp';
  title?: string;
}

export function ImageConverterTool({ 
  targetFormat = 'image/png', 
  ext = 'png',
  title = 'Image Converter'
}: Props) {
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState('');
  const [originalSize, setOriginalSize] = useState<number>(0);
  const [convertedUrl, setConvertedUrl] = useState<string | null>(null);
  const [convertedSize, setConvertedSize] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name.replace(/\.[^/.]+$/, ''));
    setOriginalSize(file.size);
    setConvertedUrl(null);
    setIsProcessing(true);

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // If converting to JPEG, fill white background for transparency
        if (targetFormat === 'image/jpeg') {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        ctx.drawImage(img, 0, 0);

        canvas.toBlob((blob) => {
          if (blob) {
            setConvertedSize(blob.size);
            const downloadUrl = URL.createObjectURL(blob);
            setConvertedUrl(downloadUrl);
            setSourceImage(img.src);
            setIsProcessing(false);
          }
        }, targetFormat, 0.92);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="text-center max-w-lg mx-auto">
        <div className="w-12 h-12 bg-accent-50 text-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-accent-200">
          <ImageIcon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-brand-950">{title}</h3>
        <p className="text-xs text-brand-600 mt-1">
          Drop any WebP, PNG, or JPG file. Converted 100% locally in your browser for instant privacy.
        </p>
      </div>

      <div
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-brand-200 hover:border-accent-400 bg-brand-50/50 hover:bg-brand-50 transition-all rounded-2xl p-8 text-center cursor-pointer max-w-xl mx-auto"
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
        <Upload className="w-8 h-8 text-brand-400 mx-auto mb-2" />
        <p className="text-xs font-bold text-brand-900">Click or Drag & Drop Image Here</p>
        <p className="text-[11px] text-brand-500 mt-1">Supports WebP, PNG, JPG, BMP, GIF</p>
      </div>

      {isProcessing && (
        <div className="text-center py-4 flex items-center justify-center gap-2 text-xs font-semibold text-brand-600">
          <RotateCw className="w-4 h-4 animate-spin text-accent-600" />
          Processing high-fidelity conversion...
        </div>
      )}

      {convertedUrl && (
        <div className="max-w-xl mx-auto bg-brand-50 rounded-2xl border border-brand-200 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-growth-700">
              <CheckCircle2 className="w-4 h-4 text-growth-600" />
              Conversion Complete!
            </div>
            <div className="text-[11px] font-mono text-brand-600">
              {formatBytes(originalSize)} → {formatBytes(convertedSize)}
            </div>
          </div>

          <div className="aspect-video max-h-56 rounded-xl overflow-hidden bg-white border border-brand-200 flex items-center justify-center p-2">
            <img src={convertedUrl} alt="Converted preview" className="max-h-full object-contain" />
          </div>

          <a
            href={convertedUrl}
            download={`${fileName}-converted.${ext}`}
            className="w-full inline-flex items-center justify-center gap-2 py-3 bg-brand-950 hover:bg-brand-900 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
          >
            <Download className="w-4 h-4" /> Download .{ext.toUpperCase()} File
          </a>
        </div>
      )}
    </div>
  );
}
