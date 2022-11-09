/** @jsxImportSource solid-js */
import { For, Component, onMount, createSignal} from "solid-js";
import { store } from '@utils/store';
import { settings } from '@utils/settings';
import type { WORK } from '@utils/types';

const [works, setWorks] = createSignal([]);

export interface Props {
  works: WORK[];
}

export const TopWorks: Component = () => {
	fetch('http://niconoclaste.jp/lib/works/')
	.then((response) => response.json())
	.then((data) => {
		const maxWorks = settings.maxWorks;
		let filteredWorks = data.filter((work: WORK) => !work.hidden);
		filteredWorks = filteredWorks.filter((work: WORK) => work.top).sort((a: WORK, b: WORK) => new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : 0).slice(0, maxWorks)
		setWorks(filteredWorks);
	});
	
	return <ul class="m-works-list">
			<For each={works()}>{(work: WORK) =>
				<li>
					<a href={work.link} target="_blank" rel="noopener">
						{work.thumb.length && <div class="m-works-list_thumb">
							<img src={work.thumb} alt={work.title[store.lang]} class="img" loading="lazy" />
						</div>}
						<div class="m-works-list_body">
							<h2 class="title">{work.title[store.lang]}</h2>
							<p class="m-works-list_desc">
								<small>{work.client[store.lang] !== work.title[store.lang] ? '('+ work.client[store.lang]+ ') ' +work.date : work.date}</small>
							</p>
						</div>
						{work.techs.length && <div class="m-works-list_tags">
						<For each={work.techs}>{(tech:string) =>
							<span class="m-logo-icon" style={'background-image:var(--logo_'+tech+')'}>{tech}</span>
						}</For>
						</div>}
					</a>
				</li>
			}</For>
		</ul>;
};