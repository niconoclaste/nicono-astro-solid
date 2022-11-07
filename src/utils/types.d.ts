export type WORK = {
  id: string,
  top: boolean,
  hidden: boolean,
  status: string, // online || offline
	modified: boolean,
  category?: string, // full || template || mini || lp || parts
	specs?: string[], // deprecated
  date: string,
  link?: string, // site URL
  title: {
    en: string,
    ja: string
  },
  client: {
    en?: string,
    ja?: string
  },
  desc?: {
    en?: string,
    ja?: string
  },
  techs?: string[],
  thumb?: string
}