import { Component } from "solid-js";
import { store } from '@utils/store';

export interface Props {
  id: string;
  title: string;
  title_ja: string;
}

export const Snippet: Component<Props> = (props) => {
  return <>
		<h3 class="title">{store.lang === 'en' ? props.title : props.title_ja}</h3>
		<div class="m-codepen">
			<iframe scrolling="no" title={store.lang === 'en' ? props.title : props.title_ja} src={'https://codepen.io/niconoclaste/embed/'+props.id+'?default-tab=result'} frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
			</iframe>
		</div>
	</>;
};