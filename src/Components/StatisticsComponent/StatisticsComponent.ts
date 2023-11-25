import { Album } from '../../types';
import template from './StatisticsComponentTemplate.hbs';
import IComponent from '../IComponent/IComponent';
import hosts from '../../HostConsts';

/** Class representing a AlbumComponent. */
export class StatisticsComponent extends IComponent {
	private statistics: Array<{question: string, avg: number}>;

	/**
	 * Constructor for the class.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 * @param {Album} album - The album object.
	 */
	constructor(parent: HTMLElement, statistics: Array<{question: string, avg: number}>) {
		super(parent, template({ statistics, port: hosts.s3HOST }));
		this.statistics = statistics;
	}

	/**
	 * Retrieves the Album.
	 *
	 * @return {Album} The Album object.
	 */
	public get Statistics(): Array<{question: string, avg: number}> {
		return this.statistics;
	}

	/**
	 * Sets the album for this object.
	 *
	 * @param {Album} album - The album to set.
	 */
	public set Statistics(statistics: Array<{question: string, avg: number}>) {
		this.statistics = statistics;
		this.renderContent();
	}

	/**
	 * Renders the content of the element.
	 *
	 * @return {void} 
	 */
	public renderContent(): void {
		this.parent.innerHTML = '';
		this.parent.innerHTML = template({ Questions: this.statistics, port: hosts.s3HOST });
	}
}
