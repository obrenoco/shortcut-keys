export declare enum Key {
    Shift = "shift",
    Control = "control",
    Command = "cmd",
    Alt = "alt",
    Space = "space",
    Enter = "enter"
}
export declare type ShortcutOptions = {
    prevent: boolean;
    multiPlatform: boolean;
    description: string;
};
declare type ShortcutValue = {
    options: ShortcutOptions;
    target: (e: KeyboardEvent) => void;
};
declare type HTMLElementWithEventListener = {
    addEventListener: Window["addEventListener"];
    removeEventListener: Window["removeEventListener"];
};
export declare const shortcutKeys: (element: HTMLElementWithEventListener) => {
    /**
     * @description Add event to element
     * @param shortcut - Required - Shortcut to trigger action. Example: "control+h" or ["control+h", "control+shift+h"]
     * @param handler - Required - Action triggered when shortcut is triggered. Example: () => console.log("hello");
     * @param options - Optional - Extra settings. Read the documentation {@link "https://www.npmjs.com/package/shortcut-keys"}
     */
    add: (shortcut: string | string[], handler: Function, options?: ShortcutOptions) => void;
    /**
     * @description Remove exists event to element
     * @param shortcut - Optional - Shortcut to trigger action. Example: "control+h" or ["control+h", "control+shift+h"]. When there is no data, all element events will be removed.
     */
    remove: (shortcut?: string) => void;
    /**
     * @description List all events of element
     * @returns Object with all active event information
     */
    list: () => Record<string, ShortcutValue>;
};
export {};
