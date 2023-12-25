import {SHORT_SKILL_BY_SLUG} from '../../skills/data'
import jsLogo from '../../../assets/images/js.png'
import tsLogo from '../../../assets/images/ts.png'
import svelteLogo from '../../../assets/images/svelte.png'

const PROPJECT_DATA = [
    {
        id: 0,
        icon: jsLogo,
        name: 'Project 1',
        link: [
            {
                id:0,
                link:'https://github.com/Whereug0',
                label: "GitHub",
            }
        ],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!",
        skills: [
            SHORT_SKILL_BY_SLUG("Js"),
            SHORT_SKILL_BY_SLUG("Ts")
        ]
    },
    {
        id: 1,
        icon: tsLogo,
        name: 'Project 2',
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
        ]
      },
      {
        id: 2,
        icon: svelteLogo,
        name: 'Project 3',
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
        ]
      }

]


export default PROPJECT_DATA