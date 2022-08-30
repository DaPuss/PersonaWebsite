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
  startDate
`

async function fetchGraphQL(query, preview = false) {
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
            },
            body: JSON.stringify({
                query: query,
            }),
        }
    ).then((response) => response.json())
}

function extractWorkexp(fetchResponse) {
    return fetchResponse?.data?.workExperienceCollection?.items?.[0]
}

function extractWorkexpEntreis(fetchResponse) {
    return fetchResponse?.data?.workExperienceCollection?.items
}

export async function getWorkExperienceByCompany(company) {
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
        `{
          workExperienceCollection(order: endDate_DESC, limit: 5) {
            items {${WORKEXP_GRAPHQL_FIELDS}
            }
          }
        }`
    )
    return extractWorkexpEntreis(entries)
}
