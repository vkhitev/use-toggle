import { useState, useCallback, useEffect, useMemo } from 'react';

type Output = {
  isActive: boolean;
  on: () => void;
  off: () => void;
  toggle: () => void;
  reset: () => void;
};

export function useToggle(initial: boolean): Output {
  const [isActive, setActive] = useState(initial);

  useEffect(() => {
    setActive(initial);
  }, [initial]);

  const on = useCallback(() => {
    setActive(true);
  }, []);

  const off = useCallback(() => {
    setActive(false);
  }, []);

  const toggle = useCallback(() => {
    setActive(prev => !prev);
  }, []);

  const reset = useCallback(() => {
    setActive(initial);
  }, [initial]);

  return useMemo(() => ({ isActive, on, off, toggle, reset }), [
    isActive,
    off,
    on,
    reset,
    toggle,
  ]);
}
