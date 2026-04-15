'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'

// ─── Types ────────────────────────────────────────────────────────────────────

export type FeedbackSeverity = 'critical' | 'major' | 'minor'
export type FeedbackStatus   = 'new' | 'in_review' | 'implemented' | 'closed'

export interface FeedbackCardProps {
  id: string
  title: string
  description: string
  component: string
  severity: FeedbackSeverity
  status: FeedbackStatus
  author: { name: string; avatar?: string }
  createdAt: Date
  /** Position dans une liste — active le stagger d'entrée */
  index?: number
  onStatusChange?: (id: string, newStatus: FeedbackStatus) => void
}

// ─── Config ───────────────────────────────────────────────────────────────────

const SEVERITY_CONFIG: Record<FeedbackSeverity, { dot: string; text: string; label: string }> = {
  critical: { dot: 'bg-red-500',    text: 'text-red-400',    label: 'CRIT'  },
  major:    { dot: 'bg-amber-400',  text: 'text-amber-400',  label: 'MAJOR' },
  minor:    { dot: 'bg-slate-500',  text: 'text-slate-400',  label: 'MINOR' },
}

const STATUS_CONFIG: Record<FeedbackStatus, {
  label: string
  style: string
  next: FeedbackStatus | null
  action: string | null
}> = {
  new:         { label: 'NEW',         style: 'bg-blue-500/15 text-blue-400',       next: 'in_review',   action: 'Mark In Review'   },
  in_review:   { label: 'IN REVIEW',   style: 'bg-amber-500/15 text-amber-400',     next: 'implemented', action: 'Mark Implemented' },
  implemented: { label: 'IMPLEMENTED', style: 'bg-emerald-500/15 text-emerald-400', next: 'closed',      action: 'Close'            },
  closed:      { label: 'CLOSED',      style: 'bg-slate-500/15 text-slate-400',     next: null,          action: null               },
}

const MONO: React.CSSProperties = { fontFamily: 'var(--font-plex-mono, var(--font-geist-mono))' }
const SANS: React.CSSProperties = { fontFamily: 'var(--font-plex-sans, var(--font-geist-sans))' }

// ─── Component ────────────────────────────────────────────────────────────────

export function FeedbackCard({
  id, title, description, component, severity,
  status: initialStatus, author, createdAt,
  index = 0, onStatusChange,
}: FeedbackCardProps) {
  const [status, setStatus] = useState<FeedbackStatus>(initialStatus)
  const shouldReduce = useReducedMotion()

  const sev      = SEVERITY_CONFIG[severity]
  const stat     = STATUS_CONFIG[status]
  const isClosed = status === 'closed'

  const formattedDate = new Intl.DateTimeFormat('en', {
    month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false,
  }).format(createdAt)

  const handleAction = () => {
    if (!stat.next) return
    setStatus(stat.next)
    onStatusChange?.(id, stat.next)
  }

  return (
    <motion.article
      initial={shouldReduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: isClosed ? 0.45 : 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut', delay: shouldReduce ? 0 : index * 0.06 }}
      className="rounded-md border border-[#2A2B2E] bg-[#161719] p-4"
      style={SANS}
      aria-label={`Feedback: ${title}`}
    >
      {/* ── Header ── */}
      <div className="flex items-center justify-between mb-3">
        {/* Severity + component path */}
        <div className="flex items-center gap-2 min-w-0">
          <span
            className={`h-2 w-2 rounded-full shrink-0 ${sev.dot}`}
            aria-hidden="true"
          />
          <span className={`text-[10px] font-medium shrink-0 ${sev.text}`} style={MONO}>
            {sev.label}
          </span>
          <span className="text-[#2E3038] text-[10px] shrink-0" style={MONO}>/</span>
          <span className="text-xs text-[#4A4D56] truncate" style={MONO}>
            {component}
          </span>
        </div>

        {/* Status badge — animated on change */}
        <AnimatePresence mode="wait">
          <motion.span
            key={status}
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className={`shrink-0 ml-3 text-[10px] font-medium tracking-wide px-2 py-0.5 rounded ${stat.style}`}
            style={MONO}
          >
            {stat.label}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* ── Body ── */}
      <div className="mb-3">
        <h3 className="text-sm font-semibold text-[#E8E9EB] mb-1 leading-snug">{title}</h3>
        <p className="text-sm text-[#6B6E7A] leading-relaxed">{description}</p>
      </div>

      {/* ── Separator ── */}
      <div className="border-t border-[#1F2024] mb-3" />

      {/* ── Footer ── */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          {/* Avatar — image si disponible, initiale sinon */}
          {author.avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={author.avatar}
              alt={author.name}
              width={20}
              height={20}
              className="h-5 w-5 shrink-0 rounded-full object-cover"
            />
          ) : (
            <div
              className="h-5 w-5 shrink-0 rounded-full bg-[#2A2B2E] flex items-center justify-center text-[10px] text-[#6B6E7A] font-medium"
              aria-hidden="true"
            >
              {author.name.charAt(0).toUpperCase()}
            </div>
          )}
          <span className="text-xs text-[#6B6E7A] truncate">{author.name}</span>
          {/* FIX: timestamp en #4A4D56 — ratio ~3.5:1 sur #161719, lisible */}
          <span className="text-xs text-[#4A4D56] shrink-0" style={MONO}>
            · {formattedDate}
          </span>
        </div>

        {/* Action contextuelle */}
        {stat.action && (
          <button
            onClick={handleAction}
            className="shrink-0 text-xs text-[#4A4D56] hover:text-[#E8E9EB] transition-colors duration-150 font-medium"
          >
            {stat.action} →
          </button>
        )}
      </div>
    </motion.article>
  )
}
