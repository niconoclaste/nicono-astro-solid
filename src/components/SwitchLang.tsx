import { Component } from "solid-js";
import { store } from '@utils/store';

export interface Props {
  en: string | HTMLElement;
  ja: string | HTMLElement;
}

export const SwitchLang: Component<Props> = (props) => {
  return <>
		{store.lang === 'en' && props.en || store.lang === 'ja' && props.ja}
	</>;
};