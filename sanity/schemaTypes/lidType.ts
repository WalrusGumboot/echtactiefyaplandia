import { defineField, defineType } from 'sanity';

export const lidType = defineType({
    name: 'lid',
    title: 'Lid',
    type: 'document',
    fields: [
        defineField({
            name: 'naam',
            type: 'string'
        }),
        defineField({
            name: 'functie',
            type: 'string'
        }),
        defineField({
            name: 'image',
            type: 'image'
        }),
        defineField({
            name: 'level',
            type: 'string',
            options: {
                list: ["Yapper", "Actief Yapper", "Echt Actief Yapper"],
                layout: "radio"
            }
        })
    ]
})