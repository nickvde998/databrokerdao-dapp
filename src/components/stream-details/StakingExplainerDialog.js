import React, { Component } from 'react';
import { DialogContainer, Button } from 'react-md';

export default class StakingExplainerDialog extends Component {
  render(){
    return(
      <DialogContainer
        id="staking-explainer"
        visible={this.props.visible}
        onHide={this.props.hideEventHandler}
        focusOnMount={false}
        dialogStyle={{width:"560px",position:"relative",top:"160px",padding:"20px 20px 12px 20px",transform:"translate3d(-50%,0,0)",WebkitTransform:"translate3d(-50%,0,0)"}}
        aria-labelledby="About staking"
      >
        <h1>About staking and challenging</h1>
        <iframe width="100%" height="275" src="https://www.youtube-nocookie.com/embed/8YD__H9Nrj0?rel=0&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen style={{marginBottom:"12px"}}></iframe>
        <p>To list a stream on DataBroker DAO, the owner has to stake (to stake means commit/sent/lockup in this context) a certain amount of DTX tokens. These tokens are locked as a guarantee for good behavior by the data seller.</p>
        <p>A data buyer that is unhappy with the quality of data can challenge an entry in the registry by staking some DTX tokens. This challenge will be represented in the UI to all potential buyers as a negative reputation score.</p>
        <p>Upon reaching a certain threshold of challenges, a check of the data provider will be performed by a DataBroker DAO administrator. Upon finding issues with the advertised data, it’s stake is distributed equally over all challengers and the DataBroker DAO platform wallet. The entry is removed from the registry. If it is deemed that the data is sound, the staked tokens by the challengers get distributed to the data seller and the platform.</p>
        <Button flat primary swapTheming onClick={event => this.props.hideEventHandler()} style={{marginTop:"14px", float:"right"}}>Got it</Button>
      </DialogContainer>
    );
  }
}
