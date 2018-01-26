export class JokeData {
    setup: string;
    punchline: string;
    storyline: string;
    hide: boolean;

    constructor(setup: string, punchline: string, storyline: string, hide: boolean = false) {
        this.setup = setup;
        this.punchline = punchline;
        this.storyline = storyline;
        this.hide = hide;
    }

    public toggle(): void {
        this.hide = !this.hide;
    }
}
