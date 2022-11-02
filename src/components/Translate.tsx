import { Component } from "solid-js";
import { store } from '@utils/store';

export interface Props {
  en: string;
  ja: string;
}

export const Translate: Component<Props> = (props) => {
  return <>
		{store.lang === 'en' && props.en || store.lang === 'ja' && props.ja}
	</>;
};