export class JokeData {
    setup: string;
    punchline: string;
    storyline: string;
    hide: boolean;

    constructor(setup: string, punchline: string, storyline: string) {
        this.setup = setup;
        this.punchline = punchline;
        this.storyline = storyline;
        this.hide = true;
    }

    public toggle(): void {
        this.hide = !this.hide;
    }
}
