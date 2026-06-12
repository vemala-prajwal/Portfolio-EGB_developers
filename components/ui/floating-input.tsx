'use client';

import { useState, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function FloatingInput({ label, error, className, id, value, onChange, ...props }: FloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const [internal, setInternal] = useState('');
  const inputId = id || label.toLowerCase().replace(/\s/g, '-');
  const currentValue = value !== undefined ? String(value) : internal;
  const active = focused || currentValue.length > 0;

  return (
    <div className="relative">
      <input
        id={inputId}
        {...props}
        value={currentValue}
        onChange={(e) => {
          if (value === undefined) setInternal(e.target.value);
          onChange?.(e);
        }}
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
        className={cn(
          'peer w-full rounded-2xl border bg-slate-950/60 px-4 pb-3 pt-6 text-sm text-white outline-none transition-all duration-300',
          error ? 'border-red-400/60 focus:border-red-400' : 'border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/15',
          className
        )}
      />
      <label
        htmlFor={inputId}
        className={cn(
          'pointer-events-none absolute left-4 transition-all duration-300',
          active ? 'top-2 text-[10px] uppercase tracking-[0.2em] text-accent2' : 'top-4 text-sm text-slate-400'
        )}
      >
        {label}
      </label>
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}

interface FloatingTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function FloatingTextarea({ label, error, className, id, value, onChange, ...props }: FloatingTextareaProps) {
  const [focused, setFocused] = useState(false);
  const [internal, setInternal] = useState('');
  const inputId = id || label.toLowerCase().replace(/\s/g, '-');
  const currentValue = value !== undefined ? String(value) : internal;
  const active = focused || currentValue.length > 0;

  return (
    <div className="relative">
      <textarea
        id={inputId}
        {...props}
        value={currentValue}
        onChange={(e) => {
          if (value === undefined) setInternal(e.target.value);
          onChange?.(e);
        }}
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
        className={cn(
          'peer w-full resize-none rounded-2xl border bg-slate-950/60 px-4 pb-3 pt-7 text-sm text-white outline-none transition-all duration-300',
          error ? 'border-red-400/60' : 'border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/15',
          className
        )}
      />
      <label
        htmlFor={inputId}
        className={cn(
          'pointer-events-none absolute left-4 transition-all duration-300',
          active ? 'top-2.5 text-[10px] uppercase tracking-[0.2em] text-accent2' : 'top-4 text-sm text-slate-400'
        )}
      >
        {label}
      </label>
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}
