const WORKEXP_GRAPHQL_FIELDS = `
title,
company,
listedActivities,
startDate,
endDate,
`
const PROJECTS_GRAPHQL_FIELDS = `
title,
description,
technology,
githubLink
websiteLink,
projectImage{
    title,
    url
  }
`

async function fetchGraphQL(query) {
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
    ).then((response) => {
        return response.json()
    })
}

function extractWorkexp(fetchResponse) {
    return fetchResponse?.data?.workExperienceCollection?.items?.[0]
}

function extractWorkexpEntreis(fetchResponse) {
    return fetchResponse?.data?.workExperienceCollection?.items
}

function extractProjectEntreis(fetchResponse) {
    return fetchResponse?.data?.projectCollection?.items
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

//TODO: get media image
export async function getAllProjects() {
    const entries = await fetchGraphQL(
        `{
          projectCollection {
            items {${PROJECTS_GRAPHQL_FIELDS}
            }
          }
        }`
    )
    return extractProjectEntreis(entries)
}
