import {SHORT_SKILL_BY_SLUG} from '../../skills/data'
import jsLogo from '../../../assets/images/js.png'
import tsLogo from '../../../assets/images/ts.png'
import svelteLogo from '../../../assets/images/svelte.png'



export const PROJECTS_BY_NAME = (name) => {
  return PROJECT_DATA.find(project => project.slug === name) || null
}

export const SHORT_PROJECT_BY_SLUG = (slug) => {
const findproject = PROJECT_DATA.find(project => project.slug === slug)
if (!findproject) {
  return{}
}
return {
  id: findproject.id,
  slug: findproject.slug,
  label: findproject.label,
  image: findproject.image
}
}

const PROJECT_DATA = [
    {
        id: 0,
        icon: jsLogo,
        name: 'Project1',
        links: [
            {
                id:0,
                link:'https://github.com/Whereug0',
                label: "GitHub",
            }
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!",
        skills: [
            SHORT_SKILL_BY_SLUG("js"),
            SHORT_SKILL_BY_SLUG("ts")
        ]
    },
    {
        id: 1,
        icon: tsLogo,
        name: 'Project2',
        links: [
          {
            id: 0,
            link: 'https://github.com',
            label: 'Github'
          }
        ],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
        skills: [
          SHORT_SKILL_BY_SLUG('js'),
          SHORT_SKILL_BY_SLUG('ts'),
          SHORT_SKILL_BY_SLUG('svelte')
        ]
      },
      {
        id: 2,
        icon: svelteLogo,
        name: 'Project3',
        links: [
          {
            id: 0,
            link: 'https://github.com',
            label: 'Github'
          }
        ],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
        skills: [
          SHORT_SKILL_BY_SLUG('js'),
          SHORT_SKILL_BY_SLUG('ts'),
          SHORT_SKILL_BY_SLUG('css'),
          SHORT_SKILL_BY_SLUG('svelte')
        ]
      }

]


export default PROJECT_DATA