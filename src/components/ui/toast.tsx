import * as React from "react"
import { cn } from "@/lib/utils"

export function Toast({ message }: { message: string }) {
  return (
    <div className={cn("bg-black text-white px-4 py-2 rounded shadow")}>
      {message}
    </div>
  )
}
