export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-17'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skwnE6q2PWvUPBaBIMCQxL8tnHO7b0Cq8AU0CIhxdrO8NkBAQpDDFE4CtUNyPrqbsSm21he5TMtBcWm2xgUVHzbo2TioBAvXC38MOOqjL2KIsLG57mDXmouZVALSTCTCoLj91HMcy0iCmu94q49gmWZG3H6gRQ1x6CL9T3JsXR9bQfEYpi6V",
  'Missing environment variable: NEXT_PUBLIC_SANITY_AUTH_TOKEN'
)


function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
