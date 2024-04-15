import JsLogo from '../../assets/images/js.png'
import TsLogo from '../../assets/images/ts.png'
import CssLogo from '../../assets/images/css.jpg'
import HtmlLogo from '../../assets/images/html.svg'
import SassLogo from '../../assets/images/sass.png'
import ReactLogo from '../../assets/images/react.svg'


export const SKILLS_BY_NAME = (name) => {
    return SKILLS_DATA.find(skill => skill.slug === name) || null
}

export const SHORT_SKILL_BY_SLUG = (slug) => {
  const findskill = SKILLS_DATA.find(skill => skill.slug === slug)
  if (!findskill) {
    return{};
  }
  return {
    id: findskill.id,
    slug: findskill.slug,
    label: findskill.label,
    image: findskill.image,
  }
}

export const SKILLS_DATA = [
    {
      id: 0,
      slug: 'js',
      label: 'JavaScript',
      image: JsLogo,
      description: 'JavaScript — это язык программирования, который в первую очередь применяют в вебе. С его помощью сайты делают интерактивными: добавляют всплывающие окна, анимацию, кнопки лайков и формы для отправки информации. Его ещё называют главным языком фронтенда — «лицевой» стороны сайта, с которой взаимодействуют пользователи.',
      relatedExperience: []
    },
    {
      id: 1,
      slug: 'ts',
      label: 'TypeScript',
      image: TsLogo,
      description: 'TypeScript — это строго типизированный язык программирования, построенный на JavaScript. Разработчики добавили в него дополнительные возможности, такие как статическая типизация, классы и модули, чтобы создавать более надежные и поддерживаемые программы. TypeScript позволяет выявлять ошибки на этапе разработки, облегчает совместную работу в команде и улучшает производительность разработки в больших проектах.',
      relatedExperience: []
    },
    {
      id: 2,
      slug: 'css',
      label: 'CSS',
      image: CssLogo,
      description: 'CSS (англ. Cascading Style Sheets — «каскадные таблицы стилей») — формальный язык декодирования и описания внешнего вида документа (веб-страницы), написанного с использованием языка разметки (чаще всего HTML или XHTML). Также может применяться к любым XML-документам, например, к SVG или XUL.Основная цель разработки CSS — ограждение и отделение описания логической структуры веб-страницы от описания внешнего вида этой веб-страницы. Такое разделение может увеличить доступность документа, предоставить большую гибкость и возможность управления его представлением, а также уменьшить сложность и повторяемость в структурном содержимом.',
      relatedExperience: []
    },
    {
      id: 3,
      slug: 'html',
      label: 'HTML',
      image: HtmlLogo,
      description: 'HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. С помощью HTML можно создавать разные конструкции, изображения и другие объекты, такие как интерактивная веб-форма, встраивать их в отображаемую страницу. HTML предоставляет средства для создания заголовков, абзацев, списков, ссылок, цитат и других элементов.',
      relatedExperience: []
    },
    {
      id: 4,
      slug: 'sass',
      label: 'Sass',
      image: SassLogo,
      description: 'Sass — это метаязык (язык для описания другого языка), который упрощает и ускоряет написание CSS-кода. Его часто называют препроцессором CSS. Sass имеет свой синтаксис, из которого генерирует CSS-код, понятный любому браузеру. Препроцессор Sass помогает: сделать CSS-код понятнее и проще, его легче масштабировать, обновлять и поддерживать; расширить функциональность. С помощью Sass можно использовать CSS-константы, встроенные функции, вложенные правила, примеси (смешанные стили), наследование и так далее; избежать многократного повторения одинаковых фрагментов кода. Это экономит время разработчика, уменьшает объём файлов стилей и ускоряет обработку страниц.',
      relatedExperience: []
    },
    {
      id: 5,
      slug: 'react',
      label: 'React',
      image: ReactLogo,
      description: 'React — это библиотека JavaScript с открытым кодом для создания внешних пользовательских интерфейсов. В отличие от других библиотек JavaScript, предоставляющих полноценную платформу приложений, React ориентируется исключительно на создание представлений приложений через инкапсулированные единицы (называются компонентами), которые сохраняют состояние и генерируют элементы пользовательского интерфейса.',
      relatedExperience: []
    },
  ]