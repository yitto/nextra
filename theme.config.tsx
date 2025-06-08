import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span> 富田太阳城</span>,
  head: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let { title } = useConfig()
    if (title) {
      title += ' | Nextra v3 Template'
    }
    else title = 'Nextra v3 Template'
    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <link rel="icon" href="https://www.w3schools.com/favicon.ico" sizes="any" />
      </>
    )
  },
  nextThemes: {
    defaultTheme: 'light'
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
    autoCollapse: true
  },
  toc: {
    backToTop: true
  },
  color : {
    lightness : {dark : 30 , light : 45 } , 
    hue : {light : 274 , dark : 279  } ,
    saturation : {light : 100 , dark : 100} ,
  }
}

export default config
