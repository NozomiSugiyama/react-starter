import React from "react";
import styled from "styled-components";

const emojiList = ["(・－・)・・・", "(ノд・。) ", "(´；ω；`)", "(´･д･`)", "( ´･ω･)´･ω)(ω･`(･ω･` )"];

interface State {
    emoji: string;
}

export default class extends React.Component<React.HTMLAttributes<HTMLDivElement>, State> {
    state: State = {
        emoji: emojiList[Math.floor(Math.random() * emojiList.length)]
    };

    render() {
        return (
            <Host
                {...this.props}
                unselectable={undefined}
            >
                <h2>
                    {this.state.emoji}
                </h2>
                <h4>
                    Oops! Something is wrong...
                </h4>
            </Host>
        );
    }
}

const Host = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: inherit;
    > :nth-child(2) {
        margin-top: 1rem;
    }
`;
