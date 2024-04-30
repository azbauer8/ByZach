import type { ReactNode } from "react"

import { pageHeaders, siteLinks } from "@/lib/consts"

export const BackgroundCanvas = ({ children }: { children?: ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "32px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          padding: "64px",
        }}
      >
        {children}
      </div>
    </div>
  )
}

export const ProfileContent = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", marginTop: "80px" }}>
        <img
          alt="Vercel"
          height={180}
          src={"https://byzach.dev/favicon.png"}
          width={180}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "48px",
          }}
        >
          <span
            style={{
              fontSize: "56px",
              color: "#222",
              paddingTop: "32px",
              fontFamily: "'Noto Sans', sans-serif",
              fontWeight: 700,
            }}
          >
            {pageHeaders.about.title}
          </span>
          <span
            style={{
              fontSize: "28px",
              color: "#222",
              fontFamily: "'Noto Sans', sans-serif",
              fontWeight: 500,
            }}
          >
            {pageHeaders.about.subtitle}
          </span>
        </div>
      </div>
      <span
        style={{
          fontSize: "18px",
          color: "#222",
          fontFamily: "'Noto Sans', sans-serif",
          fontWeight: 500,
        }}
      >
        {siteLinks.hereShort}
      </span>
    </div>
  )
}
