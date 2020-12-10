import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "aixxtsmi",
    dataset: "production",
    useCdn: true
})
