import { defineField, defineType } from 'sanity';

export const evenementType = defineType({
    name: 'evenement',
    title: 'Evenement',
    type: 'document',
    fields: [
        defineField({
            name: 'naam',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: { source: 'naam' }
        }),
        defineField({
            name: 'start',
            title: 'Start van evenement',
            type: 'datetime',
            validation: (rule) => rule.required().error("Broer je moet zeggen wanneer t start")
        }),
        defineField({
            name: 'einde',
            title: 'Einde van evenement',
            type: 'datetime',
        }),
        defineField({
            name: 'afbeelding',
            type: 'image',
        }),
        defineField({
            name: 'body',
            type: 'array',
            of: [{ type: 'block' }]
        })
    ],
})