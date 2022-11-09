import { For, Component} from "solid-js";
import { store } from '@utils/store';
import type { POST } from '@utils/types';

export interface Props {
  articles: POST[]
}

export const TopArticles: Component<Props> = (props) => {

	function dateSyle(){ return store.lang === 'en' ? 'short' : 'long'};
	function nth(nb:number){
		return nb < 11 || nb > 13 ? nb + ['st', 'nd', 'rd', 'th'][Math.min((nb - 1) % 10, 3)] : nb + 'th';
	}

	return (
	<ul class="m-posts-list">
		<For each={props.articles}>{(post, i) =>
		<li>
			<a href={'/articles/'+post.slug}>
				{post.thumb &&
				<div class="m-posts-list_thumb">
					<img src={post.thumb} alt={store.lang === 'ja' ? post.titleJa : post.titleEn} />
				</div>
				}
				<p class="m-posts-list_category" innerHTML={store.lang === 'ja' ? post.cat_ja : post.cat}></p>
				<h2 class="title">{store.lang === 'ja' ? post.titleJa : post.titleEn}</h2>
				<p class="m-posts-list_date">
					{new Intl.DateTimeFormat('ja-JP', {dateStyle: dateSyle()}).format(new Date(post.date))}
					{post.lastModified &&
					<small> ({store.lang === 'ja' ? '更新：' : 'updated : '}{new Intl.DateTimeFormat('ja-JP', {dateStyle: dateSyle()}).format(new Date(post.lastModified))})</small>
					}
				</p>
				<p class="m-posts-list_desc" innerHTML={store.lang === 'ja' ? post.excerpt_ja : post.excerpt}></p>
				{post.series && store.lang === 'en' &&
				<p class="m-post-list_series">This article is the {nth(post.series_nb)} part of the [{post.series}] series.</p>
				}
				{post.series && store.lang === 'ja' &&
				<p class="m-post-list_series">この記事は[{post.series}]シリーズの{post.series_nb}番目の記事です。</p>
				}
				{post.tags && <div class="m-posts-list_tags">
				<For each={post.tags as string[]}>{(tag:string) =>
					<span>{tag}</span>
				}</For>
				</div>}
			</a>
		</li>
		}</For>
	</ul>
	)
};