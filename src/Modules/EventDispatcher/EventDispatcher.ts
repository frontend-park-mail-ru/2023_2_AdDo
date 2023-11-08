import { Callback } from '../../types';

/**
 * Класс работы с событиями приложения (cинглтон)
 * @class
 * @category EventDispatcher
 */
class EventDispatcher {

    /**
     * Event storage
     * @type {Map<string, Array<Function>>}
     */
    private events: Map<string, Array<Callback>>;


    /**
     * Create an EventDispatcher
     */
    public constructor() {
        this.events = new Map();
    }

    /**
     * Subscribe to an event
     * @param  {string} eventName 
     * @param  {Callback} callback 
     * @return {void}
     */
    public subscribe(eventName: string, callback: Callback): void {
        const callbackList = this.events.get(eventName);
        if (!callbackList) {
            this.events.set(eventName, [callback]);
            return;
        }
        callbackList.push(callback);
    }

    /**
     * Unsubscribe from an event
     * @param  {string} eventName 
     * @param  {Callback} callback 
     * @return {void}
     */
    public unsubscribe(eventName: string, callback: Callback): void {
        const callbackList = this.events.get(eventName);
        if (!callbackList) {
            return;
        }

        this.events.set(
            eventName,
            callbackList.filter(func => {
                return func !== callback;
            })
        );
    }

    /**
     * Emit an event
     * @param  {string} eventName 
     * @param  {?unknown} data 
     * @return {void}
     */
    public emit(eventName: string, data?: unknown): void {
        this.events.get(eventName)?.forEach(callback => {
            callback(data);
        });
    }
}

export default new EventDispatcher();