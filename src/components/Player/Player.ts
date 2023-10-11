import { Component } from '../Component';
import './Player.hbs';
import * as Handlebars from 'handlebars';
import { Song, Item, Artist, Album } from '../../types';
import { PlayerConfigType } from './PlayerTypes';

/** Class representing a Header. */
export class Player extends Component {
    protected items: Array<Item> = [];
    private port: string;

    /**
     * Sets parent, config and port for images.
     * @param {HTMLElement} parent
     * @param {PlayerConfigType} PlayerConfig 
     */
    constructor(parent: HTMLElement, PlayerConfig: PlayerConfigType) {
		super(parent, PlayerConfig);
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
	/*
    * Render Player.
    */
	public render(song: Song = {Id: 0, Name: '', Artist: {Id: 0, Name: '', Avatar: '',}, Album: {Id: 0, Name: '', Preview: '',}, Preview: '', Content: ''}): void {
        const items = this.items.map((element) => {
			return {...element};
		});
        
		const template = Handlebars.compile('./Player.hbs');
		this.parent.innerHTML = template({items, song, port: this.port});
	}
}

