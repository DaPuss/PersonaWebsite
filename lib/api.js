const WORKEXP_GRAPHQL_FIELDS = `
  title,
  company,
  keyActivities,
  description
  startDate,
  endDate,
`

const PROJECT_GRAPHQL_FIELDS = `
  title,
  company,
  keyActivities,
  description
  startDate,
`

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractWorkexp(fetchResponse) {
  return fetchResponse?.data?.workExperienceCollection?.items?.[0]
}

function extractWorkexpEntreis(fetchResponse) {
  return fetchResponse?.data?.workExperienceCollection?.items
}

export async function getWorkExperienceBySlug(company) {
  const entry = await fetchGraphQL(
    `query {
      workExperienceCollection(where: { company: "${company}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  )
  return extractWorkexp(entry)
}

export async function getAllWorkExpereience() {
  const entries = await fetchGraphQL(
    `workExperienceCollection(where: order: date_DESC, limit: 20) {
      items {
      postCollection(where: order: date_DESC) {
        items {
          ${WORKEXP_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractWorkexpEntreis(entries)
}

