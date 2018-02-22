import React, { Component } from 'react';
import styled from 'styled-components';
import { Card } from 'react-md/lib/Cards';

export default class ContentCard extends Component {
  render() {
    const StyledCard = styled(Card)`
      max-width: 900px;
    `;

    return(
      <div>
        <div style={{height:"84px"}}>
        </div>
        <StyledCard className='md-block-centered'>
          {this.props.children}
        </StyledCard>
      </div>
    );
  }
}