import {SHORT_SKILL_BY_SLUG} from '../../skills/data';
import jsLogo from '../../../assets/images/js.png';
import tsLogo from '../../../assets/images/ts.png';

import screenshot1 from '../../../assets/images/1.png';
import screenshot2 from '../../../assets/images/2.png';
import screenshot3 from '../../../assets/images/3.png';
import screenshot4 from '../../../assets/images/4.png';
import screenshot5 from '../../../assets/images/5.png';
import screenshot6 from '../../../assets/images/6.png';



export const SHORT_PROJECT_BY_SLUG = (id) => {
  const findproject = PROJECT_DATA.find(project => project.id === id)
  if (!findproject) {
    return {};
  } return {
    id: findproject.id,
    name: findproject.name,
    icon: findproject.icon,
    links: findproject.links,
    description: findproject.description,
    skills: findproject.skills,
    screenshots: findproject.screenshots,
  }
}

const PROJECT_DATA = [
    {
        id: 0,
        icon: jsLogo,
        name: 'Online Store',
        links: [
            {
                id:0,
                link:'https://github.com/Whereug0/my-shop',
                label: "GitHub",
            },
            {
              id: "1",
              link: "https://my-shop-wheat-delta.vercel.app/",
              label: "Ссылка на сайт(деплой)"
            }
        ],
        description: "Онлайн магазин разных видов товаров, данные взяты из общедоступного API.",
        skills: [
            SHORT_SKILL_BY_SLUG("js"),
            SHORT_SKILL_BY_SLUG("react"),
            SHORT_SKILL_BY_SLUG("html"),
            SHORT_SKILL_BY_SLUG("sass"),
        ],
        screenshots: [
          {
            id: "0",
            image: screenshot1,
          },
          {
            id: "1",
            image: screenshot2,
          },
          {
            id: "2",
            image: screenshot3,
          },
          {
            id: "3",
            image: screenshot4,
          },
          {
            id: "4",
            image: screenshot5,
          },
          {
            id: "5",
            image: screenshot6,
          },
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
        ]
      },
]


export default PROJECT_DATA