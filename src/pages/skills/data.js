import JsLogo from '../../assets/images/js.png'
import TsLogo from '../../assets/images/ts.png'
import CssLogo from '../../assets/images/css.jpg'
import HtmlLogo from '../../assets/images/html.svg'
import SassLogo from '../../assets/images/sass.png'
import ReactLogo from '../../assets/images/react.svg'
import SvelteLogo from '../../assets/images/svelte.png'
export const SKILLS_BY_NAME = (name) => {
    return SKILLS_DATA.find(skill => skill.slug=== name) || null
}

export const SHORT_SKILL_BY_SLUG = (slug) => {
  const findskill = SKILLS_DATA.map(skill => skill.slug === slug)
  if (!findskill) {
    return{}
  }
  return {
    id: findskill.id,
    slug: findskill.slug,
    label: findskill.label,
    image: findskill.image
  }
}

export const SKILLS_DATA = [
    {
      id: 0,
      slug: 'js',
      label: 'JavaScript',
      image: JsLogo,
      description: 'lorem ipsum',
      relatedExperience: []
    },
    {
      id: 1,
      slug: 'ts',
      label: 'TypeScript',
      image: TsLogo,
      description: 'lorem ipsum',
      relatedExperience: []
    },
    {
      id: 2,
      slug: 'css',
      label: 'CSS',
      image: CssLogo,
      description: 'lorem ipsum',
      relatedExperience: []
    },
    {
      id: 3,
      slug: 'html',
      label: 'HTML',
      image: HtmlLogo,
      description: 'lorem ipsum',
      relatedExperience: []
    },
    {
      id: 4,
      slug: 'sass',
      label: 'Sass',
      image: SassLogo,
      description: 'lorem ipsum',
      relatedExperience: []
    },
    {
      id: 5,
      slug: 'react',
      label: 'Reacr Js',
      image: ReactLogo,
      description: 'lorem ipsum',
      relatedExperience: []
    },
    {
      id: 6,
      slug: 'svelte',
      label: 'Svelte',
      image: SvelteLogo,
      description: 'lorem ipsum',
      relatedExperience: []
    },
  ]