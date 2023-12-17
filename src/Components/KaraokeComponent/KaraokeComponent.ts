import { Album, Artist, Song, User } from '../../types';
import template from './FavArtistsComponentTemplate.hbs';
import IComponent from '../IComponent/IComponent';
import hosts from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';

/** Class representing a CollectionComponent. */
export class favArtistsComponent extends IComponent {
	private text: string;
    public outputElement: HTMLElement | null = null;
    public nextLinesCount: number = 4;
	/**
	 * Constructs a new instance of the class.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 * @param {Array<Song>} songs - The array of songs.
	 */
	constructor(parent: HTMLElement) {
		super(parent, template({ }));
        this.text = '';
	}


	/**
	 * Returns an array of songs.
	 *
	 * @return {Array<Song>} An array of songs.
	 */
	public get Text(): string {
		return this.text;
	}

	/**
	 * Set the value of the Songs property.
	 *
	 * @param {Array<Song>} songs - An array of songs to be set.
	 */
	public set Text(text: string) {
		this.text = text;
		this.renderContent();
	}

    public printDynamicText(text: string) {
        const lines = text.split('\n');
        this.printInitialText(lines);
        lines.forEach((line, index) => {
            const delay = this.getTimeInSeconds(line);

            setTimeout(() => {
                let outputLines = this.outputElement!.innerHTML.split('<br>');
                outputLines.shift();
                outputLines[0] = `<span style="font-size: 75px; font-weight: bold; color: white">${outputLines[0]}</span>`;

                if (index + this.nextLinesCount >= lines.length) {
                    outputLines.push('');
                } else {
                    outputLines.push(this.getText(lines[index + this.nextLinesCount]));
                }
                this.outputElement!.innerHTML = outputLines.join('<br>');
            }, delay * 1000);
        });
    }

    public printInitialText(lines: string[]) {
        const initialFirstLine = '...';
        let initialLines = [initialFirstLine];

        lines.slice(0, this.nextLinesCount).forEach((line: string) => {
            initialLines.push(this.getText(line));
        });
        this.outputElement!.innerHTML = initialLines.join('<br>');
    }

    public getText(line: string) {
        const regex = /\[(\d+:\d+\.\d+)\]\s(.+)/;
        const match = line.match(regex);
        if (match) {
            return match[2];
        }
        return '';
    }

    public getTimeInSeconds(line: string) {
        const regex = /(\d+):(\d+\.\d+)/;
        const match = line.match(regex);
        if (match) {
            const minutes = parseInt(match[1]);
            const seconds = parseFloat(match[2]);
            return minutes * 60 + seconds;
        }
        return 0;
    }
	/**
	 * Renders the content of the element.
	 *
	 * @return {void} 
	 */
	public renderContent(): void {
		if (this.isMounted) {
			this.parent.innerHTML = '';
			this.printDynamicText(this.text);
		}
	}
}
