import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId,token } from '../env'

export const client = createClient({
  projectId:"468c1a7v",
  dataset:"production",
  apiVersion:"2025-01-17",
  token,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
