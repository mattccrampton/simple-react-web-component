'use strict';

import React, { useState } from 'react'
// import { fuckme } from './lib/auth.js';
// const e = React.createElement;

const SimpleReactComponent = function(props) {
  // const { post_id, vote_score } = props
  // const [dummy_value, setThisVoteScore] = useState(parseInt(vote_score))
  // const [user_voted_direction, setUserVotedDirection] = useState(false)
  // const [vote_loading, setVoteLoading] = useState(false)


  const dummy_value = "If this works, we're in a web component!"

  // No votes yet
  return (
      <div>{dummy_value}</div>
  )

}

export default SimpleReactComponent
