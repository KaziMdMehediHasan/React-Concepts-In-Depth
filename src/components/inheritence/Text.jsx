import Emoji from './Emoji';

class Text extends Emoji {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        let newText = this.addEmoji("I'm practicing Inheritance in React", "<3");
        return (
            // using the parents render method
            super.render(newText)
        )
    }
}

export default Text;