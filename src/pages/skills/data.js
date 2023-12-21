import JsLogo from '../../assets/images/js.png'
import TsLogo from '../../assets/images/ts.png'
import CssLogo from '../../assets/images/css.jpg'
import HtmlLogo from '../../assets/images/html.svg'
import SassLogo from '../../assets/images/sass.png'
import ReactLogo from '../../assets/images/react.svg'
import SvelteLogo from '../../assets/images/svelte.png'
export const SKILLS_BY_NAME = (name) => {
    return SKILLS_DATA.find(skill => skill.name === name) || null
}


export const SKILLS_DATA = [
    {
      id: 0,
      name: 'js',
      label: 'JavaScript',
      image: JsLogo,
      description: 'lorem ipsum',
      relatedExperience: []
    },
    {
      id: 1,
      name: 'ts',
      label: 'TypeScript',
      image: TsLogo,
      description: 'lorem ipsum',
      relatedExperience: []
    },
    {
      id: 2,
      name: 'css',
      label: 'CSS',
      image: CssLogo,
      description: 'lorem ipsum',
      relatedExperience: []
    },
    {
      id: 3,
      name: 'html',
      label: 'HTML',
      image: HtmlLogo,
      description: 'lorem ipsum',
      relatedExperience: []
    },
    {
      id: 4,
      name: 'sass',
      label: 'Sass',
      image: SassLogo,
      description: 'lorem ipsum',
      relatedExperience: []
    },
    {
      id: 5,
      name: 'react',
      label: 'Reacr Js',
      image: ReactLogo,
      description: 'lorem ipsum',
      relatedExperience: []
    },
    {
      id: 6,
      name: 'svelte',
      label: 'Svelte',
      image: SvelteLogo,
      description: 'lorem ipsum',
      relatedExperience: []
    },
  ]