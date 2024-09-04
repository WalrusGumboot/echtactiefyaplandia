import { defineField, defineType } from 'sanity';
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: "k6dkw0iw",
    dataset: "production",
    apiVersion: "2024-08-18",
    useCdn: false
});

export const galerijEntryType = defineType({
    name: 'galerijEntry',
    type: 'document',
    title: 'Galerij-item',
    fieldsets: [
        { name: 'bron', description: 'Koppeling van galerij-item' },
        { name: 'fotos', description: 'De foto\'s zelf' }
    ],
    fields: [
        defineField({
            type: 'string',
            name: 'naam',
            title: 'Naam',
            validation: (rule) => rule.required()
        }),
        defineField({
            fieldset: 'bron',
            name: 'hoortBijEvenement',
            type: 'boolean',
        }),
        defineField({
            fieldset: 'bron',
            name: 'evenement',
            type: 'reference',
            to: [{ type: 'evenement' }],
            options: { disableNew: true },
            hidden: ({ document }) => !(document?.hoortBijEvenement),
            // @ts-ignore
            // validation: (rule) => rule.custom((_field, { document: { hoortBijEvenement } }) => hoortBijEvenement)
        }),
        defineField({
            fieldset: 'bron',
            name: 'slug',
            type: 'slug',
            options: {
                source: async (doc: any) => {
                    if (doc.hoortBijEvenement) {
                        return await sanityClient.fetch(`*[_id == '${doc.evenement._ref}'].slug.current`)
                    } else {
                        return doc.naam;
                    }
                }
            },
            // validation: (rule) => rule.required()
        }),


        defineField({
            fieldset: 'fotos',
            name: 'fotos',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }]
        })
    ]
})