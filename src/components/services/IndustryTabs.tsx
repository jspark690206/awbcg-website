'use client';

import { useState } from 'react';

interface Feature {
  title: string;
  desc: string;
}

interface Effect {
  label: string;
  value: string;
  unit?: string;
}

interface IndustryData {
  background: string;
  features: Feature[];
  effects: Effect[];
}

interface IndustryTabsProps {
  auto: IndustryData;
  food: IndustryData;
  color: string;
}

export default function IndustryTabs({ auto, food, color }: IndustryTabsProps) {
  const [active, setActive] = useState<'auto' | 'food'>('auto');
  const data = active === 'auto' ? auto : food;

  return (
    <div>
      {/* 탭 */}
      <div className="flex gap-2 mb-6">
        {[
          { key: 'auto' as const, label: '자동차부품 업종' },
          { key: 'food' as const, label: '식품 업종' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              active === tab.key ? 'text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
            style={active === tab.key ? { backgroundColor: color } : {}}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 도입 배경 */}
      <div
        className="rounded-2xl p-6 mb-6 border"
        style={{ backgroundColor: `${color}08`, borderColor: `${color}20` }}
      >
        <h4 className="font-bold text-sm mb-2" style={{ color }}>도입 배경 및 필요성</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{data.background}</p>
      </div>

      {/* 주요 기능 */}
      <div className="mb-6">
        <h4 className="font-bold text-base mb-4" style={{ color: 'var(--color-primary)' }}>주요 기능</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.features.map((f, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-start gap-3">
              <div
                className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mt-0.5"
                style={{ backgroundColor: color }}
              >
                {i + 1}
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-800">{f.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 도입 효과 */}
      <div>
        <h4 className="font-bold text-base mb-4" style={{ color: 'var(--color-primary)' }}>도입 효과</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {data.effects.map((e, i) => (
            <div
              key={i}
              className="rounded-xl p-4 text-center"
              style={{ background: `linear-gradient(135deg, ${color}15, ${color}05)`, border: `1px solid ${color}20` }}
            >
              <div className="text-2xl font-bold" style={{ color }}>{e.value}</div>
              {e.unit && <div className="text-xs font-medium" style={{ color }}>{e.unit}</div>}
              <div className="text-xs text-gray-500 mt-1">{e.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
