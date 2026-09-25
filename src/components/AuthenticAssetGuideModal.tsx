import React, { useState } from 'react';
import { X, Camera, CheckCircle2, AlertCircle, Upload, Eye, FileText } from 'lucide-react';
import { schoolAssets } from '../data/schoolAssets';

interface AuthenticAssetGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateAsset?: (assetId: string, newPath: string) => void;
}

export const AuthenticAssetGuideModal: React.FC<AuthenticAssetGuideModalProps> = ({
  isOpen,
  onClose,
  onUpdateAsset
}) => {
  const [assetUrls, setAssetUrls] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    Object.keys(schoolAssets).forEach((key) => {
      initial[key] = schoolAssets[key].path || '';
    });
    return initial;
  });

  if (!isOpen) return null;

  const handleApplyUrl = (key: string) => {
    if (onUpdateAsset) {
      onUpdateAsset(key, assetUrls[key]);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          aria-label="Close Guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded">
              <Camera className="w-3.5 h-3.5" />
              <span>Authentic Photo Asset Registry</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mt-1">
              Verified St. Paul's Kevote Photographs
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              To strictly protect authenticity, only verified photos of St. Paul's High School – Kevote are loaded. Generic stock photos and fictional AI buildings are strictly barred.
            </p>
          </div>

          {/* Guidelines Banner */}
          <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-200/80 text-xs text-slate-700 space-y-1">
            <span className="font-bold text-sky-900 block">
              How to upload / activate your authentic school photos:
            </span>
            <p>
              1. Place your photographs into the project's <code className="bg-white px-1.5 py-0.5 rounded border border-slate-300 font-mono text-sky-800">/public/images/</code> folder.
            </p>
            <p>
              2. Or paste an image URL directly into any slot below to test immediate preview on the website.
            </p>
          </div>

          {/* Slots List */}
          <div className="space-y-3 pt-2">
            {Object.entries(schoolAssets).map(([key, asset]) => {
              const currentPath = assetUrls[key] || '';
              const isSet = currentPath.trim().length > 0;

              return (
                <div
                  key={key}
                  className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-0.5 max-w-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-slate-900 uppercase">
                        [{asset.placeholderText}]
                      </span>
                      {isSet ? (
                        <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-medium">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Active</span>
                        </span>
                      ) : (
                        <span className="text-[10px] text-amber-700 bg-amber-100 px-2 py-0.5 rounded font-medium">
                          Awaiting Photo
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 text-[11px]">
                      {asset.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <input
                      type="text"
                      placeholder="e.g. /images/compound.jpg or URL"
                      value={currentPath}
                      onChange={(e) => {
                        const val = e.target.value;
                        setAssetUrls({ ...assetUrls, [key]: val });
                      }}
                      className="px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-xs w-full sm:w-56 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                    <button
                      type="button"
                      onClick={() => handleApplyUrl(key)}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 text-white font-semibold text-[11px] uppercase hover:bg-slate-800 shrink-0"
                    >
                      Update
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-sky-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-sky-500"
            >
              Done & Return to Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
