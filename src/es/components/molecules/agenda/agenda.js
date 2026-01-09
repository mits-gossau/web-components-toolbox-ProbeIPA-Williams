import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class Agenda extends Shadow() {
    constructor(options = {}, ...args) {
        super({ importMetaUrl: import.meta.url, tabindex: 'no-tabindex', ...options }, ...args)
    }

    connectedCallback() {
        if (this.shouldRenderCSS()) this.renderCSS()
    }

    shouldRenderCSS() {
        return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
    }

    renderCSS() {
        this.css = /* css */`
        :host{
            display: flex;
            width: var(--width-custom, 100%);
            background: var(--background-color-custom, grey);
            gap: 2em;
            padding: var(--padding-custom, 2rem);
            border-radius: var(--border-radius-custom, 1rem);
        }
        .bold{
            font-weight: bold;
            color: var(--bold-text-color-custom, var(--color-tertiary, black));
            font-size: var(--bold-text-font-size-custom, 2rem);
        }
        .date{
            font-size: var(--date-font-size-custom, 1.5rem);
        }
        .title{
            font-size: var(--title-font-size-custom, 1.7rem);
            color: var(--title-color-custom, black);
            margin: 0;
        }
        .date-title{
            margin: 0;
            font-size: var(--date-title-font-size-custom, 1rem);
            font-weight: var(--date-title-font-weight-custom, light);
        }
        .top-left{
            display: flex;
            border-right: var(--left-border-right-color-custom, 2px solid black);
            padding-right: 2vw;
            flex-direction: column;
            justify-content: center;
            align-items: start;
        }
        .top-right{
            display: flex;
            flex-direction: row;
            gap: 1rem;
        }
        .sub-right{
            flex: 0.7;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: flex-end;
            align-items: flex-end;
            height: 100%;
        }

        .sub-left{
            flex: 1;
            display: flex;
            justify-content: start;
            flex-direction: column;
        }

    @media only screen and (max-width: _max-width_){
        .title{
            font-size: var(--mobile-title-font-size, large);
            text-align: center;
        }
        .image{
            border-radius: var(--mobile-image-border-radius, 0.3em);
        }

        .teaser-container {
            gap: var(--mobile-teaser-container-gap, 0.7em);

        }
        .row {
            gap: var(--mobile-row-gap, 0.7em);
            height: var(--mobile-row-height, 50vw);
        }

        .teaser-container {
            gap: var(--mobile-teaser-container-gap, 0.7em);
        }
        .column-right {
            gap: var(--mobile-column-right-gap, 0.7em);
        }
    }
        
   `
        return this.fetchTemplate()
    }

    fetchTemplate() {
        /** @type {import("../../web-components-toolbox/src/es/components/prototypes/Shadow.js").fetchCSSParams[]} */
        const styles = [
            {
                path: `${this.importMetaUrl}../../web-components-toolbox/src/css/reset.css`, // no variables for this reason no namespace
                namespace: false
            },
            {
                path: `${this.importMetaUrl}../../web-components-toolbox/src/css/style.css`, // apply namespace and fallback to allow overwriting on deeper level
                namespaceFallback: false
            }
        ]
        switch (this.getAttribute('namespace')) {
            case 'agenda-default-':
                return this.fetchCSS([{
                    path: `${this.importMetaUrl}./default-/default-.css`, // apply namespace since it is specific and no fallback
                    namespace: false
                }, ...styles])
            default:
                return this.fetchCSS([{
                    path: `${this.importMetaUrl}./default-/default-.css`, // apply namespace since it is specific and no fallback
                    namespace: false
                }, ...styles])
        }

    }
}
