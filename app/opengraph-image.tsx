import { ImageResponse } from "next/og";

export const alt = "Human Rights Experts - Human Rights Expert Witness UK";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A2540",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Human Rights Experts
        </div>
        <p
          style={{
            marginTop: 32,
            fontSize: 36,
            fontWeight: 600,
            color: "#C8922A",
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          Human Rights Expert Witness UK
        </p>
      </div>
    ),
    { ...size },
  );
}
