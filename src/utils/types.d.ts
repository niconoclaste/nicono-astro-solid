export type WORK = {
  id: string,         // work unique id
  top: boolean,       // show on top page ?
  hidden: boolean,    // hide ?
  status: string,     // online || offline
	modified: boolean,  // has been modified by another FE ?
  category?: string,  // full || template || mini || lp || parts
	specs?: string[],   // ! deprecated
  date: string,       // development date (YYYY/MM || YYYY)
  link?: string,      // site URL
  title: {
    en: string,       // site title (english)
    ja: string        // site title (japanese)
  },
  client: {
    en?: string,      // client name (english)
    ja?: string       // client name (japanese)
  },
  desc?: {
    en?: string,      // site description (english)
    ja?: string       // site description (english)
  },
  techs?: string[],   // list of used technologies
  thumb?: string      // URL of work thumbnail (site capture)
}

export type POST = {
	slug: string,
	titleEn: string,
	titleJa: string,
	date: string, // 'YYYY-MM-DD'
	lastModified?: string, // 'YYYY-MM-DD'
	excerpt: string,
	excerpt_ja: string,
	tags: string[],
	cat: string,
	cat_ja: string,
	series: string,
	series_nb: number,
	thumb: string,
	top: boolean,
	category: string,
	current: string,
	pageLayout: string,
	hidden?:boolean
}