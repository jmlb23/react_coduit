import { useState } from "react"

export function useStorage<T>(key: string): [T | null, (t: T | null) => void] {
  const [value, setValue] = useState<T | null>(null);

  return [value
    , (x) => {
      localStorage.setItem(key, JSON.stringify(x))
      const current = localStorage.getItem(key)
      setValue(current != null ? JSON.parse(current) : null)
    }
  ]
}