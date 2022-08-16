import { CMS_NAME, CMS_URL } from '../../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col flex items-left mt-16 mb-16 md:mb-12">
      <h4 className="text-lg text-primaryHighlight md:text-2xl font-bold tracking-tighter leading-tight md:pr-8">
        Hi, my name is
      </h4>
      <h1 className="text-4xl text-primaryText md:text-8xl font-bold tracking-tighter leading-tight">
        Dylan Frewen.
      </h1>
      <h2 className="text-4xl text-primaryText md:text-8xl tracking-tighter leading-tight">
        I build things on the Internet.
      </h2>
      <h4 className="text-2xl text-primaryText md:text-4xl tracking-tighter leading-tight md:pr-8">
        Some random shit about me loving tech and really wanting to do cool
        stuff and how you should hire me
      </h4>
    </section>
  )
}

export default Intro
