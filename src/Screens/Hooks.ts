import { useState } from "react"

export function useStorage<T>(key: string): [T | undefined, (t: T | undefined) => void] {
  const [value, setValue] = useState<T>();

  return [value
    , (x) => {
      localStorage.setItem(key, JSON.stringify(x))
      const current = localStorage.getItem(key)
      setValue(current != null ? JSON.parse(current) : null)
    }
  ]
}