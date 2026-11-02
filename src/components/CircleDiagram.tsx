/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from 'react';

export interface CircleDiagramProps {
  r?: number; // logical radius in cm or units
  theta?: number; // central angle in degrees (default 60)
  width?: number;
  height?: number;
  showCenter?: boolean;
  showRadius?: boolean;
  showDiameter?: boolean;
  showArc?: boolean;
  showChord?: boolean;
  showApothem?: boolean;
  showSector?: boolean;
  showTriangle?: boolean;
  showSegment?: boolean;
  showInscribed?: boolean;
  inscribedAnglePos?: number; // degree position of point C
  showRightAngleMark?: boolean;
  showAngleArc?: boolean;
  highlight?: 'radius' | 'diameter' | 'arc' | 'chord' | 'apothem' | 'sector' | 'segment' | 'triangle' | 'angle' | string;
  customLabels?: { [key: string]: string };
  title?: string;
  subtitle?: string;
  interactive?: boolean;
  onThetaChange?: (newTheta: number) => void;
  className?: string;
}

export const CircleDiagram: React.FC<CircleDiagramProps> = ({
  r = 10,
  theta = 60,
  width = 360,
  height = 360,
  showCenter = true,
  showRadius = true,
  showDiameter = false,
  showArc = true,
  showChord = false,
  showApothem = false,
  showSector = false,
  showTriangle = false,
  showSegment = false,
  showInscribed = false,
  inscribedAnglePos = 180, // default top/opposite
  showRightAngleMark = true,
  showAngleArc = true,
  highlight,
  customLabels = {},
  title,
  subtitle,
  className = '',
}) => {
  const cx = width / 2;
  const cy = height / 2;
  // Visual radius fitted nicely in canvas with padding for labels
  const R = Math.min(width, height) * 0.36;

  // Symmetrical placement: chord horizontal or placed at bottom for maximum clarity
  // We place bisector of theta along the bottom (270 deg in SVG or -90 deg Cartesian)
  // Let angle bisector be at angle 90 deg (pointing straight down in SVG):
  const bisectorAngle = 90; // degrees
  const halfTheta = theta / 2;
  const rad = (deg: number) => (deg * Math.PI) / 180;

  // Angles for point A and point B in standard SVG coordinates
  // (0 deg is right, 90 deg is down)
  const angleA = bisectorAngle - halfTheta;
  const angleB = bisectorAngle + halfTheta;

  const ax = cx + R * Math.cos(rad(angleA));
  const ay = cy + R * Math.sin(rad(angleA));

  const bx = cx + R * Math.cos(rad(angleB));
  const by = cy + R * Math.sin(rad(angleB));

  // Midpoint of chord AB
  const mx = (ax + bx) / 2;
  const my = (ay + by) / 2;

  // Inscribed angle point C (e.g. top of the circle)
  const angleC = inscribedAnglePos;
  const cx_pt = cx + R * Math.cos(rad(angleC));
  const cy_pt = cy + R * Math.sin(rad(angleC));

  // Diameter point (opposite to A)
  const diamX = cx - (ax - cx);
  const diamY = cy - (ay - cy);

  // SVG arc flags
  const largeArcFlag = theta > 180 ? 1 : 0;
  const sweepFlag = 1; // clockwise from A to B

  // Sector path
  const sectorPath = useMemo(() => {
    return `M ${cx} ${cy} L ${ax} ${ay} A ${R} ${R} 0 ${largeArcFlag} ${sweepFlag} ${bx} ${by} Z`;
  }, [cx, cy, ax, ay, bx, by, R, largeArcFlag, sweepFlag]);

  // Triangle path
  const trianglePath = useMemo(() => {
    return `M ${cx} ${cy} L ${ax} ${ay} L ${bx} ${by} Z`;
  }, [cx, cy, ax, ay, bx, by]);

  // Segment (Tembereng) path: Arc from A to B, then straight line back from B to A
  const segmentPath = useMemo(() => {
    return `M ${ax} ${ay} A ${R} ${R} 0 ${largeArcFlag} ${sweepFlag} ${bx} ${by} Z`;
  }, [ax, ay, bx, by, R, largeArcFlag, sweepFlag]);

  // Arc path only
  const arcPath = useMemo(() => {
    return `M ${ax} ${ay} A ${R} ${R} 0 ${largeArcFlag} ${sweepFlag} ${bx} ${by}`;
  }, [ax, ay, bx, by, R, largeArcFlag, sweepFlag]);

  // Central angle arc
  const angleArcRadius = Math.min(36, R * 0.35);
  const angleArcPath = useMemo(() => {
    if (theta <= 0 || theta >= 360) return '';
    const arcStartX = cx + angleArcRadius * Math.cos(rad(angleA));
    const arcStartY = cy + angleArcRadius * Math.sin(rad(angleA));
    const arcEndX = cx + angleArcRadius * Math.cos(rad(angleB));
    const arcEndY = cy + angleArcRadius * Math.sin(rad(angleB));
    return `M ${arcStartX} ${arcStartY} A ${angleArcRadius} ${angleArcRadius} 0 ${largeArcFlag} 1 ${arcEndX} ${arcEndY}`;
  }, [cx, cy, angleArcRadius, angleA, angleB, largeArcFlag]);

  // Inscribed angle arc at C
  const inscribedArcRadius = 24;
  const inscribedArcPath = useMemo(() => {
    if (!showInscribed) return '';
    // vector CA and CB
    const vCAx = ax - cx_pt;
    const vCAy = ay - cy_pt;
    const vCBx = bx - cx_pt;
    const vCBy = by - cy_pt;
    const angCA = Math.atan2(vCAy, vCAx);
    const angCB = Math.atan2(vCBy, vCBx);
    const startX = cx_pt + inscribedArcRadius * Math.cos(angCA);
    const startY = cy_pt + inscribedArcRadius * Math.sin(angCA);
    const endX = cx_pt + inscribedArcRadius * Math.cos(angCB);
    const endY = cy_pt + inscribedArcRadius * Math.sin(angCB);
    return `M ${startX} ${startY} A ${inscribedArcRadius} ${inscribedArcRadius} 0 0 1 ${endX} ${endY}`;
  }, [showInscribed, ax, ay, bx, by, cx_pt, cy_pt]);

  // Right angle symbol at M (Apothema perpendicular to chord)
  const rightAngleSymbol = useMemo(() => {
    if (!showApothem || !showRightAngleMark || theta >= 180) return null;
    const size = 10;
    // Direction along chord from M to B
    const chordLen = Math.hypot(bx - ax, by - ay);
    if (chordLen < 0.001) return null;
    const uChordX = (bx - ax) / chordLen;
    const uChordY = (by - ay) / chordLen;
    // Direction along apothem from M to O
    const apothemLen = Math.hypot(cx - mx, cy - my);
    if (apothemLen < 0.001) return null;
    const uApX = (cx - mx) / apothemLen;
    const uApY = (cy - my) / apothemLen;

    const p1x = mx + uChordX * size;
    const p1y = my + uChordY * size;
    const p2x = mx + uChordX * size + uApX * size;
    const p2y = my + uChordY * size + uApY * size;
    const p3x = mx + uApX * size;
    const p3y = my + uApY * size;

    return `M ${p1x} ${p1y} L ${p2x} ${p2y} L ${p3x} ${p3y}`;
  }, [showApothem, showRightAngleMark, theta, ax, ay, bx, by, cx, cy, mx, my]);

  // Label offsets
  const labelDist = 20;
  const labelAx = cx + (R + labelDist) * Math.cos(rad(angleA));
  const labelAy = cy + (R + labelDist) * Math.sin(rad(angleA));
  const labelBx = cx + (R + labelDist) * Math.cos(rad(angleB));
  const labelBy = cy + (R + labelDist) * Math.sin(rad(angleB));
  const labelCx = cx + (R + labelDist) * Math.cos(rad(angleC));
  const labelCy = cy + (R + labelDist) * Math.sin(rad(angleC));

  // Arc midpoint for labeling busur
  const midArcAngle = bisectorAngle;
  const midArcX = cx + (R + 14) * Math.cos(rad(midArcAngle));
  const midArcY = cy + (R + 14) * Math.sin(rad(midArcAngle));

  // Radius label midpoint (on OA)
  const midOAx = (cx + ax) / 2 - 12;
  const midOAy = (cy + ay) / 2;

  // Apothem label midpoint
  const midApothemX = (cx + mx) / 2 + 12;
  const midApothemY = (cy + my) / 2;

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {title && (
        <div className="text-center mb-1">
          <span className="text-sm font-bold text-slate-800 tracking-tight">{title}</span>
          {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
        </div>
      )}

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full max-w-[380px] h-auto drop-shadow-sm bg-white rounded-xl border border-slate-200/80"
      >
        <defs>
          {/* Subtle hatch pattern for Tembereng if needed */}
          <pattern id="diagonalHatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="8" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4" />
          </pattern>
          {/* Glow filter for highlight */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Full Circle Grid / Boundary */}
        <circle
          cx={cx}
          cy={cy}
          r={R}
          fill="#f8fafc"
          stroke="#cbd5e1"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />

        {/* 1. SECTOR (JURING) FILL */}
        {(showSector || highlight === 'sector') && (
          <path
            d={sectorPath}
            fill="#fbbf24"
            fillOpacity={showSegment ? 0.25 : 0.45}
            stroke="#f59e0b"
            strokeWidth="1.5"
            className="transition-all duration-300"
          />
        )}

        {/* 2. TRIANGLE (SEGITIGA DALAM JURING) FILL */}
        {(showTriangle || highlight === 'triangle') && (
          <path
            d={trianglePath}
            fill="#6366f1"
            fillOpacity="0.35"
            stroke="#4f46e5"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            className="transition-all duration-300"
          />
        )}

        {/* 3. SEGMENT (TEMBERENG) FILL */}
        {(showSegment || highlight === 'segment') && (
          <path
            d={segmentPath}
            fill="#10b981"
            fillOpacity="0.6"
            stroke="#059669"
            strokeWidth="2"
            className="transition-all duration-300"
          />
        )}

        {/* 4. DIAMETER (if requested) */}
        {showDiameter && (
          <g>
            <line
              x1={ax}
              y1={ay}
              x2={diamX}
              y2={diamY}
              stroke="#0284c7"
              strokeWidth="2.5"
              strokeDasharray="6 3"
            />
            {/* Diameter label */}
            <circle cx={diamX} cy={diamY} r="4" fill="#0284c7" />
            <text
              x={diamX - 16}
              y={diamY}
              fontSize="12"
              fontWeight="600"
              fill="#0369a1"
              textAnchor="end"
              alignmentBaseline="middle"
            >
              A'
            </text>
            <text
              x={(diamX + ax) / 2 + 10}
              y={(diamY + ay) / 2 - 10}
              fontSize="11"
              fontWeight="bold"
              fill="#0284c7"
            >
              d = 2r
            </text>
          </g>
        )}

        {/* 5. RADII (Jari-jari OA & OB) */}
        {showRadius && (
          <g>
            {/* Radius OA */}
            <line
              x1={cx}
              y1={cy}
              x2={ax}
              y2={ay}
              stroke={highlight === 'radius' ? '#2563eb' : '#334155'}
              strokeWidth={highlight === 'radius' ? '3.5' : '2'}
              className="transition-all duration-200"
            />
            {/* Radius OB */}
            <line
              x1={cx}
              y1={cy}
              x2={bx}
              y2={by}
              stroke={highlight === 'radius' ? '#2563eb' : '#334155'}
              strokeWidth={highlight === 'radius' ? '3.5' : '2'}
              className="transition-all duration-200"
            />
            {/* Radius Label */}
            <text
              x={midOAx}
              y={midOAy}
              fontSize="12"
              fontWeight="bold"
              fill="#1e293b"
            >
              {customLabels.r || `r = ${r}`}
            </text>
          </g>
        )}

        {/* 6. CHORD (TALI BUSUR AB) */}
        {(showChord || highlight === 'chord' || showApothem || showSegment || showTriangle) && (
          <g>
            <line
              x1={ax}
              y1={ay}
              x2={bx}
              y2={by}
              stroke={highlight === 'chord' ? '#8b5cf6' : '#7c3aed'}
              strokeWidth={highlight === 'chord' ? '3.5' : '2.5'}
              className="transition-all duration-200"
            />
            {/* Midpoint M */}
            {showApothem && (
              <circle cx={mx} cy={my} r="3.5" fill="#e11d48" />
            )}
          </g>
        )}

        {/* 7. APOTHEM (OM) */}
        {(showApothem || highlight === 'apothem') && (
          <g>
            <line
              x1={cx}
              y1={cy}
              x2={mx}
              y2={my}
              stroke="#e11d48"
              strokeWidth="2.5"
              strokeDasharray="4 2"
              className="transition-all duration-200"
            />
            {/* Right Angle Symbol at M */}
            {rightAngleSymbol && (
              <path
                d={rightAngleSymbol}
                fill="none"
                stroke="#e11d48"
                strokeWidth="1.5"
              />
            )}
            {/* Apothem label */}
            <text
              x={midApothemX}
              y={midApothemY}
              fontSize="11"
              fontWeight="bold"
              fill="#be123c"
            >
              {customLabels.apothem || 'Apotema (a)'}
            </text>
            <text
              x={mx}
              y={my + 14}
              fontSize="10"
              fontWeight="bold"
              fill="#be123c"
              textAnchor="middle"
            >
              M
            </text>
          </g>
        )}

        {/* 8. ARC (BUSUR AB) */}
        {(showArc || highlight === 'arc' || showSector) && (
          <g>
            <path
              d={arcPath}
              fill="none"
              stroke={highlight === 'arc' ? '#ea580c' : '#f97316'}
              strokeWidth={highlight === 'arc' ? '4.5' : '3.5'}
              strokeLinecap="round"
              className="transition-all duration-200"
            />
            {/* Busur label */}
            <text
              x={midArcX}
              y={midArcY}
              fontSize="12"
              fontWeight="bold"
              fill="#c2410c"
              textAnchor="middle"
            >
              {customLabels.arc || 'Busur AB (s)'}
            </text>
          </g>
        )}

        {/* 9. CENTRAL ANGLE ARC & LABEL */}
        {showAngleArc && theta > 0 && (
          <g>
            <path
              d={angleArcPath}
              fill="#fbbf24"
              fillOpacity="0.25"
              stroke="#d97706"
              strokeWidth="1.5"
            />
            {/* Angle text */}
            <text
              x={cx + (angleArcRadius + 14) * Math.cos(rad(bisectorAngle))}
              y={cy + (angleArcRadius + 14) * Math.sin(rad(bisectorAngle))}
              fontSize="11"
              fontWeight="bold"
              fill="#b45309"
              textAnchor="middle"
            >
              {customLabels.theta || `θ = ${Math.round(theta)}°`}
            </text>
          </g>
        )}

        {/* 10. INSCRIBED ANGLE (SUDUT KELILING C) */}
        {showInscribed && (
          <g>
            {/* Line CA and CB */}
            <line
              x1={cx_pt}
              y1={cy_pt}
              x2={ax}
              y2={ay}
              stroke="#0891b2"
              strokeWidth="2"
              strokeDasharray="5 3"
            />
            <line
              x1={cx_pt}
              y1={cy_pt}
              x2={bx}
              y2={by}
              stroke="#0891b2"
              strokeWidth="2"
              strokeDasharray="5 3"
            />
            {/* Arc at C */}
            {inscribedArcPath && (
              <path
                d={inscribedArcPath}
                fill="none"
                stroke="#0891b2"
                strokeWidth="1.5"
              />
            )}
            {/* Point C */}
            <circle cx={cx_pt} cy={cy_pt} r="4.5" fill="#0891b2" stroke="#fff" strokeWidth="1.5" />
            <text
              x={labelCx}
              y={labelCy}
              fontSize="12"
              fontWeight="bold"
              fill="#0e7490"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {customLabels.C || 'C'}
            </text>
            <text
              x={cx_pt}
              y={cy_pt + 22}
              fontSize="10"
              fontWeight="bold"
              fill="#0891b2"
              textAnchor="middle"
            >
              ½θ = {Math.round(theta / 2)}°
            </text>
          </g>
        )}

        {/* 11. POINTS & POINT LABELS (O, A, B) */}
        {/* Point O */}
        {showCenter && (
          <g>
            <circle cx={cx} cy={cy} r="4.5" fill="#0f172a" stroke="#fff" strokeWidth="1.5" />
            <text
              x={cx - 10}
              y={cy - 10}
              fontSize="13"
              fontWeight="800"
              fill="#0f172a"
            >
              O
            </text>
          </g>
        )}

        {/* Point A */}
        <g>
          <circle cx={ax} cy={ay} r="4.5" fill="#2563eb" stroke="#fff" strokeWidth="1.5" />
          <text
            x={labelAx}
            y={labelAy}
            fontSize="12"
            fontWeight="bold"
            fill="#1d4ed8"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {customLabels.A || 'A'}
          </text>
        </g>

        {/* Point B */}
        <g>
          <circle cx={bx} cy={by} r="4.5" fill="#2563eb" stroke="#fff" strokeWidth="1.5" />
          <text
            x={labelBx}
            y={labelBy}
            fontSize="12"
            fontWeight="bold"
            fill="#1d4ed8"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {customLabels.B || 'B'}
          </text>
        </g>
      </svg>

      {/* Visual Legend / Data Strip */}
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-2 text-[11px] text-slate-600 font-medium">
        {showRadius && (
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-0.5 bg-slate-700 rounded" /> Jari-jari (r)
          </span>
        )}
        {showArc && (
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-0.5 bg-orange-500 rounded" /> Busur (s)
          </span>
        )}
        {showChord && (
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-0.5 bg-purple-600 rounded" /> Tali Busur (c)
          </span>
        )}
        {showApothem && (
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-0.5 bg-rose-600 rounded" /> Apotema (a)
          </span>
        )}
        {showSector && (
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2 bg-amber-300 border border-amber-500 rounded-sm" /> Juring
          </span>
        )}
        {showSegment && (
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2 bg-emerald-400 border border-emerald-600 rounded-sm" /> Tembereng
          </span>
        )}
        {showInscribed && (
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-0.5 bg-cyan-600 rounded" /> Sudut Keliling
          </span>
        )}
      </div>
    </div>
  );
};
