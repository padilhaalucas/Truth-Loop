import policy from '../../../client/mockdata/CURRENT_FULL_RETRIEVAL_OF_ARTIFACT_1'

export default async function fetchPolicy(policyId) {
  if (process.env.VUE_APP_MOCK_DATA) {
    console.log('Using MOCK DATA for policy store')
    return policy
  } else {
    const apiUrl = process.env.VUE_APP_SERVER_URL || ''
    const policyFullDetailResponse = await fetch(`${apiUrl}/api/v1/legislativeArtifacts/fullDetail/${policyId}`)
    return policyFullDetailResponse.json()
  }
}