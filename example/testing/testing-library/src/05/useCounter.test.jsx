import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';

import { useCounter } from './useCounter';

describe('useCounter Hook', () => {
  it('should increment', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
