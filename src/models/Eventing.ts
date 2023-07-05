type Callback = () => void;

export class Eventing {
    private readonly events: { [key: string]: Callback[] } = {}

    /**
     * Function to register a event
     * @param event 
     * @param callback 
     */
    on(event: string, callback: Callback) : void {
        const handlers = this.events[event] || [];
        handlers.push(callback);
        this.events[event] = handlers
    }

    /**
     * Event Triggers
     * @param event
     */
    trigger(event: string): void {
        const handlers = this.events[event];

        if (handlers) {
            handlers.forEach(callback => callback())
        }
    }
}