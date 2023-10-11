import type { FeedConfigType } from './FeedTypes';
import { Component } from '../Component';
import { Song, Item } from '../../types';
import * as Handlebars from 'handlebars';
import {source} from './FeedTemplate'

/** Class representing a Feed. */
export class Feed extends Component{
	private content: Array<Song> = [];
	private port: string;
	protected items: Array<Item> = [];
	/**
     * Sets parent, config and port for images.
     * @param {HTMLElement} parent
     * @param {FeedConfigType} configFeed 
     */
	constructor(parent: HTMLElement, configFeed: FeedConfigType) {
		super(parent, configFeed);
		this.port = 'http://82.146.45.164:9000';
	}

	/**
     * Get the items.
     * @return {Array<Item>} items.
     */
	public get Items(): Array<Item> {
		return Object.entries(this.config).map(([key, { href, name}]) => ({
			key,
			href,
			name,
		}));
	}

	/**
     * Get the content.
     * @return {Array<Song>} content.
     */
	public get Content() : Array<Song> {
		return Object.entries(this.content).map(([key, { Id, Name, Artist, Album, Preview, Content }]) => ({
			key,
			Id,
			Name,
			Artist,
			Album,
			Preview,
			Content,
		}));
	}
	/**
     * Set the content.
     * @param {Array<Song>} content.
     */
	public set Content(content: Array<Song>) {
		this.content = content;
	}

	/**
    * Render Feed.
    */
	public render(): void {
		const items = this.Items.map((element) => {
			return {...element, className: 'feedItem'};
		});

		const content = this.Content.map((element) => {
			return {...element, className: 'contentItem', port: this.port};
		});

		const template = Handlebars.compile(source);
		this.parent.innerHTML = template({items, content});
	}
}
